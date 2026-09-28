import { defineConfig } from 'astro/config'
import { release } from 'node:os'
import { satteri } from '@astrojs/markdown-satteri'
import { renderedMarkdownLinks } from './scripts/rendered-markdown-links.mjs'

// Windows edits do not reliably emit file events to a Vite server running in WSL.
const pollWindowsFiles = process.platform === 'linux'
  && /microsoft/i.test(release())
  && /^\/mnt\/[a-z]\//i.test(new URL('.', import.meta.url).pathname)

export default defineConfig({
  site: 'https://jlarry00.github.io',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  vite: {
    server: {
      watch: pollWindowsFiles
        ? { usePolling: true, interval: 750, binaryInterval: 1500, ignored: ['**/planning/**', '**/dist/**'] }
        : undefined,
    },
  },
  markdown: { processor: satteri({ mdastPlugins: [renderedMarkdownLinks] }) },
})
