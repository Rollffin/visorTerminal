// ── Frases motivacionales ─────────────────────────────────────────────────────
const FRASES = [
  // ── Developer humor ───────────────────────────────────
  "El código no se escribe solo… o sí?",
  "Bug encontrado = feature eliminado.",
  "Funciona en mi máquina. ¯\\_(ツ)_/¯",
  "99 bugs en el código, corriges uno... 127 bugs en el código.",
  "El mejor código es el que no escribes.",
  "Primero hazlo funcionar, luego hazlo bonito.",
  "Git blame: el arte de encontrar al culpable.",
  "La documentación es como el seguro: nadie lo quiere hasta que lo necesita.",
  "console.log('por qué no funciona???')",
  "Un café más y lo termino. (Lleva 6 cafés.)",
  "Si funciona, no lo toques.",
  "El deploy del viernes: vivir peligrosamente.",
  "Ctrl+Z es mi mejor amigo.",
  "La solución estaba en Stack Overflow todo el tiempo.",
  "Código limpio hoy, pesadilla mañana.",
  "npm install y a rezar.",
  "El usuario siempre encuentra la forma de romperlo.",
  "Move fast and break things (ya lo rompiste).",
  "Todo es un problema de cache... o de DNS.",
  "Hoy sí termino a las 5pm. (Son las 11pm.)",
  // ── Batch 2: 100 nuevas ───────────────────────────────
  "Semicolon missing. Vida arruinada.",
  "El QA encontró el bug en producción. Típico.",
  "Rebase o merge? Sí.",
  "undefined is not a function. Clásico.",
  "Código heredado: escrito por fantasmas, mantenido por víctimas.",
  "El sprint termina el viernes. Hoy es jueves. Todo bien.",
  "Estimé 2 horas. Llevo 3 días.",
  "Funciona. No sé por qué. No preguntés.",
  "La solución fue apagar y encender el servidor.",
  "Este código fue escrito a las 3am. Se nota.",
  "Stack Overflow caído. Apagamos todo.",
  "El cliente quiere cambios 'pequeños'. (Son 3 semanas de trabajo.)",
  "Mergué a main directamente. YOLO.",
  "El test pasa. El código está mal. Filosofía.",
  "Null pointer exception: el clásico del clásico.",
  "var, let o const. La eterna discusión.",
  "10 tabs abiertos de Stack Overflow, 0 soluciones.",
  "El regex funciona en regexr pero no en prod. Obvio.",
  "git stash pop. Dios, ¿qué hice?",
  "El PM dijo 'es rápido'. Nunca es rápido.",
  "Me fui a almorzar y el build se rompió solo.",
  "El bug existe desde 2019. Es feature ahora.",
  "Docker: porque en mi máquina sí funciona.",
  "La API cambió sin avisar. Sorpresa.",
  "Comenté el código. El código me ignora igual.",
  "CI/CD rojo por una coma. Excelente.",
  "404: motivación no encontrada.",
  "El deploy fue exitoso. El cliente dijo lo contrario.",
  "Programar: 10% código, 90% stackoverflow y café.",
  "¿Revisaste si está enchufado? ...No.",
  "git commit -m 'fix'... fix de qué, ya no sé.",
  "El usuario hizo clic donde no debía. Siempre.",
  "Llevan 3 reuniones hablando de lo que podrían estar haciendo.",
  "El servidor cayó a las 2am de un viernes. Por supuesto.",
  "Borré la rama equivocada. Todo está bien.",
  "El código funciona en staging. En prod llorar.",
  "Unit tests: para sentirse bien, no para que funcione.",
  "Me pidieron estimar algo que nunca he hecho. Dije 2 semanas. Son 2 meses.",
  "chmod 777 y seguimos.",
  "sudo make me a sandwich. El único comando que importa.",
  "El loop infinito es una forma de persistencia.",
  "Refactorizar sin tests es como conducir con los ojos cerrados.",
  "El proyecto está 90% listo... lleva 6 meses al 90%.",
  "La reunión que pudo ser un email que pudo ser un Slack.",
  "pip install funcionó. Hoy es un buen día.",
  "Breakpoint en producción. Una vez. Solo una vez.",
  "El ingeniero senior también googlea. Todo el tiempo.",
  "Escribí una función de 400 líneas. Soy el problema.",
  "La solución elegante vs la solución que funciona. Elegiré la segunda.",
  "API key en el repositorio público. Notificación de AWS: uf.",
  "El código de hace 6 meses parece escrito por otra persona. Lo era.",
  "¿Backup? Ah.",
  "Cambié una línea. Todo se rompió. Normal.",
  "El linter tiene razón. No me gusta que tenga razón.",
  "Tabs vs espacios. La guerra más inútil y la más importante.",
  "El junior tocó algo. El senior también. Nadie sabe qué pasó.",
  "El producto está en beta desde 2021.",
  "Hay 47 ramas abiertas y nadie sabe de cuál viene cuál.",
  "yarn o npm. Respuesta correcta: ninguna.",
  "¡Funciona! (Hasta que alguien lo usa.)",
  "El hotfix rompió más de lo que arregló. Tradición.",
  "README.md: existe. Está actualizado: mentira.",
  "El código de ejemplo de la documentación no funciona. Por supuesto.",
  "Programar es fácil, dijeron.",
  "El servidor de producción tiene 14 años. No lo toquen.",
  "Off by one error. El más humillante de todos.",
  "La migración de base de datos tardó 8 horas. Eran las 6pm del viernes.",
  "El IDE se colgó justo antes de guardar. Fe.",
  "git revert es para los valientes.",
  "El cliente quiere la app para iOS, Android y smartwatch. Presupuesto: $500.",
  "Async/await: porque el callback hell era demasiado honesto.",
  "El proyecto no tiene tests. El proyecto tiene valentía.",
  "¿Cuánto tardas? Depende. En qué depende. En todo.",
  "El commit dice 'WIP'. Lleva 3 semanas así.",
  "import * as todo. Yolo import.",
  "El error era un espacio de más. Una hora de mi vida.",
  "Escribir código es fácil. Entender el código de otros, terapia.",
  "La IA generó el código. La IA también generó el bug.",
  "El error en prod fue reproducible solo en prod. Karma.",
  "Agregué un TODO: hace 2 años. Sigue ahí.",
  "El standup duró 45 minutos. Standup.",
  "Pusheé al repo equivocado. Buenas noches.",
  "El negocio cambió los requerimientos. Tercera vez esta semana.",
  "¿Cuántos devs hacen falta para cambiar un foco? Uno, pero tarde el doble.",
  "Escribí el mismo código dos veces. En dos proyectos. En dos empresas.",
  "El tipo que escribió esto ya no trabaja aquí. El tipo era yo.",
  "La variable se llama 'cosa2Final_v3'. Respeto.",
  "El algoritmo O(n²) funciona bien… hasta que no.",
  "Compiló a la primera. Sospechoso.",
  "La app crashed en el demo. Siempre en el demo.",
  "El bug desapareció cuando llegó el QA. Magia.",
  "Memory leak en producción. Reinicio el pod y a otra cosa.",
  "No es un bug, es comportamiento no documentado.",
  "Pusheé con --force. El equipo me va a querer igual.",
  "El código está comentado con 'aquí hay algo raro'. Muy útil.",
  "Leí el error después de 2 horas buscando. Decía exactamente qué era.",
  "El proyecto legacy es mi proyecto de hace 2 años.",
  "Abrí una terminal nueva. Ya me siento más productivo.",
  // ── Rollffin's picks ──────────────────────────────────
  // El señor de los anillos / épicas
  "Aún la persona más pequeña puede cambiar el curso del futuro.",
  "Hay algo de bueno en este mundo, y vale la pena luchar por ello.",
  "Incluso la oscuridad debe pasar.",
  "No es la fuerza del cuerpo, sino la del espíritu lo que importa.",
  "El coraje se encuentra en lugares inesperados.",
  "No todos los que vagan están perdidos.",
  "Las acciones de hoy definen las leyendas de mañana.",
  "La esperanza es como el sol: si solo crees en ella cuando la ves, nunca sobrevivirás la noche.",
  "La sombra no puede existir sin la luz.",
  "La valentía no es ausencia de miedo, sino avanzar a pesar de él.",
  "Un corazón valiente puede sostener una carga pesada.",
  "El bien puede florecer incluso en tiempos oscuros.",
  "El mundo no está en manos de los poderosos, sino de los humildes.",
  "La lealtad es más fuerte que el miedo.",
  "A veces, el destino recae en quienes menos lo desean.",
  // Amistad
  "No te dejaré, aunque el mundo se caiga.",
  "Estoy contigo hasta el final.",
  "Los amigos son la verdadera compañía en el camino.",
  "Compartir la carga la hace más ligera.",
  "Nunca caminarás solo si tienes un amigo fiel.",
  "La amistad es el arma más poderosa contra la oscuridad.",
  "Un verdadero amigo no huye en la tormenta.",
  "La lealtad no necesita recompensa.",
  "Los lazos del corazón superan cualquier distancia.",
  "Los pequeños actos de amistad cambian grandes destinos.",
  "Quien tiene un amigo, tiene esperanza.",
  "La compañía hace el viaje más llevadero.",
  "En los momentos difíciles, los verdaderos amigos se revelan.",
  "La fidelidad es más valiosa que cualquier tesoro.",
  "La amistad es luz en la oscuridad.",
  // Sabiduría
  "Todo lo que tenemos que decidir es qué hacer con el tiempo que se nos ha dado.",
  "Las decisiones pequeñas pueden cambiar el destino del mundo.",
  "El destino no está escrito, se forja.",
  "La sabiduría viene de escuchar, no solo de hablar.",
  "Incluso los sabios no ven todos los finales.",
  "El poder corrompe incluso a los más nobles.",
  "No es prudente confiar en la fuerza sin sabiduría.",
  "El camino correcto no siempre es el más fácil.",
  "La verdad suele ser más profunda de lo que parece.",
  "Los errores también enseñan.",
  "El destino elige, pero tú decides actuar.",
  "Las sombras engañan a quienes no miran con el corazón.",
  "El tiempo revela lo que está oculto.",
  "No todo lo que es oro brilla, ni toda la verdad es evidente.",
  "La sabiduría consiste en elegir el bien cuando es difícil.",
  // El viaje
  "El camino continúa, aunque no sepas a dónde lleva.",
  "Las grandes aventuras comienzan con un paso fuera de casa.",
  "El hogar es importante, pero el viaje transforma.",
  "Quien no arriesga, no descubre nuevos mundos.",
  "Cada paso cuenta en el camino.",
  "El viaje es tan importante como el destino.",
  "Los caminos están llenos de sorpresas.",
  "Salir de la comodidad es el inicio de la grandeza.",
  "El mundo es más grande de lo que imaginas.",
  "Las aventuras cambian a quien las vive.",
  "No hay crecimiento sin desafío.",
  "El miedo es parte del viaje.",
  "Incluso los más tranquilos pueden vivir grandes historias.",
  "El camino pone a prueba el corazón.",
  "Viajar es descubrir quién eres.",
  // Lucha interior
  "El poder puede consumir incluso al más fuerte.",
  "La tentación susurra suavemente.",
  "Luchar contra uno mismo es la batalla más difícil.",
  "El deseo desmedido lleva a la caída.",
  "No todo poder es bueno.",
  "El corazón humano es campo de batalla.",
  "La oscuridad comienza con pequeñas decisiones.",
  "Resistir es vencer.",
  "La codicia destruye lo que toca.",
  "El mal se disfraza de necesidad.",
  "La debilidad no define el final.",
  "Siempre hay una elección.",
  "El sacrificio es el precio de la libertad.",
  "La lucha interior es silenciosa, pero real.",
  "El alma se fortalece al resistir.",
  // Redención
  "Incluso los caídos pueden levantarse.",
  "Nunca es tarde para hacer lo correcto.",
  "La redención es posible para quien la busca.",
  "Cada vida tiene un propósito.",
  "El sacrificio trae nueva vida.",
  "El amor vence al mal.",
  "Las heridas pueden sanar.",
  "El perdón libera el alma.",
  "El final no define todo el camino.",
  "Las segundas oportunidades existen.",
  "El bien triunfa cuando alguien decide hacerlo.",
  "La luz siempre regresa.",
  "El propósito se encuentra en servir.",
  "La esperanza renace incluso después de la caída.",
  "El amor es más fuerte que la muerte.",
  // Iconos
  "¡No puedes pasar!",
  "No comparto esta desesperación.",
  "Corred, insensatos.",
  // Alicia en el País de las Maravillas
  "A veces he creído hasta seis cosas imposibles antes del desayuno.",
  "¿Quién en el mundo soy? Ah, ese es el gran enigma.",
  "No tengo idea de quién soy desde que me levanté esta mañana.",
  "Si no sabes a dónde vas, cualquier camino te llevará allí.",
  "Todo tiene una moraleja, si sabes encontrarla.",
  "Es inútil volver al ayer, porque entonces era una persona diferente.",
  "¡Qué mundo tan extraño es este!",
  "La curiosidad puede llevarte a los lugares más increíbles.",
  "A veces las preguntas son más importantes que las respuestas.",
  "Nada es lo que parece ser.",
  "Las mejores personas están un poco locas.",
  "¿Por qué un cuervo se parece a un escritorio?",
  "Aquí todos estamos locos.",
  "Empieza por el principio, continúa hasta llegar al final, y entonces detente.",
  "Cada aventura requiere un primer paso.",
  "Cuanto más rápido voy, más atrás me quedo.",
  "No puedo regresar a ayer porque ya no soy la misma persona.",
  "La imaginación es la única arma en la guerra contra la realidad.",
  "El tiempo puede ser un amigo o un enemigo.",
  "Las reglas no siempre tienen sentido.",
  "Si quieres llegar a algún lugar, debes caminar lo suficiente.",
  "A veces crecer significa perderse primero.",
  "El mundo está lleno de cosas maravillosas que esperan ser descubiertas.",
  "Los sueños pueden ser tan reales como la vida.",
  "La lógica no siempre gobierna el corazón.",
  "Estamos todos locos aquí… sería aburrido si no lo estuviéramos.",
  "La locura es solo otra forma de ver la realidad.",
  "Si no sabes quién eres, cualquier respuesta servirá.",
  "El tiempo no se pierde… se olvida.",
  "A veces el silencio dice más que mil palabras.",
  "Desaparecer no es irse… es transformarse.",
  "Lo imposible solo tarda un poco más.",
  "La mejor dirección es la que eliges, no la que te dicen.",
  "Las preguntas correctas valen más que las respuestas fáciles.",
  "Un poco de locura hace la vida más interesante.",
  "El camino correcto depende de quién quieres ser.",
  "No confundas lo extraño con lo equivocado.",
  "Perderse también es parte del viaje.",
  "Las reglas aquí cambian… y eso es lo divertido.",
  "La lógica puede fallar, pero la imaginación no.",
  "Si sonríes, incluso al desaparecer, dejas huella.",
  "El misterio hace que todo sea más interesante.",
  "Ser diferente no es un error, es una ventaja.",
  "A veces debes desordenarte para encontrarte.",
  "El tiempo puede detenerse… si sabes cómo disfrutarlo.",
  "Las respuestas simples no siempre son las verdaderas.",
  "No todos los caminos están hechos para entenderse.",
  "La rareza es solo belleza que no todos comprenden.",
  "Si todo tiene sentido, entonces no es divertido.",
  "La sonrisa puede quedarse, incluso cuando todo lo demás desaparece.",
  "Quien no se cuestiona, se pierde sin darse cuenta.",
  "El sentido de las cosas cambia según quién las mire.",
  "A veces, entenderlo todo es perder la magia.",
  "La verdad no siempre es cómoda, pero siempre es necesaria.",
  "El rumbo importa más que la velocidad.",
  "Hay decisiones que te cambian antes de tomarlas.",
  "No todo lo que parece caos está fuera de control.",
  "La identidad no se encuentra, se construye.",
  "El tiempo revela lo que la prisa oculta.",
  "Ser tú mismo puede ser el acto más extraño de todos.",
  "La realidad es tan flexible como tu percepción.",
  "Hay caminos que solo aparecen cuando decides avanzar.",
  "No todo lo que desaparece se pierde.",
  "La duda también es una forma de sabiduría.",
  "Quien teme cambiar, se queda atrapado en lo que fue.",
  "Las certezas absolutas suelen ser ilusiones bien disfrazadas.",
  "El silencio puede ser la respuesta más honesta.",
  "A veces, el mayor descubrimiento es aceptar que no sabes.",
  "Lo invisible suele ser lo más importante.",
  "Perder el control puede ser el inicio de la libertad.",
  "El significado de algo depende del valor que le das.",
  "Hay verdades que solo se entienden al vivirlas.",
  "La mente crea límites que el corazón no reconoce.",
  "Cambiar de perspectiva cambia el mundo.",
  "Lo que te desconcierta hoy, mañana puede definirte.",
  // Interstellar
  "El amor es lo único que somos capaces de percibir que trasciende el tiempo y el espacio.",
  "No estamos destinados a salvar el mundo, estamos destinados a dejarlo.",
  "La humanidad nació en la Tierra, pero no estaba destinada a morir aquí.",
  "La gravedad puede cruzar dimensiones… y quizá algo más también.",
  "El tiempo puede estirarse, pero nunca se detiene por nadie.",
  "Cada hora en otro mundo puede costar años aquí.",
  "No puedes pensar como científico y actuar como padre… o sí.",
  "Sobrevivir no es suficiente, debemos aspirar a algo más.",
  "Los recuerdos son la forma en que el tiempo nos toca.",
  "A veces debemos confiar en lo que no entendemos.",
  "El miedo es necesario, pero no debe gobernarnos.",
  "El futuro de la humanidad depende de decisiones imposibles.",
  "No se trata de cuánto tiempo tienes, sino de qué haces con él.",
  "Explorar es parte de lo que nos hace humanos.",
  "El amor puede ser una fuerza medible en otro plano.",
  "El tiempo es relativo, pero el dolor es constante.",
  "Las decisiones de hoy resuenan en generaciones futuras.",
  "No puedes cambiar el pasado, pero puedes entenderlo.",
  "El universo es vasto, pero nuestras conexiones lo atraviesan.",
  "No te vayas en silencio hacia esa buena noche… lucha contra la muerte de la luz.",
  "Los padres somos los fantasmas del futuro de nuestros hijos.",
  "Cuando te conviertes en padre, el futuro de tus hijos es lo más importante.",
  "Voy a volver, Murph. Siempre vuelvo.",
  "No puedes dejarme… eres mi papá.",
  "Prométemelo.",
  "El tiempo va a pasar diferente para nosotros.",
  "Cada día que estoy fuera… son años para ti.",
  "No me dijiste cuándo volverías.",
  "Me dijiste que volverías cuando entendiera el mensaje.",
  "Nunca dejé de creer en ti.",
  "Fuiste tú… siempre fuiste tú.",
  "Estuve tratando de hablar contigo todo este tiempo.",
  "El amor, TARS… es la única cosa que trasciende el tiempo.",
  "Aunque no esté contigo, estoy luchando por ti.",
  "Cada decisión que tomé fue pensando en volver a casa.",
  "El tiempo nos separó, pero nunca rompió lo que somos.",
  "Crecí esperando que volvieras.",
  "No te odiaba… me dolía que no estuvieras.",
  "Encontré la respuesta… gracias a ti.",
  "Ningún padre debería ver morir a su hijo.",
  // Más dev humor (tuyo)
  "Funciona en mi máquina… no sé qué hiciste tú.",
  "No es un bug, es una feature no documentada.",
  "Solo voy a cambiar una cosita… rompe todo.",
  "Compila… no preguntes cómo.",
  "Si no sabes qué hace, no lo toques.",
  "Stack Overflow es mi mentor espiritual.",
  "Hoy sí termino… spoiler: no termina.",
  "¿Por qué no funciona?… agrega print… ah.",
  "Código limpio… mañana lo ensucio yo mismo.",
  "Arreglé un bug y ahora tengo tres nuevos amigos.",
  "Ese código no lo escribí yo… fui yo hace 2 días.",
  "Voy a documentar esto… jajaja.",
  "El código funciona, pero nadie sabe por qué.",
  "Una línea más y ya… 100 líneas después.",
  "Refactorizar: romper algo que ya funcionaba.",
  "El problema no soy yo, es el framework.",
  "Esto debería ser fácil… 3 horas después.",
  "¿Quién escribió esto?… git blame: yo.",
  "Dormir está bien, pero debugear es mejor… mentira.",
  "No necesito tests… confío en mí… error en producción.",
  "El deploy del viernes siempre es buena idea… nunca.",
  "Si compila, ship it.",
  "Mi código es como magia… ni yo lo entiendo.",
  "Debugging: ser detective en una historia donde tú eres el culpable.",
  // Troya
  "Los hombres son atormentados por la eternidad.",
  "La inmortalidad está en lo que dejas atrás.",
  "Un hombre puede morir, pero su nombre puede vivir para siempre.",
  "La gloria es el único camino a la eternidad.",
  "Los dioses nos envidian… porque somos mortales.",
  "Cada momento podría ser el último… por eso es valioso.",
  "La guerra no perdona a nadie.",
  "El honor es lo único que permanece.",
  "El amor puede iniciar guerras.",
  "La fama sobrevive a la muerte.",
  "La valentía define a los hombres.",
  "Un guerrero lucha por lo que ama.",
  "El destino no espera.",
  "La grandeza exige sacrificio.",
  "El orgullo puede destruir imperios.",
  "El miedo es el verdadero enemigo.",
  "La historia recuerda a los valientes.",
  "La guerra revela quién eres realmente.",
  "La vida es breve, pero la gloria es eterna.",
  "Solo los valientes se convierten en leyenda.",
  "No vine a vivir mucho… vine a ser recordado.",
  "Si no arriesgas todo, nunca sabrás quién eres.",
  "Prefiero una vida breve con gloria que una larga en el olvido.",
  "El miedo no gobierna a quien ya decidió su destino.",
  "Cada batalla es una oportunidad para trascender.",
  "La muerte me espera… pero no me alcanza aún.",
  "El honor no se negocia, se demuestra.",
  "Solo lucho por aquello que vale mi nombre.",
  "El destino de un guerrero se escribe con sangre y decisión.",
  "La grandeza exige pagar un precio que pocos aceptan.",
  "Un verdadero hombre lucha por su familia, no por su orgullo.",
  "Mi deber es proteger, aunque el miedo esté presente.",
  "La valentía no es no temer… es avanzar a pesar del miedo.",
  "No busco la gloria, busco la paz para mi pueblo.",
  "El amor por los míos es mi mayor fuerza.",
  "Prefiero caer defendiendo que vivir huyendo.",
  "Un líder no abandona a los suyos.",
  "La guerra no me define, pero sí mis decisiones en ella.",
  "Mi honor está en quienes confían en mí.",
  "No peleo por ser leyenda… peleo por lo que amo.",
  // Motivacionales con humor
  "Sigue tus sueños… pero si se ponen difíciles, también puedes seguir durmiendo.",
  "Nunca te rindas… excepto cuando claramente no vale la pena.",
  "Haz lo que amas… si es ver series todo el día, vas perfecto.",
  "El éxito requiere esfuerzo… o buena suerte, lo que llegue primero.",
  "Cree en ti… pero tampoco exageres.",
  "Sal de tu zona de confort… mañana.",
  "El que no arriesga no gana… pero al menos tampoco pierde.",
  "Trabaja duro… o al menos aparenta bien.",
  "Persigue tus metas… despacio, no hay prisa.",
  "Fracasar es parte del proceso… repetirlo también, al parecer.",
  "El tiempo es oro… por eso lo gasto viendo memes.",
  "Hazlo hoy… o déjalo madurar hasta que sea urgente.",
  "El esfuerzo siempre da frutos… a veces en otra vida.",
  "Todo es posible… si bajas lo suficiente tus expectativas.",
  "La disciplina es clave… pero la siesta también ayuda.",
  "Aprende de tus errores… o ignóralos con confianza.",
  "No te compares con otros… ellos tampoco van tan bien.",
  "Si te caes, levántate… pero evalúa si vale la pena.",
  "El éxito es un camino… lleno de excusas creativas.",
  "Nunca es tarde… para empezar a procrastinar otra vez.",
  "Levántate temprano y conquista el mundo… o quédate 5 minutos más, tampoco se va a ir.",
  "Haz ejercicio todos los días… mentalmente también cuenta, ¿no?",
  "Nunca pares de aprender… excepto cuando te dé sueño.",
  "Rodéate de gente exitosa… o al menos que te invite a comer.",
  "Sé constante… en tus excusas también hay talento.",
  "Atrévete a fallar… total, ya tienes experiencia.",
  "La práctica hace al maestro… o al menos te hace intentarlo más veces.",
  "Piensa en grande… pero actúa en pequeño… muy pequeño.",
  "Haz sacrificios hoy… o mejor hazlos mañana, con más ánimo.",
  "El cambio empieza contigo… pero no hoy, hoy estás ocupado.",
  "Da siempre el 100%… excepto cuando es lunes.",
  "Convierte tus debilidades en fortalezas… o en chistes, funciona igual.",
  "La actitud lo es todo… sobre todo cuando no sabes qué estás haciendo.",
  "Haz que las cosas pasen… o espera a ver si pasan solas.",
  "El miedo es temporal… pero la flojera es constante.",
  "Sé tu mejor versión… pero tampoco te presiones tanto.",
  "Nunca mires atrás… a menos que hayas olvidado algo importante.",
  "La oportunidad toca una vez… y tú estabas en modo silencio.",
  "Confía en el proceso… aunque no tengas idea de cuál es.",
  "El éxito está cerca… probablemente tomando otra ruta.",
  // Citas clásicas
  "Tanto si crees que puedes como si no, tienes razón.",
  "La imaginación es más importante que el conocimiento.",
  "Y sin embargo, compila.",
  "Si he visto más lejos es porque estoy sobre hombros de gigantes.",
  "Nada en la vida debe ser temido, solo comprendido.",
  "Solo sé que no sé nada.",
  "Elige un trabajo que ames y no trabajarás ni un día de tu vida.",
  "Quien tiene un porqué para vivir puede soportar casi cualquier cómo.",
  "La simplicidad es la máxima sofisticación.",
  "Sé el cambio que quieres ver en el mundo.",
  "Al final, no son los años en tu vida los que cuentan, sino la vida en tus años.",
  "Dime y lo olvido, enséñame y lo recuerdo, involúcrame y lo aprendo.",
];
function fraseRandom() { return FRASES[Math.floor(Math.random() * FRASES.length)]; }

