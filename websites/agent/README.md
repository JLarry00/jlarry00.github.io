# Agent portfolio

Aplicación Astro independiente para la variante del portfolio con interfaz de editor. Incluye un workbench inspirado en VS Code, una bienvenida más cercana e iconos por categoría. Explorer abre fichas visuales, Search busca rutas y nombres, Source Control alterna `main` con una única rama ficticia `batman`, y Run and Debug muestra una animación pausable. El perfil es una primera versión y la estructura del árbol sigue sin decidirse.

El selector del título ofrece VS Code oscuro, VS Code claro y variantes inspiradas en Monokai y Solarized Dark. «Tema: sistema» sigue la preferencia de luz/oscuridad del dispositivo. Una elección manual se guarda en `localStorage`; volver a «Tema: sistema» la elimina.

`src/data/profile.json` es la fuente de los textos de la interfaz y del Markdown público. `scripts/generate-agent-markdown.mjs` genera archivos reales en `public/for-agents/` antes de compilar; vuelve a ejecutarlo tras editar los datos si quieres revisar el Markdown sin hacer un build. La entrada para lectores automáticos está en `/for-agents/` en desarrollo local y `/agent/for-agents/` en Pages. El HTML humano presenta tarjetas; los Markdown ofrecen resúmenes y límites más directos. Las rutas son provisionales hasta decidir `AG-005`.

Los iconos de producto proceden de [VS Code Codicons](https://github.com/microsoft/vscode-codicons) y se incluyen con su [atribución y licencia](./public/icons/codicons/ATTRIBUTION.txt). Los SVG están en `src/icons/codicons/`; CSS les asigna colores por categoría que contrastan con los temas claros y oscuros.

Desde la raíz del repositorio:

```sh
npm run install:agent
npm run dev:agent
npm run build:agent
```

El encargo, backlog pendiente, tareas terminadas, sprint y versiones propios están en `planning/`. Para desplegar con la web clásica, el workflow compila Agent con `AGENT_BASE=/agent/` y lo coloca en esa subruta. `../../site.config.json` solo afecta a los comandos locales `*:active`.
