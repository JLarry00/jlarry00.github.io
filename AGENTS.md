# AGENTS.md — workspace agéntico

Este repositorio es el workspace completo para desarrollar dos webs. Lee `START_HERE.md` al comenzar y aplica la [skill Scrum](.agents/skills/scrum-master/SKILL.md) cuando trabajes sobre una iteración.

## Estructura y propiedad

- `websites/neuron-mesh/`: aplicación Astro clásica y su único Scrum en `planning/`.
- `websites/agent/`: aplicación Astro de la futura experiencia tipo editor y su único Scrum en `planning/`.
- `site.config.json`: selecciona exactamente `neuron-mesh` o `agent` para los comandos locales `*:active`. El valor inicial es `neuron-mesh`.
- `.agents/skills/`: skills portables del workspace.
- `.codex/agents/`: perfiles opcionales de agentes del proyecto; Codex puede requerir que el clon se marque como confiable.
- `SUGERENCIAS.md`: bandeja de entrada para propuestas de Juan; no es un backlog compartido.
- `context/`: notas públicas curadas para el trabajo editorial; no se despliega.
- `contexto/`: importación privada local, ignorada por Git. No copiarla, ni copiar CVs o notas privadas, al repositorio público.

Cada producto mantiene su propio backlog, sprint y versiones. Antes de cambiar código, lee y actualiza solo el Scrum de la aplicación afectada. La excepción ya asignada es la selección y el workflow de publicación: se registra en Neuron Mesh porque protege la web actualmente publicada. No crees un backlog o sprint común en la raíz.

Al comenzar trabajo en este workspace, revisa [`SUGERENCIAS.md`](./SUGERENCIAS.md). Evalúa cada entrada frente al producto y su backlog actuales; si el alcance o el destino no están claros de forma material, concreta la propuesta con Juan antes de registrarla. Añade el resultado al `BACKLOG.md` del producto como una o varias tareas, o amplía una tarea existente si encaja mejor. Si afecta a ambos productos, registra el trabajo propio de cada uno en su Scrum. No inventes prioridades ni selecciones trabajo para un sprint: Juan decide prioridad y selección. Tras integrar una propuesta o acordar con Juan que no procede, quítala de la bandeja; deja allí las entradas que aún esperan aclaración. Las propuestas que no pertenecen a una web requieren aclarar con Juan dónde deben gestionarse; no abras un Scrum común.

## Aplicaciones y publicación

- Instala desde la raíz con `npm run setup`; cada aplicación conserva `package.json` y `package-lock.json` propios.
- Usa los comandos raíz documentados en `README.md` para desarrollar, comprobar y compilar una variante concreta o la seleccionada.
- GitHub Pages compone Neuron Mesh en `/` y Agent en `/agent/` tras la decisión explícita de Juan del 24/09/2026. Cambiar `site.config.json` selecciona solo la variante de los comandos locales `*:active`; la configuración inválida sigue fallando.
- Las ramas de broma dentro de Agent son ficción, no ramas Git reales.
- El workflow publica exclusivamente ambos `dist/` en un artefacto. Nunca copies el workspace, contexto o planning al artefacto.

## Contenido y seguridad

- Distingue hechos, experiencia, aprendizaje, planes y ficción. No inventes cifras, funciones, resultados ni credenciales.
- Reconfirma hechos que pueden cambiar, en especial fechas, estados laborales, estudios y estado de proyectos. Usa fuentes actuales y señala las limitaciones.
- Mantén coherencia entre español e inglés. Prefiere frases concretas y naturales; elimina vaguedad, relleno y fórmulas de marketing genéricas.
- `websites/neuron-mesh/` conserva contenido existente como fuente fechada, no como autorización automática para copiarlo. El estado de perfil en `context/public-profile-snapshot.md` también requiere reconfirmación antes de reutilizarse.
- No versionar secretos, dependencias, salidas de compilación, cachés ni importaciones privadas. Revisa lo que entra en el commit y el contenido de `dist/` antes de publicar.
- No publiques una web, compres servicios, contactes terceros o crees un remoto sin una instrucción que lo incluya. La sincronización del workspace en esta tarea está autorizada por el plan aprobado.
- En Agent, `AG-004` (vídeo de reviews) requiere una petición posterior de Juan y no debe abrirse aún; `AG-005` espera que Juan revise opciones de árbol; `AG-014` será la última tarea del producto.

## Rutas Windows en WSL

Cuando una herramienta Linux/WSL necesite acceder a una ruta absoluta de Windows `X:\...` o `X:/...`, usa `/mnt/x/...` con la unidad en minúscula y las barras convertidas. Esta traducción es solo para acceder al archivo: conserva las rutas originales en comandos nativos de Windows y en archivos fuente, configuración o documentación. No alteres rutas Linux, rutas que ya estén bajo `/mnt`, URL ni rutas UNC. Antes de informar que una ruta Windows no existe, comprueba su equivalente WSL.
