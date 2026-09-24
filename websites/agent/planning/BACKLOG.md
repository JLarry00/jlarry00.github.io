# Product Backlog — Agent: por hacer

Una tarea solo sale de esta tabla cuando la entrega está verificada y su aceptación o límite queda registrado. `AG-005` espera opciones discutidas con Juan; `AG-014` será la última tarea del producto. `AG-004` no se inicia hasta que Juan pida analizar el vídeo de reviews.

Las prioridades son relativas a esta variante. No expresan estimaciones de duración. Una decisión de producto abierta no se convierte en copy ni en funcionalidad hasta que Juan la revise.

| ID | Área | Resultado | Prioridad | Estado | Condición / aceptación |
|---|---|---|---|---|---|
| `AG-004` | Reviews | Analizar el vídeo de reviews de Juan y extraer criterios concretos de contenido, navegación y presentación | P0 | En espera de Juan | El MP4 de 45–50 minutos no se abre ni procesa en este encargo. Cuando Juan lo pida: transcripción y fotogramas pertinentes, conclusiones con momentos del vídeo y decisiones revisables. |
| `AG-005` | Árbol | Concretar el árbol de archivos del repo-perfil | P1 | En espera de opciones con Juan | La estructura actual es provisional. Presentar varias opciones de organización y acordarla con Juan antes de fijar rutas o nombres definitivos, incluida la mayúscula de `Hobbies/`. |
| `AG-014` | Responsive / QA | Revisar teclado, foco, contraste, móvil, idioma y enlaces | P1 | Última tarea; no iniciar ahora | QA final del producto después de contenido, funciones, feedback y estructura acordada. La comprobación proporcional de cada entrega no sustituye esta tarea final. |
| `AG-026` | Lectura Markdown | Publicar una única colección enlazada de Markdown interpretado para personas e IA | Por decidir | Implementado y publicado S11; aceptación pendiente | Juan corrigió S10: no quiere una vista `.md` cruda para IA y otra HTML para personas. El índice y los 22 documentos ES/EN se publican ahora como HTML estático sencillo desde Markdown real en el repo; los enlaces internos navegan entre páginas HTML. Actions #36024962878 terminó en success; la antigua URL `.md` respondió 404. Espera su revisión. |

La primera versión visual, funcional y de contenido aceptada por Juan está en `COMPLETADAS.md`. La lectura Markdown con formato `AG-026` espera su revisión tras publicarse. El árbol final y el vídeo siguen abiertos; el QA final `AG-014` se hará el último.
