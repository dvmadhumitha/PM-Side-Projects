/*
 * Draws the ASCOLTO icon and splash sources into assets/, then
 * `npx capacitor-assets generate` cuts every Android and iOS size from them.
 *
 *   npm run icons
 *
 * The mark is a sound source with three waves ("ascolto" = listening), in the
 * web app's own green, paper and terracotta.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'assets');

const GREEN = '#1e6b4f';
const PAPER = '#f7f4ec';
const TERRA = '#c9603a';

// The mark, drawn in a 1024 box and centred on (512, 512).
const mark = (wave, dot) => `
  <g transform="translate(-27 0)" fill="none" stroke-linecap="round">
    <circle cx="360" cy="512" r="66" fill="${dot}" stroke="none"/>
    <path d="M480.2 391.8 A170 170 0 0 1 480.2 632.2" stroke="${wave}" stroke-width="64"/>
    <path d="M558 314 A280 280 0 0 1 558 710" stroke="${wave}" stroke-width="64"/>
    <path d="M635.8 236.2 A390 390 0 0 1 635.8 787.8" stroke="${wave}" stroke-width="64" opacity="0.55"/>
  </g>`;

const svg = (size, body) =>
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${body}</svg>`);

// scale the 1024 mark around the centre of a canvas of `size`
const placed = (size, scale, wave, dot) => {
  const s = (size / 1024) * scale;
  const offset = (size - 1024 * s) / 2;
  return `<g transform="translate(${offset} ${offset}) scale(${s})">${mark(wave, dot)}</g>`;
};

await mkdir(out, { recursive: true });

// Full icon (iOS, legacy Android): mark at 78% on green.
await sharp(svg(1024, `<rect width="1024" height="1024" fill="${GREEN}"/>${placed(1024, 0.78, PAPER, TERRA)}`))
  .png()
  .toFile(path.join(out, 'icon-only.png'));

// Android adaptive icon: the launcher crops to the middle two thirds.
await sharp(svg(1024, placed(1024, 0.52, PAPER, TERRA)))
  .png()
  .toFile(path.join(out, 'icon-foreground.png'));
await sharp(svg(1024, `<rect width="1024" height="1024" fill="${GREEN}"/>`))
  .png()
  .toFile(path.join(out, 'icon-background.png'));

// Splash: the web app's paper background with the mark in green.
const splash = (bg, wave, dot) => svg(2732, `<rect width="2732" height="2732" fill="${bg}"/>${placed(2732, 0.16, wave, dot)}`);
await sharp(splash(PAPER, GREEN, TERRA)).png().toFile(path.join(out, 'splash.png'));
await sharp(splash('#13241b', PAPER, TERRA)).png().toFile(path.join(out, 'splash-dark.png'));

console.log('assets/ ready: icon-only, icon-foreground, icon-background, splash, splash-dark');
