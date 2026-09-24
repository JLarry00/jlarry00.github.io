import path from 'node:path'
import { fileURLToPath } from 'node:url'

const markdownRoot = fileURLToPath(new URL('../src/content/agent-docs/', import.meta.url))

// Source Markdown keeps relative links; published HTML points to published HTML.
export const renderedMarkdownLinks = {
  name: 'rendered-markdown-links',
  link(node, ctx) {
    if (!ctx.fileURL || typeof node.url !== 'string') return
    const source = fileURLToPath(ctx.fileURL)
    const relativeSource = path.relative(markdownRoot, source)
    if (!relativeSource || relativeSource === '..' || relativeSource.startsWith(`..${path.sep}`) || path.isAbsolute(relativeSource)) return

    const [target, fragment] = node.url.split('#', 2)
    if (!target.endsWith('.md') || path.isAbsolute(target) || URL.canParse(target)) return
    const absolute = path.resolve(path.dirname(source), target)
    const relative = path.relative(markdownRoot, absolute).replaceAll(path.sep, '/')
    if (!relative || relative === '..' || relative.startsWith('../')) return

    const view = relative === 'index.md'
      ? '/for-agents/'
      : `/for-agents/read/${relative.slice(0, -3)}/`
    ctx.replaceNode(node, { ...node, url: fragment ? `${view}#${fragment}` : view })
  },
}
