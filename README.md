# VisorTerminal

Un emulador de terminal moderno y visualmente atractivo que corre directamente en tu navegador. Construido como una alternativa ligera a las pesadas aplicaciones de terminal de escritorio — sin Electron, sin bloat.

![VisorTerminal](https://img.shields.io/badge/plataforma-macOS-lightgrey) ![Node](https://img.shields.io/badge/node-%3E%3D18-green) ![Licencia](https://img.shields.io/badge/licencia-ISC-blue)

---

## Características

- **Múltiples sesiones** — abre tantas terminales como necesites, listadas en el sidebar como una app de chat. Cambia entre ellas al instante.
- **Vista dividida** — visualiza dos terminales lado a lado con un divisor arrastrable.
- **Renombrar sesiones** — doble clic en el nombre de cualquier terminal (sidebar o barra superior) para renombrarla.
- **6 temas** — Dracula, Tokyo Night, Nord, Catppuccin, Monokai, GitHub Dark.
- **Totalmente personalizable** — tamaño y familia de fuente, estilo del cursor, fondo (gradiente, sólido o imagen personalizada), opacidad del terminal.
- **Ajustes persistentes** — todas las preferencias se guardan en `localStorage` y se restauran al reabrir.
- **Memoria de sesiones** — los nombres y la cantidad de terminales abiertas se restauran al reabrir la app.
- **Atajos de teclado** — navega y gestiona tus terminales sin tocar el mouse.
- **Apertura automática** en tu navegador predeterminado al iniciar.

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Backend | Node.js + Express |
| Proceso de terminal | `@homebridge/node-pty-prebuilt-multiarch` (pseudo-terminal) |
| Comunicación en tiempo real | WebSocket (`ws`) |
| Renderizado del terminal | [xterm.js](https://xtermjs.org/) v5 |
| Frontend | HTML + CSS + JavaScript puro (sin frameworks) |

La arquitectura es simple:

```
Navegador (xterm.js UI) ←── WebSocket ──→ Node.js ←── node-pty ──→ tu shell (zsh/bash)
```

Cada sesión de terminal es un proceso de shell real — soporte completo de colores, programas interactivos (vim, htop, claude, etc.) funcionan sin configuración adicional.

---

## Requisitos

- **Node.js** v18 o superior ([descargar](https://nodejs.org))
- **macOS** (Linux también debería funcionar; Windows no probado)
- Un navegador moderno (Chrome, Firefox, Safari, Edge)

---

## Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/Rollffin/visorTerminal.git
cd visorTerminal

# 2. Instala las dependencias
npm install

# 3. Inicia la app
npm start
```

La app se abrirá automáticamente en tu navegador predeterminado en `http://localhost:3030`.

---

## Atajos de teclado

| Atajo | Acción |
|---|---|
| `⌘⇧T` / `Ctrl⇧T` | Nueva terminal |
| `⌘⇧W` / `Ctrl⇧W` | Cerrar terminal actual |
| `⌘⇧D` / `Ctrl⇧D` | Activar/desactivar vista dividida |
| `⌘⇧]` / `Ctrl⇧]` | Terminal siguiente |
| `⌘⇧[` / `Ctrl⇧[` | Terminal anterior |
| `⌘1–9` / `Ctrl1–9` | Cambiar a terminal por número |

---

## Personalización

Abre **Ajustes** (parte inferior del sidebar) para modificar:

- **Tema** — 6 esquemas de color incluidos
- **Fuente** — tamaño y familia
- **Fondo** — gradiente del tema, color sólido o URL de imagen personalizada
- **Opacidad del terminal** — de 50% a 100%
- **Cursor** — bloque, subrayado o barra, con parpadeo opcional

Todos los ajustes se guardan automáticamente.

---

## Cambiar el puerto

Edita las últimas líneas de `server.js`:

```js
const PORT = 3030; // cámbialo aquí
```

---

## Estructura del proyecto

```
visorTerminal/
├── server.js          # Backend Node.js — WebSocket + node-pty
└── public/
    ├── index.html     # Estructura de la app
    ├── style.css      # Temas y estilos
    └── app.js         # Gestión de terminales, ajustes, atajos
```

---

Construido por **Rollffin Guiroa**.
