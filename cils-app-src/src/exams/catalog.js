/*
 * The exams the app prepares for, and what each one is made of.
 *
 * Adding an exam, or a level of one, is a new entry here: the picker, the
 * Prove tab and the practice screens are all drawn from this table. The
 * exercises themselves come from the level banks in src/data/level-*.json,
 * which are shared by every exam at that level: a paper names the bank
 * section (`skill`) it draws from.
 *
 * Facts (number of tasks, minutes, pass rule, word counts) are only stated
 * where the exam body's own published specification gives them. Sources:
 *   CILS   Linee guida and "Istruzioni per lo svolgimento delle prove", Università per Stranieri di Siena
 *   CELI   "Descrizione della prova" and "Criteri di valutazione e punteggi", Università per Stranieri di Perugia
 *   PLIDA  "Quaderno delle specifiche" and sample papers, Società Dante Alighieri
 */

const img = (name) => `${import.meta.env.BASE_URL}img/scenes/${name}.jpg`;

const PHOTO = {
  ascolto: img('stazione'),
  lettura: img('biblioteca'),
  strutture: img('classe'),
  scrittura: img('ufficio'),
  orale: img('bar'),
};

const paper = (id, skill, title, en, detail, extra = {}) => ({ id, skill, title, en, detail, photo: PHOTO[skill], ...extra });

/* ---------- CILS: five papers, each one passed on its own ---------- */

const cilsPapers = (d, words) => [
  paper('ascolto', 'ascolto', 'Ascolto', 'Listening', d[0]),
  paper('lettura', 'lettura', 'Lettura', 'Reading', d[1]),
  paper('analisi', 'strutture', 'Analisi', 'Structures', d[2]),
  paper('scrittura', 'scrittura', 'Scrittura', 'Writing', d[3], { words }),
  paper('orale', 'orale', 'Orale', 'Speaking', d[4]),
];

const CILS = {
  id: 'cils',
  name: 'CILS',
  body: 'Università per Stranieri di Siena',
  summary: '5 prove · soglia in ogni abilità',
  levels: {
    A1: {
      label: 'CILS A1',
      written: 'Scritto: 2 ore',
      heading: 'Le cinque prove',
      pass: 'Almeno 7 punti su 12 in ognuna delle cinque abilità',
      papers: cilsPapers(['30 min', '30 min', '30 min', '30 min', 'circa 10 min']),
    },
    A2: {
      label: 'CILS A2',
      written: 'Scritto: 2 ore e 30',
      // The original app: its own screens, coach, exam series and practice tests.
      legacy: true,
    },
    B1: {
      label: 'CILS UNO-B1',
      written: 'Scritto: 3 ore e 30',
      heading: 'Le cinque prove',
      pass: 'Devi superare ognuna delle cinque abilità',
      papers: cilsPapers(
        ['3 prove · 30 min', '3 prove · 50 min', '4 prove · 1 ora', '2 prove · 1 ora e 10', '2 prove · circa 10 min'],
        [
          [100, 120],
          [50, 80],
        ],
      ),
    },
    B2: {
      label: 'CILS DUE-B2',
      written: 'Scritto: 3 ore e 30',
      heading: 'Le cinque prove',
      pass: 'Devi superare ognuna delle cinque abilità',
      papers: cilsPapers(
        ['3 prove · 30 min', '3 prove · 50 min', '4 prove · 1 ora', '2 prove · 1 ora e 10', '2 prove · circa 10 min'],
        [
          [120, 140],
          [80, 100],
        ],
      ),
    },
  },
};

/* ---------- CELI: written booklets plus an oral, passed on the totals ---------- */

const celiPapers = (d) => [
  paper('lettura', 'lettura', 'Parte A · Lettura', 'Reading', d[0]),
  paper('scrittura', 'scrittura', 'Parte B · Scrittura', 'Writing', d[1]),
  paper('ascolto', 'ascolto', 'Parte C · Ascolto', 'Listening', d[2]),
  paper('orale', 'orale', 'Prova orale', 'Speaking', d[3]),
];

