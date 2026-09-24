# Product Backlog — Agent: terminadas

Mismas columnas y criterios que `BACKLOG.md`. Una tarea movida aquí conserva su ID, información y evidencia de cierre.

| ID | Área | Resultado | Prioridad | Estado | Condición / aceptación |
|---|---|---|---|---|---|
| `AG-001` | Estructura | Mantener app Astro, lockfile y comandos independientes en `websites/agent/` | P0 | Terminado | Instalación limpia, check, build y respuesta HTTP 200 comprobados. |
| `AG-002` | Scrum | Migrar el brief y backlog previos a esta carpeta y definir su ciclo inicial | P0 | Terminado | Este directorio es la fuente única del Scrum de Agent. |
| `AG-007` | Descubrimiento IA | Crear `/for-agents/` como entrada separada para lectores automáticos | P1 | Terminado | Índice y 22 documentos Markdown ES/EN accesibles en `/agent/for-agents/` sin ejecutar JavaScript; enlaces desde Welcome y las fichas. GitHub Pages respondió 200 y `text/markdown`. |
| `AG-015` | Publicación | Publicar Agent sin retirar Neuron Mesh | P0 | Terminado | Neuron Mesh publicada en `/` y Agent en `/agent/` desde un único artefacto Pages; workflow #35989129116 terminó en success y ambas rutas respondieron 200. Agent sigue identificado como desarrollo y no indexable. |
