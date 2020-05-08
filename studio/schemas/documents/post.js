import {format} from 'date-fns'

export default {
  name: 'post',
  type: 'document',
  title: 'Publicaciones',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titulo',
      description: 'Describe algo corto, para presentar en el inicio.'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Url',
      description: 'Esto genera la url de la publicacion www.asda.com/urltodojunto',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Fecha de publicacion',
      description: 'Esta es la fecha en que vas a hacer tu publicación'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Imagen'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Extracto',
      description:
        'Es un resumen, algo antes de la descripción.'
    },
    {
      name: 'authors',
      title: 'Agente inmobiliario',
      type: 'array',
      of: [
        {
          type: 'authorReference'
        }
      ]
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categoria',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ]
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Descripcion del inmueble'
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
