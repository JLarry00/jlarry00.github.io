# Portfolio Agent — brief de producto y Scrum

Esta carpeta describe la segunda versión del portfolio personal: una experiencia web que presenta el perfil como el repositorio de un agente. El brief es una dirección de producto, no permiso para inventar hechos profesionales ni para publicar la variante antes de elegirla.

## Alcance de esta línea

La aplicación vive en `websites/agent/`; su único Scrum está en `websites/agent/planning/`. No comparte backlog, sprint ni registro de versiones con Neuron Mesh. `S01` preparó la estructura independiente, `S02` construyó la Alpha visual, `S03` revisó su primera impresión, `S04` afinó iconos y selección, y `S05` añadió temas. `S06`–`S08` cubren contenido inicial, funciones y publicación doble. El árbol definitivo, las reviews en vídeo y el QA final siguen pendientes.

## Experiencia prevista

- Interfaz inspirada en VS Code, simplificada para leer un portfolio y sin controles que no tengan una función real.
- Explorer como vista principal, con una carpeta abierta que representa el repo de un agente.
- Search busca solo nombres y rutas de archivos.
- Source Control simula ramas de presentación. `main` muestra el perfil y la web reales; las ramas de broma se identifican con claridad como ficción. Una presenta la identidad secreta de Batman de forma tan pública que la ironía sea evidente. No son ramas Git ni identidades alternativas reales.
- Run and Debug abre una animación ligera, tipo stickman, de alguien corriendo detrás de bichos para eliminarlos como bugs de software. Debe poder pausarse y respetar `prefers-reduced-motion`.
- No mostrar Extensions hasta que exista una función útil y decidida.
- Temas con al menos un claro clásico y un oscuro clásico; se valorarán paletas conocidas adicionales mediante tokens de diseño.
- En móvil, mantener Explorer accesible y el contenido legible sin forzar la distribución de escritorio.

## Árbol público previsto

```text
README.md
AGENTS.md
Welcome.md
Experience.md
Contact.md
skills/
  README.md
  [skill].md
projects/
  README.md
  [project].md
Hobbies/  (mayúscula propuesta por Juan; confirmar antes de fijar la ruta pública)
  [hobby].md
```

El árbol anterior es una propuesta explícita de Juan, todavía no acordada. S06 publicó una selección provisional de archivos para ensayar contenido y navegación sin cerrar `AG-005`; sus rutas pueden cambiar tras ver opciones con Juan. Los documentos públicos se generan como Markdown real desde `src/data/profile.json`, y la interfaz humana presenta fichas visuales. Las instrucciones reales del agente que desarrolla este workspace no se publican como perfil; el `AGENTS.md` del portfolio es contenido deliberado y distinto.

## Contenido y voz

La web clásica es una fuente inicial, no una autorización para copiar cada frase. S06 usa hechos claros del workspace `PerfilProfesional` y declara los límites de los proyectos; el vídeo de reviews no se ha procesado y el copy sigue siendo provisional hasta `AG-004`. Se distinguen hechos, experiencia, aprendizaje, planes y ficción. La paridad inglés/español forma parte de aceptación.

La colección tiene una entrada humana en `/for-agents/`, con botones a las páginas HTML interpretadas y a los Markdown directos. Estos últimos forman la entrada para lectores automáticos en `/for-agents/index.md`, con enlaces `.md` relativos; no se presupone que un agente necesite recorrer la interfaz visual. Welcome y cada ficha enlazan a la colección.

## Scrum propio

- Juan decide prioridad y aceptación.
- El sprint se define por una entrega revisable, sin duración artificial ni métricas de equipo inventadas.
- `BACKLOG.md` contiene toda tarea pendiente, incluso si ya está seleccionada o espera aceptación; `COMPLETADAS.md` contiene las terminadas con las mismas columnas. El producto solo se considera terminado cuando el primero se vacíe. `SPRINT_ACTUAL.md` contiene el incremento activo; `VERSIONES.md` no reutiliza las versiones de Neuron Mesh.
- Los cierres quedan en `sprints/`. No hay un Scrum compartido en la raíz.
- El scaffold actual no convierte las funciones futuras en trabajo terminado.
