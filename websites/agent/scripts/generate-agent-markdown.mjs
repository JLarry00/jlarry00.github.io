import { readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const profile = JSON.parse(readFileSync(path.join(root, 'src/data/profile.json'), 'utf8'))
const graph = JSON.parse(readFileSync(path.join(root, 'src/data/document-graph.json'), 'utf8'))
const output = path.join(root, 'src/content/agent-docs')
const locales = ['es', 'en']
const documentsByPath = new Map(profile.documents.map((document) => [document.path, document]))
const relationsByPath = new Map(graph.nodes.map((node) => [node.path, node.related]))

if (relationsByPath.size !== profile.documents.length || profile.documents.some((document) => !relationsByPath.has(document.path))) {
  throw new Error('El mapa de documentos debe incluir exactamente los archivos del perfil')
}
for (const [source, related] of relationsByPath) {
  if (!documentsByPath.has(source) || related.some((target) => !documentsByPath.has(target) || target === source)) {
    throw new Error(`Relación inválida en ${source}`)
  }
}

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
      entry.agentLead ?? entry.lead,
      '',
    ]
    for (const section of entry.agentSections ?? entry.sections) lines.push(`## ${section.title}`, '', section.body, '')
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
    lines.push(`## ${locale === 'es' ? 'Archivos relacionados' : 'Related files'}`, '')
    for (const target of relationsByPath.get(document.path)) {
      lines.push(`- [${target}](${relativeLink(document.path, target)})`)
    }
    lines.push('')
    lines.push(`[${locale === 'es' ? 'Índice de agentes' : 'Agent index'}](${relativeLink(document.path, '../index.md')})`, '')
    writeFileSync(file, lines.join('\n'))
  }

  const oldTerraform = path.join(output, locale, 'skills/terraform.md')
  writeFileSync(oldTerraform, [
    `# ${locale === 'es' ? 'Terraform: archivo trasladado' : 'Terraform: file moved'}`,
    '',
    locale === 'es' ? 'Este enlace antiguo sigue disponible. Terraform está ahora dentro del área de infraestructura.' : 'This old URL remains available. Terraform now belongs to the infrastructure area.',
    '',
    `[${locale === 'es' ? 'Abrir infraestructura' : 'Open infrastructure'}](./infrastructure.md)`,
    '',
  ].join('\n'))
}

const index = [
  '# Archivos del portfolio Agent',
  '',
  'These documents are written as Markdown in the project and published as linked, formatted HTML pages. People and automated readers use the same pages without JavaScript.',
  '',
  `Source review: ${profile.reviewed}. The website is in development.`,
  '',
  '## English',
  '',
  ...profile.documents.map((document) => `- [${document.path}](en/${document.path})`),
  '',
  '## Español',
  '',
  ...profile.documents.map((document) => `- [${document.path}](es/${document.path})`),
  '',
]
writeFileSync(path.join(output, 'index.md'), index.join('\n'))
