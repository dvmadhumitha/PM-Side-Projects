/*
 * The Allora mark: the word ALLORA laid as letter tiles in one row on a
 * word-game board, the last A still being placed. Drawn in a 120-unit box.
 *
 * Shared by every icon: make-icons.mjs draws the Android, iOS and web sizes
 * from it, so the three platforms always show the same mark.
 *
 * The letters are outlines (Newsreader 600 at optical size 14, as in the web
 * app's headings; points in Hanken Grotesk 700), so drawing needs no fonts.
 */

export const COLORS = {
  green: '#1e6b4f', // the letters: the app's primary green
  top: '#1d3a2b', // the board: the app's deep green (Notte), light at the top
  bottom: '#0f2118', // and darker at the bottom
  felt: '#2a4a39', // an empty square
  terra: '#ee6a3c', // bonus squares and the last A: the app's terracotta and gold, at full strength
  gold: '#f5b82e',
  paper: '#f7f4ec', // a tile, and the app's background
  deep: '#13241b',
};

// Glyph outlines in em units, y pointing down; adv = advance width.
const GLYPHS = {"serif":{"A":{"d":"M0.1891 -0.2257V-0.2959H0.5356V-0.2257ZM0.7086 -0.0614 0.7889 -0.0338V0H0.4682V-0.0338L0.5534 -0.0593L0.3369 -0.592H0.3609L0.158 -0.0597L0.2396 -0.0338V0H-0.0036V-0.0338L0.0754 -0.0593L0.3277 -0.6881H0.4462Z","adv":0.783},"L":{"d":"M0.5941 0.0385H0.5589L0.5025 0H0.191L0.1919 -0.0733H0.5377L0.4831 -0.0423L0.596 -0.2364L0.6411 -0.2322ZM0.2672 -0.622V0H0.0419V-0.0338L0.1224 -0.0603V-0.622L0.0419 -0.6486V-0.6823H0.3477V-0.6486Z","adv":0.658},"O":{"d":"M0.4076 -0.6945Q0.4877 -0.6945 0.5527 -0.6693Q0.6176 -0.6442 0.6641 -0.5978Q0.7105 -0.5513 0.7354 -0.4865Q0.7603 -0.4217 0.7603 -0.3422Q0.7603 -0.2628 0.7343 -0.1977Q0.7082 -0.1327 0.6601 -0.0857Q0.6119 -0.0386 0.5455 -0.0133Q0.479 0.012 0.3976 0.012Q0.3176 0.012 0.2526 -0.0131Q0.1877 -0.0382 0.1412 -0.0846Q0.0948 -0.1311 0.0699 -0.196Q0.045 -0.2609 0.045 -0.3402Q0.045 -0.4196 0.071 -0.4847Q0.0971 -0.5498 0.1452 -0.5968Q0.1934 -0.6438 0.2599 -0.6691Q0.3265 -0.6945 0.4076 -0.6945ZM0.4065 -0.0649Q0.4695 -0.0649 0.515 -0.0937Q0.5605 -0.1224 0.5852 -0.1787Q0.6098 -0.2351 0.6098 -0.3174Q0.6098 -0.4159 0.5842 -0.4826Q0.5586 -0.5493 0.5113 -0.5834Q0.464 -0.6175 0.3988 -0.6175Q0.336 -0.6175 0.2904 -0.5887Q0.2448 -0.56 0.2201 -0.5038Q0.1955 -0.4476 0.1955 -0.365Q0.1955 -0.2669 0.2211 -0.2Q0.2467 -0.1331 0.2941 -0.099Q0.3416 -0.0649 0.4065 -0.0649Z","adv":0.8055},"R":{"d":"M0.3762 -0.3744Q0.4328 -0.3744 0.4668 -0.4036Q0.5008 -0.4328 0.5008 -0.4917Q0.5008 -0.5297 0.4863 -0.5558Q0.4717 -0.5819 0.438 -0.5955Q0.4042 -0.609 0.3469 -0.609H0.1661L0.1785 -0.6823H0.409Q0.4946 -0.6823 0.5464 -0.6599Q0.5982 -0.6375 0.6216 -0.5988Q0.6449 -0.56 0.6449 -0.511Q0.6449 -0.4649 0.6243 -0.4284Q0.6038 -0.392 0.5627 -0.3686Q0.5217 -0.3453 0.4595 -0.3379V-0.3408Q0.5076 -0.3382 0.5349 -0.3264Q0.5622 -0.3145 0.5773 -0.2914Q0.5924 -0.2683 0.6024 -0.2314L0.6365 -0.1173Q0.6457 -0.0853 0.6553 -0.0704Q0.665 -0.0556 0.6794 -0.0517Q0.6938 -0.0478 0.717 -0.0478V0.0007Q0.6515 0.0052 0.6108 0.0035Q0.5701 0.0018 0.5467 -0.0084Q0.5233 -0.0187 0.511 -0.0394Q0.4987 -0.06 0.4903 -0.0935L0.4588 -0.2128Q0.4492 -0.2501 0.4385 -0.2703Q0.4277 -0.2906 0.4098 -0.2986Q0.3918 -0.3065 0.36 -0.3065H0.1764L0.1637 -0.3744ZM0.2672 -0.6823V-0.0603L0.3456 -0.0338V0H0.0419V-0.0338L0.1224 -0.0603V-0.622L0.0419 -0.6486V-0.6823Z","adv":0.7275}},"sans":{"1":{"d":"M0.271 0V-0.49H0.093V-0.588H0.201Q0.235 -0.588 0.253 -0.6035Q0.271 -0.619 0.271 -0.657V-0.697H0.396V0Z","adv":0.56},"3":{"d":"M0.274 0.009Q0.196 0.009 0.138 -0.0195Q0.08 -0.048 0.0475 -0.1Q0.015 -0.152 0.015 -0.221L0.138 -0.228Q0.138 -0.174 0.1765 -0.142Q0.215 -0.11 0.279 -0.11Q0.32 -0.11 0.349 -0.1225Q0.378 -0.135 0.394 -0.1585Q0.41 -0.182 0.41 -0.214Q0.41 -0.242 0.3985 -0.2615Q0.387 -0.281 0.3645 -0.293Q0.342 -0.305 0.3105 -0.3105Q0.279 -0.316 0.239 -0.316V-0.413Q0.268 -0.413 0.292 -0.418Q0.316 -0.423 0.3335 -0.4335Q0.351 -0.444 0.36 -0.4615Q0.369 -0.479 0.369 -0.503Q0.369 -0.53 0.3575 -0.5485Q0.346 -0.567 0.3245 -0.577Q0.303 -0.587 0.273 -0.587Q0.225 -0.587 0.197 -0.561Q0.169 -0.535 0.168 -0.491L0.045 -0.499Q0.045 -0.559 0.075 -0.606Q0.105 -0.653 0.1575 -0.6795Q0.21 -0.706 0.278 -0.706Q0.342 -0.706 0.3905 -0.6815Q0.439 -0.657 0.4665 -0.6145Q0.494 -0.572 0.494 -0.516Q0.494 -0.491 0.4875 -0.4705Q0.481 -0.45 0.4695 -0.4325Q0.458 -0.415 0.442 -0.402Q0.426 -0.389 0.407 -0.379Q0.434 -0.37 0.4575 -0.3545Q0.481 -0.339 0.498 -0.3185Q0.515 -0.298 0.5245 -0.2715Q0.534 -0.245 0.534 -0.213Q0.534 -0.147 0.501 -0.097Q0.468 -0.047 0.41 -0.019Q0.352 0.009 0.274 0.009Z","adv":0.56}}};

