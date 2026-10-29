/* Formateadores compartidos (fecha en español, duración de audio). */

const MESES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
];

/** "7 de septiembre de 2026" */
export function formatFecha(fecha: Date): string {
  return `${fecha.getUTCDate()} de ${MESES[fecha.getUTCMonth()]} de ${fecha.getUTCFullYear()}`;
}

/** ISO corto para <time datetime> */
export function isoFecha(fecha: Date): string {
  return fecha.toISOString().slice(0, 10);
}

/** Minutos → "46 min" o "1 h 12 min" */
export function formatDuracion(min: number): string {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m === 0 ? `${h} h` : `${h} h ${m} min`;
}

/** Duración legible por lector de pantalla / atributo. */
export function duracionISO(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `PT${h ? h + 'H' : ''}${m}M`;
}

/** Enlace de YouTube (watch, youtu.be, shorts, live) → id del video. */
export function youtubeId(url: string): string | undefined {
  const m = url.match(/(?:youtu\.be\/|[?&]v=|\/(?:embed|shorts|live)\/)([\w-]{11})/);
  return m?.[1];
}
