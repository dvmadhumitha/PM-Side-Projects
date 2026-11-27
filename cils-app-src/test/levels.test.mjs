// Checks the level banks (src/data/level-*.json): every exercise is complete
// and every question has three different options and a valid answer.
import { readFileSync } from 'node:fs';

const LEVELS = ['a1', 'a2', 'b1', 'b2'];
const SKILLS = ['ascolto', 'lettura', 'strutture', 'scrittura', 'orale'];
const words = (text) => text.trim().split(/\s+/).length;

let failures = 0;
const check = (ok, message) => {
  if (!ok) {
    failures += 1;
    console.error(`  FAIL  ${message}`);
  }
};

const seen = new Set();
for (const level of LEVELS) {
  const bank = JSON.parse(readFileSync(new URL(`../src/data/level-${level}.json`, import.meta.url), 'utf8'));
  for (const skill of SKILLS) {
    const items = bank[skill] || [];
    check(items.length > 0, `${level}: no exercises for ${skill}`);
    for (const item of items) {
      check(!seen.has(item.id), `${item.id}: id used twice`);
      seen.add(item.id);
      check(item.title && item.photo, `${item.id}: needs a title and a photo`);
      if (skill === 'ascolto') check(item.lines && item.lines.length > 0, `${item.id}: needs lines to read aloud`);
      if (skill === 'lettura') check(item.text && item.text.length > 0, `${item.id}: needs a text`);
      if (item.questions) {
        for (const q of item.questions) {
          check(q.opts.length === 3 && new Set(q.opts).size === 3, `${item.id}: "${q.q}" needs three different options`);
          check(Number.isInteger(q.a) && q.a >= 0 && q.a < q.opts.length, `${item.id}: "${q.q}" has no valid answer`);
          if (skill === 'strutture') check(q.q.includes('___'), `${item.id}: "${q.q}" has no gap`);
        }
      } else {
        check(item.prompt && item.model && item.points.length > 0, `${item.id}: needs a prompt, points and a model`);
        if (skill === 'scrittura') {
          const [min, max] = item.words;
          const n = words(item.model);
          check(n >= min && n <= max, `${item.id}: the model has ${n} words, outside ${min}-${max}`);
        }
      }
    }
  }
}

if (failures) {
  console.error(`\n${failures} check(s) failed.`);
  process.exit(1);
}
console.log(`  ok  ${seen.size} exercises in ${LEVELS.length} level banks`);
