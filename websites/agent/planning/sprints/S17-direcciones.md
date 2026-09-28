# S17 — Direcciones visuales para discutir

Propuesta del 27/09/2026. Juan eligió la opción A para probarla en local; su resultado aún no está aceptado. Responde al rechazo de la primera pasada visual. El workbench, Explorer, pestañas, idioma y temas siguen siendo el marco. Dentro del editor, cada archivo puede ocupar el lienzo con una composición propia, sin una tarjeta exterior repetida.

Tras ver la segunda pasada, Juan precisó que Yoshinoya y Blumare Shinjuku deben compartir hito porque fueron trabajos simultáneos de camarero, y que la UAM entra en la ruta como formación solapada con trabajo. La tercera pasada aplica esos cambios; esta página conserva las alternativas originales como historial de decisión.

## Tres caminos para Experience

| Camino | Imagen principal | Lo que aporta | Riesgo |
|---|---|---|---|
| A. Trayecto curvo | Una línea SVG flexible recorre el lienzo. Un punto marca el hito activo; resúmenes asimétricos quedan anclados a la ruta. | Expresa desplazamiento y cambio de rumbo sin salir del editor. Admite Madrid, Londres y Japón, además de trabajo técnico y formación. | Si todos los hitos compiten a la vez, puede volverse difícil de leer. Mostrar detalle de uno en una capa flotante. |
| B. Grafo de ramas | Varias líneas curvas tipo historial Git: trabajo, aprendizaje, viajes y voluntariado se separan y vuelven a encontrarse. | Conecta la biografía con la metáfora de repositorio. | Puede forzar la vida a parecer commits y sugerir relaciones causales que Juan no ha descrito. |
| C. Atlas de lugares | Madrid, Londres y Tokio como capítulos espaciales; la ruta avanza entre ellos con fotos o recuerdos auténticos. | Da peso a la experiencia internacional y permite imágenes personales. | La geografía puede ocultar el orden temporal y convertir Thinkia y 2EyesVision en paradas secundarias. |

**Recomendación para conversar:** A. Tiene la curva, el punto y los bocadillos variables que Juan propuso, con una lectura cronológica más clara que B o C. Los tipos de hito pueden dar forma a cada resumen: voluntariado más ligero, trabajos como recortes de distinta escala y estancias en Japón con foto solo si Juan aporta una que quiera publicar. No usar logos o fotos de terceros como sustitutos de su experiencia.

El DOM mantiene el orden por años aunque la composición alterne izquierda/derecha y tamaños; entre Yoshinoya y Blumare Shinjuku no se afirma una secuencia interna. Al seleccionar un hito, el detalle aparece sobre el lienzo, cerca del punto cuando cabe; en móvil usa una hoja superpuesta. Nada empuja los demás hitos. Clic fuera, Escape y botón de cierre lo recogen; el foco vuelve al hito. El indicador de recorrido sigue selección o scroll, pero sin animación obligatoria y con alternativa estática en movimiento reducido. `2EyesVision`, Thinkia y formación también se representan, sin inventar funciones nuevas.

Esquema de la opción A (la secuencia de nombres es **ilustrativa**, no cronológica):

```text
  ruta curva      bocadillo compacto       bocadillo con foto opcional
      ●────────╮       [ Oxfam ]
               ╰────●────────────╮        [ Japón ]
                                  ╰──●     [ Thinkia ]
                                     ↳ detalle en capa, sin mover la ruta
```

## Composición de cada archivo humano

| Archivo | Propuesta | Lo que deja de repetirse |
|---|---|---|
| Welcome | Conservar la entrada que Juan aprobó; ajustar solo si la navegación nueva lo exige. | No rehacer el hero por sistema. |
| README | El mapa Markdown como pieza central del lienzo; una síntesis corta en el margen y caminos visibles hacia Experience, SOUL, Skills y Projects. | Sin caja de perfil ni cuadrícula de fichas genéricas. |
| AGENTS | Un umbral visual entre lectura en el editor y colección documental, con un único enlace claro hacia el `AGENTS.md` documental. | Sin otra lista de tarjetas que repita el árbol. |
| SOUL | Relato en capítulos con ritmo editorial y huecos para fotografías propias si Juan las elige. Los hobbies pueden vivir en una constelación pequeña al margen, no como otra tarjeta profesional. | El texto de Juan marca los capítulos; no fabricar una biografía para llenar módulos. |
| Experience | Camino A, B o C. Los resúmenes tienen tamaño y forma según el hito; el detalle vive en una capa. | Sin bloques idénticos apilados ni saltos al abrir. |
| skills/README | Diagrama de cuatro áreas conectadas con proyectos y experiencias reales. Cada área abre su archivo; no representa nivel de dominio. | Sin barras de porcentaje o cuatro tarjetas equivalentes. |
| Archivos de skills | Un lenguaje visual por asunto: infraestructura como topología, CI/CD como flujo, IA aplicada como ciclo de revisión, programación como archivos de trabajo. Esquemas conceptuales, sin métricas inventadas. | No usar la misma plantilla de detalle cambiando solo el color. |
| projects/README | Dos portadas distintas: Jarvis como flujo de entradas hacia una vista diaria; Extractor como documento y comprobación. Acceso directo al caso y al repositorio. | Sin dos fichas clonadas. |
| Archivos de proyectos | Jarvis muestra su arquitectura documentada; Extractor permite seguir extracción, segunda lectura y comprobación. Usar solo estados respaldados por sus README públicos. | Cada proyecto cuenta su propio proceso visualmente. |
| Contact | Una pantalla final muy limpia: correo grande como botón para copiar la dirección, con confirmación visible; LinkedIn y GitHub secundarios, sin `mailto:`, formulario ni modal de entrada. | Sin contenedor de texto genérico. |

## Sistema común sin molde común

Tokens de base heredados del tema oscuro: lienzo `#1d252b`, panel de editor `#283945`, borde `#354752`, texto `#e0ebf0`, azul de interacción `#71bbdb`; los temas claro, Monokai y Solarized reinterpretan estos papeles. Color adicional solo cuando comunica tipo de hito o relación. Tipografía de interfaz: Segoe UI Variable/Aptos; monospace reservado a nombres de archivo, fechas técnicas y pequeñas anotaciones. Cada vista ocupa el lienzo de forma distinta, pero mantiene rutas visibles, foco claro, lectura móvil y contraste.

## Datos que faltan para producir la ruta

- Juan confirmó Oxfam en octubre de 2019 y Yoshinoya y Blumare Shinjuku entre enero y junio de 2020. En la web solo se mostrarán los años, por indicación posterior suya. No consta un orden entre los dos trabajos de Japón.
- Qué hizo Juan en cada lugar y qué quiere contar en el detalle; `AG-034` queda a la espera de su propia redacción.
- Foto(s) que Juan quiera publicar y pie de foto, si decide usarlas. Hasta entonces se diseñan espacios opcionales, nunca imágenes ficticias de su vida.
