# AG-052 — Análisis del scroll de la trayectoria

Análisis de un subagente especializado con GPT-6 Astra, solicitado por Juan el 28/09/2026. Es una propuesta para decidir, no una implementación ni una aceptación de S17.

**Decisión posterior:** Juan eligió implementar la opción intermedia, con scroll nativo y escena `sticky`. Su estado actual se registra en [S17](./sprints/S17-lectura-por-archivo.md); las alternativas siguientes permanecen como análisis histórico.

## Decisión de interacción que precede al código

Con scroll libre, un gesto rápido o un salto con la barra puede atravesar varios hitos entre dos imágenes. Hay que distinguir dos objetivos:

1. **Coherencia inmediata:** punto, ruta, tarjetas y encuadre muestran siempre el mismo estado; los hitos intermedios pueden pasar sin verse.
2. **Ver cada tramo:** hay que retrasar o limitar el progreso visual, o navegar por etapas. La representación ya no seguirá inmediatamente la barra de scroll.

No se puede garantizar ambos ante saltos arbitrarios. Juan aún no ha elegido este compromiso.

## Modelo independiente de tecnología

Una sola coordenada de progreso `s` gobierna la distancia recorrida `d`, la posición del punto `P(d)` y una cámara `C(d)`. La posición visible es `P(d) - C(d)`. En tramos horizontales la cámara permanece quieta; en verticales acompaña al punto; las curvas enlazan ambos comportamientos. La velocidad uniforme se refiere a distancia recorrida por distancia de scroll, no a velocidad temporal fija.

## Recomendación para Agent

Crear una escena con una ventana `sticky` dentro del editor y espacio de recorrido antes de que vuelva al flujo normal. Ruta, tarjetas, logos y punto comparten el mismo progreso y cámara. Mantener scroll nativo y HTML semántico. Preferir animaciones vinculadas al scroll cuando las propiedades y navegadores objetivo lo permitan, con un renderizador por frame como alternativa. La timeline debe observar el contenedor `.editor-scroll`. No asumir que una timeline garantiza trabajo en el compositor; comprobarlo en los navegadores relevantes. La aplicación Astro estática y GitHub Pages pueden alojar esta arquitectura sin cambiar de framework.

El código actual compensa con JavaScript el desplazamiento nativo del contenedor tras recibir el evento de scroll. Que ambos avancen desfasados es una **hipótesis** compatible con la pérdida del efecto al ir rápido, no una causa medida. El promedio espacial de la coordenada vertical tampoco limita la velocidad temporal ni obliga a mostrar todos los giros. No atribuir el problema a JavaScript, SVG, Astro o CPU sin observar frames y trazas.

## Alternativas

| Enfoque | Ventaja | Compromiso |
|---|---|---|
| Escena `sticky` y progreso nativo compartido | Mantiene rueda, trackpad, tacto, barra, teclado, inversión y salida natural | Un salto grande puede omitir giros; hay que validar timeline nativa y alternativa |
| Progreso visual amortiguado | Puede hacer perceptible más recorrido tras un gesto rápido | La escena se retrasa respecto de la barra; hay que resolver salida y demoras largas |
| Navegación por etapas | Cada hito tiene tiempo de lectura | Cambia el scroll continuo solicitado y exige controles y salida claros |
| Cronología vertical nativa | Lectura y accesibilidad simples | Renuncia a las pausas horizontales |

Una librería de animación o Canvas no elimina el compromiso entre desplazamiento libre y duración visible de cada etapa.

## Siguiente trabajo, solo cuando Juan lo indique

Hacer un prototipo aislado con un tramo horizontal, curvas, tramo vertical, tres tarjetas y contenido antes y después. Comparar la compensación actual, la escena `sticky` con progreso directo y una variante amortiguada. Observar scroll lento y rápido, inercia, inversión inmediata, tacto, barra, `End`, resize, foco y movimiento reducido. Usar grabación y trazas del navegador para separar desincronización, saltos deliberados y coste de renderizado. Presentar el resultado antes de escoger e integrar una solución. `AG-053` reserva la revisión global del código para otro sprint.

Referencias primarias: [CSS Position, sticky](https://drafts.csswg.org/css-position-3/#sticky-pos), [Scroll-driven Animations](https://www.w3.org/TR/scroll-animations-1/#relationship-to-asynchronous-scrolling), [documentación de Chrome](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) y [guía de WebKit](https://webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css/).
