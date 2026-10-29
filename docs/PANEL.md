# Panel de administración

El contenido del sitio se edita desde **[graciairresistible.org/admin](https://www.graciairresistible.org/admin)**,
en la computadora o en el celular. No hace falta tocar código.

Cada vez que guardás un cambio, el panel lo guarda en GitHub y Netlify vuelve a
publicar el sitio solo. El cambio aparece en la web en uno o dos minutos.

---

## Entrar

1. Abrí `graciairresistible.org/admin`.
2. Tocá **Sign In with GitHub** (Iniciar sesión con GitHub) y autorizá la primera vez.
3. Sólo pueden entrar las cuentas de GitHub que estén agregadas como
   colaboradoras del repositorio `graciairresistibleibr/gracia-irresistible-web`.

Para sumar a alguien del equipo: que se cree una cuenta gratis en github.com, y
desde la cuenta de la iglesia entrá al repositorio → **Settings → Collaborators →
Add people** y agregalo. Le llega un mail para aceptar.

---

## Qué se puede editar

| Sección del panel | Qué cambia en la web |
|---|---|
| **Sermones** | Predicaciones: video de YouTube, audio MP3, enlace a Spotify, notas en PDF y bosquejo. |
| **Series** | Series de predicación. Marcá «Serie en curso» en una sola. |
| **Liderazgo** | Pastores, ancianos y diáconos, con su retrato. |
| **Datos de la iglesia** | Próximo culto, horarios, dirección, mapa, mails, WhatsApp y redes. |
| **Portada** | Textos del inicio: encabezado, «Confesamos», franja de iglesia local, versículo y «Visitanos». |
| **Fotos del sitio** | Las fotos de fondo de los encabezados y franjas. |
| **Recursos escritos** | PDFs y enlaces de la página de recursos. |
| **Página «Nuestra historia»** | Todo el texto de esa página. |

### Subir un sermón

1. **Sermones → Nuevo Sermón**.
2. Completá título, serie, predicador, fecha, texto bíblico y libro.
3. Cargá al menos uno de estos:
   - **Video de YouTube**: pegá el enlace del video o de la transmisión.
   - **Audio (MP3)**: subí el archivo (mejor si pesa menos de 40 MB).
   - **Episodio en Spotify**: pegá el enlace del episodio del podcast.
4. Escribí el resumen (hasta 280 caracteres) y, si querés, las notas.
5. Tocá **Guardar**.

> Para el podcast conviene subir el audio a Spotify for Creators (gratis) y
> pegar acá el enlace del episodio. Así el sitio no se llena de archivos pesados.

### Fotos

- Podés subir fotos directo del celular: el panel las achica y las convierte a
  WebP solas, para que la web siga cargando rápido.
- Retratos del liderazgo: verticales (3:4), fondo sobrio.
- Seguí el Manual de marca §6: nada de fotos de stock genéricas ni filtros
  exagerados. El sitio les aplica el tono sepia de la marca.

---

## Cosas para tener en cuenta

- **Cada «Guardar» publica el sitio.** El plan gratis de Netlify alcanza para
  unas 20 publicaciones por mes. Conviene juntar varios cambios y guardarlos
  juntos en vez de guardar cada coma.
- Si algo queda mal, todo cambio se puede deshacer desde el historial de GitHub.
- Las páginas doctrinales (Creemos, Confesión 1689, Cinco Solas, etc.) no se
  editan desde el panel porque tienen un diseño especial; para cambiarlas hay
  que tocar el código.

---

## Configuración técnica (una sola vez)

Ya está hecha si el panel funciona. Queda anotada por si hay que rehacerla.

1. **Netlify conectado a GitHub**: en Netlify, proyecto
   `iglesia-gracia-irresistible` → *Project configuration → Build & deploy →
   Continuous deployment → Link repository* → GitHub →
   `graciairresistibleibr/gracia-irresistible-web`, rama `main`. El comando
   (`npm run build`) y la carpeta (`dist`) ya vienen en `netlify.toml`.
2. **App de OAuth en GitHub** (con la cuenta de la iglesia): *Settings →
   Developer settings → OAuth Apps → New OAuth App*.
   - Homepage URL: `https://www.graciairresistible.org`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
   - Guardar el *Client ID* y generar un *Client secret*.
3. **Proveedor en Netlify**: *Project configuration → Access & security →
   OAuth → Install provider → GitHub*, y pegar el Client ID y el secret.

El panel es [Sveltia CMS](https://sveltiacms.app) (gratis y de código abierto).
Su configuración está en `public/admin/config.yml`.
