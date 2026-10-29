/**
 * Optimiza las fotos ilustrativas de fondo: redimensiona, baja levemente la
 * saturación (familia visual cálida del manual §6) y exporta WebP + JPG.
 * Las fuentes se leen de la carpeta indicada por SRC_DIR.
 *
 *   node scripts/optimize-photos.mjs <SRC_DIR>
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { readdirSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = process.argv[2];
const outDir = join(__dirname, '..', 'public', 'images');

const files = readdirSync(srcDir).filter((f) => f.startsWith('hi-') && f.endsWith('.jpg'));

for (const f of files) {
  const name = f.replace(/^hi-/, '').replace(/\.jpg$/, '');
  const src = join(srcDir, f);
  const base = sharp(src)
    .resize({ width: 1600, withoutEnlargement: true })
    .modulate({ saturation: 0.82, brightness: 1.0 }); // desaturación parcial cálida

  await base.clone().webp({ quality: 68 }).toFile(join(outDir, `${name}.webp`));
  await base.clone().jpeg({ quality: 66, mozjpeg: true }).toFile(join(outDir, `${name}.jpg`));
  console.log('procesada:', name);
}
console.log('OK -> public/images/');
