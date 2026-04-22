import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'studyMaterial',
  title: 'Study Material',
  type: 'document',
  initialValue: {
    __i18n_lang: 'en',
  },
  preview: {
    select: {
      title: 'title',
      type: 'materialType',
    },
    prepare({title, type}: any) {
      return {
        title: title || 'Untitled',
        subtitle: type,
      }
    },
  },

  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'materialType',
      title: 'Type',
      type: 'string',
      description: 'E.g. Study Guide, Discussion, Workshop, Further Reading',
      options: {
        list: [
          {title: 'Study Guide', value: 'studyGuide'},
          {title: 'Discussion', value: 'discussion'},
          {title: 'Workshop', value: 'workshop'},
          {title: 'Further Reading', value: 'furtherReading'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'file',
      title: 'File (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      description:
        'Use this instead of a file if the material is hosted externally e.g. Google Drive',
    }),
    defineField({
      name: 'audience',
      title: 'Target Audience',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {
        list: [
          {title: 'Secondary School', value: 'secondarySchool'},
          {title: 'Adult Education', value: 'adultEducation'},
          {title: 'Study Circles', value: 'studyCircles'},
          {title: 'Youth Workers', value: 'youthWorkers'},
          {title: 'All', value: 'all'},
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Controls the display order on the website',
    }),
  ],
})
