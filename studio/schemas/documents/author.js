export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Url',
      description: 'no tocar esto',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Imagen'
    },
    {
      name: 'bio',
      type: 'bioPortableText',
      title: 'Biografia'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
