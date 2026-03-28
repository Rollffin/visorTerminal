const express = require('express');
const { WebSocketServer } = require('ws');
const pty = require('@homebridge/node-pty-prebuilt-multiarch');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

app.use(express.static(path.join(__dirname, 'public')));

wss.on('connection', (ws) => {
  const sessions = new Map(); // sessionId -> ptyProcess

  function createSession(sessionId, cwd) {
    const shell = process.env.SHELL || '/bin/zsh';
    const proc = pty.spawn(shell, [], {
      name: 'xterm-256color',
      cols: 120,
      rows: 40,
      cwd: cwd || process.env.HOME,
      env: { ...process.env, TERM: 'xterm-256color', COLORTERM: 'truecolor' },
    });

    proc.onData((data) => {
      if (ws.readyState === ws.OPEN) {
        ws.send(JSON.stringify({ type: 'output', sessionId, data }));
      }
    });

    proc.onExit(({ exitCode }) => {
      sessions.delete(sessionId);
      if (ws.readyState === ws.OPEN) {
        ws.send(JSON.stringify({ type: 'session-exit', sessionId, code: exitCode }));
      }
    });

    sessions.set(sessionId, proc);
  }

  // Sesión inicial
  const firstId = 'session-1';
  createSession(firstId, process.env.HOME);
  ws.send(JSON.stringify({ type: 'session-created', sessionId: firstId }));

  ws.on('message', (raw) => {
    try {
      const msg = JSON.parse(raw);

      if (msg.type === 'create-session') {
        const sessionId = `session-${Date.now()}`;
        createSession(sessionId, process.env.HOME);
        ws.send(JSON.stringify({ type: 'session-created', sessionId }));

      } else if (msg.type === 'input') {
        const proc = sessions.get(msg.sessionId);
        if (proc) proc.write(msg.data);

      } else if (msg.type === 'resize') {
        const proc = sessions.get(msg.sessionId);
        if (proc) proc.resize(Math.max(1, msg.cols), Math.max(1, msg.rows));

      } else if (msg.type === 'kill-session') {
        const proc = sessions.get(msg.sessionId);
        if (proc) { proc.kill(); sessions.delete(msg.sessionId); }
      }
    } catch (e) { /* ignorar */ }
  });

  ws.on('close', () => {
    sessions.forEach(proc => proc.kill());
    sessions.clear();
  });
});

const PORT = 3030;
server.listen(PORT, () => {
  console.log(`\n  VisorTerminal corriendo en → http://localhost:${PORT}\n`);
  const { exec } = require('child_process');
  exec(`open http://localhost:${PORT}`);
});
