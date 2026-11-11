/*
 * Confirms that web, Android and iOS are shipping the same app.
 *
 *   npm run check
 *
 * Takes every file of the web build (../cils-app), applies the same re-basing
 * the apps get, and compares it byte for byte with what sits inside the
 * Android project and the iOS project. Exits 1 on any difference, which means
 * someone changed the web app and has not run `npm run sync` yet.
 */
import { createHash } from 'node:crypto';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const webSrc = path.resolve(root, '..', 'cils-app');
const targets = {
  Android: path.join(root, 'android', 'app', 'src', 'main', 'assets', 'public'),
  iOS: path.join(root, 'ios', 'App', 'App', 'public'),
};

const WEB_BASE = '/PM-Side-Projects/cils-app/';
const TEXT_EXT = new Set(['.html', '.js', '.css', '.json', '.webmanifest', '.svg']);
const BRIDGE_TAG = '<script src="/native-bridge.js"></script>';
// Files the apps add on top of the web build.
const APP_ONLY = new Set(['native-bridge.js', 'cordova.js', 'cordova_plugins.js']);

const sha = (buf) => createHash('sha256').update(buf).digest('hex');

async function walk(dir, base = dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full, base)));
    else files.push(path.relative(base, full).split(path.sep).join('/'));
  }
  return files;
}

// What a web file should look like once it is inside an app.
async function expected(rel) {
  const buf = await readFile(path.join(webSrc, rel));
  if (!TEXT_EXT.has(path.extname(rel).toLowerCase())) return buf;
  let text = buf.toString('utf8').split(WEB_BASE).join('/');
  if (rel === 'index.html') {
    const at = text.indexOf('<script');
    text = text.slice(0, at) + BRIDGE_TAG + '\n    ' + text.slice(at);
  }
  return Buffer.from(text);
}

const webFiles = await walk(webSrc);
let failed = false;

for (const [name, dir] of Object.entries(targets)) {
  let appFiles;
  try {
    appFiles = new Set(await walk(dir));
  } catch {
    console.log(`${name}: no web content yet. Run "npm run sync".`);
    failed = true;
    continue;
  }
  const problems = [];
  for (const rel of webFiles) {
    if (!appFiles.has(rel)) {
      problems.push(`missing   ${rel}`);
      continue;
    }
    const [want, have] = await Promise.all([expected(rel), readFile(path.join(dir, rel))]);
    if (sha(want) !== sha(have)) problems.push(`different ${rel}`);
  }
  const webSet = new Set(webFiles);
  for (const rel of appFiles) {
    if (!webSet.has(rel) && !APP_ONLY.has(rel)) problems.push(`extra     ${rel}`);
  }
  if (!appFiles.has('native-bridge.js')) problems.push('missing   native-bridge.js');

  if (problems.length) {
    failed = true;
    console.log(`${name}: OUT OF SYNC with the web app (${problems.length} files)`);
    problems.slice(0, 20).forEach((p) => console.log(`  ${p}`));
    if (problems.length > 20) console.log(`  ... and ${problems.length - 20} more`);
  } else {
    console.log(`${name}: in sync with the web app (${webFiles.length} files identical).`);
  }
}

if (failed) {
  console.log('\nRun "npm run sync" in cils-mobile/ and build again.');
  process.exit(1);
}
