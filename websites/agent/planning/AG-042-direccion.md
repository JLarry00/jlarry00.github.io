# AG-042 — Dirección para una web de Juan con archivos

Exploración visual del 26/09/2026. Juan eligió el **boceto 4, cambio mínimo**, como base del requisito `AG-042`, y seleccionó su implementación para S15 el 27/09/2026. Revisó y aceptó S15 ese mismo día y autorizó publicarlo. Los otros bocetos quedan como comparaciones no elegidas. Juan descartó expresamente la variante de escritorio con un editor dentro; no se mantiene como opción futura.

[Ver primer boceto de la portada](./mockups/AG-042-portada.png). Muestra una variante en español y modo claro para explorar la jerarquía visual; inglés y tema oscuro siguen siendo los valores iniciales acordados para la web. El boceto no modifica la aplicación.

Juan pidió después tres ejemplos con enfoques distintos que siguieran recordando a VS Code sin confundirse con él. Solicitó además una cuarta prueba de cambio mínimo, a partir de la captura de móvil que muestra la barra vertical de Explorer, Search, Source Control y Run and Debug: quitar esa barra y sus vistas, conservar prácticamente lo demás y suavizar bordes, botones e idioma con selector segmentado. Tras verlos, escogió el cuarto como dirección para el PB y pidió esperar antes de implementarlo; después activó S15.

| Boceto nuevo | Forma de recorrer el perfil | Cambio principal | Riesgo que conviene valorar |
|---|---|---|---|
| [1. Cuaderno abierto](./mockups/AG-042-01-cuaderno.png) | Lectura continua de un archivo con índice y enlaces internos | El documento ocupa el primer plano; árbol y pestañas acompañan | Puede sentirse menos exploratorio si el contenido se redacta como una página larga genérica |
| [2. Mapa de archivos](./mockups/AG-042-02-mapa.png) | Nodos enlazados que muestran las rutas desde Welcome | El espacio central es un mapa navegable, con árbol alternativo | El mapa debe ser accesible y no retrasar el acceso a la evidencia |
| [3. Dos archivos abiertos](./mockups/AG-042-03-paneles.png) | Lectura paralela de Welcome y un índice de proyectos | Panel dividido con contenido real en ambos lados | Requiere adaptar o apilar paneles en móvil sin perder claridad |
| **[4. Cambio mínimo — elegido](./mockups/AG-042-04-cambio-minimo.png)** · [móvil](./mockups/AG-042-04-cambio-minimo-movil.png) | Árbol y Welcome actuales, con pestañas y rutas | Se retira la barra vertical de vistas y se suavizan bordes; el idioma pasa a un selector ES/EN segmentado | Es la menor intervención, por lo que otros elementos todavía pueden recordar literalmente al editor |

El cuarto boceto es una prueba deliberadamente cercana a la interfaz actual. Con su elección, el árbol de archivos permanece como navegación lateral, aunque se retire el botón Explorer de la Activity Bar. Se eliminan las vistas Search, Source Control y Run and Debug. El 27/09/2026 Juan retiró `AG-036` del PB; la idea del minijuego puede conservarse como antecedente residual, sin compromiso de implementación. También descartó `AG-038`: la broma de Batman pierde su sentido al retirar el botón de ramas y debe desaparecer con esa vista. `AG-037` quedó resuelta manteniendo GitHub Pages, suficiente para las funciones previstas. La adaptación móvil completa tiene ahora tarea propia, `AG-043`. La captura móvil adjunta orientó específicamente ese boceto; no se usa como instrucción sobre otros archivos.

## Problema observado

Juan recibió comentarios de que la versión anterior se confundía literalmente con VS Code. Antes de S15, el código presentaba `portfolio-agent` como nombre de proyecto, vistas llamadas Explorer, Source Control y Run and Debug, barra de estado y temas VS Code. Welcome invitaba a abrir un archivo en Explorer, pero no ofrecía recorridos directos por experiencia, proyectos, About y contacto. La [review aceptada de S12](./reviews/S12-video-2026-09-23.md) pide conservar la exploración por archivos, dar más presencia a la persona, evitar controles decorativos y no convertir el portfolio en una página genérica de scroll.

