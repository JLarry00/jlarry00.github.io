# Sprint S15 — Marco y entradas

Estado: aceptado por Juan y publicado el 27/09/2026 tras revisar la corrección de carpetas. Producto: Agent. Tareas: `AG-041`, `AG-042`, `AG-044`–`AG-048`.

## Objetivo

Aplicar la opción visual 4 elegida por Juan: conservar árbol, pestañas, rutas, temas y Welcome; retirar la barra de vistas y las funciones asociadas. Hacer evidentes las rutas humanas desde Welcome y mantener la entrada documental estática.

## Entrega revisable

- Marco más suave y reconocible como portfolio de Juan, sin nombres internos visibles ni controles de Search, Source Control o Run and Debug.
- Árbol siempre visible en escritorio y accesible mediante un control propio en móvil; navegación por archivos y cierre de pestañas conservados.
- Selector ES/EN segmentado, operable por teclado y persistente; temas y preferencias iniciales conservados.
- Accesos directos a Experience, Projects, SOUL/About y Contact desde Welcome. Enlace a `/for-agents/` presente en el HTML inicial, índice documental autónomo y retorno a `AGENTS.md` visual.
- Preview local para revisión de Juan antes de cualquier push. `AG-043` conserva la adaptación móvil completa y `AG-014` el QA final.

## Resultado

El árbol permanece visible en escritorio y se abre desde «Files/Archivos» en móvil. Se retiraron la Activity Bar y las vistas de Search, Source Control y Run and Debug, junto con la rama ficticia, la animación y su código de interacción. Welcome conserva su composición y añade enlaces directos a Experience, Projects, SOUL/About y Contact; el enlace estático a `/for-agents/` sigue presente. El selector ES/EN es segmentado y conserva `agent-language`.

El primer build no arrancó porque Astro intentó escribir su telemetría fuera del workspace; con telemetría desactivada y configuración temporal en `/tmp` generó 32 páginas estáticas. El preview local respondió HTTP 200 en `/` y `/for-agents/` y se abrió en Codex en `http://127.0.0.1:8765/`. No se ha hecho push ni despliegue remoto de S15. Juan revisará el resultado antes de aceptar estas tareas; `AG-043` cubrirá la adaptación móvil completa.

## Revisión visual del 27/09/2026

Juan confirmó que retirar la barra y los cambios funcionales fue positivo, pero señaló que la primera entrega apenas había suavizado la estética prevista en el boceto 4. La corrección mantiene la composición y el contenido aprobado de Welcome; da más aire al encabezado, árbol, pestañas y rutas, usa superficies azul grisáceas y bordes menos duros, y hace más clara la selección activa. Se ajustaron los tokens de los temas para conservar contraste y coherencia. [Captura local revisada](../reviews/S15-visual-preview.png).

El build volvió a generar 32 páginas. El preview actualizado se sirve localmente en `http://127.0.0.1:8766/`. Chrome sin interfaz permitió revisar una captura de escritorio; su ventana pequeña impuso un viewport interno de 504 px y recortó la imagen, por lo que no se toma como validación móvil. La aceptación de Juan y el push siguen pendientes.

## Ampliación del 27/09/2026

Juan aceptó la dirección visual de S15 y añadió cinco ajustes antes de cerrarlo: posiciones estables al traducir, marca que vuelve a Welcome, ES/EN como un único botón de alternancia, orden explícito del árbol y carpetas navegables en las migas de ruta. Se registraron como `AG-044`–`AG-048` en el PB y se seleccionaron para este sprint por indicación suya. Las capturas muestran que la longitud del nombre del tema en español mueve los controles de cabecera; la corrección reservará espacio estable para los textos traducidos.

La primera ampliación quedó implementada localmente: cabecera con anchuras estables entre idiomas, accesos de Welcome en columnas estables, marca completa que abre Welcome, ES/EN como un único botón, árbol en el orden pedido y migas de carpeta que abrían el README correspondiente. Este último comportamiento fue rechazado por Juan y se corrigió en la sección siguiente. El preview local está en `http://127.0.0.1:8766/`. No se ha hecho push ni despliegue remoto; la aceptación del sprint sigue pendiente.

## Corrección de navegación de carpetas

Juan precisó que las migas de carpeta deben abrir un selector flotante de archivos y subcarpetas, como en su captura de VS Code. Abrir directamente el README no cumple `AG-048`. Se sustituyó esa acción por un listado contextual con carpetas desplegables y archivos seleccionables, siguiendo los temas y colores de Agent; el README es una entrada del listado. Escape, clic fuera y el propio botón de carpeta cierran el selector. El build generó 32 páginas y el preview local respondió en `http://127.0.0.1:8766/`. S15 quedó entonces abierto hasta la revisión de Juan.

## Cierre y aceptación

Juan revisó el selector corregido y confirmó que le gusta el conjunto; autorizó publicar S15 el 27/09/2026. `AG-041`, `AG-042` y `AG-044`–`AG-048` pasaron a `COMPLETADAS.md`. `AG-043` conserva la adaptación móvil completa para un sprint posterior y `AG-014` sigue siendo el QA final del producto. No se atribuye a esta aceptación una revisión técnica exhaustiva de todos los tamaños o modos.

El commit `4260971` se publicó mediante [GitHub Pages #36320694535](https://github.com/JLarry00/jlarry00.github.io/actions/runs/36320694535), completado correctamente. La página pública incluye el selector nuevo y `/`, `/for-agents/` y `/neon-mesh/` respondieron HTTP 200 al comprobarlas después del despliegue.
