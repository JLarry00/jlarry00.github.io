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
| Agent, futura web tipo editor | [`websites/agent/`](./websites/agent/) | [`planning/`](./websites/agent/planning/) |

Cada web tiene dependencias, lockfile, backlog, sprint y versiones propias. El brief de Agent conserva Explorer, Search, ramas simuladas, temas, Run and Debug y el acceso a Markdown para lectores automáticos; aún no se ha implementado la interfaz.

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
```

`site.config.json` contiene el selector de publicación. Su valor inicial es `neuron-mesh`; editar `activeSite` a `agent` hace que el workflow de GitHub Pages construya esa aplicación. Un valor inválido falla antes de desplegar. Las ramas de broma que aparezcan en Agent serán solo una simulación de interfaz.

## Contexto y configuración del agente

- `.agents/skills/` y `.codex/agents/` se versionan para que viajen con el clon. Revisa `START_HERE.md` para la activación y las limitaciones de configuración propia de cada ordenador.
- [`context/`](./context/) contiene una síntesis pública y fechada; no se copia al sitio publicado.
- `contexto/`, CVs, credenciales, instalaciones, cachés y artefactos generados no forman parte del repositorio ni del artefacto de Pages.
- El [índice de Scrum](./PLANNING_INDEX.md) solo enlaza a los dos planes independientes.
