# Workspace agéntico de Juan Larrondo

Este repositorio reúne el entorno del agente y dos aplicaciones Astro independientes. `AGENTS.md` contiene las reglas del workspace y [`START_HERE.md`](./START_HERE.md) es la guía de entrada para una máquina nueva.

## Requisitos y primer uso

Instala Node.js 22.12 o posterior y npm. Desde la raíz del clon:

```sh
npm run setup
npm run dev:active
```

`setup` instala cada aplicación desde su propio lockfile. No hace falta ejecutar npm install en la raíz; el package raíz solo coordina comandos.

## Aplicaciones

| Aplicación | Código | Scrum |
|---|---|---|
| Neuron Mesh, web existente | [`websites/neuron-mesh/`](./websites/neuron-mesh/) | [`planning/`](./websites/neuron-mesh/planning/) |
| Agent, Alpha visual del portfolio tipo editor | [`websites/agent/`](./websites/agent/) | [`planning/`](./websites/agent/planning/) |

Cada web tiene dependencias, lockfile, Scrum y versiones propias. Agent usa fichas visuales para personas, Markdown directo para lectores automáticos y un workbench con temas, búsqueda de archivos, una rama ficticia y Run and Debug. Su perfil y organización siguen en revisión.

## Comandos desde la raíz

```sh
npm run dev:neuron-mesh
npm run build:neuron-mesh
npm run check:neuron-mesh

npm run dev:agent
npm run build:agent
npm run check:agent

npm run dev:active
npm run build:active
npm run check:active

# Compila primero las dos webs; después compone el artefacto Pages:
npm run build:pages
```

`site.config.json` selecciona qué web usan los comandos locales `*:active`. Su valor actual es `agent` y uno inválido falla. GitHub Pages publica ambas: Agent en `/` y Neuron Mesh en `/neon-mesh/` (la subruta pedida por Juan). El workflow construye los dos `dist/` y compone `.pages-dist/`, que se ignora en Git. Las antiguas URL de páginas tienen redirecciones HTML cuando no colisionan con Agent. La rama `batman` de Agent es una simulación de interfaz.

## Contexto y configuración del agente

- `.agents/skills/` y `.codex/agents/` se versionan para que viajen con el clon. Revisa `START_HERE.md` para la activación y las limitaciones de configuración propia de cada ordenador.
- Añade propuestas a [`SUGERENCIAS.md`](./SUGERENCIAS.md); Codex las revisa y, tras aclarar contigo lo que haga falta, las integra en el Scrum del producto correspondiente.
- [`context/`](./context/) contiene una síntesis pública y fechada; no se copia al sitio publicado.
- `contexto/`, CVs, credenciales, instalaciones, cachés y artefactos generados no forman parte del repositorio ni del artefacto de Pages.
- El [índice de Scrum](./PLANNING_INDEX.md) solo enlaza a los dos planes independientes.
