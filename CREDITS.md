# Créditos de imágenes

Las fotos ilustrativas de fondo provienen de **Pexels** (licencia libre, uso
comercial permitido, sin atribución obligatoria — [pexels.com/license](https://www.pexels.com/license/)).
Se usan como fondo con una capa marrón (sepia) al 70 % y un leve difuminado, y se
optimizaron (WebP + JPG, saturación reducida) con `scripts/optimize-photos.mjs`.

| Archivo en `public/images/` | Fuente (Pexels) |
|---|---|
| `hero-biblia` | https://www.pexels.com/photo/7076710/ |
| `manos-biblia` | https://www.pexels.com/photo/13101376/ |
| `congregacion` | https://www.pexels.com/photo/14530768/ |
| `biblia-espanol` | https://www.pexels.com/photo/8944594/ |
| `salmo` | https://www.pexels.com/photo/6290721/ |
| `oracion` | https://www.pexels.com/photo/7219390/ |

Para reemplazarlas por fotografías propias de la congregación (lo que el Manual
§6 prefiere), colocá las nuevas imágenes en `public/images/` con el mismo nombre
base (`.webp` y `.jpg`) o corré `node scripts/optimize-photos.mjs <carpeta>` con
tus originales (nombradas `hi-<nombre>.jpg`).

## Fotos propias de la congregación

Desde octubre de 2026 el sitio usa fotos reales de nuestras reuniones en la
portada, las franjas, el encabezado de «Predicación», la galería «Nuestras
reuniones» y el retrato del pastor en «Liderazgo»:

| Archivo | Uso |
|---|---|
| `public/images/portada-1..3` | Fondo de la portada (se alternan) |
| `public/images/reunion-congregacion` | Franja «Somos una iglesia local» y «Nuestra historia» |
| `public/images/reunion-oracion` | Encabezados de «Somos», «Liderazgo», «Membresía», «Contacto» |
| `public/images/predicacion-pulpito` | Encabezado de «Predicación» |
| `public/images/reuniones/*` | Galería de reuniones de la portada (panel → «Galería de reuniones») |
| `public/liderazgo/telias-camacho-jonatan.jpg` | Retrato del pastor |

Las fotos de Pexels que ya no se usan (`hero-biblia`, `congregacion`, `oracion`)
quedan en el repositorio por si se quieren volver a elegir desde el panel.