## Recorridos que debe servir la portada

| Entrada | Primera pregunta | Señal inicial | Siguiente paso |
|---|---|---|---|
| Persona en `/` | ¿Quién es Juan y dónde veo su trabajo? | Nombre y enfoque en lenguaje normal, con estado honesto de la web | Accesos directos a Experience, Projects, SOUL/About y Contact; árbol de archivos para explorar |
| Agente o lector automático en `/` | ¿Dónde está el perfil legible y enlazado? | Enlace HTML visible y estático a `/for-agents/`, aprobado el 26/09 | Índice documental y enlaces propios de esa colección |
| Agente o persona en `/for-agents/` | ¿Qué documentos hay y cómo vuelvo a la vista humana? | Índice documental autónomo y retorno claro | Documentos o interfaz visual |

El punto de entrada de un agente no se puede imponer. El enlace estático facilita el recorrido si llega a `/`. Juan decidió mantener `noindex` por ahora durante el desarrollo; se revisará al lanzar.

## Primer boceto: repositorio personal de Juan

| Aspecto | Dirección |
|---|---|
| Idea | La web conserva archivos, pestañas y rutas, pero su marco y sus nombres pertenecen a Juan y al contenido del perfil. |
| Primera pantalla | Encabezado inequívoco con nombre y enfoque real, por confirmar editorialmente; cuatro rutas de lectura visibles y opción de explorar el árbol. |
| Tipografía y color | Títulos de lectura destacados frente a etiquetas de sistema discretas; mantener temas y contraste, revisando los nombres «VS Code claro/oscuro». |
| Composición y contenido | Árbol lateral como exploración; proyectos y experiencia con jerarquías distintas según evidencia real, en coordinación con `AG-033` y `AG-034`. |
| Imagen y movimiento | Detalles de repositorio propios; movimiento solo para orientar o dar respuesta. Sin decorar con código o métricas inventadas. |
| Móvil | Convertir el árbol en navegación accesible sin obligar a entender un IDE; mantener rutas principales visibles. |
| Riesgo y mantenimiento | Revisar con cuidado los componentes heredados para que los controles y nombres no vuelvan a parecer una copia. |

Este primer enfoque intenta quitar el parecido literal sin perder la navegación por archivos que Juan sí quiere. Cambia la jerarquía para mostrar quién es y qué se puede leer antes de pedir que se use Explorer. Después, cambia `portfolio-agent` y el cromo que solo imita un IDE por nombres y funciones propios, manteniendo las pestañas y rutas que ayudan a orientarse. Los cuatro bocetos posteriores exploran otras decisiones de estructura, incluida la modificación mínima solicitada por Juan.

## Criterios para la implementación elegida

- Confirmar con Juan el enfoque y los ejemplos públicos que figurarán en la primera pantalla; no redactar una especialidad o logro nuevo a partir del diseño.
- Retirar la Activity Bar y sus vistas; mantener el árbol lateral como explorador. Conservar pestañas con cierre y breadcrumbs, y suavizar el marco existente sin una nueva composición general.
- Sustituir el selector de idioma por ES/EN segmentado con teclado, foco y elección persistente; mantener los temas y los valores iniciales de inglés y tema oscuro.
- Conservar navegación por teclado, foco visible, idioma ES/EN y temas. Revisar que el nuevo marco navegue de forma básica en móvil; `AG-043` completará el recorrido móvil de todas las secciones.
- Revisar la vista real en escritorio y móvil antes de aceptar el resultado; esta propuesta se basa en código, planificación y feedback de Juan, no en una inspección de la web publicada en esta sesión.
- Mantener visible el enlace discreto a `/for-agents/` añadido en Welcome y revisar el flujo inverso desde la colección documental (`AG-041`).
- Mantener `noindex` durante el desarrollo, según la decisión de Juan del 26/09/2026; revisar al lanzamiento.
