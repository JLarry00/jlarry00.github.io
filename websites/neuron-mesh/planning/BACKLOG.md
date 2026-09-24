# Product backlog

El backlog recoge trabajo potencial, no una promesa de implementación. La prioridad expresa valor y urgencia actuales; puede cambiar tras auditorías o nuevas decisiones.

Estados: `Backlog`, `Seleccionado S03`, `Bloqueado`, `Terminado`.

| ID | Área | Elemento | Prioridad | Estado | Condición o dependencia |
|---|---|---|---|---|---|
| `QA-001` | Calidad | Recorrer las 14 rutas en escritorio y móvil y crear un inventario de capturas y hallazgos | P0 | Terminado | Completado en S02 |
| `QA-002` | Accesibilidad | Probar teclado, foco, menú móvil, contraste, reducción de movimiento y semántica básica | P0 | Terminado | Completado en S02 |
| `QA-003` | Navegación | Comprobar enlaces externos, equivalencias EN/ES, CTA y rutas de retorno | P0 | Terminado | Completado en S02 |
| `CON-001` | Contenido | Revisar claridad, tono, redundancias y paridad bilingüe de todo el copy | P1 | Terminado | Completado en S02 |
| `VIS-001` | Diseño | Comparar la dirección actual con una monocroma y una híbrida | P1 | Terminado | Completado en S02 |
| `VIS-002` | Diseño | Evaluar negro/blanco inspirado por SpaceX, X y Grok sin imitar su identidad | P1 | Terminado | Completado en S02 |
| `VIS-003` | Diseño | Evaluar qué papel conservan Navy, Teal y Yellow | P1 | Terminado | Completado en S02 |
| `GATE-001` | Decisión | Elegir la dirección visual que alimentará una futura v2 | P0 | Terminado | Propuesta 3 (Dark Tech) aprobada por Juan |
| `FIX-001` | Estabilización | Corregir incidencias P0/P1 descubiertas en la auditoría | P0 | Terminado | Completado en S02 (incluye QA-H06) |
| `REL-001` | Versión | Validar y documentar `1.1.0` | P0 | Terminado | Versión 1.1.0 cerrada |
| `VIS-004` | Diseño | Rediseño visual completo a partir de la dirección elegida (Dark Tech) | P0 | Terminado | Completado en S03 (v2.0.0) |
| `VIS-006` | Interacción | Añadir Canvas reactivo y alternativas `prefers-reduced-motion` | P0 | Terminado | Completado en S03 (v2.0.0) |
| `VIS-007` | Diseño | Diseñar y renovar el logotipo / imagotipo de la web y favicon asociado | P1 | Terminado | Concepto 4 (lazo 3D) adoptado e integrado en cabecera y favicon en v2.2.0 |
| `VIS-008` | Interacción | Fondo de Red Neuronal interactiva (Neural Mesh) en Canvas nativo sustituyendo la retícula cartesiana | P1 | Terminado | Calibración elástica suave, elevación sutil y bloqueo a 60 FPS estables en v2.2.0 |
| `NAV-001` | Navegación | Botón de navegación "Home" / "Inicio" en desktop, mobile y footer | P2 | Terminado | Integrado con accesibilidad `aria-current="page"` en v2.2.0 |
| `PROJ-003` | Proyectos | Ampliar explicación de proyectos, diagramas/capturas, links directos a repo y sección de mejoras futuras | P1 | Terminado | Completado y refinado en v2.2.0 |
| `LEGAL-001` | Legal | Redactar e implementar Aviso Legal y Términos de Uso bilingüe (LSSI-CE) | P2 | Backlog | Identificación de autoría de proyectos y condiciones de uso del sitio |
| `LEGAL-002` | Privacidad | Redactar e implementar Política de Privacidad bilingüe (RGPD / LOPDGDD) | P2 | Backlog | Transparencia en comunicaciones de contacto por email y derechos ARCO |
| `LEGAL-003` | Privacidad | Declaración de política de cookies técnica / Zero-Tracker Policy | P2 | Backlog | Transparencia de sitio sin cookies de rastreo y exención de banner |
| `LEGAL-004` | Navegación | Integrar barra de enlaces legales y privacidad en el pie de página | P2 | Backlog | Enlaces secundarios discretos en footer bajo © Juan Larrondo |
| `EXP-001` | Exploración | Evaluar concepto "Agent Repository Architecture" (web inspirada en estructura de un agente con AGENTS.md, SOUL.md, etc.) | P2 | Backlog | Idea propuesta por Juan para análisis futuro |
| `TECH-002` | Fuentes | Integrar tipografía moderna (Inter + JetBrains Mono) | P1 | Terminado | Completado en S03 (v2.0.0) |
| `CON-002` | Confianza | Incorporar extractos de la recomendación de 2EyesVision | P2 | Backlog | Texto exacto, autoría y permiso aprobados |
| `CON-003` | Confianza | Evaluar testimonios de compañeros universitarios | P3 | Backlog | Solo opiniones concretas, atribuibles y con permiso |
| `CON-004` | Perfil | Preparar y enlazar un CV general público | P2 | Backlog | CV general revisado y autorizado |
| `CON-005` | Perfil | Revisar el nivel de detalle público de Thinkia | P2 | Backlog | Evidencia y confidencialidad |
| `PROJ-001` | Proyectos | Sustituir `TFG coming soon` por un caso real | P2 | Bloqueado | Tema, alcance y evidencia del TFG todavía abiertos |
| `PROJ-002` | Proyectos | Añadir capturas o diagramas simples de Jarvis y Extractor | P2 | Terminado | Integrado en PROJ-003 |
| `SEO-001` | Descubrimiento | Completar Open Graph, sitemap, robots y previsualización social | P2 | Backlog | URL pública o estrategia de publicación |
| `PERF-001` | Rendimiento | Medir Lighthouse, tamaño, fuentes y carga móvil | P2 | Backlog | Ejecutar sobre una versión visual estable |
| `TECH-001` | Entorno | Instalar o documentar un runtime Node persistente en WSL | P1 | Backlog | No cambiar el sistema sin encargo específico |
| `TECH-003` | Fuentes | Evaluar autoalojar fuentes o usar tipografía de sistema | P2 | Backlog | Decisión visual y de rendimiento |
| `REL-002` | Publicación | Preparar repositorio y GitHub Pages | P1 | Terminado | Repositorio remoto jlarry00.github.io inicializado, código en main con GitHub Actions y static en gh-pages |
| `REL-003` | Publicación | Evaluar dominio propio | P3 | Backlog | Web pública y dirección estable |
| `DATA-001` | Medición | Decidir si hace falta analítica respetuosa con privacidad | P3 | Backlog | Objetivo de medición definido |
| `CTA-001` | Conversión | Añadir botón "Hire me" / "Contrátame" en las secciones adecuadas de la web, enlazando a la zona de contacto | P1 | Backlog | Botón visible y coherente en páginas clave (hero, proyectos, about), bilingüe, con enlace directo a contacto |

