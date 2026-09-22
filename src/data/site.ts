export type Locale = 'en' | 'es'
export type PageKind = 'home' | 'about' | 'projects' | 'jarvis' | 'payroll' | 'approach' | 'contact'

export const external = {
  email: 'juanlarrondofdez@gmail.com',
  github: 'https://github.com/JLarry00',
  linkedin: 'https://www.linkedin.com/in/juan-larrondo-fernandez-de-cordoba',
  jarvis: 'https://github.com/JLarry00/jarvis',
  payroll: 'https://github.com/JLarry00/ExtractorNominas',
}

const paths: Record<Locale, Record<PageKind, string>> = {
  en: { home: '/', about: '/about/', projects: '/projects/', jarvis: '/projects/jarvis/', payroll: '/projects/payroll-extractor/', approach: '/approach/', contact: '/contact/' },
  es: { home: '/es/', about: '/es/sobre-mi/', projects: '/es/proyectos/', jarvis: '/es/proyectos/jarvis/', payroll: '/es/proyectos/extractor-nominas/', approach: '/es/forma-de-trabajar/', contact: '/es/contacto/' },
}

export const routeFor = (locale: Locale, page: PageKind) => paths[locale][page]
export const alternateFor = (locale: Locale, page: PageKind) => paths[locale === 'en' ? 'es' : 'en'][page]

export type ArchitectureBlock = { step: string; title: string; desc: string; tech: string }
export type TerminalLine = { text: string; tone?: 'cyan' | 'amber' | 'success' | 'muted' }
export type RoadmapItem = { title: string; body: string }

export type CaseCopy = {
  eyebrow: string
  title: string
  status: string
  lead: string
  repo: string
  facts: { label: string; value: string }[]
  architecture?: { title: string; blocks: ArchitectureBlock[] }
  terminal?: { title: string; command: string; output: TerminalLine[] }
  roadmap?: { title: string; items: RoadmapItem[] }
  sections: { title: string; paragraphs?: string[]; flow?: string[]; items?: { title: string; body: string }[]; tone?: 'evidence' | 'limits' }[]
  closing: string
  nextLabel: string
}

export type ProjectEntry = {
  key: 'jarvis' | 'payroll' | 'tfg'
  title: string
  status: string
  body: string
  link?: string
  cta?: string
  repoUrl?: string
  repoLabel?: string
  tags?: string[]
}

type SiteCopy = {
  nav: Record<PageKind, string>
  labels: { language: string; menu: string; close: string; skip: string; email: string; repository: string; status: string; next: string; contact: string; viewRepo: string }
  footer: { invitation: string; nav: string; copyright: string }
  home: { eyebrow: string; title: string; lead: string; intro: string; primary: string; secondary: string; whyTitle: string; why: { title: string; body: string }[]; closing: string }
  about: { eyebrow: string; title: string; intro: string; sections: { title: string; body: string }[]; projectCta: string; contactCta: string }
  projects: { eyebrow: string; title: string; intro: string; entries: ProjectEntry[] }
  approach: { eyebrow: string; title: string; intro: string; principles: { title: string; body: string; note: string }[]; closing: string }
  contactPage: { eyebrow: string; title: string; intro: string; emailTitle: string; emailBody: string; linksTitle: string; closing: string }
  cases: Record<'jarvis' | 'payroll', CaseCopy>
}

