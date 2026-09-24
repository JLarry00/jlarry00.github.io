# Sprint ENV-04 — Neuron Mesh en subruta

Estado: cerrado el 24/09/2026 tras publicación remota.

Objetivo: servir Neuron Mesh en `/neon-mesh/`, con enlaces, recursos y URL canónicas correctos, después de pasar Agent a la raíz.

Seleccionado: `ENV-010`. La entrada raíz de Agent se registra por separado como `AG-025` en su Scrum.

- Compilar Neuron Mesh con base de producción `/neon-mesh/`; mantener `/` como base de desarrollo local.
- Componer su `dist/` en la subruta y añadir redirecciones HTML para las antiguas páginas de Neuron Mesh, salvo `/`, que pasa a Agent.
- Construir el artefacto sin contenido privado, publicar y comprobar las URL nuevas y antiguas.

## Resultado

Con `NEURON_MESH_BASE=/neon-mesh/`, Astro compiló las 14 páginas de Neuron Mesh y sus enlaces internos, recursos y URL canónicas llevan el prefijo correcto. El artefacto compuso Agent en `/`, Neuron Mesh en `/neon-mesh/` y 13 redirecciones HTML de las antiguas páginas clásicas; la antigua `/` quedó reservada para Agent. El commit `e59e63c` activó [GitHub Actions #35997797464](https://github.com/JLarry00/jlarry00.github.io/actions/runs/35997797464), concluido en `success`. `/neon-mesh/`, `/neon-mesh/es/` y la antigua `/es/` respondieron 200; esta última contiene el salto HTML a `/neon-mesh/es/`. Las redirecciones son HTML estático, no respuestas HTTP 301.