// ── Defaults & Settings ───────────────────────────────────────────────────────
const DEFAULTS = {
  theme: 'dracula', fontSize: 14, fontFamily: "'JetBrains Mono', monospace",
  opacity: 92, cursor: 'block', blink: true, bgStyle: 'gradient', bgImage: '',
};

let currentTheme = localStorage.getItem('vt-theme')       || DEFAULTS.theme;
let fontSize      = parseInt(localStorage.getItem('vt-font-size') || DEFAULTS.fontSize);
let fontFamily    = localStorage.getItem('vt-font-family') || DEFAULTS.fontFamily;
let opacity       = parseInt(localStorage.getItem('vt-opacity')   || DEFAULTS.opacity);
let cursorStyle   = localStorage.getItem('vt-cursor')      || DEFAULTS.cursor;
let cursorBlink   = localStorage.getItem('vt-blink') !== 'false';
let bgStyle       = localStorage.getItem('vt-bg-style')    || DEFAULTS.bgStyle;
let bgImageUrl    = localStorage.getItem('vt-bg-image')    || DEFAULTS.bgImage;

// ── State ─────────────────────────────────────────────────────────────────────
const sessions = new Map(); // sessionId → { term, fitAddon, panel, item, name, num, titleEl, nameEl }
let activeId   = null;      // primary (left or full)
let splitId    = null;      // secondary (right panel)
let splitMode  = false;
let splitRatio = 0.5;
let sessionCounter = 0;
let pendingSplit = false;   // crear split al recibir próxima sesión

