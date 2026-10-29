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

/** Segundos → "46 min" o "1 h 12 min" */
export function formatDuracion(segundos: number): string {
  const min = Math.round(segundos / 60);
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m === 0 ? `${h} h` : `${h} h ${m} min`;
}

/** Duración legible por lector de pantalla / atributo. */
export function duracionISO(segundos: number): string {
  const h = Math.floor(segundos / 3600);
  const m = Math.floor((segundos % 3600) / 60);
  const s = segundos % 60;
  return `PT${h ? h + 'H' : ''}${m}M${s}S`;
}
