import { readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const profile = JSON.parse(readFileSync(path.join(root, 'src/data/profile.json'), 'utf8'))
const output = path.join(root, 'public/for-agents')
const locales = ['es', 'en']

function relativeLink(from, to) {
  const route = path.posix.relative(path.posix.dirname(from), to)
  return route.startsWith('.') ? route : `./${route}`
}

for (const locale of locales) {
  for (const document of profile.documents) {
    const entry = document[locale]
    const file = path.join(output, locale, document.path)
    mkdirSync(path.dirname(file), { recursive: true })
    const lines = [
      `# ${entry.title}`,
      '',
      `> ${entry.agentSummary}`,
      '',
      `${locale === 'es' ? 'Estado' : 'Status'}: ${locale === 'es' ? 'portfolio público en desarrollo' : 'public portfolio in development'}.`,
      `${locale === 'es' ? 'Revisión de fuente' : 'Source review'}: ${profile.reviewed}.`,
      '',
      entry.lead,
      '',
    ]
    for (const section of entry.sections) lines.push(`## ${section.title}`, '', section.body, '')
    if (entry.links.length) {
      lines.push(`## ${locale === 'es' ? 'Enlaces' : 'Links'}`, '')
      for (const link of entry.links) lines.push(`- [${link.label}](${link.url})`)
      lines.push('')
    }
    if (document.path === 'README.md') {
      lines.push(`## ${locale === 'es' ? 'Archivos' : 'Files'}`, '')
      for (const other of profile.documents) {
        if (other.path === 'README.md') continue
        lines.push(`- [${other.path}](${relativeLink(document.path, other.path)})`)
      }
      lines.push('')
    }
    lines.push(`[${locale === 'es' ? 'Índice de agentes' : 'Agent index'}](${relativeLink(document.path, '../index.md')})`, '')
    writeFileSync(file, lines.join('\n'))
  }
}

const index = [
  '# Portfolio Agent — direct Markdown index',
  '',
  'This is the direct text entry point. The visual site is for human browsing; these documents are short, factual and available without JavaScript.',
  '',
  `Source review: ${profile.reviewed}. The website is in development. The final folder tree is still under discussion.`,
  '',
  'The `batman` branch in the visual interface is explicitly fictional. Only `main` describes the real profile.',
  '',
  '## Español',
  '',
  ...profile.documents.map((document) => `- [${document.path}](es/${document.path})`),
  '',
  '## English',
  '',
  ...profile.documents.map((document) => `- [${document.path}](en/${document.path})`),
  '',
]
writeFileSync(path.join(output, 'index.md'), index.join('\n'))