const EMOJIS = ['🟣','🔵','🟢','🟡','🔴','🟠','⚪','🟤'];

// ── CSS vars ──────────────────────────────────────────────────────────────────
function getCSSVar(n) { return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }

function buildXtermTheme() {
  return {
    background:'transparent', foreground:getCSSVar('--term-fg'),
    cursor:getCSSVar('--term-cursor'), cursorAccent:getCSSVar('--bg-from'),
    selectionBackground:getCSSVar('--term-selection'),
    black:getCSSVar('--term-black'),     brightBlack:getCSSVar('--term-bright-black'),
    red:getCSSVar('--term-red'),         brightRed:getCSSVar('--term-bright-red'),
    green:getCSSVar('--term-green'),     brightGreen:getCSSVar('--term-bright-green'),
    yellow:getCSSVar('--term-yellow'),   brightYellow:getCSSVar('--term-bright-yellow'),
    blue:getCSSVar('--term-blue'),       brightBlue:getCSSVar('--term-bright-blue'),
    magenta:getCSSVar('--term-magenta'), brightMagenta:getCSSVar('--term-bright-magenta'),
    cyan:getCSSVar('--term-cyan'),       brightCyan:getCSSVar('--term-bright-cyan'),
    white:getCSSVar('--term-white'),     brightWhite:getCSSVar('--term-bright-white'),
  };
}

