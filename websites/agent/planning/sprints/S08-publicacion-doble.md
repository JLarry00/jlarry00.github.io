# Sprint S08 — Publicación simultánea

Estado: cerrado el 24/09/2026; publicación remota comprobada. La revisión editorial y visual de Agent continúa abierta.

Objetivo: mantener Neuron Mesh en la raíz de GitHub Pages y publicar Agent en `/agent/` desde el mismo repositorio y workflow.

Seleccionado: `AG-015`. La composición y protección de la web clásica se registran por separado en el Scrum de Neuron Mesh.

- Compilar Agent con base `/agent/` y conservar la compilación local en `/`.
- Componer ambos `dist` en un solo artefacto y comprobar que contiene únicamente archivos públicos.
- Publicar, esperar el workflow y verificar rutas de las dos webs.
- Mantener Agent identificado como versión en desarrollo y `noindex` hasta decisión posterior.

## Comprobación local

`astro check` de Agent terminó sin diagnósticos. Su build de producción con `AGENT_BASE=/agent/` generó dos rutas HTML y copió 23 Markdown. Neuron Mesh generó sus 14 HTML. `.pages-dist/` contiene ambos sitios y ningún archivo del workspace privado; Agent enlaza CSS y Markdown bajo `/agent/`.

## Publicación remota

El commit `886d5d0` se subió a `main`. [GitHub Actions #35989129116](https://github.com/JLarry00/jlarry00.github.io/actions/runs/35989129116) terminó en `success`. Respondieron HTTP 200 la raíz y rutas EN/ES de Neuron Mesh, `/agent/`, `/agent/for-agents/`, su índice `.md`, `Experience.md` en ambos idiomas y el CSS de Agent bajo `/agent/_astro/`. Los Markdown respondieron con `text/markdown`. Agent conserva `noindex` en sus páginas HTML y la etiqueta de desarrollo. `AG-015` pasa al registro de terminadas; AG-006 y las funciones esperan revisión de Juan.
