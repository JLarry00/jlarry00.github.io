# Sprint S09 — Agent en la raíz

Estado: cerrado el 24/09/2026 tras publicación remota.

Objetivo: mostrar Agent en `/` y sus Markdown en `/for-agents/`, manteniendo la web clásica accesible en `/neon-mesh/`.

Seleccionado: `AG-025`. Neuron Mesh registra su propio cambio en ENV-04.

- Seleccionar Agent como variante activa local.
- Compilar Agent con base `/` y componer su `dist/` en la raíz del artefacto Pages.
- Mantener etiqueta de desarrollo y `noindex` hasta decisión editorial posterior.
- Publicar y comprobar rutas y recursos desde el remoto.

## Resultado

El commit `e59e63c` activó [GitHub Actions #35997797464](https://github.com/JLarry00/jlarry00.github.io/actions/runs/35997797464), concluido en `success`. Agent respondió 200 en `/` y su índice en `/for-agents/index.md` respondió 200 con `text/markdown`. La raíz contiene la hoja de estilo de Agent y la presentación conserva `noindex` y su etiqueta Alpha. La antigua `/agent/` sirve una redirección HTML hacia `/`; los Markdown anteriores siguen accesibles en `/agent/for-agents/` como compatibilidad. El contenido y la aceptación visual siguen pendientes en sus tareas originales.
