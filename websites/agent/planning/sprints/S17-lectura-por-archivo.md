# Sprint S17 — Lectura por archivo

Estado: cerrado y aceptado por Juan el 28/09/2026. Producto: Agent. Tareas terminadas: `AG-032`, `AG-033`, `AG-052` (incorporada el 28/09/2026) y `AG-051` (incorporada al decidir el nombre Trayectoria/Trajectory). Juan autorizó subir el resultado; la confirmación del despliegue se comprueba por separado.

Juan eligió la dirección A de [las propuestas visuales](./S17-direcciones.md): ruta curva, marcador de posición, hitos asimétricos y detalle superpuesto sin desplazar el layout. La segunda pasada se implementa solo en local para su review; el contenido personal escrito por Juan sigue reservado para S16.

## Cambio de orden

Juan rechazó la redacción local de S16 por poco personal y decidió escribir él el texto. Ese borrador se retiró de la aplicación sin publicarlo. `AG-034` vuelve a esperar su texto y S17 se adelanta para resolver la presentación visual. Los datos que Juan confirmó permanecen como evidencia curada, no como copy aprobado. El contenido humano y los Markdown de S15 se mantienen como base provisional durante este sprint.

## Objetivo

Hacer reconocible cada tipo de archivo por su composición dentro del workbench conservado. Experience mostrará cada trabajo resumido en una línea temporal y desplegará el detalle al pulsar; al pulsar fuera se recogerá. La interfaz debe aceptar párrafos más largos cuando Juan entregue su propia redacción.

## Dirección visual

- **Paleta:** conservar los tokens de cada tema y usar acentos discretos por tipo de archivo: azul para el mapa/README, violeta para SOUL, ámbar para Experience y verde para Projects. El fondo, pestañas y Explorer siguen siendo el workbench.
- **Tipografía:** mantener la fuente amable de la interfaz; títulos amplios, párrafos con línea corta y respiración. El monospace se reserva para rutas y marcas de archivo, no para todo el perfil.
- **Composición:** README como portada de rutas y mapa; AGENTS como guía de dos lecturas; SOUL como relato en columna editorial; Experience como línea temporal laboral con formación aparte; Skills como áreas enlazadas; Projects como dos fichas de proyecto con enlace propio; Contact como bloque de contacto legible. Los archivos de detalle de Skills y Projects tienen tratamiento propio dentro de su familia.
- **Interacción:** acciones solo donde hay navegación o despliegue reales. La línea temporal usa botones, `aria-expanded`, foco visible y cierre al pulsar fuera o Escape. En móvil se apila sin perder la ruta del archivo ni provocar desbordamiento.

Esquema de escritorio: `árbol | título + contenido específico | enlaces relacionados`; en móvil: `pestañas/Explorer` encima de `título → contenido → enlaces`. Dentro de Experience: `título → carril temporal con dos trabajos compactos → formación`. Dentro de SOUL: `título → relato en una columna con apartados`, preparado para texto más largo.

## Orden y revisión

1. Revertir el copy rechazado de S16 y registrar el cambio de orden en el Scrum de Agent.
2. Sustituir la cuadrícula de tarjetas idénticas por renderizadores por tipo de archivo, reutilizando los datos actuales sin reescribir la voz.
3. Implementar la línea temporal de Experience y el comportamiento de despliegue/cierre.
4. Preparar preview local para revisión de Juan. No publicar sin una nueva indicación.

S18 conserva la revisión móvil completa y `AG-014` sigue siendo el QA final; aquí se resuelven los mínimos móviles necesarios para la nueva composición.

## Incremento local para revisión

La ficha genérica se sustituyó por composiciones específicas en `src/pages/index.astro` y `src/styles/workbench.css`. Experience muestra dos trabajos resumidos con despliegue único, cierre al pulsar fuera y Escape; la formación queda aparte. Skills y Projects enlazan desde cada área al archivo correspondiente. SOUL mantiene una columna de relato que admite párrafos más largos cuando Juan escriba el texto. Se conservaron el workbench, los temas, el árbol, las pestañas y las rutas. La compilación Astro generó 32 páginas. No se modificó el contenido del perfil ni los Markdown de la colección documental. Preview local pendiente de aceptación visual; no publicar todavía.

## Feedback de Juan sobre el primer preview (27/09/2026)

