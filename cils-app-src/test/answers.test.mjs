// Checks the typed-answer comparison.  Run with: npm test
import assert from 'node:assert/strict';
import { matchesModelAnswer, modelVariants } from '../src/lib/answers.js';

const cases = [
  // [typed, model, expected, why]
  ['sono andato al comune', 'sono andato/a al comune', true, 'masculine ending'],
  ['sono andata al comune', 'sono andato/a al comune', true, 'feminine ending'],
  ['Ieri sono andata al comune.', 'sono andato/a al comune', true, 'fuller sentence, capitals and full stop'],
  ['s', 'sono andato/a al comune', false, 'a single letter used to pass'],
  ['sono', 'sono andato/a al comune', false, 'a fragment used to pass'],
  ['', 'ho mangiato la pizza', false, 'empty answer'],
  ['Ho mangiato  la pizza!', 'ho mangiato la pizza', true, 'spacing and punctuation'],
  ['ho mangiato la pasta', 'ho mangiato la pizza', false, 'wrong word'],
  ['mi sono trasferita in Italia', 'mi sono trasferito/a in Italia', true, 'second example of o/a'],
  ["ho preso l'autobus", "ho preso l'autobus", true, 'apostrophe kept'],
];

let failed = 0;
for (const [typed, model, expected, why] of cases) {
  try {
    assert.equal(matchesModelAnswer(typed, model), expected);
    console.log(`  ok  ${why}`);
  } catch {
    failed++;
    console.log(`FAIL  ${why}: "${typed}" against "${model}" should be ${expected}`);
  }
}

assert.deepEqual(modelVariants('sono uscito/a'), ['sono uscito', 'sono uscita']);
console.log(failed ? `\n${failed} failed.` : `\nAll ${cases.length} checks passed.`);
process.exit(failed ? 1 : 0);
