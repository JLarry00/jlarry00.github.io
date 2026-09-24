# AGENTS.md — workspace agéntico

Este repositorio es el workspace completo para desarrollar dos webs. Lee `START_HERE.md` al comenzar y aplica la skill de Scrum del repositorio cuando trabajes sobre una iteración.

## Estructura y propiedad

- `websites/neuron-mesh/`: aplicación Astro clásica y su único Scrum en `planning/`.
- `websites/agent/`: aplicación Astro de la futura experiencia tipo editor y su único Scrum en `planning/`.
- `site.config.json`: selecciona exactamente `neuron-mesh` o `agent` para GitHub Pages. El valor inicial es `neuron-mesh`.
- `.agents/skills/`: skills portables del workspace.
- `.codex/agents/`: perfiles opcionales de agentes del proyecto; Codex puede requerir que el clon se marque como confiable.
- `context/`: notas públicas curadas para el trabajo editorial; no se despliega.
- `contexto/`: importación privada local, ignorada por Git. No copiarla, ni copiar CVs o notas privadas, al repositorio público.

Cada producto mantiene su propio backlog, sprint y versiones. Antes de cambiar código, lee y actualiza solo el Scrum de la aplicación afectada. La excepción ya asignada es la selección y el workflow de publicación: se registra en Neuron Mesh porque protege la web actualmente publicada. No crees un backlog o sprint común en la raíz.

## Aplicaciones y publicación

- Instala desde la raíz con `npm run setup`; cada aplicación conserva `package.json` y `package-lock.json` propios.
- Usa los comandos raíz documentados en `README.md` para desarrollar, comprobar y compilar una variante concreta o la seleccionada.
- Cambiar `site.config.json` cambia el artefacto que prepara GitHub Pages. La configuración inválida debe fallar; no añadas una variante de reserva silenciosa.
- Publicar la variante Agent requiere una decisión explícita de Juan. Las ramas de broma dentro de su interfaz son ficción, no ramas Git reales.
- El workflow publica exclusivamente el `dist/` de la aplicación seleccionada. Nunca copies el workspace, contexto o planning al artefacto.

## Contenido y seguridad

- Distingue hechos, experiencia, aprendizaje, planes y ficción. No inventes cifras, funciones, resultados ni credenciales.
- Reconfirma hechos que pueden cambiar, en especial fechas, estados laborales, estudios y estado de proyectos. Usa fuentes actuales y señala las limitaciones.
- Mantén coherencia entre español e inglés. Prefiere frases concretas y naturales; elimina vaguedad, relleno y fórmulas de marketing genéricas.
- `websites/neuron-mesh/` conserva contenido existente como fuente fechada, no como autorización automática para copiarlo. El estado de perfil en `context/public-profile-snapshot.md` también requiere reconfirmación antes de reutilizarse.
- No versionar secretos, dependencias, salidas de compilación, cachés ni importaciones privadas. Revisa lo que entra en el commit y el contenido de `dist/` antes de publicar.
- No publiques una web, compres servicios, contactes terceros o crees un remoto sin una instrucción que lo incluya. La sincronización del workspace en esta tarea está autorizada por el plan aprobado.

## Rutas Windows en WSL

Cuando una herramienta Linux/WSL necesite acceder a una ruta absoluta de Windows `X:\...` o `X:/...`, usa `/mnt/x/...` con la unidad en minúscula y las barras convertidas. Esta traducción es solo para acceder al archivo: conserva las rutas originales en comandos nativos de Windows y en archivos fuente, configuración o documentación. No alteres rutas Linux, rutas que ya estén bajo `/mnt`, URL ni rutas UNC. Antes de informar que una ruta Windows no existe, comprueba su equivalente WSL.
