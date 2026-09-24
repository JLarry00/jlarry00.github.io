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
MEMORY.md  (aplazado; no crear todavía)
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

S13 fijó este árbol sin `MEMORY.md`, que sigue aplazado sin función definida. `SOUL.md` es el About personal completo, incluidos los hobbies que Juan elija publicar; su texto actual es solo una base provisional. El `AGENTS.md` de la interfaz humana abre el `AGENTS.md` documental, cuya cabecera vuelve al archivo humano. [AG-005-opciones.md](./AG-005-opciones.md) registra el papel de cada archivo. S14 organiza skills por área y conserva la antigua ruta de Terraform como enlace al área de infraestructura. Los documentos se generan desde `src/data/profile.json`; `src/data/document-graph.json` define los enlaces entre ellos y el mapa humano. Las instrucciones reales del agente que desarrolla este workspace no se publican como perfil.

## Contenido y voz

La web clásica es una fuente inicial, no una autorización para copiar cada frase. S06 usa hechos claros del workspace `PerfilProfesional` y declara los límites de los proyectos. S12 produjo un [análisis curado del vídeo de reviews](./reviews/S12-video-2026-09-23.md), aceptado por Juan junto con S13 y S14; el copy actual sigue provisional hasta `AG-034`. Juan quiere una redacción más suya, concreta y natural. Se distinguen hechos, experiencia, aprendizaje, planes y ficción. El inglés y el tema oscuro son los valores iniciales; la paridad inglés/español y los selectores siguen formando parte del producto.

La colección está en `/for-agents/`. Su índice y los documentos ES/EN se escriben en Markdown en `src/content/agent-docs/` y se publican como HTML estático, sencillo y enlazado. Personas y agentes recorren los mismos enlaces. Los `.md` fuente no se publican como una segunda vista. Solo hay una conexión visible por dirección entre esta colección y la interfaz humana: entrada desde el `AGENTS.md` humano y retorno en la cabecera agéntica (`AG-027`). Los demás cruces se retiraron en S13. S14 añade conexiones contextuales (`AG-029`) y un mapa visual en el `README.md` humano (`AG-040`). La colección agéntica recoge información práctica del perfil, sin referencias a las bromas de la interfaz (`AG-031`).

## Scrum propio

- Juan decide prioridad y aceptación.
- El sprint se define por una entrega revisable, sin duración artificial ni métricas de equipo inventadas.
- `BACKLOG.md` contiene toda tarea pendiente, incluso si ya está seleccionada o espera aceptación; `COMPLETADAS.md` contiene las terminadas con las mismas columnas. El producto solo se considera terminado cuando el primero se vacíe. `SPRINT_ACTUAL.md` contiene el incremento activo; `VERSIONES.md` no reutiliza las versiones de Neuron Mesh.
- Los cierres quedan en `sprints/`. No hay un Scrum compartido en la raíz.
- El scaffold actual no convierte las funciones futuras en trabajo terminado.
