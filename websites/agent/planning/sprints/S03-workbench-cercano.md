# Sprint S03 — Workbench más cercano

Estado: cerrado con revisión de Juan el 24/09/2026. Preview local; no publicado en GitHub Pages.

## Punto de partida

La Alpha S02 ya muestra el formato VS Code, pero Juan la ve seria, sosa y demasiado orientada a desarrolladores. Pide una versión más amigable y cuidada visualmente, con intención de portfolio y marketing, sin perder la identidad de workbench. La tarea nueva `AG-021` recoge esta revisión.

## Objetivo y dirección

Entregar una primera pantalla con una bienvenida clara y personal, más contraste de jerarquía y una paleta oscura con acentos azules. Se mantienen Activity Bar, Explorer, pestaña, ruta, editor y Status Bar; los controles visibles siguen siendo Explorer, Search, Source Control y Run and Debug.

La dirección inicial fue **un espacio de trabajo creativo**: chrome oscuro y compacto, acentos cálidos en la navegación, y una vista de bienvenida tratada como preview de Markdown dentro del editor. El resto de archivos conserva el editor de texto de muestra. La corrección de Juan sobre la paleta se registra abajo; el Welcome permanece.

## Cambio de alcance — 24/09/2026

Juan aprobó el contenido y estilo del Welcome. Pidió recuperar la paleta de negros y azules de VS Code en el resto de la app, sustituyendo los acentos naranjas. Aportó capturas para acercar Explorer al icono oficial de documentos apilados, Source Control a las ramas ascendentes con círculos y Run and Debug al símbolo de flecha y bug. La captura de Raj Savaliya muestra iconos propios en cada entrada del Explorer; `AG-022` incorpora ese criterio al sprint. La búsqueda sigue representada por una lupa. Esta corrección cambia la dirección cromática inicial y amplía la iconografía, sin añadir funcionalidad.

## Sprint Backlog

| ID | Trabajo seleccionado | Comprobación de aceptación |
|---|---|---|
| `AG-021` | Ajustar la paleta, los estados de navegación y la tipografía | Implementado localmente: chrome de grises oscuros, acentos azules y Status Bar azul. El Welcome conserva texto, jerarquía y composición; su ilustración se recoloreó. Los pares principales de texto/fondo medidos superan 4,5:1. |
| `AG-021` | Diseñar la primera pantalla de Welcome dentro del editor | Implementado localmente: preview de Markdown con saludo, orientación para abrir archivos, nota de muestra e ilustración CSS. No se añaden credenciales, proyectos ni resultados no verificados. |
| `AG-021` | Revisar la composición en móvil y escritorio | CSS responsive actualizado; Explorer, etiquetas y `prefers-reduced-motion` se conservan. Capturas locales a 1440 px y en un viewport real de 390 px muestran Welcome legible y sin desbordes visibles. La revisión y aceptación de Juan quedan pendientes. |
| `AG-022` | Ajustar los iconos de la barra de actividad | Implementado localmente con Codicons oficiales: Explorer usa documentos apilados, Source Control las ramas con círculos, Run and Debug la flecha y el bug, Search la lupa. |
| `AG-022` | Añadir iconos por tipo en Explorer y en la pestaña | Implementado localmente: archivos y carpetas tienen iconos de categoría; pestaña y breadcrumb siguen el archivo abierto. Los SVG y la licencia CC BY 4.0 están en `public/icons/codicons/`; Welcome enlaza a su atribución. |

## Límites

- La bienvenida sigue siendo contenido de muestra para esta iteración. El perfil y el copy definitivos dependen de `AG-003` y `AG-004`.
- No se añaden Search funcional, ramas simuladas, animación, selector de temas ni la entrada Markdown para IA. Sus tareas siguen en el Product Backlog.
- No se crean botones decorativos ni se modifica el selector de publicación.

## Verificación y cierre

- Comprobar que Explorer y los tres paneles Alpha siguen abriendo, y que los archivos de muestra siguen accesibles.
- `npm run check:agent`: 0 errores, 0 avisos, 0 hints. Ejecutado desde una copia temporal Linux sincronizada con el código actual de Agent.
- `npm run build:agent`: 1 página generada desde esa misma copia. `git diff --check` sin errores.
- Capturas locales con Edge en modo headless a 1440 × 900 y 390 × 844 px revisadas tras la corrección cromática; los iconos cargan y Welcome no presenta desbordes visibles. La ilustración acompaña la bienvenida en escritorio y se oculta en móvil para dar prioridad a la lectura. No sustituyen la revisión de Juan ni prueban todas las interacciones.
- Los pares medidos de texto principal, iconos activos/inactivos, Status Bar y nota de Welcome superan 4,5:1 de contraste. Es una comprobación de color, no una auditoría completa de accesibilidad.
- Preview local en `http://localhost:4324/` para la revisión visual de Juan. `activeSite: neuron-mesh` sigue seleccionado.
- Registrar aquí el resultado de la revisión y actualizar `AG-021`, `AG-022`, `SPRINT_ACTUAL.md` y `VERSIONES.md` al cerrar.

## Revisión de Juan y traspaso

Juan mantiene su aprobación del contenido y estilo de Welcome, pero ve los iconos demasiado uniformes y pequeños, y pide una letra más amable y selección redondeada como en su captura. `AG-023` recoge esa revisión en S04; `AG-021` y `AG-022` conservan aceptación visual pendiente. Los temas y la revisión visual general pasan a S05. Juan eligió previews locales en Codex después de cada sprint.

## Acción de retrospectiva previa

La duda de S01 sobre HTML y Markdown separados permanece en `AG-007`; no afecta a esta revisión estética. S02 dejó una observación concreta de Juan sobre tono visual, que es la entrada de este sprint.
