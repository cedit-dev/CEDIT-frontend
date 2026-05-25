import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'news',
  title: 'Noticias',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título de la Noticia',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: 'date',
      title: 'Fecha',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumen Corto',
      description: 'Aparecerá en la tarjeta principal (máx 150 caracteres)',
      type: 'text',
      validation: (Rule) => Rule.required().max(150),
    }),
    defineField({
      name: 'content',
      title: 'Contenido Completo',
      description: 'El contenido detallado de la noticia',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'image',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true, // Permite recortar la imagen en el panel
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
