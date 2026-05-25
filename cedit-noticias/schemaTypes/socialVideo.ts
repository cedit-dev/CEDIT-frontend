import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'socialVideo',
  title: 'Videos (Reels)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Video',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'platform',
      title: 'Plataforma',
      type: 'string',
      options: {
        list: [
          { title: 'Instagram', value: 'instagram' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'YouTube Shorts', value: 'youtube' },
          { title: 'TikTok', value: 'tiktok' }
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Enlace del Video (URL)',
      description: 'Copia y pega el enlace completo del video (Ej. https://www.instagram.com/reel/...)',
      type: 'url',
      validation: (Rule) => Rule.required().custom((url, context) => {
        if (!url) return true;
        const platform = context.document?.platform as string;
        if (!platform) return true;
        
        const platformDomains: Record<string, string[]> = {
          instagram: ['instagram.com'],
          facebook: ['facebook.com', 'fb.watch'],
          youtube: ['youtube.com', 'youtu.be'],
          tiktok: ['tiktok.com']
        };
        
        const domains = platformDomains[platform];
        if (!domains) return true;
        
        const isValid = domains.some(domain => url.toLowerCase().includes(domain));
        if (!isValid) {
          return `El enlace no corresponde a la plataforma seleccionada (${platform.toUpperCase()}). Debe contener ${domains.join(' o ')}`;
        }
        
        return true;
      }),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de Publicación',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'platform',
    },
  },
})
