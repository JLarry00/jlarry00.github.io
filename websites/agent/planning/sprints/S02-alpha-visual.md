# Sprint S02 — Alpha visual de Agent

Estado: cerrado como incremento local revisado el 24/09/2026; sin aceptación visual final ni publicación. Su mejora estética pasa a S03.

## Objetivo

Construir una primera vista Alpha que recuerde al workbench predeterminado actual de VS Code, adaptada a un portfolio web. Explorer debe ser la vista inicial. Solo aparecerán controles con un uso definido por Juan; no se copiará el chrome de programación que no tenga una función para esta web.

La meta es una Alpha revisable, no el portfolio completo ni una réplica funcional de VS Code.

## Referencia visual y decisiones

- La composición toma de la [documentación oficial de la interfaz de VS Code](https://code.visualstudio.com/docs/editing/getting-started/userinterface) la Activity Bar, la Primary Side Bar, el área de editor con pestañas y la Status Bar.
- La paleta inicial se basa en el tema oficial actual **VS Code Dark**, incorporado como tema predeterminado en VS Code 1.113. Se busca una semejanza reconocible en jerarquía, densidad, superficies y estados; no una copia exacta de marca, iconos propietarios o funciones de IDE.
- La barra de actividad contiene solo **Explorer**, **Search**, **Source Control** y **Run and Debug**, porque Juan definió esos usos previamente. **Extensions** queda fuera.
- No se muestran menús File/Edit/Run, terminal integrada, problemas, minimap, split editor, chat lateral, cuentas/sincronización, configuración, notificaciones ni controles de ventana: no tienen un uso de portfolio definido en esta Alpha.
- Los tres paneles distintos de Explorer responden con un estado Alpha explícito, sin fingir que búsqueda, ramas o animación ya están implementadas. Explorer sí permite abrir el archivo demostrativo activo.
- El árbol de archivos es una maqueta del árbol propuesto. `Hobbies/` conserva provisionalmente la capitalización que indicó Juan; el nombre y el contenido canónicos siguen pendientes de cierre editorial.
- El editor usa texto de muestra para que se pueda revisar la tipografía y el ritmo visual. No se copian afirmaciones profesionales sin verificar.
- En esta Alpha no se incluye el selector de temas. `AG-009` mantiene claro/oscuro y paletas populares para un incremento posterior.

## Sprint Backlog

| ID | Tarea seleccionada | Estado y criterio de aceptación |
|---|---|---|
| `AG-017` | Recortar el chrome de VS Code a las superficies útiles | Implementado: Activity Bar con solo las cuatro vistas acordadas, sidebar primaria, pestaña/editor y Status Bar mínima; no aparecen controles de IDE sin función web. |
| `AG-018` | Construir la Alpha visual con `VS Code Dark` | Implementado: composición, contraste, tipografía, bordes, densidad y estados inspirados en el tema oficial actual; Explorer activo. |
| `AG-019` | Dar respuesta honesta a los controles Alpha | Implementado: Explorer expande carpetas y abre archivos de muestra; Search, Source Control y Run and Debug muestran estados Alpha explícitos. Sin búsqueda, ramas ni animación completas y sin datos profesionales inventados. |
| `AG-020` | Revisar responsive, teclado y legibilidad | Implementado: Explorer se puede abrir/cerrar en móvil; controles etiquetados, foco visible, contraste legible y `prefers-reduced-motion`; revisión visual final pendiente de Juan. |
| `AG-008` | Entregar una primera composición revisable de la interfaz | Implementado localmente: Explorer como centro de navegación y árbol, pestaña y lectura de Markdown de muestra. |

## Fuera de alcance

- Perfil y copy definitivos; inventario de evidencia y revisión editorial siguen en `AG-003` y `AG-004`.
- Búsqueda funcional por nombres/rutas, simulación de ramas (incluida la broma de Batman) y animación stickman: `AG-010`, `AG-011` y `AG-012`.
- Selector de temas claro, oscuro y paletas adicionales: `AG-009`.
- Colección Markdown para lectores IA y ruta `/for-agents/`: `AG-006` y `AG-007`.
- Extensions permanece ausente.
- Publicar Agent o cambiar el selector de Pages: `AG-015`.

## Verificación y cierre

- `npm run check:agent`: 0 errores, 0 avisos, 0 hints. Ejecutado desde una copia temporal Linux del workspace sincronizada con el código de Agent en esta Alpha.
- `npm run build:agent`: 1 página generada desde esa misma copia temporal Linux.
- Se ofreció un preview local en `http://localhost:4323/`. Juan revisó la Alpha y la describió como algo sosa, seria y dirigida a desarrolladores. Pidió conservar VS Code y hacerla más amigable desde una perspectiva de marketing.
- Revisar foco, contraste, ausencia de controles sin uso y que los textos de muestra no se confundan con el perfil real.
- Comprobar que la selección raíz de Pages sigue siendo `neuron-mesh` y que el Scrum/código de Neuron Mesh no cambian por este incremento.
- `AG-008` y `AG-017`–`AG-020` conservan la implementación Alpha con aceptación pendiente; `AG-016` está implementado en la barra sin Extensions y también espera la revisión de conjunto. `AG-018` queda como referencia histórica de la paleta inicial: `AG-021` recoge el cambio estético en S03. El comentario de Juan resuelve la revisión de S02 como una solicitud de cambios y justifica el nuevo sprint.

## Retrospectiva previa

S01 dejó pendiente decidir si la colección para IA ofrecerá HTML y Markdown en rutas separadas. No se selecciona porque la Alpha trata únicamente la estética del workbench; se mantiene en `AG-007`.
