# Sprint ENV-02 — Sitios separados y selector de publicación

Estado: pendiente de cierre remoto. Implementación, checks y builds locales terminados el 24/09/2026; el primer workflow de Pages aún no se ha observado.

## Objetivo

Mantener Neuron Mesh en `website/neuron-mesh/`, aislar Agent y permitir que GitHub Pages publique exactamente la app seleccionada en `site.config.json`, con Neuron Mesh como valor inicial.

## Resultado y aceptación local

| ID | Resultado | Evidencia |
|---|---|---|
| `ENV-005` | App clásica trasladada a su ubicación definitiva | 46 archivos Astro, páginas y assets comparados byte a byte con `HEAD`; `astro check`: 0 errores, 0 avisos, 0 hints; `astro build`: 14 páginas. |
| `ENV-006` | Selector y comandos de raíz añadidos | `npm run setup` instaló las dos apps; sus checks pasaron. Configuración `neuron-mesh` y `agent` mapeó a su propio dist; desconocido, vacío, nulo y propiedades extra fallaron. |
| `ENV-007` | Workflow usa el selector para instalar, compilar y subir | YAML parseado; salida de selección coincide con `website/neuron-mesh/dist`. Falta observar Actions/Pages tras el push. |
| `ENV-008` | Neuron Mesh queda seleccionada inicialmente | `activeSite` es `neuron-mesh`; dist contiene exactamente las 14 rutas HTML anteriores y no incluye planning/contexto. |

## Límites del cierre

Los comandos `dev` de ambas apps respondieron HTTP 200 con la misma copia limpia en filesystem Linux temporal. El checkout bajo `/mnt/c` es lento al iniciar Astro por el disco WSL/NTFS y excedió el límite de arranque del terminal interactivo; no se cambió el producto para sortear esa lentitud. El resultado de Pages se cerrará cuando exista una ejecución remota verificable.