Juan no acepta aún el diseño: la cronología le parece poco visual y las páginas demasiado similares y estáticas, con el mismo contenedor de título y contenido. Antes de otra implementación quiere propuestas de diseño, recogidas en [S17-direcciones.md](./S17-direcciones.md). Pidió explorar una ruta curvada con un punto que indique la posición, experiencias en bocadillos de distintos tamaños, formas y lugares, y sumar Yoshinoya y Blumare Shinjuku en Japón y voluntariado en una tienda Oxfam de Londres. Puede haber una foto de Japón si Juan aporta o aprueba una. No se inventarán fechas, tareas ni imágenes.

El detalle de experiencia puede flotar por encima del resto, sin desplazar la página. El primer preview cerraba la tarjeta en `pointerdown`, antes de que llegara el clic a otro control; se cambió el cierre exterior a `click` para que la acción pulsada ocurra primero. La capa flotante y la nueva identidad de las páginas permanecen como decisiones de diseño, no están implementadas. La primera pasada visual sigue local y sin aceptación.

## Contact y correo

Juan no quiere enlaces `mailto:`. El correo visible debe ser un botón para copiar la dirección al portapapeles. En esta iteración se cambió el botón humano y el Markdown documental pasó a mostrar el correo como texto, sin enlace de correo. Un acceso a Gmail solo podría añadirse después con una etiqueta explícita.

## Segunda pasada local: camino A

La ruta curva incorpora Oxfam Londres (2019), Yoshinoya y Blumare Shinjuku en Japón (2020), 2EyesVision (2022–2024) y Thinkia (2026). Juan confirmó las fechas más precisas de los tres primeros, pero pidió mostrar únicamente años en **todas** las experiencias. La secuencia interna de los dos trabajos de Japón no se afirma como cronológica. No se añadieron fotos porque Juan no aportó ninguna.

Cada hito tiene forma, posición y escala propias. La línea SVG une sus puntos y marca el avance según la posición de lectura o el hito seleccionado. El detalle es una capa fija: abrir o cerrar una experiencia no modifica las posiciones de las demás. Se cierra con botón, Escape o clic fuera, una vez actuado el control pulsado. En móvil la capa queda anclada abajo.

Se retiró el contenedor exterior común de los archivos del perfil. README da prioridad al mapa de documentos, AGENTS funciona como entrada a la colección documental, SOUL usa una columna editorial, Skills presenta cuatro áreas conectadas, Projects diferencia las dos portadas y Contact da prioridad al botón de copiar el correo. Los textos personales siguen siendo provisionales hasta que Juan entregue su redacción para S16. El trabajo permanece local y S17 espera su revisión.

## Tercera pasada local tras la revisión de Juan

Juan pidió una ruta menos monótona, unir Yoshinoya y Blumare Shinjuku en un hito de camarero porque fueron simultáneos e introducir sus estudios en la misma trayectoria. La tarjeta UAM se sitúa en la banda visual de 2EyesVision con la indicación «en paralelo con el trabajo»; no se inventa año de inicio. El trazo añade curvas leves. Los detalles adoptan el color de su hito, se anclan a la tarjeta que los abrió, se desplazan con ella y se recogen cuando sale del área visible. Se ajustaron los nombres de los cargos que Juan dio explícitamente.

En SOUL se alternan texto y espacios para fotos personales por párrafo; Juan enviará las fotos después. Se quitaron las comillas aisladas, sin inventar una cita. El texto sigue siendo provisional hasta S16. Contact reduce el botón de correo y borra el aviso de copia tras unos segundos. Se retiró «Sigue por aquí» de la interfaz humana; la red de enlaces entre Markdown permanece. Todos los README usan el libro. Las pestañas se pueden cerrar con clic central; `Ctrl+W` queda reservado al navegador. El favicon provisional usa las iniciales «JL» también en la lectura documental. Los acentos y el tinte del lienzo cambian por archivo a partir de los tokens del tema global; la selección de un logo definitivo, las fotos y el posible cambio de nombre de Experience quedan en `AG-049`–`AG-051`.

Esta ampliación del alcance de S17 fue pedida por Juan el 27/09/2026 y no supone aceptación ni autorización de publicación. La compilación Astro generó 32 páginas; el preview local responde en `http://127.0.0.1:8767/`. El diseño mantiene como base el workbench y el contenido factual existente; quedan pendientes la revisión visual de Juan y su texto personal.

## Cuarta pasada local: escala de tiempo