// ── WebSocket ─────────────────────────────────────────────────────────────────
let ws;
function connect() {
  ws = new WebSocket(`ws://${location.host}`);
  ws.onopen = () => restoreSessions();
  ws.onmessage = ({ data }) => {
    try {
      const msg = JSON.parse(data);
      if (msg.type === 'output') {
        sessions.get(msg.sessionId)?.term.write(msg.data);
      } else if (msg.type === 'session-created') {
        const savedName = pendingNames.shift();
        createLocalSession(msg.sessionId, savedName);
        if (pendingSplit) { pendingSplit = false; enterSplit(msg.sessionId); }
        else switchToSession(msg.sessionId);
      } else if (msg.type === 'session-exit') {
        markDead(msg.sessionId);
      }
    } catch(e) {}
  };
  ws.onclose = () => { setTimeout(() => location.reload(), 3000); };
  ws.onerror = () => ws.close();
}
function send(obj) { if (ws?.readyState === WebSocket.OPEN) ws.send(JSON.stringify(obj)); }

// ── Session persistence ───────────────────────────────────────────────────────
let pendingNames = []; // nombres a aplicar a sesiones que lleguen del servidor

function saveSessionState() {
  const state = [...sessions.values()].map(s => ({ name: s.name }));
  localStorage.setItem('vt-sessions', JSON.stringify(state));
}

