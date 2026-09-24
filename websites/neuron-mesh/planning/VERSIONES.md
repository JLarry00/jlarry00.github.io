# Versiones de la web

| Versión | Estado | Objetivo | Resultado |
|---|---|---|---|
| `1.0.0` | Cerrada localmente | Disponer de un MVP bilingüe navegable con contenido inicial y casos técnicos | 14 rutas estáticas construidas y probadas localmente |
| `1.1.0` | Cerrada localmente | Auditar y estabilizar el MVP, corregir problemas prioritarios y decidir la dirección visual posterior | 14 rutas auditadas con capturas, correcciones P1 aplicadas y comparativa visual formal documentada |
| `2.0.0` | Cerrada localmente | Aplicar la dirección visual Dark Tech interactiva inspirada en Angel Dal | 14 rutas transformadas a Dark Tech (Obsidiana/Cian), Canvas 2D interactivo (`InteractiveGrid`), tarjetas translúcidas, 28 capturas auditadas y build estático limpio |
| `2.1.0` | Cerrada localmente | Delinear identidad propia con Red Neuronal Asimétrica (`VIS-008`), enriquecer proyectos con diagramas/terminal/roadmaps (`PROJ-003`) y nuevo imagotipo minimalista (`VIS-007`) | 14 rutas con red neuronal dinámica orgánica, nuevo logo prompt en cabecera y favicon, casos de estudio con diagramas de pipeline, terminales CLI y roadmaps bilingües. Build y checks limpios. |
| `2.2.0` | Cerrada localmente | Logotipo oficial escultórico 3D Concepto 4 (`VIS-007`), calibración de red sináptica a 60 FPS fijos y botón de navegación Home (`NAV-001`) | Logotipo Concept 4 integrado en cabecera y favicon, red sináptica con física suave de elevación y 60 FPS estables sin blur pesado, botón Home en desktop/móvil/footer y narrativa afirmativa de proyectos validada. |

## Convención

- Cambio de parche (`1.1.1`): corrección pequeña que no altera estructura ni mensaje.
- Cambio menor (`1.1.0`): iteración compatible que mejora contenido, diseño o comportamiento.
- Cambio mayor (`2.0.0`): cambio material de identidad visual, arquitectura de información o posicionamiento.

No se asigna una versión nueva al comenzar un sprint. Se asigna al cerrarlo, cuando el incremento existe y ha sido validado.

## Publicación del workspace

ENV-03 (24/09/2026) mantiene la web Neuron Mesh 2.2.0 en la raíz pública y añade Agent en `/agent/` sin cambiar el número de versión de Neuron Mesh. GitHub Actions #35989129116 terminó correctamente; rutas de ambas webs respondieron 200.
