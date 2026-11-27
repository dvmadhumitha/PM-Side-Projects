/*
 * Draws the Allora icon and splash for Android, iOS and the web, all from the
 * one mark in allora-mark.mjs, so the three platforms show the same thing.
 *
 *   npm run icons
 *
 * Writes the phone sources into assets/ (then `capacitor-assets generate` cuts
 * every Android and iOS size from them) and the web app's icons into
 * ../cils-app/icons/, next to its photos (run `npm run sync` afterwards).
 */
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { COLORS, board, ground, mark, scaled, svgFile, word } from './allora-mark.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'assets');
const web = path.resolve(root, '..', 'cils-app', 'icons');

// The web icon and the splash show the mark as a rounded square, like the
// phones' home screens. iOS and Android round the app icon themselves.
const RADIUS = 27;

// Android crops its adaptive icon to the launcher's own shape (a circle on a
// Pixel). Only a circle 66/72 of the visible width is safe in every shape, so
// the word is drawn a little smaller there and the board runs on past the edge.
const ADAPTIVE = 0.93;

const png = (size, body, file) => sharp(Buffer.from(svgFile(size, body))).png().toFile(file);

// A drawing of `size` px with the rounded mark centred, `share` of the width, on `bg`.
const centred = (size, share, bg) => {
  const s = (size * share) / 120;
  const at = (size - 120 * s) / 2;
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">` +
    `<rect width="${size}" height="${size}" fill="${bg}"/>` +
    `<g transform="translate(${at} ${at}) scale(${s})">${mark({ radius: RADIUS })}</g></svg>`
  );
};

await mkdir(out, { recursive: true });
await mkdir(web, { recursive: true });

// iOS, and Android before version 8: the whole mark, square (the system rounds it).
await png(1024, mark(), path.join(out, 'icon-only.png'));

// Android 8 and later: the word in front, the board behind.
await png(1024, scaled(ADAPTIVE, word()), path.join(out, 'icon-foreground.png'));
await png(
  1024,
  ground() + scaled(ADAPTIVE, board({ edge: 'bleed' })),
  path.join(out, 'icon-background.png'),
);

// Splash: the app's paper background (deep green in dark mode), the icon in the middle.
await sharp(Buffer.from(centred(2732, 0.17, COLORS.paper))).png().toFile(path.join(out, 'splash.png'));
await sharp(Buffer.from(centred(2732, 0.17, COLORS.deep))).png().toFile(path.join(out, 'splash-dark.png'));

// Web: a vector icon for the browser tab and the welcome screen, and the sizes
// phones use when the web app is added to the home screen.
await writeFile(path.join(web, 'favicon.svg'), svgFile(120, mark({ radius: RADIUS })));
await png(32, mark({ radius: RADIUS }), path.join(web, 'favicon-32.png'));
await png(180, mark(), path.join(web, 'apple-touch-icon.png'));
await png(192, mark({ radius: RADIUS }), path.join(web, 'icon-192.png'));
await png(512, mark({ radius: RADIUS }), path.join(web, 'icon-512.png'));

console.log('assets/: icon-only, icon-foreground, icon-background, splash, splash-dark');
console.log('cils-app/icons/: favicon.svg, favicon-32.png, apple-touch-icon.png, icon-192.png, icon-512.png');