function restoreSessions() {
  // La primera sesión (session-1) ya la crea el servidor al conectar.
  // Necesitamos sus datos:
  let saved = [];
  try { saved = JSON.parse(localStorage.getItem('vt-sessions') || '[]'); } catch(e) {}

  // Nombre para la primera sesión
  pendingNames = saved.map(s => s.name);

  // Crear sesiones adicionales (la primera viene sola del servidor)
  const extra = Math.max(0, saved.length - 1);
  for (let i = 0; i < extra; i++) send({ type: 'create-session' });
}

// ── Crear sesión local ────────────────────────────────────────────────────────
function createLocalSession(sessionId, savedName) {
  sessionCounter++;
  const num   = sessionCounter;
  const name  = savedName || `Terminal ${num}`;
  const emoji = EMOJIS[(num - 1) % EMOJIS.length];

  const term = new Terminal({
    cursorBlink, cursorStyle, fontSize, fontFamily,
    lineHeight: 1.35, scrollback: 5000, allowTransparency: true,
    theme: buildXtermTheme(),
  });
  const fitAddon = new FitAddon.FitAddon();
  term.loadAddon(fitAddon);
  term.loadAddon(new WebLinksAddon.WebLinksAddon());

  // Panel
  const panel = document.createElement('div');
  panel.className = 'terminal-panel';
  panel.dataset.sessionId = sessionId;
  panel.innerHTML = `
    <div class="terminal-topbar">
      <button class="topbar-btn btn-frase" title="Nueva frase">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.36"/>
        </svg>
      </button>
      <span class="powered-by">${fraseRandom()}</span>
      <span class="terminal-title" title="Doble click para renombrar">${name}</span>
      <button class="topbar-btn btn-split" title="Split (⌘⇧D)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/>
        </svg>
      </button>
    </div>
    <div class="terminal-wrap">
      <div class="terminal-box" style="opacity:${opacity/100}"></div>
    </div>
  `;
  document.getElementById('terminals-container').appendChild(panel);

  const titleEl = panel.querySelector('.terminal-title');
  const box     = panel.querySelector('.terminal-box');
  term.open(box);

  panel.querySelector('.btn-split').addEventListener('click', toggleSplit);
  const fraseEl = panel.querySelector('.powered-by');
  panel.querySelector('.btn-frase').addEventListener('click', () => {
    fraseEl.style.opacity = '0';
    setTimeout(() => { fraseEl.textContent = fraseRandom(); fraseEl.style.opacity = '1'; }, 150);
  });
  titleEl.addEventListener('dblclick', () => startRename(sessionId));

  // Resize observer
  const ro = new ResizeObserver(() => {
    try { fitAddon.fit(); } catch(e) {}
    send({ type: 'resize', sessionId, cols: term.cols, rows: term.rows });
  });
  ro.observe(panel.querySelector('.terminal-wrap'));

  // Input
  term.onData(data => send({ type: 'input', sessionId, data }));

  // Keyboard shortcuts (interceptados antes de llegar al pty)
  term.attachCustomKeyEventHandler(e => {
    if (e.type !== 'keydown') return true;
    const mod = e.metaKey || e.ctrlKey;
    if (mod && e.shiftKey) {
      if (e.key === 'T') { e.preventDefault(); send({ type: 'create-session' }); return false; }
      if (e.key === 'W') { e.preventDefault(); closeSession(activeId); return false; }
      if (e.key === 'D') { e.preventDefault(); toggleSplit(); return false; }
      if (e.key === ']') { e.preventDefault(); switchNext(); return false; }
      if (e.key === '[') { e.preventDefault(); switchPrev(); return false; }
    }
    if (mod && !e.shiftKey) {
      const n = parseInt(e.key);
      if (n >= 1 && n <= 9) {
        e.preventDefault();
        const ids = [...sessions.keys()];
        if (ids[n - 1]) switchToSession(ids[n - 1]);
        return false;
      }
    }
    return true;
  });

  // Sidebar item
  const item = document.createElement('div');
  item.className = 'session-item';
  item.dataset.sessionId = sessionId;
  item.innerHTML = `
    <div class="session-avatar">${emoji}</div>
    <div class="session-info">
      <div class="session-name">${name}</div>
      <div class="session-sub">zsh</div>
    </div>
    <button class="session-close" title="Cerrar">✕</button>
  `;

  const nameEl = item.querySelector('.session-name');

  // Doble click → renombrar (stopPropagation evita que el click del item robe el foco)
  nameEl.addEventListener('dblclick', (e) => { e.stopPropagation(); startRename(sessionId); });

  // Click → switch (Shift+click en split → panel derecho)
  item.addEventListener('click', e => {
    if (e.target.closest('.session-close')) return;
    if (splitMode && e.shiftKey) {
      setSecondary(sessionId);
    } else {
      switchToSession(sessionId);
    }
  });

  item.querySelector('.session-close').addEventListener('click', e => {
    e.stopPropagation(); closeSession(sessionId);
  });

  document.getElementById('session-list').appendChild(item);

  sessions.set(sessionId, { term, fitAddon, panel, item, name, num, titleEl, nameEl });
}

