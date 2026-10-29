/**
 * Genera public/og-default.png (1200×630) para Open Graph / Twitter Cards.
 * Usa sharp (ya incluido con Astro) para rasterizar un SVG de portada:
 * fondo sepia profundo + emblema + título de identidad.
 *
 *   node scripts/generate-og.mjs
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og-default.png');

const emblem = `
  <g transform="translate(830 150) scale(3.1)" stroke="#F5EFE6" stroke-width="1.4"
     stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.14">
    <line x1="50" y1="12" x2="50" y2="62"/>
    <line x1="37" y1="27" x2="63" y2="27"/>
    <path d="M50 70 C 42 64, 30 64, 20 68 L 20 88 C 30 84, 42 84, 50 90 Z"/>
    <path d="M50 70 C 58 64, 70 64, 80 68 L 80 88 C 70 84, 58 84, 50 90 Z"/>
    <line x1="50" y1="70" x2="50" y2="90"/>
  </g>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#4A2E17"/>
  <rect x="0" y="0" width="1200" height="8" fill="#B8935A"/>
  ${emblem}
  <text x="90" y="250" font-family="Georgia, 'Times New Roman', serif"
        font-size="34" fill="#B8935A" letter-spacing="6">IGLESIA BAUTISTA REFORMADA</text>
  <text x="86" y="360" font-family="Georgia, 'Times New Roman', serif"
        font-size="104" fill="#F5EFE6">Gracia Irresistible</text>
  <text x="90" y="430" font-family="Georgia, 'Times New Roman', serif"
        font-size="34" font-style="italic" fill="#F5EFE6" opacity="0.85">Glorificamos a Dios y servimos a las personas · Resistencia, Chaco</text>
  <line x1="90" y1="480" x2="360" y2="480" stroke="#B8935A" stroke-width="1"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('OG generado en', out);