## Criterio de prioridad

- **P0:** necesario para considerar estable la siguiente versión.
- **P1:** alto impacto o desbloquea decisiones próximas.
- **P2:** mejora valiosa, no imprescindible para el siguiente incremento.
- **P3:** idea opcional o de horizonte posterior.

## Workspace y publicación

| ID | Área | Elemento | Prioridad | Estado | Condición o dependencia |
|---|---|---|---|---|---|
| `ENV-005` | Entorno | Organizar la web existente en `websites/neuron-mesh/` | P0 | Terminado | Instalación y compilación limpias; las 14 rutas históricas se mantienen. |
| `ENV-006` | Publicación | Añadir selector estricto en raíz y comandos para cada app | P0 | Terminado | Ambos builds y checks; destinos válidos y configuración inválida comprobados. |
| `ENV-007` | Publicación | Construir y subir a Pages únicamente el destino seleccionado | P0 | Terminado | Workflow #3 completado con éxito para `91703e8`; rutas públicas principales responden HTTP 200. |
| `ENV-008` | Publicación | Mantener Neuron Mesh como destino inicial | P0 | Terminado | `site.config.json` selecciona `neuron-mesh`; dist conserva 14 rutas. |
| `ENV-009` | Publicación | Componer Neuron Mesh en `/` y Agent en `/agent/` en un único artefacto Pages | P0 | Seleccionado ENV-03 | Juan autorizó ambas webs públicas mientras Agent sigue en desarrollo. La raíz conserva las 14 rutas de Neuron Mesh; Agent usa base de subruta, sin copiar planning, contexto ni secretos al artefacto. |
