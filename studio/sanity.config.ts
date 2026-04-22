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
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // S.listItem()
            //   .title('Site Settings')
            //   .id('siteSettings')
            //   .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem()
              .title('Home Page')
              .id('homePage')
              .child(S.document().schemaType('homePage').documentId('homePage')),

            S.divider(),

            S.documentTypeListItem('screening').title('Screening'),
          ]),
    }),
    documentInternationalization({
      supportedLanguages: supportedLanguages,
      schemaTypes: ['screening', 'homePage'],
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
