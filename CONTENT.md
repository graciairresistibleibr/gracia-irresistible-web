# Guía de contenido

> **Lo más fácil es usar el panel en `/admin`** (ver [docs/PANEL.md](docs/PANEL.md)).
> Esta guía explica qué archivos cambia el panel, por si hace falta editarlos a mano.

Cómo mantener el sitio al día sin tocar código de diseño. Todas las tareas
habituales se resuelven editando archivos de datos o de contenido.

---

## 1 · Cambiar el «Próximo culto», horarios, dirección o redes

Todo vive en un solo archivo: **`src/data/iglesia.json`** (panel → «Datos de la iglesia»).

### Próximo culto (franja del home)

```ts
proximoCulto: {
  dia: 'Domingo',
  hora: '10:00 h',
  serie: 'Serie actual: Efesios — Las riquezas de la gracia',
},
```

Editá estos tres campos cada semana. Se reflejan automáticamente en el home.

### Horarios de reunión

```ts
horarios: [
  { dia: 'Domingo',   hora: '10:00', titulo: 'Culto de adoración' },
  { dia: 'Domingo',   hora: '18:30', titulo: 'Estudio bíblico' },
  { dia: 'Miércoles', hora: '20:00', titulo: 'Oración y estudio bíblico' },
],
```

Agregá, quitá o reordená filas. Aparecen en el home y en `/contacto`.

### Dirección y coordenadas del mapa

```ts
ubicacion: {
  calle: 'Av. Ejemplo 1234',
  ciudad: 'Resistencia',
  provincia: 'Chaco',
  pais: 'Argentina',
  codigoPostal: 'H3500',
  lat: -27.4512,   // ← coordenadas reales del templo
  lng: -58.9866,
},
```

`lat`/`lng` alimentan el mapa de OpenStreetMap. Obtené las coordenadas exactas
en [openstreetmap.org](https://www.openstreetmap.org) (clic derecho → «¿Qué hay aquí?»).

### Contacto y redes

Editá `contacto` (email, email pastoral, WhatsApp; el enlace `wa.me` se arma solo) y `redes` (YouTube, Instagram,
Facebook). Dejá una red en `''` (cadena vacía) para ocultarla del footer.

---

## 2 · Agregar un sermón

Creá un archivo nuevo en **`src/content/sermones/`**, por ejemplo
`nuevo-sermon.md`. El nombre del archivo es el slug de la URL
(`/predicacion/nuevo-sermon`).

```md
---
titulo: 'Título del sermón'
serieSlug: 'efesios-riquezas-de-la-gracia'   # nombre del archivo de la serie (sin extensión)
predicador: 'Ptro. Juan Pérez'
fecha: 2026-09-14
textoBiblico: 'Efesios 2:11-22'
libro: 'Efesios'                              # para el filtro por libro
duracion: 45                                  # en MINUTOS (opcional)
youtubeUrl: 'https://youtu.be/XXXXXXXXXXX'    # opcional
audioUrl: '/audio/nuevo-sermon.mp3'           # opcional; ruta local o URL https://
spotifyUrl: 'https://open.spotify.com/episode/…'  # opcional
pdfNotas: '/notas/nuevo-sermon.pdf'           # opcional
descripcion: 'Resumen de hasta 280 caracteres para las tarjetas y el SEO.'
destacado: false                              # true para destacarlo
---

## Bosquejo

1. Primer punto…
2. Segundo punto…

## Aplicación

Texto de aplicación. Este cuerpo (Markdown/MDX) se muestra como notas del sermón.
```

- Colocá el audio en `public/audio/` y las notas en `public/notas/`.
- El sermón aparece automáticamente en el home (si es reciente), en el hub de
  predicación, en el archivo (con sus filtros) y, si comparte `serieSlug`, en
  «Otros sermones de esta serie».
- El más reciente por `fecha` encabeza los listados.

---

## 3 · Agregar o actualizar una serie

Creá un archivo en **`src/content/series/`**, por ejemplo `nueva-serie.md`. El
nombre del archivo es el `serieSlug` que usan los sermones.

```md
---
nombre: 'Nombre de la serie'
libro: 'Efesios'
inicio: 2026-03-01
fin: 2026-08-30        # opcional; omitir si está en curso
descripcion: 'Descripción de la serie para el hub de predicación.'
activa: true           # sólo UNA serie debería estar activa a la vez
---

Texto introductorio opcional.
```

La serie con `activa: true` se destaca en `/predicacion` y en
`/predicacion/serie-actual`. Al terminar una serie, poné `activa: false` y agregá
la fecha de `fin`.

---

## 4 · Agregar un miembro del liderazgo

Creá un archivo en **`src/content/liderazgo/`**, por ejemplo `nombre-apellido.md`.

```md
---
nombre: 'Nombre Apellido'
cargo: 'Anciano'        # 'Pastor' | 'Anciano' | 'Diácono'
orden: 6                # controla el orden de aparición (menor primero)
bio: 'Descripción breve del rol y ministerio.'
foto: '/liderazgo/nombre-apellido.jpg'   # opcional (proporción 3:4)
---
```

- Sin `foto`, se muestra un placeholder con las iniciales.
- Con `foto`, colocá la imagen en `public/liderazgo/` (recomendado 3:4, tratamiento
  sobrio; ver Manual §6). Se le aplica el filtro cálido de la familia visual.

---

## 5 · Reemplazar los placeholders por fotos reales

Durante el desarrollo, las imágenes son placeholders semánticos (bloques sepia con
el emblema, o rectángulos con iniciales). Buscá en el código los comentarios:

```
PLACEHOLDER:
```

Cada uno indica qué foto real corresponde. Reglas de tratamiento (Manual §6):

- Desaturación parcial + viraje cálido; usar `.photo-treatment` o el filtro
  `filter: sepia(0.15) saturate(0.85);` como punto de partida.
- Prohibido stock genérico de «gente feliz mirando el cielo», HDR agresivo, bokeh
  dramático.
- Optimizar a AVIF + WebP con `srcset`. Pesos máximos: hero 120 KB (AVIF), contenido
  80 KB, retratos 40 KB.
- `alt` siempre presente y descriptivo (sin «foto de…»).

---

## 6 · Recursos escritos

Los recursos de `/predicacion/recursos` están en `src/data/recursos.json`
(panel → «Recursos escritos»). Los PDFs van en `public/recursos/`.

---

## 7 · Publicar

```bash
npm run build      # genera dist/
```

Netlify está conectado al repositorio de GitHub: cada commit en `main` (incluidos
los que hace el panel) se publica solo. El formulario de contacto funciona con
Netlify Forms sin configuración adicional.