// ── Rename ────────────────────────────────────────────────────────────────────
function startRename(sessionId) {
  const s = sessions.get(sessionId);
  if (!s) return;
  const prev = s.name;

  // Editar inline en el sidebar
  const input = document.createElement('input');
  input.className = 'rename-input';
  input.value = prev;
  s.nameEl.replaceWith(input);
  // Delay para que term.focus() del switchToSession no robe el foco
  setTimeout(() => { input.focus(); input.select(); }, 50);

  const commit = () => {
    const next = input.value.trim() || prev;
    // Restaurar el div en el sidebar
    const div = document.createElement('div');
    div.className = 'session-name';
    div.textContent = next;
    div.addEventListener('dblclick', () => startRename(sessionId));
    input.replaceWith(div);
    s.nameEl = div;
    // Actualizar título en el topbar
    s.name = next;
    s.titleEl.textContent = next;
    saveSessionState();
  };

  input.addEventListener('blur', commit);
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') input.blur();
    if (e.key === 'Escape') { input.value = prev; input.blur(); }
    e.stopPropagation();
  });
}

// ── Switch ────────────────────────────────────────────────────────────────────
function switchToSession(id) {
  if (!sessions.has(id)) return;
  if (splitMode) exitSplit();

  const prev = sessions.get(activeId);
  if (prev) { prev.panel.classList.remove('active'); prev.item.classList.remove('active'); }

  activeId = id;
  const s = sessions.get(id);
  s.panel.classList.add('active');
  s.item.classList.add('active');
  s.item.scrollIntoView({ block: 'nearest' });
  setTimeout(() => { try { s.fitAddon.fit(); } catch(e) {} s.term.focus(); }, 30);
}

