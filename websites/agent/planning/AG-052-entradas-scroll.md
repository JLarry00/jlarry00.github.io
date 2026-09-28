# AG-052 — Entradas y suavidad del recorrido

Decisión de Juan, 28/09/2026: suavizar la rueda y revisar las formas habituales de desplazarse tras sustituir el scroll nativo de Experience. Este plan pertenece a S17; no amplía `AG-053`. Juan precisó que la auditoría es de dispositivos y gestos de entrada. Se descartan el deslizador lateral y el modo de lectura lineal propuestos inicialmente: el único indicador visible es la propia ruta.

## Diagnóstico y criterios

El editor de escritorio usa `overflow: clip` en Experience. La rueda ya modifica una distancia sobre el SVG, pero pinta cada delta inmediatamente. Esa es una causa verificable de los saltos de una rueda dentada. El mismo evento recibe trackpad, que suele entregar deltas menores; `deltaMode` puede representar píxeles, líneas o páginas. El `scroll` nativo también responde a teclado, tacto, barra, cambios de foco y APIs; `wheel` no cubre estos orígenes. Los popovers sí tienen scroll propio. En móvil o con movimiento reducido se mantiene el documento lineal nativo.

| Entrada | Comportamiento esperado | Trabajo en Experience de escritorio |
|---|---|---|
| Rueda dentada | Impulsos con desplazamiento visual continuo | Acumular destino exacto y dibujar el progreso hacia él por frame, con tiempo real en milisegundos; invertir dirección sin arrastrar una cola pendiente. |
| Trackpad | Deltas pequeños e inercia entregada por el dispositivo | Conservar magnitud y signo; aplicar una interpolación corta, sin sumar inercia artificial a la rueda. No capturar zoom con Ctrl. |
| Flechas, página, espacio, Inicio/Fin | Pasos, páginas y extremos; controles enfocados mantienen sus teclas | Enviar todos los pasos al mismo progreso. Inicio/Fin y saltos de foco son inmediatos; espacio conserva la activación de botones. |
| Tacto | Arrastre directo e inercia, gesto de pellizco disponible | En móvil, scroll nativo. En escritorio táctil, el arrastre mueve el progreso; estimar una inercia breve al soltar; no cancelar gesto multitáctil ni scroll del detalle. |
| Pulsación de la rueda | Autodesplazamiento por dirección del puntero, cuando el navegador lo ofrece | Reproducir este gesto dentro de Experience sin añadir un control permanente; conservar el clic central de las pestañas. |
| Foco y teclado asistido | Poder alcanzar una tarjeta fuera del encuadre | El foco por Tab revela tarjetas cambiando la distancia del recorrido, sin depender de `scrollTop`. En móvil y movimiento reducido permanece la lectura nativa. La búsqueda del navegador en contenido recortado requiere una decisión de producto aparte si se exige equivalencia completa. |
| Detalle y resto del workbench | Sus scrolls funcionan de forma autónoma | Excluir el detalle de la captura y conservar el scroll normal en otros archivos y en la barra lateral. |

## Orden de ejecución

1. Registrar alcance y comprobar la captura actual. Conservar una sola distancia objetivo del recorrido, y una distancia mostrada para la animación. Cancelar animación al cambiar archivo o modo, y al salir del documento visible.
2. Implementar interpolación breve dependiente de `requestAnimationFrame` y su marca temporal. La cámara, punto, logos y trazo siempre usan la **misma** distancia mostrada. Una dirección opuesta parte de la posición visible. No forzar un salto por una ráfaga de eventos; sí permitir Inicio/Fin, arrastre y foco inmediatos.
3. Completar entradas: teclas desde botones sin robar espacio/Enter; tacto con finalización y multi-touch; pulsación central de autodesplazamiento sin control permanente. Respetar movimiento reducido y zoom.
4. Revisar en navegador rueda aislada y repetida, inversión, trackpad simulado, teclas, pulsación central, tacto simulado, detalle, foco y cambio de archivo. Mantener S17 abierto hasta la revisión de Juan; mostrar en local, sin publicar.

## Referencias primarias

- [MDN: wheel event](https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event): wheel no equivale a scroll, `deltaMode`, zoom y cancelación.
- [CSSOM View](https://www.w3.org/TR/cssom-view/): scroll suave de duración definida por el navegador, entradas nativas y fin del gesto.
- [MDN: requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame): usar tiempo real entre frames.
- [MDN: auxclick](https://developer.mozilla.org/en-US/docs/Web/API/Element/auxclick_event) y [ayuda de Firefox sobre autodesplazamiento](https://support.mozilla.org/en-US/kb/mouse-shortcuts-perform-common-tasks): pulsación central.
- [MDN: touch-action](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/touch-action) y [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion): gestos y movimiento reducido.
