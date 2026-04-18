export default {
  name: 'screening',
  title: 'Screening',
  type: 'document',
  initialValue: {
    __i18n_lang: 'en',
  },
  orderings: [
    {
      title: 'Date (ascending)',
      name: 'dateAsc',
      by: [{field: 'start', direction: 'asc'}],
    },
  ],

  preview: {
    select: {
      date: 'start',
      title: 'title',
      city: 'city',
    },
    prepare({date, title, city}: any) {
      return {
        title: title || 'Untitled screening',
        subtitle: `${city || ''} — ${new Date(date).toLocaleString()}`,
      }
    },
  },

  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional label like "Premiere", "Opening night", etc.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'start',
      title: 'Start',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: 'end',
      title: 'End',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'venueName',
      title: 'Venue',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      description: 'E.g. Stockholm, Copenhagen, Online',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
    {
      name: 'isOnline',
      title: 'Online screening',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },

    {
      name: 'urlLabel',
      title: 'URL Label',
      type: 'string',
      description: 'Optional (e.g. Buy tickets)',
    },
    {
      name: 'eventName',
      title: 'Festival / Event',
      type: 'string',
      description: 'E.g. Berlinale, Local screening series',
    },
    {
      name: 'note',
      title: 'Note',
      type: 'text',
      description: 'E.g. Director Q&A after screening',
    },
  ],
}
