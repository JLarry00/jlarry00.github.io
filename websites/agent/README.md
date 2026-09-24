# Agent portfolio

Aplicación Astro independiente para la variante del portfolio con interfaz de editor. Incluye un workbench inspirado en VS Code, una bienvenida más cercana e iconos por categoría. Explorer abre fichas visuales, Search busca rutas y nombres, Source Control alterna `main` con una única rama ficticia `batman`, y Run and Debug muestra una animación pausable. El perfil es una primera versión y la estructura del árbol sigue sin decidirse.

El selector del título ofrece VS Code oscuro, VS Code claro y variantes inspiradas en Monokai y Solarized Dark. «Tema: sistema» sigue la preferencia de luz/oscuridad del dispositivo. Una elección manual se guarda en `localStorage`; volver a «Tema: sistema» la elimina.

`src/data/profile.json` es la fuente de los textos de la interfaz y del Markdown público. `scripts/generate-agent-markdown.mjs` genera archivos reales en `public/for-agents/` antes de compilar; vuelve a ejecutarlo tras editar los datos si quieres revisar el Markdown sin hacer un build. `/for-agents/` ofrece a las personas botones para leer los 22 documentos ES/EN con formato en `/for-agents/read/…/` y acceso explícito a cada `.md` original. La vista con formato renderiza esos mismos archivos mediante una colección Astro y convierte los enlaces internos a rutas HTML; los `.md` directos conservan sus enlaces entre archivos para lectores automáticos. El HTML del portfolio presenta tarjetas. Las rutas son provisionales hasta decidir `AG-005`.

Los iconos de producto proceden de [VS Code Codicons](https://github.com/microsoft/vscode-codicons) y se incluyen con su [atribución y licencia](./public/icons/codicons/ATTRIBUTION.txt). Los SVG están en `src/icons/codicons/`; CSS les asigna colores por categoría que contrastan con los temas claros y oscuros.

Desde la raíz del repositorio:

```sh
npm run install:agent
npm run dev:agent
npm run build:agent
```

El encargo, backlog pendiente, tareas terminadas, sprint y versiones propios están en `planning/`. El workflow publica Agent en `/` y Neuron Mesh en `/neon-mesh/`. `../../site.config.json` selecciona Agent para los comandos locales `*:active`; no controla la publicación doble.
