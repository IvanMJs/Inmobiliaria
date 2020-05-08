export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titulo'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Descripción',
      description: 'Describe algo de vos como agente inmobiliario.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'No usar.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      title: 'Autor',
      to: [{type: 'author'}]
    }
  ]
}
