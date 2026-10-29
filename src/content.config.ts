import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* Acepta una URL absoluta (https://…) o una ruta local del sitio (/audio/…). */
const urlOrPath = z.string().refine(
  (v) => v.startsWith('http://') || v.startsWith('https://') || v.startsWith('/'),
  { message: 'Debe ser una URL (https://…) o una ruta local (/…)' },
);

const sermones = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/sermones' }),
  schema: z.object({
    titulo: z.string(),
    serie: z.string(),
    serieSlug: z.string().optional(),
    predicador: z.string(),
    fecha: z.coerce.date(),
    textoBiblico: z.string(), // ej: "Efesios 2:1-10"
    libro: z.string(), // ej: "Efesios" (para el filtro por libro)
    duracion: z.number(), // en segundos
    audioUrl: urlOrPath,
    pdfNotas: z.string().optional(),
    descripcion: z.string().max(280),
    destacado: z.boolean().default(false),
  }),
});

const series = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/series' }),
  schema: z.object({
    nombre: z.string(),
    libro: z.string(),
    inicio: z.coerce.date(),
    fin: z.coerce.date().optional(),
    descripcion: z.string(),
    activa: z.boolean().default(false),
  }),
});

const liderazgo = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/liderazgo' }),
  schema: z.object({
    nombre: z.string(),
    cargo: z.enum(['Pastor', 'Anciano', 'Diácono']),
    orden: z.number(),
    bio: z.string(),
    foto: z.string().optional(),
  }),
});

export const collections = { sermones, series, liderazgo };
