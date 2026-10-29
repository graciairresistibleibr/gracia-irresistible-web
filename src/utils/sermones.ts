/* Acceso a los sermones con el nombre de la serie ya resuelto.
   Desde el panel, cada sermón elige su serie (serieSlug) de la lista de series;
   el nombre visible se toma de esa serie. Los sermones viejos que traen `serie`
   escrito a mano lo conservan. */
import { getCollection } from 'astro:content';

export async function getSermones() {
  const [sermones, series] = await Promise.all([
    getCollection('sermones'),
    getCollection('series'),
  ]);
  const nombres = new Map(series.map((s) => [s.id, s.data.nombre]));
  return sermones.map((s) => ({
    ...s,
    data: { ...s.data, serie: s.data.serie ?? nombres.get(s.data.serieSlug ?? '') ?? '' },
  }));
}
