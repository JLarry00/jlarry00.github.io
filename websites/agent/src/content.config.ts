import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

const agentMarkdown = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './public/for-agents',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
})

export const collections = { agentMarkdown }
