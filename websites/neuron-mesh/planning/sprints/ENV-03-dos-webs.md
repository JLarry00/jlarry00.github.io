# Sprint ENV-03 — Dos webs en GitHub Pages

Estado: iniciado el 24/09/2026 por decisión explícita de Juan.

Objetivo: conservar Neuron Mesh en la raíz pública y añadir Agent bajo `/agent/` sin crear otro repositorio.

Seleccionado: `ENV-009`. La entrada pública de Agent está registrada como `AG-015` en su propio Scrum.

- El workflow compila ambos proyectos y compone únicamente sus `dist/`.
- Los recursos de Agent se resuelven desde `/agent/`; su preview local continúa en `/`.
- Una configuración local inválida falla; `site.config.json` selecciona la variante activa para comandos locales, no retira una de las dos webs de Pages.
- Antes de subir: revisar archivos versionados y artefacto, comprobar rutas de ambas webs y ausencia de material privado.
- Después de subir: esperar el workflow y verificar URLs públicas. Si falla, registrar el error real sin marcar publicación completada.

## Comprobación local

Neuron Mesh compiló 14 rutas con el código conservado. Agent compiló dos rutas HTML y 23 Markdown (22 documentos ES/EN más el índice) con base `/agent/`. La composición contiene 16 HTML y los Markdown esperados; no aparecen rutas de `planning/`, `context/`, `contexto/`, dependencias, CV ni vídeo en el artefacto. El CSS de Agent se enlaza con prefijo `/agent/` y los iconos se integran en el bundle. La revisión remota sigue pendiente.
