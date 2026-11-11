# ASCOLTO: source

The source of the CILS A2 exam simulator. It builds into `../cils-app/`, which GitHub Pages serves, and which the Android and iOS apps in `../cils-mobile/` wrap.

```
src/main.js        entry: loads the styles, then the app
src/shell/         the Immersione frame: tab bar, photo headers, the Oggi, Prove and Parole screens
src/app.js         every other screen and all the logic (recovered code, see below)
src/data/*.json    every content table: flashcards, exercises, dialogues, tests, regions
src/styles/        app.css (original styles) and immersione.css (the new look, loaded on top)
../cils-app/img    photos, and ../cils-app/italy-regions.geojson (kept there only, not copied)
```

## Commands

```
npm install
npm run dev        live preview at http://127.0.0.1:5180/PM-Side-Projects/cils-app/
npm run build      writes the site into ../cils-app/
npm run lint       catches names that do not exist
```

After a build, run `npm run sync` in `../cils-mobile/` so the Android and iOS apps get the same change.

## Where this code came from

The original source was lost; only the published build survived. In November 2026 this project was rebuilt from that build: library code became normal imports, every content table moved to `src/data/`, and the rest was reformatted. `src/app.js` therefore still uses the short names a minifier chose. It behaves exactly like the build it came from. Rename things as you work on them.

To add or fix content (a flashcard, an exercise, a dialogue), edit the matching file in `src/data/` and rebuild.
