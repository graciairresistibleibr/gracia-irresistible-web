/* =========================================================================
   Datos institucionales · fuente única de verdad
   Los datos viven en iglesia.json y se editan desde el panel (/admin →
   «Datos de la iglesia»). Este archivo sólo agrega valores derivados y la
   navegación.
   ========================================================================= */

import datos from './iglesia.json';

export const iglesia = {
  ...datos,
  contacto: {
    ...datos.contacto,
    // El enlace de WhatsApp se arma solo a partir del número.
    whatsappUrl: `https://wa.me/${datos.contacto.whatsapp.replace(/\D/g, '')}`,
  },
};

export type Iglesia = typeof iglesia;

export const NAV_PRINCIPAL = [
  { label: 'Somos', href: '/somos' },
  { label: 'Creemos', href: '/creemos' },
  { label: 'Predicación', href: '/predicacion' },
  { label: 'Contacto', href: '/contacto' },
] as const;

export const NAV_SECUNDARIA = [
  { label: 'Nuestra historia', href: '/somos/historia' },
  { label: 'Misión y visión', href: '/somos/mision-y-vision' },
  { label: 'Liderazgo', href: '/somos/liderazgo' },
  { label: 'Membresía', href: '/somos/membresia' },
  { label: 'Confesión 1689', href: '/creemos/confesion-1689' },
  { label: 'Las Cinco Solas', href: '/creemos/cinco-solas' },
  { label: 'Doctrinas de la gracia', href: '/creemos/doctrinas-de-la-gracia' },
  { label: 'Archivo de predicación', href: '/predicacion/archivo' },
] as const;

/* Ocho mensajes clave de identidad (usar literalmente donde correspondan). */
export const MENSAJES_CLAVE = [
  'La gracia de Dios en Cristo es irresistible: donde ella actúa, transforma.',
  'La Palabra sola es nuestra única autoridad infalible. Todo lo demás se le somete.',
  'La iglesia no es un lugar. Es un pueblo que Cristo compró con su sangre.',
  'Adoramos al Dios que se ha revelado, del modo que Él ha ordenado.',
  'Predicamos a Cristo crucificado: esperanza segura para todo el que cree.',
  'El hogar es la primera iglesia. Fortalecemos hogares que fortalecen la iglesia.',
  'Vivimos por gracia, en obediencia, para la gloria de Dios.',
  'Nuestra ancla no está en el tiempo, sino en el Cristo eterno que vive.',
] as const;
