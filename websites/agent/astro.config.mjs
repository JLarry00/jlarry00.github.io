import { defineConfig } from 'astro/config'
import { satteri } from '@astrojs/markdown-satteri'
import { renderedMarkdownLinks } from './scripts/rendered-markdown-links.mjs'

export default defineConfig({
  site: 'https://jlarry00.github.io',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  markdown: { processor: satteri({ mdastPlugins: [renderedMarkdownLinks] }) },
})
