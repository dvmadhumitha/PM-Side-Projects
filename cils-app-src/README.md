# Allora: source

The source of the Italian exam simulator: CILS, CELI and PLIDA, levels A1 to B2. CILS A2 is the original app, with its own screens; every other exam and level is drawn from one table. It builds into `../cils-app/`, which GitHub Pages serves, and which the Android and iOS apps in `../cils-mobile/` wrap.

```
src/main.js        entry: loads the styles, then the app
src/shell/         the Immersione frame: tab bar, photo headers, the Oggi, Prove and Parole screens
src/app.js         every other screen and all the logic (recovered code, see below)
src/exams/         which exams and levels exist (catalog.js), the picker, and what has been done
src/data/*.json    every content table: flashcards, exercises, dialogues, tests, regions
src/data/level-*.json   the exercises for A1, A2, B1 and B2, shared by every exam at that level
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

## Exams and levels

`src/exams/catalog.js` lists each exam, its levels, and for each level its papers and pass rule. The picker, the Prove tab and the practice screens are drawn from it, so a new exam or level is a new entry there and needs no new screen.

A paper names the `skill` it draws from (`ascolto`, `lettura`, `strutture`, `scrittura`, `orale`). The exercises for that skill come from the level's bank, `src/data/level-<level>.json`, through `src/screens/LevelPractice.jsx`. To add an exercise, add an entry to the bank; `npm test` checks that every bank is complete. The texts are original, written to each exam's published format; do not copy past papers into them.

Only state a number of tasks, a duration, a word count or a pass mark in the catalog when the exam body's own specification gives it.

The choice is saved as `exam_choice`; finished exercises as `lv_done`. CILS A2 is marked `legacy: true` and keeps the original Oggi, Prove and Progressi screens and their storage.

## Writing a screen in the Immersione design

New and rewritten screens live in `src/screens/`, one file each. `ListeningPractice.jsx` is the reference.

- **A list** is `ul.im-rows` of `button.im-row` (photo thumbnail, title, one line of detail).
- **One exercise** is a `<TaskScreen>`: full screen, a photo with the title on it, the exercise in the sheet below, the main action in the `footer`. It closes with the back button.
- **Controls** come from `src/styles/screens.css`: `.im-btn primary|secondary`, `.im-option` (with `chosen`, `correct`, `wrong`), `.im-pills`, `.im-linkbtn`, `.im-note`, `.im-overline`.
- **Photos** are `${import.meta.env.BASE_URL}img/scenes/<name>.jpg` (bagno, bar, biblioteca, camera, classe, cucina, dolci, medico, parco, pasta, persona, pizza, salumeria, soggiorno, stazione, strada, sugo, supermercato, ufficio) and `img/regions/<name>.jpg`.
- **Logic** is imported from `../app.js`, which exports every recovered function under its short name: `import { At as recordAttempt } from '../app.js'`. Content comes from `src/data/`.
- **Rules:** no emoji (icons are in `src/shell/icons.jsx`), real `button` and `input` elements, touch targets of 44px or more, text contrast of 4.5:1 or more, and the same storage keys and scoring as the code being replaced.

## Where this code came from

The original source was lost; only the published build survived. In November 2026 this project was rebuilt from that build: library code became normal imports, every content table moved to `src/data/`, and the rest was reformatted. `src/app.js` therefore still uses the short names a minifier chose. It behaves exactly like the build it came from. Rename things as you work on them.

To add or fix content (a flashcard, an exercise, a dialogue), edit the matching file in `src/data/` and rebuild.
