/*
 * Builds www/ — the web content both mobile apps ship — from the web app.
 *
 *   ../cils-app   the web build, exactly as GitHub Pages serves it  (source of truth)
 *   www/          the same files, re-based to "/" plus the native bridge (generated)
 *
 * Run through `npm run sync`. Never edit www/ by hand: it is rebuilt every time.
 */
import { build } from 'esbuild';
import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const webSrc = path.resolve(root, '..', 'cils-app');
const out = path.join(root, 'www');

// The web build is served from this path on GitHub Pages. Inside the apps the
// same files sit at the root of the WebView's own origin.
const WEB_BASE = '/PM-Side-Projects/cils-app/';
const APP_BASE = '/';

const TEXT_EXT = new Set(['.html', '.js', '.css', '.json', '.webmanifest', '.svg']);
const BRIDGE_TAG = '<script src="/native-bridge.js"></script>';

async function walk(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

async function main() {
  await stat(path.join(webSrc, 'index.html')).catch(() => {
    throw new Error(`Web build not found at ${webSrc}. Expected cils-app/index.html next to cils-mobile/.`);
  });

  await rm(out, { recursive: true, force: true });
  await mkdir(out, { recursive: true });
  await cp(webSrc, out, { recursive: true });

  // 1. Re-base every absolute reference from the Pages path to the app root.
  let rebased = 0;
  for (const file of await walk(out)) {
    const ext = path.extname(file).toLowerCase();
    if (!TEXT_EXT.has(ext)) continue;
    const text = await readFile(file, 'utf8');
    if (!text.includes(WEB_BASE)) continue;
    rebased += text.split(WEB_BASE).length - 1;
    await writeFile(file, text.split(WEB_BASE).join(APP_BASE));
  }

  // 2. Load the native bridge before the app's own script.
  const indexPath = path.join(out, 'index.html');
  let html = await readFile(indexPath, 'utf8');
  const firstScript = html.indexOf('<script');
  if (firstScript === -1) throw new Error('index.html has no <script> tag; cannot place the native bridge.');
  html = html.slice(0, firstScript) + BRIDGE_TAG + '\n    ' + html.slice(firstScript);
  await writeFile(indexPath, html);

  // 3. Bundle the bridge (Capacitor runtime + plugins + our shims) into one file.
  await build({
    entryPoints: [path.join(root, 'src', 'native-bridge.js')],
    outfile: path.join(out, 'native-bridge.js'),
    bundle: true,
    format: 'iife',
    target: ['es2019'],
    minify: true,
    legalComments: 'none',
    logLevel: 'warning',
  });

  // 4. Fail loudly if anything still points at the Pages path.
  const leftovers = [];
  for (const file of await walk(out)) {
    if (!TEXT_EXT.has(path.extname(file).toLowerCase())) continue;
    if ((await readFile(file, 'utf8')).includes('/PM-Side-Projects/')) leftovers.push(path.relative(out, file));
  }
  if (leftovers.length) throw new Error(`Pages paths left in: ${leftovers.join(', ')}`);

  const files = await walk(out);
  let bytes = 0;
  for (const f of files) bytes += (await stat(f)).size;
  console.log(`www/ ready: ${files.length} files, ${(bytes / 1048576).toFixed(1)} MB, ${rebased} paths re-based, native bridge added.`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
