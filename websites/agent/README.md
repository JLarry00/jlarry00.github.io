# Agent portfolio

Aplicación Astro independiente para la variante del portfolio con interfaz de editor. Explorer abre fichas visuales, Search busca rutas y nombres, Source Control alterna `main` con una única rama ficticia y Run and Debug muestra una animación pausable. El perfil y su redacción siguen en desarrollo.

El selector del título ofrece VS Code oscuro, VS Code claro y variantes inspiradas en Monokai y Solarized Dark. Inglés y VS Code oscuro son las preferencias iniciales. Las elecciones de idioma y tema se guardan en `localStorage`; «Tema: sistema» sigue la preferencia de luz/oscuridad del dispositivo y también se recuerda.

`src/data/profile.json` contiene los textos de las fichas humanas y la base factual de los Markdown. Cuando hace falta distinguir el propósito, `agentLead` y `agentSections` aportan texto documental. `src/data/document-graph.json` es la fuente de los vínculos entre archivos y de las posiciones del mapa visual. Cada ruta declarada allí debe existir en `profile.json`; el generador falla si no coinciden.

`scripts/generate-agent-markdown.mjs` regenera `src/content/agent-docs/` antes de compilar. Astro transforma esos Markdown en páginas HTML estáticas en `/for-agents/` y `/for-agents/read/…/`. Los enlaces relativos se convierten en enlaces entre páginas HTML. Personas y agentes pueden seguir los mismos enlaces sin JavaScript; los `.md` fuente no se copian al sitio. La interfaz humana usa fichas visuales y un mapa en `README.md`, alimentado por las mismas relaciones. Su único acceso visible a la colección está dentro de `AGENTS.md`; la cabecera documental vuelve a ese archivo. Los enlaces antiguos a `skills/terraform.md` conducen a `skills/infrastructure.md`.

El árbol público contiene `Welcome.md`, `README.md`, `AGENTS.md`, `SOUL.md`, `Experience.md`, `Contact.md`, `skills/` y `projects/`. `SOUL.md` es el About personal, incluidos los hobbies que Juan decida publicar; su contenido actual es provisional. `MEMORY.md` queda aplazado y no se crea como relleno.

Los iconos de producto proceden de [VS Code Codicons](https://github.com/microsoft/vscode-codicons) y se incluyen con su [atribución y licencia](./public/icons/codicons/ATTRIBUTION.txt). Los SVG están en `src/icons/codicons/`; CSS les asigna colores por categoría que contrastan con los temas claros y oscuros.

Desde la raíz del repositorio:

```sh
npm run install:agent
npm run dev:agent
npm run build:agent
```

El encargo, backlog pendiente, tareas terminadas, sprint y versiones propios están en `planning/`. El workflow publica Agent en `/` y Neuron Mesh en `/neon-mesh/`. `../../site.config.json` selecciona Agent para los comandos locales `*:active`; no controla la publicación doble.
