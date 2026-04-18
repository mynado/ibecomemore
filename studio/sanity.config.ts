import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {documentInternationalization} from '@sanity/document-internationalization'

const supportedLanguages = [
  {id: 'en', title: 'English'},
  {id: 'sv', title: 'Swedish'},
]

export default defineConfig({
  name: 'default',
  title: 'ibecomemore',

  projectId: '46nn0i5r',
  dataset: 'production',

  plugins: [
    structureTool(),
    documentInternationalization({
      supportedLanguages: supportedLanguages,
      schemaTypes: ['screening'],
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