function switchNext() {
  const ids = [...sessions.keys()];
  const i   = ids.indexOf(activeId);
  switchToSession(ids[(i + 1) % ids.length]);
}
function switchPrev() {
  const ids = [...sessions.keys()];
  const i   = ids.indexOf(activeId);
  switchToSession(ids[(i - 1 + ids.length) % ids.length]);
}

// ── Close ─────────────────────────────────────────────────────────────────────
function closeSession(id) {
  if (sessions.size <= 1 || !sessions.has(id)) return;
  if (splitMode && (id === activeId || id === splitId)) exitSplit();

  const s    = sessions.get(id);
  const ids  = [...sessions.keys()];
  const next = ids.find(k => k !== id);

  send({ type: 'kill-session', sessionId: id });
  s.term.dispose();
  s.panel.remove();
  s.item.remove();
  sessions.delete(id);

  if (activeId === id) { activeId = null; switchToSession(next); }
  saveSessionState();
}

function markDead(id) {
  const s = sessions.get(id);
  if (!s) return;
  s.term.writeln('\r\n\x1b[31m[proceso terminado]\x1b[0m');
  const sub = s.item.querySelector('.session-sub');
  if (sub) sub.textContent = 'terminado';
}

// ── Split ─────────────────────────────────────────────────────────────────────
let splitDivider = null;

function toggleSplit() {
  splitMode ? exitSplit() : enterSplit(null);
}

function enterSplit(forcedSecondary) {
  const ids = [...sessions.keys()];
  const candidate = forcedSecondary || ids.find(id => id !== activeId);

  if (!candidate) {
    // Necesita nueva sesión
    pendingSplit = true;
    send({ type: 'create-session' });
    return;
  }

  splitMode = true;
  splitId   = candidate;
  updateSplitLayout();
}

function exitSplit() {
  splitMode = false;
  splitId   = null;
  updateSplitLayout();
}

function setSecondary(id) {
  splitId = id;
  updateSplitLayout();
}

