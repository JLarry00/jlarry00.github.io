# Sprint ENV-02 — Sitios separados y selector de publicación

Estado: cerrado el 24/09/2026. Implementación, checks, builds y primera ejecución de Pages verificados.

## Objetivo

Mantener Neuron Mesh en `websites/neuron-mesh/`, aislar Agent y permitir que GitHub Pages publique exactamente la app seleccionada en `site.config.json`, con Neuron Mesh como valor inicial.

## Resultado y aceptación local

| ID | Resultado | Evidencia |
|---|---|---|
| `ENV-005` | App clásica trasladada a su ubicación definitiva | 46 archivos Astro, páginas y assets comparados byte a byte con `HEAD`; `astro check`: 0 errores, 0 avisos, 0 hints; `astro build`: 14 páginas. |
| `ENV-006` | Selector y comandos de raíz añadidos | `npm run setup` instaló las dos apps; sus checks pasaron. Configuración `neuron-mesh` y `agent` mapeó a su propio dist; desconocido, vacío, nulo y propiedades extra fallaron. |
| `ENV-007` | Workflow usa el selector para instalar, compilar y subir | [Ejecución #3](https://github.com/JLarry00/jlarry00.github.io/actions/runs/35939520955) terminó en `success` para `91703e8`. |
| `ENV-008` | Neuron Mesh queda seleccionada inicialmente | `activeSite` es `neuron-mesh`; dist contiene exactamente las 14 rutas HTML anteriores y no incluye planning/contexto. Seis rutas públicas revisadas devolvieron HTTP 200. |

## Límites del cierre

Los comandos `dev` de ambas apps respondieron HTTP 200 con la misma copia limpia en filesystem Linux temporal. El checkout bajo `/mnt/c` es lento al iniciar Astro por el disco WSL/NTFS y excedió el límite de arranque del terminal interactivo; no se cambió el producto para sortear esa lentitud.

## Seguimiento estructural (24/09/2026)

A petición de Juan, Neuron Mesh se trasladó de la ubicación inicial `website/neuron-mesh/` a `websites/neuron-mesh/`, como hermana de `websites/agent/`. Se actualizaron los comandos raíz, las referencias documentales y Scrum, la ruta de caché del workflow y la skill de Scrum. El build desde la ubicación final generó las 14 páginas esperadas. `astro check` quedó atascado en lecturas del checkout WSL/NTFS y se interrumpió; no fue un rechazo de permisos. La aplicación no tuvo cambios de código fuente.