Juan añadió al alcance de `AG-032` una lectura cronológica más precisa el 27/09/2026. Confirmó las fechas internas de inicio de UAM, graduación prevista y próxima incorporación a Kontaktu AI. Después añadió la FP en IES Virgen de la Paloma (2020–2022), la estancia en Japón de diciembre de 2019 a junio de 2020, cinco logos y la bandera que dejó en la raíz, y las duraciones de todas las etapas. Los meses de calendario solo colocan los hitos; las tarjetas y los Markdown muestran años, además de la **duración** en meses o años junto al cargo. La escala sitúa cada comienzo, marca años discretos en el fondo, presenta los finales de la FP y 2EyesVision y la graduación prevista como hitos breves sin expansión, y muestra cada logo o bandera cerca del punto durante el periodo correspondiente. Kontaktu AI se rotula como etapa futura, sin funciones inventadas y con duración mínima prevista. El tramo final gana el espacio necesario para que el punto llegue al final con avance lineal; una propuesta de aceleración se retiró inmediatamente tras el rechazo de Juan. El detalle se recoge cuando queda visible aproximadamente media tarjeta, con una salida breve y difuminada.

Los logos que Juan dejó en la raíz se movieron a `public/images/`; no son logos nuevos del portfolio ni resuelven `AG-049`. El texto de Experience sigue siendo provisional y S17 continúa **en revisión local**, sin push ni publicación.

## Revisión local de la escala

Las capturas de Juan mostraron que Oxfam y la FP se solapaban y que el símbolo inicial de FP era casi invisible. El eje temporal mantiene meses para situar hitos, pero da más espacio al tramo entre enero y septiembre de 2020 para separar las tarjetas sin cambiar su orden. Se sustituyó el símbolo por el logo azul y blanco que Juan añadió; el otro candidato y el símbolo anterior quedan en `planning/references/` para poder compararlos sin enviarlos al artefacto web. Todos los logos aparecen sobre una base clara fija, en tema oscuro o claro.

Por petición de Juan, la bandera de Japón aparece visualmente desde la línea de 2020, aunque la estancia real comenzó en diciembre de 2019. Los cierres se llaman «Fin del Grado Superior» y «Fin de la etapa 2EyesVision»; se añade «Fin de las prácticas en Thinkia». No se marca todavía el fin de Kontaktu AI. Estos cambios continúan locales y pendientes de revisión; S17 no está aceptado.

## Corrección de escala y anclajes

Juan rechazó ensanchar únicamente 2020 porque todos los años deben tener la misma escala. Se retiró ese tramo especial. Oxfam se ancla por la esquina inferior y la FP por la superior, ambas al mes que les corresponde; la primera tarjeta queda más arriba y la segunda más abajo sin alterar la distancia entre años. Se añadió margen al inicio del carril para que Oxfam no invada la cabecera. El hito final de Thinkia se redujo. Si estas posiciones no bastan en alguna anchura de escritorio, el siguiente ajuste será ampliar **todos** los años por igual, nunca uno aislado.

Juan planteó un posible scroll guiado por la distancia recorrida en la línea: durante segmentos horizontales avanzaría el punto sin desplazar la página. Se registró como `AG-052`, fuera de S17 y sin implementación por petición explícita. Antes de decidirlo habrá que estudiar rueda, trackpad, tacto, teclado, accesibilidad y la posibilidad de recorrer el contenido sin quedar atrapado.

Juan pidió después que todos los hitos de fin tengan el mismo tamaño. FP, 2EyesVision, Thinkia y graduación prevista comparten ahora ancho, alto, tipografía y forma; solo varía su posición respecto a la ruta.

En la revisión siguiente Juan precisó que esos cuatro hitos deben ser bandas finas de una línea. Se fijó un alto común menor manteniendo texto legible. El enlace corto desde el fin de Thinkia hasta el comienzo de Kontaktu se traza en una sola curva hacia el lado opuesto, y la tarjeta de Kontaktu se ancla por su esquina superior para dejar visible ese tramo. Las tarjetas y sus detalles usan ahora colores por etapa en los temas oscuro y claro: Oxfam verde, Tokio rojo, FP azul, 2EyesVision naranja, UAM verde, Thinkia azul y Kontaktu naranja. Todo sigue en preview local y pendiente de aceptación.

Juan aclaró que un hito con texto de varias líneas debe crecer solo él. Las bandas comparten alto mínimo, y cada una aumenta según su contenido. La de Thinkia se limita al carril central entre las tarjetas cercanas para que, al envolver el texto, no las tape.

