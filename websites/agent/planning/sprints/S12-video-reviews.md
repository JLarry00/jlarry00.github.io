# Sprint S12 — Criterios desde las reviews de Juan

Estado: cerrado el 24/09/2026 con análisis entregado; Juan lo aceptó después junto con S13 y S14. Producto: Agent. Seleccionado: `AG-004`.

## Objetivo

Extraer del vídeo de reviews criterios concretos de voz, contenido, navegación y presentación para el portfolio Agent. La entrega será un documento de hallazgos con marcas de tiempo y límites claros, sin cambiar todavía el copy ni la interfaz.

## Trabajo acordado

- Transcribir localmente el audio y conservar la transcripción sin procesar fuera del repositorio público.
- Revisar fotogramas para identificar las páginas y contrastar las palabras con lo que se muestra.
- Concentrar la revisión en los tramos en que Juan desarrolla una opinión; las páginas pasadas rápido o vistas largo rato sin comentario sustantivo no se tratarán como preferencias.
- Separar observaciones de Juan, interpretación y posibles aplicaciones a Agent; incluir marcas de tiempo para volver al vídeo.
- Actualizar el backlog con los criterios útiles, sin asumir que toda preferencia sobre una web ajena se aplica directamente a este producto.

## Límites

El archivo `VID_20260923_212854.mp4` permanece local e ignorado por Git. No subir vídeo, audio ni transcripción íntegra. No usar una API de pago para el análisis. `AG-005` y `AG-027` recibieron la aclaración de Juan sobre AGENTS/SOUL/MEMORY, pero su implementación queda fuera de este sprint.

## Resultado y límites

El vídeo dura 54:05. Se extrajo audio localmente, se transcribió con un modelo local y se generaron 162 fotogramas espaciados aproximadamente 20 segundos; los tramos importantes se contrastaron con la imagen. La transcripción completa se guardó en `contexto/`, excluida de Git. El documento público [AG-004 — Qué aporta el vídeo](../reviews/S12-video-2026-09-23.md) selecciona los momentos con opinión sustantiva, separa criterios firmes de ideas tentativas y los relaciona con tareas existentes.

La transcripción automática puede confundir nombres y algunas palabras. Los fotogramas proceden de una grabación de pantalla hecha con teléfono, por lo que no permiten valorar detalles finos de tipografía o color. Las conclusiones se limitan a lo que Juan dice y a rasgos visuales claros. No se aplicaron cambios a la web, no hubo compilación ni despliegue y no se usó una API de pago. En el cierre de S12, `AG-004` seguía en el PB; Juan lo aceptó después, al revisar S13 y S14, y pasó a `COMPLETADAS.md`.

## Aprendizaje de proceso

Una revisión con muchas webs exige distinguir el tiempo de exploración de una preferencia. La próxima revisión editorial usará primero los tramos donde Juan expresa un juicio y recurrirá a las imágenes para contextualizarlo; no inferirá aprobación por duración de la visita.
