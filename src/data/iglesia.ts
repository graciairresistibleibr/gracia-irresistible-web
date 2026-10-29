/* =========================================================================
   Datos institucionales · fuente única de verdad
   Editá ESTE archivo para cambiar horarios, dirección, próximo culto y redes.
   No hace falta tocar ninguna página.
   ========================================================================= */

export const iglesia = {
  nombre: 'Iglesia Bautista Reformada',
  nombreMarca: 'Gracia Irresistible',
  nombreCompleto: 'Iglesia Bautista Reformada «Gracia Irresistible»',
  descripcionBreve:
    'Glorificamos a Dios y servimos a las personas. Iglesia Bautista Reformada en Resistencia, Chaco, confesante de la Confesión de Fe Bautista de Londres de 1689.',

  ubicacion: {
    calle: 'Av. Ejemplo 1234',
    ciudad: 'Resistencia',
    provincia: 'Chaco',
    pais: 'Argentina',
    codigoPostal: 'H3500',
    // Coordenadas para el mapa OpenStreetMap (Resistencia, Chaco). Ajustar a la
    // ubicación real del templo.
    lat: -27.4512,
    lng: -58.9866,
  },

  contacto: {
    email: 'contacto@graciairresistible.org',
    emailPastoral: 'pastor@graciairresistible.org',
    whatsapp: '+54 9 362 000 0000',
    whatsappUrl: 'https://wa.me/5493620000000',
  },

  redes: {
    youtube: 'https://youtube.com/@graciairresistible',
    facebook: 'https://facebook.com/graciairresistible',
    instagram: 'https://instagram.com/graciairresistible',
    spotify: '',
  },

  // Horarios de reunión semanales
  horarios: [
    { dia: 'Domingo', hora: '10:00', titulo: 'Culto de adoración' },
    { dia: 'Domingo', hora: '18:30', titulo: 'Estudio bíblico' },
    { dia: 'Miércoles', hora: '20:00', titulo: 'Reunión de oración' },
  ],

  // Próximo culto destacado en el home. Editar aquí semanalmente.
  proximoCulto: {
    dia: 'Domingo',
    hora: '10:00 h',
    serie: 'Serie actual: Efesios — Las riquezas de la gracia',
    // Enlace de "Cómo llegar" (OpenStreetMap por defecto)
  },
} as const;

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