En la revisión posterior, Juan pidió devolver el inicio de Kontaktu al centro de su punto. Se retiró su anclaje superior y se mantuvo la curva corta por el estrecho espacio entre la tarjeta y el punto. Los puntos de los cierres se hicieron más pequeños y suaves que los de las tarjetas principales. Las bandas perdieron unos píxeles de ancho y alto mínimo; conservan crecimiento automático si el texto ocupa más de una línea.

## Ampliación: scroll guiado (28/09/2026)

Juan autorizó implementar `AG-052` dentro de S17. El diseño elegido conserva el scroll nativo: la distancia desplazada mueve el indicador la misma distancia sobre la ruta. Una compensación visual vertical mantiene quieto el contenido cuando el trazo va en horizontal y lo desplaza al bajar el trazo. La interacción debe conservar rueda, trackpad, tacto, teclado y barra de scroll; el recorrido termina sin bloquear la lectura posterior. Abrir un detalle no cambia el avance. El movimiento reducido conserva una lectura vertical estática. Se trabaja y revisa localmente antes de publicar.

Implementación local: se calcula la longitud de cada tramo SVG y se usa el desplazamiento nativo del editor como distancia recorrida. Un contenedor reserva el espacio adicional de los tramos horizontales; al acabar la ruta, el scroll continúa normalmente. El detalle no fuerza el indicador a su hito. En móvil, las tarjetas se alinean en un carril vertical; con movimiento reducido se ocultan el punto animado y el tramo de avance. La compilación Astro generó 32 páginas; el servidor local está en `http://127.0.0.1:8768/#/es/Experience.md`. Pendiente de revisión de Juan; no publicado.

Juan confirmó que la interacción corresponde a lo que pidió, pero observó tirones al recorrer tramos más horizontales. Solicitó dar holgura a la relación entre la posición exacta del punto y el desplazamiento vertical de la página: el punto mantiene su avance por distancia, mientras la página sigue una referencia vertical suavizada. Esta es la corrección de S17. Una posible causa de rendimiento se estudiará solo si persiste tras revisarla; la evaluación de reingeniería futura queda en `AG-053`, sin seleccionarla para este sprint.

Corrección local: la geometría SVG se muestrea al preparar la ruta y se promedia su componente vertical en una vecindad de 160 px de recorrido. La referencia suavizada conserva exactamente el principio y el fin, de modo que no hay salto al entrar o salir de la trayectoria. En cada frame, el punto continúa en la curva real; la página consulta la referencia ya calculada. Astro compiló 32 páginas y el preview local respondió HTTP 200 en el puerto 8768. La sensación de scroll sigue pendiente de revisión de Juan. No se abordó la reingeniería.

Juan informa que la primera holgura sigue sintiéndose errática y plantea que también podría haber un coste de cálculo visible en tiempo real. Dentro de `AG-052` se ampliará la suavización y se retirarán cálculos de la curva y escrituras de DOM repetidas en cada frame. Es una optimización puntual de la interacción actual; `AG-053` continúa reservado para una evaluación de arquitectura posterior.

Segunda revisión local: la referencia vertical usa una vecindad de 280 px de recorrido. El punto consulta muestras de la curva preparadas al construirla; ya no llama a `getPointAtLength()` durante el scroll. Las posiciones del punto y los logos se actualizan con transformaciones; la longitud del trazo, los periodos de los logos y las tarjetas activas solo se escriben cuando corresponde. Astro compiló 32 páginas. No se ha medido todavía la cadencia real de frames en el navegador ni se atribuye a estas operaciones, sin medición, toda la causa de los tirones. Juan revisará la sensación de scroll en local antes de cerrar `AG-052`.

## S17 sigue abierto: scroll rápido

Juan no acepta el resultado actual de `AG-052`: al desplazarse rápido percibe que se pierde el efecto y no considera robusta la interacción. No se cierra S17 ni se da por buena la segunda revisión. Tampoco se inicia ahora otro análisis o cambio de código.

Cuando Juan dé la indicación, un subagente especializado en interacción y rendimiento web con Astra analizará el comportamiento rápido y lento en la implementación existente. Su encargo será distinguir observaciones de hipótesis, identificar la causa con evidencia, comparar enfoques y definir criterios verificables antes de escoger la corrección. Después se implementará y se presentará una nueva versión local para su revisión. La evaluación global de eficiencia, calidad y posible reingeniería de toda la aplicación Agent pertenece a `AG-053` en **otro sprint**; no forma parte de esta corrección.

