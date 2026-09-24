# Sprint S08 — Publicación simultánea

Estado: planificado tras S07; autorización de Juan recibida el 24/09/2026.

Objetivo: mantener Neuron Mesh en la raíz de GitHub Pages y publicar Agent en `/agent/` desde el mismo repositorio y workflow.

Seleccionado: `AG-015`. La composición y protección de la web clásica se registran por separado en el Scrum de Neuron Mesh.

- Compilar Agent con base `/agent/` y conservar la compilación local en `/`.
- Componer ambos `dist` en un solo artefacto y comprobar que contiene únicamente archivos públicos.
- Publicar, esperar el workflow y verificar rutas de las dos webs.
- Mantener Agent identificado como versión en desarrollo y `noindex` hasta decisión posterior.

## Comprobación local

`astro check` de Agent terminó sin diagnósticos. Su build de producción con `AGENT_BASE=/agent/` generó dos rutas HTML y copió 23 Markdown. Neuron Mesh generó sus 14 HTML. `.pages-dist/` contiene ambos sitios y ningún archivo del workspace privado; Agent enlaza CSS y Markdown bajo `/agent/`. Queda pendiente subir y observar GitHub Actions y las URLs públicas.
