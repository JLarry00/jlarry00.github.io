# Sprint ENV-02 — Sitios separados y selector de publicación

Estado: cerrado el 24/09/2026 tras validar instalación, builds, publicación y rutas públicas.

Objetivo: mantener Neuron Mesh funcional en `websites/neuron-mesh/`, aislar la aplicación Agent y hacer que la publicación de GitHub Pages siga una selección estricta cuyo valor inicial sea Neuron Mesh.

| ID | Tarea | Estado | Evidencia o pendiente |
|---|---|---|---|
| `ENV-005` | Mover la web clásica a su ubicación definitiva y conservar sus rutas | Terminado | 46 archivos originales de código y assets comparados byte a byte; `astro check` sin errores y build de 14 páginas. |
| `ENV-006` | Añadir selector raíz y comandos independientes para cada app | Terminado | `npm run setup`, los dos checks y builds ejecutados; destinos válidos probados y valores inválidos rechazados. |
| `ENV-007` | Construir en Pages solo el destino elegido y fallar ante una selección inválida | Terminado | [Ejecución #3 de GitHub Actions](https://github.com/JLarry00/jlarry00.github.io/actions/runs/35939520955) terminó en success para `91703e8`. |
| `ENV-008` | Mantener Neuron Mesh como versión inicial publicada | Terminado | `site.config.json` parte de `neuron-mesh`; su `dist/` contiene las mismas 14 rutas. |

El cierre técnico y la evidencia local y remota están en `sprints/ENV-02-selector.md`. El scaffold y el Scrum de Agent se registran en su propio ciclo: `websites/agent/planning/sprints/S01-workspace-scaffold.md`.

## Cierre

El workflow remoto terminó correctamente y las rutas principales publicadas respondieron HTTP 200. El selector sigue apuntando a Neuron Mesh.