const CELI = {
  id: 'celi',
  name: 'CELI',
  body: 'Università per Stranieri di Perugia',
  summary: 'Scritto + orale · punteggio totale',
  levels: {
    A1: {
      label: 'CELI Impatto · A1',
      heading: 'Le quattro parti',
      pass: 'Conta il totale dello scritto e il totale dell’orale',
      papers: celiPapers(['Fascicolo scritto', 'Fascicolo scritto', 'Fascicolo scritto', 'Conversazione con l’esaminatore']),
    },
    A2: {
      label: 'CELI 1 · A2',
      heading: 'Le quattro parti',
      pass: 'Conta il totale dello scritto e il totale dell’orale',
      papers: celiPapers(['2 ore insieme alla Parte B', '2 ore insieme alla Parte A', '20 min', '10 min']),
    },
    B1: {
      label: 'CELI 2 · B1',
      heading: 'Le quattro parti',
      pass: '72 su 120 allo scritto e 22 su 40 all’orale',
      papers: celiPapers(['Fascicolo 1, con la Parte B', 'Fascicolo 1, con la Parte A', 'Fascicolo 2', 'Conversazione con l’esaminatore']),
    },
    B2: {
      label: 'CELI 3 · B2',
      heading: 'Le cinque parti',
      pass: 'Scritto su 140 punti, orale su 60: conta il totale',
      papers: [
        paper('lettura', 'lettura', 'Parte A · Lettura', 'Reading', 'Fascicolo 1, con la Parte B'),
        paper('scrittura', 'scrittura', 'Parte B · Scrittura', 'Writing', 'Fascicolo 1, con la Parte A'),
        paper('competenza', 'strutture', 'Parte C · Competenza linguistica', 'Use of Italian', 'Fascicolo 2'),
        paper('ascolto', 'ascolto', 'Parte D · Ascolto', 'Listening', 'Fascicolo 3'),
        paper('orale', 'orale', 'Prova orale', 'Speaking', 'Conversazione con l’esaminatore'),
      ],
    },
  },
};

/* ---------- PLIDA: four skills, 18 out of 30 in each ---------- */

const plidaPapers = (d, words) => [
  paper('ascoltare', 'ascolto', 'Ascoltare', 'Listening', d[0]),
  paper('leggere', 'lettura', 'Leggere', 'Reading', d[1]),
  paper('scrivere', 'scrittura', 'Scrivere', 'Writing', d[2], { words }),
  paper('parlare', 'orale', 'Parlare', 'Speaking', d[3]),
];

const PLIDA_PASS = '18 su 30 in ognuna delle quattro abilità';
const PLIDA_BASE = ['Risposte chiuse', 'Risposte chiuse', 'Testi brevi su traccia', 'Con l’intervistatore'];

const PLIDA = {
  id: 'plida',
  name: 'PLIDA',
  body: 'Società Dante Alighieri',
  summary: '4 abilità · 18 su 30 in ognuna',
  levels: {
    A1: { label: 'PLIDA A1', heading: 'Le quattro abilità', pass: PLIDA_PASS, papers: plidaPapers(PLIDA_BASE) },
    A2: { label: 'PLIDA A2', heading: 'Le quattro abilità', pass: PLIDA_PASS, papers: plidaPapers(PLIDA_BASE) },
    B1: {
      label: 'PLIDA B1',
      heading: 'Le quattro abilità',
      pass: PLIDA_PASS,
      papers: plidaPapers(
        ['4 parti · 20 domande · circa 40 min', '4 parti · risposte chiuse', '2 parti · minimo di parole in ognuna', 'Presentazione, interazione, monologo'],
        [[110, 150]],
      ),
    },
    B2: {
      label: 'PLIDA B2',
      heading: 'Le quattro abilità',
      pass: PLIDA_PASS,
      papers: plidaPapers(['4 parti · 18 domande · 50 min', '4 parti · 15 domande · 1 ora e 10', 'Testi su traccia', 'Con l’intervistatore']),
    },
  },
};

export const EXAMS = [CILS, CELI, PLIDA];
export const EXAM_BY_ID = Object.fromEntries(EXAMS.map((e) => [e.id, e]));
export const LEVELS = ['A1', 'A2', 'B1', 'B2'];

// What a new installation starts from, and what an unreadable saved choice falls back to.
export const DEFAULT_CHOICE = { exam: 'cils', level: 'A2' };

// The saved choice, checked against the table (an old or hand-edited value must not break the app).
export function resolveChoice(choice) {
  const exam = choice && EXAM_BY_ID[choice.exam];
  const level = exam && exam.levels[choice.level];
  if (!level) return { ...DEFAULT_CHOICE, examInfo: CILS, spec: CILS.levels.A2 };
  return { exam: exam.id, level: choice.level, examInfo: exam, spec: level };
}

export function choiceLabel(choice) {
  const exam = EXAM_BY_ID[choice.exam] || CILS;
  return `${exam.name} · ${choice.level}`;
}
