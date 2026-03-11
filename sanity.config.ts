import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { schemaTypes } from './studio/schemaTypes'

export default defineConfig({
  name: 'clowning-from-the-heart',
  title: 'Clowning From The Heart',
  projectId: 'zvhqn0sn',
  dataset: 'production',
  plugins: [structureTool(), visionTool(), media()],
  schema: { types: schemaTypes },
})
