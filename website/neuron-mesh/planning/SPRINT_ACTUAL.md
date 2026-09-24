# Sprint ENV-02 — Sitios separados y selector de publicación

Estado: en revisión remota. Las apps se instalaron, analizaron y compilaron localmente; falta confirmar la primera ejecución de GitHub Actions después de sincronizar los cambios.

Objetivo: mantener Neuron Mesh funcional en `website/neuron-mesh/`, aislar la aplicación Agent y hacer que la publicación de GitHub Pages siga una selección estricta cuyo valor inicial sea Neuron Mesh.

| ID | Tarea | Estado | Evidencia o pendiente |
|---|---|---|---|
| `ENV-005` | Mover la web clásica a su ubicación definitiva y conservar sus rutas | Terminado | 46 archivos originales de código y assets comparados byte a byte; `astro check` sin errores y build de 14 páginas. |
| `ENV-006` | Añadir selector raíz y comandos independientes para cada app | Terminado | `npm run setup`, los dos checks y builds ejecutados; destinos válidos probados y valores inválidos rechazados. |
| `ENV-007` | Construir en Pages solo el destino elegido y fallar ante una selección inválida | En revisión | YAML parseado y paso de selección comprobado localmente; falta el resultado de GitHub Actions. |
| `ENV-008` | Mantener Neuron Mesh como versión inicial publicada | Terminado | `site.config.json` parte de `neuron-mesh`; su `dist/` contiene las mismas 14 rutas. |

El cierre técnico y la evidencia local están en `sprints/ENV-02-selector.md`. El scaffold y el Scrum de Agent se registran en su propio ciclo: `websites/agent/planning/sprints/S01-workspace-scaffold.md`.

## Cierre

Pendiente hasta revisar el primer resultado remoto de Pages. Un build local confirma el código y el destino, pero no sustituye esa ejecución.
