# AG-005 — Opciones para los archivos personales del repo-perfil

Recoge lo acordado y lo pendiente de discutir con Juan, sin inventar hechos biográficos. Hay tres contextos distintos: el `AGENTS.md` visible en la interfaz humana, el documento `AGENTS.md` de la colección agéntica y el `AGENTS.md` situado en la raíz de este workspace, que instruye al agente que desarrolla la web.

## Función de cada archivo

| Archivo | Propuesta | Lo que falta decidir |
|---|---|---|
| `AGENTS.md` en la UI humana | **Acordado:** explicar, dentro de la metáfora del repo, cómo está organizado el perfil y qué encontrará un lector en la colección agéntica. Su botón será el único acceso humano→agéntico y abrirá directamente el `AGENTS.md` agéntico. | Redactar el contenido y diseñar el botón. |
| `AGENTS.md` agéntico | **Acordado:** portada documental con mapa breve del perfil, enlaces a experiencia, proyectos, skills y contacto; fecha de revisión y límites de las afirmaciones. | Su único enlace de retorno estará en la cabecera y apuntará al `AGENTS.md` humano. |
| `SOUL.md` | **Acordado:** About personal completo, que incluirá los hobbies que Juan quiera publicar junto con sus intereses, motivaciones y forma de trabajar. Usar su voz y ejemplos concretos. | Confirmar qué facetas e intereses son reales, actuales y públicos. No derivarlos de una plantilla de personalidad de IA. |
| `MEMORY.md` | **Aplazado:** todavía no tiene función ni contenido. No crear un archivo vacío o genérico solo para completar la metáfora. | Retomar cuando Juan tenga una idea que lo justifique. |

## Recomendación provisional

Juan aprobó poner el **único botón de salida de la UI humana dentro de su `AGENTS.md`**, donde tiene contexto y lleva al `AGENTS.md` agéntico. En la colección agéntica, el enlace de cabecera vuelve a ese archivo humano. Esto deja una función en cada lado: presentación visual del acceso para una persona, e índice práctico para una IA. La decisión de interfaz todavía está por implementar. `SOUL.md` será el About personal completo, incluidos los hobbies; `MEMORY.md` queda pendiente sin propuesta preferida.

## Orden de decisiones

1. Implementar la puerta única entre interfaces (`AG-027`) con el comportamiento acordado.
2. Definir con Juan qué material personal entra en `SOUL.md`; dejar `MEMORY.md` aparcado.
3. Fijar árbol, nombres y agrupación de skills (`AG-035`), conservando enlaces directos o redirecciones razonables para rutas ya publicadas.
4. Redactar y diseñar los archivos con las conclusiones de `AG-004` y los hechos confirmados.