Juan dio la indicación para ese análisis. Astra replanteó la interacción desde cero y entregó [AG-052-analisis-Astra.md](../AG-052-analisis-Astra.md): propone una escena `sticky` con un progreso único, expone el compromiso entre coherencia inmediata y mostrar todos los hitos tras un salto grande, y plantea un prototipo comparativo antes de integrar nada. No se modificó el código ni se cerró S17.

Juan eligió implementar la opción intermedia: el scroll nativo seguirá recibiendo rueda, trackpad, tacto, teclado y barra, pero la trayectoria se presentará en una escena `sticky` cuyo punto, trazo, tarjetas, logos y encuadre compartan progreso. Esta es la corrección seleccionada para `AG-052`, no una aceptación del resultado. El cambio se mostrará localmente antes de cerrar S17; la revisión global de código continúa fuera de este sprint en `AG-053`.

Implementación local: la ventana sticky permanece en el área de lectura mientras el scroll nativo recorre la longitud de la trayectoria. Ruta, punto, logos y tarjetas usan una misma cámara calculada desde ese progreso; se retiraron la compensación del scroll anterior y el promedio vertical de 280 px. Hay espacio de entrada y salida, los detalles se posicionan dentro de la ventana visible y el tamaño de la escena se adapta al editor. En móvil y con movimiento reducido permanece la lectura lineal sin escena fija. El build de Agent generó 32 páginas con `ASTRO_TELEMETRY_DISABLED=1`; el preview local está en `http://127.0.0.1:8769/#/es/Experience.md`. Se revisó el código, pero la sensación de desplazamiento y los gestos reales aún necesitan la revisión de Juan. S17 sigue abierto; no se hizo push ni publicación remota.

Juan rechazó la sensación de esa pasada: a veces parece perderse el comportamiento guiado y volver el scroll vertical normal. Como nueva primera fase de `AG-052`, pidió que el gesto avance **solo** el indicador por la distancia del camino, sin mover el resto de Experience. Una vez que pruebe esa relación se decidirá cómo mover la página. La escena `sticky` anterior queda como intento no aceptado; no se cerrará S17 con ella.

La primera fase sustituye temporalmente la presentación de Experience en local por un mapa compacto del camino SVG existente. El editor queda inmóvil; la distancia acumulada de rueda, trackpad, tacto o teclas se limita a `0…longitud de la ruta`. Ese único valor sitúa el punto y la longitud de la línea pintada; no se usa `scrollTop` ni la coordenada vertical del punto como progreso de la prueba. La trayectoria y las tarjetas originales permanecen en el DOM para calcular la geometría, pero se ocultan y no admiten foco. Los demás archivos mantienen su navegación. `ASTRO_TELEMETRY_DISABLED=1 npm run build:agent` compiló 32 páginas. Preview local: `http://127.0.0.1:8769/#/es/Experience.md`. Falta la prueba de Juan; no se ha implementado aún el movimiento de la página a partir del progreso y no se ha publicado.

### Corrección del preview obsoleto

Juan seguía viendo movimiento de toda la página. Se comparó el HTML real del puerto 8769 con el código del workspace: el servidor no entregaba `markerOnlyPrototype` ni el mapa de la primera fase. En Edge se reprodujo el resultado anterior: una rueda de 550 px desplazaba el editor de 0 a 550. La compilación registrada arriba había terminado, pero no demostraba que el servidor de desarrollo estuviese sirviendo esa versión.

