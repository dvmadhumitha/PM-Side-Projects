// The map of the app: which photo, words and bottom tab belong to each screen.
// Screen ids are the same #hash names the app has always used, so old links work.

const img = (path) => `${import.meta.env.BASE_URL}img/${path}`;

export const PHOTOS = {
  stazione: img('scenes/stazione.jpg'),
  biblioteca: img('scenes/biblioteca.jpg'),
  ufficio: img('scenes/ufficio.jpg'),
  bar: img('scenes/bar.jpg'),
  classe: img('scenes/classe.jpg'),
  medico: img('scenes/medico.jpg'),
  strada: img('scenes/strada.jpg'),
  parco: img('scenes/parco.jpg'),
  supermercato: img('scenes/supermercato.jpg'),
  toscana: img('regions/toscana.jpg'),
};

// The four exam papers, plus grammar and the exam itself: the "Prove" tab.
export const PROVE = [
  {
    id: 'ascolto',
    title: 'Ascolto',
    en: 'Listening',
    photo: PHOTOS.stazione,
    blurb: 'Come all’esame: ascolti un dialogo, un annuncio o un messaggio, poi rispondi.',
  },
  {
    id: 'lettura',
    title: 'Lettura',
    en: 'Reading',
    photo: PHOTOS.biblioteca,
    blurb: 'Tre tipi di esercizio, come all’esame CILS A2.',
  },
  {
    id: 'scrittura',
    title: 'Scrittura',
    en: 'Writing',
    photo: PHOTOS.ufficio,
    blurb: 'Produzione scritta A2: dalla semplicità alla fluidità.',
  },
  {
    id: 'orale',
    title: 'Orale',
    en: 'Speaking',
    photo: PHOTOS.bar,
    blurb: 'Dalla presentazione alla conversazione spontanea.',
  },
  {
    id: 'grammatica',
    title: 'Grammatica',
    en: 'Grammar',
    photo: PHOTOS.classe,
    blurb: 'La grammatica che serve per il CILS A2, un tema alla volta.',
  },
  {
    id: 'esame',
    title: 'Esame',
    en: 'Exam practice',
    photo: PHOTOS.strada,
    blurb: 'La serie d’esame in tre giorni, l’esame quotidiano e i test completi.',
  },
];

export const PROVE_BY_ID = Object.fromEntries(PROVE.map((p) => [p.id, p]));

// Where the coach's suggestions point, so the home card can show the right photo.
export const TARGET_SECTION = {
  writing: 'scrittura',
  speaking: 'orale',
  ascoltop: 'ascolto',
  dialogues: 'ascolto',
  shadow: 'ascolto',
  esaminatore: 'orale',
  reading: 'lettura',
  exercises: 'grammatica',
  daily: 'esame',
  serie: 'esame',
  exam: 'esame',
};

// Which bottom tab is lit for a given screen.
export function tabFor(route) {
  if (route === 'home') return 'home';
  if (route === 'progressi') return 'progressi';
  if (route === 'explore') return 'explore';
  if (route === 'vocabolario' || route === 'dict' || route === 'ref') return 'vocabolario';
  return 'prove';
}