function updateSplitLayout() {
  // Limpiar divider anterior
  if (splitDivider) { splitDivider.remove(); splitDivider = null; }

  const container = document.getElementById('terminals-container');

  // Reset todos los paneles e items
  sessions.forEach(s => {
    s.panel.classList.remove('active','primary','secondary');
    s.panel.style.width = '';
    s.item.classList.remove('active','split-right');
  });
  container.classList.remove('split');

  // Actualizar ícono split
  document.querySelectorAll('.btn-split').forEach(b => b.classList.toggle('active', splitMode));

  if (splitMode && splitId && sessions.has(splitId) && sessions.has(activeId)) {
    container.classList.add('split');

    const primary   = sessions.get(activeId);
    const secondary = sessions.get(splitId);

    primary.panel.classList.add('active','primary');
    primary.panel.style.width = `${splitRatio * 100}%`;
    primary.item.classList.add('active');

    secondary.panel.classList.add('active','secondary');
    secondary.item.classList.add('split-right');

    // Divider draggable
    splitDivider = document.createElement('div');
    splitDivider.className = 'split-divider';
    splitDivider.innerHTML = '<div class="split-handle"></div>';
    container.appendChild(splitDivider);

    splitDivider.addEventListener('mousedown', e => {
      e.preventDefault();
      splitDivider.classList.add('dragging');
      const startX = e.clientX;
      const totalW = container.getBoundingClientRect().width;
      const startR = splitRatio;

      const onMove = e => {
        const dx = e.clientX - startX;
        splitRatio = Math.max(0.2, Math.min(0.8, startR + dx / totalW));
        primary.panel.style.width = `${splitRatio * 100}%`;
        try { primary.fitAddon.fit(); secondary.fitAddon.fit(); } catch(err) {}
      };
      const onUp = () => {
        splitDivider.classList.remove('dragging');
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        send({ type:'resize', sessionId:activeId, cols:primary.term.cols, rows:primary.term.rows });
        send({ type:'resize', sessionId:splitId,  cols:secondary.term.cols, rows:secondary.term.rows });
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });

    setTimeout(() => {
      try { primary.fitAddon.fit(); secondary.fitAddon.fit(); } catch(e) {}
      send({ type:'resize', sessionId:activeId, cols:primary.term.cols, rows:primary.term.rows });
      send({ type:'resize', sessionId:splitId,  cols:secondary.term.cols, rows:secondary.term.rows });
      primary.term.focus();
    }, 50);

  } else {
    // Single mode
    const s = sessions.get(activeId);
    if (s) {
      s.panel.classList.add('active');
      s.item.classList.add('active');
      setTimeout(() => { try { s.fitAddon.fit(); } catch(e) {} s.term.focus(); }, 30);
    }
  }
}

// ── Global keyboard shortcuts (cuando el foco no está en el terminal) ─────────
document.addEventListener('keydown', e => {
  const mod = e.metaKey || e.ctrlKey;
  if (mod && e.shiftKey) {
    if (e.key === 'T') { e.preventDefault(); send({ type:'create-session' }); }
    if (e.key === 'W') { e.preventDefault(); closeSession(activeId); }
    if (e.key === 'D') { e.preventDefault(); toggleSplit(); }
    if (e.key === ']') { e.preventDefault(); switchNext(); }
    if (e.key === '[') { e.preventDefault(); switchPrev(); }
  }
  if (mod && !e.shiftKey) {
    const n = parseInt(e.key);
    if (n >= 1 && n <= 9) { e.preventDefault(); const ids=[...sessions.keys()]; if(ids[n-1]) switchToSession(ids[n-1]); }
  }
});

// ── Botones UI ────────────────────────────────────────────────────────────────
document.getElementById('btn-new-session').addEventListener('click', () => send({ type:'create-session' }));

const panelSettings = document.getElementById('panel-settings');
document.getElementById('btn-settings').addEventListener('click', () => {
  panelSettings.classList.toggle('hidden');
  document.getElementById('btn-settings').classList.toggle('active', !panelSettings.classList.contains('hidden'));
});
document.getElementById('btn-back-settings').addEventListener('click', () => {
  panelSettings.classList.add('hidden');
  document.getElementById('btn-settings').classList.remove('active');
});

// ── Ajustes: tema ─────────────────────────────────────────────────────────────
function applyTheme(key) {
  currentTheme = key; localStorage.setItem('vt-theme', key);
  document.body.setAttribute('data-theme', key);
  requestAnimationFrame(() => {
    const t = buildXtermTheme();
    sessions.forEach(s => { s.term.options.theme = t; });
  });
  document.querySelectorAll('.theme-swatch').forEach(b => b.classList.toggle('active', b.dataset.theme === key));
}
document.querySelectorAll('.theme-swatch').forEach(b => b.addEventListener('click', () => applyTheme(b.dataset.theme)));

// Fuente tamaño
const fontSizeInput = document.getElementById('font-size');
const fontSizeVal   = document.getElementById('font-size-val');
fontSizeInput.value = fontSize; fontSizeVal.textContent = `${fontSize}px`;
fontSizeInput.addEventListener('input', () => {
  fontSize = parseInt(fontSizeInput.value); fontSizeVal.textContent = `${fontSize}px`;
  localStorage.setItem('vt-font-size', fontSize);
  sessions.forEach(s => { s.term.options.fontSize = fontSize; try { s.fitAddon.fit(); } catch(e) {} });
});

// Fuente familia
const fontFamilySelect = document.getElementById('font-family');
fontFamilySelect.value = fontFamily;
fontFamilySelect.addEventListener('change', () => {
  fontFamily = fontFamilySelect.value; localStorage.setItem('vt-font-family', fontFamily);
  sessions.forEach(s => { s.term.options.fontFamily = fontFamily; });
});

// Opacidad
const opacityInput = document.getElementById('opacity');
const opacityVal   = document.getElementById('opacity-val');
opacityInput.value = opacity; opacityVal.textContent = `${opacity}%`;
opacityInput.addEventListener('input', () => {
  opacity = parseInt(opacityInput.value); opacityVal.textContent = `${opacity}%`;
  localStorage.setItem('vt-opacity', opacity);
  document.querySelectorAll('.terminal-box').forEach(el => { el.style.opacity = opacity / 100; });
});

// Fondo
const bgStyleSelect   = document.getElementById('bg-style');
const bgImageRow      = document.getElementById('bg-image-row');
const bgImageUrlInput = document.getElementById('bg-image-url');
bgStyleSelect.value = bgStyle; bgImageUrlInput.value = bgImageUrl;
if (bgStyle === 'image') bgImageRow.classList.remove('hidden');

function applyBgStyle(style, url) {
  bgStyle = style; localStorage.setItem('vt-bg-style', style);
  const bg = document.getElementById('bg');
  bg.classList.remove('has-image');
  if (style === 'gradient') { bg.style.backgroundImage=''; bg.style.background='linear-gradient(135deg,var(--bg-from) 0%,var(--bg-to) 100%)'; }
  else if (style === 'solid') { bg.style.backgroundImage=''; bg.style.background='var(--bg-from)'; }
  else if (style === 'image' && url) { bg.style.backgroundImage=`url('${url}')`; bg.style.backgroundSize='cover'; bg.style.backgroundPosition='center'; bg.classList.add('has-image'); }
}

bgStyleSelect.addEventListener('change', () => {
  bgImageRow.classList.toggle('hidden', bgStyleSelect.value !== 'image');
  applyBgStyle(bgStyleSelect.value, bgImageUrlInput.value);
});
bgImageUrlInput.addEventListener('change', () => {
  bgImageUrl = bgImageUrlInput.value; localStorage.setItem('vt-bg-image', bgImageUrl);
  applyBgStyle('image', bgImageUrl);
});

// Cursor
const cursorStyleSelect = document.getElementById('cursor-style');
cursorStyleSelect.value = cursorStyle;
cursorStyleSelect.addEventListener('change', () => {
  cursorStyle = cursorStyleSelect.value; localStorage.setItem('vt-cursor', cursorStyle);
  sessions.forEach(s => { s.term.options.cursorStyle = cursorStyle; });
});
const cursorBlinkCheck = document.getElementById('cursor-blink');
cursorBlinkCheck.checked = cursorBlink;
cursorBlinkCheck.addEventListener('change', () => {
  cursorBlink = cursorBlinkCheck.checked; localStorage.setItem('vt-blink', cursorBlink);
  sessions.forEach(s => { s.term.options.cursorBlink = cursorBlink; });
});

// Reset
document.getElementById('btn-reset').addEventListener('click', () => {
  if (!confirm('¿Restablecer todos los ajustes a los valores por defecto?')) return;
  localStorage.clear();
  applyTheme(DEFAULTS.theme); applyBgStyle(DEFAULTS.bgStyle, DEFAULTS.bgImage);
  fontSize=DEFAULTS.fontSize; fontSizeInput.value=fontSize; fontSizeVal.textContent=`${fontSize}px`;
  sessions.forEach(s => { s.term.options.fontSize=fontSize; try{s.fitAddon.fit();}catch(e){} });
  fontFamily=DEFAULTS.fontFamily; fontFamilySelect.value=fontFamily;
  sessions.forEach(s => { s.term.options.fontFamily=fontFamily; });
  opacity=DEFAULTS.opacity; opacityInput.value=opacity; opacityVal.textContent=`${opacity}%`;
  document.querySelectorAll('.terminal-box').forEach(el => { el.style.opacity=opacity/100; });
  cursorStyle=DEFAULTS.cursor; cursorStyleSelect.value=cursorStyle;
  sessions.forEach(s => { s.term.options.cursorStyle=cursorStyle; });
  cursorBlink=DEFAULTS.blink; cursorBlinkCheck.checked=cursorBlink;
  sessions.forEach(s => { s.term.options.cursorBlink=cursorBlink; });
  bgStyleSelect.value=DEFAULTS.bgStyle; bgImageUrlInput.value=DEFAULTS.bgImage; bgImageRow.classList.add('hidden');
});

// ── Init ──────────────────────────────────────────────────────────────────────
applyTheme(currentTheme);
applyBgStyle(bgStyle, bgImageUrl);
connect();
