# Neuron Mesh

Web personal bilingüe construida con Astro y CSS propio, publicada antes de organizar este repositorio como workspace. Su código, assets, rutas y dependencias se mantienen dentro de esta carpeta.

Desde la raíz del repositorio:

```sh
npm run install:neuron-mesh
npm run dev:neuron-mesh
npm run build:neuron-mesh
```

El workflow compila esta web con `NEURON_MESH_BASE=/neon-mesh/` y la publica bajo esa subruta. Sin esa variable, los comandos locales sirven la web en `/`. `../../site.config.json` solo selecciona la variante activa para comandos locales; el Scrum y las decisiones de esta web están en `planning/`.
