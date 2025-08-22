// scripts/optimize-images.mjs
import { globby } from 'globby';
import sharp from 'sharp';
import { dirname, resolve, parse, format } from 'path';
import { fileURLToPath } from 'url';
import { mkdir } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const INPUT_GLOB = 'src/assets/*.{jpg,jpeg,png}';
const OUT_DIR = 'src/assets/opt';            // salida aquí
const WIDTH = 1200;
const HEIGHT = 1500;
const QUALITY = 82;

async function run() {
  const files = await globby(INPUT_GLOB);
  if (!files.length) {
    console.log('No se encontraron imágenes en', INPUT_GLOB);
    return;
  }
  await mkdir(resolve(__dirname, '..', OUT_DIR), { recursive: true });

  for (const f of files) {
    const p = parse(f);
    const out = resolve(__dirname, '..', OUT_DIR, `${p.name}.webp`);
    console.log('→', f, '=>', out);
    await sharp(f)
      .resize(WIDTH, HEIGHT, { fit: 'cover', withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(out);
  }

  console.log('\nListo ✅  Convertidas a .webp en', OUT_DIR);
  console.log('Actualizá tus imports a los .webp nuevos.');
}

run().catch((e) => {
  console.error('Error:', e);
  process.exit(1);
});
