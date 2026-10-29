import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* Acepta una URL absoluta (https://…) o una ruta local del sitio (/audio/…). */
const urlOrPath = z.string().refine(
  (v) => v.startsWith('http://') || v.startsWith('https://') || v.startsWith('/'),
  { message: 'Debe ser una URL (https://…) o una ruta local (/…)' },
);

/* Campo opcional: un valor vacío que deja el panel cuenta como «sin cargar». */
const opcional = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((v) => (v === '' || v === null ? undefined : v), schema.optional());

const sermones = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/sermones' }),
  schema: z.object({
    titulo: z.string(),
    serie: z.string().optional(), // si falta, se toma el nombre de la serie elegida
    serieSlug: z.string().optional(),
    predicador: z.string(),
    fecha: z.coerce.date(),
    textoBiblico: z.string(), // ej: "Efesios 2:1-10"
    libro: z.string(), // ej: "Efesios" (para el filtro por libro)
    duracion: opcional(z.number()), // en minutos
    // Cada sermón puede tener video de YouTube, audio, enlace a Spotify o varios.
    youtubeUrl: opcional(z.string().url()),
    audioUrl: opcional(urlOrPath),
    spotifyUrl: opcional(z.string().url()),
    pdfNotas: opcional(z.string()),
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
    fin: opcional(z.coerce.date()),
    descripcion: z.string(),
    activa: z.boolean().default(false),
  }),
});

const liderazgo = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/liderazgo' }),
  schema: z.object({
    nombre: z.string(),
    cargo: z.enum(['Pastor', 'Anciano', 'Diácono', 'Colaborador']),
    orden: z.number(),
    bio: z.string(),
    foto: opcional(z.string()),
  }),
});

/* Páginas de texto libre editables desde el panel (ej. «Nuestra historia»). */
const paginas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/paginas' }),
  schema: z.object({
    antetitulo: z.string(),
    titulo: z.string(),
    descripcion: z.string(),
    introduccion: z.string(),
    versiculo: opcional(z.string()),
    referencia: opcional(z.string()),
  }),
});

export const collections = { sermones, series, liderazgo, paginas };
