import react from '@vitejs/plugin-react';
import { createReadStream, existsSync, readdirSync, rmSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const here = path.dirname(fileURLToPath(import.meta.url));

// Where the site is served on GitHub Pages, and the folder Pages serves it from.
const BASE = '/PM-Side-Projects/cils-app/';
const WEB_OUT = path.resolve(here, '..', 'cils-app');

const TYPES = { '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.geojson': 'application/geo+json', '.json': 'application/json' };

/*
 * The photos and the map data live only in ../cils-app (img/ and
 * italy-regions.geojson), next to the built files, so nothing is stored twice.
 *   dev:   serve those files straight from ../cils-app
 *   build: write the new bundle into ../cils-app/assets, removing the old one
 */
function webFolder() {
  return {
    name: 'ascolto-web-folder',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = decodeURIComponent((req.url || '').split('?')[0]);
        if (!url.startsWith(BASE)) return next();
        const rel = url.slice(BASE.length);
        if (!rel.startsWith('img/') && rel !== 'italy-regions.geojson') return next();
        const file = path.join(WEB_OUT, rel);
        if (!file.startsWith(WEB_OUT) || !existsSync(file) || !statSync(file).isFile()) return next();
        res.setHeader('Content-Type', TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream');
        createReadStream(file).pipe(res);
      });
    },
    buildStart() {
      if (this.meta.watchMode) return;
      const assets = path.join(WEB_OUT, 'assets');
      if (!existsSync(assets)) return;
      for (const name of readdirSync(assets)) rmSync(path.join(assets, name), { recursive: true, force: true });
    },
  };
}

export default defineConfig(({ command }) => ({
  base: BASE,
  publicDir: false,
  plugins: [react(), ...(command === 'serve' ? [webFolder()] : [{ ...webFolder(), configureServer: undefined }])],
  build: {
    outDir: WEB_OUT,
    emptyOutDir: false,
    assetsDir: 'assets',
    chunkSizeWarningLimit: 2500,
  },
  server: { port: 5180, strictPort: true, host: '127.0.0.1' },
  preview: { port: 5181, strictPort: true, host: '127.0.0.1' },
}));