const POINTS = { A: 1, L: 3, O: 1, R: 1 };

// The board: 16.5-unit squares, 1.6 apart, the word on the middle row.
const CELL = 16.5;
const GAP = 1.6;
const PITCH = CELL + GAP;
const LEFT = 6.5;
const TOP = 15.55;
const ROW = 2;

// Bonus squares, by (row, column) on the 5 x 6 board.
const BONUS = { '0,0': 'terra', '4,5': 'terra', '0,5': 'gold', '4,0': 'gold', '1,3': 'gold', '3,1': 'terra' };

const n = (v) => +v.toFixed(3);

function glyph(g, x, baseline, size, anchor, fill) {
  const x0 = anchor === 'middle' ? x - (g.adv * size) / 2 : anchor === 'end' ? x - g.adv * size : x;
  return `<path d="${g.d}" transform="translate(${n(x0)} ${n(baseline)}) scale(${n(size)})" fill="${fill}"/>`;
}

function tile(x, y, ch, { face = COLORS.paper, ink = COLORS.green, rot = 0 } = {}) {
  const s = CELL;
  const turn = rot ? ` transform="rotate(${rot} ${n(x + s / 2)} ${n(y + s / 2)})"` : '';
  return (
    `<g${turn}>` +
    `<rect x="${n(x)}" y="${n(y + 1.6)}" width="${s}" height="${s}" rx="2.64" fill="#000" opacity="0.18"/>` +
    `<rect x="${n(x)}" y="${n(y)}" width="${s}" height="${s}" rx="2.64" fill="${face}"/>` +
    glyph(GLYPHS.serif[ch], x + s * 0.45, y + s * 0.74, 13, 'middle', ink) +
    glyph(GLYPHS.sans[String(POINTS[ch])], x + s - 2.6, y + s - 2.4, s * 0.24, 'end', ink) +
    `</g>`
  );
}

