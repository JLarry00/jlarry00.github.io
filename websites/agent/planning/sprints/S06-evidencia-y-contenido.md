# Sprint S06 — Perfil visible y lectura para agentes

Estado: cerrado como incremento local el 24/09/2026; pendiente revisión editorial y visual de Juan.

Objetivo: sustituir la muestra vacía por una primera presentación basada en hechos claros y facilitar a una IA documentos directos, manteniendo rutas provisionales hasta debatir `AG-005`.

Seleccionado: `AG-003`, `AG-006`, `AG-007`, `AG-024`.

- Inventariar afirmaciones y sus fuentes/límites sin copiar el CV privado al repo.
- Crear textos bilingües concisos para humano y Markdown más directo para IA, con coherencia factual.
- Presentar el contenido humano en la interfaz y enlazar una entrada `/for-agents/` sin JavaScript.
- Documentar afirmaciones no usadas por falta de confirmación o confidencialidad.
- `AG-024`: conservar documentos abiertos en pestañas independientes durante el uso de la página, permitir volver a ellas y cerrarlas con su botón «×», siguiendo la captura de Juan.

Límite: no ver ni procesar el MP4 de reviews (`AG-004`); no cerrar el árbol definitivo (`AG-005`); `AG-014` queda para el final.

## Cambio de alcance — 24/09/2026

Juan pidió añadir las pestañas persistentes de `AG-024` al trabajo inmediato y autorizó expresamente su implementación sin otra confirmación, aunque no formara parte del encargo anterior. Se añade sin sustituir los resultados originales de S06; la entrega ahora incluye este comportamiento adicional del editor.

## Resultado

Se revisó la fuente principal de `PerfilProfesional` y su inventario de logros. `context/agent-profile-evidence.md` conserva solo un inventario público curado con límites; CV, cartas y notas privadas no se copiaron. `src/data/profile.json` alimenta las fichas visuales ES/EN y el generador de Markdown, que produce 22 documentos más un índice directo en `public/for-agents/`. Welcome y las fichas enlazan a la colección. El árbol se rotula provisional y no se resuelve `AG-005`.

El editor conserva varios documentos abiertos durante la visita; las pestañas se activan sin duplicarse y se cierran individualmente. No se persisten entre recargas, tal como delimita `AG-024`.

La copia local de Agent pasó `astro check` sin errores y `astro build` con dos rutas HTML y los Markdown públicos. El preview local se abrió en Codex. No se procesó el vídeo de `AG-004`. El código de los repositorios públicos enlazados no se revalidó en esta revisión; sus fichas evitan afirmaciones de estado actual y métricas.
