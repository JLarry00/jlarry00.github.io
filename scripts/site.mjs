import { readFileSync, cpSync, mkdirSync, rmSync, existsSync, writeFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = fileURLToPath(new URL('../', import.meta.url))
const sites = {
  'neuron-mesh': 'websites/neuron-mesh',
  agent: 'websites/agent',
}

function activeSite() {
  let config

  try {
    config = JSON.parse(readFileSync(path.join(root, 'site.config.json'), 'utf8'))
  } catch (error) {
    throw new Error(`No se pudo leer site.config.json: ${error.message}`)
  }

  if (
    config === null ||
    Array.isArray(config) ||
    typeof config !== 'object' ||
    Object.keys(config).length !== 1 ||
    !Object.hasOwn(config, 'activeSite') ||
    !Object.hasOwn(sites, config.activeSite)
  ) {
    throw new Error('site.config.json debe contener solo activeSite: "neuron-mesh" o "agent".')
  }

  return config.activeSite
}

function resolveSite(requested) {
  const name = requested ?? activeSite()

  if (!Object.hasOwn(sites, name)) {
    throw new Error(`Web desconocida: ${name}. Opciones válidas: ${Object.keys(sites).join(', ')}.`)
  }

  return { name, directory: path.join(root, sites[name]) }
}

function runNpm(site, args) {
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  const result = spawnSync(command, args, {
    cwd: site.directory,
    stdio: 'inherit',
    shell: process.platform === 'win32',
  })

  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
}

function composePages() {
  activeSite() // A malformed selector is still an error, even though Pages now contains both sites.
  const neuron = path.join(root, sites['neuron-mesh'], 'dist')
  const agent = path.join(root, sites.agent, 'dist')
  if (!existsSync(path.join(neuron, 'index.html')) || !existsSync(path.join(agent, 'index.html'))) {
    throw new Error('Faltan los builds de Neuron Mesh o Agent para componer Pages.')
  }
  const output = path.join(root, '.pages-dist')
  rmSync(output, { recursive: true, force: true })
  mkdirSync(output, { recursive: true })
  cpSync(neuron, output, { recursive: true })
  cpSync(agent, path.join(output, 'agent'), { recursive: true })
  writeFileSync(path.join(output, '.nojekyll'), '')
  process.stdout.write(`${output}\n`)
}

const [action, requestedSite] = process.argv.slice(2)

try {
  if (action === 'setup') {
    for (const name of Object.keys(sites)) runNpm(resolveSite(name), ['ci'])
  } else if (action === 'compose') {
    composePages()
  } else if (['install', 'dev', 'build', 'check', 'preview'].includes(action)) {
    const site = resolveSite(requestedSite)

    if (action === 'install') runNpm(site, ['ci'])
    else runNpm(site, ['run', action])
  } else {
    throw new Error('Uso: site.mjs setup | compose | install|dev|build|check|preview [neuron-mesh|agent]')
  }
} catch (error) {
  process.stderr.write(`${error.message}\n`)
  process.exit(1)
}
