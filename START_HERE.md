# Inicio del workspace agéntico

Actualizado el 24/09/2026. Esta guía es para la raíz del repositorio; no es contenido de ninguna de las webs.

## En un clon nuevo

1. Instala Node.js 22.12 o posterior y npm.
2. Marca este repositorio como confiable en Codex si quieres cargar sus instrucciones, skills de `.agents/skills/` y agentes de `.codex/agents/`. Los perfiles del proyecto no incluyen credenciales ni conexiones personales.
3. Ejecuta `npm run setup` desde la raíz para instalar, por separado, las dependencias de `websites/neuron-mesh/` y `websites/agent/`.
4. Ejecuta `npm run dev:active` o el comando explícito de una web.

No ejecutes npm install en la raíz. La raíz no tiene dependencias de aplicación; sus scripts llaman a cada proyecto.

## Mapa

- `AGENTS.md`: reglas compartidas del workspace.
- `.agents/skills/scrum-master/`: skill Scrum instalada, adaptada a dos planes de producto y con licencia/atribución upstream.
- [`SUGERENCIAS.md`](./SUGERENCIAS.md): bandeja de entrada que Codex revisa y deriva al backlog de producto adecuado.
- `websites/neuron-mesh/`: web existente. Su Scrum está en `websites/neuron-mesh/planning/`.
- `websites/agent/`: Alpha visual Astro de la nueva variante. Su Scrum está en `websites/agent/planning/`.
- `site.config.json`: selección estricta de la web usada por los comandos locales `*:active`; inicialmente `neuron-mesh`.
- `scripts/site.mjs`: resuelve selección, instalación, desarrollo, comprobaciones, compilación y composición de las dos webs.
- `context/`: síntesis curada de información ya publicada y decisiones editoriales seguras para versionar.
- `contexto/`: posibles fuentes privadas locales. Está excluido de Git y nunca se copia a `context/` sin revisión.
- `.github/workflows/deploy.yml`: construye ambas aplicaciones y publica un artefacto con Neuron Mesh en `/` y Agent en `/agent/`.

El índice [`PLANNING_INDEX.md`](./PLANNING_INDEX.md) enlaza a ambos Scrums. No existe un backlog compartido.

## Estado de producto

Neuron Mesh se mantiene en la raíz de Pages. Agent vive en `/agent/` como versión en desarrollo y no indexable, con workbench de VS Code, fichas de perfil iniciales, Markdown para IA, temas, búsqueda de archivos, una rama ficticia y una animación ligera. La organización definitiva, la revisión del vídeo y el QA final siguen pendientes. Su Scrum registra el alcance y los incrementos.

Antes de usar copy de la web clásica en Agent, revisa `context/public-profile-snapshot.md`, contrasta fechas y estado actual con Juan y verifica las afirmaciones técnicas contra los repositorios. Las reviews editoriales de Juan deben informar el tono antes de escribir el perfil final.

## Trabajar en una variante

Lee las instrucciones raíz y solo la planificación del producto afectado. Ejecuta comandos desde la raíz:

- Neuron Mesh: `npm run dev:neuron-mesh`, `npm run check:neuron-mesh`, `npm run build:neuron-mesh`.
- Agent: `npm run dev:agent`, `npm run check:agent`, `npm run build:agent`.
- Variante elegida: `npm run dev:active`, `npm run check:active`, `npm run build:active`.

Cualquier nuevo clon necesita también que Juan configure su inicio de sesión de Codex y sus conexiones personales en ese ordenador; esos secretos no viajan con Git.
