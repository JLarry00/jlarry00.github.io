import { defineConfig } from 'astro/config'

const base = process.env.NEURON_MESH_BASE ?? '/'
if (!['/', '/neon-mesh/'].includes(base)) throw new Error(`NEURON_MESH_BASE no válido: ${base}`)

export default defineConfig({
  site: 'https://jlarry00.github.io',
  base,
  output: 'static',
  trailingSlash: 'always',
})
