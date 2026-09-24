# Sprint S07 — Funciones del workbench

Estado: cerrado como incremento local el 24/09/2026; pendiente revisión de Juan.

Objetivo: convertir Search, Source Control y Run and Debug en funciones reales de portfolio, y dar rutas directas a los documentos.

Seleccionado: `AG-010`, `AG-011`, `AG-012`, `AG-013`.

- Search filtra solo rutas/nombres y abre resultados.
- Source Control alterna `main` y una sola rama ficticia `batman`, señalada como broma pública.
- Run and Debug reproduce una animación ligera de figura y bugs, pausada si hay reducción de movimiento.
- Cada documento tiene enlace directo y par ES/EN; el breadcrumb sigue la ruta.

Límite: no añadir ramas adicionales ni decidir el árbol final de `AG-005`.

## Resultado

Search filtra solo nombres y rutas y ofrece resultados activables; tiene indicación inicial y estado vacío. Source Control ofrece `main` y únicamente `batman`: la segunda vista es una broma rotulada como ficción y no altera Git ni los Markdown factuales. Run and Debug muestra un stickman SVG que persigue bugs dibujados en CSS; se puede pausar y se detiene si el dispositivo pide reducción de movimiento. Los documentos usan enlaces hash directos con variantes ES/EN; el breadcrumb refleja carpetas y archivo. «Juan» es etiqueta provisional hasta debatir `AG-005`.

La compilación local incluyó estas funciones; el script del navegador pasó comprobación sintáctica con Node. Es una entrega funcional, no el QA final reservado para `AG-014`. La revisión de interacción de Juan permanece abierta.