Se reinició ese servidor y se activó vigilancia periódica de archivos solo cuando Agent corre en WSL desde una unidad Windows. Una edición posterior al reinicio apareció en el HTML servido, confirmando que ahora recoge los cambios. La limitación de los avisos entre Windows y WSL está documentada en [Vite](https://vite.dev/config/server-options#server-watch).

Comprobación de la versión actual en Edge, a 1360 × 900: rueda de 120 unidades → avance de 120 unidades sobre la ruta; ráfaga acumulada → 1480; inversión de 240 → 1240. En todos los casos, `scrollTop` del editor y `scrollY` de la ventana permanecieron en 0, y los rectángulos del mapa y de la trayectoria conservaron posición y tamaño. Inicio/Fin llegaron a 0%/100% sin desplazar la página. Cambiar a Contact restauró el scroll normal y volver a Experience restauró la prueba. No se registraron errores de JavaScript. Estas comprobaciones confirman la fase aislada con rueda y teclado; no cierran S17 ni sustituyen la revisión de Juan o una prueba física de trackpad y tacto.


### AG-052 · Recuperación de contenido y cámara directa

Juan acepta el avance aislado y autoriza dos pasos consecutivos: recuperar tarjetas, años, hitos y logos, sin cabecera ni texto auxiliar, primero inmóviles; avisar y esperar pasivamente dos minutos; después derivar la posición vertical del contenido de la altura del punto. La entrada seguirá modificando únicamente la distancia recorrida por el camino. Sin publicación ni cierre de S17.

Resultado local: se retiró el mapa compacto, la cabecera y las instrucciones. Juan confirmó que las tarjetas reales quedaban inmóviles y solo avanzaba la ruta. Se completaron 120 segundos de espera pasiva (interrumpidos únicamente por su confirmación) antes de activar la cámara.

La cámara deriva directamente de `point.y - firstPoint.y`; la entrada sigue siendo distancia de camino, nunca `scrollTop`. La geometría se precalcula al cambiar el layout y el render interpola una muestra por frame. Los detalles mantienen su desplazamiento interno; el foco de teclado puede revelar una tarjeta cambiando la distancia. Móvil y movimiento reducido mantienen lectura nativa.

Prueba en Edge sobre el servidor 8769: con 400 unidades de rueda, avance de 400 y traslación vertical de 247,812 px; en una ráfaga hasta el extremo, traslación de 1104 px; inversión de 300 unidades correcta. En todos esos estados el punto permaneció a la misma altura de pantalla y `scrollTop`/`window.scrollY` fueron cero. Inicio/Fin y navegación a Contact correctos, sin errores JavaScript. Cámara pendiente de revisión de Juan; S17 sigue abierto y no publicado.


Juan pidió suavizar la rueda y revisar todos los mecanismos de desplazamiento tras bloquear el scroll nativo en Experience. Antes de editar, el alcance, matriz de entradas y criterios quedaron en [AG-052-entradas-scroll.md](../AG-052-entradas-scroll.md). La corrección se implementará en este sprint; la aceptación sigue pendiente.

Juan corrigió el alcance durante la implementación: no quiere ni vista lineal ni barra lateral. Ambos controles experimentales se eliminaron; `AG-052` se centra en los dispositivos y gestos que producen desplazamiento, con la ruta como único indicador. El plan específico se actualizó con esa decisión.

Resultado posterior a la corrección de alcance: el indicador y el trazo de la ruta son los únicos controles de avance visibles. El evento de rueda acumula una distancia objetivo y `requestAnimationFrame` interpola usando tiempo real; inversión cancela el impulso pendiente. Deltas pequeños de trackpad usan una constante menor. El teclado conserva flechas, páginas, espacio e Inicio/Fin, incluso sobre tarjetas sin robar la activación de botones; se corrigió una carrera entre enfoque de tarjeta y PageDown. En escritorio táctil, el arrastre va directo al punto y al soltar añade inercia limitada. El clic central dentro de Experience inicia autodesplazamiento por posición del puntero y Escape u otro clic lo terminan; el clic central en pestañas sigue fuera de ese controlador. Popovers, zoom con Ctrl, otros archivos, móvil y movimiento reducido mantienen sus entradas independientes.

Comprobación local: Edge 1360 × 900 mostró avance parcial (aprox. 20 de 120 unidades) tras el primer frame y destino cercano a 120 tras 460 ms; inversión posterior bajó la distancia. Clic central desplazó la ruta con `scrollTop=0`; gesto táctil emulado avanzó 90 unidades al arrastrar y continuó por inercia tras soltar. Flecha abajo, PageDown con tarjeta enfocada, Inicio/Fin, scroll dentro de detalle y navegación a Contact funcionaron; móvil y movimiento reducido mantuvieron `overflow: auto`. Sin errores JavaScript. La compilación final de Agent generó 32 páginas. No se probó hardware físico de trackpad/táctil ni se publicó; S17 espera la valoración de Juan.

Juan valoró positivamente el avance suavizado y aportó cuatro imágenes: tres cursores de autodesplazamiento y una captura del contorno grande al usar flechas. Se añadieron cursores SVG propios para reposo, subida y bajada, con los elementos de las referencias y colores que contrastan con el editor. Se retiró el contorno de `.experience-scene:focus-visible`; el punto recibe un halo discreto como indicación del foco de teclado. Edge confirmó los tres estilos calculados, ausencia del contorno y ningún error JavaScript. Agent compiló 32 páginas. Los cambios siguen locales y S17 espera la revisión de Juan.

Juan pidió afinar esos cursores y cerrar la decisión `AG-051`: los tres SVG pasan de 32 a 24 px, con formas y bordes más finos; el archivo visible se llama `Trayectoria.md` en español y `Trajectory.md` en inglés. El árbol, pestañas, breadcrumb, Welcome, mapa de documentos y colección Markdown usan esos nombres. Las rutas anteriores de `Experience.md` se normalizan en la interfaz y redirigen en la colección documental. La compilación de Agent generó 34 páginas, incluidas las dos redirecciones. Preview local en `http://127.0.0.1:8769/?review=trajectory#/es/Trayectoria.md`. S17 sigue abierto a la revisión de Juan; no hay push ni publicación.

Juan no dispone ahora de ratón y pidió una prueba del clic central. En Edge automatizado, el clic activó el cursor de reposo de 24 px; mover el puntero abajo avanzó la distancia de ruta de 0 a 366 y moverlo arriba la redujo a 42. Al volver al origen apareció el cursor de reposo; Escape desactivó el modo. `scrollTop` permaneció en 0 y no hubo errores JavaScript. La simulación comprueba la lógica y los estilos calculados, pero no la sensación de un ratón físico ni el dibujo del cursor del sistema en pantalla.

## Cierre · 28/09/2026

Juan aprobó S17 completo y pidió subirlo. Se mueven `AG-032`, `AG-033`, `AG-051` y `AG-052` al backlog de tareas terminadas. La aceptación cubre la presentación e interacción actuales; el texto definitivo de `AG-034`, las fotografías de `AG-050`, el QA móvil de `AG-043` y la revisión global de rendimiento de `AG-053` siguen como trabajo separado. La prueba automatizada del clic central quedó documentada, con el límite de no contar con un ratón físico. Tras el incidente del preview obsoleto, las siguientes revisiones locales deben comprobar la página servida, además de la compilación.

Publicación: el commit `5c76100` se subió a `main`; [GitHub Pages #36445703444](https://github.com/JLarry00/jlarry00.github.io/actions/runs/36445703444) finalizó con éxito. Se comprobaron HTTP 200 en `/`, `/for-agents/`, `for-agents/read/es/Trayectoria/`, `for-agents/read/en/Trajectory/` y `/neon-mesh/`. La ruta documental antigua de `Experience` conserva su página de redirección.

Ajuste tras la publicación: Juan mostró el favicon oscuro «JL» anterior y pidió usar el distintivo azul «JL» que Agent ya tenía en su cabecera local. El favicon se rehizo con el mismo color, forma y letras; se le dio una ruta nueva para evitar que el navegador conserve el icono antiguo en caché. El logo turquesa de Neuron Mesh se descartó tras la aclaración de Juan. `AG-049` sigue pendiente para decidir un logo definitivo en el futuro.

## Revisión posterior solicitada por Juan · 28/09/2026

Juan retiró la expansión de las tarjetas de Trayectoria: los detalles personales amplios irán en SOUL.md. Se conservan ruta, colores, años, logos, hitos y scroll. Las tarjetas muestran lugar y año, título, descripción y duración; solo incluyen una segunda nota cuando Juan la escribió. Tras un primer pase con solo Oxfam, Juan guardó los siete bloques en `contexto/CONTENIDO_AGENT.md` y se integraron en sus tarjetas en español e inglés. Se retiraron el botón «Ver detalle», la ventana superpuesta y sus manejadores. Kontaktu mantiene la condición de incorporación prevista; la colección para agentes ya describe el puesto previsto sin atribuir funciones realizadas. La revisión está implementada localmente y espera valoración de Juan; no cambia la aceptación histórica del primer S17 ni consta aún una nueva publicación.

Juan observó que la duración cambiaba de lugar según la longitud del cargo. Se eligió una posición estable: etiqueta en la esquina superior derecha de cada tarjeta, alineada con lugar y año. Los servidores antiguos de Agent en 8769, 8770 y 8771 se cerraron; el servidor de desarrollo actual y el comando `dev` de Agent usan 8000. Este ajuste visual sigue pendiente de revisión y no se ha publicado.
