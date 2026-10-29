/* Fotos de fondo del sitio. Cada foto tiene un nombre fijo (ej. "congregacion")
   y su archivo se elige desde el panel (/admin → «Fotos del sitio»). */
import fotos from '../data/fotos.json';

/**
 * Nombre de foto → rutas para <picture>. Las fotos originales tienen además una
 * versión .webp al lado; las subidas desde el panel ya llegan optimizadas.
 */
export function fotoSrc(nombre: string): { src: string; webp?: string } {
  const src = (fotos as Record<string, string>)[nombre] ?? `/images/${nombre}.jpg`;
  const original = `/images/${nombre}.jpg`;
  return src === original ? { src, webp: `/images/${nombre}.webp` } : { src };
}
