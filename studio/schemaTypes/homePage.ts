import {defineField} from 'sanity'

// schemaTypes/homePage.ts
export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  initialValue: {
    __i18n_lang: 'en',
  },
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [{name: 'description', title: 'Description', type: 'text'}],
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'object',
      fields: [
        {name: 'synopsis', title: 'Synopsis', type: 'text'},
        {name: 'fullSynopsis', title: 'Full Synopsis', type: 'text'},
      ],
    }),
    defineField({
      name: 'mahoyo',
      title: 'Mahoyo',
      type: 'object',
      fields: [{name: 'description', title: 'Description', type: 'text'}],
    }),
    // etc.
  ],
}
