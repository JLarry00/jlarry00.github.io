# Sprint S14 — Markdown brain

Estado: aceptado por Juan el 24/09/2026; publicado después por Juan mediante [GitHub Pages #36057025710](https://github.com/JLarry00/jlarry00.github.io/actions/runs/36057025710), verificado el 26/09/2026. Producto: Agent. Seleccionado: `AG-035`, `AG-029`, `AG-040`.

## Objetivo

Convertir los documentos del perfil en una red fácil de recorrer: skills agrupadas por campo, enlaces contextuales en el HTML documental y un mapa visual de esos mismos archivos en el portfolio humano.

## Entrega revisable

- `skills/README.md` apunta a áreas de infraestructura, CI/CD, IA aplicada y programación; cada área distingue experiencia de formación y evita niveles inventados.
- Cada Markdown puede llevar a otros documentos relevantes sin pasar obligatoriamente por el índice. La red de enlaces tiene una fuente común para ambas interfaces.
- El portfolio humano ofrece un mapa navegable con nodos reales y alternativas de lectura para móvil y teclado. La colección agéntica conserva enlaces HTML sencillos, suficientes para que un lector automático avance sin interpretar un dibujo.
- Las rutas antiguas de skills ya publicadas conservan una salida útil hacia el área nueva.

El mapa se presenta en la interfaz humana y la estructura de enlaces en la documental, siguiendo la recomendación explicada a Juan. Aceptó esta distribución tras revisar S13 y S14.

## Resultado local

Las skills visibles se agruparon en cuatro áreas con alcances prudentes. La ruta antigua de Terraform muestra un enlace al área de infraestructura. `document-graph.json` gobierna los enlaces relacionados en cada Markdown y ficha humana, además del mapa SVG en `README.md`; en móvil se presenta una lista navegable. La compilación Astro generó 32 páginas estáticas. El servidor local sirvió `dist/` en `http://127.0.0.1:8765/`; en el cierre local aún no se había publicado en GitHub Pages.

Juan aceptó S13 y S14 juntos y pidió publicarlos. Los tres ítems de S14 pasaron a `COMPLETADAS.md`.

## Publicación posterior

Juan subió el commit `35cfbd0`. El workflow #36057025710 terminó correctamente el 24/09/2026; la página principal y `/for-agents/read/en/SOUL/` respondieron HTTP 200 al verificarlas el 26/09/2026.
