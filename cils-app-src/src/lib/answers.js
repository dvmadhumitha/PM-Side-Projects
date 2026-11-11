// Checking a typed sentence against a model answer.

// Capitals and . , ! ? never count, and neither does extra spacing.
const plain = (text) =>
  String(text || '')
    .toLowerCase()
    .replace(/[.,!?]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

/*
 * A model answer such as "sono andato/a al comune" means either ending is
 * right: this returns every sentence it stands for ("sono andato al comune",
 * "sono andata al comune").
 */
export function modelVariants(model) {
  const ending = /([a-zà-ù]+)([oi])\/([ae])(?![a-zà-ù])/i;
  let variants = [String(model || '')];
  while (variants.some((v) => ending.test(v))) {
    variants = variants.flatMap((v) => (ending.test(v) ? [v.replace(ending, '$1$2'), v.replace(ending, '$1$3')] : [v]));
  }
  return variants.map(plain);
}

/*
 * True when the learner typed the model answer, on its own or inside a fuller
 * sentence ("Ieri sono andata al comune" is fine for "sono andato/a al comune").
 *
 * The app used to test the other way round (is what was typed a part of the
 * model?), which passed a single letter and failed a correct full sentence
 * whenever the model was written with "o/a".
 */
export function matchesModelAnswer(typed, model) {
  const answer = plain(typed);
  if (!answer) return false;
  return modelVariants(model).some((variant) => answer === variant || answer.includes(variant));
}
