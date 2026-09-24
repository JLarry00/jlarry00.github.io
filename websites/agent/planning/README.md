# Portfolio Agent — brief de producto y Scrum

Esta carpeta describe la segunda versión del portfolio personal: una experiencia web que presenta el perfil como el repositorio de un agente. El brief es una dirección de producto, no permiso para inventar hechos profesionales ni para publicar la variante antes de elegirla.

## Alcance de esta línea

La aplicación vive en `websites/agent/`; su único Scrum está en `websites/agent/planning/`. No comparte backlog, sprint ni registro de versiones con Neuron Mesh. La aplicación empieza como scaffold independiente. El sprint `S01` prepara la estructura; la interfaz y el contenido final permanecen en el backlog.

## Experiencia prevista

- Interfaz inspirada en VS Code, simplificada para leer un portfolio y sin controles que no tengan una función real.
- Explorer como vista principal, con una carpeta abierta que representa el repo de un agente.
- Search busca solo nombres y rutas de archivos.
- Source Control simula ramas de presentación. `main` muestra información real; las ramas de broma se identifican con claridad como ficción. Una puede presentar la identidad secreta de Batman, expuesta con poca discreción. No son ramas Git ni identidades alternativas reales.
- Run and Debug abre una animación ligera de alguien corriendo detrás de bichos para depurarlos. Debe poder pausarse y respetar `prefers-reduced-motion`.
- No mostrar Extensions hasta que exista una función útil.
- Temas con al menos un claro clásico y un oscuro clásico; se valorarán paletas conocidas adicionales mediante tokens de diseño.
- En móvil, mantener Explorer accesible y el contenido legible sin forzar la distribución de escritorio.

## Árbol público previsto

```text
README.md
AGENTS.md
Welcome.md
Experience.md
Contact.md
skills/
  README.md
  [skill].md
projects/
  README.md
  [project].md
hobbies/
  [hobby].md
```

Los documentos reales del portfolio se versionarán como Markdown y se presentarán también en la interfaz. Una entrada específica para lectura automática apuntará a un índice Markdown y a URLs estables para cada archivo. Las instrucciones reales del agente que desarrolla este workspace no se publicarán como perfil; el `AGENTS.md` del portfolio será contenido deliberado y distinto.

## Contenido y voz

La web clásica es una fuente inicial, no una autorización para copiar cada frase. Las reviews editoriales de Juan y la evidencia actual de los proyectos deben guiar el tono y cada afirmación. Se distinguirán hechos confirmados, experiencia, aprendizaje, planes y ficción. La paridad inglés/español forma parte de aceptación.

La vista para lectores automáticos tendrá una entrada estable en `/for-agents/`, con un índice navegable y enlaces a los archivos Markdown servidos como texto plano. No se presupone que un agente necesite recorrer la interfaz visual.

## Scrum propio

- Juan decide prioridad y aceptación.
- El sprint se define por una entrega revisable, sin duración artificial ni métricas de equipo inventadas.
- `BACKLOG.md` contiene lo no seleccionado; `SPRINT_ACTUAL.md` contiene solo el incremento activo; `VERSIONES.md` no reutiliza las versiones de Neuron Mesh.
- Los cierres quedan en `sprints/`. No hay un Scrum compartido en la raíz.
- El scaffold actual no convierte las funciones futuras en trabajo terminado.
