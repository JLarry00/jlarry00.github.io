# Sprint S01 — Workspace y scaffold independiente

Estado: cerrado localmente el 24/09/2026.

## Objetivo

Crear la ubicación, planificación independiente y aplicación mínima compilable para Agent sin empezar aún el diseño ni el contenido final.

## Trabajo seleccionado

| ID | Tarea | Resultado |
|---|---|---|
| `AG-001` | Crear la app Astro independiente | Package, configuración, página mínima y lockfile propios en `websites/agent/`; instalación limpia, check y build verificados. |
| `AG-002` | Migrar el brief y backlog | Actualizados a las rutas definitivas y a las decisiones expresadas por Juan. |
| `AG-003` | Evitar copy prematuro | Scaffold marcado como preliminar y no indexable; el perfil final queda pendiente de evidencia y reviews. |

## Validación

- `npm run setup`: instaló ambas apps desde sus lockfiles. `astro check`: 0 errores, 0 avisos, 0 hints. `astro build`: 1 página generada.
- `npm run dev:agent` respondió HTTP 200 en una copia temporal Linux del workspace, instalada offline desde el lockfile. El checkout `/mnt/c` tarda demasiado en iniciar Astro bajo el límite del terminal interactivo.
- No se implementaron las interacciones del portfolio. Siguen en `BACKLOG.md`.
- Neuron Mesh continúa siendo la selección por defecto.

## Retrospectiva

Se mantuvieron los sprints dentro de cada web y se conservó una sola copia del brief. Revisar en el siguiente ciclo si la entrada Markdown para IA debe ofrecer HTML y texto plano en rutas separadas, como recoge el backlog.
