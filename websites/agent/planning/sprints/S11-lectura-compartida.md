# Sprint S11 — Una lectura compartida

Estado: cerrado el 24/09/2026 tras publicación remota. Juan aceptó `AG-026` después de revisar la entrega: «Los markdown me gustan más así, ese req está terminado».

Objetivo: publicar una sola colección de documentos interpretados, navegable por personas e IA, en respuesta a la corrección de Juan sobre S10.

Seleccionado: `AG-026`.

- Conservar Markdown real como fuente en el repositorio.
- Renderizar el índice y los 22 documentos ES/EN como HTML estático sencillo, sin JavaScript.
- Convertir los enlaces internos de la fuente Markdown en enlaces HTML válidos entre las páginas publicadas.
- Retirar del artefacto los `.md` crudos y los controles que sugieren dos versiones de lectura.
- Publicar y comprobar el índice, rutas enlazadas y ausencia de `.md` públicos. La aceptación de Juan seguirá pendiente tras el despliegue.

## Resultado

El Markdown fuente se trasladó de `public/for-agents/` a `src/content/agent-docs/`. Astro compiló el índice y los 22 documentos ES/EN como 23 páginas HTML de la colección, más la portada Agent. El índice HTML publica 22 enlaces a documentos; el HTML de README ES enlaza a los demás documentos y al índice. La composición local no contiene `.md` públicos y sus enlaces internos apuntan a archivos HTML presentes. La lectura se simplificó a tipografía, encabezados, listas y enlaces.

El commit `9e96db0` activó [GitHub Actions #36024962878](https://github.com/JLarry00/jlarry00.github.io/actions/runs/36024962878), concluido en `success`. `/for-agents/` y `/for-agents/read/es/README/` respondieron 200 con `text/html`; la antigua `/for-agents/es/README.md` respondió 404 y `/neon-mesh/` siguió respondiendo 200. En el HTML público, el índice tiene 22 enlaces a documentos y ningún enlace a `.md` crudos. Al cerrar el sprint, la aceptación de Juan todavía estaba pendiente.

Tras esa aceptación, `AG-026` pasó a `COMPLETADAS.md`. Las mejoras nuevas de navegación y contenido quedaron registradas como trabajo independiente en el Product Backlog.