export const copy: Record<Locale, SiteCopy> = {
  en: {
    nav: { home: 'Home', about: 'About', projects: 'Projects', jarvis: 'Jarvis', payroll: 'Payroll Extractor', approach: 'Approach', contact: 'Contact' },
    labels: { language: 'Language', menu: 'Menu', close: 'Close menu', skip: 'Skip to content', email: 'Email', repository: 'Repository', status: 'Status', next: 'Next', contact: 'Contact', viewRepo: 'View repository ↗' },
    footer: { invitation: 'Interested in a conversation about junior roles, agentic AI, automation or infrastructure?', nav: 'Explore', copyright: '© 2026 Juan Larrondo' },
    home: {
      eyebrow: 'COMPUTER ENGINEERING · AGENTIC AI', title: 'Juan Larrondo', lead: 'Building agentic systems with visible decisions, checks and limits.',
      intro: 'I am a Computer Engineering student with early experience in automation, DevOps and applied AI. I am interested in useful agentic systems that can be inspected, challenged and improved.', primary: "Let's talk", secondary: 'Explore my projects', whyTitle: 'Why work with me',
      why: [
        { title: 'Learn quickly, then apply it', body: 'I enjoy turning unfamiliar tools and constraints into a concrete next step for a real problem.' },
        { title: 'Care about the process', body: 'I look for repeatable workflows, clear names and checks that make a result easier to trust and revisit.' },
        { title: 'Use AI with judgment', body: 'AI helps me research and prototype faster; review, evidence and visible limits remain part of the work.' },
      ],
      closing: 'If you are building thoughtful systems around AI, automation or infrastructure, I would be glad to talk.'
    },
    about: {
      eyebrow: 'ABOUT', title: 'A technical path shaped by curiosity.', intro: 'I am drawn to work that turns a messy process into something clearer, more useful and easier to improve.',
      sections: [
        { title: 'From technical production to software', body: 'My path began with technical production work at 2EyesVision. It taught me to care about details, handoffs and the quality of a process before I started studying Computer Engineering at Universidad Autónoma de Madrid.' },
        { title: 'Automation, infrastructure and applied AI', body: 'During my time at Thinkia, I explored DevOps and applied AI in a practical setting. That experience reinforced an interest in automation that is understandable to the people who have to use and maintain it.' },
        { title: 'Where I am heading', body: 'I am now orienting my learning toward agentic AI: systems that can help with real work while keeping their decisions, checks and boundaries visible. My degree is ongoing, and my final-degree project is still in planning, with its scope open.' },
        { title: 'Beyond the screen', body: 'I also follow economics and investing. Studying Japanese and travelling to Japan have been ways to keep learning outside computing, with the same interest in how people, systems and contexts fit together.' },
      ], projectCta: 'See my projects', contactCta: 'Get in touch'
    },
    projects: {
      eyebrow: 'PROJECTS', title: 'Small systems, made inspectable.', intro: 'These are early technical projects, presented with their architecture, real verification checks and planned next steps.',
      entries: [
        {
          key: 'jarvis',
          title: 'Jarvis',
          status: 'Personal Assistant Architecture',
          body: 'A 24/7 personal assistant architecture integrating a Go WhatsApp bridge, a background Python worker with local Whisper audio transcription, and MCP tools that organize messages, tasks and calendar into an actionable daily briefing.',
          link: '/projects/jarvis/',
          cta: 'Read the case',
          repoUrl: external.jarvis,
          repoLabel: 'GitHub snapshot ↗',
          tags: ['Go + Python', 'SQLite', 'MCP Tools', 'Whisper']
        },
        {
          key: 'payroll',
          title: 'Payroll Extractor',
          status: 'Document OCR & Agentic Extraction',
          body: 'A document extraction system where users upload payrolls (PDF or image) to extract employee, company and financial amounts. Addresses LLM unreliability through constrained schema prompting, an independent verifier agent, and deterministic Python Decimal arithmetic checks.',
          link: '/projects/payroll-extractor/',
          cta: 'Read the case',
          repoUrl: external.payroll,
          repoLabel: 'GitHub repository ↗',
          tags: ['Python Backend', 'Codex CLI', 'Independent Verifier', 'Deterministic Math']
        },
        {
          key: 'tfg',
          title: 'Final-degree project',
          status: 'Coming soon / In planning',
          body: 'The final-degree project is being planned. Its topic, scope and technical direction are not defined yet.',
          tags: ['Planning Stage', 'Open Scope']
        },
      ]
    },
    approach: {
      eyebrow: 'APPROACH', title: 'A way of working that leaves room for review.', intro: 'My projects are early, but the habits behind them are deliberate: understand the work, make the trade-offs readable and leave a path to check the result.',
      principles: [
        { title: 'Understand the problem first', body: 'A tool matters only if it helps with the actual constraint. I start by clarifying the information, people and failure cases around a task.', note: 'This shaped the focus on a reviewable daily view in Jarvis.' },
        { title: 'Make decisions and limits visible', body: 'A system should say what it does, what it cannot do and what requires a person to look closer.', note: 'Jarvis documents the limits of its public snapshot and disabled outgoing actions.' },
        { title: 'Check results independently where possible', body: 'A second model response can be useful, but a deterministic rule provides a different kind of safeguard when the problem allows it.', note: 'The Payroll Extractor checks the relationship between totals before persistence.' },
        { title: 'Use AI as an accelerator', body: 'I use AI to research, prototype and develop more quickly, while keeping human review, evidence and responsibility for decisions in the loop.', note: 'This is part of the documented workflow behind the Payroll Extractor.' },
      ], closing: 'The goal is not to hide complexity. It is to make a useful system easier to question and improve.'
    },
    contactPage: { eyebrow: 'CONTACT', title: "Let's start with a conversation.", intro: 'I am open to professional conversations about junior roles and internships, agentic AI, automation and infrastructure.', emailTitle: 'Email is the fastest route', emailBody: 'Tell me what you are working on, the role or context, and I will get back to you.', linksTitle: 'Find me elsewhere', closing: 'You can also explore the project repositories before getting in touch.' },
    cases: {
      jarvis: {
        eyebrow: 'CASE STUDY', title: 'Jarvis', status: 'Personal Assistant Architecture / Go + Python + MCP', lead: 'An autonomous personal assistant architecture combining a Go WhatsApp bridge, background audio transcription with local Whisper, and standardized MCP tools into a consolidated daily briefing.', repo: 'View the repository snapshot',
        facts: [{ label: 'Context', value: 'Personal assistant architecture' }, { label: 'Focus', value: 'Multi-runtime event orchestration' }, { label: 'Audio', value: 'Local Whisper transcription' }, { label: 'Protocols', value: 'Model Context Protocol (MCP)' }],
        architecture: {
          title: 'System architecture',
          blocks: [
            { step: '01', title: 'Listeners & Inputs', desc: 'WhatsApp Web (Go bridge via whatsmeow) and local GNOME Evolution calendar cache.', tech: 'Go / WebSocket' },
            { step: '02', title: '24/7 Event Worker', desc: 'Monitors SQLite messages.db, transcribes audio notes via local Whisper, and writes to memory buffer.', tech: 'Python / SQLite' },
            { step: '03', title: 'Agent & Dashboard', desc: 'MCP tools server invoked periodically or on event to compile a reviewable briefing for the local dashboard.', tech: 'MCP / Python / HTML' },
          ]
        },
        terminal: {
          title: 'jarvis-worker.log',
          command: 'python3 scripts/whatsapp_listener.py --briefing',
          output: [
            { text: '[24/7 DAEMON] Listening on SQLite (messages.db) and periodic cron timers...', tone: 'muted' },
            { text: '[EVENT] Audio note received from thread (32s): transcribing via local Whisper...', tone: 'cyan' },
            { text: '[TRANSCRIPT] "Remember to check the infrastructure proposal before 18:00"', tone: 'success' },
            { text: '[BRIEFING] Daily summary compiled for today:', tone: 'cyan' },
            { text: '  ├─ WhatsApp: 2 actionable message threads flagged for review' },
            { text: '  ├─ Calendar: 1 upcoming project checkpoint' },
            { text: '  └─ Buffer: updated memoria/todo.md (reviewable before dispatch)' },
            { text: '[DAEMON] Orchestration cycle completed. Memory buffer synced to SQLite.', tone: 'success' },
          ]
        },
        roadmap: {
          title: 'Upcoming improvements & technical roadmap',
          items: [
            { title: 'Resilient 24/7 supervisor daemon', body: 'Wrap the Go bridge, Python listener, and MCP server in a managed systemd service with automatic crash recovery and health checks.' },
            { title: 'Agentic orchestration with frontier models', body: 'Invoke frontier models dynamically via Codex CLI or Claude exec API with strict tool calling schemas and context pruning.' },
            { title: 'Portable calendar connectors', body: 'Replace the Ubuntu-specific GNOME Evolution cache with direct CalDAV or local OAuth Google Calendar API synchronization for WSL/Linux.' },
            { title: 'Expanded multi-channel listeners', body: 'Add IMAP IDLE event listeners for urgent email threads and local system webhooks.' },
          ]
        },
        sections: [
          { title: 'The problem', paragraphs: ['Personal communications, tasks and calendar events are scattered across disparate tools. Jarvis unifies these streams into a local-first workflow that captures context in real time and synthesizes what matters into a clear daily review.'] },
          { title: 'Flow', flow: ['WhatsApp Web', 'Go bridge', 'SQLite events', 'Whisper worker', 'MCP server', 'daily briefing'], paragraphs: ['A persistent Go bridge captures incoming messages via WebSocket, writes to local SQLite, triggers asynchronous local audio transcription, and coordinates with MCP tools to compile a unified daily view.'] },
          { title: 'Architecture & key decisions', items: [{ title: 'Decoupled Go + Python architecture', body: 'A lightweight Go bridge (whatsmeow) maintains a 24/7 persistent, low-overhead WebSocket connection to WhatsApp, while a Python background worker processes database events and maintains state.' }, { title: 'Local Whisper audio pipeline', body: 'Voice notes are transcribed directly on-device using local Whisper, converting spoken context into searchable text without sending audio to third-party cloud services.' }, { title: 'Standardized tooling with MCP', body: 'Implements the Model Context Protocol (MCP) to decouple tool execution from model providers, allowing standardized querying of calendar, tasks and message history.' }, { title: 'Synthesized daily briefings', body: 'Transforms fragmented messages and calendar checkpoints into an organized summary ready for morning review and decision-making.' }] },
          { title: 'Verification & resilience', tone: 'evidence', paragraphs: ['Tested with local event simulations, audio transcription pipelines, and structured MCP tool calls to verify reliable multi-runtime communication between Go, Python, and SQLite.'] },
        ],
        closing: 'Jarvis demonstrates a modular, local-first assistant pipeline combining real-time communication bridges, audio transcription, and MCP tool orchestration.',
        nextLabel: 'See the Payroll Extractor case'
      },
      payroll: {
        eyebrow: 'CASE STUDY', title: 'Payroll Extractor', status: 'Document OCR & Agentic Extraction / Dual-Agent & Decimal Rules', lead: 'A document extraction system where users upload payrolls (PDF or image) to extract employee name, company, and financial breakdown. It addresses real-world document OCR by engineering robust prompts, managing LLM unreliability, and enforcing dual-agent verification with deterministic arithmetic checks.', repo: 'View the repository',
        facts: [{ label: 'Context', value: 'Document OCR & agentic extraction' }, { label: 'Core Challenge', value: 'Prompt design & LLM failure management' }, { label: 'Verification', value: 'Dual-agent audit & Python Decimal checks' }, { label: 'Storage', value: 'Local SQLite persistence' }],
        architecture: {
          title: 'Processing pipeline',
          blocks: [
            { step: '01', title: 'Upload & Storage', desc: 'Receives PDF or image via local HTTP POST. Stored in nominas_subidas/ without external cloud dependencies.', tech: 'Python / Native HTTP' },
            { step: '02', title: 'Dual-Agent Extraction', desc: 'Extractor agent reads fields constrained by schema.json, followed by independent verifier checking textual evidence.', tech: 'Codex CLI / Schema JSON' },
            { step: '03', title: 'Deterministic Guard', desc: 'Python Decimal checks devengado - deducciones == líquido (±0.01). Persists with status to local SQLite.', tech: 'Python Decimal / SQLite' },
          ]
        },
        terminal: {
          title: 'payroll-verifier.py',
          command: 'python3 -m web.backend.agents.verifier --file sample_payroll.pdf',
          output: [
            { text: '[INPUT] Document received: sample_payroll.pdf (1 page, 300 DPI)', tone: 'muted' },
            { text: '[EXTRACTOR] Candidate values extracted under schema.json constraints:', tone: 'cyan' },
            { text: '  ├─ Total devengado: 2,150.00 €' },
            { text: '  ├─ Total deducciones: 385.50 €' },
            { text: '  └─ Líquido a percibir: 1,764.50 €' },
            { text: '[VERIFIER] Auditing hypothesis against textual document evidence...', tone: 'cyan' },
            { text: '  ├─ Base salary matched at line 14: VERIFIED', tone: 'success' },
            { text: '  └─ IRPF withholding (15.0%) matched at line 22: VERIFIED', tone: 'success' },
            { text: "[MATH_CHECK] Evaluating rule: Decimal('2150.00') - Decimal('385.50') == Decimal('1764.50')" },
            { text: '  └─ Delta: 0.0000 | Tolerance: 0.0100 -> RESULT: PASSED [VERIFIED]', tone: 'success' },
            { text: '[SQLITE] Record persisted to web/backend/data/nominas.sqlite3', tone: 'muted' },
          ]
        },
        roadmap: {
          title: 'Upcoming improvements & technical roadmap',
          items: [
            { title: 'Offline local OCR fallback', body: 'Integrate local Tesseract or PaddleOCR to parse scanned documents without relying on external cloud vision APIs.' },
            { title: 'Granular line-item breakdown', body: 'Extract individual payroll concepts (base pay, extra pay proration, specific allowances, social security contribution bases).' },
            { title: 'Side-by-side human audit viewer', body: 'Split-screen interface displaying original PDF on the left with extracted fields highlighted on the right for 1-click confirmation.' },
            { title: 'Structured accounting export', body: 'Generate validated JSON and CSV exports compatible with ERP systems and standard accounting software.' },
          ]
        },
        sections: [
          { title: 'The problem', paragraphs: ['Payroll documents vary widely in format, table layout, and naming conventions across companies. Generic LLMs frequently misread multi-column numbers, confuse cumulative annual totals with monthly pay, or hallucinate plausible figures. A dependable extraction system requires structured prompt constraints, active failure management, and independent verification against the original document text.'] },
          { title: 'Flow', flow: ['document upload', 'schema extraction', 'self-review', 'independent verifier', 'deterministic Decimal check', 'SQLite persistence'], paragraphs: ['The user uploads a PDF or image; the extractor extracts candidate fields under schema constraints, a second verifier audits evidence against the source text, and a deterministic Decimal rule validates totals before saving.'] },
          { title: 'Engineering challenges & decisions', items: [{ title: 'Constrained schema prompting', body: 'The extraction prompt enforces a strict JSON schema, requiring the model to extract typed fields (employee, company, earnings, deductions, net) and cite supporting text spans from the document.' }, { title: 'Active LLM failure handling', body: 'Anticipates common LLM errors in dense financial tables by requiring evidence spans and preventing hallucinated fallback values when source data is ambiguous.' }, { title: 'Independent dual-agent verification', body: 'A secondary verifier agent audits the extractor’s candidate fields against the raw document text, flagging discrepancies before persistence.' }, { title: 'Deterministic arithmetic guard', body: 'Python Decimal evaluates earnings minus deductions against net pay. If the equation fails to balance, the record is flagged for human review rather than accepted automatically.' }] },
          { title: 'Verification & testing', tone: 'evidence', paragraphs: ['Validated across test payrolls and edge-case document formats, testing endpoint reliability, JSON schema conformance, and deterministic arithmetic reconciliation.'] },
        ],
        closing: 'The extractor demonstrates how prompt engineering, dual-agent verification, and deterministic math rules turn unpredictable LLM outputs into dependable structured data.',
        nextLabel: 'See the Jarvis case'
      },
    }
  },
  es: {
    nav: { home: 'Inicio', about: 'Sobre mí', projects: 'Proyectos', jarvis: 'Jarvis', payroll: 'Extractor de nóminas', approach: 'Forma de trabajar', contact: 'Contacto' },
    labels: { language: 'Idioma', menu: 'Menú', close: 'Cerrar menú', skip: 'Saltar al contenido', email: 'Correo', repository: 'Repositorio', status: 'Estado', next: 'Siguiente', contact: 'Contacto', viewRepo: 'Ver repositorio ↗' },
    footer: { invitation: '¿Te interesa hablar sobre puestos junior, IA agéntica, automatización o infraestructura?', nav: 'Explora', copyright: '© 2026 Juan Larrondo' },
    home: {
      eyebrow: 'INGENIERÍA INFORMÁTICA · IA AGÉNTICA', title: 'Juan Larrondo', lead: 'Construyo sistemas agénticos con decisiones, comprobaciones y límites visibles.',
      intro: 'Soy estudiante de Ingeniería Informática, con experiencia temprana en automatización, DevOps e IA aplicada. Me interesan los sistemas agénticos útiles que se puedan inspeccionar, cuestionar y mejorar.', primary: 'Hablemos', secondary: 'Explora mis proyectos', whyTitle: 'Por qué trabajar conmigo',
      why: [{ title: 'Aprendo rápido y lo aplico', body: 'Me gusta convertir herramientas y restricciones nuevas en un siguiente paso concreto para un problema real.' }, { title: 'Cuido el proceso', body: 'Busco flujos repetibles, nombres claros y comprobaciones que hagan un resultado más fácil de revisar.' }, { title: 'Uso IA con criterio', body: 'La IA me ayuda a investigar y prototipar más rápido; la revisión, la evidencia y los límites visibles siguen siendo parte del trabajo.' }],
      closing: 'Si estás construyendo sistemas con sentido alrededor de IA, automatización o infraestructura, estaré encantado de hablar.'
    },
    about: { eyebrow: 'SOBRE MÍ', title: 'Un recorrido técnico guiado por la curiosidad.', intro: 'Me atrae el trabajo que convierte un proceso confuso en algo más claro, útil y fácil de mejorar.', sections: [{ title: 'De la producción técnica al software', body: 'Mi recorrido comenzó en producción técnica en 2EyesVision. Allí aprendí a valorar el detalle, los traspasos y la calidad de un proceso antes de empezar Ingeniería Informática en la Universidad Autónoma de Madrid.' }, { title: 'Automatización, infraestructura e IA aplicada', body: 'Durante mi etapa en Thinkia exploré DevOps e IA aplicada en un entorno práctico. Esa experiencia reforzó mi interés por automatizaciones comprensibles para quienes tienen que usarlas y mantenerlas.' }, { title: 'Hacia dónde voy', body: 'Ahora estoy orientando mi aprendizaje hacia la IA agéntica: sistemas que ayuden en trabajo real y mantengan visibles sus decisiones, comprobaciones y límites. El grado sigue en curso y el TFG está en planificación, con tema y alcance abiertos.' }, { title: 'Más allá de la informática', body: 'También sigo la economía y la inversión. Estudiar japonés y viajar a Japón han sido formas de seguir aprendiendo fuera de la informática, con el mismo interés por cómo encajan personas, sistemas y contextos.' }], projectCta: 'Ver mis proyectos', contactCta: 'Contactar' },
    projects: {
      eyebrow: 'PROYECTOS', title: 'Sistemas pequeños, pensados para poder revisarse.', intro: 'Proyectos técnicos tempranos, presentados con su arquitectura, comprobaciones reales y siguientes mejoras planificadas.',
      entries: [
        {
          key: 'jarvis',
          title: 'Jarvis',
          status: 'Arquitectura de asistente personal',
          body: 'Arquitectura de asistente personal 24/7 que integra un bridge en Go para WhatsApp, un worker Python en segundo plano con transcripción local Whisper y herramientas MCP para organizar mensajes, tareas y calendario en un briefing diario estructurado.',
          link: '/es/proyectos/jarvis/',
          cta: 'Leer el caso',
          repoUrl: external.jarvis,
          repoLabel: 'Snapshot GitHub ↗',
          tags: ['Go + Python', 'SQLite', 'Herramientas MCP', 'Whisper']
        },
        {
          key: 'payroll',
          title: 'Extractor de nóminas',
          status: 'Extracción documental & IA agéntica',
          body: 'Pipeline de extracción documental donde el usuario sube una nómina (PDF o imagen) para extraer trabajador, empresa e importes. Gestiona los fallos de los LLMs mediante prompts con schema estricto, un agente verificador independiente y reglas aritméticas deterministas en Python Decimal.',
          link: '/es/proyectos/extractor-nominas/',
          cta: 'Leer el caso',
          repoUrl: external.payroll,
          repoLabel: 'Repositorio GitHub ↗',
          tags: ['Backend Python', 'Codex CLI', 'Verificador independiente', 'Matemática determinista']
        },
        {
          key: 'tfg',
          title: 'Trabajo de fin de grado',
          status: 'Próximamente / en planificación',
          body: 'El TFG está en fase de planificación. Su tema, alcance y dirección técnica todavía no están definidos.',
          tags: ['Fase de planificación', 'Alcance abierto']
        }
      ]
    },
    approach: { eyebrow: 'FORMA DE TRABAJAR', title: 'Una forma de trabajar que deja espacio para revisar.', intro: 'Mis proyectos son tempranos, pero los hábitos detrás de ellos son deliberados: entender el trabajo, hacer legibles las decisiones y dejar una forma de comprobar el resultado.', principles: [{ title: 'Entender el problema antes', body: 'Una herramienta solo importa si ayuda con la restricción real. Empiezo aclarando la información, las personas y los posibles fallos alrededor de una tarea.', note: 'Esto dio forma a la vista diaria revisable de Jarvis.' }, { title: 'Hacer visibles decisiones y límites', body: 'Un sistema debería explicar qué hace, qué no puede hacer y qué requiere que una persona lo mire con más atención.', note: 'Jarvis documenta los límites de su snapshot público y las acciones salientes desactivadas.' }, { title: 'Comprobar de forma independiente cuando sea posible', body: 'Una segunda respuesta de un modelo puede ayudar, pero una regla determinista aporta otra salvaguarda cuando el problema lo permite.', note: 'El Extractor de nóminas comprueba la relación entre totales antes de persistir.' }, { title: 'Usar IA como acelerador', body: 'Uso IA para investigar, prototipar y desarrollar más rápido, manteniendo revisión humana, evidencia y responsabilidad sobre las decisiones.', note: 'Es parte del flujo documentado detrás del Extractor de nóminas.' }], closing: 'El objetivo no es ocultar la complejidad. Es hacer que un sistema útil sea más fácil de cuestionar y mejorar.' },
    contactPage: { eyebrow: 'CONTACTO', title: 'Empecemos con una conversación.', intro: 'Estoy abierto a conversaciones profesionales sobre puestos junior y prácticas, IA agéntica, automatización e infraestructura.', emailTitle: 'El correo es la vía más directa', emailBody: 'Cuéntame en qué estás trabajando, el puesto o el contexto, y te responderé.', linksTitle: 'También puedes encontrarme aquí', closing: 'También puedes explorar los repositorios de los proyectos antes de escribir.' },
    cases: {
      jarvis: {
        eyebrow: 'CASO', title: 'Jarvis', status: 'Arquitectura de asistente / Go + Python + MCP', lead: 'Arquitectura de asistente personal autónomo que combina un bridge en Go para WhatsApp, transcripción de audio en segundo plano con Whisper local y herramientas MCP para consolidar un briefing diario.', repo: 'Ver el snapshot del repositorio',
        facts: [{ label: 'Contexto', value: 'Arquitectura de asistente personal' }, { label: 'Foco', value: 'Orquestación multi-runtime de eventos' }, { label: 'Audio', value: 'Transcripción local con Whisper' }, { label: 'Protocolos', value: 'Model Context Protocol (MCP)' }],
        architecture: {
          title: 'Arquitectura del sistema',
          blocks: [
            { step: '01', title: 'Listeners e integración', desc: 'WhatsApp Web (bridge en Go vía whatsmeow) y caché local de calendario GNOME Evolution.', tech: 'Go / WebSocket' },
            { step: '02', title: 'Worker 24/7', desc: 'Monitorea messages.db en SQLite, transcribe notas de audio con Whisper local y actualiza el buffer de memoria.', tech: 'Python / SQLite' },
            { step: '03', title: 'Agente y presentación', desc: 'Servidor de herramientas MCP invocado periódicamente o por evento para generar el briefing diario en el dashboard local.', tech: 'MCP / Python / HTML' },
          ]
        },
        terminal: {
          title: 'jarvis-worker.log',
          command: 'python3 scripts/whatsapp_listener.py --briefing',
          output: [
            { text: '[24/7 DAEMON] Escuchando en SQLite (messages.db) y timers periódicos cron...', tone: 'muted' },
            { text: '[EVENT] Nota de audio recibida en hilo (32s): transcribiendo con Whisper local...', tone: 'cyan' },
            { text: '[TRANSCRIPT] "Recuerda revisar la propuesta de infraestructura antes de las 18:00"', tone: 'success' },
            { text: '[BRIEFING] Resumen diario compilado para hoy:', tone: 'cyan' },
            { text: '  ├─ WhatsApp: 2 hilos de mensajes prioritarios marcados para revisión' },
            { text: '  ├─ Calendario: 1 punto de control de proyecto próximo' },
            { text: '  └─ Buffer: memoria/todo.md actualizado (revisable antes de enviar acciones)' },
            { text: '[DAEMON] Ciclo de orquestación completado. Buffer de memoria sincronizado en SQLite.', tone: 'success' },
          ]
        },
        roadmap: {
          title: 'Próximas mejoras y roadmap técnico',
          items: [
            { title: 'Demonio supervisor 24/7 resiliente', body: 'Empaquetar el puente Go, el listener Python y el servidor MCP en un servicio systemd con autorrecuperación y comprobación de estado.' },
            { title: 'Orquestación agéntica con modelos de frontera', body: 'Llamadas dinámicas a modelos de frontera vía Codex CLI o Claude exec API con schemas estrictos de herramientas y control de contexto.' },
            { title: 'Conectores portables de calendario', body: 'Sustituir la dependencia de la caché de GNOME por sincronización directa CalDAV o Google Calendar API con OAuth local portable.' },
            { title: 'Nuevos listeners de eventos', body: 'Añadir listeners IMAP IDLE para correos prioritarios y webhooks locales del sistema.' },
          ]
        },
        sections: [
          { title: 'El problema', paragraphs: ['Las comunicaciones cotidianas, tareas y eventos de calendario suelen estar dispersos en distintas aplicaciones. Jarvis unifica estos flujos en una arquitectura local continua que captura contexto en tiempo real y sintetiza lo relevante en una vista diaria clara.'] },
          { title: 'Flujo', flow: ['WhatsApp Web', 'bridge en Go', 'eventos en SQLite', 'worker Whisper', 'servidor MCP', 'briefing diario'], paragraphs: ['Un bridge persistente en Go captura mensajes entrantes vía WebSocket, los persiste en SQLite local, dispara la transcripción asíncrona de audio local y coordina con herramientas MCP para elaborar una vista diaria unificada.'] },
          { title: 'Decisiones y arquitectura clave', items: [{ title: 'Arquitectura desacoplada Go + Python', body: 'Un bridge ligero en Go (whatsmeow) mantiene una conexión persistente 24/7 y de bajo consumo con WhatsApp Web, mientras un worker Python gestiona los eventos de base de datos y mantiene el estado.' }, { title: 'Pipeline de audio local con Whisper', body: 'Las notas de voz se transcriben directamente en el dispositivo usando Whisper local, transformando contexto hablado en texto indexable sin enviar audio a servicios en la nube.' }, { title: 'Herramientas estandarizadas con MCP', body: 'Implementa el Model Context Protocol (MCP) para desacoplar la ejecución de herramientas del proveedor de modelos, estandarizando consultas de calendario, tareas e historial de mensajes.' }, { title: 'Briefings diarios sintetizados', body: 'Transforma mensajes fragmentados y eventos en un resumen estructurado y preparado para su revisión matinal y toma de decisiones.' }] },
          { title: 'Comprobaciones y resiliencia', tone: 'evidence', paragraphs: ['Validado mediante simulación de eventos, pipelines de audio y llamadas estructuradas a herramientas MCP para asegurar la comunicación fluida entre Go, Python y SQLite.'] },
        ],
        closing: 'Jarvis demuestra una arquitectura de asistente modular y local, combinando bridges de comunicación en tiempo real, transcripción de voz y orquestación de herramientas con MCP.',
        nextLabel: 'Ver el caso del Extractor de nóminas'
      },
      payroll: {
        eyebrow: 'CASO', title: 'Extractor de nóminas', status: 'Extracción documental & IA agéntica / Doble agente y reglas Decimal', lead: 'Un sistema de extracción documental donde el usuario sube una nómina (PDF o imagen) para extraer nombre, empresa e importes económicos. Resuelve la extracción OCR asistida por LLM refinando el prompt, gestionando los fallos del modelo y aplicando verificación independiente de doble agente con reglas matemáticas deterministas.', repo: 'Ver el repositorio',
        facts: [{ label: 'Contexto', value: 'Extracción OCR y agentes de IA' }, { label: 'Reto clave', value: 'Ingeniería de prompts y gestión de fallos del LLM' }, { label: 'Verificación', value: 'Auditoría de doble agente y reglas Decimal en Python' }, { label: 'Persistencia', value: 'Almacenamiento local en SQLite' }],
        architecture: {
          title: 'Pipeline de procesamiento',
          blocks: [
            { step: '01', title: 'Subida y almacenamiento', desc: 'Recepción de PDF o imagen vía POST local. Almacenado en nominas_subidas/ sin dependencias externas en la nube.', tech: 'Python / HTTP Nativo' },
            { step: '02', title: 'Extracción de doble agente', desc: 'Agente extractor lee campos restringido por schema.json, seguido por verificador independiente que audita contra evidencia.', tech: 'Codex CLI / Schema JSON' },
            { step: '03', title: 'Salvaguarda determinista', desc: 'Python Decimal valida devengado - deducciones == líquido (±0.01). Persiste con estado en SQLite local.', tech: 'Python Decimal / SQLite' },
          ]
        },
        terminal: {
          title: 'payroll-verifier.py',
          command: 'python3 -m web.backend.agents.verifier --file sample_payroll.pdf',
          output: [
            { text: '[INPUT] Documento recibido: sample_payroll.pdf (1 página, 300 DPI)', tone: 'muted' },
            { text: '[EXTRACTOR] Valores candidatos extraídos bajo restricciones de schema.json:', tone: 'cyan' },
            { text: '  ├─ Total devengado: 2.150,00 €' },
            { text: '  ├─ Total deducciones: 385,50 €' },
            { text: '  └─ Líquido a percibir: 1.764,50 €' },
            { text: '[VERIFIER] Auditando hipótesis contra evidencia textual del documento...', tone: 'cyan' },
            { text: '  ├─ Salario base coincidente en línea 14: VERIFICADO', tone: 'success' },
            { text: '  └─ Retención IRPF (15,0%) coincidente en línea 22: VERIFICADO', tone: 'success' },
            { text: "[MATH_CHECK] Evaluando regla: Decimal('2150.00') - Decimal('385.50') == Decimal('1764.50')" },
            { text: '  └─ Delta: 0,0000 | Tolerancia: 0,0100 -> RESULTADO: SUPERADO [VERIFIED]', tone: 'success' },
            { text: '[SQLITE] Registro persistido en web/backend/data/nominas.sqlite3', tone: 'muted' },
          ]
        },
        roadmap: {
          title: 'Próximas mejoras y roadmap técnico',
          items: [
            { title: 'Motor OCR local offline', body: 'Integrar Tesseract o PaddleOCR local para procesar nóminas escaneadas sin depender de APIs de visión en la nube.' },
            { title: 'Desglose granular de conceptos', body: 'Extraer conceptos individuales (salario base, prorrateo de pagas, complementos, base de cotización y tramos IRPF).' },
            { title: 'Visor interactivo Side-by-Side', body: 'Interfaz a pantalla partida con PDF original a la izquierda y campos extraídos resaltados a la derecha para validación humana rápida.' },
            { title: 'Exportación contable estructurada', body: 'Generar exportaciones en JSON y CSV normalizadas para su importación en programas contables y ERPs.' },
          ]
        },
        sections: [
          { title: 'El problema', paragraphs: ['Las nóminas presentan una gran diversidad de formatos, tablas y nomenclaturas según la empresa. Los LLMs convencionales tienden a confundir acumulados anuales con importes mensuales o a alucinar cifras al interpretar tablas densas. Una extracción fiable exige más que un prompt básico: necesita restricciones estructuradas por schema, anticipación de errores del modelo y verificación independiente contra la evidencia textual original.'] },
          { title: 'Flujo', flow: ['subida de documento', 'extracción por schema', 'autorrevisión', 'verificador independiente', 'guardián determinista Decimal', 'persistencia en SQLite'], paragraphs: ['El usuario sube un PDF o imagen; el extractor obtiene los campos bajo restricciones de schema, un segundo verificador audita la evidencia textual contra la fuente y una regla determinista con Decimal valida la igualdad de importes antes de guardar.'] },
          { title: 'Retos de ingeniería y decisiones', items: [{ title: 'Prompt estructurado con restricciones de schema', body: 'El prompt de extracción impone un schema.json estricto que obliga al modelo a extraer campos tipados (trabajador, empresa, devengos, deducciones, líquido) y a vincularlos a evidencia textual explícita.' }, { title: 'Gestión activa de fallos del LLM', body: 'Anticipa las alucinaciones habituales en tablas financieras, impidiendo que el modelo invente importes si no existe evidencia directa en el documento.' }, { title: 'Verificación independiente de doble agente', body: 'Un segundo agente auditor evalúa la hipótesis extraída comparándola contra el texto bruto del PDF/imagen, detectando discrepancias antes de persistir el registro.' }, { title: 'Salvaguarda matemática determinista', body: 'Una regla en Python con Decimal comprueba que Total Devengado - Total Deducciones == Líquido a percibir. Si los totales no concilian con exactitud, el registro se marca para revisión humana en lugar de validarse a ciegas.' }] },
          { title: 'Comprobaciones y pruebas', tone: 'evidence', paragraphs: ['Validado con nóminas sintéticas y documentos con formatos límite, comprobando la robustez de los endpoints, la conformidad con el JSON schema y la conciliación aritmética determinista de totales.'] },
        ],
        closing: 'El extractor demuestra cómo la ingeniería de prompts, la verificación de doble agente y las reglas matemáticas deterministas transforman la incertidumbre de los LLMs en datos estructurados y fiables.',
        nextLabel: 'Ver el caso de Jarvis'
      },
    }
  }
}
