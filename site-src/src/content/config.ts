import { defineCollection, z } from 'astro:content';

const articulos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    url_slug: z.string(),
    categoria: z.enum([
      'proyecto',
      'fundamentos',
      'dividendos',
      'automatizacion',
      'resultados',
      'mercados',
      'recursos',
    ]),
    orden: z.number().nullable().optional(),
    fecha: z.coerce.date(),
    meta_descripcion: z.string(),
    tags: z.array(z.string()).default([]),
    enlaza_a_fundamentos: z.array(z.string()).default([]),
    pilares: z
      .object({
        youtube: z.string().optional().default(''),
        instagram: z.string().optional().default(''),
      })
      .optional(),
    estado: z.enum(['borrador', 'publicado']),
  }),
});

export const collections = { articulos };
