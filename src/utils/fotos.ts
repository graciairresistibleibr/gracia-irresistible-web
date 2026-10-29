/* Fotos de fondo del sitio. Cada foto tiene un nombre fijo (ej. "congregacion")
   y su archivo se elige desde el panel (/admin → «Fotos del sitio»). */
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import fotos from '../data/fotos.json';

export type Foto = { src: string; webp?: string };

/**
 * Ruta de una imagen → rutas para <picture>. Las fotos preparadas a mano tienen
 * una versión .webp al lado (se detecta al compilar); las subidas desde el panel
 * ya llegan en WebP.
 */
export function conWebp(src: string): Foto {
  if (!/\.jpe?g$/i.test(src) || !src.startsWith('/')) return { src };
  const webp = src.replace(/\.jpe?g$/i, '.webp');
  return existsSync(join(process.cwd(), 'public', webp)) ? { src, webp } : { src };
}

/** Nombre de foto (ver src/data/fotos.json) → rutas para <picture>. */
export function fotoSrc(nombre: string): Foto {
  const src = (fotos as Record<string, unknown>)[nombre];
  return conWebp(typeof src === 'string' && src ? src : `/images/${nombre}.jpg`);
}

/** Fotos del encabezado de la portada; se alternan con un fundido suave. */
export function fotosPortada(): Foto[] {
  return (fotos.portada ?? []).filter(Boolean).map(conWebp);
}