function square(r, k) {
  const bonus = BONUS[`${r},${k}`];
  const fill = bonus ? COLORS[bonus] : COLORS.felt;
  return `<rect x="${n(LEFT + k * PITCH)}" y="${n(TOP + r * PITCH)}" width="${CELL}" height="${CELL}" rx="3" fill="${fill}"/>`;
}

/**
 * The board. `edge: 'clean'` is the 5 x 6 board with a margin, as on the icon
 * itself; `edge: 'bleed'` carries the squares on past every edge, for the
 * Android background layer, which each launcher crops to its own shape.
 */
export function board({ edge = 'clean' } = {}) {
  const [r0, r1, k0, k1] = edge === 'bleed' ? [-2, 6, -2, 7] : [0, 4, 0, 5];
  let out = '';
  for (let r = r0; r <= r1; r++) for (let k = k0; k <= k1; k++) out += square(r, k);
  return out;
}

/** The word: A L L O R on the middle row, the last A tilted, being placed. */
export function word() {
  const y = TOP + ROW * PITCH;
  let out = '';
  'ALLOR'.split('').forEach((ch, k) => {
    out += tile(LEFT + k * PITCH, y, ch);
  });
  out += tile(LEFT + 5 * PITCH + 1.5, y - 5, 'A', { face: COLORS.terra, ink: COLORS.paper, rot: 12 });
  return out;
}

/** Scale a drawing about the centre of the 120 box. */
export const scaled = (f, body) => `<g transform="translate(${n(60 - 60 * f)} ${n(60 - 60 * f)}) scale(${f})">${body}</g>`;

/** The green ground, light at the top and darker at the bottom. */
export function ground({ radius = 0 } = {}) {
  return (
    `<defs><linearGradient id="allora-ground" x1="0" y1="0" x2="0" y2="1">` +
    `<stop offset="0" stop-color="${COLORS.top}"/><stop offset="1" stop-color="${COLORS.bottom}"/></linearGradient></defs>` +
    `<rect width="120" height="120" rx="${radius}" fill="url(#allora-ground)"/>`
  );
}

/**
 * The whole mark in a 120 box: green ground, board, word.
 * `radius` rounds the corners (the web icon); iOS and Android round their own.
 */
export function mark({ radius = 0 } = {}) {
  return ground({ radius }) + board() + word();
}

/** A complete SVG file of `size` pixels drawing `body` in the 120 box. */
export const svgFile = (size, body, viewBox = '0 0 120 120') =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${viewBox}">${body}</svg>`;
