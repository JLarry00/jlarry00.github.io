import { readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const profile = JSON.parse(readFileSync(path.join(root, 'src/data/profile.json'), 'utf8'))
const experienceStops = JSON.parse(readFileSync(path.join(root, 'src/data/experience-stops.json'), 'utf8'))
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

function localizedPath(documentPath, locale) {
  return documentPath === 'Trajectory.md' && locale === 'es' ? 'Trayectoria.md' : documentPath
}

for (const locale of locales) {
  for (const document of profile.documents) {
    const entry = document[locale]
    const sourcePath = localizedPath(document.path, locale)
    const file = path.join(output, locale, sourcePath)
    mkdirSync(path.dirname(file), { recursive: true })
    const lines = [
      `# ${entry.title}`,
      '',
      `> ${entry.agentSummary}`,
      '',
      `${locale === 'es' ? 'Estado' : 'Status'}: ${locale === 'es' ? 'portfolio público en desarrollo' : 'public portfolio in development'}.`,
      `${locale === 'es' ? 'Revisión de fuente' : 'Source review'}: ${document.reviewed ?? profile.reviewed}.`,
      '',
      entry.agentLead ?? entry.lead,
      '',
    ]
    if (document.path === 'Trajectory.md') {
      for (const stop of experienceStops) {
        const section = stop.sectionIndex == null ? null : entry.sections[stop.sectionIndex]
        const content = stop[locale]
        const heading = content ? [content.title, content.role, content.place, content.period].filter(Boolean).join(' · ') : section.title
        lines.push(`## ${[heading, stop.duration?.[locale]].filter(Boolean).join(' · ')}`, '', content?.body ?? section?.body ?? '', '')
      }
    } else {
      for (const section of entry.agentSections ?? entry.sections) lines.push(`## ${section.title}`, '', section.body, '')
    }
    if (entry.links.length) {
      lines.push(`## ${locale === 'es' ? 'Enlaces' : 'Links'}`, '')
      for (const link of entry.links) {
        lines.push(link.action === 'copy' ? `- ${link.label}: ${link.value}` : `- [${link.label}](${link.url})`)
      }
      lines.push('')
    }
    if (document.path === 'README.md') {
      lines.push(`## ${locale === 'es' ? 'Archivos' : 'Files'}`, '')
      for (const other of profile.documents) {
        if (other.path === 'README.md') continue
        const targetPath = localizedPath(other.path, locale)
        lines.push(`- [${targetPath}](${relativeLink(sourcePath, targetPath)})`)
      }
      lines.push('')
    }
    lines.push(`## ${locale === 'es' ? 'Archivos relacionados' : 'Related files'}`, '')
    for (const target of relationsByPath.get(document.path)) {
      const targetPath = localizedPath(target, locale)
      lines.push(`- [${targetPath}](${relativeLink(sourcePath, targetPath)})`)
    }
    lines.push('')
    lines.push(`[${locale === 'es' ? 'Índice de agentes' : 'Agent index'}](${relativeLink(sourcePath, '../index.md')})`, '')
    writeFileSync(file, lines.join('\n'))
  }

  const movedPath = localizedPath('Trajectory.md', locale)
  writeFileSync(path.join(output, locale, 'Experience.md'), [
    `# ${locale === 'es' ? 'Archivo trasladado' : 'File moved'}`,
    '',
    `[${locale === 'es' ? 'Abrir' : 'Open'} ${movedPath}](./${movedPath})`,
    '',
  ].join('\n'))

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
  `Latest source review: ${[profile.reviewed, ...profile.documents.map((document) => document.reviewed).filter(Boolean)].sort().at(-1)}. The website is in development.`,
  '',
  '## English',
  '',
  ...profile.documents.map((document) => `- [${localizedPath(document.path, 'en')}](en/${localizedPath(document.path, 'en')})`),
  '',
  '## Español',
  '',
  ...profile.documents.map((document) => `- [${localizedPath(document.path, 'es')}](es/${localizedPath(document.path, 'es')})`),
  '',
]
writeFileSync(path.join(output, 'index.md'), index.join('\n'))
