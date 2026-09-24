# Portfolio Agent — brief de producto y Scrum

Esta carpeta describe la segunda versión del portfolio personal: una experiencia web que presenta el perfil como el repositorio de un agente. Agent se publica en `/` como versión en desarrollo y Neuron Mesh en `/neon-mesh/`. El brief no autoriza a inventar hechos profesionales.

## Alcance de esta línea

La aplicación vive en `websites/agent/`; su único Scrum está en `websites/agent/planning/`. No comparte backlog, sprint ni registro de versiones con Neuron Mesh. `S01`–`S11` prepararon estructura, primera versión visual, contenido, funciones, publicación y lectura de Markdown interpretado. Juan aceptó `AG-026` tras S11. El nuevo trabajo editorial, el árbol definitivo y el QA final siguen pendientes en [BACKLOG.md](./BACKLOG.md).

## Experiencia prevista

- Interfaz inspirada en VS Code, simplificada para leer un portfolio y sin controles que no tengan una función real.
- Explorer como vista principal, con una carpeta abierta que representa el repo de un agente.
- Search busca solo nombres y rutas de archivos.
- Source Control simula ramas de presentación. `main` muestra el perfil y la web reales; las ramas de broma se identifican con claridad como ficción. Una presenta la identidad secreta de Batman de forma tan pública que la ironía sea evidente. No son ramas Git ni identidades alternativas reales.
- Run and Debug abre una animación ligera, tipo stickman, de alguien corriendo detrás de bichos para eliminarlos como bugs de software. Debe poder pausarse y respetar `prefers-reduced-motion`.
- No mostrar Extensions hasta que exista una función útil y decidida.
- Temas con al menos un claro clásico y un oscuro clásico; se valorarán paletas conocidas adicionales mediante tokens de diseño.
- En móvil, mantener Explorer accesible y el contenido legible sin forzar la distribución de escritorio.

## Árbol público en discusión

```text
README.md
AGENTS.md
SOUL.md
MEMORY.md  (función por decidir)
Welcome.md
Experience.md
Contact.md
skills/
  README.md
  [area].md  (CI/CD, infraestructura, IA...)
projects/
  README.md
  [project].md
```

El árbol anterior sigue siendo una propuesta. Juan prefiere agrupar las skills por campo y considera incluir los hobbies dentro de `SOUL.md`, en vez de crear `Hobbies/`. [AG-005-opciones.md](./AG-005-opciones.md) compara las funciones de `AGENTS.md`, `SOUL.md` y `MEMORY.md`. S06 publicó archivos provisionales para ensayar contenido y navegación; sus rutas pueden cambiar tras la decisión, cuidando los enlaces ya publicados. Los documentos públicos se generan como Markdown real desde `src/data/profile.json`, y la interfaz humana presenta fichas visuales. Las instrucciones reales del agente que desarrolla este workspace no se publican como perfil.

## Contenido y voz

La web clásica es una fuente inicial, no una autorización para copiar cada frase. S06 usa hechos claros del workspace `PerfilProfesional` y declara los límites de los proyectos; el vídeo de reviews no se ha procesado y el copy sigue siendo provisional hasta `AG-004`. Juan quiere una redacción más suya, concreta y natural (`AG-034`). Se distinguen hechos, experiencia, aprendizaje, planes y ficción. El inglés será el idioma inicial y el oscuro el tema inicial; la paridad inglés/español y los selectores siguen formando parte del producto.

La colección está en `/for-agents/`. Su índice y los 22 documentos ES/EN se escriben en Markdown en `src/content/agent-docs/` y se publican como HTML estático, sencillo y enlazado. Personas y agentes recorren los mismos enlaces. Los `.md` fuente no se publican como una segunda vista. Juan quiere que la única conexión visible entre esta colección y la interfaz humana sea una entrada de cabecera en cada lado, pendiente de concretar con `AG-027`; los enlaces actuales desde Welcome y las fichas se retirarán al implementarla. Dentro de la colección, cada archivo tendrá conexiones contextuales con otros (`AG-029`). La colección agéntica incluirá información práctica del perfil, sin referencias a Batman ni al juego de bugs (`AG-031`).

## Scrum propio

- Juan decide prioridad y aceptación.
- El sprint se define por una entrega revisable, sin duración artificial ni métricas de equipo inventadas.
- `BACKLOG.md` contiene toda tarea pendiente, incluso si ya está seleccionada o espera aceptación; `COMPLETADAS.md` contiene las terminadas con las mismas columnas. El producto solo se considera terminado cuando el primero se vacíe. `SPRINT_ACTUAL.md` contiene el incremento activo; `VERSIONES.md` no reutiliza las versiones de Neuron Mesh.
- Los cierres quedan en `sprints/`. No hay un Scrum compartido en la raíz.
- El scaffold actual no convierte las funciones futuras en trabajo terminado.
