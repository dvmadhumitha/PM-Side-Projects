/*
 * ASCOLTO: the app's own code, recovered from the compiled build in November 2026.
 *
 * The original source was lost, so this file was rebuilt from the published
 * bundle: library code was replaced by normal imports, every content table was
 * moved to src/data/*.json, and the rest was reformatted. Behaviour is unchanged.
 * Names are still the short ones the minifier chose; rename as you touch things.
 */
import * as S from 'react';
import * as w from 'react/jsx-runtime';
import * as C from 'react-dom/client';
import dailyExamClozeData from './data/daily-exam-cloze.json';
import dailyExamListeningData from './data/daily-exam-listening.json';
import dailyExamReadingData from './data/daily-exam-reading.json';
import dailyExamWritingData from './data/daily-exam-writing.json';
import dialoguesData from './data/dialogues.json';
import examSectionsData from './data/exam-sections.json';
import examSeriesData from './data/exam-series.json';
import examinerScenariosData from './data/examiner-scenarios.json';
import flashcardDecksData from './data/flashcard-decks.json';
import grammarExercisesData from './data/grammar-exercises.json';
import grammarGroupsData from './data/grammar-groups.json';
import grammarTopicColorsData from './data/grammar-topic-colors.json';
import listeningPracticeData from './data/listening-practice.json';
import photoObjectLabelsData from './data/photo-object-labels.json';
import phraseBannersData from './data/phrase-banners.json';
import phrasesBySituationData from './data/phrases-by-situation.json';
import phrasesByTenseData from './data/phrases-by-tense.json';
import practiceTest1ClozeData from './data/practice-test-1-cloze.json';
import practiceTest1ListeningDialoguesData from './data/practice-test-1-listening-dialogues.json';
import practiceTest1ListeningStatementsData from './data/practice-test-1-listening-statements.json';
import practiceTest1MatchingData from './data/practice-test-1-matching.json';
import practiceTest1SpeakingData from './data/practice-test-1-speaking.json';
import practiceTest1WritingModelsData from './data/practice-test-1-writing-models.json';
import practiceTest2ClozeData from './data/practice-test-2-cloze.json';
import practiceTest2ListeningDialoguesData from './data/practice-test-2-listening-dialogues.json';
import practiceTest2ListeningStatementsData from './data/practice-test-2-listening-statements.json';
import practiceTest2MatchingData from './data/practice-test-2-matching.json';
import practiceTest2WritingModelsData from './data/practice-test-2-writing-models.json';
import practiceTest3ClozeData from './data/practice-test-3-cloze.json';
import practiceTest3ListeningDialoguesData from './data/practice-test-3-listening-dialogues.json';
import practiceTest3ListeningStatementsData from './data/practice-test-3-listening-statements.json';
import practiceTest3MatchingData from './data/practice-test-3-matching.json';
import practiceTest3WritingModelsData from './data/practice-test-3-writing-models.json';
import practiceTest4ClozeData from './data/practice-test-4-cloze.json';
import practiceTest4ListeningDialoguesData from './data/practice-test-4-listening-dialogues.json';
import practiceTest4ListeningStatementsData from './data/practice-test-4-listening-statements.json';
import practiceTest4MatchingData from './data/practice-test-4-matching.json';
import practiceTest4WritingMessagesData from './data/practice-test-4-writing-messages.json';
import practiceTest4WritingModelsData from './data/practice-test-4-writing-models.json';
import prepositionsArticulatedExamplesData from './data/prepositions-articulated-examples.json';
import prepositionsPictureQuizData from './data/prepositions-picture-quiz.json';
import prepositionsQuizData from './data/prepositions-quiz.json';
import prepositionsRulesData from './data/prepositions-rules.json';
import prepositionsScenesData from './data/prepositions-scenes.json';
import readingExercisesData from './data/reading-exercises.json';
import regionPhotosData from './data/region-photos.json';
import regionStoriesData from './data/region-stories.json';
import regionsData from './data/regions.json';
import routeMapData from './data/route-map.json';
import shadowingSetsData from './data/shadowing-sets.json';
import speakingTasksData from './data/speaking-tasks.json';
import tensesQuizFutureData from './data/tenses-quiz-future.json';
import tensesQuizPastData from './data/tenses-quiz-past.json';
import tensesRulesData from './data/tenses-rules.json';
import translationSetsData from './data/translation-sets.json';
import visualDictionaryScenesData from './data/visual-dictionary-scenes.json';
import vocabImagesData from './data/vocab-images.json';
import writingTasksData from './data/writing-tasks.json';

// Small module helpers the bundler generated; a few are still used below.
var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (e && (t = e((e = 0))), t),
  s = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), (e = null)), t.exports),
  c = (e, n) => {
    let r = {};
    for (var i in e) t(r, i, { get: e[i], enumerable: !0 });
    return (n || t(r, Symbol.toStringTag, { value: `Module` }), r);
  },
  l = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, { get: ((e) => i[e]).bind(null, d), enumerable: !(s = n(i, d)) || s.enumerable }));
    return e;
  },
  u = (n, r, a) => (
    (a = n == null ? {} : e(i(n))),
    l(r || !n || !n.__esModule ? t(a, `default`, { value: n, enumerable: !0 }) : a, n)
  ),
  d = (e) => (a.call(e, `module.exports`) ? e[`module.exports`] : l(t({}, `__esModule`, { value: !0 }), e));

var T = c({
    CLOZE: () => D,
    L1: () => ee,
    L2: () => E,
    MATCH: () => te,
    PARK_SVG: () => ne,
    SPEAK: () => ae,
    WRITE_MODELS: () => ie,
    WRITE_MSGS: () => re,
    spokenL1: () => oe,
  }),
  ee = practiceTest1ListeningDialoguesData,
  E = practiceTest1ListeningStatementsData,
  D = practiceTest1ClozeData,
  te = practiceTest1MatchingData,
  ne = `<svg viewBox="0 0 600 230" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Un parco con il sole, una panchina, due persone, un bambino con la palla, un cane e un albero">
<rect width="600" height="230" fill="#dff0ff"/><rect y="150" width="600" height="80" fill="#bfe39a"/>
<circle cx="540" cy="42" r="26" fill="#ffd23f"/>
<g><rect x="92" y="60" width="14" height="92" fill="#7a5230"/><circle cx="99" cy="58" r="42" fill="#4e9c4e"/><circle cx="70" cy="74" r="30" fill="#4e9c4e"/><circle cx="128" cy="74" r="30" fill="#4e9c4e"/></g>
<g><rect x="250" y="120" width="120" height="10" rx="3" fill="#9c6b3f"/><rect x="256" y="130" width="8" height="26" fill="#9c6b3f"/><rect x="356" y="130" width="8" height="26" fill="#9c6b3f"/><rect x="250" y="108" width="120" height="9" rx="3" fill="#b07c4c"/></g>
<g><circle cx="285" cy="92" r="11" fill="#f0c39a"/><rect x="277" y="103" width="16" height="22" rx="5" fill="#c0504d"/></g>
<g><circle cx="335" cy="92" r="11" fill="#f0c39a"/><rect x="327" y="103" width="16" height="22" rx="5" fill="#4a73a8"/></g>
<g><circle cx="455" cy="120" r="9" fill="#f0c39a"/><rect x="449" y="129" width="12" height="20" rx="4" fill="#3f9d6b"/><circle cx="487" cy="150" r="11" fill="#ef8a3c"/></g>
<g><ellipse cx="150" cy="190" rx="22" ry="11" fill="#6b4a2f"/><circle cx="128" cy="184" r="8" fill="#6b4a2f"/><rect x="140" y="196" width="4" height="10" fill="#6b4a2f"/><rect x="158" y="196" width="4" height="10" fill="#6b4a2f"/></g>
</svg>`,
  re = [
    `Ciao! Domani è il mio compleanno e faccio una piccola festa a casa mia. Vuoi venire?`,
    `Buongiorno, sono il suo vicino di casa. Domani aspetto un pacco ma non ci sono. Può ritirarlo lei, per favore?`,
    `Ciao, oggi non sto bene e non vengo al corso d’italiano. Puoi dirmi che cosa avete fatto a lezione?`,
  ],
  ie = practiceTest1WritingModelsData,
  ae = practiceTest1SpeakingData,
  oe = (e) => e.script.map((e) => e[1]),
  se = [];
function O() {
  typeof window < `u` && window.speechSynthesis && (se = window.speechSynthesis.getVoices() || []);
}
typeof window < `u` && window.speechSynthesis && (O(), (window.speechSynthesis.onvoiceschanged = O));
function k() {
  return typeof window < `u` && `speechSynthesis` in window;
}
function ce(e) {
  let t = e.name.toLowerCase();
  return t.includes(`google`)
    ? 5
    : t.includes(`premium`) || t.includes(`enhanced`) || t.includes(`natural`)
      ? 4
      : t.includes(`alice`) || t.includes(`federica`) || t.includes(`emma`)
        ? 3
        : t.includes(`luca`) || t.includes(`paola`)
          ? 2
          : 1;
}
function le() {
  return (O(), se.filter((e) => /^it([-_]|$)/i.test(e.lang)).sort((e, t) => ce(t) - ce(e)));
}
function ue() {
  return le()[0] || null;
}
function de() {
  let e = le();
  if (e.length >= 2) {
    let t = e.find((e) => /alice|federica|elsa|paola|emma|female|donna/i.test(e.name)),
      n = e.find((e) => /luca|diego|cosimo|male|uomo/i.test(e.name));
    return t && n
      ? [
          { voice: t, pitch: 1.06 },
          { voice: n, pitch: 0.94 },
        ]
      : [
          { voice: e[0], pitch: 1.05 },
          { voice: e[1], pitch: 0.92 },
        ];
  }
  let t = e[0] || null;
  return [
    { voice: t, pitch: 1.08 },
    { voice: t, pitch: 0.86 },
  ];
}
function fe() {
  return !!ue();
}
function A(e) {
  return new Promise((t) => setTimeout(t, e));
}
var pe = 0.92;
function me(e) {
  pe = e;
}
function he() {
  return pe;
}
function j(e, { rate: t, pitch: n = 1, voice: r } = {}) {
  let i = t ?? pe;
  return new Promise((t) => {
    if (!k()) {
      t();
      return;
    }
    let a = new SpeechSynthesisUtterance(e);
    ((a.lang = `it-IT`), (a.rate = i), (a.pitch = n));
    let o = r ?? ue();
    (o && (a.voice = o), (a.onend = () => t()), (a.onerror = () => t()), window.speechSynthesis.speak(a));
  });
}
var ge = 0;
function _e() {
  return ge;
}
async function ve(e, { rate: t, gap: n = 350 } = {}) {
  t ??= pe;
  let r = ge;
  for (let i of e) {
    if (r !== ge || (await j(i, { rate: t }), r !== ge)) return;
    await A(n);
  }
}
function M() {
  (ge++, k() && window.speechSynthesis.cancel());
}
function ye() {
  return typeof window < `u` && (`SpeechRecognition` in window || `webkitSpeechRecognition` in window);
}
function be({ lang: e = `it-IT`, onUpdate: t, onEnd: n } = {}) {
  let r = typeof window < `u` ? window.SpeechRecognition || window.webkitSpeechRecognition : null;
  if (!r) return null;
  let i = new r();
  ((i.lang = e), (i.continuous = !0), (i.interimResults = !0));
  let a = ``;
  return (
    (i.onresult = (e) => {
      let n = ``;
      for (let t = e.resultIndex; t < e.results.length; t++) {
        let r = e.results[t][0].transcript;
        e.results[t].isFinal ? (a += r + ` `) : (n += r);
      }
      t && t((a + n).trim());
    }),
    (i.onerror = () => {}),
    (i.onend = () => n && n(a.trim())),
    {
      start: () => {
        a = ``;
        try {
          i.start();
        } catch {}
      },
      stop: () => {
        try {
          i.stop();
        } catch {}
      },
    }
  );
}
var xe = `ABC`;
function Se({ ans: e, setAns: t, mode: n = `practice`, graded: r = !1, testData: i }) {
  let { L1: a, L2: o, spokenL1: s } = i || T,
    c = n === `exam`,
    [l, u] = (0, S.useState)(!1),
    [d, f] = (0, S.useState)(!1),
    [p, m] = (0, S.useState)({}),
    [h, g] = (0, S.useState)(-1),
    _ = (e, n) => t((t) => ({ ...t, L1: { ...t.L1, [e]: n } })),
    v = (e, n) => t((t) => ({ ...t, L2: { ...t.L2, [e]: n } })),
    y = (e) => m((t) => ({ ...t, [e]: !t[e] }));
  async function b(e, t = !0) {
    if (!k() || l) return;
    let n = _e();
    (u(!0), await ve(e), t && n === _e() && (await A(700), n === _e() && (await ve(e))), u(!1));
  }
  async function x() {
    if (!k() || d) return;
    let e = _e(),
      t = () => e === _e();
    (f(!0), u(!0), await j(`Test di ascolto. Prima parte.`), await A(500));
    for (
      let e = 0;
      e < a.length &&
      t() &&
      (g(e), await j(`Numero ` + (e + 1) + `.`), await A(300), !(!t() || (await ve(s(a[e])), await A(700), !t())));
      e++
    )
      (await ve(s(a[e])), await A(900));
    t() && (await j(`Seconda parte.`), await A(500));
    for (
      let e = 0;
      e < o.length &&
      t() &&
      (g(6 + e),
      await j(`Numero ` + (e + 7) + `.`),
      await A(300),
      !(!t() || (await j(o[e].script), await A(600), !t())));
      e++
    )
      (await j(o[e].script), await A(900));
    (g(-1), u(!1));
  }
  let C = k() && !fe();
  return (0, w.jsxs)(`section`, {
    className: `card`,
    children: [
      (0, w.jsxs)(`h2`, {
        className: `sec-h`,
        children: [
          (0, w.jsx)(`span`, { className: `sec-n`, children: `1` }),
          `Ascolto · Listening`,
          (0, w.jsx)(`span`, { className: `sec-pts`, children: `12 pts` }),
        ],
      }),
      c
        ? (0, w.jsxs)(`div`, {
            className: `audio-bar`,
            children: [
              (0, w.jsx)(`button`, {
                className: `btn play`,
                disabled: d,
                onClick: x,
                children: d ? (l ? `Riproduzione in corso…` : `Audio terminato`) : `Inizia l’ascolto`,
              }),
              (0, w.jsx)(`span`, {
                className: `hint`,
                children: `You hear each text twice. The transcript stays hidden — listen and answer.`,
              }),
            ],
          })
        : (0, w.jsx)(`p`, {
            className: `instr`,
            children: `Part 1: listen and choose A, B or C. Part 2: true (Vero) or false (Falso). Tap the speaker buttons to play each text.`,
          }),
      !k() &&
        (0, w.jsx)(`p`, {
          className: `warn`,
          children: `This device can’t play audio. Read the transcripts instead.`,
        }),
      C &&
        (0, w.jsx)(`p`, {
          className: `warn`,
          children: `No Italian voice found on this device — audio will use the default voice. You can add an Italian voice in the system settings.`,
        }),
      (0, w.jsx)(`div`, { className: `sub-h`, children: `Parte 1 — dialoghi (A / B / C)` }),
      a.map((t, n) => {
        let i = !c && (p[`L1_` + n] || r);
        return (0, w.jsxs)(
          `div`,
          {
            className: `q` + (c && h === n ? ` active` : ``),
            children: [
              (0, w.jsxs)(`div`, {
                className: `q-top`,
                children: [
                  (0, w.jsx)(`span`, { className: `q-num`, children: n + 1 }),
                  !c &&
                    (0, w.jsxs)(`div`, {
                      className: `q-controls`,
                      children: [
                        (0, w.jsx)(`button`, {
                          className: `icon-play`,
                          disabled: l,
                          onClick: () => b(s(t), !1),
                          title: `Play once`,
                          'aria-label': `Play once`,
                          children: (0, w.jsxs)(`svg`, {
                            width: `14`,
                            height: `14`,
                            viewBox: `0 0 24 24`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: `1.8`,
                            children: [
                              (0, w.jsx)(`polygon`, { points: `11 5 6 9 2 9 2 15 6 15 11 19 11 5` }),
                              (0, w.jsx)(`path`, { d: `M15.54 8.46a5 5 0 0 1 0 7.07` }),
                            ],
                          }),
                        }),
                        (0, w.jsx)(`button`, {
                          className: `icon-play`,
                          disabled: l,
                          onClick: () => b(s(t), !0),
                          title: `Play twice`,
                          'aria-label': `Play twice`,
                          children: (0, w.jsxs)(`svg`, {
                            width: `14`,
                            height: `14`,
                            viewBox: `0 0 24 24`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: `1.8`,
                            children: [
                              (0, w.jsx)(`polygon`, { points: `11 5 6 9 2 9 2 15 6 15 11 19 11 5` }),
                              (0, w.jsx)(`path`, { d: `M15.54 8.46a5 5 0 0 1 0 7.07` }),
                              (0, w.jsx)(`path`, { d: `M19.07 4.93a10 10 0 0 1 0 14.14` }),
                            ],
                          }),
                        }),
                        (0, w.jsx)(`button`, {
                          className: `mini ghost`,
                          onClick: () => y(`L1_` + n),
                          children: i ? `hide text` : `show text`,
                        }),
                      ],
                    }),
                ],
              }),
              i &&
                (0, w.jsx)(`div`, {
                  className: `script`,
                  children: t.script.map((e, t) =>
                    (0, w.jsxs)(
                      `div`,
                      { children: [(0, w.jsx)(`span`, { className: `sp`, children: e[0] }), ` `, e[1]] },
                      t,
                    ),
                  ),
                }),
              (0, w.jsx)(`div`, { className: `ask`, children: t.ask }),
              (0, w.jsx)(`div`, {
                className: `opts`,
                children: t.opts.map((i, a) => {
                  let o = String(e.L1[n]) === String(a),
                    s = `opt`;
                  return (
                    r && a === t.a && (s += ` correct`),
                    r && o && a !== t.a && (s += ` wrong`),
                    (0, w.jsxs)(
                      `label`,
                      {
                        className: s,
                        children: [
                          (0, w.jsx)(`input`, {
                            type: `radio`,
                            name: `L1_` + n,
                            checked: o,
                            onChange: () => _(n, a),
                            disabled: r,
                          }),
                          (0, w.jsxs)(`span`, { children: [(0, w.jsxs)(`b`, { children: [xe[a], `)`] }), ` `, i] }),
                        ],
                      },
                      a,
                    )
                  );
                }),
              }),
              r &&
                (0, w.jsx)(`div`, {
                  className: `ans ` + (e.L1[n] != null && Number(e.L1[n]) === t.a ? `ok` : `no`),
                  children:
                    e.L1[n] != null && Number(e.L1[n]) === t.a
                      ? `✓ Corretto`
                      : `✗ Risposta giusta: ${xe[t.a]}) ${t.opts[t.a]}`,
                }),
            ],
          },
          `L1` + n,
        );
      }),
      (0, w.jsx)(`div`, { className: `sub-h`, children: `Parte 2 — annunci` }),
      o.map((t, n) => {
        let i = !c && (p[`L2_` + n] || r),
          a = Array.isArray(t.opts);
        return (0, w.jsxs)(
          `div`,
          {
            className: `q` + (c && h === 6 + n ? ` active` : ``),
            children: [
              (0, w.jsxs)(`div`, {
                className: `q-top`,
                children: [
                  (0, w.jsx)(`span`, { className: `q-num`, children: n + 7 }),
                  !c &&
                    (0, w.jsxs)(`div`, {
                      className: `q-controls`,
                      children: [
                        (0, w.jsx)(`button`, {
                          className: `icon-play`,
                          disabled: l,
                          onClick: () => b([t.script], !1),
                          title: `Play`,
                          'aria-label': `Play`,
                          children: (0, w.jsxs)(`svg`, {
                            width: `14`,
                            height: `14`,
                            viewBox: `0 0 24 24`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: `1.8`,
                            children: [
                              (0, w.jsx)(`polygon`, { points: `11 5 6 9 2 9 2 15 6 15 11 19 11 5` }),
                              (0, w.jsx)(`path`, { d: `M15.54 8.46a5 5 0 0 1 0 7.07` }),
                            ],
                          }),
                        }),
                        (0, w.jsx)(`button`, {
                          className: `mini ghost`,
                          onClick: () => y(`L2_` + n),
                          children: i ? `hide text` : `show text`,
                        }),
                      ],
                    }),
                ],
              }),
              i && (0, w.jsx)(`div`, { className: `script`, children: t.script }),
              a
                ? (0, w.jsxs)(w.Fragment, {
                    children: [
                      (0, w.jsx)(`div`, { className: `ask`, children: t.st }),
                      (0, w.jsx)(`div`, {
                        className: `opts`,
                        children: t.opts.map((i, a) => {
                          let o = String(e.L2[n]) === String(a),
                            s = `opt`;
                          return (
                            r && a === t.a && (s += ` correct`),
                            r && o && a !== t.a && (s += ` wrong`),
                            (0, w.jsxs)(
                              `label`,
                              {
                                className: s,
                                children: [
                                  (0, w.jsx)(`input`, {
                                    type: `radio`,
                                    name: `L2_` + n,
                                    checked: o,
                                    onChange: () => v(n, a),
                                    disabled: r,
                                  }),
                                  (0, w.jsx)(`span`, { children: i }),
                                ],
                              },
                              a,
                            )
                          );
                        }),
                      }),
                      r &&
                        (0, w.jsx)(`div`, {
                          className: `ans ` + (e.L2[n] != null && Number(e.L2[n]) === t.a ? `ok` : `no`),
                          children:
                            e.L2[n] != null && Number(e.L2[n]) === t.a
                              ? `✓ Corretto`
                              : `✗ Risposta giusta: ${t.opts[t.a]}`,
                        }),
                    ],
                  })
                : (0, w.jsxs)(w.Fragment, {
                    children: [
                      (0, w.jsx)(`div`, { className: `ask`, children: t.st }),
                      (0, w.jsx)(`div`, {
                        className: `opts vf`,
                        children: [
                          [`true`, `V`, `Vero`],
                          [`false`, `F`, `Falso`],
                        ].map(([i, a, o]) => {
                          let s = e.L2[n] === i,
                            c = t.a ? `true` : `false`,
                            l = `opt`;
                          return (
                            r && i === c && (l += ` correct`),
                            r && s && i !== c && (l += ` wrong`),
                            (0, w.jsxs)(
                              `label`,
                              {
                                className: l,
                                children: [
                                  (0, w.jsx)(`input`, {
                                    type: `radio`,
                                    name: `L2_` + n,
                                    checked: s,
                                    onChange: () => v(n, i),
                                    disabled: r,
                                  }),
                                  (0, w.jsxs)(`span`, { children: [(0, w.jsx)(`b`, { children: a }), ` `, o] }),
                                ],
                              },
                              i,
                            )
                          );
                        }),
                      }),
                      r &&
                        (0, w.jsx)(`div`, {
                          className: `ans ` + (e.L2[n] != null && (e.L2[n] === `true`) === t.a ? `ok` : `no`),
                          children:
                            e.L2[n] != null && (e.L2[n] === `true`) === t.a
                              ? `✓ Corretto`
                              : `✗ Risposta giusta: ${t.a ? `Vero` : `Falso`}`,
                        }),
                    ],
                  }),
            ],
          },
          `L2` + n,
        );
      }),
    ],
  });
}
function Ce({ ans: e, setAns: t, graded: n = !1, testData: r }) {
  let { CLOZE: i, MATCH: a } = r || T,
    o = (e, n) => t((t) => ({ ...t, cloze: { ...t.cloze, [e]: n } })),
    s = (e, n) => t((t) => ({ ...t, match: { ...t.match, [e]: n } }));
  return (0, w.jsxs)(`section`, {
    className: `card`,
    children: [
      (0, w.jsxs)(`h2`, {
        className: `sec-h`,
        children: [
          (0, w.jsx)(`span`, { className: `sec-n`, children: `2` }),
          `Comprensione della lettura · Reading`,
          (0, w.jsx)(`span`, { className: `sec-pts`, children: `12 pts` }),
        ],
      }),
      (0, w.jsx)(`div`, { className: `sub-h`, children: `Parte 1 — cloze (completa il testo)` }),
      (0, w.jsx)(`p`, { className: `instr`, children: `Choose the right word for each gap. Three words are extra.` }),
      (0, w.jsx)(`div`, { className: `bank`, children: i.bank.map((e) => (0, w.jsx)(`span`, { children: e }, e)) }),
      (0, w.jsx)(`p`, {
        className: `cloze`,
        children: i.parts.map((t, r) =>
          (0, w.jsxs)(
            `span`,
            {
              children: [
                t,
                r < i.ans.length &&
                  (0, w.jsxs)(w.Fragment, {
                    children: [
                      (0, w.jsxs)(`select`, {
                        value: e.cloze[r] || ``,
                        disabled: n,
                        className: n ? (e.cloze[r] === i.ans[r] ? `correct` : `wrong`) : ``,
                        onChange: (e) => o(r, e.target.value),
                        children: [
                          (0, w.jsx)(`option`, { value: ``, children: `— scegli —` }),
                          i.bank.map((e) => (0, w.jsx)(`option`, { value: e, children: e }, e)),
                        ],
                      }),
                      n &&
                        e.cloze[r] !== i.ans[r] &&
                        (0, w.jsxs)(`em`, { className: `fix`, children: [` (`, i.ans[r], `)`] }),
                    ],
                  }),
              ],
            },
            r,
          ),
        ),
      }),
      (0, w.jsx)(`div`, { className: `sub-h`, children: `Parte 2 — abbinamento (1–6 con A–H)` }),
      (0, w.jsx)(`p`, {
        className: `instr`,
        children: `Match each notice to the right sentence. Two options are extra.`,
      }),
      (0, w.jsx)(`div`, {
        className: `ah`,
        children: a.options.map((e) =>
          (0, w.jsxs)(`div`, { children: [(0, w.jsxs)(`b`, { children: [e[0], `.`] }), ` `, e[1]] }, e[0]),
        ),
      }),
      a.notices.map((t, r) => {
        let i = e.match[r] === a.ans[r];
        return (0, w.jsxs)(
          `div`,
          {
            className: `match`,
            children: [
              (0, w.jsxs)(`span`, { className: `m-n`, children: [t[0], `.`] }),
              (0, w.jsx)(`span`, { className: `m-txt`, children: t[1] }),
              (0, w.jsxs)(`select`, {
                value: e.match[r] || ``,
                disabled: n,
                className: n ? (i ? `correct` : `wrong`) : ``,
                onChange: (e) => s(r, e.target.value),
                children: [
                  (0, w.jsx)(`option`, { value: ``, children: `—` }),
                  a.options.map((e) => (0, w.jsx)(`option`, { value: e[0], children: e[0] }, e[0])),
                ],
              }),
              n && !i && (0, w.jsxs)(`em`, { className: `fix`, children: [`→ `, a.ans[r]] }),
            ],
          },
          r,
        );
      }),
    ],
  });
}
function we(e) {
  let t = 0,
    n = {},
    r = {};
  return (
    ee.forEach((r, i) => {
      let a = e.L1[i] != null && Number(e.L1[i]) === r.a;
      ((n[i] = a), a && t++);
    }),
    E.forEach((n, i) => {
      let a = e.L2[i] != null && (e.L2[i] === `true`) === n.a;
      ((r[i] = a), a && t++);
    }),
    { score: t, l1: n, l2: r, max: 12 }
  );
}
function Te(e) {
  let t = 0,
    n = {},
    r = {};
  return (
    D.ans.forEach((r, i) => {
      let a = e.cloze[i] === r;
      ((n[i] = a), a && t++);
    }),
    te.ans.forEach((n, i) => {
      let a = e.match[i] === n;
      ((r[i] = a), a && t++);
    }),
    { score: t, cz: n, mt: r, max: 12 }
  );
}
function Ee(e) {
  return (
    String(e || ``)
      .trim()
      .match(/\S+/g) || []
  ).length;
}
function De({ text: e, lo: t, hi: n }) {
  let r = Ee(e);
  return (0, w.jsxs)(`div`, {
    className: `wc ` + (r === 0 ? `` : r >= t && r <= n ? `good` : `bad`),
    children: [r, ` parole · target `, t, `–`, n],
  });
}
function Oe({ ans: e, setAns: t, graded: n = !1, testData: r }) {
  let { PARK_SVG: i, WRITE_MSGS: a, WRITE_MODELS: o } = r || T,
    s = (e) => t((t) => ({ ...t, wImg: e })),
    c = (e, n) =>
      t((t) => {
        let r = [...t.wMsg];
        return ((r[e] = n), { ...t, wMsg: r });
      });
  return (0, w.jsxs)(`section`, {
    className: `card`,
    children: [
      (0, w.jsxs)(`h2`, {
        className: `sec-h`,
        children: [
          (0, w.jsx)(`span`, { className: `sec-n`, children: `3` }),
          `Produzione scritta · Writing`,
          (0, w.jsx)(`span`, { className: `sec-pts`, children: `12 pts` }),
        ],
      }),
      (0, w.jsx)(`div`, { className: `sub-h`, children: `Task 1 — descrivi l’immagine (40–60 parole)` }),
      (0, w.jsx)(`div`, { className: `imgbox`, dangerouslySetInnerHTML: { __html: i } }),
      (0, w.jsx)(`textarea`, {
        value: e.wImg,
        disabled: n,
        onChange: (e) => s(e.target.value),
        placeholder: `Scrivi qui la tua descrizione…`,
      }),
      (0, w.jsx)(De, { text: e.wImg, lo: 40, hi: 60 }),
      n &&
        (0, w.jsxs)(`div`, {
          className: `model`,
          children: [
            (0, w.jsx)(`div`, { className: `model-h`, children: `Modello` }),
            (0, w.jsx)(`div`, { className: `model-t`, children: o.img }),
            (0, w.jsx)(`div`, {
              className: `rubric`,
              children: `Self-check: si capisce chi/cosa/dove? · verbi al presente e accordi · lessico vario · ortografia · lunghezza 40–60 parole.`,
            }),
          ],
        }),
      (0, w.jsx)(`div`, { className: `sub-h`, children: `Task 2 — rispondi ai messaggi (15–30 parole ciascuno)` }),
      a.map((t, r) =>
        (0, w.jsxs)(
          `div`,
          {
            className: `q`,
            children: [
              (0, w.jsx)(`div`, { className: `msg`, children: t }),
              (0, w.jsx)(`textarea`, {
                value: e.wMsg[r],
                disabled: n,
                onChange: (e) => c(r, e.target.value),
                placeholder: `La tua risposta…`,
              }),
              (0, w.jsx)(De, { text: e.wMsg[r], lo: 15, hi: 30 }),
              n &&
                (0, w.jsxs)(`div`, {
                  className: `model`,
                  children: [
                    (0, w.jsx)(`div`, { className: `model-h`, children: `Risposta modello` }),
                    (0, w.jsx)(`div`, { className: `model-t`, children: o.msgs[r] }),
                  ],
                }),
            ],
          },
          r,
        ),
      ),
    ],
  });
}
function ke({ index: e, transcript: t, onUpdate: n }) {
  let [r, i] = (0, S.useState)(!1),
    a = (0, S.useRef)(null),
    o = ye();
  function s() {
    if (!o) return;
    if (r) {
      (a.current && a.current.stop(), i(!1));
      return;
    }
    let e = be({ lang: `it-IT`, onUpdate: (e) => n(e), onEnd: () => i(!1) });
    e && ((a.current = e), e.start(), i(!0));
  }
  return (0, w.jsxs)(`div`, {
    className: `rec`,
    children: [
      o
        ? (0, w.jsx)(`button`, {
            className: `btn rec-btn` + (r ? ` on` : ``),
            onClick: s,
            children: r ? `Ferma` : `Registra e trascrivi`,
          })
        : (0, w.jsx)(`p`, {
            className: `warn`,
            children: `Live transcription isn’t available on this device. Type your answer below to practise.`,
          }),
      (0, w.jsx)(`textarea`, {
        className: `tx`,
        value: t,
        onChange: (e) => n(e.target.value),
        placeholder: o ? `La tua trascrizione apparirà qui mentre parli…` : `Scrivi qui che cosa diresti…`,
      }),
    ],
  });
}
function Ae({ ans: e, setAns: t, graded: n = !1 }) {
  let r = (e, n) =>
    t((t) => {
      let r = [...t.spTx];
      return ((r[e] = n), { ...t, spTx: r });
    });
  return (0, w.jsxs)(`section`, {
    className: `card`,
    children: [
      (0, w.jsxs)(`h2`, {
        className: `sec-h`,
        children: [
          (0, w.jsx)(`span`, { className: `sec-n`, children: `4` }),
          `Produzione orale · Speaking`,
          (0, w.jsx)(`span`, { className: `sec-pts`, children: `12 pts` }),
        ],
      }),
      (0, w.jsx)(`p`, {
        className: `instr`,
        children: `Speak aloud and record yourself — the app transcribes what you say so you can review it. Models appear after you finish.`,
      }),
      ae.map((t, i) =>
        (0, w.jsxs)(
          `div`,
          {
            className: `q`,
            children: [
              (0, w.jsxs)(`div`, {
                className: `q-top`,
                children: [
                  (0, w.jsxs)(`span`, {
                    className: `q-kicker`,
                    children: [i === 0 ? `Prova 1` : `Prova 2`, ` — `, t.t],
                  }),
                  (0, w.jsx)(`span`, { className: `dur`, children: t.dur }),
                ],
              }),
              (0, w.jsx)(`div`, { className: `prompt`, dangerouslySetInnerHTML: { __html: t.p } }),
              (0, w.jsx)(ke, { index: i, transcript: e.spTx[i], onUpdate: (e) => r(i, e) }),
              n &&
                (0, w.jsxs)(`div`, {
                  className: `model`,
                  children: [
                    (0, w.jsx)(`div`, { className: `model-h`, children: `Frasi utili` }),
                    (0, w.jsx)(`div`, { className: `model-t`, dangerouslySetInnerHTML: { __html: t.m } }),
                  ],
                }),
            ],
          },
          i,
        ),
      ),
    ],
  });
}
var je = [``, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function Me({ ans: e, setAns: t }) {
  let n = we(e),
    r = Te(e),
    i = e.wSelf === `` ? null : Number(e.wSelf),
    a = e.sSelf === `` ? null : Number(e.sSelf),
    o = [n.score, r.score, ...(i === null ? [] : [i]), ...(a === null ? [] : [a])].reduce((e, t) => e + t, 0),
    s = i !== null && a !== null,
    c = s && o >= 28 && n.score >= 7 && r.score >= 7 && i >= 7 && a >= 7,
    l = Math.min(n.score, r.score, i === null ? 99 : i, a === null ? 99 : a),
    u = (e) => t((t) => ({ ...t, wSelf: e })),
    d = (e) => t((t) => ({ ...t, sSelf: e }));
  return (0, w.jsxs)(`section`, {
    className: `card result-card`,
    children: [
      (0, w.jsx)(`h2`, { className: `sec-h`, children: `Risultati · Your results` }),
      (0, w.jsxs)(`div`, {
        className: `stats`,
        children: [
          (0, w.jsxs)(`div`, {
            className: `stat`,
            children: [
              (0, w.jsxs)(`div`, { className: `v`, children: [n.score, `/12`] }),
              (0, w.jsx)(`div`, { className: `l`, children: `Listening` }),
            ],
          }),
          (0, w.jsxs)(`div`, {
            className: `stat`,
            children: [
              (0, w.jsxs)(`div`, { className: `v`, children: [r.score, `/12`] }),
              (0, w.jsx)(`div`, { className: `l`, children: `Reading` }),
            ],
          }),
          (0, w.jsxs)(`div`, {
            className: `stat`,
            children: [
              (0, w.jsxs)(`div`, { className: `v`, children: [i === null ? `–` : i, `/12`] }),
              (0, w.jsx)(`div`, { className: `l`, children: `Writing (self)` }),
            ],
          }),
          (0, w.jsxs)(`div`, {
            className: `stat`,
            children: [
              (0, w.jsxs)(`div`, { className: `v`, children: [a === null ? `–` : a, `/12`] }),
              (0, w.jsx)(`div`, { className: `l`, children: `Speaking (self)` }),
            ],
          }),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `self-row`,
        children: [
          (0, w.jsxs)(`label`, {
            children: [
              `Writing self-score`,
              (0, w.jsx)(`select`, {
                value: e.wSelf,
                onChange: (e) => u(e.target.value),
                children: je.map((e) => (0, w.jsx)(`option`, { value: e, children: e === `` ? `–` : e }, e)),
              }),
              `/12`,
            ],
          }),
          (0, w.jsxs)(`label`, {
            children: [
              `Speaking self-score`,
              (0, w.jsx)(`select`, {
                value: e.sSelf,
                onChange: (e) => d(e.target.value),
                children: je.map((e) => (0, w.jsx)(`option`, { value: e, children: e === `` ? `–` : e }, e)),
              }),
              `/12`,
            ],
          }),
        ],
      }),
      s
        ? (0, w.jsx)(`div`, {
            className: `verdict ` + (c ? `pass` : `fail`),
            children: c
              ? `PROMOSSO/A — ${o}/48 (almeno 7 in ogni prova)`
              : `Non ancora — ${o}/48. Serve ≥28 totale e ≥7 in ogni prova${l < 7 ? ` (minimo attuale: ${l})` : ``}.`,
          })
        : (0, w.jsxs)(`div`, {
            className: `verdict neutral`,
            children: [
              `Auto-score: Listening `,
              n.score,
              `/12 · Reading `,
              r.score,
              `/12 · running total `,
              o,
              `/48. Add your Writing & Speaking self-scores above for a full verdict.`,
            ],
          }),
      (0, w.jsx)(`p`, {
        className: `note`,
        children: `Listening & Reading are graded automatically (each question is marked below). Writing & Speaking can’t be auto-marked — compare your answers with the models and score yourself out of 12. Pass = ≥28/48 total and ≥7 in every skill.`,
      }),
    ],
  });
}
function Ne({ seconds: e, running: t = !0, onExpire: n, label: r = `Tempo` }) {
  let [i, a] = (0, S.useState)(e),
    o = (0, S.useRef)(null),
    s = (0, S.useRef)(!1);
  ((0, S.useEffect)(() => {
    (a(e), (s.current = !1));
  }, [e]),
    (0, S.useEffect)(() => {
      if (t)
        return (
          (o.current = setInterval(() => {
            a((e) => (e <= 1 ? (clearInterval(o.current), s.current || ((s.current = !0), n && n()), 0) : e - 1));
          }, 1e3)),
          () => clearInterval(o.current)
        );
    }, [t, e]));
  let c = Math.floor(i / 60),
    l = i % 60;
  return (0, w.jsxs)(`div`, {
    className: `timer` + (i <= 60 ? ` low` : ``),
    children: [
      (0, w.jsx)(`span`, { className: `timer-label`, children: r }),
      (0, w.jsxs)(`span`, {
        className: `timer-clock`,
        children: [String(c).padStart(2, `0`), `:`, String(l).padStart(2, `0`)],
      }),
    ],
  });
}
var Pe = flashcardDecksData,
  Fe = phraseBannersData,
  Ie = vocabImagesData,
  Le = /^(il |la |lo |le |l'|i |gli |un |una |uno )/i;
function Re(e) {
  return e
    .split(/\s*[/,]\s*/)[0]
    .trim()
    .trim()
    .toLowerCase()
    .replace(Le, ``)
    .replace(/[àáâ]/g, `a`)
    .replace(/[èéê]/g, `e`)
    .replace(/[ìíî]/g, `i`)
    .replace(/[òóô]/g, `o`)
    .replace(/[ùúû]/g, `u`)
    .replace(/[\s/]+/g, `-`);
}
function ze(e) {
  return e ? (Ie[Re(e)] ?? null) : null;
}
function Be(e) {
  return (e && Fe[e]) ?? null;
}
function N(e, t) {
  let [n, r] = (0, S.useState)(() => {
    try {
      let t = localStorage.getItem(e);
      if (t !== null) return JSON.parse(t);
    } catch {}
    return typeof t == `function` ? t() : t;
  });
  return (
    (0, S.useEffect)(() => {
      try {
        localStorage.setItem(e, JSON.stringify(n));
      } catch {}
    }, [e, n]),
    [n, r]
  );
}
function Ve(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++) ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619)));
  return t >>> 0;
}
function He(e, t) {
  let n = [...e],
    r = t || 1,
    i = () => ((r = ((Math.imul(r, 48271) % 2147483647) + 2147483647) % 2147483647), r / 2147483647);
  for (let e = n.length - 1; e > 0; e--) {
    let t = Math.floor(i() * (e + 1));
    [n[e], n[t]] = [n[t], n[e]];
  }
  return n;
}
var Ue = new Date().toISOString().slice(0, 10);
function We() {
  try {
    let e = JSON.parse(localStorage.getItem(`fc_streak`) || `{}`);
    return { count: e.count || 0, last: e.last || `` };
  } catch {
    return { count: 0, last: `` };
  }
}
function Ge() {
  let e = We();
  if (e.last === Ue) return e;
  let t = new Date(Date.now() - 864e5).toISOString().slice(0, 10),
    n = e.last === t ? e.count + 1 : 1;
  return (localStorage.setItem(`fc_streak`, JSON.stringify({ count: n, last: Ue })), { count: n, last: Ue });
}
var Ke = new Set([`frasi-utili`, `prova-orale`, `prova-scritta`]);
function qe() {
  let e = Pe.filter((e) => !Ke.has(e.id)).flatMap((e) => e.cards.map((t) => ({ ...t, deckId: e.id, deck: e.label }))),
    t = parseInt(Ue.replace(/-/g, ``)) % e.length,
    n = [];
  for (let r = 0; r < 10; r++) n.push(e[(t + r * 47) % e.length]);
  return n;
}
var Je = /^(il |la |lo |le |l'|i |gli |un |una |uno |fare |essere |avere |stare )/i;
function Ye(e) {
  return (e.replace(Je, ``)[0] || e[0] || `?`).toLowerCase();
}
var Xe = {
  rosso: `#e05050`,
  blu: `#4a7fc1`,
  azzurro: `#6baed6`,
  verde: `#3a8a52`,
  giallo: `#e8c526`,
  bianco: `#f0f0f0`,
  nero: `#222`,
  arancione: `#e07830`,
  viola: `#8060a0`,
  grigio: `#8a8a8a`,
  marrone: `#8b5c2a`,
  rosa: `#e08090`,
};
function Ze(e) {
  let t = e.toLowerCase();
  for (let [e, n] of Object.entries(Xe)) if (t.includes(e)) return n;
  return null;
}
function Qe({ w: e }) {
  let [t, n] = (0, S.useState)(!0),
    r = e.deckId === `colours` ? Ze(e.it) : null,
    i = r ? null : ze(e.it),
    a = Ye(e.it);
  return (0, w.jsxs)(`div`, {
    className: `wotd-card`,
    children: [
      (0, w.jsx)(`div`, {
        className: `wotd-card-img`,
        children: r
          ? (0, w.jsx)(`div`, { className: `wotd-swatch`, style: { background: r } })
          : i && t
            ? (0, w.jsx)(`img`, { src: i, alt: e.it, className: `wotd-img`, loading: `lazy`, onError: () => n(!1) })
            : (0, w.jsx)(`div`, { className: `wotd-letter`, children: a }),
      }),
      (0, w.jsxs)(`div`, {
        className: `wotd-card-body`,
        children: [
          (0, w.jsx)(`div`, { className: `wotd-card-it`, children: e.it }),
          (0, w.jsx)(`div`, { className: `wotd-card-en`, children: e.en }),
        ],
      }),
    ],
  });
}
function $e(e, t) {
  let n = Ve(t + Ue),
    r = e.map((e) => e.en);
  return He(
    e.map((e, t) => {
      let i = He(
        [
          ...He(
            r.filter((t) => t !== e.en),
            n + t,
          ).slice(0, 3),
          e.en,
        ],
        n + t * 7 + 1,
      );
      return { it: e.it, opts: i, a: i.indexOf(e.en) };
    }),
    n,
  );
}
function et({ cards: e, label: t, onBack: n }) {
  let r = (0, S.useMemo)(() => $e(e, String(t)), [t]),
    i = `fcq_${t}_${Ue}`,
    [a, o] = N(`${i}_i`, 0),
    [s, c] = N(`${i}_a`, {}),
    [l, u] = N(`${i}_d`, !1),
    d = r[a],
    f = s[a],
    p = f !== void 0,
    m = (e) => {
      p || c((t) => ({ ...t, [a]: e }));
    },
    h = () => {
      a + 1 < r.length ? o(a + 1) : u(!0);
    },
    g = Object.entries(s).filter(([e, t]) => t === r[e].a).length;
  return l
    ? (0, w.jsxs)(`div`, {
        className: `fc-quiz-done`,
        children: [
          (0, w.jsxs)(`div`, { className: `fc-quiz-score-big`, children: [Math.round((g / r.length) * 100), `%`] }),
          (0, w.jsxs)(`div`, { className: `fc-quiz-result`, children: [g, `/`, r.length, ` correct`] }),
          (0, w.jsxs)(`div`, {
            style: { display: `flex`, gap: 10, justifyContent: `center`, marginTop: 16 },
            children: [
              (0, w.jsx)(`button`, {
                className: `btn go sm`,
                onClick: () => {
                  (o(0), c({}), u(!1));
                },
                children: `Retry`,
              }),
              (0, w.jsx)(`button`, { className: `btn ghost sm`, onClick: n, children: `← Back` }),
            ],
          }),
        ],
      })
    : (0, w.jsxs)(`div`, {
        children: [
          (0, w.jsxs)(`div`, {
            className: `fc-quiz-header`,
            children: [
              (0, w.jsx)(`button`, { className: `mini ghost`, onClick: n, children: `← Cards` }),
              (0, w.jsx)(`button`, {
                className: `mini ghost`,
                title: `Ricomincia il quiz`,
                onClick: () => {
                  (o(0), c({}), u(!1));
                },
                children: `↺ Restart`,
              }),
              (0, w.jsxs)(`div`, { className: `fc-quiz-prog`, children: [a + 1, ` / `, r.length] }),
              (0, w.jsxs)(`div`, { className: `fc-quiz-score`, children: [`✓ `, g] }),
            ],
          }),
          (0, w.jsx)(`div`, {
            className: `fc-quiz-prog-bar`,
            children: (0, w.jsx)(`div`, {
              className: `fc-quiz-prog-fill`,
              style: { width: (a / r.length) * 100 + `%` },
            }),
          }),
          (0, w.jsxs)(`div`, {
            className: `fc-quiz-card`,
            children: [
              (0, w.jsx)(`div`, { className: `fc-quiz-word`, children: d.it }),
              (0, w.jsx)(`div`, { className: `fc-quiz-prompt`, children: `What does this mean?` }),
            ],
          }),
          (0, w.jsx)(`div`, {
            className: `fc-quiz-opts`,
            children: d.opts.map((e, t) => {
              let n = `fc-quiz-opt`;
              return (
                p && t === d.a && (n += ` correct`),
                p && f === t && t !== d.a && (n += ` wrong`),
                (0, w.jsx)(`button`, { className: n, onClick: () => m(t), disabled: p, children: e }, t)
              );
            }),
          }),
          p &&
            (0, w.jsxs)(`div`, {
              className: `fc-quiz-fb`,
              children: [
                f === d.a
                  ? (0, w.jsx)(`span`, { className: `fc-quiz-ok`, children: `✓ Corretto!` })
                  : (0, w.jsxs)(`span`, {
                      className: `fc-quiz-no`,
                      children: [`✗ `, (0, w.jsx)(`b`, { children: d.opts[d.a] })],
                    }),
                (0, w.jsx)(`button`, {
                  className: `btn go sm`,
                  onClick: h,
                  style: { marginLeft: `auto` },
                  children: a + 1 < r.length ? `Next →` : `See results`,
                }),
              ],
            }),
        ],
      });
}
var tt = `__all__`;
function nt() {
  let [e, t] = N(`fc_deck`, tt),
    [n, r] = N(`fc_idx`, 0),
    [i, a] = (0, S.useState)(!1),
    [o, s] = N(`fc_known`, []),
    c = (0, S.useMemo)(() => new Set(o), [o]),
    l = (e) => s((t) => [...(typeof e == `function` ? e(new Set(t)) : e)]),
    [u, d] = (0, S.useState)(`cards`),
    [f, p] = (0, S.useState)(We),
    [m, h] = (0, S.useState)(We().last === Ue),
    [g, _] = (0, S.useState)(!1),
    v = (0, S.useMemo)(qe, []),
    y = new Set([
      `everyday`,
      `health`,
      `work`,
      `food`,
      `home`,
      `verbs`,
      `verbs-essential`,
      `adjectives`,
      `frasi-utili`,
      `prova-orale`,
      `prova-scritta`,
    ]),
    b = g ? Pe : Pe.filter((e) => y.has(e.id)),
    x = Pe.find((t) => t.id === e),
    C = (0, S.useMemo)(
      () =>
        e === tt
          ? Pe.flatMap((e) => e.cards.map((t) => ({ ...t, deckLabel: e.label, deckId: e.id })))
          : (x?.cards ?? []).map((t) => ({ ...t, deckLabel: x?.label, deckId: e })),
      [e],
    ),
    T = C[n] ?? C[0],
    [ee, E] = (0, S.useState)(!0),
    D = T?.deckId === `colours` ? Ze(T.it) : null,
    te = !D && T ? ze(T.it) : null,
    ne = T ? Ye(T.it) : `?`;
  (0, S.useEffect)(() => {
    E(!0);
  }, [n]);
  let re = (e) => {
      (t(e), r(0), a(!1));
    },
    ie = () => a((e) => !e),
    ae = () => {
      (r((e) => (e + 1) % C.length), a(!1));
    },
    oe = () => {
      (r((e) => (e - 1 + C.length) % C.length), a(!1));
    },
    se = () => {
      (r(Math.floor(Math.random() * C.length)), a(!1));
    },
    O = (e) => {
      (m || (h(!0), p(Ge())), e && l((e) => new Set([...e, n])), ae());
    };
  return (
    (0, S.useEffect)(() => {
      let e = (e) => {
        e.target.tagName === `INPUT` ||
          e.target.tagName === `TEXTAREA` ||
          (e.key === `ArrowRight`
            ? ae()
            : e.key === `ArrowLeft`
              ? oe()
              : e.key === ` `
                ? (e.preventDefault(), ie())
                : e.key.toLowerCase() === `k`
                  ? O(!0)
                  : e.key.toLowerCase() === `r` && O(!1));
      };
      return (window.addEventListener(`keydown`, e), () => window.removeEventListener(`keydown`, e));
    }, [n, C.length, m]),
    u === `quiz`
      ? (0, w.jsxs)(`section`, {
          className: `card`,
          children: [
            (0, w.jsxs)(`h2`, {
              className: `fc-title`,
              style: { marginBottom: 16 },
              children: [`Quiz · `, x?.label ?? `All`],
            }),
            (0, w.jsx)(et, { cards: C, label: e, onBack: () => d(`cards`) }),
          ],
        })
      : (0, w.jsxs)(`section`, {
          className: `card`,
          children: [
            (0, w.jsxs)(`div`, {
              className: `fc-header`,
              children: [
                (0, w.jsxs)(`div`, {
                  children: [
                    (0, w.jsx)(`h2`, { className: `fc-title`, children: `Flashcards` }),
                    (0, w.jsxs)(`div`, {
                      className: `fc-subtitle`,
                      children: [`Vocabolario · `, Pe.length, ` mazzi · `, C.length, ` carte`],
                    }),
                  ],
                }),
                f.count > 0 &&
                  (0, w.jsxs)(`div`, {
                    className: `fc-streak`,
                    children: [
                      (0, w.jsx)(`svg`, {
                        width: `13`,
                        height: `13`,
                        viewBox: `0 0 24 24`,
                        fill: `#E8A020`,
                        stroke: `none`,
                        children: (0, w.jsx)(`path`, {
                          d: `M13 2L4.09 12.52a.5.5 0 0 0 .41.78h5.01L8 22l10.91-10.52a.5.5 0 0 0-.41-.78h-5.01L13 2z`,
                        }),
                      }),
                      f.count,
                      ` day`,
                      f.count === 1 ? `` : `s`,
                    ],
                  }),
              ],
            }),
            (0, w.jsxs)(`div`, {
              className: `fc-wotd`,
              children: [
                (0, w.jsxs)(`div`, {
                  className: `fc-wotd-header`,
                  children: [
                    (0, w.jsx)(`span`, { className: `fc-wotd-label`, children: `Parole del Giorno` }),
                    (0, w.jsx)(`span`, { className: `fc-wotd-deck`, children: `10 parole · oggi` }),
                  ],
                }),
                (0, w.jsx)(`div`, { className: `wotd-grid`, children: v.map((e, t) => (0, w.jsx)(Qe, { w: e }, t)) }),
              ],
            }),
            (0, w.jsxs)(`div`, {
              className: `fc-chips`,
              children: [
                (0, w.jsxs)(`button`, {
                  className: `fc-chip` + (e === tt ? ` active` : ``),
                  onClick: () => re(tt),
                  children: [
                    `All `,
                    (0, w.jsx)(`span`, {
                      className: `fc-chip-n`,
                      children: Pe.reduce((e, t) => e + t.cards.length, 0),
                    }),
                  ],
                }),
                b.map((t) =>
                  (0, w.jsxs)(
                    `button`,
                    {
                      className: `fc-chip` + (e === t.id ? ` active` : ``),
                      onClick: () => re(t.id),
                      children: [
                        t.label,
                        ` `,
                        (0, w.jsx)(`span`, { className: `fc-chip-n`, children: t.cards.length }),
                      ],
                    },
                    t.id,
                  ),
                ),
                (0, w.jsx)(`button`, {
                  className: `fc-chip fc-chip-more`,
                  onClick: () => _((e) => !e),
                  children: g ? `− Less` : `+ ${Pe.length - b.length} more`,
                }),
              ],
            }),
            (0, w.jsxs)(`div`, {
              className: `fc-toolbar`,
              children: [
                (0, w.jsxs)(`div`, {
                  className: `fc-toolbar-left`,
                  children: [
                    (0, w.jsxs)(`span`, {
                      className: `fc-bar-txt`,
                      children: [`Card `, (0, w.jsx)(`b`, { children: n + 1 }), ` / `, C.length],
                    }),
                    (0, w.jsxs)(`span`, {
                      className: `fc-bar-txt`,
                      children: [`Known: `, (0, w.jsx)(`b`, { style: { color: `var(--green)` }, children: c.size })],
                    }),
                  ],
                }),
                (0, w.jsxs)(`div`, {
                  className: `fc-toolbar-right`,
                  children: [
                    (0, w.jsx)(`button`, { className: `fc-tool-btn`, onClick: () => d(`quiz`), children: `Quiz` }),
                    (0, w.jsx)(`button`, {
                      className: `fc-tool-btn`,
                      onClick: () => {
                        (l(new Set()), r(0), a(!1));
                      },
                      children: `Reset`,
                    }),
                  ],
                }),
              ],
            }),
            (0, w.jsx)(`div`, {
              className: `fc-progress`,
              children: (0, w.jsx)(`div`, {
                className: `fc-progress-fill`,
                style: { width: ((n + 1) / C.length) * 100 + `%` },
              }),
            }),
            (0, w.jsx)(`div`, {
              className: `fc-scene`,
              children: (0, w.jsxs)(`div`, {
                className: `fc-flipcard` + (i ? ` flip` : ``),
                onClick: ie,
                children: [
                  (0, w.jsxs)(`div`, {
                    className: `fc-face fc-front`,
                    children: [
                      (0, w.jsx)(`div`, {
                        className: `fc-img-area`,
                        children: D
                          ? (0, w.jsx)(`div`, { className: `fc-img-swatch`, style: { background: D } })
                          : te && ee
                            ? (0, w.jsx)(`img`, {
                                src: te,
                                alt: T?.it,
                                className: `fc-img-photo`,
                                loading: `lazy`,
                                onError: () => E(!1),
                              })
                            : (0, w.jsx)(`div`, { className: `fc-img-letter`, children: ne }),
                      }),
                      (0, w.jsxs)(`div`, {
                        className: `fc-scrim`,
                        children: [
                          (0, w.jsxs)(`div`, {
                            className: `fc-card-meta`,
                            children: [
                              `ITALIANO · `,
                              (0, w.jsx)(`span`, { style: { opacity: 0.7 }, children: T?.deckLabel?.toUpperCase() }),
                            ],
                          }),
                          (0, w.jsx)(`div`, { className: `fc-card-word`, children: T?.it }),
                        ],
                      }),
                      (0, w.jsx)(`button`, {
                        className: `fc-tap-pill`,
                        onClick: (e) => {
                          (e.stopPropagation(), ie());
                        },
                        children: `tap to flip`,
                      }),
                    ],
                  }),
                  (0, w.jsxs)(`div`, {
                    className: `fc-face fc-back`,
                    children: [
                      (0, w.jsx)(`div`, { className: `fc-back-orb` }),
                      (0, w.jsxs)(`div`, {
                        className: `fc-back-inner`,
                        children: [
                          (0, w.jsx)(`div`, { className: `fc-back-label`, children: `ENGLISH` }),
                          (0, w.jsx)(`div`, { className: `fc-back-en`, children: T?.en }),
                          T?.ex && (0, w.jsxs)(`div`, { className: `fc-back-ex`, children: [`"`, T.ex, `"`] }),
                        ],
                      }),
                      (0, w.jsx)(`button`, {
                        className: `fc-tap-pill fc-tap-pill-back`,
                        onClick: (e) => {
                          (e.stopPropagation(), ie());
                        },
                        children: `tap to flip`,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, w.jsxs)(`div`, {
              className: `fc-judge`,
              children: [
                (0, w.jsxs)(`button`, {
                  className: `fc-j-still`,
                  onClick: () => O(!1),
                  children: [
                    (0, w.jsxs)(`svg`, {
                      width: `17`,
                      height: `17`,
                      viewBox: `0 0 24 24`,
                      fill: `none`,
                      stroke: `currentColor`,
                      strokeWidth: `2`,
                      strokeLinecap: `round`,
                      strokeLinejoin: `round`,
                      children: [
                        (0, w.jsx)(`path`, { d: `M3 2v6h6` }),
                        (0, w.jsx)(`path`, { d: `M3 8a9 9 0 1 0 3-6` }),
                      ],
                    }),
                    `Still learning`,
                  ],
                }),
                (0, w.jsxs)(`button`, {
                  className: `fc-j-known`,
                  onClick: () => O(!0),
                  children: [
                    (0, w.jsx)(`svg`, {
                      width: `17`,
                      height: `17`,
                      viewBox: `0 0 24 24`,
                      fill: `none`,
                      stroke: `currentColor`,
                      strokeWidth: `2.2`,
                      strokeLinecap: `round`,
                      strokeLinejoin: `round`,
                      children: (0, w.jsx)(`path`, { d: `M20 6 9 17l-5-5` }),
                    }),
                    `Known`,
                  ],
                }),
              ],
            }),
            (0, w.jsxs)(`div`, {
              className: `fc-ctl-row`,
              style: { marginTop: 12 },
              children: [
                (0, w.jsx)(`button`, { className: `fc-ctl`, onClick: oe, children: `‹ Prev` }),
                (0, w.jsx)(`button`, { className: `fc-ctl`, onClick: se, children: `Shuffle` }),
                (0, w.jsx)(`button`, { className: `fc-ctl`, onClick: ae, children: `Next ›` }),
              ],
            }),
            (0, w.jsx)(`div`, {
              className: `fc-foot`,
              children: (0, w.jsxs)(`span`, {
                children: [
                  `Keys: `,
                  (0, w.jsx)(`kbd`, { children: `←` }),
                  ` `,
                  (0, w.jsx)(`kbd`, { children: `→` }),
                  ` navigate · `,
                  (0, w.jsx)(`kbd`, { children: `space` }),
                  ` flip · `,
                  (0, w.jsx)(`kbd`, { children: `K` }),
                  ` known · `,
                  (0, w.jsx)(`kbd`, { children: `R` }),
                  ` again`,
                ],
              }),
            }),
          ],
        })
  );
}
function rt({ set: e }) {
  let [t, n] = N(`ge_${e.id}_a`, {}),
    [r, i] = (0, S.useState)(!1),
    a = r ? e.items.filter((e, n) => t[n] === e.a).length : null;
  return (0, w.jsxs)(`div`, {
    children: [
      e.items.map((e, i) => {
        let a = t[i];
        return (0, w.jsxs)(
          `div`,
          {
            className: `ge-q`,
            children: [
              e.visual && (0, w.jsx)(`div`, { className: `ge-visual`, dangerouslySetInnerHTML: { __html: e.visual } }),
              (0, w.jsxs)(`div`, { className: `ge-qtext`, children: [i + 1, `. `, e.q] }),
              (0, w.jsx)(`div`, {
                className: `ge-opts`,
                children: e.opts.map((t, o) => {
                  let s = `ge-opt`;
                  return (
                    r && o === e.a && (s += ` correct`),
                    r && a === o && o !== e.a && (s += ` wrong`),
                    !r && a === o && (s += ` chosen`),
                    (0, w.jsxs)(
                      `button`,
                      {
                        className: s,
                        disabled: r,
                        onClick: () => n((e) => ({ ...e, [i]: o })),
                        children: [
                          (0, w.jsx)(`span`, { className: `ge-letter`, children: String.fromCharCode(65 + o) }),
                          ` `,
                          t,
                        ],
                      },
                      o,
                    )
                  );
                }),
              }),
              r &&
                (0, w.jsxs)(w.Fragment, {
                  children: [
                    (0, w.jsxs)(`div`, {
                      className: `ge-fb ` + (a === e.a ? `ok` : `no`),
                      children: [
                        a === e.a
                          ? `✓ Corretto!`
                          : `✗ Risposta giusta: ${String.fromCharCode(65 + e.a)}) ${e.opts[e.a]}`,
                        e.hint && (0, w.jsxs)(`span`, { className: `ge-hint`, children: [` — `, e.hint] }),
                      ],
                    }),
                    e.explain &&
                      (0, w.jsxs)(`div`, {
                        className: `ge-explain`,
                        children: [
                          (0, w.jsx)(`span`, { children: e.explain }),
                        ],
                      }),
                  ],
                }),
            ],
          },
          i,
        );
      }),
      (0, w.jsx)(`div`, {
        className: `ge-actions`,
        children: r
          ? (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsxs)(`div`, { className: `ge-score`, children: [a, `/`, e.items.length, ` correct`] }),
                (0, w.jsx)(`button`, {
                  className: `btn ghost sm`,
                  onClick: () => {
                    (n({}), i(!1));
                  },
                  children: `Try again`,
                }),
              ],
            })
          : (0, w.jsx)(`button`, {
              className: `btn go`,
              onClick: () => i(!0),
              disabled: Object.keys(t).length < e.items.length,
              children: `Check answers`,
            }),
      }),
    ],
  });
}
function it({ set: e }) {
  let t = Array.isArray(e.blanks),
    n = t ? e.blanks.length : e.ans.length,
    [r, i] = N(`ge_${e.id}_a`, () => Array(n).fill(``)),
    [a, o] = (0, S.useState)(!1),
    s = (n) => (t ? r[n] === e.blanks[n].opts[e.blanks[n].a] : r[n]?.trim().toLowerCase() === e.ans[n].toLowerCase()),
    c = a ? Array.from({ length: n }, (e, t) => s(t)).filter(Boolean).length : null,
    l = () => {
      (i(Array(n).fill(``)), o(!1));
    },
    u = r.every((e) => e !== ``),
    d = (e, t) => {
      let n = [...r];
      ((n[e] = t), i(n));
    };
  return t
    ? (0, w.jsxs)(`div`, {
        children: [
          (0, w.jsx)(`div`, {
            className: `ge-cloze`,
            children: e.text
              .split(/\(\d+\)___/)
              .map((t, i) =>
                (0, w.jsxs)(
                  `span`,
                  {
                    children: [
                      t,
                      i < n &&
                        (0, w.jsxs)(`select`, {
                          value: r[i],
                          disabled: a,
                          onChange: (e) => d(i, e.target.value),
                          className: a ? (s(i) ? `ge-sel correct` : `ge-sel wrong`) : `ge-sel`,
                          children: [
                            (0, w.jsx)(`option`, { value: ``, children: `—` }),
                            e.blanks[i].opts.map((e) => (0, w.jsx)(`option`, { value: e, children: e }, e)),
                          ],
                        }),
                    ],
                  },
                  i,
                ),
              ),
          }),
          a &&
            (0, w.jsx)(`div`, {
              className: `ge-cloze-ans`,
              children: e.blanks.map((e, t) =>
                (0, w.jsxs)(
                  `div`,
                  {
                    className: `ge-fb ` + (s(t) ? `ok` : `no`),
                    children: [`Gap `, t + 1, `: `, s(t) ? `✓` : `✗ → ${e.opts[e.a]}`],
                  },
                  t,
                ),
              ),
            }),
          (0, w.jsx)(`div`, {
            className: `ge-actions`,
            children: a
              ? (0, w.jsxs)(w.Fragment, {
                  children: [
                    (0, w.jsxs)(`span`, { className: `ge-score`, children: [c, `/`, n] }),
                    (0, w.jsx)(`button`, { className: `btn ghost sm`, onClick: l, children: `Reset` }),
                  ],
                })
              : (0, w.jsx)(`button`, {
                  className: `btn go sm`,
                  disabled: !u,
                  onClick: () => o(!0),
                  children: `Check`,
                }),
          }),
        ],
      })
    : (0, w.jsxs)(`div`, {
        children: [
          (0, w.jsxs)(`div`, {
            className: `ge-bank`,
            children: [
              (0, w.jsx)(`span`, { className: `ge-bank-label`, children: `Word bank:` }),
              e.bank.map((e) => (0, w.jsx)(`span`, { className: `ge-word`, children: e }, e)),
            ],
          }),
          (0, w.jsx)(`div`, {
            className: `ge-cloze`,
            children: e.parts.map((t, n) =>
              (0, w.jsxs)(
                `span`,
                {
                  children: [
                    t,
                    n < e.ans.length &&
                      (0, w.jsxs)(`select`, {
                        value: r[n],
                        disabled: a,
                        onChange: (e) => d(n, e.target.value),
                        className: a ? (s(n) ? `ge-sel correct` : `ge-sel wrong`) : `ge-sel`,
                        children: [
                          (0, w.jsx)(`option`, { value: ``, children: `—` }),
                          e.bank.map((e) => (0, w.jsx)(`option`, { value: e, children: e }, e)),
                        ],
                      }),
                  ],
                },
                n,
              ),
            ),
          }),
          a &&
            (0, w.jsx)(`div`, {
              className: `ge-cloze-ans`,
              children: e.ans.map((e, t) =>
                (0, w.jsxs)(
                  `div`,
                  {
                    className: `ge-fb ` + (s(t) ? `ok` : `no`),
                    children: [`Gap `, t + 1, `: `, s(t) ? `✓` : `✗ → ${e}`],
                  },
                  t,
                ),
              ),
            }),
          (0, w.jsx)(`div`, {
            className: `ge-actions`,
            children: a
              ? (0, w.jsxs)(w.Fragment, {
                  children: [
                    (0, w.jsxs)(`div`, { className: `ge-score`, children: [c, `/`, e.ans.length, ` correct`] }),
                    (0, w.jsx)(`button`, { className: `btn ghost sm`, onClick: l, children: `Try again` }),
                  ],
                })
              : (0, w.jsx)(`button`, { className: `btn go`, disabled: !u, onClick: () => o(!0), children: `Check` }),
          }),
        ],
      });
}
function at({ set: e }) {
  let [t, n] = N(`ge_${e.id}_a`, () => Array(e.items.length).fill(``)),
    [r, i] = (0, S.useState)(!1),
    [a, o] = (0, S.useState)({}),
    s = (n) => {
      let r = t[n]
          .trim()
          .toLowerCase()
          .replace(/[.,!?]/g, ``),
        i = e.items[n].a.toLowerCase().replace(/[.,!?]/g, ``);
      return r === i || i.includes(r);
    },
    c = r ? e.items.filter((e, t) => s(t)).length : null;
  return (0, w.jsxs)(`div`, {
    children: [
      e.items.map((e, i) =>
        (0, w.jsxs)(
          `div`,
          {
            className: `ge-q`,
            children: [
              (0, w.jsxs)(`div`, { className: `ge-qtext`, children: [i + 1, `. `, e.q] }),
              (0, w.jsx)(`input`, {
                className: `ge-input` + (r ? (s(i) ? ` correct` : ` wrong`) : ``),
                value: t[i],
                disabled: r,
                onChange: (e) => {
                  let r = [...t];
                  ((r[i] = e.target.value), n(r));
                },
                placeholder: `Type your answer…`,
              }),
              !r &&
                (0, w.jsx)(`button`, {
                  className: `mini ghost`,
                  style: { marginTop: 4 },
                  onClick: () => o((e) => ({ ...e, [i]: !e[i] })),
                  children: a[i] ? `hide hint` : `hint`,
                }),
              a[i] && !r && (0, w.jsx)(`div`, { className: `ge-hint`, children: e.hint }),
              r &&
                (0, w.jsxs)(`div`, {
                  className: `ge-fb ` + (s(i) ? `ok` : `no`),
                  children: [
                    s(i) ? `✓ Correct!` : `✗ Suggested: ${e.a}`,
                    !s(i) && (0, w.jsx)(`div`, { className: `ge-hint`, children: e.hint }),
                  ],
                }),
            ],
          },
          i,
        ),
      ),
      (0, w.jsx)(`div`, {
        className: `ge-actions`,
        children: r
          ? (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsxs)(`div`, { className: `ge-score`, children: [`~`, c, `/`, e.items.length, ` correct`] }),
                (0, w.jsx)(`button`, {
                  className: `btn ghost sm`,
                  onClick: () => {
                    (n(Array(e.items.length).fill(``)), i(!1), o({}));
                  },
                  children: `Try again`,
                }),
              ],
            })
          : (0, w.jsx)(`button`, {
              className: `btn go`,
              onClick: () => i(!0),
              disabled: t.some((e) => e.trim() === ``),
              children: `Check`,
            }),
      }),
    ],
  });
}
function ot({ set: e }) {
  let [t, n] = N(`ge_${e.id}_a`, () =>
      e.items.map((e) => ({ pool: [...e.words].sort(() => Math.random() - 0.5), chosen: [] })),
    ),
    [r, i] = (0, S.useState)(!1),
    a = (e, t) => {
      r ||
        n((n) =>
          n.map((n, r) => {
            if (r !== e) return n;
            let i = n.pool[t],
              a = [...n.pool];
            return (a.splice(t, 1), { pool: a, chosen: [...n.chosen, i] });
          }),
        );
    },
    o = (e, t) => {
      r ||
        n((n) =>
          n.map((n, r) => {
            if (r !== e) return n;
            let i = n.chosen[t],
              a = [...n.chosen];
            return (a.splice(t, 1), { pool: [...n.pool, i], chosen: a });
          }),
        );
    },
    s = r
      ? e.items.filter((e, n) => t[n].chosen.join(` `).toLowerCase() === e.a.replace(/[.,!?]/g, ``).toLowerCase())
          .length
      : null;
  return (0, w.jsxs)(`div`, {
    children: [
      e.items.map((e, n) => {
        let i = t[n],
          s = i.chosen.join(` `).toLowerCase() === e.a.replace(/[.,!?]/g, ``).toLowerCase();
        return (0, w.jsxs)(
          `div`,
          {
            className: `ge-q`,
            children: [
              (0, w.jsx)(`div`, { className: `ge-qnum`, children: n + 1 }),
              (0, w.jsx)(`div`, {
                className: `ge-order-zone`,
                children:
                  i.chosen.length === 0
                    ? (0, w.jsx)(`span`, {
                        className: `ge-order-placeholder`,
                        children: `tap words below to build the sentence`,
                      })
                    : i.chosen.map((e, t) =>
                        (0, w.jsx)(`button`, { className: `ge-word chosen`, onClick: () => o(n, t), children: e }, t),
                      ),
              }),
              (0, w.jsx)(`div`, {
                className: `ge-order-pool`,
                children: i.pool.map((e, t) =>
                  (0, w.jsx)(`button`, { className: `ge-word`, onClick: () => a(n, t), children: e }, t),
                ),
              }),
              r &&
                (0, w.jsxs)(`div`, {
                  className: `ge-fb ` + (s ? `ok` : `no`),
                  children: [
                    s ? `✓ Corretto!` : `✗ Correct: ${e.a}`,
                    !s && (0, w.jsx)(`div`, { className: `ge-hint`, children: e.hint }),
                  ],
                }),
            ],
          },
          n,
        );
      }),
      (0, w.jsx)(`div`, {
        className: `ge-actions`,
        children: r
          ? (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsxs)(`div`, { className: `ge-score`, children: [s, `/`, e.items.length, ` correct`] }),
                (0, w.jsx)(`button`, {
                  className: `btn ghost sm`,
                  onClick: () => {
                    (n(e.items.map((e) => ({ pool: [...e.words].sort(() => Math.random() - 0.5), chosen: [] }))),
                      i(!1));
                  },
                  children: `Try again`,
                }),
              ],
            })
          : (0, w.jsx)(`button`, {
              className: `btn go`,
              onClick: () => i(!0),
              disabled: t.some((e) => e.chosen.length === 0),
              children: `Check`,
            }),
      }),
    ],
  });
}
function st({ set: e }) {
  let [t] = (0, S.useState)([...e.pairs.map((e) => e[1])].sort(() => Math.random() - 0.5)),
    [n, r] = N(`ge_${e.id}_a`, {}),
    [i, a] = (0, S.useState)(!1),
    o = i ? e.pairs.filter((e, t) => n[t] === e[1]).length : null;
  return (0, w.jsxs)(`div`, {
    children: [
      (0, w.jsx)(`div`, {
        className: `ge-match-grid`,
        children: e.pairs.map((e, a) =>
          (0, w.jsxs)(
            `div`,
            {
              className: `ge-match-row`,
              children: [
                (0, w.jsx)(`div`, { className: `ge-match-left`, children: e[0] }),
                (0, w.jsxs)(`select`, {
                  className: `ge-sel` + (i ? (n[a] === e[1] ? ` correct` : ` wrong`) : ``),
                  value: n[a] || ``,
                  disabled: i,
                  onChange: (e) => r((t) => ({ ...t, [a]: e.target.value })),
                  children: [
                    (0, w.jsx)(`option`, { value: ``, children: `— select —` }),
                    t.map((e, t) => (0, w.jsx)(`option`, { value: e, children: e }, t)),
                  ],
                }),
              ],
            },
            a,
          ),
        ),
      }),
      i &&
        e.pairs.map((e, t) =>
          (0, w.jsxs)(
            `div`,
            {
              className: `ge-fb ` + (n[t] === e[1] ? `ok` : `no`),
              children: [t + 1, `. `, n[t] === e[1] ? `✓` : `✗ → ${e[1]}`],
            },
            t,
          ),
        ),
      (0, w.jsx)(`div`, {
        className: `ge-actions`,
        children: i
          ? (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsxs)(`div`, { className: `ge-score`, children: [o, `/`, e.pairs.length, ` correct`] }),
                (0, w.jsx)(`button`, {
                  className: `btn ghost sm`,
                  onClick: () => {
                    (r({}), a(!1));
                  },
                  children: `Try again`,
                }),
              ],
            })
          : (0, w.jsx)(`button`, {
              className: `btn go`,
              onClick: () => a(!0),
              disabled: Object.keys(n).length < e.pairs.length,
              children: `Check`,
            }),
      }),
    ],
  });
}
function ct({ set: e }) {
  let [t, n] = N(`ge_${e.id}_a`, {}),
    [r, i] = (0, S.useState)(!1),
    a = r ? e.items.filter((e, n) => t[n] === e.a).length : null;
  return (0, w.jsxs)(`div`, {
    children: [
      e.items.map((e, i) => {
        let a = t[i];
        return (0, w.jsxs)(
          `div`,
          {
            className: `ge-q`,
            children: [
              (0, w.jsxs)(`div`, {
                className: `ge-qtext`,
                children: [
                  i + 1,
                  `. `,
                  (0, w.jsx)(`span`, { className: `ge-wrong-sent`, children: e.wrong }),
                ],
              }),
              (0, w.jsx)(`div`, {
                className: `ge-opts`,
                children: e.opts.map((t, o) => {
                  let s = `ge-opt`;
                  return (
                    r && o === e.a && (s += ` correct`),
                    r && a === o && o !== e.a && (s += ` wrong`),
                    !r && a === o && (s += ` chosen`),
                    (0, w.jsxs)(
                      `button`,
                      {
                        className: s,
                        disabled: r,
                        onClick: () => n((e) => ({ ...e, [i]: o })),
                        children: [
                          (0, w.jsx)(`span`, { className: `ge-letter`, children: String.fromCharCode(65 + o) }),
                          ` `,
                          t,
                        ],
                      },
                      o,
                    )
                  );
                }),
              }),
              r &&
                (0, w.jsxs)(`div`, {
                  className: `ge-fb ` + (a === e.a ? `ok` : `no`),
                  children: [
                    a === e.a ? `✓ Corretto!` : `✗ Risposta giusta: ${String.fromCharCode(65 + e.a)}) ${e.opts[e.a]}`,
                    (0, w.jsx)(`div`, { className: `ge-why`, children: e.why }),
                  ],
                }),
            ],
          },
          i,
        );
      }),
      (0, w.jsx)(`div`, {
        className: `ge-actions`,
        children: r
          ? (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsxs)(`div`, { className: `ge-score`, children: [a, `/`, e.items.length, ` correct`] }),
                (0, w.jsx)(`button`, {
                  className: `btn ghost sm`,
                  onClick: () => {
                    (n({}), i(!1));
                  },
                  children: `Try again`,
                }),
              ],
            })
          : (0, w.jsx)(`button`, {
              className: `btn go`,
              onClick: () => i(!0),
              disabled: Object.keys(t).length < e.items.length,
              children: `Check`,
            }),
      }),
    ],
  });
}
function lt({ sets: e }) {
  let [t, n] = (0, S.useState)(!1),
    [r, i] = (0, S.useState)(0),
    a = e[r],
    o = {
      mcq: `Multiple Choice`,
      cloze: `Fill the Gaps`,
      transform: `Transform`,
      order: `Word Order`,
      match: `Match`,
      error: `Error Spot`,
    };
  return (0, w.jsxs)(`div`, {
    className: `gn-ex-block`,
    children: [
      (0, w.jsxs)(`button`, {
        className: `gn-ex-toggle`,
        onClick: () => n((e) => !e),
        'aria-expanded': t,
        children: [`Practice Exercises (`, e.length, `)`],
      }),
      t &&
        (0, w.jsxs)(`div`, {
          className: `gn-ex-panel`,
          children: [
            e.length > 1 &&
              (0, w.jsx)(`div`, {
                className: `gn-ex-tabs`,
                children: e.map((e, t) =>
                  (0, w.jsx)(
                    `button`,
                    { className: `gn-ex-tab` + (t === r ? ` on` : ``), onClick: () => i(t), children: o[e.type] },
                    e.id,
                  ),
                ),
              }),
            (0, w.jsx)(`div`, { className: `ge-ex-instr`, style: { marginBottom: `10px` }, children: a.instruction }),
            a.type === `mcq` && (0, w.jsx)(rt, { set: a }, a.id),
            a.type === `cloze` && (0, w.jsx)(it, { set: a }, a.id),
            a.type === `transform` && (0, w.jsx)(at, { set: a }, a.id),
            a.type === `order` && (0, w.jsx)(ot, { set: a }, a.id),
            a.type === `match` && (0, w.jsx)(st, { set: a }, a.id),
            a.type === `error` && (0, w.jsx)(ct, { set: a }, a.id),
          ],
        }),
    ],
  });
}
var ut = grammarExercisesData,
  dt = [`di`, `a`, `da`, `in`, `su`],
  ft = [`il`, `lo`, `l'`, `la`, `i`, `gli`, `le`],
  pt = {
    di: { il: `del`, lo: `dello`, "l'": `dell'`, la: `della`, i: `dei`, gli: `degli`, le: `delle` },
    a: { il: `al`, lo: `allo`, "l'": `all'`, la: `alla`, i: `ai`, gli: `agli`, le: `alle` },
    da: { il: `dal`, lo: `dallo`, "l'": `dall'`, la: `dalla`, i: `dai`, gli: `dagli`, le: `dalle` },
    in: { il: `nel`, lo: `nello`, "l'": `nell'`, la: `nella`, i: `nei`, gli: `negli`, le: `nelle` },
    su: { il: `sul`, lo: `sullo`, "l'": `sull'`, la: `sulla`, i: `sui`, gli: `sugli`, le: `sulle` },
  },
  mt = { di: `of / about`, a: `to / at`, da: `from / at someone’s`, in: `in`, su: `on` },
  ht = prepositionsArticulatedExamplesData,
  gt = prepositionsScenesData,
  _t = prepositionsQuizData,
  vt = prepositionsPictureQuizData,
  yt = prepositionsRulesData,
  bt = [
    { it: `Oggi sono andato/a al…`, en: `Today I went to the… (al supermercato, alla posta)` },
    { it: `Ho lavorato nello / nella…`, en: `I worked in the… (nello studio, nella cucina)` },
    { it: `Lavoro dalle… alle…`, en: `I work from… to… (dalle 9 alle 17)` },
  ],
  xt = `cils_progress_v1`,
  St = [`scrittura`, `orale`, `ascolto`, `conversazione`, `lettura`, `grammatica`],
  Ct = {
    scrittura: `Scrittura`,
    orale: `Orale`,
    ascolto: `Ascolto`,
    conversazione: `Conversazione`,
    lettura: `Lettura`,
    grammatica: `Grammatica`,
  },
  wt = {
    scrittura: `#1E6B4F`,
    orale: `#2E7D8A`,
    ascolto: `#C9603A`,
    conversazione: `#7A5A8E`,
    lettura: `#4A6FA5`,
    grammatica: `#C99A2E`,
  },
  Tt = [`A1`, `A2`, `B1`, `C1`];
function Et() {
  try {
    return localStorage.getItem(`cils_profile`) || `me`;
  } catch {
    return `me`;
  }
}
function Dt() {
  try {
    return JSON.parse(localStorage.getItem(xt) || `{}`);
  } catch {
    return {};
  }
}
function Ot(e) {
  try {
    localStorage.setItem(xt, JSON.stringify(e));
  } catch {}
}
function kt(e) {
  let t = Et();
  return (e[t] || (e[t] = { attempts: [] }), e[t]);
}
function At({ level: e = `A2`, section: t, taskId: n = null, score: r, max: i = 10, pass: a = null, tags: o = [] }) {
  if (r == null || !t) return;
  let s = Dt(),
    c = kt(s);
  (c.attempts.push({ level: e, section: t, taskId: n, score: r, max: i, pass: a, tags: o, ts: Date.now() }),
    c.attempts.length > 500 && (c.attempts = c.attempts.slice(-500)),
    Ot(s));
}
function jt(e) {
  return e.max === 10 ? e.score : Math.round((e.score / e.max) * 10);
}
function Mt(e) {
  return e.pass === !0 || (e.pass == null && jt(e) >= 6);
}
function Nt(e) {
  let t = new Date(e);
  return `${t.getFullYear()}-${t.getMonth() + 1}-${t.getDate()}`;
}
function Pt(e = `A2`) {
  return kt(Dt()).attempts.filter((t) => t.level === e);
}
function Ft() {
  return kt(Dt()).attempts.length > 0;
}
function It(e = `A2`) {
  let t = Pt(e);
  if (!t.length) return { count: 0, avg: null, passRate: 0 };
  let n = t.reduce((e, t) => e + jt(t), 0) / t.length,
    r = Math.round((t.filter(Mt).length / t.length) * 100);
  return { count: t.length, avg: Math.round(n * 10) / 10, passRate: r };
}
function Lt(e = `A2`) {
  let t = Pt(e);
  return St.map((e) => {
    let n = t.filter((t) => t.section === e),
      r = n.length ? Math.round((n.reduce((e, t) => e + jt(t), 0) / n.length) * 10) / 10 : null;
    return {
      section: e,
      label: Ct[e],
      colour: wt[e],
      count: n.length,
      avg: r,
      last: n.length ? jt(n[n.length - 1]) : null,
    };
  });
}
function Rt(e = `A2`) {
  let t = Nt(Date.now()),
    n = Pt(e).filter((e) => Nt(e.ts) === t),
    r = n.length ? Math.round((n.reduce((e, t) => e + jt(t), 0) / n.length) * 10) / 10 : null;
  return { count: n.length, avg: r };
}
function zt(e = `A2`) {
  let t = Pt(e);
  if (!t.length) return 0;
  let n = new Set(t.map((e) => Nt(e.ts))),
    r = new Date();
  n.has(Nt(r.getTime())) || r.setDate(r.getDate() - 1);
  let i = 0;
  for (; n.has(Nt(r.getTime()));) (i++, r.setDate(r.getDate() - 1));
  return i;
}
function Bt(e = `A2`, t = 7) {
  let n = Pt(e),
    r = [];
  for (let e = t - 1; e >= 0; e--) {
    let t = new Date();
    t.setDate(t.getDate() - e);
    let i = n.filter((e) => Nt(e.ts) === Nt(t.getTime()));
    r.push({
      label: t.toLocaleDateString(`it-IT`, { weekday: `short` }).replace(`.`, ``),
      dateLabel: t.toLocaleDateString(`it-IT`, { day: `numeric`, month: `short` }),
      avg: i.length ? Math.round((i.reduce((e, t) => e + jt(t), 0) / i.length) * 10) / 10 : null,
      count: i.length,
    });
  }
  return r;
}
function Vt(e = `A2`, t = 15) {
  return Pt(e)
    .slice(-t)
    .map((e) => ({ score: jt(e), section: e.section, pass: Mt(e), ts: e.ts }));
}
function Ht(e = `A2`) {
  let t = Lt(e),
    n = Pt(e),
    r = Date.now(),
    i = 864e5,
    a = {
      scrittura: `writing`,
      orale: `speaking`,
      ascolto: `ascoltop`,
      conversazione: `esaminatore`,
      lettura: `reading`,
      grammatica: `exercises`,
    },
    o = { scrittura: `✍️`, orale: `🎤`, ascolto: `🎧`, conversazione: `💬`, lettura: `📖`, grammatica: `🧩` },
    s = {};
  n.forEach((e) => {
    s[e.section] = Math.max(s[e.section] || 0, e.ts);
  });
  let c = [],
    l = (e) => c.some((t) => t.target === e),
    u = t.filter((e) => e.count === 0);
  if (u.length) {
    let e = u[0];
    c.push({
      emoji: o[e.section],
      title: `Prova ${e.label}`,
      reason: `Non l'hai ancora provato — parti da un esercizio facile.`,
      target: a[e.section],
    });
  }
  let d = t.filter((e) => e.count >= 2 && e.avg != null).sort((e, t) => e.avg - t.avg)[0];
  d &&
    d.avg < 7.5 &&
    !l(a[d.section]) &&
    c.push({
      emoji: o[d.section],
      title: `Rinforza ${d.label}`,
      reason: `Media ${d.avg}/10 — il tuo punto più debole al momento.`,
      target: a[d.section],
    });
  let f = t
    .filter((e) => e.count > 0 && s[e.section] && r - s[e.section] > 2 * i)
    .sort((e, t) => (s[e.section] || 0) - (s[t.section] || 0));
  for (let e of f) {
    if (c.length >= 3) break;
    if (!l(a[e.section])) {
      let t = Math.floor((r - s[e.section]) / i);
      c.push({
        emoji: o[e.section],
        title: `Riprendi ${e.label}`,
        reason: `Fermo da ${t} giorni — non perdere il ritmo.`,
        target: a[e.section],
      });
    }
  }
  if (c.length < 3)
    for (let e of [
      { taskId: `tempi-ppimp`, label: `PP o Imperfetto?`, target: `tempi` },
      { taskId: `prep-drill`, label: `Sfida preposizioni`, target: `preposizioni` },
      { taskId: `tempi-fut`, label: `Drill del futuro`, target: `tempi` },
      { taskId: `prep-indovina`, label: `Indovina (immagini)`, target: `preposizioni` },
    ]) {
      let t = n.filter((t) => t.taskId === e.taskId);
      if (!t.length) {
        c.push({
          emoji: `⚡`,
          title: e.label,
          reason: `Drill veloce (3 minuti) che non hai ancora fatto.`,
          target: e.target,
        });
        break;
      }
      let r = t[t.length - 1];
      if (r.score / r.max < 0.7) {
        c.push({
          emoji: `⚡`,
          title: `Rifai: ${e.label}`,
          reason: `Ultimo risultato ${r.score}/${r.max} — ripassa le regole e riprova.`,
          target: e.target,
        });
        break;
      }
    }
  return (
    c.length ||
      c.push({
        emoji: `🏆`,
        title: `Practice Test completo`,
        reason: `Le tue medie sono solide — mettiti alla prova in condizioni d'esame.`,
        target: `exam`,
      }),
    c.slice(0, 3)
  );
}
function Ut(e = `A2`, t = 6) {
  let n = {};
  return (
    Pt(e).forEach((e) =>
      (e.tags || []).forEach((e) => {
        n[e] = (n[e] || 0) + 1;
      }),
    ),
    Object.entries(n)
      .sort((e, t) => t[1] - e[1])
      .slice(0, t)
      .map(([e, t]) => ({ tag: e, count: t }))
  );
}
function Wt() {
  let [e, t] = (0, S.useState)(null),
    n = e
      ? { prep: e.split(`|`)[0], art: e.split(`|`)[1], form: pt[e.split(`|`)[0]][e.split(`|`)[1]], ...ht[e] }
      : null,
    r = (e, n) => {
      let r = `${e}|${n}`;
      t(r);
      let i = ht[r];
      k() && i && (M(), j(i.ex));
    };
  return (0, w.jsxs)(`div`, {
    children: [
      (0, w.jsxs)(`div`, {
        className: `pl-rule`,
        children: [
          (0, w.jsx)(`b`, { children: `Come due calamite:` }),
          ` preposition + article attract like two magnets and become `,
          (0, w.jsx)(`b`, { children: `one new word` }),
          ` — and the form follows the `,
          (0, w.jsx)(`b`, { children: `article` }),
          ` the noun already takes.`,
          (0, w.jsxs)(`span`, {
            className: `pl-rule-ex`,
            children: [
              `a + il = `,
              (0, w.jsx)(`b`, { children: `al` }),
              ` · su + la = `,
              (0, w.jsx)(`b`, { children: `sulla` }),
              ` · in + gli = `,
              (0, w.jsx)(`b`, { children: `negli` }),
            ],
          }),
          `Know the article, and you know the preposition. One rule — not 35 words to memorise.`,
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `pl-subrules`,
        children: [
          (0, w.jsxs)(`div`, {
            className: `pl-subrule`,
            children: [
              (0, w.jsx)(`b`, { children: `1 · Merge semplice` }),
              ` — with `,
              (0, w.jsx)(`b`, { children: `il` }),
              ` they just join: a+il=`,
              (0, w.jsx)(`b`, { children: `al` }),
              `, da+il=`,
              (0, w.jsx)(`b`, { children: `dal` }),
              `, su+il=`,
              (0, w.jsx)(`b`, { children: `sul` }),
            ],
          }),
          (0, w.jsxs)(`div`, {
            className: `pl-subrule`,
            children: [
              (0, w.jsx)(`b`, { children: `2 · La L raddoppia` }),
              ` — article starts with L? It doubles: a+la=`,
              (0, w.jsx)(`b`, { children: `alla` }),
              `, su+lo=`,
              (0, w.jsx)(`b`, { children: `sullo` }),
              `, a+l'=`,
              (0, w.jsx)(`b`, { children: `all'` }),
            ],
          }),
          (0, w.jsxs)(`div`, {
            className: `pl-subrule`,
            children: [
              (0, w.jsx)(`b`, { children: `3 · di→de, in→ne` }),
              ` — Italian loves vowels: “in il caffè” is hard to say, so it becomes `,
              (0, w.jsx)(`b`, { children: `nel` }),
              ` caffè; di+la=`,
              (0, w.jsx)(`b`, { children: `della` }),
            ],
          }),
        ],
      }),
      (0, w.jsx)(`div`, {
        className: `pl-table-wrap`,
        children: (0, w.jsxs)(`table`, {
          className: `pl-table`,
          children: [
            (0, w.jsx)(`thead`, {
              children: (0, w.jsxs)(`tr`, {
                children: [(0, w.jsx)(`th`, {}), ft.map((e) => (0, w.jsx)(`th`, { children: e }, e))],
              }),
            }),
            (0, w.jsx)(`tbody`, {
              children: dt.map((t) =>
                (0, w.jsxs)(
                  `tr`,
                  {
                    children: [
                      (0, w.jsxs)(`th`, {
                        children: [t, (0, w.jsx)(`span`, { className: `pl-prep-en`, children: mt[t] })],
                      }),
                      ft.map((n) =>
                        (0, w.jsx)(
                          `td`,
                          {
                            children: (0, w.jsx)(`button`, {
                              className: `pl-cell` + (e === `${t}|${n}` ? ` on` : ``),
                              onClick: () => r(t, n),
                              children: pt[t][n],
                            }),
                          },
                          n,
                        ),
                      ),
                    ],
                  },
                  t,
                ),
              ),
            }),
          ],
        }),
      }),
      n &&
        (0, w.jsxs)(`div`, {
          className: `pl-cell-detail`,
          children: [
            (0, w.jsxs)(`span`, {
              className: `pl-eq`,
              children: [
                (0, w.jsx)(`span`, { className: `pl-eq-part`, children: n.prep }),
                (0, w.jsx)(`span`, { className: `pl-eq-plus`, children: `+` }),
                (0, w.jsx)(`span`, { className: `pl-eq-part`, children: n.art }),
                (0, w.jsx)(`span`, { className: `pl-eq-magnet`, children: `=` }),
                (0, w.jsx)(`span`, { className: `pl-cell-form`, children: n.form }),
              ],
            }),
            (0, w.jsxs)(`div`, {
              className: `pl-cell-ex`,
              children: [
                (0, w.jsx)(`span`, { className: `pl-cell-it`, children: n.ex }),
                (0, w.jsx)(`span`, { className: `pl-cell-en`, children: n.en }),
              ],
            }),
            (0, w.jsx)(`button`, {
              className: `icon-play sm lp-speak`,
              onClick: () => {
                (M(), j(n.ex));
              },
              title: `Riascolta`,
              'aria-label': `Riascolta`,
            }),
          ],
        }),
      !n &&
        (0, w.jsx)(`p`, {
          className: `pl-tap-hint`,
          children: `Tocca una casella per sentire la forma in una frase vera.`,
        }),
    ],
  });
}
function Gt() {
  let [e, t] = (0, S.useState)(0),
    n = gt[e];
  return (0, w.jsxs)(`div`, {
    children: [
      (0, w.jsx)(`div`, {
        className: `pl-scene-tabs`,
        children: gt.map((n, r) =>
          (0, w.jsx)(
            `button`,
            {
              className: `pl-scene-tab` + (r === e ? ` on` : ``),
              onClick: () => {
                (M(), t(r));
              },
              children: n.title,
            },
            n.id,
          ),
        ),
      }),
      (0, w.jsxs)(`div`, {
        className: `pl-scene`,
        children: [
          (0, w.jsx)(`img`, { className: `pl-scene-img`, src: n.img, alt: n.title, loading: `lazy` }),
          (0, w.jsxs)(`div`, {
            className: `pl-scene-lines`,
            children: [
              n.lines.map((e, t) =>
                (0, w.jsxs)(
                  `button`,
                  {
                    className: `pl-line`,
                    onClick: () => {
                      (M(), j(e.pre + e.hl + e.post));
                    },
                    children: [
                      (0, w.jsxs)(`span`, {
                        className: `pl-line-it`,
                        children: [e.pre, (0, w.jsx)(`mark`, { className: `pl-hl`, children: e.hl }), e.post],
                      }),
                      (0, w.jsx)(`span`, { className: `pl-line-en`, children: e.en }),
                    ],
                  },
                  t,
                ),
              ),
              (0, w.jsx)(`p`, { className: `pl-tap-hint`, children: `Tocca una frase per ascoltarla.` }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Kt({ items: e, taskId: t }) {
  let [n, r] = (0, S.useState)(0),
    [i, a] = (0, S.useState)(null),
    [o, s] = (0, S.useState)(0),
    [c, l] = (0, S.useState)(!1),
    u = e[n],
    d = (e) => {
      i === null && (a(e), e === u.a && s((e) => e + 1));
    },
    f = () => {
      n + 1 >= e.length
        ? (At({ section: `grammatica`, taskId: t, score: o, max: e.length }), l(!0))
        : (r(n + 1), a(null));
    },
    p = () => {
      (r(0), a(null), s(0), l(!1));
    };
  if (c) {
    let t = o / e.length;
    return (0, w.jsxs)(`div`, {
      className: `pl-done`,
      children: [
        (0, w.jsxs)(`div`, {
          className: `pl-done-score`,
          style: { color: t >= 0.8 ? `#1E6B4F` : t >= 0.55 ? `#C99A2E` : `#A8434B` },
          children: [o, `/`, e.length],
        }),
        (0, w.jsx)(`p`, {
          className: `pl-done-msg`,
          children:
            t >= 0.8
              ? `Fortissimo! Le preposizioni articolate stanno entrando in testa.`
              : t >= 0.55
                ? `Buon lavoro — sei sulla strada giusta. Rivedi la tabella e riprova.`
                : `Ottimo allenamento: torna alla Tabella, poi riprova. Migliorerai subito.`,
        }),
        (0, w.jsx)(`p`, { className: `pl-done-note`, children: `Risultato salvato nei tuoi progressi (Grammatica).` }),
        (0, w.jsx)(`button`, { className: `btn primary`, onClick: p, children: `Riprova` }),
      ],
    });
  }
  return (0, w.jsxs)(`div`, {
    className: `pl-drill`,
    children: [
      (0, w.jsxs)(`div`, {
        className: `pl-drill-top`,
        children: [
          (0, w.jsxs)(`span`, { className: `pl-drill-prog`, children: [n + 1, ` / `, e.length] }),
          (0, w.jsxs)(`span`, { className: `pl-drill-score`, children: [`✓ `, o] }),
        ],
      }),
      u.pic && (0, w.jsx)(`div`, { className: `pl-pic`, 'aria-hidden': `true`, children: u.pic }),
      (0, w.jsx)(`div`, { className: `pl-drill-q`, children: u.q }),
      (0, w.jsx)(`div`, {
        className: `pl-drill-opts`,
        children: u.opts.map((e, t) => {
          let n = `pl-opt`;
          return (
            i !== null && t === u.a ? (n += ` correct`) : i === t && t !== u.a && (n += ` wrong`),
            (0, w.jsx)(`button`, { className: n, disabled: i !== null, onClick: () => d(t), children: e }, t)
          );
        }),
      }),
      i !== null &&
        (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsxs)(`div`, {
              className: `ge-explain`,
              children: [
                (0, w.jsx)(`span`, { children: u.explain }),
              ],
            }),
            (0, w.jsx)(`button`, {
              className: `btn primary sm pl-next`,
              onClick: f,
              children: n + 1 >= e.length ? `Vedi il risultato →` : `Prossima →`,
            }),
          ],
        }),
    ],
  });
}
function qt() {
  return (0, w.jsxs)(`div`, {
    className: `pl-tips`,
    children: [
      yt.map((e) =>
        (0, w.jsxs)(
          `div`,
          {
            className: `pl-tip`,
            children: [
              (0, w.jsxs)(`div`, {
                className: `pl-tip-head`,
                children: [
                  (0, w.jsx)(`span`, { className: `pl-tip-title`, children: e.title }),
                ],
              }),
              (0, w.jsx)(`div`, { className: `pl-tip-hook`, children: e.hook }),
              (0, w.jsx)(`div`, {
                className: `pl-tip-rows`,
                children: e.rows.map((e, t) =>
                  (0, w.jsxs)(
                    `button`,
                    {
                      className: `pl-tip-row`,
                      onClick: () => {
                        (M(), j(e.it));
                      },
                      title: `Ascolta`,
                      children: [
                        (0, w.jsx)(`span`, { className: `pl-tip-it`, children: e.it }),
                        (0, w.jsx)(`span`, { className: `pl-tip-en`, children: e.en }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
              e.watch &&
                (0, w.jsxs)(`div`, {
                  className: `pl-tip-watch`,
                  children: [(0, w.jsx)(`b`, { children: `Occhio:` }), ` `, e.watch],
                }),
            ],
          },
          e.id,
        ),
      ),
      (0, w.jsx)(`p`, { className: `pl-tap-hint`, children: `Tocca una frase per ascoltarla.` }),
    ],
  });
}
var Jt = [
  { id: `tabella`, label: `La Tabella` },
  { id: `trucchi`, label: `Trucchi` },
  { id: `scene`, label: `Nelle Scene` },
  { id: `indovina`, label: `Indovina` },
  { id: `sfida`, label: `Sfida` },
];
function Yt() {
  let [e, t] = (0, S.useState)(`tabella`);
  return (0, w.jsxs)(`section`, {
    className: `card pl-shell`,
    children: [
      (0, w.jsx)(`h2`, { className: `sec-h`, children: `Preposizioni Lab` }),
      (0, w.jsx)(`p`, {
        className: `instr`,
        children: `Impara le preposizioni articolate come nei video di Super Easy Italian: vedile evidenziate in scene vere, ascoltale, poi mettiti alla prova. Segreto: seguono sempre l'articolo.`,
      }),
      (0, w.jsx)(`div`, {
        className: `pl-modes`,
        children: Jt.map((n) =>
          (0, w.jsx)(
            `button`,
            {
              className: `pl-mode` + (e === n.id ? ` on` : ``),
              onClick: () => {
                (M(), t(n.id));
              },
              children: n.label,
            },
            n.id,
          ),
        ),
      }),
      e === `tabella` && (0, w.jsx)(Wt, {}),
      e === `trucchi` && (0, w.jsx)(qt, {}),
      e === `scene` && (0, w.jsx)(Gt, {}),
      e === `indovina` && (0, w.jsx)(Kt, { items: vt, taskId: `prep-indovina` }),
      e === `sfida` && (0, w.jsx)(Kt, { items: _t, taskId: `prep-drill` }),
      (0, w.jsxs)(`div`, {
        className: `pl-use-today`,
        children: [
          (0, w.jsx)(`div`, { className: `pl-use-label`, children: `Usale oggi — in Scrittura e Orale` }),
          bt.map((e, t) =>
            (0, w.jsxs)(
              `div`,
              {
                className: `pl-use-row`,
                children: [
                  (0, w.jsx)(`span`, { className: `pl-use-it`, children: e.it }),
                  (0, w.jsx)(`span`, { className: `pl-use-en`, children: e.en }),
                ],
              },
              t,
            ),
          ),
          (0, w.jsx)(`p`, {
            className: `pl-use-note`,
            children: `La valutazione di Scrittura e Orale segnala già gli errori di preposizione — prova a usarne almeno due oggi.`,
          }),
        ],
      }),
    ],
  });
}
var Xt = tensesRulesData,
  Zt = tensesQuizPastData,
  Qt = tensesQuizFutureData,
  $t = [
    { id: `quando`, label: `Quando si usa` },
    { id: `ppimp`, label: `PP o Imperfetto?` },
    { id: `futuro`, label: `Futuro` },
  ];
function en() {
  return (0, w.jsxs)(`div`, {
    className: `pl-tips`,
    children: [
      Xt.map((e) =>
        (0, w.jsxs)(
          `div`,
          {
            className: `pl-tip`,
            children: [
              (0, w.jsxs)(`div`, {
                className: `pl-tip-head`,
                children: [
                  (0, w.jsx)(`span`, { className: `pl-tip-title`, children: e.title }),
                ],
              }),
              (0, w.jsx)(`div`, { className: `pl-tip-hook`, children: e.hook }),
              (0, w.jsx)(`div`, {
                className: `pl-tip-rows`,
                children: e.rows.map((e, t) =>
                  (0, w.jsxs)(
                    `button`,
                    {
                      className: `pl-tip-row`,
                      onClick: () => {
                        (M(), j(e.it));
                      },
                      title: `Ascolta`,
                      children: [
                        (0, w.jsx)(`span`, { className: `pl-tip-it`, children: e.it }),
                        (0, w.jsx)(`span`, { className: `pl-tip-en`, children: e.en }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
              e.watch &&
                (0, w.jsxs)(`div`, {
                  className: `pl-tip-watch`,
                  children: [(0, w.jsx)(`b`, { children: `Occhio:` }), ` `, e.watch],
                }),
            ],
          },
          e.id,
        ),
      ),
      (0, w.jsx)(`p`, { className: `pl-tap-hint`, children: `Tocca una frase per ascoltarla.` }),
    ],
  });
}
function tn() {
  let [e, t] = (0, S.useState)(`quando`);
  return (0, w.jsxs)(`section`, {
    className: `card pl-shell`,
    children: [
      (0, w.jsx)(`h2`, { className: `sec-h`, children: `Tempi a confronto` }),
      (0, w.jsxs)(`p`, {
        className: `instr`,
        children: [
          `Passato prossimo, imperfetto o futuro? La regola-fotografia: il passato prossimo è una `,
          (0, w.jsx)(`b`, { children: `foto` }),
          ` (un fatto finito), l'imperfetto è il `,
          (0, w.jsx)(`b`, { children: `video` }),
          ` (sfondo e abitudini), il futuro è il `,
          (0, w.jsx)(`b`, { children: `programma` }),
          `.`,
        ],
      }),
      (0, w.jsx)(`div`, {
        className: `pl-modes`,
        children: $t.map((n) =>
          (0, w.jsx)(
            `button`,
            {
              className: `pl-mode` + (e === n.id ? ` on` : ``),
              onClick: () => {
                (M(), t(n.id));
              },
              children: n.label,
            },
            n.id,
          ),
        ),
      }),
      e === `quando` && (0, w.jsx)(en, {}),
      e === `ppimp` && (0, w.jsx)(Kt, { items: Zt, taskId: `tempi-ppimp` }),
      e === `futuro` && (0, w.jsx)(Kt, { items: Qt, taskId: `tempi-fut` }),
    ],
  });
}
var nn = [
    {
      id: `presente`,
      label: `Presente Indicativo`,
      emoji: `🟢`,
      content: () =>
        (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsx)(`p`, {
              className: `gn-intro`,
              children: `Use the presente to talk about habits, facts, and things happening now.`,
            }),
            (0, w.jsx)(`div`, {
              className: `gn-table-wrap`,
              children: (0, w.jsxs)(`table`, {
                className: `gn-table`,
                children: [
                  (0, w.jsx)(`thead`, {
                    children: (0, w.jsxs)(`tr`, {
                      children: [
                        (0, w.jsx)(`th`, { children: `Pronoun` }),
                        (0, w.jsx)(`th`, { children: `-ARE (parlare)` }),
                        (0, w.jsx)(`th`, { children: `-ERE (scrivere)` }),
                        (0, w.jsx)(`th`, { children: `-IRE (dormire)` }),
                        (0, w.jsx)(`th`, { children: `-IRE isc (finire)` }),
                      ],
                    }),
                  }),
                  (0, w.jsx)(`tbody`, {
                    children: [
                      [`io`, `parl<b>o</b>`, `scriv<b>o</b>`, `dorm<b>o</b>`, `fin<b>isco</b>`],
                      [`tu`, `parl<b>i</b>`, `scriv<b>i</b>`, `dorm<b>i</b>`, `fin<b>isci</b>`],
                      [`lui/lei`, `parl<b>a</b>`, `scriv<b>e</b>`, `dorm<b>e</b>`, `fin<b>isce</b>`],
                      [`noi`, `parl<b>iamo</b>`, `scriv<b>iamo</b>`, `dorm<b>iamo</b>`, `fin<b>iamo</b>`],
                      [`voi`, `parl<b>ate</b>`, `scriv<b>ete</b>`, `dorm<b>ite</b>`, `fin<b>ite</b>`],
                      [`loro`, `parl<b>ano</b>`, `scriv<b>ono</b>`, `dorm<b>ono</b>`, `fin<b>iscono</b>`],
                    ].map(([e, ...t]) =>
                      (0, w.jsxs)(
                        `tr`,
                        {
                          children: [
                            (0, w.jsx)(`td`, { className: `pron`, children: e }),
                            t.map((e, t) => (0, w.jsx)(`td`, { dangerouslySetInnerHTML: { __html: e } }, t)),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            (0, w.jsxs)(`div`, {
              className: `gn-tip`,
              children: [
                (0, w.jsx)(`b`, { children: `Irregular verbs to memorise:` }),
                (0, w.jsx)(`br`, {}),
                (0, w.jsx)(`span`, { className: `gn-irreg`, children: `essere` }),
                ` → sono, sei, è, siamo, siete, sono`,
                (0, w.jsx)(`br`, {}),
                (0, w.jsx)(`span`, { className: `gn-irreg`, children: `avere` }),
                ` → ho, hai, ha, abbiamo, avete, hanno`,
                (0, w.jsx)(`br`, {}),
                (0, w.jsx)(`span`, { className: `gn-irreg`, children: `andare` }),
                ` → vado, vai, va, andiamo, andate, vanno`,
                (0, w.jsx)(`br`, {}),
                (0, w.jsx)(`span`, { className: `gn-irreg`, children: `fare` }),
                ` → faccio, fai, fa, facciamo, fate, fanno`,
                (0, w.jsx)(`br`, {}),
                (0, w.jsx)(`span`, { className: `gn-irreg`, children: `venire` }),
                ` → vengo, vieni, viene, veniamo, venite, vengono`,
                (0, w.jsx)(`br`, {}),
                (0, w.jsx)(`span`, { className: `gn-irreg`, children: `uscire` }),
                ` → esco, esci, esce, usciamo, uscite, escono`,
                (0, w.jsx)(`br`, {}),
                (0, w.jsx)(`span`, { className: `gn-irreg`, children: `volere` }),
                ` → voglio, vuoi, vuole, vogliamo, volete, vogliono`,
                (0, w.jsx)(`br`, {}),
                (0, w.jsx)(`span`, { className: `gn-irreg`, children: `potere` }),
                ` → posso, puoi, può, possiamo, potete, possono`,
                (0, w.jsx)(`br`, {}),
                (0, w.jsx)(`span`, { className: `gn-irreg`, children: `dovere` }),
                ` → devo, devi, deve, dobbiamo, dovete, devono`,
              ],
            }),
          ],
        }),
    },
    {
      id: `passato`,
      label: `Passato Prossimo`,
      emoji: `⏮️`,
      content: () =>
        (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsx)(`p`, {
              className: `gn-intro`,
              children: `Use passato prossimo for completed actions with a link to the present: "I went", "I have eaten".`,
            }),
            (0, w.jsxs)(`div`, {
              className: `gn-rule-box`,
              children: [
                (0, w.jsx)(`b`, { children: `Formula:` }),
                ` `,
                (0, w.jsx)(`span`, {
                  className: `gn-formula`,
                  children: `avere / essere (presente) + participio passato`,
                }),
              ],
            }),
            (0, w.jsxs)(`div`, {
              className: `gn-two-col`,
              children: [
                (0, w.jsxs)(`div`, {
                  children: [
                    (0, w.jsx)(`div`, { className: `gn-sub`, children: `With AVERE (most verbs)` }),
                    (0, w.jsx)(`table`, {
                      className: `gn-table sm`,
                      children: (0, w.jsx)(`tbody`, {
                        children: [
                          [`io`, `ho parlato`],
                          [`tu`, `hai parlato`],
                          [`lui/lei`, `ha parlato`],
                          [`noi`, `abbiamo parlato`],
                          [`voi`, `avete parlato`],
                          [`loro`, `hanno parlato`],
                        ].map(([e, t]) =>
                          (0, w.jsxs)(
                            `tr`,
                            {
                              children: [
                                (0, w.jsx)(`td`, { className: `pron`, children: e }),
                                (0, w.jsx)(`td`, { children: t }),
                              ],
                            },
                            e,
                          ),
                        ),
                      }),
                    }),
                  ],
                }),
                (0, w.jsxs)(`div`, {
                  children: [
                    (0, w.jsx)(`div`, { className: `gn-sub`, children: `With ESSERE (motion/state verbs)` }),
                    (0, w.jsx)(`table`, {
                      className: `gn-table sm`,
                      children: (0, w.jsx)(`tbody`, {
                        children: [
                          [`io (m/f)`, `sono andato/a`],
                          [`tu (m/f)`, `sei andato/a`],
                          [`lui`, `è andato`],
                          [`lei`, `è andata`],
                          [`noi`, `siamo andati/e`],
                          [`loro`, `sono andati/e`],
                        ].map(([e, t]) =>
                          (0, w.jsxs)(
                            `tr`,
                            {
                              children: [
                                (0, w.jsx)(`td`, { className: `pron`, children: e }),
                                (0, w.jsx)(`td`, { children: t }),
                              ],
                            },
                            e,
                          ),
                        ),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, w.jsxs)(`div`, {
              className: `gn-tip`,
              children: [
                (0, w.jsx)(`b`, { children: `Verbs that take ESSERE` }),
                ` (past participle agrees with subject gender/number):`,
                (0, w.jsx)(`br`, {}),
                `andare, venire, partire, arrivare, uscire, entrare, tornare, restare, rimanere, nascere, morire, essere, diventare, salire, scendere, trasferirsi (reflexives always use essere)`,
              ],
            }),
            (0, w.jsx)(`div`, {
              className: `gn-sub`,
              style: { marginTop: 14 },
              children: `Participio Passato — patterns`,
            }),
            (0, w.jsxs)(`table`, {
              className: `gn-table`,
              children: [
                (0, w.jsx)(`thead`, {
                  children: (0, w.jsxs)(`tr`, {
                    children: [
                      (0, w.jsx)(`th`, { children: `Infinitive ending` }),
                      (0, w.jsx)(`th`, { children: `→ Participio` }),
                      (0, w.jsx)(`th`, { children: `Example` }),
                    ],
                  }),
                }),
                (0, w.jsx)(`tbody`, {
                  children: [
                    [`-ARE`, `-ATO`, `parlare → parlato`],
                    [`-ERE`, `-UTO`, `avere → avuto`],
                    [`-IRE`, `-ITO`, `finire → finito`],
                  ].map(([e, t, n]) =>
                    (0, w.jsxs)(
                      `tr`,
                      {
                        children: [
                          (0, w.jsx)(`td`, { children: e }),
                          (0, w.jsx)(`td`, { children: (0, w.jsx)(`b`, { children: t }) }),
                          (0, w.jsx)(`td`, { className: `gn-ex`, children: n }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            (0, w.jsxs)(`div`, {
              className: `gn-tip`,
              children: [
                (0, w.jsx)(`b`, { children: `Irregular participi:` }),
                (0, w.jsx)(`br`, {}),
                `essere → stato · fare → fatto · dire → detto · scrivere → scritto`,
                (0, w.jsx)(`br`, {}),
                `leggere → letto · aprire → aperto · prendere → preso · mettere → messo`,
                (0, w.jsx)(`br`, {}),
                `vedere → visto · venire → venuto · rimanere → rimasto · nascere → nato`,
              ],
            }),
          ],
        }),
    },
    {
      id: `imperfetto`,
      label: `Imperfetto`,
      emoji: `🔁`,
      content: () =>
        (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsx)(`p`, {
              className: `gn-intro`,
              children: `Use imperfetto for repeated/habitual past actions, descriptions, and ongoing background states.`,
            }),
            (0, w.jsxs)(`div`, {
              className: `gn-rule-box`,
              children: [
                (0, w.jsx)(`b`, { children: `When to use it:` }),
                (0, w.jsx)(`br`, {}),
                `Habits in the past: `,
                (0, w.jsx)(`i`, { children: `Da bambino giocavo ogni giorno.` }),
                (0, w.jsx)(`br`, {}),
                `Descriptions: `,
                (0, w.jsx)(`i`, { children: `La casa era grande e luminosa.` }),
                (0, w.jsx)(`br`, {}),
                `Ongoing action interrupted: `,
                (0, w.jsx)(`i`, { children: `Dormivo quando ha suonato il telefono.` }),
                (0, w.jsx)(`br`, {}),
                `Age/time/weather in the past: `,
                (0, w.jsx)(`i`, { children: `Erano le tre. Faceva freddo.` }),
              ],
            }),
            (0, w.jsx)(`div`, {
              className: `gn-table-wrap`,
              children: (0, w.jsxs)(`table`, {
                className: `gn-table`,
                children: [
                  (0, w.jsx)(`thead`, {
                    children: (0, w.jsxs)(`tr`, {
                      children: [
                        (0, w.jsx)(`th`, { children: `Pronoun` }),
                        (0, w.jsx)(`th`, { children: `-ARE (parlare)` }),
                        (0, w.jsx)(`th`, { children: `-ERE (scrivere)` }),
                        (0, w.jsx)(`th`, { children: `-IRE (dormire)` }),
                      ],
                    }),
                  }),
                  (0, w.jsx)(`tbody`, {
                    children: [
                      [`io`, `parlavo`, `scrivevo`, `dormivo`],
                      [`tu`, `parlavi`, `scrivevi`, `dormivi`],
                      [`lui/lei`, `parlava`, `scriveva`, `dormiva`],
                      [`noi`, `parlavamo`, `scrivevamo`, `dormivamo`],
                      [`voi`, `parlavate`, `scrivevate`, `dormivate`],
                      [`loro`, `parlavano`, `scrivevano`, `dormivano`],
                    ].map(([e, ...t]) =>
                      (0, w.jsxs)(
                        `tr`,
                        {
                          children: [
                            (0, w.jsx)(`td`, { className: `pron`, children: e }),
                            t.map((e, t) => (0, w.jsx)(`td`, { children: e }, t)),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            (0, w.jsxs)(`div`, {
              className: `gn-tip`,
              children: [
                (0, w.jsx)(`b`, { children: `Irregular:` }),
                (0, w.jsx)(`br`, {}),
                `essere → ero, eri, era, eravamo, eravate, erano`,
                (0, w.jsx)(`br`, {}),
                `fare → facevo, facevi, faceva…`,
                (0, w.jsx)(`br`, {}),
                `dire → dicevo, dicevi, diceva…`,
                (0, w.jsx)(`br`, {}),
                `bere → bevevo, bevevi, beveva…`,
              ],
            }),
            (0, w.jsxs)(`div`, {
              className: `gn-rule-box`,
              style: { marginTop: 12 },
              children: [
                (0, w.jsx)(`b`, { children: `Passato prossimo vs Imperfetto:` }),
                (0, w.jsx)(`br`, {}),
                (0, w.jsxs)(`i`, { children: [`Ieri `, (0, w.jsx)(`b`, { children: `ho mangiato` }), ` la pizza.`] }),
                ` (single completed event → PP)`,
                (0, w.jsx)(`br`, {}),
                (0, w.jsxs)(`i`, {
                  children: [`Da bambino `, (0, w.jsx)(`b`, { children: `mangiavo` }), ` sempre la pizza.`],
                }),
                ` (repeated habit → Imperfetto)`,
                (0, w.jsx)(`br`, {}),
                (0, w.jsxs)(`i`, {
                  children: [
                    (0, w.jsx)(`b`, { children: `Leggevo` }),
                    ` un libro quando `,
                    (0, w.jsx)(`b`, { children: `è arrivato` }),
                    ` Marco.`,
                  ],
                }),
                ` (background + event → Imp + PP)`,
              ],
            }),
          ],
        }),
    },
    { id: `tempi`, label: `Tempi a confronto`, emoji: `⏳`, content: () => null },
    {
      id: `pronomi`,
      label: `Pronomi`,
      emoji: `🎯`,
      content: () =>
        (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsxs)(`p`, {
              className: `gn-intro`,
              children: [
                `Pronouns replace a person or thing you already mentioned — so you don't repeat it. The exam loves them. Two families: `,
                (0, w.jsx)(`b`, { children: `diretti` }),
                ` (who/what receives the action) and `,
                (0, w.jsx)(`b`, { children: `indiretti` }),
                ` (TO whom).`,
              ],
            }),
            (0, w.jsx)(`h4`, { className: `gn-sub`, children: `Diretti — lo, la, li, le (him/her/it/them)` }),
            (0, w.jsx)(`table`, {
              className: `gn-table`,
              children: (0, w.jsx)(`tbody`, {
                children: [
                  [`lo`, `him / it (m)`, `Conosci Marco? Sì, lo conosco.`],
                  [`la`, `her / it (f)`, `Vedi Maria? Sì, la vedo.`],
                  [`li`, `them (m)`, `I libri? Li compro domani.`],
                  [`le`, `them (f)`, `Le chiavi? Le ho perse!`],
                ].map(([e, t, n]) =>
                  (0, w.jsxs)(
                    `tr`,
                    {
                      children: [
                        (0, w.jsx)(`td`, { className: `pron`, children: e }),
                        (0, w.jsx)(`td`, { children: t }),
                        (0, w.jsx)(`td`, { className: `gn-ex`, children: n }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
            }),
            (0, w.jsx)(`h4`, {
              className: `gn-sub`,
              children: `Indiretti — mi, ti, gli, le, ci, vi (to me, to you, to him…)`,
            }),
            (0, w.jsx)(`table`, {
              className: `gn-table`,
              children: (0, w.jsx)(`tbody`, {
                children: [
                  [`mi`, `to me`, `Mi dai il numero?`],
                  [`ti`, `to you`, `Ti scrivo domani.`],
                  [`gli`, `to him / to them`, `Gli telefono stasera.`],
                  [`le`, `to her / to you (Lei)`, `Le porto il menù, signora.`],
                  [`ci`, `to us`, `Il cameriere ci porta il conto.`],
                  [`vi`, `to you all`, `Vi mando le foto.`],
                ].map(([e, t, n]) =>
                  (0, w.jsxs)(
                    `tr`,
                    {
                      children: [
                        (0, w.jsx)(`td`, { className: `pron`, children: e }),
                        (0, w.jsx)(`td`, { children: t }),
                        (0, w.jsx)(`td`, { className: `gn-ex`, children: n }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
            }),
            (0, w.jsx)(`h4`, { className: `gn-sub`, children: `Le 3 regole che l'esame controlla` }),
            (0, w.jsxs)(`p`, {
              className: `gn-note`,
              children: [
                `1. The pronoun goes `,
                (0, w.jsx)(`b`, { children: `BEFORE` }),
                ` the conjugated verb: `,
                (0, w.jsx)(`i`, { children: `La vedo` }),
                ` (not "vedo la"). With an infinitive or imperative it attaches to the end: `,
                (0, w.jsxs)(`i`, {
                  children: [
                    `Puoi aiutar`,
                    (0, w.jsx)(`b`, { children: `mi` }),
                    `? Aspetta`,
                    (0, w.jsx)(`b`, { children: `mi` }),
                    `!`,
                  ],
                }),
              ],
            }),
            (0, w.jsxs)(`p`, {
              className: `gn-note`,
              children: [
                `2. With the passato prossimo, `,
                (0, w.jsx)(`b`, { children: `lo/la/li/le make the participle agree` }),
                `: `,
                (0, w.jsxs)(`i`, { children: [`Le mele? Le ho comprat`, (0, w.jsx)(`b`, { children: `e` }), `.`] }),
                ` · `,
                (0, w.jsxs)(`i`, { children: [`Maria? L'ho vist`, (0, w.jsx)(`b`, { children: `a` }), ` ieri.`] }),
              ],
            }),
            (0, w.jsxs)(`p`, {
              className: `gn-note`,
              children: [
                `3. Verbs with `,
                (0, w.jsx)(`b`, { children: `a` }),
                ` (telefonare a, scrivere a, dare a, piacere a) take the INDIRECT pronoun: `,
                (0, w.jsxs)(`i`, { children: [(0, w.jsx)(`b`, { children: `Gli` }), ` telefono`] }),
                ` (a Marco) — not "lo telefono".`,
              ],
            }),
          ],
        }),
    },
    {
      id: `articles`,
      label: `Articles`,
      emoji: `📌`,
      content: () =>
        (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsxs)(`p`, {
              className: `gn-intro`,
              children: [
                `The article depends on the `,
                (0, w.jsx)(`b`, { children: `sound` }),
                ` that follows it — not the spelling. Train your ear on the trigger sounds below.`,
              ],
            }),
            (0, w.jsx)(`div`, { className: `gn-sub`, children: `Sound → Article (singular)` }),
            (0, w.jsx)(`div`, {
              className: `art-grid`,
              children: [
                {
                  trigger: `Normal consonant`,
                  ex: `b, c, d, f, l, m, n, p, r, t, v…`,
                  masc: `il`,
                  fem: `la`,
                  color: `#3b82f6`,
                },
                { trigger: `Vowel sound`, ex: `a, e, i, o, u…`, masc: `l'`, fem: `l'`, color: `#8b5cf6` },
                { trigger: `Tricky consonant`, ex: `s+cons, z, gn, ps, x…`, masc: `lo`, fem: `la`, color: `#f59e0b` },
              ].map(({ trigger: e, ex: t, masc: n, fem: r, color: i }) =>
                (0, w.jsxs)(
                  `div`,
                  {
                    className: `art-card`,
                    style: { borderColor: i },
                    children: [
                      (0, w.jsx)(`div`, { className: `art-trigger`, style: { background: i }, children: e }),
                      (0, w.jsx)(`div`, { className: `art-ex`, children: t }),
                      (0, w.jsxs)(`div`, {
                        className: `art-forms`,
                        children: [
                          (0, w.jsxs)(`span`, {
                            className: `art-pill m`,
                            style: { background: i + `22`, color: i },
                            children: [`m. `, n],
                          }),
                          (0, w.jsxs)(`span`, {
                            className: `art-pill f`,
                            style: { background: i + `22`, color: i },
                            children: [`f. `, r],
                          }),
                        ],
                      }),
                    ],
                  },
                  e,
                ),
              ),
            }),
            (0, w.jsx)(`div`, { className: `gn-sub`, style: { marginTop: `1rem` }, children: `Plural` }),
            (0, w.jsx)(`div`, {
              className: `art-grid`,
              children: [
                { trigger: `Normal consonant`, masc: `i`, fem: `le`, color: `#3b82f6` },
                { trigger: `Vowel / tricky cons.`, masc: `gli`, fem: `le`, color: `#8b5cf6` },
              ].map(({ trigger: e, masc: t, fem: n, color: r }) =>
                (0, w.jsxs)(
                  `div`,
                  {
                    className: `art-card`,
                    style: { borderColor: r },
                    children: [
                      (0, w.jsx)(`div`, { className: `art-trigger`, style: { background: r }, children: e }),
                      (0, w.jsxs)(`div`, {
                        className: `art-forms`,
                        children: [
                          (0, w.jsxs)(`span`, {
                            className: `art-pill m`,
                            style: { background: r + `22`, color: r },
                            children: [`m. `, t],
                          }),
                          (0, w.jsxs)(`span`, {
                            className: `art-pill f`,
                            style: { background: r + `22`, color: r },
                            children: [`f. `, n],
                          }),
                        ],
                      }),
                    ],
                  },
                  e,
                ),
              ),
            }),
            (0, w.jsx)(`div`, {
              className: `gn-sub`,
              style: { marginTop: `1rem` },
              children: `Indefinite article (a / an) — only singular`,
            }),
            (0, w.jsx)(`div`, {
              className: `art-grid`,
              children: [
                { trigger: `Normal consonant`, masc: `un`, fem: `una`, color: `#3b82f6` },
                { trigger: `Vowel sound`, masc: `un`, fem: `un'`, color: `#8b5cf6` },
                { trigger: `Tricky consonant`, masc: `uno`, fem: `una`, color: `#f59e0b` },
              ].map(({ trigger: e, masc: t, fem: n, color: r }) =>
                (0, w.jsxs)(
                  `div`,
                  {
                    className: `art-card`,
                    style: { borderColor: r },
                    children: [
                      (0, w.jsx)(`div`, { className: `art-trigger`, style: { background: r }, children: e }),
                      (0, w.jsxs)(`div`, {
                        className: `art-forms`,
                        children: [
                          (0, w.jsxs)(`span`, {
                            className: `art-pill m`,
                            style: { background: r + `22`, color: r },
                            children: [`m. `, t],
                          }),
                          (0, w.jsxs)(`span`, {
                            className: `art-pill f`,
                            style: { background: r + `22`, color: r },
                            children: [`f. `, n],
                          }),
                        ],
                      }),
                    ],
                  },
                  e,
                ),
              ),
            }),
            (0, w.jsxs)(`div`, {
              className: `gn-tip`,
              style: { marginTop: `1rem` },
              children: [
                (0, w.jsx)(`b`, { children: `Memory trick — "Lo/Gli/Uno" words (tricky consonants):` }),
                (0, w.jsx)(`br`, {}),
                (0, w.jsx)(`b`, { children: `S` }),
                `tudente · `,
                (0, w.jsx)(`b`, { children: `Z` }),
                `aino · `,
                (0, w.jsx)(`b`, { children: `Gn` }),
                `occhi · `,
                (0, w.jsx)(`b`, { children: `Ps` }),
                `icologo · `,
                (0, w.jsx)(`b`, { children: `X` }),
                `enofobia`,
                (0, w.jsx)(`br`, {}),
                (0, w.jsx)(`i`, { children: `Think: "Special consonants get the special article."` }),
              ],
            }),
            (0, w.jsxs)(`div`, {
              className: `gn-tip`,
              children: [
                (0, w.jsx)(`b`, { children: `Quick examples:` }),
                (0, w.jsx)(`br`, {}),
                `il libro → i libri \xA0|\xA0 lo studente → gli studenti \xA0|\xA0 l'amico → gli amici`,
                (0, w.jsx)(`br`, {}),
                `la casa → le case \xA0|\xA0 l'amica → le amiche`,
                (0, w.jsx)(`br`, {}),
                `un ragazzo · uno zaino · una donna · un'ora`,
              ],
            }),
          ],
        }),
    },
    {
      id: `preposizioni`,
      label: `Prepositions`,
      emoji: `🔗`,
      content: () =>
        (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsxs)(`p`, {
              className: `gn-intro`,
              children: [
                `There are 8 simple prepositions. The most confusing ones are `,
                (0, w.jsx)(`b`, { children: `A vs IN` }),
                ` (location) and `,
                (0, w.jsx)(`b`, { children: `DA vs DI` }),
                ` (origin/possession). Use the visual cues below.`,
              ],
            }),
            (0, w.jsx)(`div`, { className: `gn-sub`, children: `🗺️ A vs IN — where are you?` }),
            (0, w.jsxs)(`div`, {
              className: `prep-compare`,
              children: [
                (0, w.jsxs)(`div`, {
                  className: `prep-box`,
                  style: { borderColor: `#3b82f6` },
                  children: [
                    (0, w.jsx)(`div`, { className: `prep-badge`, style: { background: `#3b82f6` }, children: `A` }),
                    (0, w.jsx)(`div`, { className: `prep-rule`, children: `Cities & specific places` }),
                    (0, w.jsxs)(`div`, {
                      className: `prep-examples`,
                      children: [
                        `Vado `,
                        (0, w.jsx)(`b`, { children: `a` }),
                        ` Roma 🏛️`,
                        (0, w.jsx)(`br`, {}),
                        `Sono `,
                        (0, w.jsx)(`b`, { children: `a` }),
                        ` casa 🏠`,
                        (0, w.jsx)(`br`, {}),
                        `Vado `,
                        (0, w.jsx)(`b`, { children: `al` }),
                        ` bar ☕`,
                        (0, w.jsx)(`br`, {}),
                        (0, w.jsx)(`b`, { children: `A` }),
                        ` mezzogiorno 🕛`,
                      ],
                    }),
                  ],
                }),
                (0, w.jsxs)(`div`, {
                  className: `prep-box`,
                  style: { borderColor: `#8b5cf6` },
                  children: [
                    (0, w.jsx)(`div`, { className: `prep-badge`, style: { background: `#8b5cf6` }, children: `IN` }),
                    (0, w.jsx)(`div`, { className: `prep-rule`, children: `Countries, regions & rooms` }),
                    (0, w.jsxs)(`div`, {
                      className: `prep-examples`,
                      children: [
                        `Vivo `,
                        (0, w.jsx)(`b`, { children: `in` }),
                        ` Italia 🇮🇹`,
                        (0, w.jsx)(`br`, {}),
                        (0, w.jsx)(`b`, { children: `In` }),
                        ` Toscana 🌿`,
                        (0, w.jsx)(`br`, {}),
                        (0, w.jsx)(`b`, { children: `In` }),
                        ` cucina 🍳`,
                        (0, w.jsx)(`br`, {}),
                        (0, w.jsx)(`b`, { children: `In` }),
                        ` treno 🚆`,
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, w.jsx)(`div`, {
              className: `gn-sub`,
              style: { marginTop: `1rem` },
              children: `🔄 DA vs DI — where from / whose?`,
            }),
            (0, w.jsxs)(`div`, {
              className: `prep-compare`,
              children: [
                (0, w.jsxs)(`div`, {
                  className: `prep-box`,
                  style: { borderColor: `#f59e0b` },
                  children: [
                    (0, w.jsx)(`div`, { className: `prep-badge`, style: { background: `#f59e0b` }, children: `DA` }),
                    (0, w.jsx)(`div`, {
                      className: `prep-rule`,
                      children: `Origin · duration · going to someone's place`,
                    }),
                    (0, w.jsxs)(`div`, {
                      className: `prep-examples`,
                      children: [
                        `Vengo `,
                        (0, w.jsx)(`b`, { children: `da` }),
                        ` Napoli 📍`,
                        (0, w.jsx)(`br`, {}),
                        `Studio `,
                        (0, w.jsx)(`b`, { children: `da` }),
                        ` tre anni ⏳`,
                        (0, w.jsx)(`br`, {}),
                        `Vado `,
                        (0, w.jsx)(`b`, { children: `dal` }),
                        ` medico 👨‍⚕️`,
                      ],
                    }),
                  ],
                }),
                (0, w.jsxs)(`div`, {
                  className: `prep-box`,
                  style: { borderColor: `#10b981` },
                  children: [
                    (0, w.jsx)(`div`, { className: `prep-badge`, style: { background: `#10b981` }, children: `DI` }),
                    (0, w.jsx)(`div`, { className: `prep-rule`, children: `Possession · topic · material` }),
                    (0, w.jsxs)(`div`, {
                      className: `prep-examples`,
                      children: [
                        `Il libro `,
                        (0, w.jsx)(`b`, { children: `di` }),
                        ` Maria 📖`,
                        (0, w.jsx)(`br`, {}),
                        `Sono `,
                        (0, w.jsx)(`b`, { children: `di` }),
                        ` Roma 🏠`,
                        (0, w.jsx)(`br`, {}),
                        `Parliamo `,
                        (0, w.jsx)(`b`, { children: `di` }),
                        ` calcio ⚽`,
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, w.jsx)(`div`, {
              className: `gn-sub`,
              style: { marginTop: `1rem` },
              children: `All 8 prepositions at a glance`,
            }),
            (0, w.jsx)(`div`, {
              className: `gn-table-wrap`,
              children: (0, w.jsxs)(`table`, {
                className: `gn-table`,
                children: [
                  (0, w.jsx)(`thead`, {
                    children: (0, w.jsxs)(`tr`, {
                      children: [
                        (0, w.jsx)(`th`, { children: `Prep.` }),
                        (0, w.jsx)(`th`, { children: `Main uses` }),
                        (0, w.jsx)(`th`, { children: `Example` }),
                      ],
                    }),
                  }),
                  (0, w.jsx)(`tbody`, {
                    children: [
                      [`DI`, `possession, origin, topic`, `Il libro di Maria. Sono di Roma.`],
                      [`A`, `cities, specific places, time`, `Vado a Roma. A mezzogiorno.`],
                      [`DA`, `origin, duration, at someone's place`, `Da Napoli. Studio da 3 anni. Dal medico.`],
                      [`IN`, `countries, rooms, transport`, `In Italia. In cucina. In treno.`],
                      [`CON`, `with, together`, `Vengo con te.`],
                      [`SU`, `on top of, about`, `Sul tavolo. Un film su Roma.`],
                      [`PER`, `for, in order to`, `Questo è per te. Parto per lavoro.`],
                      [`TRA / FRA`, `between, in (future)`, `Tra due ore. Fra amici.`],
                    ].map(([e, t, n]) =>
                      (0, w.jsxs)(
                        `tr`,
                        {
                          children: [
                            (0, w.jsx)(`td`, { children: (0, w.jsx)(`b`, { className: `gn-prep`, children: e }) }),
                            (0, w.jsx)(`td`, { className: `gn-use`, children: t }),
                            (0, w.jsx)(`td`, { className: `gn-ex`, children: n }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            (0, w.jsx)(`div`, {
              className: `gn-sub`,
              style: { marginTop: `1rem` },
              children: `Preposizioni Articolate — prep + article fused`,
            }),
            (0, w.jsxs)(`div`, {
              className: `gn-tip`,
              style: { marginBottom: `.5rem` },
              children: [(0, w.jsx)(`b`, { children: `Only DI · A · DA · IN · SU` }), ` combine. CON and PER do not.`],
            }),
            (0, w.jsx)(`div`, {
              className: `gn-table-wrap`,
              children: (0, w.jsxs)(`table`, {
                className: `gn-table prep-art-table`,
                children: [
                  (0, w.jsx)(`thead`, {
                    children: (0, w.jsxs)(`tr`, {
                      children: [
                        (0, w.jsx)(`th`, {}),
                        (0, w.jsx)(`th`, { children: `il` }),
                        (0, w.jsx)(`th`, { children: `lo` }),
                        (0, w.jsx)(`th`, { children: `l'` }),
                        (0, w.jsx)(`th`, { children: `la` }),
                        (0, w.jsx)(`th`, { children: `i` }),
                        (0, w.jsx)(`th`, { children: `gli` }),
                        (0, w.jsx)(`th`, { children: `le` }),
                      ],
                    }),
                  }),
                  (0, w.jsx)(`tbody`, {
                    children: [
                      [`DI`, `del`, `dello`, `dell'`, `della`, `dei`, `degli`, `delle`, `#10b981`],
                      [`A`, `al`, `allo`, `all'`, `alla`, `ai`, `agli`, `alle`, `#3b82f6`],
                      [`DA`, `dal`, `dallo`, `dall'`, `dalla`, `dai`, `dagli`, `dalle`, `#f59e0b`],
                      [`IN`, `nel`, `nello`, `nell'`, `nella`, `nei`, `negli`, `nelle`, `#8b5cf6`],
                      [`SU`, `sul`, `sullo`, `sull'`, `sulla`, `sui`, `sugli`, `sulle`, `#ef4444`],
                    ].map(([e, ...t]) =>
                      (0, w.jsxs)(
                        `tr`,
                        {
                          children: [
                            (0, w.jsx)(`td`, { style: { color: t.pop(), fontWeight: `bold` }, children: e }),
                            t.map((e, t) => (0, w.jsx)(`td`, { children: e }, t)),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            (0, w.jsxs)(`div`, {
              className: `gn-tip`,
              children: [
                (0, w.jsx)(`b`, { children: `Pattern to notice:` }),
                ` the ending always matches the article — `,
                (0, w.jsx)(`i`, { children: `del` }),
                ` = DI + il, `,
                (0, w.jsx)(`i`, { children: `alla` }),
                ` = A + la, `,
                (0, w.jsx)(`i`, { children: `negli` }),
                ` = IN + gli. Once you know your articles, the combined forms follow automatically.`,
              ],
            }),
          ],
        }),
    },
    {
      id: `interrogativi`,
      label: `Question Words`,
      emoji: `❓`,
      content: () =>
        (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsx)(`p`, {
              className: `gn-intro`,
              children: `Italian interrogativi — words used to ask questions.`,
            }),
            (0, w.jsxs)(`table`, {
              className: `gn-table`,
              children: [
                (0, w.jsx)(`thead`, {
                  children: (0, w.jsxs)(`tr`, {
                    children: [
                      (0, w.jsx)(`th`, { children: `Italian` }),
                      (0, w.jsx)(`th`, { children: `English` }),
                      (0, w.jsx)(`th`, { children: `Example` }),
                    ],
                  }),
                }),
                (0, w.jsx)(`tbody`, {
                  children: [
                    [`Chi?`, `Who?`, `Chi è quella donna?`],
                    [`Che cosa? / Cosa? / Che?`, `What?`, `Che cosa fai stasera?`],
                    [`Dove?`, `Where?`, `Dove abiti?`],
                    [`Quando?`, `When?`, `Quando arrivi?`],
                    [`Come?`, `How?`, `Come stai?`],
                    [`Perché?`, `Why?`, `Perché non vieni?`],
                    [`Quanto/a?`, `How much?`, `Quanto costa?`],
                    [`Quanti/e?`, `How many?`, `Quanti anni hai?`],
                    [`Quale/i?`, `Which?`, `Quale preferisci?`],
                    [`Di dove?`, `Where from?`, `Di dove sei?`],
                    [`A che ora?`, `At what time?`, `A che ora parte il treno?`],
                    [`Da quanto tempo?`, `How long (since)?`, `Da quanto tempo studi italiano?`],
                  ].map(([e, t, n]) =>
                    (0, w.jsxs)(
                      `tr`,
                      {
                        children: [
                          (0, w.jsx)(`td`, { children: (0, w.jsx)(`b`, { children: e }) }),
                          (0, w.jsx)(`td`, { children: t }),
                          (0, w.jsx)(`td`, { className: `gn-ex`, children: n }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            (0, w.jsxs)(`div`, {
              className: `gn-tip`,
              children: [
                (0, w.jsx)(`b`, { children: `Perché` }),
                ` is both "why?" (question) and "because" (answer): `,
                (0, w.jsx)(`i`, { children: `Perché non vieni? — Perché sono stanco.` }),
              ],
            }),
          ],
        }),
    },
    {
      id: `modali`,
      label: `Modal Verbs`,
      emoji: `🎛️`,
      content: () =>
        (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsx)(`p`, {
              className: `gn-intro`,
              children: `Verbi modali (volere, potere, dovere) are always followed by an infinitive.`,
            }),
            (0, w.jsx)(`div`, {
              className: `gn-table-wrap`,
              children: (0, w.jsxs)(`table`, {
                className: `gn-table`,
                children: [
                  (0, w.jsx)(`thead`, {
                    children: (0, w.jsxs)(`tr`, {
                      children: [
                        (0, w.jsx)(`th`, { children: `Pronoun` }),
                        (0, w.jsx)(`th`, { children: `volere (to want)` }),
                        (0, w.jsx)(`th`, { children: `potere (can/may)` }),
                        (0, w.jsx)(`th`, { children: `dovere (must/have to)` }),
                      ],
                    }),
                  }),
                  (0, w.jsx)(`tbody`, {
                    children: [
                      [`io`, `voglio`, `posso`, `devo`],
                      [`tu`, `vuoi`, `puoi`, `devi`],
                      [`lui/lei`, `vuole`, `può`, `deve`],
                      [`noi`, `vogliamo`, `possiamo`, `dobbiamo`],
                      [`voi`, `volete`, `potete`, `dovete`],
                      [`loro`, `vogliono`, `possono`, `devono`],
                    ].map(([e, ...t]) =>
                      (0, w.jsxs)(
                        `tr`,
                        {
                          children: [
                            (0, w.jsx)(`td`, { className: `pron`, children: e }),
                            t.map((e, t) => (0, w.jsx)(`td`, { children: e }, t)),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            (0, w.jsxs)(`div`, {
              className: `gn-tip`,
              children: [
                (0, w.jsx)(`b`, { children: `Usage examples:` }),
                (0, w.jsx)(`br`, {}),
                (0, w.jsxs)(`i`, {
                  children: [`Voglio `, (0, w.jsx)(`b`, { children: `parlare` }), ` con il medico.`],
                }),
                ` — I want to speak to the doctor.`,
                (0, w.jsx)(`br`, {}),
                (0, w.jsxs)(`i`, { children: [`Puoi `, (0, w.jsx)(`b`, { children: `venire` }), ` domani?`] }),
                ` — Can you come tomorrow?`,
                (0, w.jsx)(`br`, {}),
                (0, w.jsxs)(`i`, { children: [`Devo `, (0, w.jsx)(`b`, { children: `compilare` }), ` il modulo.`] }),
                ` — I have to fill in the form.`,
                (0, w.jsx)(`br`, {}),
                (0, w.jsxs)(`i`, { children: [`Vorrei `, (0, w.jsx)(`b`, { children: `prenotare` }), ` una visita.`] }),
                ` — I would like to book an appointment. (conditional — very useful!)`,
              ],
            }),
          ],
        }),
    },
    {
      id: `negazione`,
      label: `Negation & Double Neg.`,
      emoji: `🚫`,
      content: () =>
        (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsx)(`p`, {
              className: `gn-intro`,
              children: `Italian uses double negatives — both words are required together.`,
            }),
            (0, w.jsxs)(`table`, {
              className: `gn-table`,
              children: [
                (0, w.jsx)(`thead`, {
                  children: (0, w.jsxs)(`tr`, {
                    children: [
                      (0, w.jsx)(`th`, { children: `Expression` }),
                      (0, w.jsx)(`th`, { children: `Meaning` }),
                      (0, w.jsx)(`th`, { children: `Example` }),
                    ],
                  }),
                }),
                (0, w.jsx)(`tbody`, {
                  children: [
                    [`non … niente / nulla`, `nothing`, `Non capisco niente.`],
                    [`non … nessuno`, `nobody / no one`, `Non c'è nessuno.`],
                    [`non … mai`, `never`, `Non vado mai al cinema.`],
                    [`non … ancora`, `not yet`, `Non ho ancora mangiato.`],
                    [`non … più`, `no longer / not anymore`, `Non abito più a Roma.`],
                    [`non … né … né`, `neither … nor`, `Non parlo né inglese né francese.`],
                  ].map(([e, t, n]) =>
                    (0, w.jsxs)(
                      `tr`,
                      {
                        children: [
                          (0, w.jsx)(`td`, { children: (0, w.jsx)(`b`, { children: e }) }),
                          (0, w.jsx)(`td`, { children: t }),
                          (0, w.jsx)(`td`, { className: `gn-ex`, children: n }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            (0, w.jsxs)(`div`, {
              className: `gn-tip`,
              children: [
                (0, w.jsx)(`b`, { children: `Word order:` }),
                ` NON always goes before the verb. The second negative word goes after the verb (or after the object).`,
                (0, w.jsx)(`br`, {}),
                (0, w.jsxs)(`i`, { children: [`Non mangio `, (0, w.jsx)(`b`, { children: `mai` }), ` la carne.`] }),
                (0, w.jsx)(`br`, {}),
                (0, w.jsxs)(`i`, { children: [`Non ho visto `, (0, w.jsx)(`b`, { children: `nessuno` }), `.`] }),
              ],
            }),
          ],
        }),
    },
  ],
  rn = {
    presente: [`pres-1`, `pres-2`],
    pronomi: [`pron-1`, `pron-2`],
    passato: [`pp-1`, `pp-2`],
    imperfetto: [`imp-1`, `imp-2`],
    articles: [`art-1`, `art-2`],
    preposizioni: [`prep-1`, `prep-2`, `prep-visual`],
    interrogativi: [`inter-1`],
    modali: [`modal-1`],
    negazione: [`neg-1`],
  };
function an() {
  let [e, t] = N(`gn_topic`, nn[0].id);
  (0, S.useEffect)(() => {
    let e = () => {
      try {
        let e = JSON.parse(localStorage.getItem(`gn_topic`) || `null`);
        e && nn.some((t) => t.id === e) && t(e);
      } catch {}
    };
    return (window.addEventListener(`hashchange`, e), () => window.removeEventListener(`hashchange`, e));
  }, []);
  let n = nn.find((t) => t.id === e) || nn[0],
    r = n.id === `preposizioni` ? (0, w.jsx)(Yt, {}) : n.id === `tempi` ? (0, w.jsx)(tn, {}) : null,
    i = r ? [] : (rn[n.id] || []).map((e) => ut.find((t) => t.id === e)).filter(Boolean);
  return (0, w.jsxs)(`section`, {
    className: `card`,
    children: [
      (0, w.jsx)(`h2`, { className: `sec-h`, children: `Grammar Notes` }),
      (0, w.jsx)(`p`, {
        className: `instr`,
        children: `Read the rule, then tap "Practice Exercises" to test yourself without leaving the page.`,
      }),
      (0, w.jsx)(`div`, {
        className: `gn-tabs`,
        children: nn.map((n) =>
          (0, w.jsx)(
            `button`,
            { className: `gn-tab` + (n.id === e ? ` on` : ``), onClick: () => t(n.id), children: n.label },
            n.id,
          ),
        ),
      }),
      (0, w.jsx)(`div`, {
        className: `gn-body`,
        children:
          r ||
          (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(`h3`, { className: `gn-title`, children: n.label }),
              n.content(),
              i.length > 0 && (0, w.jsx)(lt, { sets: i }, n.id),
            ],
          }),
      }),
    ],
  });
}
var on = {
    olive: { hue: `#1E6B4F`, tint: `#EAF2EC` },
    terra: { hue: `#C9603A`, tint: `#FBEDE6` },
    mustard: { hue: `#C99A2E`, tint: `#FBF5E0` },
    wine: { hue: `#A8434B`, tint: `#FAEAEB` },
    teal: { hue: `#2E7D8A`, tint: `#E3F4F6` },
    plum: { hue: `#7A5A8E`, tint: `#F0EAF6` },
  },
  sn = grammarTopicColorsData,
  cn = {
    'Presente Indicativo': (0, w.jsxs)(`svg`, {
      width: `20`,
      height: `20`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`line`, { x1: `8`, y1: `6`, x2: `21`, y2: `6` }),
        (0, w.jsx)(`line`, { x1: `8`, y1: `12`, x2: `21`, y2: `12` }),
        (0, w.jsx)(`line`, { x1: `8`, y1: `18`, x2: `21`, y2: `18` }),
        (0, w.jsx)(`line`, { x1: `3`, y1: `6`, x2: `3.01`, y2: `6` }),
        (0, w.jsx)(`line`, { x1: `3`, y1: `12`, x2: `3.01`, y2: `12` }),
        (0, w.jsx)(`line`, { x1: `3`, y1: `18`, x2: `3.01`, y2: `18` }),
      ],
    }),
    'Passato Prossimo': (0, w.jsxs)(`svg`, {
      width: `20`,
      height: `20`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [(0, w.jsx)(`path`, { d: `M3 2v6h6` }), (0, w.jsx)(`path`, { d: `M3 8a9 9 0 1 0 3-6` })],
    }),
    Imperfetto: (0, w.jsxs)(`svg`, {
      width: `20`,
      height: `20`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`circle`, { cx: `12`, cy: `12`, r: `10` }),
        (0, w.jsx)(`polyline`, { points: `12 6 12 12 16 14` }),
      ],
    }),
    'Imperfetto vs Passato Prossimo': (0, w.jsxs)(`svg`, {
      width: `20`,
      height: `20`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`circle`, { cx: `12`, cy: `12`, r: `10` }),
        (0, w.jsx)(`polyline`, { points: `12 6 12 12 16 14` }),
      ],
    }),
    'Articoli — Sound Triggers': (0, w.jsxs)(`svg`, {
      width: `20`,
      height: `20`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`polyline`, { points: `4 7 4 4 20 4 20 7` }),
        (0, w.jsx)(`line`, { x1: `9`, y1: `20`, x2: `15`, y2: `20` }),
        (0, w.jsx)(`line`, { x1: `12`, y1: `4`, x2: `12`, y2: `20` }),
      ],
    }),
    'Articoli — Definite vs Indefinite': (0, w.jsxs)(`svg`, {
      width: `20`,
      height: `20`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`polyline`, { points: `4 7 4 4 20 4 20 7` }),
        (0, w.jsx)(`line`, { x1: `9`, y1: `20`, x2: `15`, y2: `20` }),
        (0, w.jsx)(`line`, { x1: `12`, y1: `4`, x2: `12`, y2: `20` }),
      ],
    }),
    'Preposizioni — A vs IN vs DA': (0, w.jsxs)(`svg`, {
      width: `20`,
      height: `20`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71` }),
        (0, w.jsx)(`path`, { d: `M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71` }),
      ],
    }),
    'Preposizioni Articolate — cloze': (0, w.jsxs)(`svg`, {
      width: `20`,
      height: `20`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71` }),
        (0, w.jsx)(`path`, { d: `M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71` }),
      ],
    }),
    'Preposizioni — Immagini': (0, w.jsxs)(`svg`, {
      width: `20`,
      height: `20`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`rect`, { x: `3`, y: `3`, width: `18`, height: `18`, rx: `2` }),
        (0, w.jsx)(`circle`, { cx: `8.5`, cy: `8.5`, r: `1.5` }),
        (0, w.jsx)(`path`, { d: `M21 15l-5-5L5 21` }),
      ],
    }),
    'Parole Interrogative': (0, w.jsxs)(`svg`, {
      width: `20`,
      height: `20`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`circle`, { cx: `12`, cy: `12`, r: `10` }),
        (0, w.jsx)(`path`, { d: `M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3` }),
        (0, w.jsx)(`line`, { x1: `12`, y1: `17`, x2: `12.01`, y2: `17` }),
      ],
    }),
    'Cloze Test — Cittadinanza': (0, w.jsxs)(`svg`, {
      width: `20`,
      height: `20`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M12 20h9` }),
        (0, w.jsx)(`path`, { d: `M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z` }),
      ],
    }),
    'Cloze Test — Salute': (0, w.jsxs)(`svg`, {
      width: `20`,
      height: `20`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M12 20h9` }),
        (0, w.jsx)(`path`, { d: `M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z` }),
      ],
    }),
    'Cloze Test — Lavoro': (0, w.jsxs)(`svg`, {
      width: `20`,
      height: `20`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M12 20h9` }),
        (0, w.jsx)(`path`, { d: `M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z` }),
      ],
    }),
    'Word Order': (0, w.jsxs)(`svg`, {
      width: `20`,
      height: `20`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`line`, { x1: `17`, y1: `10`, x2: `3`, y2: `10` }),
        (0, w.jsx)(`line`, { x1: `21`, y1: `6`, x2: `3`, y2: `6` }),
        (0, w.jsx)(`line`, { x1: `21`, y1: `14`, x2: `3`, y2: `14` }),
        (0, w.jsx)(`line`, { x1: `17`, y1: `18`, x2: `3`, y2: `18` }),
      ],
    }),
    'Match — Sentence Halves': (0, w.jsxs)(`svg`, {
      width: `20`,
      height: `20`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M18 8h1a4 4 0 0 1 0 8h-1` }),
        (0, w.jsx)(`path`, { d: `M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z` }),
        (0, w.jsx)(`line`, { x1: `6`, y1: `1`, x2: `6`, y2: `4` }),
        (0, w.jsx)(`line`, { x1: `10`, y1: `1`, x2: `10`, y2: `4` }),
        (0, w.jsx)(`line`, { x1: `14`, y1: `1`, x2: `14`, y2: `4` }),
      ],
    }),
    'Match — Questions & Answers': (0, w.jsxs)(`svg`, {
      width: `20`,
      height: `20`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M18 8h1a4 4 0 0 1 0 8h-1` }),
        (0, w.jsx)(`path`, { d: `M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z` }),
        (0, w.jsx)(`line`, { x1: `6`, y1: `1`, x2: `6`, y2: `4` }),
        (0, w.jsx)(`line`, { x1: `10`, y1: `1`, x2: `10`, y2: `4` }),
        (0, w.jsx)(`line`, { x1: `14`, y1: `1`, x2: `14`, y2: `4` }),
      ],
    }),
    "Trova l'Errore": (0, w.jsxs)(`svg`, {
      width: `20`,
      height: `20`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`circle`, { cx: `12`, cy: `12`, r: `10` }),
        (0, w.jsx)(`line`, { x1: `12`, y1: `8`, x2: `12`, y2: `12` }),
        (0, w.jsx)(`line`, { x1: `12`, y1: `16`, x2: `12.01`, y2: `16` }),
      ],
    }),
    'Verbi Modali': (0, w.jsxs)(`svg`, {
      width: `20`,
      height: `20`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`line`, { x1: `4`, y1: `21`, x2: `4`, y2: `14` }),
        (0, w.jsx)(`line`, { x1: `4`, y1: `10`, x2: `4`, y2: `3` }),
        (0, w.jsx)(`line`, { x1: `12`, y1: `21`, x2: `12`, y2: `12` }),
        (0, w.jsx)(`line`, { x1: `12`, y1: `8`, x2: `12`, y2: `3` }),
        (0, w.jsx)(`line`, { x1: `20`, y1: `21`, x2: `20`, y2: `16` }),
        (0, w.jsx)(`line`, { x1: `20`, y1: `12`, x2: `20`, y2: `3` }),
        (0, w.jsx)(`line`, { x1: `1`, y1: `14`, x2: `7`, y2: `14` }),
        (0, w.jsx)(`line`, { x1: `9`, y1: `8`, x2: `15`, y2: `8` }),
        (0, w.jsx)(`line`, { x1: `17`, y1: `16`, x2: `23`, y2: `16` }),
      ],
    }),
    Negazione: (0, w.jsxs)(`svg`, {
      width: `20`,
      height: `20`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`circle`, { cx: `12`, cy: `12`, r: `10` }),
        (0, w.jsx)(`line`, { x1: `4.93`, y1: `4.93`, x2: `19.07`, y2: `19.07` }),
      ],
    }),
  },
  ln = {
    mcq: `Multiple Choice`,
    cloze: `Fill the Gaps`,
    transform: `Transform`,
    order: `Word Order`,
    match: `Match`,
    error: `Error Spot`,
  },
  un = [...new Set(ut.map((e) => e.topic))].map((e) => ({
    topic: e,
    colorKey: sn[e] || `olive`,
    sets: ut.filter((t) => t.topic === e),
  })),
  dn = (e) => e.items?.length || e.pairs?.length || e.ans?.length || e.blanks?.length || 0,
  fn = grammarGroupsData,
  pn = fn.map((e) => ({ label: e.label, items: e.topics.map((e) => un.find((t) => t.topic === e)).filter(Boolean) })),
  mn = new Set(fn.flatMap((e) => e.topics)),
  hn = un.filter((e) => !mn.has(e.topic));
hn.length && pn.push({ label: `Altri esercizi`, items: hn });
var gn = {
  mcq: `scegli la risposta giusta`,
  cloze: `completa i vuoti`,
  transform: `trasforma la frase`,
  order: `metti in ordine`,
  match: `abbina le coppie`,
  error: `trova l'errore`,
};
function _n(e) {
  return e.type === `mcq`
    ? (0, w.jsx)(rt, { set: e }, e.id)
    : e.type === `cloze`
      ? (0, w.jsx)(it, { set: e }, e.id)
      : e.type === `transform`
        ? (0, w.jsx)(at, { set: e }, e.id)
        : e.type === `order`
          ? (0, w.jsx)(ot, { set: e }, e.id)
          : e.type === `match`
            ? (0, w.jsx)(st, { set: e }, e.id)
            : e.type === `error`
              ? (0, w.jsx)(ct, { set: e }, e.id)
              : null;
}
function vn({ entry: e, onBack: t, onPrev: n, onNext: r, prevTopic: i, nextTopic: a }) {
  let [o, s] = (0, S.useState)(e.sets[0].id),
    c = e.sets.find((e) => e.id === o) || e.sets[0],
    l = on[e.colorKey];
  return (0, w.jsxs)(`div`, {
    className: `ge2-detail`,
    children: [
      (0, w.jsxs)(`button`, {
        className: `btn ghost sm`,
        onClick: t,
        children: [
          (0, w.jsxs)(`svg`, {
            width: `15`,
            height: `15`,
            viewBox: `0 0 24 24`,
            fill: `none`,
            stroke: `currentColor`,
            strokeWidth: `1.8`,
            children: [
              (0, w.jsx)(`line`, { x1: `19`, y1: `12`, x2: `5`, y2: `12` }),
              (0, w.jsx)(`polyline`, { points: `12 19 5 12 12 5` }),
            ],
          }),
          `Tutti gli esercizi`,
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `ge2-head`,
        children: [
          (0, w.jsx)(`div`, {
            className: `ge2-badge`,
            style: { background: l.tint, color: l.hue },
            children: cn[e.topic],
          }),
          (0, w.jsxs)(`div`, {
            children: [
              (0, w.jsx)(`h2`, { className: `ge2-title`, children: e.topic }),
              (0, w.jsx)(`p`, { className: `ge2-instr`, children: c.instruction }),
            ],
          }),
        ],
      }),
      e.sets.length > 1 &&
        (0, w.jsx)(`div`, {
          className: `ge2-type-tabs`,
          children: e.sets.map((e) =>
            (0, w.jsxs)(
              `button`,
              {
                className: `ge2-type-tab` + (e.id === o ? ` on` : ``),
                style: e.id === o ? { background: l.hue, borderColor: l.hue } : {},
                onClick: () => s(e.id),
                children: [ln[e.type], ` · `, dn(e)],
              },
              e.id,
            ),
          ),
        }),
      (0, w.jsx)(`div`, { className: `ge2-exercise`, children: _n(c) }),
      (0, w.jsxs)(`div`, {
        className: `pd-nav`,
        children: [
          (0, w.jsxs)(`button`, {
            className: `pd-nav-btn`,
            onClick: n,
            children: [
              (0, w.jsx)(`svg`, {
                width: `15`,
                height: `15`,
                viewBox: `0 0 24 24`,
                fill: `none`,
                stroke: `currentColor`,
                strokeWidth: `1.8`,
                children: (0, w.jsx)(`polyline`, { points: `15 18 9 12 15 6` }),
              }),
              (0, w.jsxs)(`span`, {
                className: `pd-nav-label`,
                children: [
                  (0, w.jsx)(`span`, { className: `pd-nav-dir`, children: `Precedente` }),
                  (0, w.jsx)(`span`, { className: `pd-nav-title`, children: i.topic }),
                ],
              }),
            ],
          }),
          (0, w.jsxs)(`button`, {
            className: `pd-nav-btn next`,
            onClick: r,
            children: [
              (0, w.jsxs)(`span`, {
                className: `pd-nav-label`,
                children: [
                  (0, w.jsx)(`span`, { className: `pd-nav-dir`, children: `Successivo` }),
                  (0, w.jsx)(`span`, { className: `pd-nav-title`, children: a.topic }),
                ],
              }),
              (0, w.jsx)(`svg`, {
                width: `15`,
                height: `15`,
                viewBox: `0 0 24 24`,
                fill: `none`,
                stroke: `currentColor`,
                strokeWidth: `1.8`,
                children: (0, w.jsx)(`polyline`, { points: `9 18 15 12 9 6` }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function yn() {
  let [e, t] = (0, S.useState)(null),
    n = un.find((t) => t.topic === e);
  if (n) {
    let e = un.indexOf(n),
      r = un[(e - 1 + un.length) % un.length],
      i = un[(e + 1) % un.length];
    return (0, w.jsx)(`section`, {
      className: `card`,
      children: (0, w.jsx)(
        vn,
        {
          entry: n,
          onBack: () => t(null),
          onPrev: () => t(r.topic),
          onNext: () => t(i.topic),
          prevTopic: r,
          nextTopic: i,
        },
        n.topic,
      ),
    });
  }
  return (0, w.jsxs)(`section`, {
    className: `card`,
    children: [
      (0, w.jsx)(`h2`, { className: `sec-h`, children: `Esercizi di Grammatica` }),
      (0, w.jsx)(`p`, {
        className: `instr`,
        children: `La grammatica che serve per il CILS A2, un tema alla volta. Scegli un tema per iniziare.`,
      }),
      pn.map((e) =>
        (0, w.jsxs)(
          `div`,
          {
            className: `ge2-group`,
            children: [
              (0, w.jsx)(`div`, { className: `ge2-group-label`, children: e.label }),
              (0, w.jsx)(`div`, {
                className: `ge2-grid`,
                children: e.items.map((e) => {
                  let n = on[e.colorKey],
                    r = e.sets.reduce((e, t) => e + dn(t), 0);
                  return (0, w.jsxs)(
                    `button`,
                    {
                      className: `ex-card`,
                      style: { '--cat-hue': n.hue, '--cat-tint': n.tint },
                      onClick: () => t(e.topic),
                      children: [
                        (0, w.jsx)(`div`, {
                          className: `ex-card-badge`,
                          style: { background: n.tint, color: n.hue },
                          children: cn[e.topic],
                        }),
                        (0, w.jsx)(`div`, { className: `ex-card-topic`, children: e.topic }),
                        (0, w.jsxs)(`div`, {
                          className: `ex-card-meta`,
                          children: [
                            r,
                            ` esercizi · `,
                            e.sets
                              .map((e) => gn[e.type])
                              .filter((e, t, n) => n.indexOf(e) === t)
                              .join(` · `),
                          ],
                        }),
                        (0, w.jsx)(`span`, { className: `ex-card-go`, children: `Inizia →` }),
                      ],
                    },
                    e.topic,
                  );
                }),
              }),
            ],
          },
          e.label,
        ),
      ),
    ],
  });
}
var bn = phrasesBySituationData,
  xn = phrasesByTenseData,
  Sn = {
    olive: { hue: `#1E6B4F`, tint: `#EAF2EC` },
    terra: { hue: `#C9603A`, tint: `#FBEDE6` },
    mustard: { hue: `#C99A2E`, tint: `#FBF5E0` },
    wine: { hue: `#A8434B`, tint: `#FAEAEB` },
    teal: { hue: `#2E7D8A`, tint: `#E3F4F6` },
    plum: { hue: `#7A5A8E`, tint: `#F0EAF6` },
  },
  Cn = {
    presentarsi: `olive`,
    quotidiana: `olive`,
    'lavoro-small': `olive`,
    amici: `olive`,
    lavoro: `teal`,
    trasporti: `teal`,
    telefono: `teal`,
    turismo: `teal`,
    medico: `terra`,
    comune: `mustard`,
    casa: `mustard`,
    pasti: `wine`,
    shopping: `plum`,
    cortesia: `plum`,
  },
  wn = [
    {
      label: `Vita quotidiana`,
      ids: [`presentarsi`, `quotidiana`, `casa`, `cortesia`, `pasti`, `amici`, `lavoro-small`],
    },
    { label: `Burocrazia & servizi`, ids: [`lavoro`, `medico`, `comune`, `trasporti`, `telefono`] },
    { label: `Vita sociale`, ids: [`shopping`, `turismo`] },
  ],
  Tn = 7;
function En({ label: e, colorKey: t, active: n }) {
  let r = Sn[t] || Sn.olive,
    i = e
      .replace(/[^A-Za-zÀ-ÿ]/g, ``)
      .slice(0, 2)
      .toUpperCase();
  return (0, w.jsx)(`div`, {
    className: `cat-badge`,
    style: { background: n ? r.hue : r.tint, color: n ? `#fff` : r.hue },
    children: i,
  });
}
function Dn({ phrase: e, situation: t, showNote: n = !1 }) {
  let [r, i] = (0, S.useState)(!1),
    a = Sn[Cn[t?.id]] || Sn.olive;
  return (0, w.jsxs)(`div`, {
    className: `ph-row`,
    children: [
      (0, w.jsxs)(`div`, {
        className: `ph-row-body`,
        children: [
          (0, w.jsx)(`div`, { className: `ph-it`, children: e.it }),
          (0, w.jsx)(`div`, { className: `ph-en`, children: e.en }),
          n && e.note && (0, w.jsx)(`span`, { className: `ph-note`, children: e.note }),
        ],
      }),
      (0, w.jsx)(`button`, {
        className: `ph-play` + (r ? ` played` : ``),
        onClick: () => {
          k() && (i(!0), j(e.it), setTimeout(() => i(!1), 2e3));
        },
        title: `Listen`,
        'aria-label': `Listen`,
        disabled: !k(),
        style: { '--play-hue': a.hue },
        children: (0, w.jsxs)(`svg`, {
          width: `15`,
          height: `15`,
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.8`,
          children: [
            (0, w.jsx)(`polygon`, { points: `11 5 6 9 2 9 2 15 6 15 11 19 11 5` }),
            (0, w.jsx)(`path`, { d: `M15.54 8.46a5 5 0 0 1 0 7.07` }),
          ],
        }),
      }),
    ],
  });
}
function On() {
  let [e, t] = (0, S.useState)(`situation`),
    [n, r] = (0, S.useState)(bn[0].id),
    [i, a] = (0, S.useState)(!1),
    [o, s] = (0, S.useState)(``),
    [c, l] = (0, S.useState)(!1),
    u = e === `situation`,
    d = (u ? bn : xn).find((e) => e.id === n) || bn[0],
    f = (e) => {
      (t(e), r((e === `situation` ? bn : xn)[0].id), a(!1), s(``));
    },
    p = (e) => {
      r(e);
    },
    m = bn,
    h = i ? m : m.slice(0, Tn),
    g = m.length - Tn,
    _ = o.toLowerCase(),
    v = d.phrases.filter((e) => !_ || e.it.toLowerCase().includes(_) || e.en.toLowerCase().includes(_));
  return (0, w.jsxs)(`section`, {
    className: `card`,
    children: [
      (0, w.jsx)(`h2`, { className: `sec-h`, children: `Common Phrases` }),
      (0, w.jsx)(`p`, {
        className: `instr`,
        children: `Key spoken phrases for the CILS A2 oral exam. Browse by situation or by tense.`,
      }),
      (0, w.jsxs)(`div`, {
        className: `segmented ph-view-seg`,
        children: [
          (0, w.jsx)(`button`, {
            className: u ? `active` : ``,
            onClick: () => f(`situation`),
            children: `By Situation`,
          }),
          (0, w.jsx)(`button`, { className: u ? `` : `active`, onClick: () => f(`tense`), children: `By Tense` }),
        ],
      }),
      u
        ? (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsxs)(`div`, {
                className: `cat-grid`,
                children: [
                  h.map((e) => {
                    let t = Sn[Cn[e.id]] || Sn.olive,
                      r = e.id === n;
                    return (0, w.jsxs)(
                      `button`,
                      {
                        className: `cat-tile` + (r ? ` active` : ``),
                        style: r
                          ? { '--cat-hue': t.hue, '--cat-tint': t.tint, background: t.tint, borderColor: t.hue }
                          : { '--cat-hue': t.hue, '--cat-tint': t.tint },
                        onClick: () => p(e.id),
                        children: [
                          (0, w.jsxs)(`div`, {
                            className: `cat-tile-top`,
                            children: [
                              (0, w.jsx)(En, { label: e.label, colorKey: Cn[e.id] || `olive`, active: r }),
                              (0, w.jsx)(`span`, { className: `cat-tile-count`, children: e.phrases.length }),
                            ],
                          }),
                          (0, w.jsx)(`div`, { className: `cat-tile-it`, children: e.label }),
                          (0, w.jsx)(`div`, { className: `cat-tile-en`, children: e.desc }),
                        ],
                      },
                      e.id,
                    );
                  }),
                  !i &&
                    (0, w.jsx)(`button`, {
                      className: `cat-tile cat-tile-more`,
                      onClick: () => a(!0),
                      children: (0, w.jsxs)(`div`, {
                        className: `cat-tile-more-inner`,
                        children: [
                          (0, w.jsxs)(`span`, { className: `cat-tile-more-num`, children: [`+`, g] }),
                          (0, w.jsx)(`span`, { className: `cat-tile-more-label`, children: `altre categorie` }),
                        ],
                      }),
                    }),
                ],
              }),
              i &&
                (0, w.jsxs)(`div`, {
                  className: `cat-sections`,
                  children: [
                    wn.map((e) => {
                      let t = m.filter((t) => e.ids.includes(t.id));
                      return t.length
                        ? (0, w.jsxs)(
                            `div`,
                            {
                              className: `cat-section`,
                              children: [
                                (0, w.jsx)(`div`, { className: `cat-section-label`, children: e.label }),
                                (0, w.jsx)(`div`, {
                                  className: `cat-grid`,
                                  children: t.map((e) => {
                                    let t = Sn[Cn[e.id]] || Sn.olive,
                                      r = e.id === n;
                                    return (0, w.jsxs)(
                                      `button`,
                                      {
                                        className: `cat-tile` + (r ? ` active` : ``),
                                        style: r
                                          ? {
                                              '--cat-hue': t.hue,
                                              '--cat-tint': t.tint,
                                              background: t.tint,
                                              borderColor: t.hue,
                                            }
                                          : { '--cat-hue': t.hue, '--cat-tint': t.tint },
                                        onClick: () => p(e.id),
                                        children: [
                                          (0, w.jsxs)(`div`, {
                                            className: `cat-tile-top`,
                                            children: [
                                              (0, w.jsx)(En, {
                                                label: e.label,
                                                colorKey: Cn[e.id] || `olive`,
                                                active: r,
                                              }),
                                              (0, w.jsx)(`span`, {
                                                className: `cat-tile-count`,
                                                children: e.phrases.length,
                                              }),
                                            ],
                                          }),
                                          (0, w.jsx)(`div`, { className: `cat-tile-it`, children: e.label }),
                                          (0, w.jsx)(`div`, { className: `cat-tile-en`, children: e.desc }),
                                        ],
                                      },
                                      e.id,
                                    );
                                  }),
                                }),
                              ],
                            },
                            e.label,
                          )
                        : null;
                    }),
                    (0, w.jsx)(`button`, {
                      className: `ph-collapse-btn`,
                      onClick: () => a(!1),
                      children: `Mostra meno`,
                    }),
                  ],
                }),
              Be(d.id) &&
                (0, w.jsxs)(`div`, {
                  className: `ph-banner`,
                  children: [
                    (0, w.jsx)(`img`, { src: Be(d.id), alt: d.label, className: `ph-banner-img` }),
                    (0, w.jsx)(`div`, { className: `ph-banner-overlay` }),
                  ],
                }),
              (0, w.jsxs)(`div`, {
                className: `ph-section-header`,
                children: [
                  (0, w.jsxs)(`div`, {
                    className: `ph-section-title`,
                    children: [
                      (0, w.jsx)(En, { label: d.label, colorKey: Cn[d.id] || `olive`, active: !0 }),
                      (0, w.jsxs)(`div`, {
                        children: [
                          (0, w.jsx)(`div`, { className: `ph-section-name`, children: d.label }),
                          (0, w.jsx)(`div`, { className: `ph-section-desc`, children: d.desc }),
                        ],
                      }),
                    ],
                  }),
                  i &&
                    (0, w.jsx)(`input`, {
                      className: `ph-search`,
                      placeholder: `Search phrases…`,
                      value: o,
                      onChange: (e) => s(e.target.value),
                    }),
                  (0, w.jsxs)(`label`, {
                    className: `ph-notes-toggle`,
                    children: [
                      (0, w.jsx)(`input`, { type: `checkbox`, checked: c, onChange: (e) => l(e.target.checked) }),
                      `Grammar notes`,
                    ],
                  }),
                ],
              }),
              (0, w.jsx)(`div`, {
                className: `ph-phrases`,
                children: v.map((e, t) => (0, w.jsx)(Dn, { phrase: e, situation: d, showNote: c }, t)),
              }),
              (0, w.jsxs)(`div`, { className: `ph-count`, children: [v.length, ` phrases`] }),
            ],
          })
        : (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(`div`, {
                className: `ph-tense-nav`,
                children: xn.map((e) =>
                  (0, w.jsx)(
                    `button`,
                    {
                      className: `ph-tense-tab` + (e.id === n ? ` on` : ``),
                      onClick: () => r(e.id),
                      children: e.label,
                    },
                    e.id,
                  ),
                ),
              }),
              d.note && (0, w.jsx)(`div`, { className: `ph-tense-note`, children: d.note }),
              (0, w.jsx)(`div`, {
                className: `ph-phrases`,
                children: d.phrases.map((e, t) => (0, w.jsx)(Dn, { phrase: e, situation: null, showNote: c }, t)),
              }),
              (0, w.jsxs)(`div`, { className: `ph-count`, children: [d.phrases.length, ` phrases`] }),
            ],
          }),
    ],
  });
}
var kn = [
    `zero`,
    `uno`,
    `due`,
    `tre`,
    `quattro`,
    `cinque`,
    `sei`,
    `sette`,
    `otto`,
    `nove`,
    `dieci`,
    `undici`,
    `dodici`,
    `tredici`,
    `quattordici`,
    `quindici`,
    `sedici`,
    `diciassette`,
    `diciotto`,
    `diciannove`,
  ],
  An = [``, ``, `venti`, `trenta`, `quaranta`, `cinquanta`, `sessanta`, `settanta`, `ottanta`, `novanta`];
function jn(e) {
  if (((e = Math.floor(e)), e < 0 || e > 9999)) return String(e);
  if (e < 20) return kn[e];
  if (e < 100) {
    let t = Math.floor(e / 10),
      n = e % 10,
      r = An[t];
    if (n === 0) return r;
    (n === 1 || n === 8) && (r = r.slice(0, -1));
    let i = kn[n];
    return (n === 3 && (i = `tré`), r + i);
  }
  if (e < 1e3) {
    let t = Math.floor(e / 100),
      n = e % 100,
      r = t === 1 ? `cento` : kn[t] + `cento`;
    if (n === 0) return r;
    let i = jn(n);
    return (i.startsWith(`o`) && (r = r.slice(0, -1)), r + i);
  }
  let t = Math.floor(e / 1e3),
    n = e % 1e3,
    r = t === 1 ? `mille` : jn(t) + `mila`;
  return n === 0 ? r : r + jn(n);
}
function Mn(e, t) {
  let n = jn(e) + ` euro`;
  return t > 0 ? `${n} e ${jn(t)}` : n;
}
function Nn(e, t) {
  let n = e === 1 ? `l'una` : `le ` + jn(e);
  return t === 0 ? n : `${n} e ${jn(t)}`;
}
var Pn = [
  `gennaio`,
  `febbraio`,
  `marzo`,
  `aprile`,
  `maggio`,
  `giugno`,
  `luglio`,
  `agosto`,
  `settembre`,
  `ottobre`,
  `novembre`,
  `dicembre`,
];
function Fn(e, t) {
  let n;
  return ((n = e === 1 ? `il primo` : e === 8 ? `l'otto` : e === 11 ? `l'undici` : `il ` + jn(e)), `${n} ${Pn[t]}`);
}
var In = [
    { id: `numeri`, label: `Numeri` },
    { id: `prezzi`, label: `Prezzi` },
    { id: `ore`, label: `Ore` },
    { id: `date`, label: `Date` },
  ],
  Ln = 8;
function Rn(e) {
  return Math.floor(Math.random() * e);
}
function zn(e) {
  if (e === `numeri`) {
    let e = [Rn(20), 20 + Rn(80), 100 + Rn(900), 1e3 + Rn(900)],
      t = e[Rn(e.length)];
    return { display: String(t), words: jn(t), accept: [String(t)] };
  }
  if (e === `prezzi`) {
    let e = 1 + Rn(99),
      t = [0, 20, 50, 90, 25, 75][Rn(6)];
    return {
      display: `€ ${e},${String(t).padStart(2, `0`)}`,
      words: Mn(e, t),
      accept: [
        `${e},${String(t).padStart(2, `0`)}`,
        `${e}.${String(t).padStart(2, `0`)}`,
        t === 0 ? String(e) : null,
      ].filter(Boolean),
    };
  }
  if (e === `ore`) {
    let e = 6 + Rn(18),
      t = [0, 15, 30, 45, 10, 20, 40, 50][Rn(8)];
    return {
      display: `${e}:${String(t).padStart(2, `0`)}`,
      words: Nn(e, t),
      accept: [
        `${e}:${String(t).padStart(2, `0`)}`,
        `${e}.${String(t).padStart(2, `0`)}`,
        `${e}${String(t).padStart(2, `0`)}`,
      ],
    };
  }
  let t = 1 + Rn(28),
    n = Rn(12);
  return { display: `${t} ${Pn[n]}`, words: Fn(t, n), accept: [`${t} ${Pn[n]}`, `${t}/${n + 1}`, `${t}-${n + 1}`] };
}
var Bn = (e) => e.trim().toLowerCase().replace(/\s+/g, ` `).replace(/^€\s*/, ``).replace(/euro/g, ``).trim();
function Vn() {
  let [e, t] = (0, S.useState)(`numeri`),
    [n, r] = (0, S.useState)(`ascolta`),
    [i, a] = (0, S.useState)(() => zn(`numeri`)),
    [o, s] = (0, S.useState)(``),
    [c, l] = (0, S.useState)(`play`),
    [u, d] = (0, S.useState)({ ok: 0, n: 0 }),
    f = () => {
      k() && (M(), j(i.words, { rate: 0.9 }));
    },
    p = (t = e) => {
      (a(zn(t)), s(``), l(`play`));
    },
    m = (t) => {
      let r = { ok: u.ok + +!!t, n: u.n + 1 };
      r.n >= Ln
        ? (At({ section: `ascolto`, taskId: `numeri-${e}-${n}`, score: r.ok, max: r.n }), d({ ok: 0, n: 0 }))
        : d(r);
    },
    h = () => {
      if (c !== `play` || !o.trim()) return;
      let e = i.accept.some((e) => Bn(e) === Bn(o));
      (l(e ? `right` : `wrong`), m(e));
    },
    g = (e) => {
      (l(e ? `right` : `wrong`), m(e));
    },
    _ = (e) => {
      (t(e), M(), p(e), d({ ok: 0, n: 0 }));
    },
    v = (e) => {
      (r(e), M(), p(), d({ ok: 0, n: 0 }));
    };
  return (0, w.jsxs)(`div`, {
    className: `nl`,
    children: [
      (0, w.jsxs)(`div`, {
        className: `nl-head`,
        children: [
          (0, w.jsx)(`span`, { className: `nl-title`, children: `Allenati: numeri, prezzi, ore e date` }),
          (0, w.jsxs)(`span`, {
            className: `nl-score`,
            children: [
              u.ok,
              `/`,
              u.n,
              ` `,
              (0, w.jsxs)(`span`, { className: `nl-round`, children: [`(round di `, Ln, `)`] }),
            ],
          }),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `nl-rows`,
        children: [
          (0, w.jsx)(`div`, {
            className: `nl-chips`,
            children: In.map((t) =>
              (0, w.jsx)(
                `button`,
                { className: `nl-chip` + (e === t.id ? ` on` : ``), onClick: () => _(t.id), children: t.label },
                t.id,
              ),
            ),
          }),
          (0, w.jsxs)(`div`, {
            className: `nl-chips`,
            children: [
              (0, w.jsx)(`button`, {
                className: `nl-chip mode` + (n === `ascolta` ? ` on` : ``),
                onClick: () => v(`ascolta`),
                children: `Ascolta e scrivi`,
              }),
              (0, w.jsx)(`button`, {
                className: `nl-chip mode` + (n === `parla` ? ` on` : ``),
                onClick: () => v(`parla`),
                children: `Leggi e di'`,
              }),
            ],
          }),
        ],
      }),
      n === `ascolta`
        ? (0, w.jsxs)(`div`, {
            className: `nl-body`,
            children: [
              (0, w.jsx)(`button`, { className: `btn primary sm`, onClick: f, disabled: !k(), children: `Ascolta` }),
              (0, w.jsx)(`input`, {
                className: `nl-input`,
                placeholder:
                  e === `date`
                    ? `es. 15 marzo oppure 15/3`
                    : e === `ore`
                      ? `es. 17:45`
                      : e === `prezzi`
                        ? `es. 3,50`
                        : `es. 240`,
                value: o,
                onChange: (e) => s(e.target.value),
                onKeyDown: (e) => e.key === `Enter` && (c === `play` ? h() : p()),
                disabled: c !== `play`,
              }),
              c === `play`
                ? (0, w.jsx)(`button`, {
                    className: `btn go sm`,
                    onClick: h,
                    disabled: !o.trim(),
                    children: `Controlla`,
                  })
                : (0, w.jsxs)(`span`, {
                    className: `nl-fb ` + c,
                    children: [
                      c === `right` ? `✓ Giusto!` : `✗ Era: ${i.display}`,
                      (0, w.jsxs)(`i`, { className: `nl-words`, children: [`(`, i.words, `)`] }),
                      (0, w.jsx)(`button`, { className: `btn ghost sm`, onClick: () => p(), children: `Prossimo →` }),
                    ],
                  }),
            ],
          })
        : (0, w.jsxs)(`div`, {
            className: `nl-body`,
            children: [
              (0, w.jsx)(`span`, { className: `nl-big`, children: i.display }),
              c === `play`
                ? (0, w.jsxs)(w.Fragment, {
                    children: [
                      (0, w.jsx)(`span`, { className: `nl-hint`, children: `Dillo ad alta voce, poi verifica.` }),
                      (0, w.jsx)(`button`, {
                        className: `btn go sm`,
                        onClick: () => {
                          (l(`revealed`), f());
                        },
                        children: `Verifica`,
                      }),
                    ],
                  })
                : c === `revealed`
                  ? (0, w.jsxs)(w.Fragment, {
                      children: [
                        (0, w.jsx)(`span`, { className: `nl-words big`, children: i.words }),
                        (0, w.jsx)(`span`, { className: `nl-hint`, children: `L'hai detto giusto?` }),
                        (0, w.jsx)(`button`, { className: `btn primary sm`, onClick: () => g(!0), children: `Sì` }),
                        (0, w.jsx)(`button`, { className: `btn ghost sm`, onClick: () => g(!1), children: `No` }),
                      ],
                    })
                  : (0, w.jsxs)(`span`, {
                      className: `nl-fb ` + c,
                      children: [
                        c === `right` ? `✓ Ottimo!` : `Riprova con il prossimo!`,
                        (0, w.jsx)(`button`, { className: `btn ghost sm`, onClick: () => p(), children: `Prossimo →` }),
                      ],
                    }),
            ],
          }),
      (0, w.jsxs)(`p`, {
        className: `nl-note`,
        children: [
          `All'esame i numeri nascondono le risposte: orari dei treni, prezzi al mercato, date degli appuntamenti. Ogni round di `,
          Ln,
          ` finisce nei tuoi progressi (Ascolto).`,
        ],
      }),
    ],
  });
}
function Hn({ text: e, small: t }) {
  return (0, w.jsx)(`button`, {
    className: `icon-play lp-speak` + (t ? ` sm` : ``),
    title: `Ascolta: ${e}`,
    'aria-label': `Ascolta: ${e}`,
    onClick: () => j(e, `it-IT`),
  });
}
function Un() {
  return (0, w.jsx)(`div`, {
    className: `qr-alpha-grid`,
    children: [
      [`A`, `a`, `ah`, !0],
      [`B`, `bi`, `bee`, !0],
      [`C`, `ci`, `chee`, !0],
      [`D`, `di`, `dee`, !0],
      [`E`, `e`, `eh`, !0],
      [`F`, `effe`, `EFF-eh`, !0],
      [`G`, `gi`, `jee`, !0],
      [`H`, `acca`, `silent!`, !0],
      [`I`, `i`, `ee`, !0],
      [`J`, `i lunga`, `ee LOON-ga`, !1],
      [`K`, `kappa`, `KAP-pa`, !1],
      [`L`, `elle`, `EL-leh`, !0],
      [`M`, `emme`, `EM-meh`, !0],
      [`N`, `enne`, `EN-neh`, !0],
      [`O`, `o`, `oh`, !0],
      [`P`, `pi`, `pee`, !0],
      [`Q`, `qu`, `koo`, !0],
      [`R`, `erre`, `rolled r`, !0],
      [`S`, `esse`, `ES-seh`, !0],
      [`T`, `ti`, `tee`, !0],
      [`U`, `u`, `oo`, !0],
      [`V`, `vu`, `voo`, !0],
      [`W`, `doppia vu`, `DOP-pya voo`, !1],
      [`X`, `ics`, `eeks`, !1],
      [`Y`, `ipsilon`, `eep-SEE-lon`, !1],
      [`Z`, `zeta`, `DZEH-ta`, !0],
    ].map(([e, t, n, r]) =>
      (0, w.jsxs)(
        `div`,
        {
          className: `qr-alpha-card` + (r ? `` : ` foreign`),
          children: [
            (0, w.jsx)(`span`, { className: `qr-alpha-letter`, children: e }),
            (0, w.jsx)(`span`, { className: `qr-alpha-name`, children: t }),
            (0, w.jsx)(`span`, { className: `qr-alpha-pron`, children: n }),
            (0, w.jsx)(Hn, { text: t, small: !0 }),
            !r && (0, w.jsx)(`span`, { className: `qr-alpha-badge`, children: `forestiero` }),
          ],
        },
        e,
      ),
    ),
  });
}
function Wn() {
  return (0, w.jsx)(`div`, {
    className: `qr-num-grid`,
    children: [
      [`0`, `zero`],
      [`1`, `uno`],
      [`2`, `due`],
      [`3`, `tre`],
      [`4`, `quattro`],
      [`5`, `cinque`],
      [`6`, `sei`],
      [`7`, `sette`],
      [`8`, `otto`],
      [`9`, `nove`],
      [`10`, `dieci`],
      [`11`, `undici`],
      [`12`, `dodici`],
      [`13`, `tredici`],
      [`14`, `quattordici`],
      [`15`, `quindici`],
      [`20`, `venti`],
      [`30`, `trenta`],
      [`40`, `quaranta`],
      [`50`, `cinquanta`],
      [`60`, `sessanta`],
      [`70`, `settanta`],
      [`80`, `ottanta`],
      [`90`, `novanta`],
      [`100`, `cento`],
      [`1000`, `mille`],
    ].map(([e, t]) =>
      (0, w.jsxs)(
        `div`,
        {
          className: `qr-num-card`,
          children: [
            (0, w.jsx)(`span`, { className: `qr-num-n`, children: e }),
            (0, w.jsx)(`span`, { className: `qr-num-it`, children: t }),
            (0, w.jsx)(Hn, { text: t, small: !0 }),
          ],
        },
        e,
      ),
    ),
  });
}
function Gn() {
  return (0, w.jsx)(`div`, {
    className: `qr-row-grid`,
    children: [
      [`1°`, `primo`, `🥇`],
      [`2°`, `secondo`, `🥈`],
      [`3°`, `terzo`, `🥉`],
      [`4°`, `quarto`, `4️⃣`],
      [`5°`, `quinto`, `5️⃣`],
      [`6°`, `sesto`, `6️⃣`],
      [`7°`, `settimo`, `7️⃣`],
      [`8°`, `ottavo`, `8️⃣`],
      [`9°`, `nono`, `9️⃣`],
      [`10°`, `decimo`, `🔟`],
    ].map(([e, t, n]) =>
      (0, w.jsxs)(
        `div`,
        {
          className: `qr-row-card`,
          children: [
            (0, w.jsx)(`span`, { className: `qr-row-n`, children: e }),
            (0, w.jsxs)(`span`, { className: `qr-row-it`, children: [t, `/a`] }),
            (0, w.jsx)(Hn, { text: t, small: !0 }),
          ],
        },
        e,
      ),
    ),
  });
}
function Kn() {
  return (0, w.jsx)(`div`, {
    className: `qr-week`,
    children: [
      [`Lun`, `lunedì`, `😩`, `Mon`],
      [`Mar`, `martedì`, `📚`, `Tue`],
      [`Mer`, `mercoledì`, `⚗️`, `Wed`],
      [`Gio`, `giovedì`, `🍽️`, `Thu`],
      [`Ven`, `venerdì`, `🎉`, `Fri`],
      [`Sab`, `sabato`, `🛒`, `Sat`],
      [`Dom`, `domenica`, `😴`, `Sun`],
    ].map(([e, t, n, r]) =>
      (0, w.jsxs)(
        `div`,
        {
          className: `qr-day` + (e === `Sab` || e === `Dom` ? ` weekend` : ``),
          children: [
            (0, w.jsx)(`span`, { className: `qr-day-abbr`, children: e }),
            (0, w.jsx)(`span`, { className: `qr-day-full`, children: t }),
            (0, w.jsx)(`span`, { className: `qr-day-en`, children: r }),
            (0, w.jsx)(Hn, { text: t, small: !0 }),
          ],
        },
        e,
      ),
    ),
  });
}
function qn() {
  return (0, w.jsx)(`div`, {
    className: `qr-months`,
    children: [
      [`gennaio`, `Jan`, `❄️`],
      [`febbraio`, `Feb`, `🌨️`],
      [`marzo`, `Mar`, `🌱`],
      [`aprile`, `Apr`, `🌧️`],
      [`maggio`, `May`, `🌸`],
      [`giugno`, `Jun`, `☀️`],
      [`luglio`, `Jul`, `🏖️`],
      [`agosto`, `Aug`, `🌴`],
      [`settembre`, `Sep`, `🎒`],
      [`ottobre`, `Oct`, `🍂`],
      [`novembre`, `Nov`, `🌫️`],
      [`dicembre`, `Dec`, `🎄`],
    ].map(([e, t, n]) =>
      (0, w.jsxs)(
        `div`,
        {
          className: `qr-month-card`,
          children: [
            (0, w.jsx)(`span`, { className: `qr-month-it`, children: e }),
            (0, w.jsx)(`span`, { className: `qr-month-en`, children: t }),
            (0, w.jsx)(Hn, { text: e, small: !0 }),
          ],
        },
        e,
      ),
    ),
  });
}
function Jn() {
  return (0, w.jsx)(`div`, {
    className: `qr-seasons`,
    children: [
      {
        it: `Primavera`,
        emoji: `🌸`,
        en: `Spring (Mar–May)`,
        weather: [`fa bello`, `piove`, `è mite`],
        color: `#d4edda`,
      },
      {
        it: `Estate`,
        emoji: `☀️`,
        en: `Summer (Jun–Aug)`,
        weather: [`fa caldo`, `c'è sole`, `c'è afa`],
        color: `#fff3cd`,
      },
      {
        it: `Autunno`,
        emoji: `🍁`,
        en: `Autumn (Sep–Nov)`,
        weather: [`fa fresco`, `piove`, `è nuvoloso`],
        color: `#fde8d8`,
      },
      {
        it: `Inverno`,
        emoji: `❄️`,
        en: `Winter (Dec–Feb)`,
        weather: [`fa freddo`, `nevica`, `c'è vento`],
        color: `#d6eaf8`,
      },
    ].map(({ it: e, emoji: t, en: n, weather: r, color: i }) =>
      (0, w.jsxs)(
        `div`,
        {
          className: `qr-season-card`,
          style: { background: i },
          children: [
            (0, w.jsxs)(`div`, {
              style: { display: `flex`, alignItems: `center`, gap: `8px` },
              children: [
                (0, w.jsx)(`div`, { className: `qr-season-name`, children: e }),
                (0, w.jsx)(Hn, { text: e, small: !0 }),
              ],
            }),
            (0, w.jsx)(`div`, { className: `qr-season-en`, children: n }),
            (0, w.jsx)(`ul`, {
              className: `qr-season-wx`,
              children: r.map((e) =>
                (0, w.jsxs)(
                  `li`,
                  {
                    style: { display: `flex`, alignItems: `center`, gap: `6px` },
                    children: [e, ` `, (0, w.jsx)(Hn, { text: e.replace(/[^\w\sàèéìòùÀÈÉÌÒÙ']/g, ``), small: !0 })],
                  },
                  e,
                ),
              ),
            }),
          ],
        },
        e,
      ),
    ),
  });
}
function Yn() {
  return (0, w.jsx)(`div`, {
    className: `qr-colours`,
    children: [
      [`rosso`, `red`, `#e74c3c`, `#fff`],
      [`arancione`, `orange`, `#e67e22`, `#fff`],
      [`giallo`, `yellow`, `#f1c40f`, `#333`],
      [`verde`, `green`, `#27ae60`, `#fff`],
      [`azzurro`, `blue`, `#2980b9`, `#fff`],
      [`viola`, `purple`, `#8e44ad`, `#fff`],
      [`rosa`, `pink`, `#f48fb1`, `#333`],
      [`bianco`, `white`, `#fff`, `#333`],
      [`grigio`, `grey`, `#95a5a6`, `#fff`],
      [`nero`, `black`, `#222`, `#fff`],
      [`marrone`, `brown`, `#7d5a3c`, `#fff`],
      [`beige`, `beige`, `#f5f0e8`, `#333`],
    ].map(([e, t, n, r]) =>
      (0, w.jsxs)(
        `div`,
        {
          className: `qr-colour-card`,
          style: { background: n, color: r },
          children: [
            (0, w.jsx)(`span`, { className: `qr-colour-it`, children: e }),
            (0, w.jsx)(`span`, { className: `qr-colour-en`, children: t }),
            (0, w.jsx)(Hn, { text: e, small: !0 }),
          ],
        },
        e,
      ),
    ),
  });
}
function Xn() {
  return (0, w.jsx)(`div`, {
    className: `qr-time-list`,
    children: [
      [`Che ora è?`, `What time is it?`],
      [`È l'una.`, `It's 1:00.`],
      [`Sono le due.`, `It's 2:00.`],
      [`Sono le tre e un quarto.`, `It's 3:15.`],
      [`Sono le quattro e mezza.`, `It's 4:30.`],
      [`Sono le cinque meno un quarto.`, `It's 4:45.`],
      [`È mezzogiorno.`, `It's noon.`],
      [`È mezzanotte.`, `It's midnight.`],
      [`A che ora...?`, `At what time...?`],
      [`Alle otto e trenta.`, `At 8:30.`],
    ].map(([e, t]) =>
      (0, w.jsxs)(
        `div`,
        {
          className: `qr-time-row`,
          children: [
            (0, w.jsx)(`span`, { className: `qr-time-it`, children: e }),
            (0, w.jsx)(`span`, { className: `qr-time-en`, children: t }),
            (0, w.jsx)(Hn, { text: e, small: !0 }),
          ],
        },
        e,
      ),
    ),
  });
}
var Zn = [
  {
    id: `alphabet`,
    label: `Alfabeto Italiano`,
    Component: Un,
    tip: `Italian has 21 native letters. H is always silent. C before E/I = "ch" (ciao); before A/O/U = "k" (casa). G before E/I = "j" (gelato); before A/O/U = hard g (gatto).`,
  },
  {
    id: `numbers`,
    label: `Numbers`,
    Component: Wn,
    tip: `Compounds: 21 = ventuno, 22 = ventidue, 33 = trentatré (accent on 3!). Plurals: mille → mila (duemila).`,
  },
  {
    id: `ordinals`,
    label: `Ordinal Numbers`,
    Component: Gn,
    tip: `From 11th onwards add -esimo/a → undicesimo, ventesimo… Used for floors: "abito al terzo piano".`,
  },
  {
    id: `days`,
    label: `Days of the Week`,
    Component: Kn,
    tip: `All days are lowercase in Italian. "lavoro il lunedì" = I work on Mondays.`,
  },
  {
    id: `months`,
    label: `Months`,
    Component: qn,
    tip: `Preposition: "a gennaio", "ad agosto" (before vowel). All lowercase. Date format: il 15 marzo 2025.`,
  },
  {
    id: `seasons`,
    label: `Seasons & Weather`,
    Component: Jn,
    tip: `Preposition: "in primavera / in estate / in autunno / in inverno" OR "d'estate / d'inverno".`,
  },
  {
    id: `colours`,
    label: `Colours`,
    Component: Yn,
    tip: `Colours agree with the noun: rosso→rossa→rossi→rosse. Exception: blu, viola, rosa, beige are invariable.`,
  },
  {
    id: `time`,
    label: `Telling the Time`,
    Component: Xn,
    tip: `"È" for 1:00, noon, midnight. "Sono" for all other hours. 24h format common: "alle ventidue" = 10pm.`,
  },
];
function Qn() {
  return (0, w.jsxs)(`section`, {
    className: `card qr-wrap`,
    children: [
      (0, w.jsx)(`h2`, { className: `sec-h`, children: `Quick Reference` }),
      (0, w.jsx)(`p`, { className: `instr`, children: `Tap the speaker on any card to hear the Italian pronunciation.` }),
      (0, w.jsx)(Vn, {}),
      Zn.map(({ id: e, label: t, Component: n, tip: r }) =>
        (0, w.jsxs)(
          `div`,
          {
            className: `qr-section`,
            children: [
              (0, w.jsx)(`div`, { className: `qr-section-title`, children: t }),
              (0, w.jsx)(n, {}),
              (0, w.jsx)(`div`, { className: `gn-tip`, children: r }),
            ],
          },
          e,
        ),
      ),
    ],
  });
}
var $n = dialoguesData,
  er = {
    olive: { hue: `#1E6B4F`, tint: `#EAF2EC` },
    terra: { hue: `#C9603A`, tint: `#FBEDE6` },
    mustard: { hue: `#C99A2E`, tint: `#FBF5E0` },
    wine: { hue: `#A8434B`, tint: `#FAEAEB` },
    teal: { hue: `#2E7D8A`, tint: `#E3F4F6` },
    plum: { hue: `#7A5A8E`, tint: `#F0EAF6` },
  },
  tr = {
    presentarsi: `olive`,
    bar: `wine`,
    abbigliamento: `plum`,
    ristorante: `wine`,
    medico: `terra`,
    affitto: `mustard`,
    'amici-piano': `olive`,
    comune: `mustard`,
    fidanzato: `teal`,
  };
function nr() {
  let [e, t] = (0, S.useState)($n[0].id),
    [n, r] = (0, S.useState)({}),
    [i, a] = (0, S.useState)(!1),
    [o, s] = (0, S.useState)(null),
    c = $n.find((t) => t.id === e),
    l = (e) => r((t) => ({ ...t, [e]: !t[e] })),
    u = async (e, t) => {
      !k() || o !== null || (s(t), await j(e), s(null));
    };
  return (0, w.jsxs)(`section`, {
    className: `card`,
    children: [
      (0, w.jsx)(`h2`, { className: `sec-h`, children: `Common Conversations` }),
      (0, w.jsx)(`p`, {
        className: `instr`,
        children: `Read or listen to real-life dialogues. Tap the speaker to hear a line, or play the whole dialogue.`,
      }),
      (0, w.jsx)(`div`, {
        className: `dlg-chips`,
        children: $n.map((n) => {
          let i = er[tr[n.id]] || er.olive,
            o = n.id === e;
          return (0, w.jsxs)(
            `button`,
            {
              className: `dlg-chip` + (o ? ` active` : ``),
              style: o
                ? { '--cat-hue': i.hue, '--cat-tint': i.tint, background: i.tint, borderColor: i.hue }
                : { '--cat-hue': i.hue, '--cat-tint': i.tint },
              onClick: () => {
                (t(n.id), r({}), a(!1), s(null));
              },
              children: [(0, w.jsx)(`span`, { className: `dlg-chip-dot`, style: { background: i.hue } }), n.label],
            },
            n.id,
          );
        }),
      }),
      (0, w.jsxs)(`div`, {
        className: `dl-banner`,
        children: [
          c.img
            ? (0, w.jsx)(`img`, { src: c.img, alt: c.situation, className: `dl-banner-img` })
            : (0, w.jsx)(`div`, {
                className: `dl-banner-placeholder`,
                children: (0, w.jsxs)(`svg`, {
                  width: `28`,
                  height: `28`,
                  viewBox: `0 0 24 24`,
                  fill: `none`,
                  stroke: `currentColor`,
                  strokeWidth: `1.2`,
                  opacity: `.4`,
                  children: [
                    (0, w.jsx)(`rect`, { x: `3`, y: `3`, width: `18`, height: `18`, rx: `2` }),
                    (0, w.jsx)(`circle`, { cx: `8.5`, cy: `8.5`, r: `1.5` }),
                    (0, w.jsx)(`path`, { d: `M21 15l-5-5L5 21` }),
                  ],
                }),
              }),
          (0, w.jsxs)(`div`, {
            className: `dl-banner-overlay`,
            children: [
              (0, w.jsx)(`div`, { className: `dl-banner-cat`, children: c.label }),
              (0, w.jsx)(`div`, { className: `dl-banner-title`, children: c.situation }),
            ],
          }),
        ],
      }),
      (0, w.jsx)(`div`, {
        className: `dl-header`,
        children: (0, w.jsxs)(`div`, {
          className: `dl-controls`,
          children: [
            (0, w.jsx)(`button`, {
              className: `mini ghost`,
              onClick: () => a((e) => !e),
              children: i ? `Hide English` : `Show all English`,
            }),
            (0, w.jsx)(`button`, {
              className: `mini ghost`,
              onClick: async () => {
                if (!k() || o !== null) return;
                let e = _e();
                for (let t = 0; t < c.lines.length && e === _e(); t++)
                  (s(t), await j(c.lines[t].it), await new Promise((e) => setTimeout(e, 400)));
                s(null);
              },
              disabled: o !== null,
              children: o === null ? `Play all` : `Playing…`,
            }),
          ],
        }),
      }),
      (0, w.jsx)(`div`, {
        className: `dl-script`,
        children: c.lines.map((e, t) =>
          (0, w.jsx)(
            `div`,
            {
              className:
                `dl-line` +
                (e.speaker === `A` || e.speaker === c.lines[0].speaker ? ` dl-a` : ` dl-b`) +
                (o === t ? ` dl-active` : ``),
              children: (0, w.jsxs)(`div`, {
                className: `dl-bubble`,
                children: [
                  (0, w.jsx)(`div`, { className: `dl-speaker`, children: e.speaker }),
                  (0, w.jsx)(`div`, { className: `dl-text`, children: e.it }),
                  (i || n[t]) && (0, w.jsx)(`div`, { className: `dl-translation`, children: e.en }),
                  (0, w.jsxs)(`div`, {
                    className: `dl-line-actions`,
                    children: [
                      (0, w.jsx)(`button`, {
                        className: `icon-play sm`,
                        onClick: () => u(e.it, t),
                        disabled: o !== null,
                        title: `Play`,
                        'aria-label': `Play`,
                        children: (0, w.jsxs)(`svg`, {
                          width: `13`,
                          height: `13`,
                          viewBox: `0 0 24 24`,
                          fill: `none`,
                          stroke: `currentColor`,
                          strokeWidth: `1.8`,
                          children: [
                            (0, w.jsx)(`polygon`, { points: `11 5 6 9 2 9 2 15 6 15 11 19 11 5` }),
                            (0, w.jsx)(`path`, { d: `M15.54 8.46a5 5 0 0 1 0 7.07` }),
                          ],
                        }),
                      }),
                      (0, w.jsx)(`button`, {
                        className: `mini ghost xs`,
                        onClick: () => l(t),
                        children: n[t] ? `hide` : `EN`,
                      }),
                    ],
                  }),
                ],
              }),
            },
            t,
          ),
        ),
      }),
    ],
  });
}
var rr = readingExercisesData,
  ir = `ABCDEFGH`;
function ar({ set: e }) {
  let t = e.blanks.length,
    [n, r] = (0, S.useState)(Array(t).fill(``)),
    [i, a] = (0, S.useState)(!1),
    o = (t) => n[t] === e.blanks[t].opts[e.blanks[t].a],
    s = i ? Array.from({ length: t }, (e, t) => o(t)).filter(Boolean).length : null;
  return (0, w.jsxs)(`div`, {
    children: [
      (0, w.jsx)(`div`, {
        className: `rc-passage`,
        children: e.text.split(/\(\d+\)___/).map((a, s) =>
          (0, w.jsxs)(
            `span`,
            {
              children: [
                a,
                s < t &&
                  (0, w.jsxs)(`select`, {
                    value: n[s],
                    disabled: i,
                    onChange: (e) => {
                      let t = [...n];
                      ((t[s] = e.target.value), r(t));
                    },
                    className: i ? (o(s) ? `ge-sel correct` : `ge-sel wrong`) : `ge-sel`,
                    children: [
                      (0, w.jsx)(`option`, { value: ``, children: `—` }),
                      e.blanks[s].opts.map((e) => (0, w.jsx)(`option`, { value: e, children: e }, e)),
                    ],
                  }),
              ],
            },
            s,
          ),
        ),
      }),
      i &&
        (0, w.jsx)(`div`, {
          className: `ge-cloze-ans`,
          children: e.blanks.map((e, t) =>
            (0, w.jsxs)(
              `div`,
              {
                className: `ge-fb ` + (o(t) ? `ok` : `no`),
                children: [`Gap `, t + 1, `: `, o(t) ? `✓` : `✗ → ${e.opts[e.a]}`],
              },
              t,
            ),
          ),
        }),
      (0, w.jsx)(`div`, {
        className: `ge-actions`,
        children: i
          ? (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsxs)(`span`, { className: `ge-score`, children: [s, `/`, t] }),
                (0, w.jsx)(`button`, {
                  className: `btn ghost sm`,
                  onClick: () => {
                    (r(Array(t).fill(``)), a(!1));
                  },
                  children: `Reset`,
                }),
              ],
            })
          : (0, w.jsx)(`button`, {
              className: `btn go sm`,
              disabled: n.some((e) => e === ``),
              onClick: () => a(!0),
              children: `Check ✓`,
            }),
      }),
    ],
  });
}
function or({ set: e }) {
  let t = e.notices.length,
    [n, r] = (0, S.useState)(Array(t).fill(``)),
    [i, a] = (0, S.useState)(!1),
    o = (t) => n[t] === e.ans[t],
    s = i ? n.filter((t, n) => t === e.ans[n]).length : null;
  return (0, w.jsxs)(`div`, {
    children: [
      (0, w.jsxs)(`div`, {
        className: `rc-match-grid`,
        children: [
          (0, w.jsxs)(`div`, {
            className: `rc-match-col`,
            children: [
              (0, w.jsx)(`div`, { className: `rc-col-head`, children: `Notices` }),
              e.notices.map(([e, t]) =>
                (0, w.jsxs)(
                  `div`,
                  {
                    className: `rc-notice`,
                    children: [
                      (0, w.jsx)(`span`, { className: `rc-notice-n`, children: e }),
                      (0, w.jsx)(`span`, { className: `rc-notice-text`, children: t }),
                    ],
                  },
                  e,
                ),
              ),
            ],
          }),
          (0, w.jsxs)(`div`, {
            className: `rc-match-col`,
            children: [
              (0, w.jsx)(`div`, { className: `rc-col-head`, children: `Your answers` }),
              e.notices.map(([t], a) =>
                (0, w.jsxs)(
                  `div`,
                  {
                    className: `rc-answer-row`,
                    children: [
                      (0, w.jsxs)(`span`, { className: `rc-notice-n`, children: [t, ` →`] }),
                      (0, w.jsxs)(`select`, {
                        value: n[a],
                        disabled: i,
                        onChange: (e) => {
                          let t = [...n];
                          ((t[a] = e.target.value), r(t));
                        },
                        className: i ? (o(a) ? `ge-sel correct` : `ge-sel wrong`) : `ge-sel`,
                        children: [
                          (0, w.jsx)(`option`, { value: ``, children: `—` }),
                          e.options.map(([e]) => (0, w.jsx)(`option`, { value: e, children: e }, e)),
                        ],
                      }),
                      i && !o(a) && (0, w.jsxs)(`span`, { className: `rc-correct-ans`, children: [`→ `, e.ans[a]] }),
                    ],
                  },
                  t,
                ),
              ),
            ],
          }),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `rc-options-list`,
        children: [
          (0, w.jsx)(`div`, { className: `rc-col-head`, children: `Continuations` }),
          e.options.map(([e, t]) =>
            (0, w.jsxs)(
              `div`,
              {
                className: `rc-option`,
                children: [
                  (0, w.jsx)(`span`, { className: `rc-opt-letter`, children: e }),
                  (0, w.jsx)(`span`, { children: t }),
                ],
              },
              e,
            ),
          ),
        ],
      }),
      i &&
        s !== null &&
        (0, w.jsx)(`div`, {
          className: `ge-cloze-ans`,
          children: e.notices.map(([t], n) =>
            (0, w.jsxs)(
              `div`,
              { className: `ge-fb ` + (o(n) ? `ok` : `no`), children: [t, `: `, o(n) ? `✓` : `✗ → ${e.ans[n]}`] },
              t,
            ),
          ),
        }),
      (0, w.jsx)(`div`, {
        className: `ge-actions`,
        children: i
          ? (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsxs)(`span`, { className: `ge-score`, children: [s, `/`, t] }),
                (0, w.jsx)(`button`, {
                  className: `btn ghost sm`,
                  onClick: () => {
                    (r(Array(t).fill(``)), a(!1));
                  },
                  children: `Reset`,
                }),
              ],
            })
          : (0, w.jsx)(`button`, {
              className: `btn go sm`,
              disabled: n.some((e) => e === ``),
              onClick: () => a(!0),
              children: `Check ✓`,
            }),
      }),
    ],
  });
}
function sr({ set: e }) {
  let [t, n] = (0, S.useState)({}),
    [r, i] = (0, S.useState)(!1),
    [a, o] = (0, S.useState)(!0),
    s = r ? e.questions.filter((e, n) => t[n] === e.a).length : null;
  return (0, w.jsxs)(`div`, {
    children: [
      (0, w.jsx)(`div`, {
        className: `rc-text-controls`,
        children: (0, w.jsx)(`button`, {
          className: `mini ghost`,
          onClick: () => o((e) => !e),
          children: a ? `🙈 Hide text` : `📄 Show text`,
        }),
      }),
      a && (0, w.jsx)(`div`, { className: `rc-passage rc-long`, children: e.text }),
      (0, w.jsx)(`div`, {
        style: { marginTop: `1rem` },
        children: e.questions.map((e, i) => {
          let a = t[i];
          return (0, w.jsxs)(
            `div`,
            {
              className: `ge-q`,
              children: [
                (0, w.jsxs)(`div`, { className: `ge-qtext`, children: [i + 1, `. `, e.q] }),
                (0, w.jsx)(`div`, {
                  className: `ge-opts`,
                  children: e.opts.map((t, o) => {
                    let s = `ge-opt`;
                    return (
                      r && o === e.a && (s += ` correct`),
                      r && a === o && o !== e.a && (s += ` wrong`),
                      !r && a === o && (s += ` chosen`),
                      (0, w.jsxs)(
                        `button`,
                        {
                          className: s,
                          disabled: r,
                          onClick: () => n((e) => ({ ...e, [i]: o })),
                          children: [(0, w.jsx)(`span`, { className: `ge-letter`, children: ir[o] }), ` `, t],
                        },
                        o,
                      )
                    );
                  }),
                }),
                r &&
                  (0, w.jsx)(`div`, {
                    className: `ge-fb ` + (a === e.a ? `ok` : `no`),
                    children: a === e.a ? `✓ Corretto!` : `✗ → ${e.opts[e.a]}`,
                  }),
              ],
            },
            i,
          );
        }),
      }),
      (0, w.jsx)(`div`, {
        className: `ge-actions`,
        children: r
          ? (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsxs)(`span`, { className: `ge-score`, children: [s, `/`, e.questions.length] }),
                (0, w.jsx)(`button`, {
                  className: `btn ghost sm`,
                  onClick: () => {
                    (n({}), i(!1));
                  },
                  children: `Try again`,
                }),
              ],
            })
          : (0, w.jsx)(`button`, {
              className: `btn go sm`,
              disabled: Object.keys(t).length < e.questions.length,
              onClick: () => i(!0),
              children: `Check ✓`,
            }),
      }),
    ],
  });
}
function cr() {
  let [e, t] = (0, S.useState)(rr[0].id),
    n = rr.find((t) => t.id === e),
    r = { cloze: `Fill the Gaps`, match: `Match`, comprehension: `Read & Answer` },
    i = { cloze: `#3b82f6`, match: `#10b981`, comprehension: `#8b5cf6` };
  return (0, w.jsxs)(`section`, {
    className: `card`,
    children: [
      (0, w.jsx)(`h2`, { className: `sec-h`, children: `📖 Reading Comprehension — Exam Practice` }),
      (0, w.jsx)(`p`, {
        className: `instr`,
        children: `Three exercise types matching the real CILS A2 exam: fill-the-gap passages, notice matching, and read-then-answer questions.`,
      }),
      (0, w.jsxs)(`div`, {
        className: `rc-layout`,
        children: [
          (0, w.jsx)(`div`, {
            className: `rc-sidebar`,
            children: rr.map((n) =>
              (0, w.jsxs)(
                `button`,
                {
                  className: `rc-nav-btn` + (n.id === e ? ` on` : ``),
                  onClick: () => t(n.id),
                  children: [
                    (0, w.jsx)(`span`, { className: `rc-nav-emoji`, children: n.emoji }),
                    (0, w.jsx)(`span`, { className: `rc-nav-label`, children: n.topic }),
                    (0, w.jsx)(`span`, {
                      className: `rc-type-pill`,
                      style: { background: i[n.type] + `22`, color: i[n.type] },
                      children: r[n.type],
                    }),
                  ],
                },
                n.id,
              ),
            ),
          }),
          (0, w.jsxs)(`div`, {
            className: `rc-content`,
            children: [
              (0, w.jsxs)(`div`, {
                className: `rc-set-header`,
                children: [
                  (0, w.jsxs)(`div`, { className: `rc-set-title`, children: [n.emoji, ` `, n.topic] }),
                  (0, w.jsx)(`span`, {
                    className: `rc-type-pill lg`,
                    style: { background: i[n.type] + `22`, color: i[n.type] },
                    children: r[n.type],
                  }),
                ],
              }),
              (0, w.jsx)(`p`, { className: `instr`, style: { marginBottom: `1rem` }, children: n.intro }),
              n.type === `cloze` && (0, w.jsx)(ar, { set: n }, n.id),
              n.type === `match` && (0, w.jsx)(or, { set: n }, n.id),
              n.type === `comprehension` && (0, w.jsx)(sr, { set: n }, n.id),
            ],
          }),
        ],
      }),
    ],
  });
}
var lr = /^(l'|lo |la |il |i |gli |le |un |una |uno |un'|gl')/i,
  ur = /^(to |the |a |an )/i,
  dr = (e) => e.trim().toLowerCase().replace(/\s+/g, ` `),
  fr = (e) => dr(e).replace(lr, ``).trim(),
  pr = (e) => dr(e).replace(ur, ``).trim(),
  mr = new Map(),
  hr = new Map();
for (let e of Pe)
  for (let t of e.cards)
    if (!(!t.it || !t.en)) {
      for (let e of t.it
        .split(`/`)
        .map((e) => e.trim())
        .filter(Boolean))
        for (let n of new Set([dr(e), fr(e)])) n && !mr.has(n) && mr.set(n, { translation: t.en, ex: t.ex });
      for (let e of t.en
        .split(`/`)
        .map((e) => e.trim())
        .filter(Boolean))
        for (let n of new Set([dr(e), pr(e)])) n && !hr.has(n) && hr.set(n, { translation: t.it, ex: t.ex });
    }
function gr(e, t) {
  let n = dr(e),
    r = mr.get(n) || mr.get(fr(e)),
    i = hr.get(n) || hr.get(pr(e)),
    a = (e) => ({ translation: e.translation, ex: e.ex, srcLang: `it`, tgtLang: `en`, matches: [] }),
    o = (e) => ({ translation: e.translation, ex: e.ex, srcLang: `en`, tgtLang: `it`, matches: [] });
  return t === `it` && r ? a(r) : t === `en` && i ? o(i) : r ? a(r) : i ? o(i) : null;
}
mr.size + hr.size;
var _r = [`house`, `mangiare`, `beautiful`, `lavoro`, `friend`, `camminare`, `happy`, `scuola`];
function vr(e) {
  let t = e.trim().toLowerCase();
  if (/[àèéìòùÀÈÉÌÒÙ]/.test(t)) return `it`;
  let n = t.match(/[a-z]+/g) || [],
    r = /(?:zione|mente|aggio|etto|etta|ino|ina|issim[oa]|ier[oa]|ell[ao]|one|oni|are|ere|ire)$/;
  return n.some((e) => e.length >= 5 && r.test(e)) ||
    /\b(il|lo|la|le|gli|un|una|di|da|in|con|su|per|tra|fra|che|non|ma|ho|hai|ha|si|mi|ti|ci|vi|li|io|tu|lui|lei|noi|voi|loro|anche|dove|come|quando|mentre|dopo|prima|ancora|sempre|mai|qui|bene|male|molto|poco|tutto|niente|ogni|sono|sei|siamo|siete|posso|puoi|puo|voglio|vuoi|vuole|devo|devi|deve|faccio|fai|vado|vai|sto|stai|oggi|ieri|domani|basta|grazie|prego|scusa|certo|forse|quindi|allora|senza|verso|ecco|pero|quello|quella|questo|questa|queste|questi|buono|buona|bello|bella|bravo|brava|nuovo|nuova|vecchio|grande|piccolo|lungo|corto|caro|libero|pronto|stesso|stessa|troppo|tanto|insieme|circa|quasi|appena|subito|adesso|spesso|quasi|magari|oppure)\b/.test(
      t,
    ) ||
    /zz|gli|gni|sci(?=[aeiou])|sce(?=[aeiou])/.test(t)
    ? `it`
    : `en`;
}
function yr() {
  let [e, t] = (0, S.useState)(``),
    [n, r] = (0, S.useState)(null),
    [i, a] = (0, S.useState)(!1),
    [o, s] = (0, S.useState)(null),
    [c, l] = (0, S.useState)([]),
    [u, d] = (0, S.useState)(null),
    f = (0, S.useRef)(null),
    p = async (t, n) => {
      let i = (t || e).trim();
      if (!i) return;
      let o = n ?? u ?? vr(i),
        c = o === `en` ? `it` : `en`;
      (s(null), r(null));
      let d = gr(i, o);
      if (d) {
        let e = {
          query: i,
          srcLang: d.srcLang,
          tgtLang: d.tgtLang,
          translation: d.translation,
          matches: [],
          ex: d.ex,
          local: !0,
          ts: Date.now(),
        };
        (r(e), l((t) => [e, ...t.filter((e) => e.query.toLowerCase() !== i.toLowerCase())].slice(0, 10)));
        return;
      }
      a(!0);
      try {
        let e = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(i)}&langpair=${o}|${c}`,
          t = await (await fetch(e)).json();
        if (t.responseStatus !== 200) {
          s(
            `The free translation service is busy or over its daily limit. Common study words work offline here — try one of those, or come back a little later.`,
          );
          return;
        }
        let n = t.responseData.translatedText,
          a = {
            query: i,
            srcLang: o,
            tgtLang: c,
            translation: n,
            matches: (t.matches || []).filter((e) => e.translation && e.translation !== n).slice(0, 4),
            ts: Date.now(),
          };
        (r(a), l((e) => [a, ...e.filter((e) => e.query.toLowerCase() !== i.toLowerCase())].slice(0, 10)));
      } catch {
        s(`Could not reach the translation service — check your connection. (Common study words still work offline.)`);
      } finally {
        a(!1);
      }
    },
    m = (e) => {
      e.key === `Enter` && p();
    },
    h = { en: `English`, it: `Italian` },
    g = { en: `en-GB`, it: `it-IT` };
  return (0, w.jsxs)(`section`, {
    className: `card`,
    children: [
      (0, w.jsx)(`p`, {
        className: `instr`,
        children: `Type any word in English or Italian — the app detects the language automatically. Use the toggle if it guesses wrong.`,
      }),
      (0, w.jsxs)(`div`, {
        className: `dict-lang-toggle`,
        children: [
          (0, w.jsx)(`span`, { className: `dict-toggle-label`, children: `Translate from:` }),
          [null, `en`, `it`].map((e) =>
            (0, w.jsx)(
              `button`,
              {
                className: `dict-toggle-btn` + (u === e ? ` on` : ``),
                onClick: () => d(e),
                children: e === null ? `Auto` : e === `en` ? `English` : `Italian`,
              },
              String(e),
            ),
          ),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `dict-bar`,
        children: [
          (0, w.jsx)(`input`, {
            ref: f,
            className: `dict-input`,
            type: `text`,
            value: e,
            onChange: (e) => t(e.target.value),
            onKeyDown: m,
            placeholder:
              u === `it`
                ? `Scrivi in italiano…`
                : u === `en`
                  ? `Type in English…`
                  : `Type a word… (English or Italian)`,
            autoComplete: `off`,
            spellCheck: !1,
          }),
          (0, w.jsx)(`button`, {
            className: `btn go`,
            onClick: () => p(),
            disabled: i || !e.trim(),
            children: i ? `…` : `Translate`,
          }),
          e &&
            (0, w.jsx)(`button`, {
              className: `btn ghost sm`,
              onClick: () => {
                (t(``), r(null), s(null), f.current?.focus());
              },
              children: `Clear`,
            }),
        ],
      }),
      !n &&
        !i &&
        (0, w.jsxs)(`div`, {
          className: `dict-examples`,
          children: [
            (0, w.jsx)(`span`, { className: `dict-eg-label`, children: `Try:` }),
            _r.map((e) =>
              (0, w.jsx)(
                `button`,
                {
                  className: `dict-chip`,
                  onClick: () => {
                    (t(e), p(e));
                  },
                  children: e,
                },
                e,
              ),
            ),
          ],
        }),
      o && (0, w.jsx)(`div`, { className: `warn`, children: o }),
      n &&
        (0, w.jsxs)(`div`, {
          className: `dict-result`,
          children: [
            (0, w.jsxs)(`div`, {
              className: `dict-result-header`,
              children: [
                (0, w.jsxs)(`div`, {
                  className: `dict-from`,
                  children: [
                    (0, w.jsx)(`span`, { className: `dict-lang-badge`, children: h[n.srcLang] }),
                    (0, w.jsx)(`span`, { className: `dict-query-word`, children: n.query }),
                    (0, w.jsx)(`button`, {
                      className: `icon-play sm lp-speak`,
                      onClick: () => j(n.query, g[n.srcLang]),
                      title: `Listen`,
                      'aria-label': `Listen`,
                    }),
                  ],
                }),
                (0, w.jsx)(`div`, { className: `dict-arrow`, children: `→` }),
                (0, w.jsxs)(`div`, {
                  className: `dict-to`,
                  children: [
                    (0, w.jsx)(`span`, { className: `dict-lang-badge tgt`, children: h[n.tgtLang] }),
                    (0, w.jsx)(`span`, { className: `dict-translation`, children: n.translation }),
                    (0, w.jsx)(`button`, {
                      className: `icon-play sm lp-speak`,
                      onClick: () => j(n.translation, g[n.tgtLang]),
                      title: `Listen`,
                      'aria-label': `Listen`,
                    }),
                  ],
                }),
              ],
            }),
            n.ex &&
              (0, w.jsxs)(`div`, {
                className: `dict-example`,
                children: [
                  n.local && (0, w.jsx)(`span`, { className: `dict-local-badge`, children: `dal tuo vocabolario` }),
                  (0, w.jsxs)(`span`, { className: `dict-example-text`, children: [`“`, n.ex, `”`] }),
                  (0, w.jsx)(`button`, {
                    className: `icon-play sm lp-speak`,
                    onClick: () => j(n.ex, g.it),
                    title: `Ascolta`,
                    'aria-label': `Ascolta`,
                  }),
                ],
              }),
            n.matches.length > 0 &&
              (0, w.jsxs)(`div`, {
                className: `dict-alts`,
                children: [
                  (0, w.jsx)(`div`, { className: `dict-alts-label`, children: `Alternative translations` }),
                  (0, w.jsx)(`div`, {
                    className: `dict-alts-list`,
                    children: n.matches.map((e, t) =>
                      (0, w.jsxs)(
                        `div`,
                        {
                          className: `dict-alt-row`,
                          children: [
                            (0, w.jsx)(`span`, { className: `dict-alt-text`, children: e.translation }),
                            (0, w.jsx)(`button`, {
                              className: `icon-play sm lp-speak`,
                              onClick: () => j(e.translation, g[n.tgtLang]),
                              'aria-label': `Listen`,
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                ],
              }),
            (0, w.jsxs)(`div`, {
              className: `dict-switch-tip`,
              children: [
                `Want the reverse? `,
                (0, w.jsxs)(`button`, {
                  className: `mini ghost`,
                  onClick: () => {
                    (t(n.translation), p(n.translation));
                  },
                  children: [`Translate "`, n.translation, `"`],
                }),
              ],
            }),
          ],
        }),
      c.length > 1 &&
        (0, w.jsxs)(`div`, {
          className: `dict-history`,
          children: [
            (0, w.jsx)(`div`, { className: `dict-history-label`, children: `Recent lookups` }),
            (0, w.jsx)(`div`, {
              className: `dict-history-list`,
              children: c.slice(1).map((e, n) =>
                (0, w.jsxs)(
                  `button`,
                  {
                    className: `dict-chip`,
                    onClick: () => {
                      (t(e.query), p(e.query));
                    },
                    children: [e.query, ` → `, e.translation],
                  },
                  n,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
var br = regionPhotosData,
  xr = 700,
  Sr = 960,
  Cr = 6.4,
  wr = 18.8,
  Tr = 35.2,
  Er = 47.3;
function Dr([e, t]) {
  return [((e - Cr) / (wr - Cr)) * xr, ((Er - t) / (Er - Tr)) * Sr];
}
function Or(e) {
  return (
    e
      .map((e, t) => {
        let [n, r] = Dr(e);
        return (t === 0 ? `M` : `L`) + n.toFixed(1) + `,` + r.toFixed(1);
      })
      .join(` `) + ` Z`
  );
}
function kr(e) {
  return e.type === `Polygon`
    ? e.coordinates.map(Or).join(` `)
    : e.type === `MultiPolygon`
      ? e.coordinates.map((e) => e.map(Or).join(` `)).join(` `)
      : ``;
}
function Ar(e) {
  let t;
  t = e.type === `Polygon` ? e.coordinates[0] : e.coordinates.reduce((e, t) => (t[0].length > e.length ? t[0] : e), []);
  let n = t.reduce(([e, t], [n, r]) => [e + n, t + r], [0, 0]);
  return Dr([n[0] / t.length, n[1] / t.length]);
}
function jr(e) {
  let t = 1 / 0,
    n = 1 / 0,
    r = -1 / 0,
    i = -1 / 0,
    a = (e) =>
      e.forEach((e) => {
        let [a, o] = Dr(e);
        (a < t && (t = a), a > r && (r = a), o < n && (n = o), o > i && (i = o));
      });
  return (e.type === `Polygon` ? e.coordinates.forEach(a) : e.coordinates.forEach((e) => e.forEach(a)), [t, n, r, i]);
}
function Mr({ geoData: e, selected: t, hovered: n, onSelect: r, onHover: i, scriptIds: a, regionMeta: o }) {
  if (!e) return (0, w.jsx)(`div`, { className: `exp-map-loading`, children: `Loading map…` });
  let s = t ? e.features.find((e) => Pr(e.properties.reg_name || ``) === t) : null,
    c = 1,
    l = `translate(0px, 0px) scale(1)`;
  if (s) {
    let [e, t, n, r] = jr(s.geometry);
    c = Math.min(2.6, xr / (n - e + 140), Sr / (r - t + 140));
    let i = (e + n) / 2,
      a = (t + r) / 2;
    l = `translate(${xr / 2 - c * i}px, ${Sr / 2 - c * a}px) scale(${c})`;
  }
  return (0, w.jsxs)(`svg`, {
    viewBox: `0 0 ${xr} ${Sr}`,
    className: `exp-map-svg`,
    style: { width: `100%`, height: `auto`, display: `block` },
    children: [
      (0, w.jsxs)(`defs`, {
        children: [
          (0, w.jsxs)(`linearGradient`, {
            id: `expSea`,
            x1: `0`,
            y1: `0`,
            x2: `0`,
            y2: `1`,
            children: [
              (0, w.jsx)(`stop`, { offset: `0%`, stopColor: `#d9ecf5` }),
              (0, w.jsx)(`stop`, { offset: `55%`, stopColor: `#c2e0ef` }),
              (0, w.jsx)(`stop`, { offset: `100%`, stopColor: `#a9d2e8` }),
            ],
          }),
          (0, w.jsx)(`filter`, {
            id: `expLandShadow`,
            x: `-8%`,
            y: `-8%`,
            width: `116%`,
            height: `116%`,
            children: (0, w.jsx)(`feDropShadow`, {
              dx: `0`,
              dy: `5`,
              stdDeviation: `7`,
              floodColor: `#2c5a74`,
              floodOpacity: `0.18`,
            }),
          }),
        ],
      }),
      (0, w.jsx)(`rect`, { width: xr, height: Sr, rx: `18`, fill: `url(#expSea)` }),
      (0, w.jsxs)(`g`, {
        stroke: `#ffffff`,
        strokeWidth: `1`,
        opacity: `0.13`,
        style: { pointerEvents: `none` },
        children: [
          [110, 220, 330, 440, 550, 660].map((e) => (0, w.jsx)(`line`, { x1: e, y1: `0`, x2: e, y2: Sr }, `v` + e)),
          [120, 240, 360, 480, 600, 720, 840].map((e) =>
            (0, w.jsx)(`line`, { x1: `0`, y1: e, x2: xr, y2: e }, `h` + e),
          ),
        ],
      }),
      (0, w.jsxs)(`g`, {
        transform: `translate(58, 92)`,
        style: { pointerEvents: `none` },
        opacity: `0.55`,
        children: [
          (0, w.jsx)(`polygon`, { points: `0,-30 6,-6 0,0 -6,-6`, fill: `#ffffff` }),
          (0, w.jsx)(`polygon`, { points: `0,30 6,6 0,0 -6,6`, fill: `#5b8aa6` }),
          (0, w.jsx)(`polygon`, { points: `-30,0 -6,-6 0,0 -6,6`, fill: `#5b8aa6` }),
          (0, w.jsx)(`polygon`, { points: `30,0 6,-6 0,0 6,6`, fill: `#5b8aa6` }),
          (0, w.jsx)(`circle`, { r: `3.2`, fill: `#ffffff` }),
          (0, w.jsx)(`text`, {
            y: `-38`,
            textAnchor: `middle`,
            fontSize: `13`,
            fontWeight: `700`,
            fill: `#ffffff`,
            fontFamily: `var(--font-display)`,
            children: `N`,
          }),
        ],
      }),
      (0, w.jsxs)(`g`, {
        style: { pointerEvents: `none` },
        fill: `#5b8aa6`,
        opacity: `0.45`,
        fontFamily: `var(--font-display)`,
        fontStyle: `italic`,
        children: [
          (0, w.jsx)(`text`, {
            x: `235`,
            y: `600`,
            fontSize: `19`,
            textAnchor: `middle`,
            transform: `rotate(-28 235 600)`,
            children: `Mar Tirreno`,
          }),
          (0, w.jsx)(`text`, {
            x: `590`,
            y: `360`,
            fontSize: `19`,
            textAnchor: `middle`,
            transform: `rotate(52 590 360)`,
            children: `Mar Adriatico`,
          }),
          (0, w.jsx)(`text`, {
            x: `470`,
            y: `905`,
            fontSize: `19`,
            textAnchor: `middle`,
            children: `Mar Mediterraneo`,
          }),
          (0, w.jsx)(`text`, {
            x: `640`,
            y: `700`,
            fontSize: `17`,
            textAnchor: `middle`,
            transform: `rotate(-90 640 700)`,
            children: `Mar Ionio`,
          }),
        ],
      }),
      (0, w.jsxs)(`g`, {
        style: { transform: l, transition: `transform .75s cubic-bezier(.3,.1,.25,1)` },
        children: [
          (0, w.jsx)(`g`, {
            filter: `url(#expLandShadow)`,
            children: e.features.map((e) => {
              let s = Pr(e.properties.reg_name || ``),
                c = s ? o[s] : null;
              a.includes(s);
              let l = t === s,
                u = n === s;
              return (0, w.jsx)(
                `path`,
                {
                  d: kr(e.geometry),
                  vectorEffect: `non-scaling-stroke`,
                  fill: c ? c.color : `#cfd8ce`,
                  stroke: l ? `#1e3a4c` : `#ffffff`,
                  strokeWidth: l ? 3 : 1.4,
                  strokeLinejoin: `round`,
                  onClick: () => r(s),
                  onMouseEnter: () => i(s),
                  onMouseLeave: () => i(null),
                  style: {
                    cursor: `pointer`,
                    transition: `filter .15s, stroke .15s`,
                    filter: l ? `brightness(1.05) saturate(1.12)` : u ? `brightness(1.08)` : `none`,
                  },
                },
                e.properties.reg_name,
              );
            }),
          }),
          e.features.map((e) => {
            let n = Pr(e.properties.reg_name || ``),
              r = n ? o[n] : null,
              i = a.includes(n);
            if (t && t !== n) return null;
            let [s, l] = Ar(e.geometry),
              u = r ? r.name : e.properties.reg_name || ``,
              d = !t && i && Fr[n] ? Fr[n].emoji : null,
              f = (i ? 10.5 : 9) / c;
            return (0, w.jsxs)(
              `g`,
              {
                style: { pointerEvents: `none` },
                children: [
                  d &&
                    (0, w.jsxs)(w.Fragment, {
                      children: [
                        (0, w.jsx)(`circle`, { cx: s, cy: l - 14, r: `12`, fill: `#fff`, opacity: `0.92` }),
                        (0, w.jsx)(`circle`, { cx: s, cy: l - 14, r: `5.5`, fill: `#a6452a` }),
                      ],
                    }),
                  (0, w.jsx)(`text`, {
                    x: s,
                    y: l + (d ? 8 : 2),
                    textAnchor: `middle`,
                    fontSize: f,
                    fontWeight: `600`,
                    fontFamily: `var(--font-display), Georgia, serif`,
                    fill: `#2a3626`,
                    stroke: `#ffffff`,
                    strokeWidth: 2.8 / c,
                    paintOrder: `stroke`,
                    strokeLinejoin: `round`,
                    children: u,
                  }),
                ],
              },
              n + `-label`,
            );
          }),
        ],
      }),
    ],
  });
}
var Nr = regionsData;
function Pr(e = ``) {
  let t = e.toLowerCase();
  return t.includes(`valle`)
    ? `valdaosta`
    : t.includes(`piemonte`)
      ? `piemonte`
      : t.includes(`liguria`)
        ? `liguria`
        : t.includes(`lombardia`)
          ? `lombardia`
          : t.includes(`trentino`)
            ? `trentino`
            : t.includes(`veneto`) && !t.includes(`friuli`)
              ? `veneto`
              : t.includes(`friuli`)
                ? `friuli`
                : t.includes(`emilia`)
                  ? `emilia`
                  : t.includes(`toscana`)
                    ? `toscana`
                    : t.includes(`marche`)
                      ? `marche`
                      : t.includes(`umbria`)
                        ? `umbria`
                        : t.includes(`lazio`)
                          ? `lazio`
                          : t.includes(`abruzzo`)
                            ? `abruzzo`
                            : t.includes(`molise`)
                              ? `molise`
                              : t.includes(`campania`)
                                ? `campania`
                                : t.includes(`puglia`) || t.includes(`apulia`)
                                  ? `puglia`
                                  : t.includes(`basilicata`)
                                    ? `basilicata`
                                    : t.includes(`calabria`)
                                      ? `calabria`
                                      : t.includes(`sicilia`) || t.includes(`sicily`)
                                        ? `sicilia`
                                        : t.includes(`sardegna`) || t.includes(`sardinia`)
                                          ? `sardegna`
                                          : null;
}
var Fr = regionStoriesData,
  Ir = Object.keys(Fr);
function Lr({ region: e, questions: t }) {
  let [n, r] = (0, S.useState)({}),
    [i, a] = (0, S.useState)(!1),
    o = i ? t.filter((e, t) => n[t] === e.a).length : null;
  return (0, w.jsxs)(`div`, {
    className: `exp-quiz`,
    children: [
      (0, w.jsx)(`div`, { className: `exp-quiz-title`, children: `Comprehension Check` }),
      t.map((e, t) => {
        let a = n[t];
        return (0, w.jsxs)(
          `div`,
          {
            className: `ge-q`,
            style: { background: `var(--card)`, borderRadius: 11, padding: `12px 14px`, marginBottom: 8 },
            children: [
              (0, w.jsxs)(`div`, { className: `ge-qtext`, children: [t + 1, `. `, e.q] }),
              (0, w.jsx)(`div`, {
                className: `ge-opts`,
                children: e.opts.map((n, o) => {
                  let s = `ge-opt`;
                  return (
                    i && o === e.a && (s += ` correct`),
                    i && a === o && o !== e.a && (s += ` wrong`),
                    !i && a === o && (s += ` chosen`),
                    (0, w.jsxs)(
                      `button`,
                      {
                        className: s,
                        disabled: i,
                        onClick: () => r((e) => ({ ...e, [t]: o })),
                        children: [
                          (0, w.jsx)(`span`, { className: `ge-letter`, children: String.fromCharCode(65 + o) }),
                          ` `,
                          n,
                        ],
                      },
                      o,
                    )
                  );
                }),
              }),
              i &&
                (0, w.jsx)(`div`, {
                  className: `ge-fb ` + (a === e.a ? `ok` : `no`),
                  children: a === e.a ? `✓ Corretto!` : `✗ → ${e.opts[e.a]}`,
                }),
            ],
          },
          t,
        );
      }),
      (0, w.jsx)(`div`, {
        className: `ge-actions`,
        children: i
          ? (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsxs)(`span`, { className: `ge-score`, children: [o, `/`, t.length, ` correct`] }),
                (0, w.jsx)(`button`, {
                  className: `btn ghost sm`,
                  onClick: () => {
                    (r({}), a(!1));
                  },
                  children: `Try again`,
                }),
              ],
            })
          : (0, w.jsx)(`button`, {
              className: `btn go sm`,
              disabled: Object.keys(n).length < t.length,
              onClick: () => a(!0),
              children: `Check answers`,
            }),
      }),
    ],
  });
}
function Rr() {
  let [e, t] = (0, S.useState)(null),
    [n, r] = (0, S.useState)(null),
    [i, a] = (0, S.useState)(null),
    [o, s] = (0, S.useState)(!1),
    [c, l] = (0, S.useState)(!1),
    [u, d] = (0, S.useState)(0),
    [f, p] = (0, S.useState)(!1),
    [m, h] = (0, S.useState)(null),
    g = (0, S.useRef)(!1),
    [_, v] = (0, S.useState)(0);
  (0, S.useEffect)(() => {
    let e = !1;
    return (
      fetch(`/PM-Side-Projects/cils-app/italy-regions.geojson`)
        .then((e) => {
          if (!e.ok) throw Error(`http ` + e.status);
          return e.json();
        })
        .then((t) => {
          e || h(t);
        })
        .catch(() => {
          !e && _ < 3 && setTimeout(() => v((e) => e + 1), 1200);
        }),
      () => {
        e = !0;
      }
    );
  }, [_]);
  let y = e ? Fr[e] : null,
    b = () => {
      (M(), (g.current = !0), l(!1));
    },
    x = async () => {
      if (y) {
        ((g.current = !1), l(!0));
        for (let e = 0; e < y.lines.length && !g.current; e++)
          (d(e),
            await new Promise((t) => {
              (j(y.lines[e].it, { rate: 0.92 }), setTimeout(t, Math.max(1600, y.lines[e].it.length * 88)));
            }));
        g.current || l(!1);
      }
    },
    C = (e) => {
      if (e) {
        if (!Ir.includes(e)) {
          a(e);
          return;
        }
        (b(),
          a(null),
          t(e),
          d(0),
          p(!1),
          setTimeout(() => {
            (s(!0), window.scrollTo({ top: 0, behavior: `smooth` }));
          }, 880));
      }
    },
    T = () => {
      (b(), s(!1), t(null));
    },
    ee = n || i || e,
    E = ee ? Nr[ee] : null,
    D = e ? Nr[e] : null,
    te = e ? br[e] : null;
  return o && D && y
    ? (0, w.jsxs)(`section`, {
        className: `card exp-territory`,
        children: [
          (0, w.jsxs)(`button`, {
            className: `btn ghost sm exp-terr-back`,
            onClick: T,
            children: [
              (0, w.jsxs)(`svg`, {
                width: `15`,
                height: `15`,
                viewBox: `0 0 24 24`,
                fill: `none`,
                stroke: `currentColor`,
                strokeWidth: `1.8`,
                children: [
                  (0, w.jsx)(`line`, { x1: `19`, y1: `12`, x2: `5`, y2: `12` }),
                  (0, w.jsx)(`polyline`, { points: `12 19 5 12 12 5` }),
                ],
              }),
              `Torna alla mappa`,
            ],
          }),
          (0, w.jsxs)(`div`, {
            className: `exp-terr-banner`,
            style: { '--rc': D.color },
            children: [
              te && (0, w.jsx)(`img`, { src: te.src, alt: D.name, className: `exp-terr-img` }),
              (0, w.jsx)(`div`, { className: `exp-terr-overlay` }),
              (0, w.jsxs)(`div`, {
                className: `exp-terr-caption`,
                children: [
                  (0, w.jsxs)(`div`, {
                    children: [
                      (0, w.jsx)(`div`, { className: `exp-terr-name`, children: D.name }),
                      (0, w.jsxs)(`div`, { className: `exp-terr-capital`, children: [`Capoluogo · `, D.capital] }),
                    ],
                  }),
                ],
              }),
              te && (0, w.jsxs)(`span`, { className: `exp-terr-credit`, children: [`Foto: `, te.credit] }),
            ],
          }),
          (0, w.jsx)(`div`, { className: `exp-terr-tag`, children: D.tag.it }),
          (0, w.jsxs)(`div`, {
            className: `exp-controls exp-terr-controls`,
            children: [
              (0, w.jsx)(`button`, {
                className: `btn sm` + (c ? ` ghost` : ` go`),
                onClick: c ? b : x,
                children: c ? `Ferma` : `Ascolta tutto`,
              }),
              (0, w.jsxs)(`label`, {
                className: `exp-toggle`,
                children: [
                  (0, w.jsx)(`input`, { type: `checkbox`, checked: f, onChange: (e) => p(e.target.checked) }),
                  `Mostra inglese`,
                ],
              }),
            ],
          }),
          (0, w.jsx)(`div`, {
            className: `exp-script`,
            children: y.lines.map((e, t) =>
              (0, w.jsxs)(
                `div`,
                {
                  className: `exp-line` + (c && u === t ? ` active` : ``),
                  onClick: () => {
                    (j(e.it, { rate: 0.92 }), d(t));
                  },
                  children: [
                    (0, w.jsx)(`div`, { className: `exp-line-num`, children: t + 1 }),
                    (0, w.jsxs)(`div`, {
                      className: `exp-line-body`,
                      children: [
                        (0, w.jsx)(`div`, { className: `exp-line-it`, children: e.it }),
                        f && (0, w.jsx)(`div`, { className: `exp-line-en`, children: e.en }),
                      ],
                    }),
                    (0, w.jsx)(`button`, {
                      className: `icon-play sm lp-speak`,
                      onClick: (n) => {
                        (n.stopPropagation(), j(e.it, { rate: 0.92 }), d(t));
                      },
                      'aria-label': `Ascolta`,
                    }),
                  ],
                },
                t,
              ),
            ),
          }),
          (0, w.jsx)(Lr, { region: D, questions: y.questions }),
          (0, w.jsx)(`div`, {
            className: `exp-tip`,
            children: `Ascolta prima con l'inglese nascosto, poi mettiti alla prova con il quiz.`,
          }),
        ],
      })
    : (0, w.jsxs)(`section`, {
        className: `card`,
        children: [
          (0, w.jsxs)(`p`, {
            className: `instr`,
            children: [
              `Tocca una regione sulla mappa per `,
              (0, w.jsx)(`strong`, { children: `entrare` }),
              `. Le regioni con il pallino sono pronte.`,
            ],
          }),
          (0, w.jsxs)(`div`, {
            className: `exp-map-wrap-full`,
            children: [
              (0, w.jsx)(Mr, {
                geoData: m,
                selected: e,
                hovered: n,
                onSelect: C,
                onHover: r,
                scriptIds: Ir,
                regionMeta: Nr,
              }),
              e &&
                (0, w.jsx)(`button`, {
                  className: `exp-zoomout`,
                  onClick: () => {
                    (b(), t(null));
                  },
                  children: `Tutta l'Italia`,
                }),
              E &&
                (0, w.jsxs)(`div`, {
                  className: `exp-float-card`,
                  style: { '--rc': E.color },
                  children: [
                    (0, w.jsx)(`div`, {
                      className: `exp-float-name`,
                      children: E.name,
                    }),
                    (0, w.jsxs)(`div`, { className: `exp-float-capital`, children: [`Capoluogo: `, E.capital] }),
                    E.tag &&
                      (0, w.jsxs)(w.Fragment, {
                        children: [
                          (0, w.jsx)(`div`, { className: `exp-float-it`, children: E.tag.it }),
                          (0, w.jsx)(`div`, { className: `exp-float-en`, children: E.tag.en }),
                        ],
                      }),
                    Ir.includes(ee)
                      ? (0, w.jsx)(`div`, {
                          className: `exp-float-cta`,
                          children: `Tocca per entrare nella regione`,
                        })
                      : (0, w.jsx)(`div`, { className: `exp-float-soon`, children: `Storia audio in arrivo` }),
                  ],
                }),
              (0, w.jsx)(`p`, {
                className: `exp-map-hint`,
                children: `Tocca una regione per un assaggio · le regioni con il pallino hanno una storia e un quiz`,
              }),
            ],
          }),
        ],
      });
}
var zr = shadowingSetsData;
function Br(e, t) {
  let n = new Set(
      e
        .toLowerCase()
        .replace(/[.,!?]/g, ``)
        .split(/\s+/),
    ),
    r = new Set(
      t
        .toLowerCase()
        .replace(/[.,!?]/g, ``)
        .split(/\s+/),
    ),
    i = [...n].filter((e) => r.has(e)).length,
    a = new Set([...n, ...r]).size;
  return a === 0 ? 0 : Math.round((i / a) * 100);
}
function Vr() {
  let [e, t] = (0, S.useState)(zr[0].id),
    [n, r] = (0, S.useState)(0),
    [i, a] = (0, S.useState)(`ready`),
    [o, s] = (0, S.useState)(``),
    [c, l] = (0, S.useState)({}),
    [u, d] = (0, S.useState)(!1),
    [f, p] = (0, S.useState)(!1),
    m = (0, S.useRef)(null),
    h = zr.find((t) => t.id === e),
    g = h.sentences[n],
    _ = g.it,
    v = e + n,
    y = o ? Br(_, o) : null,
    b = Object.values(c).filter((e) => e === `got`).length,
    x = Object.keys(c).length,
    C = async () => {
      (s(``),
        a(`listening`),
        await j(_),
        await new Promise((e) => setTimeout(e, 400)),
        a(`recording`),
        (m.current = be({
          lang: `it-IT`,
          onUpdate: (e) => s(e),
          onEnd: (e) => {
            (s(e || ``), a(`result`));
          },
        })),
        m.current ? (m.current.start(), setTimeout(() => m.current?.stop(), 8e3)) : a(`result`));
    },
    T = () => {
      (m.current?.stop(), a(`result`));
    },
    ee = (e) => {
      l((t) => ({ ...t, [v]: e }));
    },
    E = () => {
      (r((n + 1) % h.sentences.length), a(`ready`), s(``));
    },
    D = () => {
      (r((n - 1 + h.sentences.length) % h.sentences.length), a(`ready`), s(``));
    },
    te = (e) => {
      (t(e), r(0), a(`ready`), s(``));
    },
    ne = Math.round((Object.keys(c).length / h.sentences.length) * 100);
  return (0, w.jsxs)(`section`, {
    className: `card`,
    children: [
      (0, w.jsx)(`h2`, { className: `sec-h`, children: `Ripeti & Impara` }),
      (0, w.jsx)(`p`, {
        className: `instr`,
        children: `Listen → repeat out loud → see how close you were. The fastest way to train your ear and your pronunciation at the same time.`,
      }),
      (0, w.jsx)(`div`, {
        className: `sh-decks`,
        children: zr.map((t) =>
          (0, w.jsxs)(
            `button`,
            {
              className: `sh-deck-btn` + (t.id === e ? ` on` : ``),
              onClick: () => te(t.id),
              children: t.label,
            },
            t.id,
          ),
        ),
      }),
      (0, w.jsxs)(`div`, {
        className: `sh-progress-row`,
        children: [
          (0, w.jsxs)(`span`, {
            className: `sh-progress-label`,
            children: [h.label, ` — `, n + 1, ` / `, h.sentences.length],
          }),
          (0, w.jsxs)(`div`, {
            style: { display: `flex`, alignItems: `center`, gap: 12 },
            children: [
              (0, w.jsxs)(`label`, {
                className: `sh-en-toggle`,
                children: [
                  (0, w.jsx)(`input`, { type: `checkbox`, checked: f, onChange: (e) => p(e.target.checked) }),
                  `Show English`,
                ],
              }),
              (0, w.jsxs)(`span`, { className: `sh-score-badge`, children: [b, ` got · `, x - b, ` missed`] }),
            ],
          }),
        ],
      }),
      (0, w.jsx)(`div`, {
        className: `sh-prog-bar`,
        children: (0, w.jsx)(`div`, { className: `sh-prog-fill`, style: { width: ne + `%` } }),
      }),
      (0, w.jsxs)(`div`, {
        className: `sh-main`,
        children: [
          (0, w.jsxs)(`div`, {
            className: `sh-sentence` + (i === `listening` ? ` playing` : ``),
            children: [
              i === `ready` &&
                (0, w.jsxs)(`div`, {
                  style: { textAlign: `center` },
                  children: [
                    (0, w.jsx)(`span`, { className: `sh-sentence-hint`, children: `Tap Play & Record to hear the sentence` }),
                    f && (0, w.jsx)(`div`, { className: `sh-en-preview`, children: g.en }),
                  ],
                }),
              i === `listening` && (0, w.jsx)(`span`, { className: `sh-sentence-text`, children: `Listening…` }),
              i === `recording` &&
                (0, w.jsx)(`span`, { className: `sh-sentence-text sh-recording-label`, children: `Now repeat it!` }),
              i === `result` &&
                (0, w.jsxs)(`div`, {
                  style: { textAlign: `center` },
                  children: [
                    (0, w.jsx)(`span`, { className: `sh-sentence-text`, children: _ }),
                    (0, w.jsx)(`div`, { className: `sh-en-inline`, children: g.en }),
                  ],
                }),
            ],
          }),
          (i === `recording` || i === `result`) &&
            (0, w.jsxs)(`div`, {
              className: `sh-attempt`,
              children: [
                (0, w.jsx)(`div`, { className: `sh-attempt-label`, children: `You said:` }),
                (0, w.jsx)(`div`, {
                  className: `sh-attempt-text` + (i === `recording` ? ` live` : ``),
                  children:
                    o ||
                    (0, w.jsx)(`span`, {
                      className: `sh-attempt-empty`,
                      children: i === `recording` ? `listening…` : `(nothing detected)`,
                    }),
                }),
                i === `result` &&
                  y !== null &&
                  (0, w.jsxs)(`div`, {
                    className: `sh-match` + (y >= 70 ? ` good` : y >= 40 ? ` ok` : ` poor`),
                    children: [y, `% word match`],
                  }),
              ],
            }),
          i === `result` &&
            o &&
            (0, w.jsxs)(`div`, {
              className: `sh-compare`,
              children: [
                (0, w.jsx)(`div`, { className: `sh-compare-label`, children: `Correct sentence:` }),
                (0, w.jsx)(`div`, { className: `sh-compare-text`, children: _ }),
                (0, w.jsx)(`button`, {
                  className: `mini ghost`,
                  onClick: () => j(_),
                  style: { marginTop: 6 },
                  children: `Hear again`,
                }),
              ],
            }),
          i === `result` &&
            (0, w.jsxs)(`div`, {
              className: `sh-tip-row`,
              children: [
                (0, w.jsx)(`button`, {
                  className: `mini ghost`,
                  onClick: () => d((e) => !e),
                  children: u ? `Hide tip` : `Pronunciation tip`,
                }),
                u &&
                  (0, w.jsxs)(`div`, {
                    className: `sh-tip`,
                    children: [
                      (0, w.jsx)(`b`, { children: `Shadowing tip:` }),
                      ` Don't translate in your head — repeat the sounds immediately. Focus on rhythm and stress, not perfection. Repeat the same sentence 3× in a row for best results.`,
                    ],
                  }),
              ],
            }),
          (0, w.jsxs)(`div`, {
            className: `sh-controls`,
            children: [
              (0, w.jsx)(`button`, { className: `btn ghost sm`, onClick: D, children: `‹ Prev` }),
              i === `ready` &&
                (0, w.jsx)(`button`, { className: `btn go sh-play-btn`, onClick: C, children: `Play & Record` }),
              i === `listening` &&
                (0, w.jsx)(`button`, { className: `btn ghost sh-play-btn`, disabled: !0, children: `Playing…` }),
              i === `recording` &&
                (0, w.jsx)(`button`, {
                  className: `btn sh-play-btn`,
                  style: { background: `#e74c3c`, color: `#fff` },
                  onClick: T,
                  children: `Done speaking`,
                }),
              i === `result` &&
                (0, w.jsx)(`button`, {
                  className: `btn go sh-play-btn`,
                  onClick: () => {
                    (a(`ready`), s(``));
                  },
                  children: `Try again`,
                }),
              (0, w.jsx)(`button`, { className: `btn ghost sm`, onClick: E, children: `Next ›` }),
            ],
          }),
          i === `result` &&
            !c[v] &&
            (0, w.jsxs)(`div`, {
              className: `sh-selfmark`,
              children: [
                (0, w.jsx)(`span`, { className: `sh-selfmark-label`, children: `How did you do?` }),
                (0, w.jsx)(`button`, { className: `sh-mark-btn got`, onClick: () => ee(`got`), children: `Got it` }),
                (0, w.jsx)(`button`, {
                  className: `sh-mark-btn missed`,
                  onClick: () => ee(`missed`),
                  children: `Need practice`,
                }),
              ],
            }),
          i === `result` &&
            c[v] &&
            (0, w.jsxs)(`div`, {
              className: `sh-marked ` + c[v],
              children: [
                c[v] === `got` ? `Marked as got it` : `Marked for practice`,
                (0, w.jsx)(`button`, {
                  className: `mini ghost`,
                  style: { marginLeft: 10 },
                  onClick: () =>
                    l((e) => {
                      let t = { ...e };
                      return (delete t[v], t);
                    }),
                  children: `undo`,
                }),
              ],
            }),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `sh-how`,
        children: [
          (0, w.jsx)(`div`, { className: `sh-how-title`, children: `How to use shadowing` }),
          (0, w.jsxs)(`div`, {
            className: `sh-how-steps`,
            children: [
              (0, w.jsxs)(`div`, {
                className: `sh-how-step`,
                children: [
                  (0, w.jsx)(`span`, { className: `sh-step-n`, children: `1` }),
                  `Tap `,
                  (0, w.jsx)(`b`, { children: `Play & Record` }),
                  ` — the sentence plays, then recording starts automatically`,
                ],
              }),
              (0, w.jsxs)(`div`, {
                className: `sh-how-step`,
                children: [
                  (0, w.jsx)(`span`, { className: `sh-step-n`, children: `2` }),
                  `Repeat the sentence out loud as accurately as you can`,
                ],
              }),
              (0, w.jsxs)(`div`, {
                className: `sh-how-step`,
                children: [
                  (0, w.jsx)(`span`, { className: `sh-step-n`, children: `3` }),
                  `See your transcript vs the original — check word match %`,
                ],
              }),
              (0, w.jsxs)(`div`, {
                className: `sh-how-step`,
                children: [
                  (0, w.jsx)(`span`, { className: `sh-step-n`, children: `4` }),
                  `Mark yourself and move on — try to hit 70%+ consistently`,
                ],
              }),
              (0, w.jsxs)(`div`, {
                className: `sh-how-step`,
                children: [
                  (0, w.jsx)(`span`, { className: `sh-step-n`, children: `5` }),
                  `Use the `,
                  (0, w.jsx)(`b`, { children: `Velocità ascolto` }),
                  ` buttons above — train at Veloce, then the exam feels slow`,
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Hr = dailyExamListeningData,
  Ur = dailyExamReadingData,
  Wr = dailyExamClozeData,
  Gr = dailyExamWritingData;
function Kr() {
  return Math.floor(Date.now() / 864e5);
}
function qr() {
  let e = Kr();
  return {
    listening: Hr[e % Hr.length],
    reading: Ur[(e + 4) % Ur.length],
    cloze: Wr[(e + 7) % Wr.length],
    writing: Gr[(e + 2) % Gr.length],
  };
}
function Jr(e) {
  return [...e.listening.vocab, ...e.reading.vocab, ...e.cloze.vocab];
}
var Yr = `cils_streak_v2`,
  Xr = `cils_daily_result_v1`,
  Zr = () => new Date().toISOString().slice(0, 10);
function Qr() {
  try {
    return JSON.parse(localStorage.getItem(Yr)) || {};
  } catch {
    return {};
  }
}
function $r(e) {
  localStorage.setItem(Yr, JSON.stringify(e));
}
function ei() {
  try {
    let e = JSON.parse(localStorage.getItem(Xr));
    return !!(e && e.date === Zr());
  } catch {
    return !1;
  }
}
function ti(e, t) {
  try {
    localStorage.setItem(Xr, JSON.stringify({ date: e, answers: t }));
  } catch {}
}
function ni(e, t) {
  try {
    let n = JSON.parse(localStorage.getItem(Xr));
    if (!n || n.date !== Zr()) return null;
    let { lAns: r, rAns: i, cAns: a, vAns: o, wMark: s } = n.answers,
      c = 0,
      l = 0;
    (e.listening.questions.forEach((e, t) => {
      (l++, r[t] === e.a && c++);
    }),
      e.reading.questions.forEach((e, t) => {
        (l++, i[t] === e.a && c++);
      }),
      e.cloze.gaps.forEach((e, t) => {
        (l++, a[t] === e.a && c++);
      }),
      l++,
      s === `good` ? (c += 1) : s === `ok` && (c += 0.5));
    let u = 0;
    return (
      t.forEach((e, t) => {
        (l++, o[t] === e.a && (c++, u++));
      }),
      { score: c, total: l, lAns: r, rAns: i, cAns: a, vAns: o, wMark: s, exam: e, vocabWords: t, vScore: u }
    );
  } catch {
    return null;
  }
}
function ri() {
  let e = Qr();
  return {
    streak: e.streak || 0,
    lastDate: e.lastDate || null,
    history: e.history || {},
    level: e.level || 1,
    qualDays: e.qualDays || 0,
  };
}
function ii({ totalSec: e, onExpire: t }) {
  let [n, r] = (0, S.useState)(e);
  (0, S.useEffect)(() => {
    let e = setInterval(() => r((n) => (n <= 1 ? (clearInterval(e), t(), 0) : n - 1)), 1e3);
    return () => clearInterval(e);
  }, []);
  let i = Math.floor(n / 60),
    a = n % 60,
    o = (n / e) * 100,
    s = n < 90;
  return (0, w.jsxs)(`div`, {
    className: `de-timer-wrap`,
    children: [
      (0, w.jsx)(`div`, {
        className: `de-timer-bar-bg`,
        children: (0, w.jsx)(`div`, {
          className: `de-timer-bar-fill`,
          style: { width: o + `%`, background: s ? `#e74c3c` : `var(--green)` },
        }),
      }),
      (0, w.jsxs)(`span`, {
        className: `de-timer-text` + (s ? ` red` : ``),
        children: [i, `:`, a.toString().padStart(2, `0`)],
      }),
    ],
  });
}
var ai = [
  { key: `listening`, icon: `🔊`, label: `Ascolto` },
  { key: `reading`, icon: `📖`, label: `Lettura` },
  { key: `cloze`, icon: `✏️`, label: `Cloze` },
  { key: `writing`, icon: `✍️`, label: `Scrittura` },
  { key: `vocab`, icon: `🔤`, label: `Vocabolario` },
];
function oi({ current: e, done: t }) {
  return (0, w.jsx)(`div`, {
    className: `de-sec-bar`,
    children: ai.map((n, r) =>
      (0, w.jsxs)(
        `div`,
        {
          className: `de-sec-chip` + (n.key === e ? ` active` : t.includes(n.key) ? ` done` : ``),
          children: [t.includes(n.key) ? `✓ ` : null, (0, w.jsx)(`span`, { children: n.label })],
        },
        n.key,
      ),
    ),
  });
}
function si({ questions: e, answers: t, onChange: n }) {
  return (0, w.jsx)(`div`, {
    className: `de-mcq-list`,
    children: e.map((e, r) =>
      (0, w.jsxs)(
        `div`,
        {
          className: `de-mcq`,
          children: [
            (0, w.jsxs)(`div`, { className: `de-mcq-q`, children: [r + 1, `. `, e.q] }),
            (0, w.jsx)(`div`, {
              className: `de-mcq-opts`,
              children: e.opts.map((e, i) =>
                (0, w.jsxs)(
                  `button`,
                  {
                    className: `de-opt` + (t[r] === i ? ` on` : ``),
                    onClick: () => n(r, i),
                    children: [(0, w.jsx)(`span`, { className: `de-opt-l`, children: String.fromCharCode(65 + i) }), e],
                  },
                  i,
                ),
              ),
            }),
          ],
        },
        r,
      ),
    ),
  });
}
function ci({ cloze: e, answers: t, onChange: n }) {
  return (0, w.jsxs)(`div`, {
    className: `de-cloze`,
    children: [
      (0, w.jsx)(`div`, { className: `de-cloze-intro`, children: e.intro }),
      (0, w.jsx)(`div`, {
        className: `de-cloze-text`,
        children: e.parts.map((n, r) =>
          (0, w.jsxs)(
            `span`,
            {
              children: [
                (0, w.jsx)(`span`, { style: { whiteSpace: `pre-wrap` }, children: n }),
                r < e.gaps.length &&
                  (0, w.jsx)(`span`, {
                    className: `de-gap` + (t[r] === void 0 ? `` : ` filled`),
                    children: t[r] === void 0 ? `___` : e.gaps[r].opts[t[r]],
                  }),
              ],
            },
            r,
          ),
        ),
      }),
      (0, w.jsx)(`div`, {
        className: `de-cloze-gaps`,
        children: e.gaps.map((e, r) =>
          (0, w.jsxs)(
            `div`,
            {
              className: `de-cloze-gap-row`,
              children: [
                (0, w.jsxs)(`span`, { className: `de-gap-num`, children: [`Gap `, r + 1, `:`] }),
                (0, w.jsx)(`div`, {
                  className: `de-mcq-opts`,
                  style: { flexDirection: `row`, flexWrap: `wrap`, gap: 6 },
                  children: e.opts.map((e, i) =>
                    (0, w.jsxs)(
                      `button`,
                      {
                        className: `de-opt sm` + (t[r] === i ? ` on` : ``),
                        onClick: () => n(r, i),
                        children: [
                          (0, w.jsx)(`span`, { className: `de-opt-l`, children: String.fromCharCode(65 + i) }),
                          e,
                        ],
                      },
                      i,
                    ),
                  ),
                }),
              ],
            },
            r,
          ),
        ),
      }),
    ],
  });
}
function li({ words: e, answers: t, onChange: n }) {
  return (0, w.jsx)(`div`, {
    className: `de-vocab-list`,
    children: e.map((e, r) =>
      (0, w.jsxs)(
        `div`,
        {
          className: `de-vocab-item`,
          children: [
            (0, w.jsx)(`div`, { className: `de-vocab-word`, children: e.it }),
            (0, w.jsx)(`div`, {
              className: `de-mcq-opts`,
              children: e.opts.map((e, i) =>
                (0, w.jsxs)(
                  `button`,
                  {
                    className: `de-opt` + (t[r] === i ? ` on` : ``),
                    onClick: () => n(r, i),
                    children: [(0, w.jsx)(`span`, { className: `de-opt-l`, children: String.fromCharCode(65 + i) }), e],
                  },
                  i,
                ),
              ),
            }),
          ],
        },
        r,
      ),
    ),
  });
}
function ui({ exam: e, onFinish: t }) {
  let [n, r] = (0, S.useState)(0),
    i = `de_` + Zr(),
    [a, o] = N(i + `_sec`, `listening`),
    [s, c] = N(i + `_done`, []),
    [l, u] = N(i + `_l`, {}),
    [d, f] = N(i + `_r`, {}),
    [p, m] = N(i + `_c`, {}),
    [h, g] = N(i + `_v`, {}),
    [_, v] = N(i + `_w`, null),
    [y, b] = N(i + `_p`, !1),
    [x, C] = (0, S.useState)(!1),
    T = Jr(e),
    ee = async () => {
      (C(!0), await j(e.listening.passage), C(!1), b(!0));
    },
    E = () =>
      a === `listening`
        ? y && e.listening.questions.every((e, t) => l[t] !== void 0)
        : a === `reading`
          ? e.reading.questions.every((e, t) => d[t] !== void 0)
          : a === `cloze`
            ? e.cloze.gaps.every((e, t) => p[t] !== void 0)
            : a === `writing`
              ? _ !== null
              : a === `vocab`
                ? T.every((e, t) => h[t] !== void 0)
                : !1,
    D = () => {
      M();
      let n = [`listening`, `reading`, `cloze`, `writing`, `vocab`],
        r = n.indexOf(a);
      if ((c((e) => [...e, a]), r < n.length - 1)) (o(n[r + 1]), b(!1));
      else {
        let n = 0,
          r = 0;
        (e.listening.questions.forEach((e, t) => {
          (r++, l[t] === e.a && n++);
        }),
          e.reading.questions.forEach((e, t) => {
            (r++, d[t] === e.a && n++);
          }),
          e.cloze.gaps.forEach((e, t) => {
            (r++, p[t] === e.a && n++);
          }),
          r++,
          _ === `good` ? (n += 1) : _ === `ok` && (n += 0.5));
        let i = 0;
        (T.forEach((e, t) => {
          (r++, h[t] === e.a && (n++, i++));
        }),
          t({ score: n, total: r, lAns: l, rAns: d, cAns: p, vAns: h, wMark: _, exam: e, vocabWords: T, vScore: i }));
      }
    };
  return (0, w.jsxs)(`div`, {
    className: `de-runner`,
    children: [
      (0, w.jsxs)(`div`, {
        className: `de-timer-row`,
        children: [
          (0, w.jsx)(ii, { totalSec: 900, onExpire: D }, n),
          (0, w.jsx)(`button`, {
            className: `ptab sm ghost-reset`,
            title: `Ricomincia l'esame di oggi da capo`,
            onClick: () => {
              (M(), o(`listening`), c([]), u({}), f({}), m({}), g({}), v(null), b(!1), r((e) => e + 1));
            },
            children: `Ricomincia`,
          }),
        ],
      }),
      (0, w.jsx)(oi, { current: a, done: s }),
      a === `listening` &&
        (0, w.jsxs)(`div`, {
          className: `de-sec-card`,
          children: [
            (0, w.jsx)(`div`, { className: `de-sec-title`, children: `Ascolto — Listening` }),
            (0, w.jsx)(`div`, {
              className: `de-sec-sub`,
              children: `Ascolta il testo e rispondi alle domande. Puoi ascoltare due volte.`,
            }),
            (0, w.jsxs)(`div`, {
              className: `de-audio-row`,
              children: [
                (0, w.jsx)(`button`, {
                  className: `btn sm ` + (x ? `ghost` : `go`),
                  onClick: ee,
                  disabled: x,
                  children: x ? `In riproduzione…` : y ? `Riascolta` : `Ascolta il testo`,
                }),
                y && (0, w.jsx)(`span`, { className: `de-played-badge`, children: `Ascoltato` }),
              ],
            }),
            y &&
              (0, w.jsx)(si, {
                questions: e.listening.questions,
                answers: l,
                onChange: (e, t) => u((n) => ({ ...n, [e]: t })),
              }),
          ],
        }),
      a === `reading` &&
        (0, w.jsxs)(`div`, {
          className: `de-sec-card`,
          children: [
            (0, w.jsx)(`div`, { className: `de-sec-title`, children: `Lettura — Reading` }),
            (0, w.jsx)(`div`, { className: `de-sec-sub`, children: `Leggi il testo e scegli la risposta corretta.` }),
            (0, w.jsx)(`div`, { className: `de-reading-passage`, children: e.reading.text }),
            (0, w.jsx)(si, {
              questions: e.reading.questions,
              answers: d,
              onChange: (e, t) => f((n) => ({ ...n, [e]: t })),
            }),
          ],
        }),
      a === `cloze` &&
        (0, w.jsxs)(`div`, {
          className: `de-sec-card`,
          children: [
            (0, w.jsx)(`div`, { className: `de-sec-title`, children: `Completamento testo — Cloze` }),
            (0, w.jsx)(`div`, {
              className: `de-sec-sub`,
              children: `Scegli la parola corretta per ogni spazio numerato.`,
            }),
            (0, w.jsx)(ci, { cloze: e.cloze, answers: p, onChange: (e, t) => m((n) => ({ ...n, [e]: t })) }),
          ],
        }),
      a === `writing` &&
        (0, w.jsxs)(`div`, {
          className: `de-sec-card`,
          children: [
            (0, w.jsx)(`div`, { className: `de-sec-title`, children: `Produzione scritta — Writing` }),
            (0, w.jsx)(`div`, {
              className: `de-sec-sub`,
              children: `Scrivi la risposta nella casella, poi valuta te stesso.`,
            }),
            (0, w.jsx)(`div`, { className: `de-writing-task`, children: e.writing.prompt }),
            (0, w.jsx)(`textarea`, { className: `de-textarea`, rows: 6, placeholder: `Scrivi qui la tua risposta…` }),
            (0, w.jsxs)(`div`, {
              className: `de-self-row`,
              children: [
                (0, w.jsx)(`span`, { className: `de-self-label`, children: `Come è andata?` }),
                [
                  { v: `good`, label: `Bene`, sub: `Ho scritto correttamente` },
                  { v: `ok`, label: `Così così`, sub: `Qualche errore` },
                  { v: `poor`, label: `Difficile`, sub: `Ho fatto fatica` },
                ].map((e) =>
                  (0, w.jsxs)(
                    `button`,
                    {
                      className: `de-self-btn ` + e.v + (_ === e.v ? ` on` : ``),
                      onClick: () => v(e.v),
                      children: [
                        (0, w.jsx)(`span`, { children: e.label }),
                        (0, w.jsx)(`span`, { className: `de-self-sub`, children: e.sub }),
                      ],
                    },
                    e.v,
                  ),
                ),
              ],
            }),
          ],
        }),
      a === `vocab` &&
        (0, w.jsxs)(`div`, {
          className: `de-sec-card`,
          children: [
            (0, w.jsx)(`div`, { className: `de-sec-title`, children: `Vocabolario — Vocabulary` }),
            (0, w.jsx)(`div`, {
              className: `de-sec-sub`,
              children: `Scegli il significato corretto in inglese per ogni parola italiana. Le parole vengono dall'esame di oggi.`,
            }),
            (0, w.jsx)(li, { words: T, answers: h, onChange: (e, t) => g((n) => ({ ...n, [e]: t })) }),
          ],
        }),
      (0, w.jsxs)(`div`, {
        className: `de-footer`,
        children: [
          (0, w.jsx)(`div`, {
            className: `de-answered`,
            children:
              a === `listening` && y
                ? `${Object.keys(l).length} / ${e.listening.questions.length} answered`
                : a === `reading`
                  ? `${Object.keys(d).length} / ${e.reading.questions.length} answered`
                  : a === `cloze`
                    ? `${Object.keys(p).length} / ${e.cloze.gaps.length} answered`
                    : a === `vocab`
                      ? `${Object.keys(h).length} / ${T.length} answered`
                      : ``,
          }),
          (0, w.jsx)(`button`, {
            className: `btn go de-next-btn`,
            onClick: D,
            disabled: !E(),
            children: a === `vocab` ? `Vedi i risultati` : a === `writing` ? `Vocabolario →` : `Next section →`,
          }),
        ],
      }),
    ],
  });
}
function di({ icon: e, title: t, score: n, total: r, children: i }) {
  let [a, o] = (0, S.useState)(!1),
    s = r > 0 ? n / r : null;
  return (0, w.jsxs)(`div`, {
    className: `de-rev-section`,
    children: [
      (0, w.jsxs)(`button`, {
        className: `de-rev-sec-head`,
        onClick: () => o((e) => !e),
        'aria-expanded': a,
        children: [
          (0, w.jsx)(`span`, { children: t }),
          (0, w.jsxs)(`span`, {
            className: `de-rev-sec-right`,
            children: [
              s !== null &&
                (0, w.jsxs)(`span`, {
                  className: `de-rev-sec-score`,
                  style: { color: s === null ? `#888` : s >= 0.75 ? `var(--ok)` : s >= 0.5 ? `#f0a500` : `var(--no)` },
                  children: [n, `/`, r],
                }),
              (0, w.jsx)(`span`, { className: `de-rev-sec-arrow`, 'aria-hidden': !0 }),
            ],
          }),
        ],
      }),
      a && (0, w.jsx)(`div`, { className: `de-rev-sec-body`, children: i }),
    ],
  });
}
function fi({ questions: e, answers: t }) {
  return (0, w.jsx)(`div`, {
    className: `de-qrev-list`,
    children: e.map((e, n) => {
      let r = t[n] === e.a;
      return (0, w.jsxs)(
        `div`,
        {
          className: `de-qrev-item` + (r ? ` ok` : ` wrong`),
          children: [
            (0, w.jsxs)(`div`, {
              className: `de-qrev-q`,
              children: [
                (0, w.jsx)(`span`, { className: `de-qrev-icon`, children: r ? `✓` : `✗` }),
                (0, w.jsxs)(`span`, { children: [n + 1, `. `, e.q] }),
              ],
            }),
            !r &&
              t[n] !== void 0 &&
              (0, w.jsxs)(`div`, {
                className: `de-qrev-your`,
                children: [`Your answer: `, (0, w.jsx)(`b`, { children: e.opts[t[n]] })],
              }),
            (0, w.jsxs)(`div`, {
              className: `de-qrev-correct`,
              children: [r ? `Correct: ` : `Right answer: `, (0, w.jsx)(`b`, { children: e.opts[e.a] })],
            }),
            e.exp && (0, w.jsx)(`div`, { className: `de-qrev-exp`, children: e.exp }),
          ],
        },
        n,
      );
    }),
  });
}
function pi({ cloze: e, answers: t }) {
  return (0, w.jsxs)(`div`, {
    children: [
      (0, w.jsx)(`div`, {
        className: `de-qrev-passage`,
        children: e.parts.map((n, r) =>
          (0, w.jsxs)(
            `span`,
            {
              children: [
                (0, w.jsx)(`span`, { style: { whiteSpace: `pre-wrap` }, children: n }),
                r < e.gaps.length &&
                  (0, w.jsxs)(`span`, {
                    className: `de-qrev-fill` + (t[r] === e.gaps[r].a ? ` ok` : ` wrong`),
                    children: [
                      t[r] === void 0 ? `—` : e.gaps[r].opts[t[r]],
                      t[r] !== e.gaps[r].a &&
                        (0, w.jsxs)(`span`, {
                          className: `de-qrev-fill-correct`,
                          children: [` → `, e.gaps[r].opts[e.gaps[r].a]],
                        }),
                    ],
                  }),
              ],
            },
            r,
          ),
        ),
      }),
      (0, w.jsx)(`div`, {
        className: `de-qrev-list`,
        style: { marginTop: 14 },
        children: e.gaps.map((e, n) => {
          let r = t[n] === e.a;
          return (0, w.jsxs)(
            `div`,
            {
              className: `de-qrev-item` + (r ? ` ok` : ` wrong`),
              children: [
                (0, w.jsxs)(`div`, {
                  className: `de-qrev-q`,
                  children: [
                    (0, w.jsx)(`span`, { className: `de-qrev-icon`, children: r ? `✓` : `✗` }),
                    (0, w.jsxs)(`span`, { children: [`Gap `, n + 1] }),
                  ],
                }),
                !r &&
                  t[n] !== void 0 &&
                  (0, w.jsxs)(`div`, {
                    className: `de-qrev-your`,
                    children: [`Your answer: `, (0, w.jsx)(`b`, { children: e.opts[t[n]] })],
                  }),
                (0, w.jsxs)(`div`, {
                  className: `de-qrev-correct`,
                  children: [r ? `Correct: ` : `Right answer: `, (0, w.jsx)(`b`, { children: e.opts[e.a] })],
                }),
                e.exp && (0, w.jsx)(`div`, { className: `de-qrev-exp`, children: e.exp }),
              ],
            },
            n,
          );
        }),
      }),
    ],
  });
}
function mi({ writing: e, wMark: t }) {
  let [n, r] = (0, S.useState)(!1);
  return (0, w.jsxs)(`div`, {
    className: `de-writing-review`,
    children: [
      (0, w.jsx)(`div`, { className: `de-wr-prompt`, children: e.prompt }),
      (0, w.jsxs)(`div`, {
        className: `de-wr-selfmark`,
        children: [
          `Your self-mark: `,
          (0, w.jsx)(`b`, { className: t, children: t === `good` ? `Bene` : t === `ok` ? `OK` : `Difficile` }),
        ],
      }),
      (0, w.jsx)(`button`, {
        className: `de-wr-model-btn`,
        onClick: () => r((e) => !e),
        'aria-expanded': n,
        children: n ? `Hide model answer` : `Show model answer & tips`,
      }),
      n &&
        (0, w.jsxs)(`div`, {
          className: `de-wr-model-body`,
          children: [
            (0, w.jsx)(`div`, { className: `de-wr-model-label`, children: `Risposta modello` }),
            (0, w.jsx)(`div`, { className: `de-wr-model-text`, children: e.model }),
            e.tips &&
              e.tips.length > 0 &&
              (0, w.jsxs)(w.Fragment, {
                children: [
                  (0, w.jsx)(`div`, {
                    className: `de-wr-model-label`,
                    style: { marginTop: 14 },
                    children: `Key tips`,
                  }),
                  (0, w.jsx)(`ul`, {
                    className: `de-wr-tips`,
                    children: e.tips.map((e, t) => (0, w.jsx)(`li`, { children: e }, t)),
                  }),
                ],
              }),
          ],
        }),
    ],
  });
}
function hi({ result: e, streak: t, onHome: n }) {
  let { score: r, total: i, lAns: a, rAns: o, cAns: s, vAns: c, wMark: l, exam: u, vocabWords: d, vScore: f } = e,
    p = Math.round((r / i) * 100),
    m = p >= 75,
    h = u.listening.questions.length,
    g = u.reading.questions.length,
    _ = u.cloze.gaps.length,
    v = u.listening.questions.filter((e, t) => a[t] === e.a).length,
    y = u.reading.questions.filter((e, t) => o[t] === e.a).length,
    b = u.cloze.gaps.filter((e, t) => s[t] === e.a).length;
  return (0, w.jsxs)(`div`, {
    className: `de-results`,
    children: [
      (0, w.jsxs)(`div`, {
        className: `de-score-header`,
        children: [
          (0, w.jsxs)(`div`, {
            className: `de-score-ring ` + (m ? `pass` : `fail`),
            children: [
              (0, w.jsxs)(`div`, { className: `de-score-big`, children: [Math.round(r), `/`, i] }),
              (0, w.jsxs)(`div`, { className: `de-score-pct`, children: [p, `%`] }),
            ],
          }),
          (0, w.jsxs)(`div`, {
            children: [
              (0, w.jsx)(`div`, {
                className: `de-verdict ` + (m ? `pass` : `fail`),
                children: m ? `Ottimo lavoro!` : `Continua così!`,
              }),
              (0, w.jsxs)(`div`, {
                className: `de-streak-chip`,
                children: [t.streak, ` day streak \xA0·\xA0 Level `, t.level],
              }),
              t.level === 1 &&
                (0, w.jsxs)(`div`, {
                  className: `de-level-prog`,
                  children: [t.qualDays, `/7 days to Level 2 `, m ? `(+1 oggi!)` : ``],
                }),
              t.level === 2 && (0, w.jsx)(`div`, { className: `de-level-prog`, children: `Pre-A2 Level Achieved` }),
            ],
          }),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `de-breakdown-card`,
        children: [
          (0, w.jsx)(`div`, { className: `de-break-title`, children: `Sezione per sezione` }),
          [
            { icon: `🔊`, label: `Ascolto`, s: v, t: h },
            { icon: `📖`, label: `Lettura`, s: y, t: g },
            { icon: `✏️`, label: `Cloze`, s: b, t: _ },
            {
              icon: `✍️`,
              label: `Scrittura`,
              s: l === `good` ? 1 : l === `ok` ? 0.5 : 0,
              t: 1,
              text: l === `good` ? `Bene` : l === `ok` ? `OK` : `Difficile`,
            },
            { icon: `🔤`, label: `Vocab`, s: f, t: d.length },
          ].map(({ icon: e, label: t, s: n, t: r, text: i }) =>
            (0, w.jsxs)(
              `div`,
              {
                className: `de-break-row`,
                children: [
                  (0, w.jsx)(`span`, { children: t }),
                  (0, w.jsx)(`div`, {
                    className: `de-break-bar-wrap`,
                    children: (0, w.jsx)(`div`, {
                      className: `de-break-bar`,
                      style: {
                        width: (n / r) * 100 + `%`,
                        background: n / r >= 0.75 ? `var(--ok)` : n / r >= 0.5 ? `#f0a500` : `var(--no)`,
                      },
                    }),
                  }),
                  (0, w.jsx)(`span`, { children: i || `${Math.round(n)}/${r}` }),
                ],
              },
              t,
            ),
          ),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `de-full-review`,
        children: [
          (0, w.jsx)(`div`, {
            className: `de-break-title`,
            style: { marginBottom: 10 },
            children: `Full Review — tap any section to expand`,
          }),
          (0, w.jsxs)(di, {
            icon: `🔊`,
            title: `Ascolto — ${u.listening.title}`,
            score: v,
            total: h,
            children: [
              (0, w.jsx)(`div`, { className: `de-qrev-passage`, children: u.listening.passage }),
              (0, w.jsx)(fi, { questions: u.listening.questions, answers: a }),
            ],
          }),
          (0, w.jsxs)(di, {
            icon: `📖`,
            title: `Lettura — ${u.reading.title}`,
            score: y,
            total: g,
            children: [
              (0, w.jsx)(`div`, { className: `de-qrev-passage`, children: u.reading.text }),
              (0, w.jsx)(fi, { questions: u.reading.questions, answers: o }),
            ],
          }),
          (0, w.jsx)(di, {
            icon: `✏️`,
            title: `Cloze — ${u.cloze.title}`,
            score: b,
            total: _,
            children: (0, w.jsx)(pi, { cloze: u.cloze, answers: s }),
          }),
          (0, w.jsx)(di, {
            icon: `✍️`,
            title: `Scrittura — Model answer & tips`,
            score: null,
            total: null,
            children: (0, w.jsx)(mi, { writing: u.writing, wMark: l }),
          }),
          (0, w.jsx)(di, {
            icon: `🔤`,
            title: `Vocabolario — Full review`,
            score: f,
            total: d.length,
            children: (0, w.jsx)(`div`, {
              className: `de-vocab-review-list`,
              children: d.map((e, t) => {
                let n = c[t] === e.a;
                return (0, w.jsxs)(
                  `div`,
                  {
                    className: `de-vocab-rev-row` + (n ? ` ok` : ` wrong`),
                    children: [
                      (0, w.jsx)(`div`, { className: `de-vocab-rev-it`, children: e.it }),
                      (0, w.jsxs)(`div`, {
                        className: `de-vocab-rev-en`,
                        children: [
                          n ? `✓` : `✗`,
                          ` `,
                          e.opts[e.a],
                          !n &&
                            c[t] !== void 0 &&
                            (0, w.jsxs)(`span`, {
                              className: `de-vocab-rev-user`,
                              children: [` (your answer: `, e.opts[c[t]], `)`],
                            }),
                        ],
                      }),
                    ],
                  },
                  t,
                );
              }),
            }),
          }),
        ],
      }),
      (0, w.jsx)(`button`, {
        className: `btn go`,
        style: { width: `100%` },
        onClick: n,
        children: `Torna alla home`,
      }),
    ],
  });
}
function gi({ history: e }) {
  let t = [];
  for (let n = 29; n >= 0; n--) {
    let r = new Date();
    r.setDate(r.getDate() - n);
    let i = r.toISOString().slice(0, 10);
    t.push({ key: i, label: r.getDate(), entry: e[i] });
  }
  return (0, w.jsx)(`div`, {
    className: `de-cal`,
    children: t.map(({ key: e, label: t, entry: n }) => {
      let r = e === Zr(),
        i = n ? Math.round((n.score / n.total) * 100) : null;
      return (0, w.jsxs)(
        `div`,
        {
          className: `de-cal-cell` + (r ? ` today` : ``),
          children: [
            (0, w.jsx)(`div`, {
              className: `de-cal-dot`,
              style: {
                background: n
                  ? i >= 75
                    ? `#1a6b45`
                    : i >= 50
                      ? `#f0a500`
                      : `#e74c3c`
                  : r
                    ? `var(--green-l)`
                    : `var(--line-l)`,
              },
            }),
            (0, w.jsx)(`div`, { className: `de-cal-d`, children: t }),
          ],
        },
        e,
      );
    }),
  });
}
function _i() {
  let [e, t] = (0, S.useState)(ri),
    [n, r] = (0, S.useState)(`home`),
    [i, a] = (0, S.useState)(null),
    o = qr(),
    s = !!e.history[Zr()],
    c = e.history[Zr()],
    l = () => {
      (M(), r(`exam`));
    },
    u = () => {
      let e = ni(o, Jr(o));
      e && (a(e), r(`results`));
    },
    d = (n) => {
      (M(), ti(Zr(), { lAns: n.lAns, rAns: n.rAns, cAns: n.cAns, vAns: n.vAns, wMark: n.wMark }));
      let i = Math.round((n.score / n.total) * 100);
      if (!e.history[Zr()]) {
        let r = new Date();
        r.setDate(r.getDate() - 1);
        let a = r.toISOString().slice(0, 10),
          o = e.lastDate === a || e.lastDate === Zr() ? (e.lastDate === Zr() ? e.streak : e.streak + 1) : 1,
          s = i >= 75 ? e.qualDays + 1 : e.qualDays,
          c = e.level === 1 && s >= 7,
          l = {
            streak: o,
            lastDate: Zr(),
            history: { ...e.history, [Zr()]: { score: n.score, total: n.total } },
            level: c ? 2 : e.level,
            qualDays: c ? 0 : s,
          };
        ($r(l), t(l));
      }
      (a(n), r(`results`));
    };
  if (n === `exam`)
    return (0, w.jsxs)(`section`, {
      className: `card`,
      children: [
        (0, w.jsx)(`h2`, { className: `sec-h`, children: `Esame di oggi` }),
        (0, w.jsx)(ui, { exam: o, onFinish: d }),
      ],
    });
  if (n === `results`)
    return (0, w.jsxs)(`section`, {
      className: `card`,
      children: [
        (0, w.jsx)(`h2`, { className: `sec-h`, children: `Risultati` }),
        (0, w.jsx)(hi, { result: i, streak: e, onHome: () => r(`home`) }),
      ],
    });
  let f = 13 + o.listening.vocab.length + o.reading.vocab.length + o.cloze.vocab.length;
  return (0, w.jsxs)(`section`, {
    className: `card`,
    children: [
      (0, w.jsx)(`h2`, { className: `sec-h`, children: `Esame Quotidiano` }),
      (0, w.jsxs)(`p`, {
        className: `instr`,
        children: [
          `Un mini-esame di `,
          (0, w.jsx)(`b`, { children: `15 minuti` }),
          ` ogni giorno — ascolto, lettura, cloze e produzione scritta — allineato al programma CILS A2 Integrazione. Le domande cambiano ogni giorno.`,
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `de-banner` + (e.streak >= 7 ? ` fire` : ``),
        children: [
          (0, w.jsxs)(`div`, {
            className: `de-banner-text`,
            children: [
              (0, w.jsxs)(`div`, {
                className: `de-banner-num`,
                children: [e.streak, ` `, e.streak === 1 ? `giorno` : `giorni`, ` di fila`],
              }),
              (0, w.jsx)(`div`, {
                className: `de-banner-sub`,
                children: e.streak === 0 ? `Inizia oggi il tuo percorso!` : `Continua così — non fermarti!`,
              }),
            ],
          }),
          (0, w.jsxs)(`div`, { className: `de-banner-level`, children: [`Livello `, e.level] }),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `de-lev-wrap`,
        children: [
          (0, w.jsx)(`div`, {
            className: `de-lev-label`,
            children:
              e.level === 1
                ? `Livello 2 sbloccato dopo 7 giorni con ≥75% · Progresso: ${e.qualDays}/7`
                : `Livello 2 — Pre-A2 sbloccato!`,
          }),
          (0, w.jsx)(`div`, {
            className: `de-lev-bar`,
            children: (0, w.jsx)(`div`, {
              className: `de-lev-fill`,
              style: { width: e.level === 1 ? (e.qualDays / 7) * 100 + `%` : `100%` },
            }),
          }),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `de-cal-wrap`,
        children: [
          (0, w.jsx)(`div`, { className: `de-cal-title`, children: `Ultimi 30 giorni` }),
          (0, w.jsx)(gi, { history: e.history }),
          (0, w.jsxs)(`div`, {
            className: `de-cal-key`,
            children: [
              (0, w.jsx)(`span`, { className: `de-dot g` }),
              `≥75% \xA0`,
              (0, w.jsx)(`span`, { className: `de-dot o` }),
              `50–74% \xA0`,
              (0, w.jsx)(`span`, { className: `de-dot r` }),
              `<`,
              `50%`,
            ],
          }),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `de-today` + (s ? ` done` : ``),
        children: [
          (0, w.jsxs)(`div`, {
            className: `de-today-left`,
            children: [
              (0, w.jsx)(`div`, { className: `de-today-tag`, children: s ? `Completato oggi` : `Esame di oggi` }),
              (0, w.jsxs)(`div`, {
                className: `de-today-topics`,
                children: [
                  (0, w.jsx)(`span`, { children: o.listening.title }),
                  (0, w.jsx)(`span`, { children: o.reading.title }),
                  (0, w.jsx)(`span`, { children: o.cloze.title }),
                ],
              }),
              (0, w.jsxs)(`div`, {
                className: `de-today-meta`,
                children: [`Livello `, e.level, ` · 15 minuti · `, f, ` domande`],
              }),
              s &&
                c &&
                (0, w.jsxs)(`div`, {
                  className: `de-today-score`,
                  children: [
                    `Score: `,
                    Math.round(c.score),
                    `/`,
                    c.total,
                    ` (`,
                    Math.round((c.score / c.total) * 100),
                    `%)`,
                  ],
                }),
            ],
          }),
          (0, w.jsxs)(`div`, {
            className: `de-today-btns`,
            children: [
              s &&
                (ei()
                  ? (0, w.jsx)(`button`, { className: `btn de-start go`, onClick: u, children: `Vedi risultati` })
                  : (0, w.jsx)(`span`, {
                      className: `de-no-result-tip`,
                      children: `Rifai l'esame per sbloccare la revisione completa`,
                    })),
              (0, w.jsx)(`button`, {
                className: `btn de-start ` + (s ? `ghost` : `go`),
                onClick: l,
                children: s ? `Rifai` : `Inizia`,
              }),
            ],
          }),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `de-how`,
        children: [
          (0, w.jsx)(`div`, { className: `de-how-title`, children: `Come funziona` }),
          (0, w.jsxs)(`div`, {
            className: `de-how-grid`,
            children: [
              (0, w.jsxs)(`div`, {
                className: `de-how-item`,
                children: [
                  (0, w.jsxs)(`div`, {
                    children: [
                      (0, w.jsx)(`b`, { children: `Ascolto` }),
                      ` (4 min) — un testo letto ad alta voce, 4 domande a scelta multipla`,
                    ],
                  }),
                ],
              }),
              (0, w.jsxs)(`div`, {
                className: `de-how-item`,
                children: [
                  (0, w.jsxs)(`div`, {
                    children: [
                      (0, w.jsx)(`b`, { children: `Lettura` }),
                      ` (5 min) — un testo autentico (avviso, lettera, annuncio), 4 domande`,
                    ],
                  }),
                ],
              }),
              (0, w.jsxs)(`div`, {
                className: `de-how-item`,
                children: [
                  (0, w.jsxs)(`div`, {
                    children: [
                      (0, w.jsx)(`b`, { children: `Cloze` }),
                      ` (4 min) — un testo con 4 spazi vuoti da completare`,
                    ],
                  }),
                ],
              }),
              (0, w.jsxs)(`div`, {
                className: `de-how-item`,
                children: [
                  (0, w.jsxs)(`div`, {
                    children: [
                      (0, w.jsx)(`b`, { children: `Scrittura` }),
                      ` (2 min) — produci un breve testo, valutazione personale`,
                    ],
                  }),
                ],
              }),
              (0, w.jsxs)(`div`, {
                className: `de-how-item`,
                children: [
                  (0, w.jsxs)(`div`, {
                    children: [
                      (0, w.jsx)(`b`, { children: `Vocabolario` }),
                      ` (2 min) — 8 parole chiave dall'esame di oggi: scegli il significato corretto in inglese`,
                    ],
                  }),
                ],
              }),
              (0, w.jsxs)(`div`, {
                className: `de-how-item`,
                children: [
                  (0, w.jsx)(`div`, {
                    children: `Fai l\\'esame ogni giorno per mantenere la serie. Le domande cambiano ogni giorno.`,
                  }),
                ],
              }),
              (0, w.jsxs)(`div`, {
                className: `de-how-item`,
                children: [
                  (0, w.jsx)(`div`, {
                    children: `Ottieni ≥75% per 7 giorni consecutivi per sbloccare il Livello 2 Pre-A2.`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var vi = writingTasksData;
function yi(e) {
  return e
    .replace(/…/g, ``)
    .replace(/\.\.\./g, ``)
    .trim()
    .toLowerCase();
}
function bi(e, t) {
  let n = yi(e);
  if (!n) return !1;
  let r = n.split(/\s+/).filter(Boolean),
    i = r.slice(0, Math.min(r.length, 2)).join(` `);
  return t.toLowerCase().includes(i);
}
function xi(e, t) {
  let n = e.trim() ? e.trim().split(/\s+/).length : 0,
    [r, i] = t.wordTarget,
    a = 0;
  n >= r && n <= i ? (a = 3) : n >= r * 0.8 && n <= i * 1.2 ? (a = 2) : n >= r * 0.5 && (a = 1);
  let o = t.keyPhrases.map((t) => ({ phrase: t, found: bi(t, e) })),
    s = o.filter((e) => e.found).length,
    c = o.length,
    l = c > 0 ? Math.round((s / c) * 5) : 0,
    u = n >= 10 ? (n >= r * 0.7 ? 2 : 1) : 0,
    d = a + l + u,
    f = (d / 10) * 100,
    p,
    m,
    h;
  f >= 85
    ? ((p = `Eccellente`), (m = `Excellent`), (h = `#1E6B4F`))
    : f >= 70
      ? ((p = `Buono`), (m = `Good`), (h = `#2E7D8A`))
      : f >= 50
        ? ((p = `Sufficiente`), (m = `Fair`), (h = `#C99A2E`))
        : ((p = `Da rivedere`), (m = `Needs work`), (h = `#A8434B`));
  let g = [];
  n === 0
    ? g.push({ type: `error`, text: `You haven't written anything yet.` })
    : n < r
      ? g.push({ type: `warn`, text: `Your answer is too short (${n} words). Aim for at least ${r} words.` })
      : n > i
        ? g.push({ type: `warn`, text: `Your answer is a bit long (${n} words). Try to stay within ${i} words.` })
        : g.push({ type: `ok`, text: `Good length — ${n} words, right in the target range.` });
  let _ = o.filter((e) => !e.found),
    v = o.filter((e) => e.found);
  return (
    v.length > 0 && g.push({ type: `ok`, text: `You used ${v.length} of ${c} key phrase${c > 1 ? `s` : ``}.` }),
    _.length > 0 && g.push({ type: `tip`, text: `Try to include: ${_.map((e) => e.phrase).join(` · `)}` }),
    f >= 85
      ? g.push({ type: `ok`, text: `Great job! Your response covers the task well.` })
      : f >= 70
        ? g.push({ type: `tip`, text: `Almost there — focus on the missing key phrases to push your score higher.` })
        : f >= 50
          ? g.push({ type: `tip`, text: `Decent start. Check the model answer to see which phrases to practise.` })
          : n > 0 &&
            g.push({
              type: `tip`,
              text: `Keep practising this prompt — read the model answer carefully and try again.`,
            }),
    {
      totalScore: d,
      wordScore: a,
      phraseScore: l,
      attemptScore: u,
      grade: p,
      gradeIt: m,
      colour: h,
      pct: f,
      wordCount: n,
      phraseResults: o,
      feedback: g,
    }
  );
}
var Si = `wp_progress`;
function Ci(e, t, n, r = ``) {
  let i = Ti();
  (i[e] || (i[e] = []),
    i[e].push({ score: t, grade: n, text: r, ts: Date.now() }),
    i[e].length > 10 && (i[e] = i[e].slice(-10)),
    localStorage.setItem(Si, JSON.stringify(i)));
}
function wi(e) {
  return Ti()[e] || [];
}
function Ti() {
  try {
    return JSON.parse(localStorage.getItem(Si) || `{}`);
  } catch {
    return {};
  }
}
function Ei(e) {
  let t = Ti()[e] || [];
  return t.length ? Math.max(...t.map((e) => e.score)) : null;
}
function Di(e) {
  return (Ti()[e] || []).length;
}
function Oi() {
  let e = Ti();
  return Object.entries(e).map(([e, t]) => ({
    id: e,
    attempts: t.length,
    best: Math.max(...t.map((e) => e.score)),
    last: t[t.length - 1],
    history: t,
  }));
}
var ki = ``;
function Ai() {
  return !!ki;
}
async function ji(e, t) {
  return { error: `no-key` };
}
async function Mi(e, t, n, r = ``) {
  return { error: `no-key` };
}
async function Ni(e, t) {
  return { error: `no-key` };
}
var Pi = { message: `Messaggio`, reply: `Risposta`, form: `Modulo`, email: `Email`, describe: `Descrizione` },
  Fi = { 1: `Facile`, 2: `A2 Core`, 3: `Avanzato` },
  Ii = { 1: `#2E7D8A`, 2: `#1E6B4F`, 3: `#A8434B` },
  Li = {
    adeguatezza: `Adeguatezza al compito`,
    grammatica: `Grammatica`,
    lessico: `Lessico`,
    ortografia: `Ortografia`,
  },
  Ri = {
    promosso: { label: `✓ Promosso`, colour: `#1E6B4F`, bg: `#eaf2ec` },
    borderline: { label: `△ Al limite`, colour: `#977318`, bg: `#fbf5e0` },
    'non promosso': { label: `✗ Non promosso`, colour: `#A8434B`, bg: `#fbecec` },
  };
function P(e) {
  return e >= 9
    ? { grade: `Eccellente`, en: `Excellent`, colour: `#1E6B4F` }
    : e >= 7
      ? { grade: `Buono`, en: `Good`, colour: `#2E7D8A` }
      : e >= 6
        ? { grade: `Sufficiente`, en: `Pass`, colour: `#C99A2E` }
        : { grade: `Insufficiente`, en: `Not yet passing`, colour: `#A8434B` };
}
function F(e) {
  return e.trim() ? e.trim().split(/\s+/).length : 0;
}
function zi({ n: e }) {
  return (0, w.jsx)(`span`, {
    className: `es-dots`,
    children: [1, 2, 3, 4, 5].map((t) => (0, w.jsx)(`span`, { className: `es-dot` + (t <= e ? ` full` : ``) }, t)),
  });
}
function Bi({ count: e, target: t }) {
  let [n, r] = t,
    i = Math.min((e / r) * 100, 100),
    a = e >= n && e <= r,
    o = e < n;
  return (0, w.jsxs)(`div`, {
    className: `wp-meter`,
    children: [
      (0, w.jsx)(`div`, {
        className: `wp-meter-bar`,
        children: (0, w.jsx)(`div`, {
          className: `wp-meter-fill`,
          style: { width: i + `%`, background: a ? `var(--green)` : o ? `#ccc` : `var(--wine)` },
        }),
      }),
      (0, w.jsxs)(`span`, {
        className: `wp-meter-label`,
        style: { color: a ? `var(--green)` : `#888` },
        children: [e, ` / `, n, `–`, r, ` parole `, a && `✓`],
      }),
    ],
  });
}
function Vi({ score: e, colour: t }) {
  let n = 2 * Math.PI * 36,
    r = (e / 10) * n;
  return (0, w.jsx)(`div`, {
    className: `wp-score-ring-wrap`,
    children: (0, w.jsxs)(`svg`, {
      width: `96`,
      height: `96`,
      viewBox: `0 0 96 96`,
      children: [
        (0, w.jsx)(`circle`, { cx: `48`, cy: `48`, r: 36, fill: `none`, stroke: `#e8e8e0`, strokeWidth: `7` }),
        (0, w.jsx)(`circle`, {
          cx: `48`,
          cy: `48`,
          r: 36,
          fill: `none`,
          stroke: t,
          strokeWidth: `7`,
          strokeDasharray: `${r} ${n}`,
          strokeLinecap: `round`,
          transform: `rotate(-90 48 48)`,
        }),
        (0, w.jsx)(`text`, {
          x: `48`,
          y: `44`,
          textAnchor: `middle`,
          dominantBaseline: `middle`,
          style: { font: `700 22px var(--font-display)`, fill: t },
          children: e,
        }),
        (0, w.jsx)(`text`, {
          x: `48`,
          y: `62`,
          textAnchor: `middle`,
          style: { font: `500 11px var(--font-ui)`, fill: `#aaa` },
          children: `/ 10`,
        }),
      ],
    }),
  });
}
function Hi({ type: e }) {
  return e === `ok`
    ? (0, w.jsx)(`span`, { className: `wp-fb-icon ok`, children: `✓` })
    : e === `warn`
      ? (0, w.jsx)(`span`, { className: `wp-fb-icon warn`, children: `!` })
      : e === `error`
        ? (0, w.jsx)(`span`, { className: `wp-fb-icon error`, children: `✗` })
        : (0, w.jsx)(`span`, { className: `wp-fb-icon tip`, children: `→` });
}
function Ui({ promptId: e }) {
  let t = Ei(e),
    n = Di(e);
  if (t === null) return null;
  let r = t >= 8 ? `#1E6B4F` : t >= 6 ? `#2E7D8A` : t >= 5 ? `#C99A2E` : `#A8434B`;
  return (0, w.jsxs)(`div`, {
    className: `wp-card-progress`,
    children: [
      (0, w.jsx)(`div`, {
        className: `wp-card-prog-bar`,
        children: (0, w.jsx)(`div`, { style: { width: (t / 10) * 100 + `%`, background: r } }),
      }),
      (0, w.jsxs)(`span`, { style: { color: r }, children: [`Best `, t, `/10 · `, n, ` attempt`, n > 1 ? `s` : ``] }),
    ],
  });
}
function Wi({ onClose: e }) {
  let t = Oi();
  if (!t.length)
    return (0, w.jsxs)(`div`, {
      className: `wp-progress-panel`,
      children: [
        (0, w.jsx)(`button`, { className: `btn ghost sm`, onClick: e, children: `← Back` }),
        (0, w.jsx)(`p`, {
          className: `wp-progress-empty`,
          children: `No attempts yet — complete a writing task to see your progress here.`,
        }),
      ],
    });
  let n = Math.round((t.reduce((e, t) => e + t.best, 0) / t.length) * 10) / 10,
    r = t.reduce((e, t) => e + t.attempts, 0);
  return (0, w.jsxs)(`div`, {
    className: `wp-progress-panel`,
    children: [
      (0, w.jsx)(`button`, { className: `btn ghost sm`, onClick: e, children: `← Back` }),
      (0, w.jsx)(`h2`, { className: `wp-heading`, style: { marginBottom: 4 }, children: `Il tuo progresso` }),
      (0, w.jsx)(`p`, { className: `wp-subheading`, children: `Writing Practice · All attempts` }),
      (0, w.jsxs)(`div`, {
        className: `wp-progress-stats`,
        children: [
          (0, w.jsxs)(`div`, {
            className: `wp-stat`,
            children: [(0, w.jsx)(`span`, { children: t.length }), `Tasks tried`],
          }),
          (0, w.jsxs)(`div`, {
            className: `wp-stat`,
            children: [(0, w.jsx)(`span`, { children: r }), `Total attempts`],
          }),
          (0, w.jsxs)(`div`, {
            className: `wp-stat`,
            children: [(0, w.jsxs)(`span`, { children: [n, `/10`] }), `Avg best score`],
          }),
        ],
      }),
      (0, w.jsx)(`div`, {
        className: `wp-progress-list`,
        children: t.map((e) => {
          let t = vi.find((t) => t.id === e.id);
          if (!t) return null;
          let n = e.best >= 8 ? `#1E6B4F` : e.best >= 6 ? `#2E7D8A` : e.best >= 5 ? `#C99A2E` : `#A8434B`;
          return (0, w.jsxs)(
            `div`,
            {
              className: `wp-progress-row`,
              children: [
                (0, w.jsxs)(`div`, {
                  className: `wp-progress-row-info`,
                  children: [
                    (0, w.jsx)(`div`, { className: `wp-progress-row-title`, children: t.title }),
                    (0, w.jsxs)(`div`, {
                      className: `wp-progress-row-meta`,
                      children: [Fi[t.level], ` · `, e.attempts, ` attempt`, e.attempts > 1 ? `s` : ``],
                    }),
                  ],
                }),
                (0, w.jsxs)(`div`, {
                  className: `wp-progress-row-bar-wrap`,
                  children: [
                    (0, w.jsx)(`div`, {
                      className: `wp-progress-row-bar`,
                      children: (0, w.jsx)(`div`, { style: { width: (e.best / 10) * 100 + `%`, background: n } }),
                    }),
                    (0, w.jsxs)(`span`, {
                      style: { color: n, fontWeight: 700, fontSize: 13 },
                      children: [e.best, `/10`],
                    }),
                  ],
                }),
                (0, w.jsx)(`div`, {
                  className: `wp-trend`,
                  children: e.history
                    .slice(-5)
                    .map((e, t) =>
                      (0, w.jsx)(
                        `div`,
                        {
                          className: `wp-trend-dot`,
                          title: `Score: ${e.score}`,
                          style: {
                            background: e.score >= 8 ? `#1E6B4F` : e.score >= 5 ? `#C99A2E` : `#A8434B`,
                            height: (e.score / 10) * 24 + 4 + `px`,
                          },
                        },
                        t,
                      ),
                    ),
                }),
              ],
            },
            e.id,
          );
        }),
      }),
    ],
  });
}
function Gi({ prompt: e, onBack: t }) {
  let [n, r] = N(`wp_draft_${e.id}`, ``),
    [i, a] = (0, S.useState)(null),
    [o, s] = (0, S.useState)(null),
    [c, l] = (0, S.useState)(!1),
    [u, d] = (0, S.useState)(null),
    [f, p] = (0, S.useState)(!1),
    m = F(n),
    h = Ai(),
    g = async () => {
      if (h) {
        (l(!0), d(null), s(null), a(null));
        let t = await ji(n, e);
        if ((l(!1), t.error)) {
          d(t.error);
          return;
        }
        (s(t),
          t.cilsScore != null &&
            (Ci(e.id, t.cilsScore, P(t.cilsScore).grade, n),
            At({
              section: `scrittura`,
              taskId: e.id,
              score: t.cilsScore,
              pass: t.esito ? t.esito === `promosso` : t.cilsScore >= 6,
            }),
            r(``)));
      } else {
        let t = xi(n, e);
        (a(t),
          Ci(e.id, t.totalScore, t.grade, n),
          At({ section: `scrittura`, taskId: e.id, score: t.totalScore }),
          r(``));
      }
    },
    _ = () => p(!0),
    v = () => {
      (r(``), a(null), s(null), d(null), p(!1));
    };
  return (0, w.jsxs)(`div`, {
    className: `wp-prompt-card`,
    children: [
      (0, w.jsxs)(`button`, {
        className: `btn ghost sm wp-back`,
        onClick: t,
        children: [
          (0, w.jsxs)(`svg`, {
            width: `15`,
            height: `15`,
            viewBox: `0 0 24 24`,
            fill: `none`,
            stroke: `currentColor`,
            strokeWidth: `1.8`,
            children: [
              (0, w.jsx)(`line`, { x1: `19`, y1: `12`, x2: `5`, y2: `12` }),
              (0, w.jsx)(`polyline`, { points: `12 19 5 12 12 5` }),
            ],
          }),
          `Torna ai temi`,
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `wp-type-pill`,
        style: { background: Ii[e.level] },
        children: [Pi[e.type], ` · Livello `, e.level],
      }),
      (0, w.jsx)(`h2`, { className: `wp-title`, children: e.title }),
      (0, w.jsx)(`p`, { className: `wp-topic-tag`, children: e.topic }),
      (0, w.jsxs)(`div`, {
        className: `wp-task-box`,
        children: [
          (0, w.jsx)(`div`, { className: `wp-task-label`, children: `Compito` }),
          (0, w.jsx)(`p`, { className: `wp-task-text`, children: e.prompt }),
          (0, w.jsxs)(`div`, {
            className: `wp-hint`,
            children: [
              (0, w.jsx)(`span`, { className: `wp-hint-icon`, children: `💡` }),
              (0, w.jsx)(`span`, { children: e.hint }),
            ],
          }),
          (0, w.jsxs)(`div`, {
            className: `wp-target-note`,
            children: [`Obiettivo: `, e.wordTarget[0], `–`, e.wordTarget[1], ` parole`],
          }),
        ],
      }),
      (0, w.jsx)(`textarea`, {
        className: `wp-textarea`,
        placeholder: `Scrivi qui la tua risposta in italiano…`,
        value: n,
        onChange: (e) => {
          (r(e.target.value), a(null), s(null), d(null));
        },
        rows: 8,
      }),
      (0, w.jsx)(Bi, { count: m, target: e.wordTarget }),
      !i &&
        !o &&
        !c &&
        (0, w.jsxs)(`div`, {
          className: `wp-actions`,
          children: [
            (0, w.jsx)(`button`, {
              className: `btn primary`,
              onClick: g,
              disabled: m < 3,
              children: `Valuta la mia risposta →`,
            }),
            h &&
              (0, w.jsx)(`span`, {
                className: `wp-eval-note`,
                children: `Valutazione severa, come un esaminatore CILS reale`,
              }),
          ],
        }),
      c &&
        (0, w.jsxs)(`div`, {
          className: `wp-ai-loading`,
          children: [
            (0, w.jsx)(`div`, { className: `wp-ai-spinner` }),
            (0, w.jsx)(`span`, { children: `L'esaminatore sta correggendo la tua risposta…` }),
          ],
        }),
      u &&
        (0, w.jsxs)(`div`, {
          className: `wp-ai-error`,
          children: [
            u === `rate-limit`
              ? `Troppe richieste — riprova tra qualche secondo.`
              : u === `network`
                ? `Errore di rete — controlla la connessione e riprova.`
                : `Il servizio di valutazione non è al momento disponibile.`,
            (0, w.jsx)(`button`, { className: `btn ghost sm`, onClick: () => d(null), children: `OK` }),
          ],
        }),
      o &&
        (() => {
          let e = P(o.cilsScore ?? 0),
            t = Ri[o.esito] || null;
          return (0, w.jsxs)(`div`, {
            className: `wp-eval`,
            children: [
              (0, w.jsxs)(`div`, {
                className: `wp-eval-header`,
                children: [
                  (0, w.jsx)(Vi, { score: o.cilsScore ?? 0, colour: e.colour }),
                  (0, w.jsxs)(`div`, {
                    className: `wp-eval-grade`,
                    children: [
                      (0, w.jsx)(`div`, {
                        className: `wp-eval-grade-it`,
                        style: { color: e.colour },
                        children: e.grade,
                      }),
                      (0, w.jsx)(`div`, { className: `wp-eval-grade-en`, children: e.en }),
                      t &&
                        (0, w.jsx)(`span`, {
                          className: `wp-esito`,
                          style: { color: t.colour, background: t.bg },
                          children: t.label,
                        }),
                    ],
                  }),
                ],
              }),
              o.verdict && (0, w.jsx)(`div`, { className: `wp-verdict`, children: o.verdict }),
              (0, w.jsx)(`div`, {
                className: `wp-crit`,
                children: Object.entries(Li).map(
                  ([e, t]) =>
                    o.scores?.[e] != null &&
                    (0, w.jsxs)(
                      `div`,
                      {
                        className: `wp-crit-row`,
                        children: [
                          (0, w.jsx)(`span`, { className: `wp-crit-label`, children: t }),
                          (0, w.jsx)(zi, { n: o.scores[e] }),
                        ],
                      },
                      e,
                    ),
                ),
              }),
              o.corrected &&
                (0, w.jsxs)(`div`, {
                  className: `wp-corrected`,
                  children: [
                    (0, w.jsx)(`div`, { className: `wp-corrected-label`, children: `Versione corretta` }),
                    (0, w.jsx)(`p`, { className: `wp-corrected-text`, children: o.corrected }),
                  ],
                }),
              o.sentences?.length > 0 &&
                (0, w.jsxs)(`div`, {
                  className: `wp-sent-block`,
                  children: [
                    (0, w.jsx)(`div`, { className: `wp-sent-block-label`, children: `Frase per frase` }),
                    o.sentences.map((e, t) => {
                      let n = e.rating || (e.mistakes?.length ? `error` : `good`),
                        r = n === `good` ? `✓ Bene` : n === `weak` ? `△ Debole` : `✗ Errore`;
                      return (0, w.jsxs)(
                        `div`,
                        {
                          className: `wp-sent r-` + n,
                          children: [
                            (0, w.jsx)(`div`, {
                              className: `wp-sent-head`,
                              children: (0, w.jsx)(`span`, { className: `wp-sent-badge ` + n, children: r }),
                            }),
                            (0, w.jsx)(`div`, { className: `wp-sent-orig`, children: e.original }),
                            e.corrected &&
                              e.corrected !== e.original &&
                              (0, w.jsxs)(`div`, { className: `wp-sent-fixed`, children: [`→ `, e.corrected] }),
                            e.mistakes?.length > 0 &&
                              (0, w.jsx)(`ul`, {
                                className: `wp-sent-mistakes`,
                                children: e.mistakes.map((e, t) => (0, w.jsx)(`li`, { children: e }, t)),
                              }),
                          ],
                        },
                        t,
                      );
                    }),
                  ],
                }),
              o.strengths?.length > 0 &&
                (0, w.jsxs)(`div`, {
                  className: `wp-ai-strengths`,
                  children: [
                    (0, w.jsx)(`div`, { className: `wp-ai-strengths-label`, children: `Punti di forza` }),
                    (0, w.jsx)(`div`, {
                      className: `wp-ai-strengths-chips`,
                      children: o.strengths.map((e, t) =>
                        (0, w.jsxs)(`span`, { className: `wp-ai-strength-chip`, children: [`✓ `, e] }, t),
                      ),
                    }),
                  ],
                }),
              o.tip &&
                (0, w.jsxs)(`div`, {
                  className: `wp-tip`,
                  children: [(0, w.jsx)(`b`, { children: `Da migliorare:` }), ` `, o.tip],
                }),
              o.overall &&
                (0, w.jsxs)(`div`, {
                  className: `wp-overall`,
                  children: [
                    (0, w.jsx)(`div`, { className: `wp-overall-label`, children: `Come potresti esprimerlo` }),
                    (0, w.jsx)(`p`, { className: `wp-overall-text`, children: o.overall }),
                  ],
                }),
              (0, w.jsxs)(`div`, {
                className: `wp-eval-actions`,
                children: [
                  (0, w.jsx)(`button`, { className: `btn ghost sm`, onClick: v, children: `Riprova` }),
                  (0, w.jsx)(`button`, {
                    className: `btn primary`,
                    onClick: _,
                    disabled: f,
                    children: f ? `Risposta modello mostrata` : `Mostra risposta modello`,
                  }),
                ],
              }),
            ],
          });
        })(),
      i &&
        (0, w.jsxs)(`div`, {
          className: `wp-eval`,
          children: [
            (0, w.jsxs)(`div`, {
              className: `wp-eval-header`,
              children: [
                (0, w.jsx)(Vi, { score: i.totalScore, colour: i.colour }),
                (0, w.jsxs)(`div`, {
                  className: `wp-eval-grade`,
                  children: [
                    (0, w.jsx)(`div`, { className: `wp-eval-grade-it`, style: { color: i.colour }, children: i.grade }),
                    (0, w.jsx)(`div`, { className: `wp-eval-grade-en`, children: i.gradeIt }),
                    (0, w.jsxs)(`div`, {
                      className: `wp-eval-sub-scores`,
                      children: [
                        (0, w.jsxs)(`span`, { children: [`Lunghezza `, i.wordScore, `/3`] }),
                        (0, w.jsxs)(`span`, { children: [`Frasi chiave `, i.phraseScore, `/5`] }),
                        (0, w.jsxs)(`span`, { children: [`Tentativo `, i.attemptScore, `/2`] }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, w.jsx)(`div`, {
              className: `wp-feedback`,
              children: i.feedback.map((e, t) =>
                (0, w.jsxs)(
                  `div`,
                  {
                    className: `wp-fb-row ${e.type}`,
                    children: [(0, w.jsx)(Hi, { type: e.type }), (0, w.jsx)(`span`, { children: e.text })],
                  },
                  t,
                ),
              ),
            }),
            (0, w.jsxs)(`div`, {
              className: `wp-phrase-check`,
              children: [
                (0, w.jsx)(`div`, { className: `wp-phrase-check-label`, children: `Frasi chiave` }),
                (0, w.jsx)(`div`, {
                  className: `wp-phrase-chips`,
                  children: i.phraseResults.map((e, t) =>
                    (0, w.jsxs)(
                      `span`,
                      {
                        className: `wp-phrase-chip ${e.found ? `found` : `missed`}`,
                        children: [e.found ? `✓` : `○`, ` `, e.phrase],
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
            (0, w.jsxs)(`div`, {
              className: `wp-eval-actions`,
              children: [
                (0, w.jsx)(`button`, { className: `btn ghost sm`, onClick: v, children: `Riprova` }),
                (0, w.jsx)(`button`, {
                  className: `btn primary`,
                  onClick: _,
                  disabled: f,
                  children: f ? `Risposta modello mostrata` : `Mostra risposta modello`,
                }),
              ],
            }),
          ],
        }),
      f &&
        (0, w.jsxs)(`div`, {
          className: `wp-model`,
          children: [
            (0, w.jsxs)(`div`, {
              className: `wp-model-header`,
              children: [
                (0, w.jsx)(`span`, { children: `Risposta modello` }),
                (0, w.jsxs)(`span`, { className: `wp-model-wc`, children: [F(e.model), ` parole`] }),
              ],
            }),
            (0, w.jsx)(`pre`, { className: `wp-model-text`, children: e.model }),
            (0, w.jsxs)(`div`, {
              className: `wp-model-key`,
              children: [
                (0, w.jsx)(`span`, { className: `wp-key-label`, children: `Frasi chiave nel modello` }),
                (0, w.jsx)(`div`, {
                  className: `wp-key-chips`,
                  children: e.keyPhrases.map((e, t) =>
                    (0, w.jsx)(`span`, { className: `wp-key-chip`, children: e }, t),
                  ),
                }),
              ],
            }),
          ],
        }),
      (() => {
        let t = wi(e.id).slice().reverse();
        if (!t.length) return null;
        let n = Math.max(...t.map((e) => e.score));
        return (0, w.jsxs)(`details`, {
          className: `wp-versions`,
          children: [
            (0, w.jsxs)(`summary`, {
              className: `wp-versions-summary`,
              children: [
                `📁 Hai già provato questo compito — `,
                t.length,
                ` tentativ`,
                t.length > 1 ? `i` : `o`,
                ` · migliore `,
                (0, w.jsxs)(`b`, { children: [n, `/10`] }),
              ],
            }),
            (0, w.jsx)(`div`, {
              className: `wp-versions-list`,
              children: t.map((e, n) =>
                (0, w.jsxs)(
                  `details`,
                  {
                    className: `wp-version`,
                    children: [
                      (0, w.jsxs)(`summary`, {
                        className: `wp-version-head`,
                        children: [
                          (0, w.jsxs)(`span`, { className: `wp-version-n`, children: [`Tentativo `, t.length - n] }),
                          (0, w.jsx)(`span`, {
                            className: `wp-version-date`,
                            children: new Date(e.ts).toLocaleDateString(`it-IT`, { day: `numeric`, month: `short` }),
                          }),
                          (0, w.jsxs)(`span`, {
                            className: `wp-version-score`,
                            style: {
                              color:
                                e.score >= 8
                                  ? `#1E6B4F`
                                  : e.score >= 6
                                    ? `#2E7D8A`
                                    : e.score >= 5
                                      ? `#C99A2E`
                                      : `#A8434B`,
                            },
                            children: [e.score, `/10 · `, e.grade],
                          }),
                        ],
                      }),
                      e.text
                        ? (0, w.jsxs)(w.Fragment, {
                            children: [
                              (0, w.jsx)(`p`, { className: `wp-version-text`, children: e.text }),
                              (0, w.jsx)(`button`, {
                                className: `btn ghost sm`,
                                onClick: () => {
                                  (r(e.text), a(null), s(null));
                                },
                                children: `↩︎ Riporta nel riquadro`,
                              }),
                            ],
                          })
                        : (0, w.jsx)(`p`, {
                            className: `wp-version-text wp-version-none`,
                            children: `Testo non salvato (tentativo fatto prima di questa funzione) — il punteggio conta comunque.`,
                          }),
                    ],
                  },
                  e.ts,
                ),
              ),
            }),
          ],
        });
      })(),
    ],
  });
}
function Ki() {
  let [e, t] = (0, S.useState)(null),
    [n, r] = (0, S.useState)(null),
    [i, a] = (0, S.useState)(!1),
    o = (0, S.useMemo)(() => (e ? vi.filter((t) => t.level === e) : vi), [e]),
    s = vi.find((e) => e.id === n);
  return s
    ? (0, w.jsx)(Gi, { prompt: s, onBack: () => r(null) })
    : i
      ? (0, w.jsx)(Wi, { onClose: () => a(!1) })
      : (0, w.jsxs)(`div`, {
          className: `wp-shell`,
          children: [
            (0, w.jsxs)(`div`, {
              className: `wp-header`,
              children: [
                (0, w.jsxs)(`div`, {
                  children: [
                    (0, w.jsx)(`h1`, { className: `wp-heading`, children: `Produzione Scritta` }),
                    (0, w.jsx)(`p`, {
                      className: `wp-subheading`,
                      children: `A2 Writing Practice — dalla semplicità alla fluidità`,
                    }),
                  ],
                }),
                (0, w.jsx)(`button`, {
                  className: `wp-progress-btn`,
                  onClick: () => a(!0),
                  children: `Il mio progresso →`,
                }),
              ],
            }),
            (0, w.jsxs)(`div`, {
              className: `wp-level-bar`,
              children: [
                (0, w.jsx)(`button`, {
                  className: `wp-level-btn` + (e ? `` : ` on`),
                  onClick: () => t(null),
                  children: `Tutti i livelli`,
                }),
                [1, 2, 3].map((n) =>
                  (0, w.jsxs)(
                    `button`,
                    {
                      className: `wp-level-btn` + (e === n ? ` on` : ``),
                      style: { '--level-c': Ii[n] },
                      onClick: () => t(n),
                      children: [
                        (0, w.jsx)(`span`, { className: `wp-level-dot`, style: { background: Ii[n] } }),
                        Fi[n],
                      ],
                    },
                    n,
                  ),
                ),
              ],
            }),
            (0, w.jsx)(`div`, {
              className: `wp-grid`,
              children: o.map((e) =>
                (0, w.jsxs)(
                  `button`,
                  {
                    className: `wp-card`,
                    onClick: () => r(e.id),
                    children: [
                      (0, w.jsxs)(`div`, {
                        className: `wp-card-top`,
                        children: [
                          (0, w.jsxs)(`span`, {
                            className: `wp-card-level`,
                            style: { background: Ii[e.level] },
                            children: [`Liv. `, e.level],
                          }),
                          (0, w.jsx)(`span`, { className: `wp-card-type`, children: Pi[e.type] }),
                        ],
                      }),
                      (0, w.jsx)(`div`, { className: `wp-card-title`, children: e.title }),
                      (0, w.jsx)(`div`, { className: `wp-card-topic`, children: e.topic }),
                      (0, w.jsxs)(`div`, {
                        className: `wp-card-words`,
                        children: [e.wordTarget[0], `–`, e.wordTarget[1], ` parole`],
                      }),
                      (0, w.jsx)(Ui, { promptId: e.id }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
          ],
        });
}
var qi = speakingTasksData,
  Ji = {
    intro: `Presentazione`,
    situation: `Situazione`,
    describe: `Descrizione`,
    opinion: `Opinione`,
    narrate: `Racconto`,
    monologo: `Monologo`,
  },
  Yi = { 1: `Facile`, 2: `A2 Core`, 3: `Avanzato` },
  Xi = { 1: `#2E7D8A`, 2: `#1E6B4F`, 3: `#A8434B` };
function Zi({ transcript: e, onUpdate: t }) {
  let [n, r] = (0, S.useState)(!1),
    i = (0, S.useRef)(null),
    a = ye();
  function o() {
    if (!a) return;
    if (n) {
      (i.current && i.current.stop(), r(!1));
      return;
    }
    let e = be({ lang: `it-IT`, onUpdate: t, onEnd: () => r(!1) });
    e && ((i.current = e), e.start(), r(!0));
  }
  return (0, w.jsxs)(`div`, {
    className: `sp-recorder`,
    children: [
      a
        ? (0, w.jsxs)(`button`, {
            className: `sp-rec-btn` + (n ? ` on` : ``),
            onClick: o,
            children: [
              (0, w.jsxs)(`svg`, {
                width: `16`,
                height: `16`,
                viewBox: `0 0 24 24`,
                fill: n ? `currentColor` : `none`,
                stroke: `currentColor`,
                strokeWidth: `1.8`,
                strokeLinecap: `round`,
                strokeLinejoin: `round`,
                children: [
                  (0, w.jsx)(`path`, { d: `M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z` }),
                  (0, w.jsx)(`path`, { d: `M19 10v2a7 7 0 0 1-14 0v-2` }),
                  (0, w.jsx)(`line`, { x1: `12`, y1: `19`, x2: `12`, y2: `23` }),
                  (0, w.jsx)(`line`, { x1: `8`, y1: `23`, x2: `16`, y2: `23` }),
                ],
              }),
              n ? `Ferma registrazione` : `Inizia a registrare`,
            ],
          })
        : (0, w.jsx)(`p`, {
            className: `sp-stt-note`,
            children: `La trascrizione live richiede Chrome o Edge. Puoi scrivere qui sotto quello che hai detto.`,
          }),
      (0, w.jsx)(`textarea`, {
        className: `sp-transcript`,
        value: e,
        onChange: (e) => t(e.target.value),
        placeholder: a ? `La trascrizione appare qui mentre parli…` : `Scrivi qui quello che diresti…`,
        rows: 5,
      }),
    ],
  });
}
var Qi = { contenuto: `Contenuto`, lessico: `Lessico`, grammatica: `Grammatica`, scorrevolezza: `Scorrevolezza` };
function $i({ n: e }) {
  return (0, w.jsx)(`span`, {
    className: `es-dots`,
    children: [1, 2, 3, 4, 5].map((t) => (0, w.jsx)(`span`, { className: `es-dot` + (t <= e ? ` full` : ``) }, t)),
  });
}
function ea({ prompt: e, onBack: t }) {
  let [n, r] = (0, S.useState)(``),
    [i, a] = (0, S.useState)(!1),
    [o, s] = (0, S.useState)(!1),
    [c, l] = (0, S.useState)(null),
    [u, d] = (0, S.useState)(!1),
    [f, p] = (0, S.useState)(null),
    m = n.trim() ? n.trim().split(/\s+/).length : 0;
  async function h() {
    (d(!0), p(null));
    let t = await Ni(n, e);
    if ((p(t), d(!1), t && !t.error && t.scores)) {
      let n = Object.values(t.scores),
        r = Math.round((n.reduce((e, t) => e + t, 0) / n.length) * 2);
      At({ section: `orale`, taskId: e.id, score: r, pass: t.esito ? t.esito === `promosso` : r >= 6 });
    }
  }
  async function g() {
    if (o) {
      (M(), s(!1));
      return;
    }
    (s(!0), await j(e.cue, { rate: 0.88 }), s(!1));
  }
  return (0, w.jsxs)(`div`, {
    className: `sp-prompt-card`,
    children: [
      (0, w.jsxs)(`button`, {
        className: `btn ghost sm sp-back`,
        onClick: t,
        children: [
          (0, w.jsxs)(`svg`, {
            width: `15`,
            height: `15`,
            viewBox: `0 0 24 24`,
            fill: `none`,
            stroke: `currentColor`,
            strokeWidth: `1.8`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            children: [
              (0, w.jsx)(`line`, { x1: `19`, y1: `12`, x2: `5`, y2: `12` }),
              (0, w.jsx)(`polyline`, { points: `12 19 5 12 12 5` }),
            ],
          }),
          `Torna ai temi`,
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `sp-type-pill`,
        style: { background: Xi[e.level] },
        children: [Ji[e.type], ` · Livello `, e.level],
      }),
      (0, w.jsx)(`h2`, { className: `sp-title`, children: e.title }),
      (0, w.jsx)(`p`, { className: `sp-topic-tag`, children: e.topic }),
      (0, w.jsxs)(`div`, {
        className: `sp-task-box`,
        children: [
          (0, w.jsx)(`div`, { className: `sp-task-label`, children: `Compito` }),
          (0, w.jsx)(`p`, { className: `sp-task-text`, children: e.prompt }),
          (0, w.jsxs)(`div`, {
            className: `sp-meta-row`,
            children: [
              (0, w.jsxs)(`span`, {
                className: `sp-duration`,
                children: [
                  (0, w.jsxs)(`svg`, {
                    width: `14`,
                    height: `14`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `1.8`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: [
                      (0, w.jsx)(`circle`, { cx: `12`, cy: `12`, r: `10` }),
                      (0, w.jsx)(`polyline`, { points: `12 6 12 12 16 14` }),
                    ],
                  }),
                  e.duration,
                ],
              }),
              k() &&
                (0, w.jsxs)(`button`, {
                  className: `sp-listen-btn` + (o ? ` on` : ``),
                  onClick: g,
                  children: [
                    (0, w.jsxs)(`svg`, {
                      width: `14`,
                      height: `14`,
                      viewBox: `0 0 24 24`,
                      fill: `none`,
                      stroke: `currentColor`,
                      strokeWidth: `1.8`,
                      strokeLinecap: `round`,
                      strokeLinejoin: `round`,
                      children: [
                        (0, w.jsx)(`polygon`, { points: `11 5 6 9 2 9 2 15 6 15 11 19 11 5` }),
                        (0, w.jsx)(`path`, { d: `M15.54 8.46a5 5 0 0 1 0 7.07` }),
                        (0, w.jsx)(`path`, { d: `M19.07 4.93a10 10 0 0 1 0 14.14` }),
                      ],
                    }),
                    o ? `Ferma` : `Ascolta il compito`,
                  ],
                }),
            ],
          }),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `sp-phrases`,
        children: [
          (0, w.jsx)(`div`, { className: `sp-phrases-label`, children: `Frasi utili` }),
          (0, w.jsx)(`div`, {
            className: `sp-phrases-list`,
            children: e.keyPhrases.map((e, t) =>
              (0, w.jsxs)(
                `div`,
                {
                  className: `sp-phrase-item`,
                  children: [
                    (0, w.jsx)(`button`, {
                      className: `sp-phrase-play`,
                      title: `Ascolta`,
                      onClick: () => j(e.replace(`…`, ``).replace(`…`, ``), { rate: 0.82 }),
                      children: (0, w.jsx)(`svg`, {
                        width: `12`,
                        height: `12`,
                        viewBox: `0 0 24 24`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `2`,
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`,
                        children: (0, w.jsx)(`polygon`, { points: `5 3 19 12 5 21 5 3` }),
                      }),
                    }),
                    (0, w.jsx)(`span`, { children: e }),
                  ],
                },
                t,
              ),
            ),
          }),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `sp-record-section`,
        children: [
          (0, w.jsx)(`div`, { className: `sp-record-label`, children: `La tua risposta` }),
          (0, w.jsx)(Zi, { transcript: n, onUpdate: r }),
        ],
      }),
      Ai() &&
        !f &&
        !u &&
        m >= 8 &&
        (0, w.jsxs)(`div`, {
          className: `wp-ai-cta`,
          children: [
            (0, w.jsx)(`button`, {
              className: `btn ai-feedback`,
              onClick: h,
              children: `✨ Valuta la mia produzione orale`,
            }),
            (0, w.jsx)(`span`, {
              className: `wp-ai-cta-sub`,
              children: `Punteggio CILS + correzioni, powered by Mistral AI`,
            }),
          ],
        }),
      u &&
        (0, w.jsxs)(`div`, {
          className: `wp-ai-loading`,
          children: [
            (0, w.jsx)(`div`, { className: `wp-ai-spinner` }),
            (0, w.jsx)(`span`, { children: `Valutazione in corso…` }),
          ],
        }),
      f &&
        f.error &&
        (0, w.jsxs)(`div`, {
          className: `wp-ai-error`,
          children: [
            f.error === `rate-limit`
              ? `Troppe richieste — riprova tra qualche secondo.`
              : `Valutazione non riuscita — riprova.`,
            (0, w.jsx)(`button`, {
              className: `btn ghost sm`,
              onClick: () => p(null),
              style: { marginLeft: 10 },
              children: `OK`,
            }),
          ],
        }),
      f &&
        !f.error &&
        (0, w.jsxs)(`div`, {
          className: `wp-ai-result`,
          children: [
            (0, w.jsx)(`div`, {
              className: `wp-ai-header`,
              children: (0, w.jsx)(`span`, { className: `wp-ai-badge`, children: `✨ Valutazione orale` }),
            }),
            (0, w.jsx)(`div`, {
              className: `es-scores`,
              children: Object.entries(f.scores || {}).map(([e, t]) =>
                (0, w.jsxs)(
                  `div`,
                  {
                    className: `es-score-row`,
                    children: [
                      (0, w.jsx)(`span`, { className: `es-score-label`, children: Qi[e] || e }),
                      (0, w.jsx)($i, { n: t }),
                    ],
                  },
                  e,
                ),
              ),
            }),
            f.verdict && (0, w.jsx)(`div`, { className: `es-eval-verdict`, children: f.verdict }),
            f.corrections?.length > 0 &&
              (0, w.jsx)(`div`, {
                className: `wp-ai-corrections`,
                children: f.corrections.map((e, t) =>
                  (0, w.jsxs)(
                    `div`,
                    {
                      className: `wp-ai-sentence`,
                      children: [
                        (0, w.jsx)(`div`, { className: `wp-ai-sentence-num`, children: t + 1 }),
                        (0, w.jsxs)(`div`, {
                          className: `wp-ai-sentence-body`,
                          children: [
                            (0, w.jsx)(`div`, { className: `wp-ai-sentence-orig`, children: e.said }),
                            (0, w.jsxs)(`div`, { className: `wp-ai-sentence-fixed`, children: [`→ `, e.better] }),
                            (0, w.jsx)(`ul`, {
                              className: `wp-ai-mistakes`,
                              children: (0, w.jsx)(`li`, { children: e.why }),
                            }),
                          ],
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
            f.tip &&
              (0, w.jsxs)(`div`, {
                className: `es-retry-focus`,
                children: [(0, w.jsx)(`b`, { children: `Prossimo tentativo:` }), ` `, f.tip],
              }),
            f.overall &&
              (0, w.jsxs)(`div`, {
                className: `wp-overall`,
                children: [
                  (0, w.jsx)(`div`, { className: `wp-overall-label`, children: `Come potresti esprimerlo` }),
                  (0, w.jsx)(`p`, { className: `wp-overall-text`, children: f.overall }),
                ],
              }),
          ],
        }),
      (0, w.jsx)(`div`, {
        className: `sp-actions`,
        children: (0, w.jsx)(`button`, {
          className: `btn primary`,
          onClick: () => a(!0),
          disabled: i,
          children: i ? `Risposta modello mostrata` : `Mostra risposta modello`,
        }),
      }),
      i &&
        (0, w.jsxs)(`div`, {
          className: `sp-model`,
          children: [
            (0, w.jsx)(`div`, { className: `sp-model-header`, children: `Risposta modello` }),
            (0, w.jsx)(`pre`, { className: `sp-model-text`, children: e.model }),
            c === null
              ? (0, w.jsxs)(`div`, {
                  className: `sp-self`,
                  children: [
                    (0, w.jsx)(`div`, { className: `sp-self-label`, children: `Come valuteresti la tua produzione?` }),
                    (0, w.jsx)(`div`, {
                      className: `sp-self-btns`,
                      children: [`Da rivedere`, `Quasi bene`, `Bene!`, `Ottimo!`].map((e, t) =>
                        (0, w.jsx)(`button`, { className: `sp-self-btn`, onClick: () => l(t), children: e }, t),
                      ),
                    }),
                  ],
                })
              : (0, w.jsx)(`div`, {
                  className: `sp-self-result`,
                  children: [
                    `Continua a praticare — ci arriverai!`,
                    `Quasi! Riprova e nota le frasi chiave.`,
                    `Bel lavoro!`,
                    `Eccellente!`,
                  ][c],
                }),
          ],
        }),
    ],
  });
}
function ta() {
  let [e, t] = (0, S.useState)(null),
    [n, r] = (0, S.useState)(null),
    i = (0, S.useMemo)(() => (e ? qi.filter((t) => t.level === e) : qi), [e]),
    a = qi.find((e) => e.id === n);
  return a
    ? (0, w.jsx)(ea, { prompt: a, onBack: () => r(null) })
    : (0, w.jsxs)(`div`, {
        className: `sp-shell`,
        children: [
          (0, w.jsxs)(`div`, {
            className: `sp-header`,
            children: [
              (0, w.jsx)(`h1`, { className: `sp-heading`, children: `Produzione Orale` }),
              (0, w.jsx)(`p`, {
                className: `sp-subheading`,
                children: `A2 Speaking Practice — dalla presentazione alla conversazione spontanea`,
              }),
            ],
          }),
          (0, w.jsxs)(`div`, {
            className: `sp-level-bar`,
            children: [
              (0, w.jsx)(`button`, {
                className: `sp-level-btn` + (e ? `` : ` on`),
                onClick: () => t(null),
                children: `Tutti i livelli`,
              }),
              [1, 2, 3].map((n) =>
                (0, w.jsxs)(
                  `button`,
                  {
                    className: `sp-level-btn` + (e === n ? ` on` : ``),
                    onClick: () => t(n),
                    children: [(0, w.jsx)(`span`, { className: `sp-level-dot`, style: { background: Xi[n] } }), Yi[n]],
                  },
                  n,
                ),
              ),
            ],
          }),
          (0, w.jsx)(`div`, {
            className: `sp-grid`,
            children: i.map((e) =>
              (0, w.jsxs)(
                `button`,
                {
                  className: `sp-card`,
                  onClick: () => r(e.id),
                  children: [
                    (0, w.jsxs)(`div`, {
                      className: `sp-card-top`,
                      children: [
                        (0, w.jsxs)(`span`, {
                          className: `sp-card-level`,
                          style: { background: Xi[e.level] },
                          children: [`Liv. `, e.level],
                        }),
                        (0, w.jsx)(`span`, { className: `sp-card-type`, children: Ji[e.type] }),
                      ],
                    }),
                    (0, w.jsx)(`div`, { className: `sp-card-title`, children: e.title }),
                    (0, w.jsx)(`div`, { className: `sp-card-topic`, children: e.topic }),
                    (0, w.jsx)(`div`, { className: `sp-card-dur`, children: e.duration }),
                    e.seen
                      ? (0, w.jsxs)(`span`, {
                          className: `freq-badge hi`,
                          children: [`📊 Uscito in `, e.seen, ` esami campione`],
                        })
                      : e.freq >= 3
                        ? (0, w.jsx)(`span`, { className: `freq-badge hi`, children: `⭐ Molto frequente all'esame` })
                        : null,
                  ],
                },
                e.id,
              ),
            ),
          }),
        ],
      });
}
var na = (e) => (e == null ? `#d8d4ca` : e >= 8 ? `#1E6B4F` : e >= 6 ? `#2E7D8A` : e >= 5 ? `#C99A2E` : `#A8434B`);
function ra({ avg: e }) {
  let t = 2 * Math.PI * 34,
    n = e ? (e / 10) * t : 0,
    r = na(e);
  return (0, w.jsxs)(`svg`, {
    width: `88`,
    height: `88`,
    viewBox: `0 0 88 88`,
    children: [
      (0, w.jsx)(`circle`, { cx: `44`, cy: `44`, r: 34, fill: `none`, stroke: `#eceae2`, strokeWidth: `7` }),
      e != null &&
        (0, w.jsx)(`circle`, {
          cx: `44`,
          cy: `44`,
          r: 34,
          fill: `none`,
          stroke: r,
          strokeWidth: `7`,
          strokeDasharray: `${n} ${t}`,
          strokeLinecap: `round`,
          transform: `rotate(-90 44 44)`,
        }),
      (0, w.jsx)(`text`, {
        x: `44`,
        y: `41`,
        textAnchor: `middle`,
        dominantBaseline: `middle`,
        style: { font: `700 22px var(--font-display)`, fill: r },
        children: e ?? `–`,
      }),
      (0, w.jsx)(`text`, {
        x: `44`,
        y: `58`,
        textAnchor: `middle`,
        style: { font: `500 10px var(--font-ui)`, fill: `#aaa` },
        children: `/ 10`,
      }),
    ],
  });
}
function ia({ onGo: e }) {
  let [t, n] = (0, S.useState)(`A2`),
    r = Ft(),
    i = It(t),
    a = Rt(t),
    o = zt(t),
    s = Lt(t),
    c = Bt(t, 7),
    l = Vt(t, 15),
    u = Ut(t);
  return (
    Math.max(1, ...c.map((e) => e.count)),
    (0, w.jsxs)(`section`, {
      className: `card pg-shell`,
      children: [
        (0, w.jsxs)(`div`, {
          className: `pg-head`,
          children: [
            (0, w.jsx)(`div`, {
              children: (0, w.jsx)(`p`, {
                className: `instr`,
                style: { margin: 0 },
                children: `Giorno per giorno, complessivo e per sezione.`,
              }),
            }),
            (0, w.jsx)(`div`, {
              className: `pg-levels`,
              title: `Più livelli in arrivo`,
              children: Tt.map((e) =>
                (0, w.jsx)(
                  `button`,
                  {
                    className: `pg-level` + (e === t ? ` on` : ``) + (e === `A2` ? `` : ` soon`),
                    onClick: () => e === `A2` && n(e),
                    disabled: e !== `A2`,
                    children: e,
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
        r
          ? (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsxs)(`div`, {
                  className: `pg-stats`,
                  children: [
                    (0, w.jsxs)(`div`, {
                      className: `pg-stat`,
                      children: [
                        (0, w.jsx)(`div`, { className: `pg-stat-num`, children: a.count }),
                        (0, w.jsx)(`div`, { className: `pg-stat-lbl`, children: `esercizi oggi` }),
                        a.avg != null &&
                          (0, w.jsxs)(`div`, {
                            className: `pg-stat-sub`,
                            style: { color: na(a.avg) },
                            children: [`media `, a.avg, `/10`],
                          }),
                      ],
                    }),
                    (0, w.jsxs)(`div`, {
                      className: `pg-stat pg-stat-ring`,
                      children: [
                        (0, w.jsx)(ra, { avg: i.avg }),
                        (0, w.jsxs)(`div`, {
                          children: [
                            (0, w.jsx)(`div`, { className: `pg-stat-lbl`, children: `media generale` }),
                            (0, w.jsxs)(`div`, {
                              className: `pg-stat-sub`,
                              children: [i.count, ` esercizi · `, i.passRate, `% promossi`],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, w.jsxs)(`div`, {
                      className: `pg-stat`,
                      children: [
                        (0, w.jsx)(`div`, { className: `pg-stat-num`, children: o }),
                        (0, w.jsx)(`div`, { className: `pg-stat-lbl`, children: `giorni di fila` }),
                        (0, w.jsx)(`div`, {
                          className: `pg-stat-sub`,
                          children: o === 0 ? `inizia oggi!` : `continua così`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, w.jsxs)(`div`, {
                  className: `pg-block`,
                  children: [
                    (0, w.jsx)(`div`, { className: `pg-block-label`, children: `Ultimi 7 giorni` }),
                    (0, w.jsx)(`div`, {
                      className: `pg-days`,
                      children: c.map((e, t) =>
                        (0, w.jsxs)(
                          `div`,
                          {
                            className: `pg-day`,
                            children: [
                              (0, w.jsx)(`div`, {
                                className: `pg-day-bar-wrap`,
                                children: (0, w.jsx)(`div`, {
                                  className: `pg-day-bar`,
                                  style: {
                                    height: e.avg == null ? `4px` : (e.avg / 10) * 100 + `%`,
                                    background: e.avg == null ? `#e4e0d6` : na(e.avg),
                                  },
                                  title: e.count
                                    ? `${e.dateLabel}: ${e.avg}/10 (${e.count})`
                                    : `${e.dateLabel}: nessun esercizio`,
                                }),
                              }),
                              (0, w.jsx)(`div`, { className: `pg-day-val`, children: e.avg == null ? `·` : e.avg }),
                              (0, w.jsx)(`div`, { className: `pg-day-lbl`, children: e.label }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, w.jsxs)(`div`, {
                  className: `pg-block`,
                  children: [
                    (0, w.jsx)(`div`, { className: `pg-block-label`, children: `Per sezione` }),
                    (0, w.jsx)(`div`, {
                      className: `pg-sections`,
                      children: s.map((e) =>
                        (0, w.jsxs)(
                          `div`,
                          {
                            className: `pg-sec-row`,
                            children: [
                              (0, w.jsx)(`span`, {
                                className: `pg-sec-name`,
                                style: { color: e.avg == null ? `#aaa` : e.colour },
                                children: e.label,
                              }),
                              (0, w.jsx)(`div`, {
                                className: `pg-sec-bar`,
                                children: (0, w.jsx)(`div`, {
                                  style: {
                                    width: e.avg == null ? `0%` : (e.avg / 10) * 100 + `%`,
                                    background: e.colour,
                                  },
                                }),
                              }),
                              (0, w.jsx)(`span`, {
                                className: `pg-sec-val`,
                                children:
                                  e.avg == null
                                    ? (0, w.jsx)(`span`, { className: `pg-sec-empty`, children: `—` })
                                    : (0, w.jsxs)(w.Fragment, {
                                        children: [
                                          (0, w.jsx)(`b`, { style: { color: e.colour }, children: e.avg }),
                                          `/10 · `,
                                          e.count,
                                          `×`,
                                        ],
                                      }),
                              }),
                            ],
                          },
                          e.section,
                        ),
                      ),
                    }),
                  ],
                }),
                l.length > 1 &&
                  (0, w.jsxs)(`div`, {
                    className: `pg-block`,
                    children: [
                      (0, w.jsx)(`div`, { className: `pg-block-label`, children: `Andamento recente` }),
                      (0, w.jsx)(`div`, {
                        className: `pg-trend`,
                        children: l.map((e, t) =>
                          (0, w.jsx)(
                            `div`,
                            {
                              className: `pg-trend-bar`,
                              style: { height: (e.score / 10) * 40 + 6 + `px`, background: na(e.score) },
                              title: `${e.score}/10`,
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
                u.length > 0
                  ? (0, w.jsxs)(`div`, {
                      className: `pg-block`,
                      children: [
                        (0, w.jsx)(`div`, { className: `pg-block-label`, children: `I tuoi errori più comuni` }),
                        (0, w.jsx)(`div`, {
                          className: `pg-mistakes`,
                          children: u.map((t) =>
                            (0, w.jsxs)(
                              `button`,
                              {
                                className: `pg-mistake`,
                                onClick: () => e?.(`exercises`),
                                children: [
                                  (0, w.jsx)(`span`, { className: `pg-mistake-tag`, children: t.tag }),
                                  (0, w.jsxs)(`span`, { className: `pg-mistake-count`, children: [t.count, `×`] }),
                                ],
                              },
                              t.tag,
                            ),
                          ),
                        }),
                      ],
                    })
                  : (0, w.jsxs)(`div`, {
                      className: `pg-soon`,
                      children: [
                        (0, w.jsx)(`b`, { children: `Prossimo aggiornamento:` }),
                        ` analisi dei tuoi errori più frequenti (accenti, articoli, preposizioni…) ed esercizi mirati per correggerli.`,
                      ],
                    }),
              ],
            })
          : (0, w.jsxs)(`div`, {
              className: `pg-empty`,
              children: [
                (0, w.jsxs)(`p`, {
                  children: [
                    `Ancora nessun dato. Completa un esercizio in `,
                    (0, w.jsx)(`b`, { children: `Scrittura` }),
                    `, `,
                    (0, w.jsx)(`b`, { children: `Orale` }),
                    `, `,
                    (0, w.jsx)(`b`, { children: `Ascolto Pratica` }),
                    ` o `,
                    (0, w.jsx)(`b`, { children: `Esaminatore AI` }),
                    ` e il tuo punteggio comparirà qui.`,
                  ],
                }),
                (0, w.jsxs)(`div`, {
                  className: `pg-empty-actions`,
                  children: [
                    (0, w.jsx)(`button`, {
                      className: `btn primary sm`,
                      onClick: () => e?.(`scrittura`),
                      children: `Vai a Scrittura`,
                    }),
                    (0, w.jsx)(`button`, {
                      className: `btn ghost sm`,
                      onClick: () => e?.(`ascoltop`),
                      children: `Vai ad Ascolto Pratica`,
                    }),
                  ],
                }),
              ],
            }),
      ],
    })
  );
}
var aa = translationSetsData;
function oa({ set: e, onExit: t }) {
  let [n, r] = (0, S.useState)(0),
    [i, a] = (0, S.useState)(``),
    [o, s] = (0, S.useState)(!1),
    [c, l] = (0, S.useState)(null),
    [u, d] = (0, S.useState)([]),
    [f, p] = (0, S.useState)(!1),
    m = e.items[n];
  async function h() {
    if (!i.trim() || o) return;
    s(!0);
    let e = await Mi(m.en, i.trim(), m.it, m.note || ``);
    (s(!1), l(e.error ? { error: e.error } : e));
  }
  function g() {
    let t = c && !c.error ? (c.score ?? 0) : 0,
      i = [...u, t];
    if ((d(i), n + 1 >= e.items.length)) {
      let t = i.filter((e) => e >= 6).length;
      (At({ section: `grammatica`, taskId: `trans-${e.id}`, score: t, max: e.items.length }), p(!0));
    } else (r(n + 1), a(``), l(null));
  }
  if (f) {
    let n = u.filter((e) => e >= 6).length,
      i = n / e.items.length;
    return (0, w.jsxs)(`div`, {
      className: `pl-done`,
      children: [
        (0, w.jsxs)(`div`, {
          className: `pl-done-score`,
          style: { color: i >= 0.8 ? `#1E6B4F` : i >= 0.55 ? `#C99A2E` : `#A8434B` },
          children: [n, `/`, e.items.length],
        }),
        (0, w.jsx)(`p`, {
          className: `pl-done-msg`,
          children:
            i >= 0.8
              ? `Ottimo — le tue traduzioni funzionano. Sei pronta per questo tipo di frasi.`
              : i >= 0.55
                ? `Buon lavoro — rileggi le correzioni e rifai il set: la seconda volta vola.`
                : `Allenamento prezioso: ogni correzione qui vale doppio all'esame. Rifallo domani.`,
        }),
        (0, w.jsx)(`p`, { className: `pl-done-note`, children: `Salvato nei tuoi progressi (Grammatica).` }),
        (0, w.jsx)(`button`, {
          className: `btn primary`,
          onClick: () => {
            (r(0), a(``), l(null), d([]), p(!1));
          },
          children: `Rifai il set`,
        }),
        (0, w.jsx)(`button`, { className: `btn ghost sm`, onClick: t, children: `Altri set` }),
      ],
    });
  }
  return (0, w.jsxs)(`div`, {
    className: `td-run`,
    children: [
      (0, w.jsxs)(`div`, {
        className: `pl-drill-top`,
        children: [
          (0, w.jsxs)(`span`, { children: [e.label, ` · `, n + 1, ` / `, e.items.length] }),
          (0, w.jsxs)(`span`, { children: [`✓ `, u.filter((e) => e >= 6).length] }),
        ],
      }),
      (0, w.jsx)(`div`, { className: `td-en`, children: m.en }),
      (0, w.jsx)(`textarea`, {
        className: `td-input`,
        placeholder: `Scrivi la traduzione in italiano…`,
        value: i,
        onChange: (e) => a(e.target.value),
        onKeyDown: (e) => {
          e.key === `Enter` && !e.shiftKey && (e.preventDefault(), c || h());
        },
        rows: 2,
        disabled: o || !!c,
      }),
      !c &&
        (0, w.jsx)(`button`, {
          className: `btn primary sm`,
          onClick: h,
          disabled: o || !i.trim(),
          children: o ? `L'esaminatore controlla…` : `Valuta →`,
        }),
      c &&
        c.error &&
        (0, w.jsxs)(`div`, {
          className: `wp-ai-error`,
          children: [
            c.error === `rate-limit` ? `Troppe richieste — riprova tra qualche secondo.` : `Errore di rete — riprova.`,
            (0, w.jsx)(`button`, { className: `btn ghost sm`, onClick: () => l(null), children: `OK` }),
          ],
        }),
      c &&
        !c.error &&
        (0, w.jsxs)(`div`, {
          className: `td-result`,
          children: [
            (0, w.jsxs)(`div`, {
              className: `td-score`,
              style: { color: c.score >= 8 ? `#1E6B4F` : c.score >= 6 ? `#2E7D8A` : `#A8434B` },
              children: [c.score, `/10 `, (0, w.jsx)(`span`, { className: `td-verdict`, children: c.verdict })],
            }),
            c.corrections?.length > 0 &&
              (0, w.jsx)(`div`, {
                className: `wp-ai-corrections`,
                children: c.corrections.map((e, t) =>
                  (0, w.jsxs)(
                    `div`,
                    {
                      className: `wp-ai-sentence`,
                      children: [
                        (0, w.jsx)(`div`, { className: `wp-ai-sentence-num`, children: t + 1 }),
                        (0, w.jsxs)(`div`, {
                          className: `wp-ai-sentence-body`,
                          children: [
                            (0, w.jsx)(`div`, { className: `wp-ai-sentence-orig`, children: e.said }),
                            (0, w.jsxs)(`div`, { className: `wp-ai-sentence-fixed`, children: [`→ `, e.better] }),
                            (0, w.jsx)(`ul`, {
                              className: `wp-ai-mistakes`,
                              children: (0, w.jsx)(`li`, { children: e.why }),
                            }),
                          ],
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
            (0, w.jsxs)(`div`, {
              className: `td-model`,
              children: [
                (0, w.jsx)(`div`, { className: `td-model-label`, children: `Traduzione modello` }),
                (0, w.jsxs)(`div`, {
                  className: `td-model-it`,
                  children: [
                    m.it,
                    k() &&
                      (0, w.jsx)(`button`, {
                        className: `icon-play sm lp-speak`,
                        onClick: () => {
                          (M(), j(m.it));
                        },
                        title: `Ascolta`,
                        'aria-label': `Ascolta`,
                      }),
                  ],
                }),
                m.alt &&
                  (0, w.jsxs)(`div`, {
                    className: `td-model-alt`,
                    children: [`Va bene anche: `, (0, w.jsx)(`i`, { children: m.alt })],
                  }),
                m.note && (0, w.jsx)(`div`, { className: `td-model-note`, children: m.note }),
              ],
            }),
            c.tip &&
              (0, w.jsxs)(`div`, {
                className: `wp-tip`,
                children: [(0, w.jsx)(`b`, { children: `Tip:` }), ` `, c.tip],
              }),
            (0, w.jsx)(`button`, {
              className: `btn primary sm`,
              onClick: g,
              children: n + 1 >= e.items.length ? `Vedi il risultato →` : `Prossima frase →`,
            }),
          ],
        }),
    ],
  });
}
function sa() {
  let [e, t] = (0, S.useState)(null),
    n = aa.find((t) => t.id === e);
  return Ai()
    ? (0, w.jsxs)(`section`, {
        className: `card pl-shell`,
        children: [
          (0, w.jsx)(`h2`, { className: `sec-h`, children: `Traduzione EN → IT` }),
          (0, w.jsx)(`p`, {
            className: `instr`,
            children: `Traduci la frase inglese in italiano. L'esaminatore AI valuta la tua versione (accetta le varianti naturali), poi ti mostra la traduzione modello con la regola.`,
          }),
          n
            ? (0, w.jsx)(oa, { set: n, onExit: () => t(null) }, n.id)
            : (0, w.jsx)(`div`, {
                className: `td-sets`,
                children: aa.map((e) =>
                  (0, w.jsxs)(
                    `button`,
                    {
                      className: `td-set`,
                      onClick: () => t(e.id),
                      children: [
                        (0, w.jsx)(`span`, { className: `td-set-label`, children: e.label }),
                        (0, w.jsxs)(`span`, { className: `td-set-n`, children: [e.items.length, ` frasi`] }),
                      ],
                    },
                    e.id,
                  ),
                ),
              }),
        ],
      })
    : (0, w.jsxs)(`section`, {
        className: `card`,
        children: [
          (0, w.jsx)(`h2`, { className: `sec-h`, children: `Traduzione EN → IT` }),
          (0, w.jsx)(`p`, {
            className: `instr`,
            children: `Questa funzione richiede la chiave API Mistral (non presente in questa build).`,
          }),
        ],
      });
}
var ca = examSeriesData;
function la({ onGo: e }) {
  let [t, n] = N(`series_done`, {}),
    r = (e) => n((t) => ({ ...t, [e]: !t[e] })),
    i = ca.flatMap((e) => e.sessions).flatMap((e) => e.tasks).length,
    a = Object.values(t).filter(Boolean).length;
  return (0, w.jsxs)(`section`, {
    className: `card xs-shell`,
    children: [
      (0, w.jsxs)(`div`, {
        className: `xs-head`,
        children: [
          (0, w.jsxs)(`div`, {
            children: [
              (0, w.jsx)(`h2`, { className: `sec-h`, children: `La Serie d'Esame — 3 giorni` }),
              (0, w.jsxs)(`p`, {
                className: `instr`,
                style: { margin: 0 },
                children: [
                  `Otto sessioni nell'ordine del vero esame CILS. Spunta quello che completi — `,
                  a,
                  `/`,
                  i,
                  ` fatto.`,
                ],
              }),
            ],
          }),
          (0, w.jsx)(`div`, {
            className: `xs-total`,
            children: (0, w.jsxs)(`b`, { children: [Math.round((a / i) * 100), `%`] }),
          }),
        ],
      }),
      ca.map((n) => {
        let i = n.sessions.flatMap((e) => e.tasks.map((t, n) => `${e.id}t${n}`)),
          a = i.filter((e) => t[e]).length;
        return (0, w.jsxs)(
          `div`,
          {
            className: `xs-day`,
            children: [
              (0, w.jsxs)(`div`, {
                className: `xs-day-head`,
                children: [
                  (0, w.jsxs)(`span`, { className: `xs-day-label`, children: [`Giorno `, n.day, ` · `, n.label] }),
                  (0, w.jsxs)(`span`, { className: `xs-day-count`, children: [a, `/`, i.length] }),
                ],
              }),
              n.sessions.map((n) =>
                (0, w.jsxs)(
                  `div`,
                  {
                    className: `xs-session`,
                    children: [
                      (0, w.jsxs)(`div`, {
                        className: `xs-sess-head`,
                        children: [
                          (0, w.jsx)(`span`, { className: `xs-sess-title`, children: n.title }),
                          (0, w.jsxs)(`span`, { className: `xs-sess-mins`, children: [`~`, n.mins, ` min`] }),
                        ],
                      }),
                      n.tasks.map((i, a) => {
                        let o = `${n.id}t${a}`;
                        return (0, w.jsxs)(
                          `div`,
                          {
                            className: `xs-task` + (t[o] ? ` done` : ``),
                            children: [
                              (0, w.jsx)(`button`, {
                                className: `xs-check`,
                                onClick: () => r(o),
                                'aria-label': `fatto`,
                                children: t[o] ? `✓` : ``,
                              }),
                              (0, w.jsx)(`span`, {
                                className: `xs-task-label`,
                                children: i.label.replace(/\s*[\p{Extended_Pictographic}️]+/gu, ``),
                              }),
                              i.target &&
                                (0, w.jsx)(`button`, {
                                  className: `btn ghost sm xs-go`,
                                  onClick: () => e(i.target),
                                  children: `Vai →`,
                                }),
                            ],
                          },
                          o,
                        );
                      }),
                    ],
                  },
                  n.id,
                ),
              ),
            ],
          },
          n.day,
        );
      }),
    ],
  });
}
var ua = `cils_visitor_v1`,
  I = () => !0;
function da() {
  try {
    return JSON.parse(localStorage.getItem(ua) || `null`);
  } catch {
    return null;
  }
}
function fa() {
  let e = da();
  return !!(e && e.email);
}
var pa = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  ma = (e) => pa.test((e || ``).trim());
async function ha({ name: e, email: t, reason: n }) {
  let r = { name: (e || ``).trim(), email: (t || ``).trim().toLowerCase(), reason: n || ``, ts: Date.now() };
  try {
    localStorage.setItem(ua, JSON.stringify(r));
  } catch {}
  return { ok: !0, stored: `local` };
}
var ga = [
  `Sto studiando per il CILS`,
  `Learning Italian generally`,
  `Curious about the project`,
  `Recruiting / professional interest`,
  `Altro`,
];
function _a({ onDone: e }) {
  let [t, n] = (0, S.useState)(``),
    [r, i] = (0, S.useState)(``),
    [a, o] = (0, S.useState)(``),
    [s, c] = (0, S.useState)(!1),
    [l, u] = (0, S.useState)(``);
  async function d(n) {
    if ((n.preventDefault(), !t.trim())) return u(`Come ti chiami? / What should I call you?`);
    if (!ma(r)) return u(`That email doesn't look right — check it?`);
    (u(``), c(!0), await ha({ name: t, email: r, reason: a }), c(!1), e());
  }
  return (0, w.jsxs)(`div`, {
    className: `gate-wrap`,
    children: [
     (0, w.jsxs)(`div`, {
      className: `gate-photo`,
      children: [
        (0, w.jsx)(`img`, { src: `/PM-Side-Projects/cils-app/img/regions/toscana.jpg`, alt: `` }),
        (0, w.jsx)(`div`, { className: `gate-scrim`, 'aria-hidden': !0 }),
        (0, w.jsxs)(`div`, {
          className: `gate-brand`,
          children: [
            (0, w.jsx)(`h1`, { className: `gate-title`, children: `ASCOLTO` }),
            (0, w.jsx)(`span`, { className: `gate-over`, children: `CILS A2 · Modulo Integrazione` }),
          ],
        }),
      ],
     }),
     (0, w.jsxs)(`form`, {
      className: `gate-card`,
      onSubmit: d,
      noValidate: !0,
      children: [
        (0, w.jsx)(`p`, {
          className: `gate-sub`,
          children: `A full practice app for the CILS A2 Integrazione Italian exam: listening with real audio, an AI examiner for the oral, strict written marking, and a 3 day exam plan.`,
        }),
        (0, w.jsxs)(`label`, {
          className: `gate-label`,
          children: [
            `Nome / Name`,
            (0, w.jsx)(`input`, {
              className: `gate-input`,
              value: t,
              onChange: (e) => n(e.target.value),
              placeholder: `Come ti chiami?`,
              autoComplete: `name`,
              autoFocus: !0,
            }),
          ],
        }),
        (0, w.jsxs)(`label`, {
          className: `gate-label`,
          children: [
            `Email`,
            (0, w.jsx)(`input`, {
              className: `gate-input`,
              type: `email`,
              value: r,
              onChange: (e) => i(e.target.value),
              placeholder: `tu@esempio.com`,
              autoComplete: `email`,
            }),
          ],
        }),
        (0, w.jsxs)(`label`, {
          className: `gate-label`,
          children: [
            `What brings you here? `,
            (0, w.jsx)(`span`, { className: `gate-opt`, children: `(optional)` }),
            (0, w.jsxs)(`select`, {
              className: `gate-input`,
              value: a,
              onChange: (e) => o(e.target.value),
              children: [
                (0, w.jsx)(`option`, { value: ``, children: `—` }),
                ga.map((e) => (0, w.jsx)(`option`, { value: e, children: e }, e)),
              ],
            }),
          ],
        }),
        l && (0, w.jsx)(`div`, { className: `gate-err`, children: l }),
        (0, w.jsx)(`button`, {
          className: `btn primary gate-btn`,
          type: `submit`,
          disabled: s,
          children: s ? `Un attimo…` : `Inizia a esercitarti`,
        }),
        (0, w.jsx)(`p`, {
          className: `gate-note`,
          children: `No password, no spam, and your practice data never leaves this device.`,
        }),
      ],
     }),
    ],
  });
}
var va = `modulepreload`,
  ya = function (e) {
    return `/PM-Side-Projects/cils-app/` + e;
  },
  ba = {},
  xa = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      r = o(
        t.map((t) => {
          if (((t = ya(t, n)), t in ba)) return;
          ba[t] = !0;
          let r = t.endsWith(`.css`),
            i = r ? `[rel="stylesheet"]` : ``;
          if (n)
            for (let n = e.length - 1; n >= 0; n--) {
              let i = e[n];
              if (i.href === t && (!r || i.rel === `stylesheet`)) return;
            }
          else if (document.querySelector(`link[href="${t}"]${i}`)) return;
          let o = document.createElement(`link`);
          if (
            ((o.rel = r ? `stylesheet` : va),
            r || (o.as = `script`),
            (o.crossOrigin = ``),
            (o.href = t),
            a && o.setAttribute(`nonce`, a),
            document.head.appendChild(o),
            r)
          )
            return new Promise((e, n) => {
              (o.addEventListener(`load`, e),
                o.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`))));
            });
        }),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  Sa = photoObjectLabelsData,
  Ca = [`#1E6B4F`, `#C9603A`, `#2E7D8A`, `#A8434B`, `#C99A2E`, `#7A5A8E`],
  wa = (e) => Ca[e % Ca.length];
function Ta() {
  let [e, t] = (0, S.useState)(null),
    [n, r] = (0, S.useState)(!1),
    [i, a] = (0, S.useState)(!1),
    [o, s] = (0, S.useState)([]),
    [c, l] = (0, S.useState)(null),
    [d, f] = (0, S.useState)(null),
    [p, m] = (0, S.useState)(!1),
    h = (0, S.useRef)(null),
    g = (0, S.useRef)(null),
    _ = (0, S.useRef)(null),
    v = (0, S.useCallback)(async () => {
      if (e) return e;
      r(!0);
      let n = await import('@tensorflow/tfjs'),
        i = await import('@tensorflow-models/coco-ssd');
      await n.ready();
      let a = await i.load({ base: `mobilenet_v2` });
      return (t(a), r(!1), a);
    }, [e]),
    y = (0, S.useCallback)(async (e) => {
      !e || !e.type.startsWith(`image/`) || (l(URL.createObjectURL(e)), s([]), f(null));
    }, []),
    b = (e) => {
      (e.preventDefault(), m(!1), y(e.dataTransfer.files[0]));
    },
    x = (0, S.useCallback)(async () => {
      h.current &&
        (a(!0),
        s(
          (await (await v()).detect(h.current))
            .filter((e) => e.score > 0.45 && Sa[e.class])
            .map((e, t) => ({ ...e, ...Sa[e.class], colour: wa(t), id: t })),
        ),
        a(!1));
    }, [v]);
  return (
    (0, S.useEffect)(() => {
      let e = h.current,
        t = g.current;
      if (!e || !t || !o.length) return;
      ((t.width = e.naturalWidth || e.width), (t.height = e.naturalHeight || e.height));
      let n = t.getContext(`2d`);
      n.clearRect(0, 0, t.width, t.height);
      let r = t.width / e.width,
        i = t.height / e.height;
      o.forEach((e) => {
        let [t, a, o, s] = e.bbox,
          c = d === e.id,
          l = e.colour;
        ((n.strokeStyle = l), (n.lineWidth = c ? 4 : 2.5), (n.shadowColor = l), (n.shadowBlur = c ? 16 : 6));
        let u = t * r,
          f = a * i,
          p = o * r,
          m = s * i;
        (n.beginPath(),
          n.moveTo(u + 8, f),
          n.lineTo(u + p - 8, f),
          n.quadraticCurveTo(u + p, f, u + p, f + 8),
          n.lineTo(u + p, f + m - 8),
          n.quadraticCurveTo(u + p, f + m, u + p - 8, f + m),
          n.lineTo(u + 8, f + m),
          n.quadraticCurveTo(u, f + m, u, f + m - 8),
          n.lineTo(u, f + 8),
          n.quadraticCurveTo(u, f, u + 8, f),
          n.closePath(),
          n.stroke(),
          (n.shadowBlur = 0));
        let h = String(e.id + 1),
          g = c ? 24 : 20;
        ((n.fillStyle = l),
          n.beginPath(),
          n.arc(u + g / 2 + 2, f + g / 2 + 2, g / 2, 0, Math.PI * 2),
          n.fill(),
          (n.fillStyle = `#fff`),
          (n.font = `bold ${g * 0.6}px sans-serif`),
          (n.textAlign = `center`),
          (n.textBaseline = `middle`),
          n.fillText(h, u + g / 2 + 2, f + g / 2 + 2));
      });
    }, [o, d]),
    (0, w.jsxs)(`section`, {
      className: `card ie-shell`,
      children: [
        (0, w.jsx)(`h2`, { className: `sec-h`, children: `Photo Explorer` }),
        (0, w.jsx)(`p`, {
          className: `instr`,
          children: `Upload any photo and discover the Italian names for everything in it.`,
        }),
        c
          ? (0, w.jsxs)(`div`, {
              className: `ie-workspace`,
              children: [
                (0, w.jsxs)(`div`, {
                  className: `ie-img-wrap`,
                  children: [
                    (0, w.jsx)(`img`, { ref: h, src: c, alt: `uploaded`, className: `ie-img`, onLoad: x }),
                    (0, w.jsx)(`canvas`, { ref: g, className: `ie-canvas` }),
                    (n || i) &&
                      (0, w.jsxs)(`div`, {
                        className: `ie-loading`,
                        children: [
                          (0, w.jsx)(`div`, { className: `ie-spinner` }),
                          (0, w.jsx)(`span`, { children: n ? `Loading model…` : `Detecting objects…` }),
                        ],
                      }),
                  ],
                }),
                (0, w.jsxs)(`div`, {
                  className: `ie-controls`,
                  children: [
                    (0, w.jsx)(`button`, {
                      className: `ie-btn-secondary`,
                      onClick: () => {
                        (l(null), s([]), f(null));
                      },
                      children: `New photo`,
                    }),
                    o.length > 0 &&
                      (0, w.jsxs)(`span`, { className: `ie-count`, children: [o.length, ` objects found`] }),
                  ],
                }),
                o.length > 0 &&
                  (0, w.jsx)(`div`, {
                    className: `ie-results`,
                    children: o.map((e) =>
                      (0, w.jsxs)(
                        `div`,
                        {
                          className: `ie-item${d === e.id ? ` active` : ``}`,
                          style: { '--ie-col': e.colour },
                          onClick: () => f(d === e.id ? null : e.id),
                          children: [
                            (0, w.jsx)(`div`, { className: `ie-item-num`, children: e.id + 1 }),
                            (0, w.jsxs)(`div`, {
                              className: `ie-item-body`,
                              children: [
                                (0, w.jsx)(`div`, { className: `ie-item-it`, children: e.it }),
                                (0, w.jsx)(`div`, { className: `ie-item-en`, children: e.en }),
                              ],
                            }),
                            (0, w.jsxs)(`div`, {
                              className: `ie-item-conf`,
                              children: [Math.round(e.score * 100), `%`],
                            }),
                            (0, w.jsx)(`button`, {
                              className: `ie-item-play`,
                              onClick: (t) => {
                                (t.stopPropagation(), j(e.it));
                              },
                              disabled: !k(),
                              title: `Ascolta`,
                              'aria-label': `Ascolta`,
                              children: (0, w.jsxs)(`svg`, {
                                width: `15`,
                                height: `15`,
                                viewBox: `0 0 24 24`,
                                fill: `none`,
                                stroke: `currentColor`,
                                strokeWidth: `1.8`,
                                children: [
                                  (0, w.jsx)(`polygon`, { points: `11 5 6 9 2 9 2 15 6 15 11 19 11 5` }),
                                  (0, w.jsx)(`path`, { d: `M15.54 8.46a5 5 0 0 1 0 7.07` }),
                                ],
                              }),
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
                !i &&
                  o.length === 0 &&
                  c &&
                  (0, w.jsx)(`div`, {
                    className: `ie-empty`,
                    children: `No objects detected — try a photo with everyday objects like furniture, food, or people.`,
                  }),
              ],
            })
          : (0, w.jsxs)(`div`, {
              className: `ie-drop${p ? ` over` : ``}`,
              onDragOver: (e) => {
                (e.preventDefault(), m(!0));
              },
              onDragLeave: () => m(!1),
              onDrop: b,
              onClick: () => _.current?.click(),
              children: [
                (0, w.jsx)(`div`, {
                  className: `ie-drop-icon`,
                  children: (0, w.jsxs)(`svg`, {
                    width: `48`,
                    height: `48`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `1.5`,
                    children: [
                      (0, w.jsx)(`rect`, { x: `3`, y: `3`, width: `18`, height: `18`, rx: `2` }),
                      (0, w.jsx)(`circle`, { cx: `8.5`, cy: `8.5`, r: `1.5` }),
                      (0, w.jsx)(`polyline`, { points: `21 15 16 10 5 21` }),
                    ],
                  }),
                }),
                (0, w.jsx)(`div`, { className: `ie-drop-label`, children: `Carica una foto` }),
                (0, w.jsx)(`div`, { className: `ie-drop-sub`, children: `Tap to choose a photo` }),
                (0, w.jsx)(`input`, {
                  ref: _,
                  type: `file`,
                  accept: `image/*`,
                  className: `ie-file-input`,
                  onChange: (e) => y(e.target.files[0]),
                }),
              ],
            }),
      ],
    })
  );
}
var Ea = visualDictionaryScenesData;
function Da(e) {
  let t = [...e];
  for (let e = t.length - 1; e > 0; e--) {
    let n = Math.floor(Math.random() * (e + 1));
    [t[e], t[n]] = [t[n], t[e]];
  }
  return t;
}
function Oa({ scene: e, children: t }) {
  return (0, w.jsxs)(`div`, {
    className: `pd-stage`,
    style: { aspectRatio: e.ratio || `10 / 7` },
    children: [
      e.img
        ? (0, w.jsx)(`img`, { className: `pd-photo`, src: e.img, alt: e.title, loading: `lazy` })
        : (0, w.jsx)(`div`, { className: `pd-svg`, dangerouslySetInnerHTML: { __html: e.svg } }),
      t,
      e.credit && (0, w.jsxs)(`span`, { className: `pd-credit`, children: [`Foto: `, e.credit] }),
    ],
  });
}
function ka({ scene: e, showEn: t }) {
  let [n, r] = (0, S.useState)(null),
    i = (e, t) => {
      (r((t) => (t === e ? null : e)), k() && j(t));
    };
  return (0, w.jsx)(Oa, {
    scene: e,
    children: e.objects.map((r, a) => {
      let o = t || n === a,
        s = r.dir || (r.y < 20 ? `down` : `up`),
        c = r.ax ? ` ax-` + r.ax : ``;
      return (0, w.jsxs)(
        `button`,
        {
          className: `pd-pin ` + s + c + (n === a ? ` on` : ``),
          style: { left: r.x + `%`, top: r.y + `%`, '--hue': e.hue },
          onClick: () => i(a, r.it),
          children: [
            (0, w.jsxs)(`span`, {
              className: `pd-pin-bubble`,
              children: [
                (0, w.jsx)(`span`, { className: `pd-label-it`, children: r.it }),
                o && (0, w.jsx)(`span`, { className: `pd-label-en`, children: r.en }, n === a ? `a` : `b`),
              ],
            }),
            (0, w.jsx)(`span`, { className: `pd-pin-dot` }),
          ],
        },
        a,
      );
    }),
  });
}
function Aa({ scene: e, onExit: t }) {
  let n = (0, S.useMemo)(() => Da(e.objects.map((e, t) => t)), [e.id]),
    [r, i] = (0, S.useState)(0),
    [a, o] = (0, S.useState)(0),
    [s, c] = (0, S.useState)(null),
    [l, u] = (0, S.useState)(null),
    [d, f] = (0, S.useState)(!1),
    p = n[r],
    m = e.objects[p];
  (0, S.useEffect)(() => {
    m && k() && j(m.it);
  }, [r]);
  let h = (e) => {
      l === null &&
        (e === p
          ? (u(e), o((e) => e + 1), k() && j(m.it), setTimeout(g, 900))
          : (c(e), setTimeout(() => c(null), 500)));
    },
    g = () => {
      (u(null), c(null), r + 1 >= n.length ? f(!0) : i((e) => e + 1));
    },
    _ = () => {
      (i(0), o(0), f(!1), u(null), c(null));
    };
  if (d) {
    let r = Math.round((a / n.length) * 100);
    return (0, w.jsxs)(`div`, {
      className: `pd-quiz-done`,
      children: [
        (0, w.jsxs)(`div`, { className: `pd-quiz-score`, style: { color: e.hue }, children: [a, `/`, n.length] }),
        (0, w.jsx)(`div`, {
          className: `pd-quiz-msg`,
          children:
            r >= 90 ? `Perfetto!` : r >= 70 ? `Molto bene!` : r >= 50 ? `Buon lavoro!` : `Continua a praticare!`,
        }),
        (0, w.jsxs)(`div`, {
          className: `pd-quiz-actions`,
          children: [
            (0, w.jsx)(`button`, { className: `btn ghost sm`, onClick: t, children: `Torna a esplorare` }),
            (0, w.jsx)(`button`, { className: `btn primary`, onClick: _, children: `Riprova quiz` }),
          ],
        }),
      ],
    });
  }
  return (0, w.jsxs)(w.Fragment, {
    children: [
      (0, w.jsxs)(`div`, {
        className: `pd-quiz-prompt`,
        children: [
          (0, w.jsx)(`span`, { className: `pd-quiz-find`, children: `Trova:` }),
          (0, w.jsx)(`span`, { className: `pd-quiz-word`, style: { color: e.hue }, children: m.it }),
          (0, w.jsx)(`button`, {
            className: `pd-quiz-hear`,
            onClick: () => j(m.it),
            disabled: !k(),
            title: `Riascolta`,
            'aria-label': `Riascolta`,
            children: (0, w.jsxs)(`svg`, {
              width: `16`,
              height: `16`,
              viewBox: `0 0 24 24`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `1.8`,
              children: [
                (0, w.jsx)(`polygon`, { points: `11 5 6 9 2 9 2 15 6 15 11 19 11 5` }),
                (0, w.jsx)(`path`, { d: `M15.54 8.46a5 5 0 0 1 0 7.07` }),
              ],
            }),
          }),
          (0, w.jsxs)(`span`, { className: `pd-quiz-progress`, children: [r + 1, ` / `, n.length] }),
        ],
      }),
      (0, w.jsx)(Oa, {
        scene: e,
        children: e.objects.map((t, n) =>
          (0, w.jsx)(
            `button`,
            {
              className: `pd-dot` + (l === n ? ` correct` : ``) + (s === n ? ` wrong` : ``),
              style: { left: t.x + `%`, top: t.y + `%`, '--hue': e.hue },
              onClick: () => h(n),
              children: l === n ? `✓` : ``,
            },
            n,
          ),
        ),
      }),
      (0, w.jsxs)(`div`, { className: `pd-quiz-foot`, children: [`Punteggio: `, a] }),
    ],
  });
}
function ja({ scene: e, onBack: t, onPrev: n, onNext: r, prevScene: i, nextScene: a }) {
  let [o, s] = (0, S.useState)(`explore`),
    [c, l] = (0, S.useState)(!1);
  return (
    (0, S.useEffect)(() => {
      if (o !== `explore`) return;
      let e = (e) => {
        e.target.tagName === `INPUT` ||
          e.target.tagName === `TEXTAREA` ||
          (e.key === `ArrowLeft` && n(), e.key === `ArrowRight` && r());
      };
      return (window.addEventListener(`keydown`, e), () => window.removeEventListener(`keydown`, e));
    }, [o, n, r]),
    (0, w.jsxs)(`div`, {
      className: `pd-detail`,
      children: [
        (0, w.jsxs)(`button`, {
          className: `btn ghost sm pd-back`,
          onClick: t,
          children: [
            (0, w.jsxs)(`svg`, {
              width: `15`,
              height: `15`,
              viewBox: `0 0 24 24`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `1.8`,
              children: [
                (0, w.jsx)(`line`, { x1: `19`, y1: `12`, x2: `5`, y2: `12` }),
                (0, w.jsx)(`polyline`, { points: `12 19 5 12 12 5` }),
              ],
            }),
            `Tutti gli ambienti`,
          ],
        }),
        (0, w.jsxs)(`div`, {
          className: `pd-detail-head`,
          children: [
            (0, w.jsxs)(`div`, {
              children: [
                (0, w.jsx)(`h2`, { className: `pd-detail-title`, style: { color: e.hue }, children: e.title }),
                (0, w.jsxs)(`p`, { className: `pd-detail-en`, children: [e.en, ` · `, e.objects.length, ` parole`] }),
              ],
            }),
            (0, w.jsxs)(`div`, {
              className: `pd-mode-seg`,
              children: [
                (0, w.jsx)(`button`, {
                  className: o === `explore` ? `on` : ``,
                  onClick: () => s(`explore`),
                  children: `Esplora`,
                }),
                (0, w.jsx)(`button`, {
                  className: o === `quiz` ? `on` : ``,
                  onClick: () => s(`quiz`),
                  children: `Quiz`,
                }),
              ],
            }),
          ],
        }),
        o === `explore` &&
          (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(ka, { scene: e, showEn: c }),
              (0, w.jsxs)(`div`, {
                className: `pd-explore-foot`,
                children: [
                  (0, w.jsxs)(`label`, {
                    className: `pd-en-toggle`,
                    children: [
                      (0, w.jsx)(`input`, { type: `checkbox`, checked: c, onChange: (e) => l(e.target.checked) }),
                      `Mostra traduzione inglese`,
                    ],
                  }),
                  (0, w.jsx)(`span`, {
                    className: `pd-hint`,
                    children: `Tocca un'etichetta per ascoltare la pronuncia`,
                  }),
                ],
              }),
            ],
          }),
        o === `quiz` && (0, w.jsx)(Aa, { scene: e, onExit: () => s(`explore`) }),
        (0, w.jsxs)(`div`, {
          className: `pd-nav`,
          children: [
            (0, w.jsxs)(`button`, {
              className: `pd-nav-btn`,
              onClick: n,
              children: [
                (0, w.jsx)(`svg`, {
                  width: `15`,
                  height: `15`,
                  viewBox: `0 0 24 24`,
                  fill: `none`,
                  stroke: `currentColor`,
                  strokeWidth: `1.8`,
                  children: (0, w.jsx)(`polyline`, { points: `15 18 9 12 15 6` }),
                }),
                (0, w.jsxs)(`span`, {
                  className: `pd-nav-label`,
                  children: [
                    (0, w.jsx)(`span`, { className: `pd-nav-dir`, children: `Precedente` }),
                    (0, w.jsx)(`span`, { className: `pd-nav-title`, children: i.title }),
                  ],
                }),
              ],
            }),
            (0, w.jsxs)(`button`, {
              className: `pd-nav-btn next`,
              onClick: r,
              children: [
                (0, w.jsxs)(`span`, {
                  className: `pd-nav-label`,
                  children: [
                    (0, w.jsx)(`span`, { className: `pd-nav-dir`, children: `Successivo` }),
                    (0, w.jsx)(`span`, { className: `pd-nav-title`, children: a.title }),
                  ],
                }),
                (0, w.jsx)(`svg`, {
                  width: `15`,
                  height: `15`,
                  viewBox: `0 0 24 24`,
                  fill: `none`,
                  stroke: `currentColor`,
                  strokeWidth: `1.8`,
                  children: (0, w.jsx)(`polyline`, { points: `9 18 15 12 9 6` }),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function Ma() {
  let [e, t] = (0, S.useState)(null),
    n = Ea.find((t) => t.id === e);
  if (n) {
    let e = Ea.indexOf(n),
      r = Ea[(e - 1 + Ea.length) % Ea.length],
      i = Ea[(e + 1) % Ea.length];
    return (0, w.jsx)(`section`, {
      className: `card pd-shell`,
      children: (0, w.jsx)(
        ja,
        { scene: n, onBack: () => t(null), onPrev: () => t(r.id), onNext: () => t(i.id), prevScene: r, nextScene: i },
        n.id,
      ),
    });
  }
  return (0, w.jsxs)(`section`, {
    className: `card pd-shell`,
    children: [
      (0, w.jsx)(`h2`, { className: `sec-h`, children: `Vocabulary in Context` }),
      (0, w.jsx)(`p`, {
        className: `instr`,
        children: `Impara il nome italiano degli oggetti di ogni giorno. Scegli un ambiente, esplora le etichette, poi mettiti alla prova con il quiz.`,
      }),
      (0, w.jsx)(`div`, {
        className: `pd-grid`,
        children: Ea.map((e) =>
          (0, w.jsxs)(
            `button`,
            {
              className: `pd-card`,
              style: { '--hue': e.hue, '--tint': e.tint },
              onClick: () => t(e.id),
              children: [
                e.img
                  ? (0, w.jsx)(`img`, { className: `pd-card-thumb`, src: e.img, alt: e.title, loading: `lazy` })
                  : (0, w.jsx)(`div`, { className: `pd-card-thumb`, dangerouslySetInnerHTML: { __html: e.svg } }),
                (0, w.jsxs)(`div`, {
                  className: `pd-card-body`,
                  children: [
                    (0, w.jsx)(`div`, { className: `pd-card-title`, children: e.title }),
                    (0, w.jsxs)(`div`, {
                      className: `pd-card-meta`,
                      children: [e.en, ` · `, e.objects.length, ` parole`],
                    }),
                  ],
                }),
              ],
            },
            e.id,
          ),
        ),
      }),
    ],
  });
}
var Na = examSectionsData;
function Pa(e) {
  return Na.find((t) => t.id === e);
}
function Fa() {
  try {
    return JSON.parse(localStorage.getItem(`fc_streak`) || `{}`).count || 0;
  } catch {
    return 0;
  }
}
function Ia() {
  let e = Oi();
  if (!e.length) return null;
  let t = e.reduce((e, t) => e + t.attempts, 0),
    n = e.reduce((e, t) => e + t.best, 0) / e.length;
  return { attempts: t, avgBest: Math.round(n * 10) / 10, prompts: e.length };
}
function La() {
  let e = new Date().getDay(),
    t = Na[e % 4],
    n = [
      { tab: `flash`, label: `Flashcards — 10 parole nuove` },
      { tab: `scenes`, label: `Dizionario Visivo — un ambiente + quiz` },
      { tab: `phrases`, label: `Frasi utili — una categoria` },
      { tab: `exercises`, label: `Exercises — un blocco di grammatica` },
    ],
    r = n[e % n.length];
  return { focus: t, focusModule: t.modules[0], foundation: r };
}
function Ra({ onGo: e }) {
  let t = Fa(),
    n = Ia(),
    r = La();
  return (0, w.jsxs)(`div`, {
    className: `dash-shell`,
    children: [
      (0, w.jsxs)(`section`, {
        className: `card dash-hero`,
        children: [
          (0, w.jsxs)(`div`, {
            children: [
              (0, w.jsx)(`h2`, { className: `dash-title`, children: `Oggi` }),
              (0, w.jsx)(`p`, {
                className: `dash-sub`,
                children: `Il tuo percorso verso il CILS A2, un giorno alla volta.`,
              }),
            ],
          }),
          (0, w.jsxs)(`div`, {
            className: `dash-streak`,
            title: `Giorni consecutivi di studio`,
            children: [
              (0, w.jsx)(`span`, { className: `dash-streak-n`, children: t }),
              (0, w.jsx)(`span`, {
                className: `dash-streak-label`,
                children: t === 1 ? `giorno di fila` : `giorni di fila`,
              }),
            ],
          }),
        ],
      }),
      (0, w.jsxs)(`section`, {
        className: `card dash-plan`,
        children: [
          (0, w.jsx)(`div`, { className: `dash-section-label`, children: `Piano di oggi · ~15 minuti` }),
          (0, w.jsxs)(`div`, {
            className: `dash-plan-items`,
            children: [
              (0, w.jsxs)(`button`, {
                className: `dash-plan-item`,
                onClick: () => e(`daily`),
                children: [
                  (0, w.jsx)(`span`, { className: `dash-plan-num`, children: `1` }),
                  (0, w.jsx)(`span`, { className: `dash-plan-text`, children: `Daily Exam — il tuo check quotidiano` }),
                  (0, w.jsx)(`span`, { className: `dash-plan-go`, children: `→` }),
                ],
              }),
              (0, w.jsxs)(`button`, {
                className: `dash-plan-item`,
                onClick: () => e(r.focusModule.tab),
                children: [
                  (0, w.jsx)(`span`, { className: `dash-plan-num`, children: `2` }),
                  (0, w.jsxs)(`span`, {
                    className: `dash-plan-text`,
                    children: [
                      `Focus `,
                      (0, w.jsx)(`b`, { style: { color: r.focus.hue }, children: r.focus.label }),
                      ` — `,
                      r.focusModule.label,
                    ],
                  }),
                  (0, w.jsx)(`span`, { className: `dash-plan-go`, children: `→` }),
                ],
              }),
              (0, w.jsxs)(`button`, {
                className: `dash-plan-item`,
                onClick: () => e(r.foundation.tab),
                children: [
                  (0, w.jsx)(`span`, { className: `dash-plan-num`, children: `3` }),
                  (0, w.jsx)(`span`, { className: `dash-plan-text`, children: r.foundation.label }),
                  (0, w.jsx)(`span`, { className: `dash-plan-go`, children: `→` }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, w.jsx)(`div`, { className: `dash-section-label dash-papers-label`, children: `Le quattro prove` }),
      (0, w.jsx)(`div`, {
        className: `dash-papers`,
        children: Na.map((t) => {
          let r = t.id === `scrittura`;
          return (0, w.jsxs)(
            `button`,
            {
              className: `dash-paper`,
              style: { '--hue': t.hue, '--tint': t.tint },
              onClick: () => e(t.id),
              children: [
                (0, w.jsx)(`div`, { className: `dash-paper-name`, children: t.label }),
                (0, w.jsx)(`div`, { className: `dash-paper-en`, children: t.en }),
                r && n
                  ? (0, w.jsxs)(`div`, {
                      className: `dash-paper-stat`,
                      children: [
                        (0, w.jsxs)(`b`, { children: [n.avgBest, `/10`] }),
                        ` media · `,
                        n.attempts,
                        ` tentativ`,
                        n.attempts === 1 ? `o` : `i`,
                      ],
                    })
                  : (0, w.jsx)(`div`, {
                      className: `dash-paper-stat dash-paper-empty`,
                      children: `Inizia a esercitarti →`,
                    }),
              ],
            },
            t.id,
          );
        }),
      }),
    ],
  });
}
function za({ skillId: e, onGo: t }) {
  let n = Pa(e);
  return n
    ? (0, w.jsxs)(`section`, {
        className: `card sh-shell`,
        style: { '--sh-hue': n.hue, '--sh-tint': n.tint },
        children: [
          (0, w.jsx)(`div`, {
            className: `sh-head`,
            children: (0, w.jsx)(`p`, { className: `sh-desc`, children: n.desc }),
          }),
          (0, w.jsx)(`div`, { className: `sh-section-label`, children: `Esercitati` }),
          (0, w.jsx)(`div`, {
            className: `sh-modules`,
            children: n.modules.map((e) =>
              (0, w.jsxs)(
                `button`,
                {
                  className: `sh-module`,
                  onClick: () => t(e.tab),
                  children: [
                    (0, w.jsx)(`div`, { className: `sh-module-name`, children: e.label }),
                    (0, w.jsx)(`div`, { className: `sh-module-desc`, children: e.desc }),
                    (0, w.jsx)(`span`, { className: `sh-module-go`, children: `Inizia →` }),
                  ],
                },
                e.tab + e.label,
              ),
            ),
          }),
          (0, w.jsx)(`div`, { className: `sh-section-label`, children: `Fondamenta consigliate` }),
          (0, w.jsx)(`div`, {
            className: `sh-foundations`,
            children: n.foundations.map((e) =>
              (0, w.jsxs)(
                `button`,
                {
                  className: `sh-foundation`,
                  onClick: () => t(e.tab),
                  children: [
                    (0, w.jsx)(`span`, { className: `sh-foundation-name`, children: e.label }),
                    (0, w.jsx)(`span`, { className: `sh-foundation-why`, children: e.why }),
                  ],
                },
                e.tab + e.label,
              ),
            ),
          }),
          n.resources?.length > 0 &&
            (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsx)(`div`, { className: `sh-section-label`, children: `Video consigliati` }),
                (0, w.jsx)(`div`, {
                  className: `sh-foundations`,
                  children: n.resources.map((e) =>
                    (0, w.jsxs)(
                      `a`,
                      {
                        className: `sh-foundation sh-resource`,
                        href: e.url,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        children: [
                          (0, w.jsx)(`span`, { className: `sh-foundation-name`, children: e.label }),
                          (0, w.jsx)(`span`, { className: `sh-foundation-why`, children: e.why }),
                          (0, w.jsxs)(`svg`, {
                            className: `sh-ext`,
                            width: `13`,
                            height: `13`,
                            viewBox: `0 0 24 24`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: `2`,
                            children: [
                              (0, w.jsx)(`path`, { d: `M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6` }),
                              (0, w.jsx)(`polyline`, { points: `15 3 21 3 21 9` }),
                              (0, w.jsx)(`line`, { x1: `10`, y1: `14`, x2: `21`, y2: `3` }),
                            ],
                          }),
                        ],
                      },
                      e.url,
                    ),
                  ),
                }),
              ],
            }),
        ],
      })
    : null;
}
var Ba = ``,
  Va = `https://api.mistral.ai/v1/chat/completions`;
function Ha() {
  return !!Ba;
}
var Ua = examinerScenariosData,
  Wa = 7;
function Ga(e) {
  return `Sei ${e.persona.name}, cioè ${e.examinerRole}, in un role-play dell'esame orale CILS A2 (livello A2 QCER, modulo integrazione). L'utente interpreta questo ruolo: "${e.you}" (${e.userRole}).

REGOLE FERREE:
- Resta SEMPRE nel personaggio di ${e.persona.name}. Non dire MAI di essere un'intelligenza artificiale o un esaminatore: sei il personaggio della scena.
- Parla SOLO italiano. Livello A2: frasi corte e chiare, lessico quotidiano, presente/passato prossimo. Niente congiuntivo, niente frasi lunghe.
${e.lead === `user` ? `- IN QUESTA SCENA È L'UTENTE CHE FA LE DOMANDE (come all'esame CILS quando il candidato deve chiedere informazioni). Tu sei chi RISPONDE: risposte brevi, concrete e realistiche (max 2 frasi), e NON trasformare la scena in un'intervista. Se l'utente si blocca o resta vago, invitalo gentilmente a chiedere ("Mi dica pure", "Vuole sapere altro?").` : `- Una sola domanda o battuta per turno. Massimo 2 frasi per risposta.`}
- Se l'utente non capisce o risponde in modo confuso, riformula più semplicemente. Non correggere gli errori durante la conversazione.
- Se l'utente fa errori, capisci comunque l'intenzione e prosegui naturalmente nella scena.
- Dopo circa ${Wa} scambi, concludi gentilmente la conversazione (saluta o ringrazia), sempre nel personaggio.
- Non usare emoji, non uscire mai dal personaggio, non parlare inglese.`;
}
function Ka(e) {
  return e
    .replace(/^```json\s*/i, ``)
    .replace(/^```\s*/i, ``)
    .replace(/```\s*$/i, ``)
    .trim();
}
async function qa(e, t = 0.6) {
  let n = await fetch(Va, {
    method: `POST`,
    headers: { Authorization: `Bearer ${Ba}`, 'Content-Type': `application/json` },
    body: JSON.stringify({ model: `mistral-small-latest`, messages: e, temperature: t }),
  });
  if (!n.ok) throw Error(n.status === 429 ? `rate-limit` : `api-error`);
  return (await n.json())?.choices?.[0]?.message?.content ?? ``;
}
async function Ja(e, t) {
  return (
    await qa([
      { role: `system`, content: Ga(e) },
      ...t.map((e) => ({ role: e.role === `examiner` ? `assistant` : `user`, content: e.text })),
    ])
  ).trim();
}
async function Ya(e, t) {
  let n = t.map((t) => (t.role === `examiner` ? e.persona.name + `: ` : `Candidato: `) + t.text).join(`
`),
    r = await qa(
      [
        {
          role: `user`,
          content: `You are a CILS A2 oral examiner. Below is the transcript of a roleplay ("${e.label}" — ${e.desc}). The candidate was playing this role: "${e.you}". The other speaker (${e.persona.name}) is the character, not the candidate. Evaluate ONLY the candidate's turns against the CEFR A2 speaking standard (interact in simple routine tasks, exchange direct information, basic sentence patterns).

This is a spoken transcript (speech-to-text): IGNORE punctuation, accents and capitalisation — judge the ITALIAN itself. Grade REALISTICALLY and holistically, as a real CILS A2 examiner would: A2 is elementary and errors are EXPECTED and TOLERATED. What matters most is whether the candidate kept the conversation going, understood the questions, and got their meaning across. A candidate who interacts and is understandable PASSES, even with several grammar mistakes. Only lower the score substantially for frequent meaning-blocking errors, one-word answers, or ignoring the character's questions. Do NOT be a perfectionist about small slips.
${
  e.lead === `user`
    ? `
IMPORTANT: in this roleplay the CANDIDATE was supposed to ASK the questions and drive the conversation (a CILS "chiedere informazioni" task). Score "interazione" mainly on whether they asked clear, polite questions, followed up on the answers, and got the information they needed. Not asking questions at all is the main failure mode here.`
    : ``
}

Transcript:
"""
${n}
"""

Give a COMPREHENSIVE review: go through EVERY candidate turn, and for each one say if it was good, weak, or wrong — and give the corrected/better version. Also spot where the candidate went blank, gave a too-short answer, ignored the question, or made grammar/vocabulary mistakes.

Respond ONLY with valid JSON (no markdown fences):
{
  "scores": {
    "comprensione": <1-5, did they understand and answer what was asked>,
    "lessico": <1-5, vocabulary range for A2>,
    "grammatica": <1-5, grammatical control expected at A2 — some errors are normal (ignore accents/punctuation — spoken)>,
    "interazione": <1-5, did they keep the conversation going, ask back, use polite forms>
  },
  "verdict": "<one sentence: would this pass the A2 oral? honest but encouraging>",
  "turns": [
    {
      "question": "<the character's question this turn>",
      "said": "<exactly what the candidate answered>",
      "rating": "good" | "weak" | "error" | "blank",   // good = fine or minor A2 slips; weak = understandable but improvable; error = ONLY if broken/unclear; blank = nothing/one-word/off-topic

      "better": "<a natural, correct A2 answer they could have given — always provide one, even if theirs was good (show a richer version)>",
      "note": "<short English explanation: what was missing/wrong, or why it worked>"
    }
  ],
  "strengths": ["<short specific point>", "..."],
  "retryFocus": "<one concrete thing to focus on when redoing this roleplay>"
}
Rules: include one entry in "turns" for EVERY candidate answer in order; base everything on the actual transcript; keep notes short and beginner-friendly in English, with Italian examples. If the candidate said nothing or gave a one-word/off-topic reply, mark it "blank" and still give a full "better" answer.`,
        },
      ],
      0.3,
    );
  return JSON.parse(Ka(r));
}
function Xa({ emoji: e, accent: t = `#2E6B5E`, size: n = 44, state: r = `idle` }) {
  return (0, w.jsxs)(`span`, {
    className: `pa pa-` + r,
    style: { '--pa-accent': t, width: n, height: n, fontSize: Math.round(n * 0.5) },
    'aria-hidden': `true`,
    children: [
      (0, w.jsx)(`span`, { className: `pa-ring` }),
      (0, w.jsx)(`span`, { className: `pa-face` }),
      r === `thinking` &&
        (0, w.jsxs)(`span`, {
          className: `pa-dots`,
          children: [(0, w.jsx)(`i`, {}), (0, w.jsx)(`i`, {}), (0, w.jsx)(`i`, {})],
        }),
    ],
  });
}
var Za = { comprensione: `Comprensione`, lessico: `Lessico`, grammatica: `Grammatica`, interazione: `Interazione` };
function Qa({ n: e }) {
  return (0, w.jsx)(`span`, {
    className: `es-dots`,
    children: [1, 2, 3, 4, 5].map((t) => (0, w.jsx)(`span`, { className: `es-dot` + (t <= e ? ` full` : ``) }, t)),
  });
}
var $a = { emoji: `👩`, accent: `#1E6B4F` };
function eo({ scenario: e, onExit: t }) {
  let [n, r] = (0, S.useState)([{ role: `examiner`, text: e.opening }]),
    [i, a] = (0, S.useState)(`talk`),
    [o, s] = (0, S.useState)(!1),
    [c, l] = (0, S.useState)(``),
    [u, d] = (0, S.useState)(``),
    [f, p] = (0, S.useState)(!1),
    [m, h] = (0, S.useState)(!1),
    [g, _] = (0, S.useState)(null),
    [v, y] = (0, S.useState)(``),
    b = (0, S.useRef)(null),
    x = (0, S.useRef)(null),
    C = e.persona;
  async function T(e) {
    k() && (p(!0), await j(e), p(!1));
  }
  ((0, S.useEffect)(() => (T(e.opening), () => M()), []),
    (0, S.useEffect)(() => {
      x.current?.scrollIntoView({ behavior: `smooth`, block: `end` });
    }, [n, c, i]));
  let ee = n.filter((e) => e.role === `user`).length;
  async function E(t) {
    let o = t.trim();
    if (!o || i !== `talk`) return;
    M();
    let s = [...n, { role: `user`, text: o }];
    (r(s), d(``), l(``), a(`thinking`));
    try {
      let t = await Ja(e, s);
      (r((e) => [...e, { role: `examiner`, text: t }]), a(`talk`), T(t));
    } catch (e) {
      (y(
        e.message === `rate-limit`
          ? `Troppe richieste — aspetta qualche secondo e riprova.`
          : `Errore di rete con l'esaminatore. Riprova.`,
      ),
        a(`error`));
    }
  }
  let D = () => {
    if (o) {
      (b.current?.stop(), s(!1));
      return;
    }
    let e = be({
      lang: `it-IT`,
      onUpdate: (e) => l(e),
      onEnd: (e) => {
        (s(!1), e.trim() ? E(e) : l(``));
      },
    });
    e && ((b.current = e), l(``), s(!0), e.start());
  };
  async function te() {
    (M(), b.current?.stop(), a(`evaluating`));
    try {
      let t = await Ya(e, n);
      if ((_(t), a(`done`), t?.scores)) {
        let n = Object.values(t.scores),
          r = Math.round((n.reduce((e, t) => e + t, 0) / n.length) * 2);
        At({ section: `conversazione`, taskId: e.id, score: r });
      }
    } catch {
      (y(`Valutazione non riuscita — riprova.`), a(`error`));
    }
  }
  if (i === `done` && g)
    return (
      Object.values(g.scores).reduce((e, t) => e + t, 0) / 4,
      (0, w.jsxs)(`div`, {
        className: `es-eval`,
        children: [
          (0, w.jsxs)(`div`, {
            className: `es-eval-head`,
            children: [
              (0, w.jsxs)(`h3`, { className: `es-eval-title`, children: [`Valutazione — `, e.label] }),
              (0, w.jsx)(`div`, { className: `es-eval-verdict`, children: g.verdict }),
            ],
          }),
          (0, w.jsx)(`div`, {
            className: `es-scores`,
            children: Object.entries(g.scores).map(([e, t]) =>
              (0, w.jsxs)(
                `div`,
                {
                  className: `es-score-row`,
                  children: [
                    (0, w.jsx)(`span`, { className: `es-score-label`, children: Za[e] || e }),
                    (0, w.jsx)(Qa, { n: t }),
                  ],
                },
                e,
              ),
            ),
          }),
          g.strengths?.length > 0 &&
            (0, w.jsxs)(`div`, {
              className: `es-block`,
              children: [
                (0, w.jsx)(`div`, { className: `es-block-label`, children: `Punti di forza` }),
                (0, w.jsx)(`ul`, {
                  className: `es-list`,
                  children: g.strengths.map((e, t) => (0, w.jsx)(`li`, { children: e }, t)),
                }),
              ],
            }),
          g.turns?.length > 0 &&
            (0, w.jsxs)(`div`, {
              className: `es-block`,
              children: [
                (0, w.jsx)(`div`, { className: `es-block-label`, children: `Analisi risposta per risposta` }),
                g.turns.map((e, t) =>
                  (0, w.jsxs)(
                    `div`,
                    {
                      className: `es-turn r-` + (e.rating || `weak`),
                      children: [
                        (0, w.jsxs)(`div`, {
                          className: `es-turn-head`,
                          children: [
                            (0, w.jsx)(`span`, {
                              className: `es-turn-badge ` + (e.rating || `weak`),
                              children:
                                e.rating === `good`
                                  ? `Bene`
                                  : e.rating === `blank`
                                    ? `Vuoto`
                                    : e.rating === `error`
                                      ? `Errore`
                                      : `Debole`,
                            }),
                            e.question &&
                              (0, w.jsxs)(`span`, { className: `es-turn-q`, children: [`D: `, e.question] }),
                          ],
                        }),
                        (0, w.jsx)(`div`, {
                          className: `es-turn-said`,
                          children:
                            e.said && e.rating !== `blank`
                              ? (0, w.jsxs)(w.Fragment, {
                                  children: [
                                    (0, w.jsx)(`span`, { className: `es-turn-lbl`, children: `Hai detto:` }),
                                    ` `,
                                    e.said,
                                  ],
                                })
                              : (0, w.jsx)(`span`, {
                                  className: `es-turn-blank`,
                                  children: `Nessuna risposta / risposta troppo breve`,
                                }),
                        }),
                        (0, w.jsxs)(`div`, {
                          className: `es-turn-better`,
                          children: [
                            (0, w.jsx)(`span`, { className: `es-turn-lbl`, children: `Meglio:` }),
                            ` `,
                            e.better,
                          ],
                        }),
                        e.note && (0, w.jsx)(`div`, { className: `es-turn-note`, children: e.note }),
                      ],
                    },
                    t,
                  ),
                ),
              ],
            }),
          g.retryFocus &&
            (0, w.jsxs)(`div`, {
              className: `es-retry-focus`,
              children: [(0, w.jsx)(`b`, { children: `Quando riprovi, concentrati su:` }), ` `, g.retryFocus],
            }),
          (0, w.jsxs)(`div`, {
            className: `es-eval-actions`,
            children: [
              (0, w.jsx)(`button`, { className: `btn ghost`, onClick: t, children: `Altri scenari` }),
              (0, w.jsx)(`button`, {
                className: `btn primary`,
                onClick: () => {
                  (r([{ role: `examiner`, text: e.opening }]), _(null), a(`talk`), T(e.opening));
                },
                children: `Rifai l'esercizio`,
              }),
            ],
          }),
        ],
      })
    );
  let ne = i === `thinking` ? `thinking` : f ? `speaking` : o ? `listening` : `idle`,
    re = e.scene ? `/PM-Side-Projects/cils-app/img/scenes/${e.scene}` : null;
  return (0, w.jsxs)(`div`, {
    className: `es-session` + (re ? ` has-scene` : ``),
    style: { '--es-accent': e.accent, '--es-scene': re ? `url(${re})` : `none` },
    children: [
      (0, w.jsxs)(`div`, {
        className: `es-sess-head`,
        children: [
          (0, w.jsx)(`button`, {
            className: `btn ghost sm`,
            onClick: () => {
              (M(), t());
            },
            children: `Scenari`,
          }),
          (0, w.jsxs)(`div`, {
            className: `es-sess-persona`,
            children: [
              (0, w.jsx)(Xa, { emoji: C.emoji, accent: e.accent, state: ne, size: 64 }),
              (0, w.jsxs)(`div`, {
                className: `es-sess-title`,
                children: [
                  (0, w.jsx)(`b`, { children: C.name }),
                  (0, w.jsxs)(`span`, { className: `es-sess-desc`, children: [e.label, ` · `, e.en] }),
                ],
              }),
            ],
          }),
          (0, w.jsx)(`button`, {
            className: `es-listen-toggle` + (m ? ` on` : ``),
            onClick: () => h((e) => !e),
            title: `Nascondi il testo e ascolta soltanto, come all'esame`,
            children: m ? `Mostra il testo` : `Solo ascolto`,
          }),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `es-brief`,
        children: [
          (0, w.jsxs)(`span`, {
            className: `es-brief-role`,
            children: [
              (0, w.jsx)(`span`, { className: `es-brief-lbl`, children: `Il tuo ruolo` }),
              (0, w.jsx)(Xa, { emoji: $a.emoji, accent: $a.accent, size: 26 }),
              e.you,
            ],
          }),
          e.lead === `user` &&
            (0, w.jsxs)(`span`, {
              className: `lead-badge`,
              children: [`Qui fai TU le domande — `, C.name, ` risponde`],
            }),
          (0, w.jsxs)(`span`, {
            className: `es-brief-with`,
            children: [`Parli con `, (0, w.jsx)(`b`, { children: C.name })],
          }),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `es-chat`,
        children: [
          n.map((t, r) => {
            let i = r === n.length - 1,
              a = t.role === `examiner`;
            return (0, w.jsxs)(
              `div`,
              {
                className: `es-row ` + t.role,
                children: [
                  a &&
                    (0, w.jsx)(Xa, { emoji: C.emoji, accent: e.accent, state: i && f ? `speaking` : `idle`, size: 40 }),
                  (0, w.jsxs)(`div`, {
                    className: `es-msg ` + t.role + (m ? ` hidden-text` : ``),
                    children: [
                      a &&
                        (0, w.jsx)(`button`, {
                          className: `es-replay`,
                          title: `Riascolta`,
                          'aria-label': `Riascolta`,
                          onClick: () => {
                            (M(), T(t.text));
                          },
                          disabled: !k(),
                          children: (0, w.jsx)(`svg`, {
                            width: `13`,
                            height: `13`,
                            viewBox: `0 0 24 24`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: `2`,
                            children: (0, w.jsx)(`polygon`, { points: `11 5 6 9 2 9 2 15 6 15 11 19 11 5` }),
                          }),
                        }),
                      m
                        ? (0, w.jsx)(`span`, {
                            className: `es-msg-hidden`,
                            children: a ? `tocca per riascoltare` : `tu`,
                          })
                        : (0, w.jsx)(`span`, { children: t.text }),
                    ],
                  }),
                  !a && (0, w.jsx)(Xa, { emoji: $a.emoji, accent: $a.accent, state: `idle`, size: 40 }),
                ],
              },
              r,
            );
          }),
          o &&
            c &&
            (0, w.jsxs)(`div`, {
              className: `es-row user`,
              children: [
                (0, w.jsx)(`div`, { className: `es-msg user interim`, children: m ? `…` : c }),
                (0, w.jsx)(Xa, { emoji: $a.emoji, accent: $a.accent, state: `listening`, size: 40 }),
              ],
            }),
          i === `thinking` &&
            (0, w.jsxs)(`div`, {
              className: `es-row examiner`,
              children: [
                (0, w.jsx)(Xa, { emoji: C.emoji, accent: e.accent, state: `thinking`, size: 40 }),
                (0, w.jsx)(`div`, { className: `es-msg examiner thinking`, children: `…` }),
              ],
            }),
          i === `evaluating` &&
            (0, w.jsx)(`div`, { className: `es-msg examiner thinking`, children: `Valutazione in corso…` }),
          i === `error` &&
            (0, w.jsxs)(`div`, {
              className: `es-error`,
              children: [
                v,
                ` `,
                (0, w.jsx)(`button`, { className: `btn ghost sm`, onClick: () => a(`talk`), children: `OK` }),
              ],
            }),
          (0, w.jsx)(`div`, { ref: x }),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `es-controls`,
        children: [
          ye()
            ? (0, w.jsxs)(`button`, {
                className: `es-mic` + (o ? ` on` : ``),
                onClick: D,
                disabled: i !== `talk`,
                children: [
                  (0, w.jsxs)(`svg`, {
                    width: `22`,
                    height: `22`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `1.8`,
                    children: [
                      (0, w.jsx)(`path`, { d: `M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z` }),
                      (0, w.jsx)(`path`, { d: `M19 10v2a7 7 0 0 1-14 0v-2` }),
                      (0, w.jsx)(`line`, { x1: `12`, y1: `19`, x2: `12`, y2: `23` }),
                      (0, w.jsx)(`line`, { x1: `8`, y1: `23`, x2: `16`, y2: `23` }),
                    ],
                  }),
                  o ? `Sto ascoltando… (tocca per finire)` : `Tocca e parla`,
                ],
              })
            : (0, w.jsxs)(`div`, {
                className: `es-typed`,
                children: [
                  (0, w.jsx)(`input`, {
                    value: u,
                    onChange: (e) => d(e.target.value),
                    onKeyDown: (e) => e.key === `Enter` && E(u),
                    placeholder: `Scrivi la tua risposta in italiano…`,
                  }),
                  (0, w.jsx)(`button`, {
                    className: `btn primary sm`,
                    onClick: () => E(u),
                    disabled: i !== `talk`,
                    children: `Invia`,
                  }),
                ],
              }),
          (0, w.jsx)(`button`, {
            className: `btn ghost`,
            onClick: te,
            disabled: ee < 2 || i === `thinking` || i === `evaluating`,
            children: `Termina e valuta`,
          }),
        ],
      }),
      (0, w.jsx)(`div`, {
        className: `es-hint-row`,
        children: `Rispondi a voce, poi l'esaminatore continua. Dopo almeno 2 risposte puoi terminare e ricevere la valutazione.`,
      }),
    ],
  });
}
function to() {
  let [e, t] = (0, S.useState)(null),
    n = Ua.find((t) => t.id === e);
  return Ha()
    ? (0, w.jsx)(`section`, {
        className: `card es-shell`,
        children: n
          ? (0, w.jsx)(eo, { scenario: n, onExit: () => t(null) }, n.id + Date.now())
          : (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsx)(`h2`, { className: `sec-h`, children: `Role-play Orale` }),
                (0, w.jsx)(`p`, {
                  className: `instr`,
                  children: `Come nella prova orale CILS: scegli una situazione, parla con l'esaminatore a voce, e alla fine ricevi una valutazione con consigli per migliorare.`,
                }),
                (0, w.jsx)(`div`, {
                  className: `es-grid`,
                  children: Ua.map((e) =>
                    (0, w.jsxs)(
                      `button`,
                      {
                        className: `es-card`,
                        style: { '--es-accent': e.accent },
                        onClick: () => t(e.id),
                        children: [
                          (0, w.jsxs)(`div`, {
                            className: `es-card-top`,
                            children: [
                              (0, w.jsx)(Xa, { emoji: e.persona.emoji, accent: e.accent, size: 50 }),
                              (0, w.jsxs)(`div`, {
                                children: [
                                  (0, w.jsx)(`div`, { className: `es-card-title`, children: e.label }),
                                  (0, w.jsx)(`div`, { className: `es-card-en`, children: e.en }),
                                ],
                              }),
                            ],
                          }),
                          (0, w.jsxs)(`div`, {
                            className: `es-card-persona`,
                            children: [`Parli con `, (0, w.jsx)(`b`, { children: e.persona.name })],
                          }),
                          (0, w.jsxs)(`div`, {
                            className: `es-card-you`,
                            children: [
                              (0, w.jsx)(`span`, { className: `es-card-you-lbl`, children: `Tu:` }),
                              ` `,
                              e.you,
                            ],
                          }),
                          (e.lead === `user` || e.freq || e.seen) &&
                            (0, w.jsxs)(`div`, {
                              className: `es-card-badges`,
                              children: [
                                e.lead === `user` &&
                                  (0, w.jsx)(`span`, { className: `lead-badge`, children: `Fai TU le domande` }),
                                e.seen
                                  ? (0, w.jsxs)(`span`, {
                                      className: `freq-badge hi`,
                                      children: [`Uscito in `, e.seen, ` esami campione`],
                                    })
                                  : e.freq >= 3
                                    ? (0, w.jsx)(`span`, {
                                        className: `freq-badge hi`,
                                        children: `Molto frequente all'esame`,
                                      })
                                    : e.freq === 2
                                      ? (0, w.jsx)(`span`, { className: `freq-badge`, children: `Frequente all'esame` })
                                      : null,
                              ],
                            }),
                          (0, w.jsx)(`span`, { className: `es-card-go`, children: `Inizia la conversazione →` }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            }),
      })
    : (0, w.jsxs)(`section`, {
        className: `card`,
        children: [
          (0, w.jsx)(`h2`, { className: `sec-h`, children: `Esaminatore AI` }),
          (0, w.jsx)(`p`, {
            className: `instr`,
            children: `Questa funzione richiede la chiave API Mistral (non presente in questa build).`,
          }),
        ],
      });
}
var no = listeningPracticeData,
  ro = { dialogo: `Dialogo`, annuncio: `Annuncio`, messaggio: `Messaggio` },
  io = { dialogo: `#2E7D8A`, annuncio: `#C9603A`, messaggio: `#7A5A8E` },
  ao = [
    { v: 0.8, l: `Lento` },
    { v: 0.92, l: `Normale` },
    { v: 1, l: `Esame` },
  ];
function oo({ item: e, onBack: t, onPrev: n, onNext: r }) {
  let [i, a] = (0, S.useState)(!1),
    [o, s] = (0, S.useState)(0),
    [c, l] = (0, S.useState)({}),
    [u, d] = (0, S.useState)(!1),
    [f, p] = (0, S.useState)(!1),
    [m, h] = (0, S.useState)(0.92),
    g = io[e.type];
  async function _() {
    if (i || !k()) return;
    M();
    let t = _e();
    a(!0);
    let [n, r] = de();
    for (let i of e.lines) {
      if (t !== _e()) break;
      let e =
        i.s === `B`
          ? { rate: m, voice: r.voice, pitch: r.pitch }
          : i.s === `A`
            ? { rate: m, voice: n.voice, pitch: n.pitch }
            : { rate: m };
      (await j(i.it, e), await A(i.s === `V` ? 250 : 450));
    }
    (a(!1), s((e) => e + 1));
  }
  let v = () => {
      (M(), a(!1));
    },
    y = (e, t) => {
      u || l((n) => ({ ...n, [e]: t }));
    },
    b = e.questions.every((e, t) => c[t] !== void 0),
    x = e.questions.filter((e, t) => c[t] === e.a).length;
  return (0, w.jsxs)(`div`, {
    className: `ap-card`,
    children: [
      (0, w.jsxs)(`button`, {
        className: `btn ghost sm`,
        onClick: () => {
          (v(), t());
        },
        children: [
          (0, w.jsxs)(`svg`, {
            width: `15`,
            height: `15`,
            viewBox: `0 0 24 24`,
            fill: `none`,
            stroke: `currentColor`,
            strokeWidth: `1.8`,
            children: [
              (0, w.jsx)(`line`, { x1: `19`, y1: `12`, x2: `5`, y2: `12` }),
              (0, w.jsx)(`polyline`, { points: `12 19 5 12 12 5` }),
            ],
          }),
          `Tutti gli ascolti`,
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `ap-head`,
        children: [
          (0, w.jsxs)(`span`, { className: `ap-type`, style: { background: g }, children: [e.emoji, ` `, ro[e.type]] }),
          (0, w.jsx)(`h2`, { className: `ap-title`, children: e.title }),
          (0, w.jsx)(`p`, { className: `ap-context`, children: e.context }),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `ap-player`,
        style: { '--c': g },
        children: [
          (0, w.jsx)(`button`, {
            className: `ap-play` + (i ? ` on` : ``),
            onClick: i ? v : _,
            disabled: !k(),
            children: i
              ? (0, w.jsxs)(w.Fragment, {
                  children: [
                    (0, w.jsxs)(`span`, {
                      className: `ap-eq`,
                      children: [(0, w.jsx)(`i`, {}), (0, w.jsx)(`i`, {}), (0, w.jsx)(`i`, {})],
                    }),
                    ` In riproduzione…`,
                  ],
                })
              : (0, w.jsxs)(w.Fragment, { children: [`▶ `, o === 0 ? `Ascolta` : `Riascolta`] }),
          }),
          (0, w.jsx)(`div`, {
            className: `ap-speed`,
            children: ao.map((e) =>
              (0, w.jsx)(`button`, { className: m === e.v ? `on` : ``, onClick: () => h(e.v), children: e.l }, e.v),
            ),
          }),
          o > 0 && (0, w.jsxs)(`span`, { className: `ap-count`, children: [`ascoltato `, o, `×`] }),
        ],
      }),
      k() &&
        !fe() &&
        (0, w.jsx)(`div`, {
          className: `ap-warn`,
          children: `⚠ Nessuna voce italiana installata — su Chrome funziona meglio.`,
        }),
      (0, w.jsx)(`p`, {
        className: `ap-tip-play`,
        children: `Ascolta almeno una volta prima di rispondere. Puoi riascoltare quante volte vuoi.`,
      }),
      (0, w.jsx)(`div`, {
        className: `ap-questions`,
        children: e.questions.map((e, t) =>
          (0, w.jsxs)(
            `div`,
            {
              className: `ap-q`,
              children: [
                (0, w.jsxs)(`div`, { className: `ap-q-text`, children: [t + 1, `. `, e.q] }),
                (0, w.jsx)(`div`, {
                  className: `ap-opts`,
                  children: e.opts.map((n, r) => {
                    let i = `ap-opt`;
                    return (
                      u && r === e.a
                        ? (i += ` correct`)
                        : u && c[t] === r && r !== e.a
                          ? (i += ` wrong`)
                          : c[t] === r && (i += ` chosen`),
                      (0, w.jsxs)(
                        `button`,
                        {
                          className: i,
                          disabled: u,
                          onClick: () => y(t, r),
                          children: [
                            (0, w.jsx)(`span`, { className: `ap-opt-letter`, children: String.fromCharCode(65 + r) }),
                            n,
                          ],
                        },
                        r,
                      )
                    );
                  }),
                }),
              ],
            },
            t,
          ),
        ),
      }),
      (0, w.jsx)(`div`, {
        className: `ap-actions`,
        children: u
          ? (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsxs)(`div`, {
                  className: `ap-score`,
                  style: { color: x === e.questions.length ? `#1E6B4F` : `#C99A2E` },
                  children: [x, `/`, e.questions.length, ` corrette`],
                }),
                (0, w.jsx)(`button`, {
                  className: `btn ghost sm`,
                  onClick: () => {
                    (l({}), d(!1));
                  },
                  children: `Riprova`,
                }),
                (0, w.jsx)(`button`, {
                  className: `btn ghost sm`,
                  onClick: () => p((e) => !e),
                  children: f ? `Nascondi testo` : `📄 Mostra il testo`,
                }),
              ],
            })
          : (0, w.jsx)(`button`, {
              className: `btn primary`,
              disabled: !b || o === 0,
              onClick: () => {
                (d(!0), At({ section: `ascolto`, taskId: e.id, score: x, max: e.questions.length }));
              },
              children: `Controlla le risposte ✓`,
            }),
      }),
      u &&
        f &&
        (0, w.jsx)(`div`, {
          className: `ap-script`,
          children: e.lines.map((e, t) =>
            (0, w.jsxs)(
              `div`,
              {
                className: `ap-script-line`,
                children: [
                  e.s !== `V` &&
                    (0, w.jsx)(`span`, {
                      className: `ap-script-spk`,
                      style: { color: g },
                      children: e.s === `A` ? `🗣️` : `🧑`,
                    }),
                  (0, w.jsx)(`span`, { children: e.it }),
                ],
              },
              t,
            ),
          ),
        }),
      (0, w.jsxs)(`div`, {
        className: `pd-nav`,
        children: [
          (0, w.jsxs)(`button`, {
            className: `pd-nav-btn`,
            onClick: () => {
              (v(), n());
            },
            children: [
              (0, w.jsx)(`svg`, {
                width: `15`,
                height: `15`,
                viewBox: `0 0 24 24`,
                fill: `none`,
                stroke: `currentColor`,
                strokeWidth: `1.8`,
                children: (0, w.jsx)(`polyline`, { points: `15 18 9 12 15 6` }),
              }),
              (0, w.jsx)(`span`, {
                className: `pd-nav-label`,
                children: (0, w.jsx)(`span`, { className: `pd-nav-dir`, children: `Precedente` }),
              }),
            ],
          }),
          (0, w.jsxs)(`button`, {
            className: `pd-nav-btn next`,
            onClick: () => {
              (v(), r());
            },
            children: [
              (0, w.jsx)(`span`, {
                className: `pd-nav-label`,
                children: (0, w.jsx)(`span`, { className: `pd-nav-dir`, children: `Successivo` }),
              }),
              (0, w.jsx)(`svg`, {
                width: `15`,
                height: `15`,
                viewBox: `0 0 24 24`,
                fill: `none`,
                stroke: `currentColor`,
                strokeWidth: `1.8`,
                children: (0, w.jsx)(`polyline`, { points: `9 18 15 12 9 6` }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function so() {
  let [e, t] = (0, S.useState)(null);
  if (e !== null) {
    let n = no[e];
    return (0, w.jsx)(`section`, {
      className: `card ap-shell`,
      children: (0, w.jsx)(
        oo,
        {
          item: n,
          onBack: () => t(null),
          onPrev: () => t((e - 1 + no.length) % no.length),
          onNext: () => t((e + 1) % no.length),
        },
        n.id,
      ),
    });
  }
  return (0, w.jsxs)(`section`, {
    className: `card ap-shell`,
    children: [
      (0, w.jsx)(`h2`, { className: `sec-h`, children: `Ascolto — Comprensione` }),
      (0, w.jsxs)(`p`, {
        className: `instr`,
        children: [
          `Come nella prova d'ascolto CILS: ascolti un dialogo, un annuncio o un messaggio in italiano, poi rispondi alle domande. I dialoghi hanno `,
          (0, w.jsx)(`strong`, { children: `due voci diverse` }),
          `, come all'esame vero. Usa Chrome per l'audio migliore.`,
        ],
      }),
      (0, w.jsx)(`div`, {
        className: `ap-grid`,
        children: no.map((e, n) =>
          (0, w.jsxs)(
            `button`,
            {
              className: `ap-item`,
              style: { '--c': io[e.type] },
              onClick: () => t(n),
              children: [
                (0, w.jsxs)(`div`, {
                  className: `ap-item-top`,
                  children: [
                    (0, w.jsx)(`span`, { className: `ap-item-emoji`, children: e.emoji }),
                    (0, w.jsx)(`span`, { className: `ap-item-type`, children: ro[e.type] }),
                  ],
                }),
                (0, w.jsx)(`div`, { className: `ap-item-title`, children: e.title }),
                (0, w.jsxs)(`div`, { className: `ap-item-meta`, children: [e.questions.length, ` domande`] }),
                (0, w.jsx)(`span`, { className: `ap-item-go`, children: `▶ Ascolta →` }),
              ],
            },
            e.id,
          ),
        ),
      }),
    ],
  });
}
var co = c({
    CLOZE: () => fo,
    L1: () => lo,
    L2: () => uo,
    MATCH: () => po,
    PARK_SVG: () => L,
    WRITE_MODELS: () => ho,
    WRITE_MSGS: () => mo,
    spokenL1: () => R,
  }),
  lo = practiceTest2ListeningDialoguesData,
  uo = practiceTest2ListeningStatementsData,
  fo = practiceTest2ClozeData,
  po = practiceTest2MatchingData,
  L = `<svg viewBox="0 0 600 230" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Una cucina moderna con tavolo, frutta, donna che cucina">
<rect width="600" height="230" fill="#f5f0e8"/>
<rect x="0" y="160" width="600" height="70" fill="#d4c4a0"/>
<!-- cabinets -->
<rect x="30" y="30" width="120" height="80" rx="4" fill="#8b6914"/><rect x="32" y="32" width="116" height="76" rx="3" fill="#a07820"/>
<rect x="160" y="30" width="120" height="80" rx="4" fill="#8b6914"/><rect x="162" y="32" width="116" height="76" rx="3" fill="#a07820"/>
<!-- window -->
<rect x="320" y="20" width="100" height="80" rx="4" fill="#aed6f1"/><rect x="320" y="20" width="100" height="80" rx="4" fill="none" stroke="#7a5a14" stroke-width="4"/>
<line x1="370" y1="20" x2="370" y2="100" stroke="#7a5a14" stroke-width="2"/><line x1="320" y1="60" x2="420" y2="60" stroke="#7a5a14" stroke-width="2"/>
<!-- counter -->
<rect x="30" y="110" width="420" height="50" rx="4" fill="#c9a84c"/>
<!-- stove -->
<rect x="200" y="115" width="120" height="40" rx="4" fill="#555"/><circle cx="230" cy="135" r="12" fill="#333"/><circle cx="260" cy="135" r="10" fill="#333"/><circle cx="290" cy="135" r="12" fill="#333"/>
<!-- pot -->
<ellipse cx="260" cy="118" rx="22" ry="8" fill="#444"/><rect x="238" y="104" width="44" height="14" rx="3" fill="#666"/>
<!-- person -->
<circle cx="490" cy="75" r="18" fill="#f0c39a"/><rect x="474" y="93" width="32" height="45" rx="8" fill="#e74c3c"/><rect x="474" y="138" width="14" height="30" fill="#2c3e50"/><rect x="492" y="138" width="14" height="30" fill="#2c3e50"/>
<!-- table -->
<ellipse cx="510" cy="185" rx="70" ry="25" fill="#c8a45a"/><rect x="460" y="185" width="14" height="40" fill="#a07820"/><rect x="546" y="185" width="14" height="40" fill="#a07820"/>
<!-- fruit on table -->
<circle cx="490" cy="170" r="10" fill="#e74c3c"/><circle cx="510" cy="168" r="9" fill="#f39c12"/><circle cx="530" cy="171" r="8" fill="#27ae60"/>
</svg>`,
  mo = [
    `Ciao! Il prossimo fine settimana organizzo una gita in montagna con alcuni amici. Ti va di venire?`,
    `Gentile inquilino, le ricordiamo che il pagamento dell'affitto di questo mese non è ancora arrivato. La preghiamo di provvedere entro venerdì.`,
    `Ciao! Ho sentito che hai studiato italiano per molto tempo. Come hai imparato? Hai qualche consiglio per me?`,
  ],
  ho = practiceTest2WritingModelsData,
  R = (e) => e.script.map((e) => e[1]),
  z = c({
    CLOZE: () => _o,
    L1: () => B,
    L2: () => go,
    MATCH: () => vo,
    PARK_SVG: () => yo,
    WRITE_MODELS: () => xo,
    WRITE_MSGS: () => bo,
    spokenL1: () => So,
  }),
  B = practiceTest3ListeningDialoguesData,
  go = practiceTest3ListeningStatementsData,
  _o = practiceTest3ClozeData,
  vo = practiceTest3MatchingData,
  yo = `<svg viewBox="0 0 600 240" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mercato all'aperto con bancarelle di frutta e verdura, venditori e clienti">
<rect width="600" height="240" fill="#e8f4f8"/>
<rect y="170" width="600" height="70" fill="#c8b89a"/>
<!-- sky clouds -->
<ellipse cx="120" cy="40" rx="50" ry="22" fill="#fff" opacity=".8"/>
<ellipse cx="480" cy="30" rx="60" ry="20" fill="#fff" opacity=".7"/>
<circle cx="540" cy="35" r="28" fill="#ffd23f"/>
<!-- stall 1 - red awning -->
<rect x="30" y="90" width="150" height="80" fill="#e74c3c" opacity=".15"/>
<rect x="20" y="88" width="170" height="12" rx="3" fill="#e74c3c"/>
<rect x="20" y="100" width="6" height="70" fill="#8b4513"/>
<rect x="184" y="100" width="6" height="70" fill="#8b4513"/>
<rect x="30" y="105" width="150" height="8" fill="#d4a017"/>
<!-- produce stall 1 -->
<ellipse cx="55" cy="148" rx="12" ry="8" fill="#e74c3c"/>
<ellipse cx="80" cy="145" rx="14" ry="9" fill="#f39c12"/>
<ellipse cx="108" cy="147" rx="12" ry="8" fill="#27ae60"/>
<ellipse cx="135" cy="148" rx="10" ry="7" fill="#9b59b6"/>
<ellipse cx="158" cy="146" rx="11" ry="8" fill="#e67e22"/>
<rect x="30" y="155" width="150" height="5" fill="#8b4513"/>
<!-- stall 2 - blue awning -->
<rect x="220" y="90" width="150" height="80" fill="#2980b9" opacity=".1"/>
<rect x="210" y="88" width="170" height="12" rx="3" fill="#2980b9"/>
<rect x="210" y="100" width="6" height="70" fill="#8b4513"/>
<rect x="374" y="100" width="6" height="70" fill="#8b4513"/>
<rect x="220" y="105" width="150" height="8" fill="#7fb3d3"/>
<!-- produce stall 2 -->
<ellipse cx="240" cy="148" rx="11" ry="7" fill="#2ecc71"/>
<ellipse cx="265" cy="146" rx="13" ry="8" fill="#e74c3c"/>
<ellipse cx="292" cy="147" rx="12" ry="9" fill="#f1c40f"/>
<ellipse cx="318" cy="148" rx="11" ry="7" fill="#e74c3c"/>
<ellipse cx="345" cy="146" rx="10" ry="8" fill="#27ae60"/>
<rect x="220" y="155" width="150" height="5" fill="#8b4513"/>
<!-- stall 3 - green awning -->
<rect x="410" y="90" width="150" height="80" fill="#27ae60" opacity=".12"/>
<rect x="400" y="88" width="170" height="12" rx="3" fill="#27ae60"/>
<rect x="400" y="100" width="6" height="70" fill="#8b4513"/>
<rect x="564" y="100" width="6" height="70" fill="#8b4513"/>
<!-- vendor 1 -->
<circle cx="115" cy="68" r="10" fill="#f0c39a"/><rect x="108" y="78" width="14" height="20" rx="5" fill="#e74c3c"/>
<!-- vendor 2 -->
<circle cx="300" cy="68" r="10" fill="#c49a6c"/><rect x="293" y="78" width="14" height="20" rx="5" fill="#3498db"/>
<!-- customer -->
<circle cx="175" cy="148" r="9" fill="#f0c39a"/><rect x="169" y="157" width="12" height="18" rx="4" fill="#9b59b6"/>
<ellipse cx="175" cy="178" rx="8" ry="4" fill="#8b6914"/>
<!-- bags -->
<rect x="168" y="170" width="8" height="12" rx="2" fill="#e67e22"/>
<!-- sign -->
<rect x="30" y="62" width="90" height="22" rx="4" fill="#fff" stroke="#e74c3c" stroke-width="1"/>
<text x="75" y="77" text-anchor="middle" font-size="9" fill="#e74c3c" font-family="sans-serif">FRUTTA E VERDURA</text>
</svg>`,
  bo = [
    `Ciao! Non ti ho visto ieri a lezione di italiano. Ti è successo qualcosa? Come stai?`,
    `Nabil, esco tardi dal lavoro stasera. Puoi preparare tu qualcosa per cena per tutti e due?`,
    `Ciao, andiamo domani a fare la spesa insieme? Dimmi dove e a che ora ci troviamo.`,
  ],
  xo = practiceTest3WritingModelsData,
  So = (e) => e.script.map((e) => e[1]),
  V = c({
    CLOZE: () => To,
    L1: () => Co,
    L2: () => wo,
    MATCH: () => Eo,
    PARK_SVG: () => Do,
    WRITE_MODELS: () => ko,
    WRITE_MSGS: () => Oo,
    spokenL1: () => Ao,
  }),
  Co = practiceTest4ListeningDialoguesData,
  wo = practiceTest4ListeningStatementsData,
  To = practiceTest4ClozeData,
  Eo = practiceTest4MatchingData,
  Do = `<svg viewBox="0 0 600 240" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Immagine 1: una famiglia in soggiorno — oppure Immagine 2: una strada di città con negozi">
<rect width="600" height="240" fill="#f0ece4"/>
<!-- room left half -->
<rect x="0" y="0" width="295" height="240" fill="#fdf6ee"/>
<rect x="10" y="10" width="275" height="15" rx="4" fill="#c8a87a" opacity=".4"/>
<!-- sofa -->
<rect x="30" y="130" width="180" height="60" rx="12" fill="#9b8469"/>
<rect x="40" y="118" width="160" height="30" rx="8" fill="#b59a7f"/>
<rect x="30" y="130" width="40" height="60" rx="8" fill="#a08060"/>
<rect x="170" y="130" width="40" height="60" rx="8" fill="#a08060"/>
<!-- family on sofa -->
<circle cx="80" cy="120" r="13" fill="#f0c39a"/>
<rect x="67" y="133" width="26" height="35" rx="8" fill="#3498db"/>
<circle cx="140" cy="118" r="11" fill="#c49a6c"/>
<rect x="129" y="129" width="22" height="32" rx="7" fill="#e74c3c"/>
<circle cx="198" cy="122" r="13" fill="#f0c39a"/>
<rect x="185" y="135" width="26" height="33" rx="8" fill="#2ecc71"/>
<!-- TV -->
<rect x="60" y="55" width="130" height="75" rx="6" fill="#222"/>
<rect x="65" y="60" width="120" height="65" rx="4" fill="#1a6fb8"/>
<!-- divider -->
<line x1="300" y1="0" x2="300" y2="240" stroke="#d0c8b8" stroke-width="2"/>
<!-- street right half -->
<rect x="305" y="0" width="295" height="240" fill="#e8f0f8"/>
<rect x="305" y="150" width="295" height="90" fill="#b0b0b0"/>
<!-- buildings -->
<rect x="315" y="30" width="70" height="120" fill="#e8d5b7"/>
<rect x="395" y="50" width="80" height="100" fill="#d4e8d4"/>
<rect x="485" y="40" width="100" height="110" fill="#f0d4c8"/>
<!-- windows -->
<rect x="325" y="45" width="18" height="20" fill="#aed6f1"/><rect x="352" y="45" width="18" height="20" fill="#aed6f1"/>
<rect x="325" y="75" width="18" height="20" fill="#aed6f1"/><rect x="352" y="75" width="18" height="20" fill="#aed6f1"/>
<!-- shop signs -->
<rect x="318" y="122" width="64" height="18" rx="3" fill="#e74c3c"/>
<rect x="398" y="122" width="74" height="18" rx="3" fill="#27ae60"/>
<text x="350" y="134" text-anchor="middle" font-size="8" fill="#fff" font-family="sans-serif">FARMACIA</text>
<text x="435" y="134" text-anchor="middle" font-size="8" fill="#fff" font-family="sans-serif">SUPERMERCATO</text>
<!-- pedestrians -->
<circle cx="340" cy="165" r="8" fill="#f0c39a"/><rect x="334" y="173" width="12" height="20" rx="4" fill="#3498db"/>
<circle cx="420" cy="162" r="8" fill="#c49a6c"/><rect x="414" y="170" width="12" height="20" rx="4" fill="#e74c3c"/>
<!-- caption -->
<text x="147" y="230" text-anchor="middle" font-size="10" fill="#888" font-family="sans-serif">Immagine 1: In casa</text>
<text x="450" y="230" text-anchor="middle" font-size="10" fill="#888" font-family="sans-serif">Immagine 2: In città</text>
</svg>`,
  Oo = practiceTest4WritingMessagesData,
  ko = practiceTest4WritingModelsData,
  Ao = (e) => e.script.map((e) => e[1]),
  jo = routeMapData,
  H = { preposizioni: `preposizioni`, tempi: `tempi`, pronomi: `pronomi` };
function Mo(e) {
  let t = jo[e];
  if (!t) return e;
  if (t[1])
    try {
      localStorage.setItem(`hub_${t[0]}_tab`, JSON.stringify(t[1]));
    } catch {}
  if (H[e])
    try {
      localStorage.setItem(`gn_topic`, JSON.stringify(H[e]));
    } catch {}
  return t[0];
}
function No(e) {
  let t = () => Mo(window.location.hash.slice(1)) || e,
    [n, r] = (0, S.useState)(t);
  return (
    (0, S.useEffect)(() => {
      let e = () => r(t());
      return (window.addEventListener(`hashchange`, e), () => window.removeEventListener(`hashchange`, e));
    }, []),
    [
      n,
      (e) => {
        window.location.hash = e;
      },
    ]
  );
}
var Po = {
    daily: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`rect`, { x: `3`, y: `4`, width: `18`, height: `18`, rx: `2` }),
        (0, w.jsx)(`line`, { x1: `16`, y1: `2`, x2: `16`, y2: `6` }),
        (0, w.jsx)(`line`, { x1: `8`, y1: `2`, x2: `8`, y2: `6` }),
        (0, w.jsx)(`line`, { x1: `3`, y1: `10`, x2: `21`, y2: `10` }),
        (0, w.jsx)(`circle`, { cx: `12`, cy: `16`, r: `1.5`, fill: `currentColor` }),
      ],
    }),
    exam: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z` }),
        (0, w.jsx)(`polyline`, { points: `14 2 14 8 20 8` }),
        (0, w.jsx)(`line`, { x1: `9`, y1: `13`, x2: `15`, y2: `13` }),
        (0, w.jsx)(`line`, { x1: `9`, y1: `17`, x2: `12`, y2: `17` }),
      ],
    }),
    flash: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`rect`, { x: `2`, y: `5`, width: `20`, height: `14`, rx: `2` }),
        (0, w.jsx)(`line`, { x1: `2`, y1: `12`, x2: `22`, y2: `12` }),
      ],
    }),
    exercises: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M12 20h9` }),
        (0, w.jsx)(`path`, { d: `M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z` }),
      ],
    }),
    grammar: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M4 19.5A2.5 2.5 0 0 1 6.5 17H20` }),
        (0, w.jsx)(`path`, { d: `M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z` }),
      ],
    }),
    phrases: (0, w.jsx)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: (0, w.jsx)(`path`, { d: `M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z` }),
    }),
    dialogues: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a1.994 1.994 0 0 1-1.414-.586` }),
        (0, w.jsx)(`path`, { d: `M3 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 4V6z` }),
      ],
    }),
    reading: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`circle`, { cx: `11`, cy: `11`, r: `8` }),
        (0, w.jsx)(`line`, { x1: `21`, y1: `21`, x2: `16.65`, y2: `16.65` }),
      ],
    }),
    ref: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`line`, { x1: `8`, y1: `6`, x2: `21`, y2: `6` }),
        (0, w.jsx)(`line`, { x1: `8`, y1: `12`, x2: `21`, y2: `12` }),
        (0, w.jsx)(`line`, { x1: `8`, y1: `18`, x2: `21`, y2: `18` }),
        (0, w.jsx)(`line`, { x1: `3`, y1: `6`, x2: `3.01`, y2: `6` }),
        (0, w.jsx)(`line`, { x1: `3`, y1: `12`, x2: `3.01`, y2: `12` }),
        (0, w.jsx)(`line`, { x1: `3`, y1: `18`, x2: `3.01`, y2: `18` }),
      ],
    }),
    dict: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M4 19.5A2.5 2.5 0 0 1 6.5 17H20` }),
        (0, w.jsx)(`path`, { d: `M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z` }),
        (0, w.jsx)(`line`, { x1: `9`, y1: `9`, x2: `15`, y2: `9` }),
        (0, w.jsx)(`line`, { x1: `9`, y1: `13`, x2: `13`, y2: `13` }),
      ],
    }),
    explore: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`circle`, { cx: `12`, cy: `12`, r: `10` }),
        (0, w.jsx)(`polygon`, { points: `16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76` }),
      ],
    }),
    shadow: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z` }),
        (0, w.jsx)(`path`, { d: `M19 10v2a7 7 0 0 1-14 0v-2` }),
        (0, w.jsx)(`line`, { x1: `12`, y1: `19`, x2: `12`, y2: `23` }),
        (0, w.jsx)(`line`, { x1: `8`, y1: `23`, x2: `16`, y2: `23` }),
      ],
    }),
    writing: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M12 20h9` }),
        (0, w.jsx)(`path`, { d: `M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z` }),
      ],
    }),
    speaking: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z` }),
        (0, w.jsx)(`path`, { d: `M19 10v2a7 7 0 0 1-14 0v-2` }),
        (0, w.jsx)(`line`, { x1: `12`, y1: `19`, x2: `12`, y2: `23` }),
        (0, w.jsx)(`line`, { x1: `8`, y1: `23`, x2: `16`, y2: `23` }),
        (0, w.jsx)(`circle`, { cx: `12`, cy: `12`, r: `2`, fill: `currentColor` }),
      ],
    }),
    photos: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`rect`, { x: `3`, y: `3`, width: `18`, height: `18`, rx: `2` }),
        (0, w.jsx)(`circle`, { cx: `8.5`, cy: `8.5`, r: `1.5` }),
        (0, w.jsx)(`polyline`, { points: `21 15 16 10 5 21` }),
      ],
    }),
    scenes: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z` }),
        (0, w.jsx)(`polyline`, { points: `9 22 9 12 15 12 15 22` }),
      ],
    }),
    oggi: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`circle`, { cx: `12`, cy: `12`, r: `4` }),
        (0, w.jsx)(`line`, { x1: `12`, y1: `2`, x2: `12`, y2: `5` }),
        (0, w.jsx)(`line`, { x1: `12`, y1: `19`, x2: `12`, y2: `22` }),
        (0, w.jsx)(`line`, { x1: `4.2`, y1: `4.2`, x2: `6.3`, y2: `6.3` }),
        (0, w.jsx)(`line`, { x1: `17.7`, y1: `17.7`, x2: `19.8`, y2: `19.8` }),
        (0, w.jsx)(`line`, { x1: `2`, y1: `12`, x2: `5`, y2: `12` }),
        (0, w.jsx)(`line`, { x1: `19`, y1: `12`, x2: `22`, y2: `12` }),
        (0, w.jsx)(`line`, { x1: `4.2`, y1: `19.8`, x2: `6.3`, y2: `17.7` }),
        (0, w.jsx)(`line`, { x1: `17.7`, y1: `6.3`, x2: `19.8`, y2: `4.2` }),
      ],
    }),
    progress: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`line`, { x1: `18`, y1: `20`, x2: `18`, y2: `10` }),
        (0, w.jsx)(`line`, { x1: `12`, y1: `20`, x2: `12`, y2: `4` }),
        (0, w.jsx)(`line`, { x1: `6`, y1: `20`, x2: `6`, y2: `14` }),
      ],
    }),
    preposizioni: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71` }),
        (0, w.jsx)(`path`, { d: `M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71` }),
      ],
    }),
    home: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z` }),
        (0, w.jsx)(`polyline`, { points: `9 22 9 12 15 12 15 22` }),
      ],
    }),
    grammatica: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M12 20h9` }),
        (0, w.jsx)(`path`, { d: `M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z` }),
      ],
    }),
    vocabolario: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`rect`, { x: `2`, y: `5`, width: `20`, height: `14`, rx: `2` }),
        (0, w.jsx)(`line`, { x1: `2`, y1: `12`, x2: `22`, y2: `12` }),
      ],
    }),
    esame: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z` }),
        (0, w.jsx)(`polyline`, { points: `14 2 14 8 20 8` }),
        (0, w.jsx)(`line`, { x1: `9`, y1: `13`, x2: `15`, y2: `13` }),
        (0, w.jsx)(`line`, { x1: `9`, y1: `17`, x2: `12`, y2: `17` }),
      ],
    }),
    ascoltop: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M3 18v-6a9 9 0 0 1 18 0v6` }),
        (0, w.jsx)(`path`, {
          d: `M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z`,
        }),
        (0, w.jsx)(`circle`, { cx: `12`, cy: `11`, r: `2`, fill: `currentColor` }),
      ],
    }),
    ascolto: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M3 18v-6a9 9 0 0 1 18 0v6` }),
        (0, w.jsx)(`path`, {
          d: `M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z`,
        }),
      ],
    }),
    lettura: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z` }),
        (0, w.jsx)(`path`, { d: `M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z` }),
      ],
    }),
    scrittura: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M12 20h9` }),
        (0, w.jsx)(`path`, { d: `M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z` }),
      ],
    }),
    esaminatore: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z` }),
        (0, w.jsx)(`line`, { x1: `9`, y1: `9`, x2: `9.01`, y2: `9` }),
        (0, w.jsx)(`line`, { x1: `15`, y1: `9`, x2: `15.01`, y2: `9` }),
      ],
    }),
    orale: (0, w.jsxs)(`svg`, {
      width: `18`,
      height: `18`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, w.jsx)(`path`, { d: `M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z` }),
        (0, w.jsx)(`path`, { d: `M19 10v2a7 7 0 0 1-14 0v-2` }),
        (0, w.jsx)(`line`, { x1: `12`, y1: `19`, x2: `12`, y2: `23` }),
        (0, w.jsx)(`line`, { x1: `8`, y1: `23`, x2: `16`, y2: `23` }),
      ],
    }),
  },
  Fo = [
    { id: `t1`, label: `Test 1 — Sportello comunale`, data: T },
    { id: `t2`, label: `Test 2 — Vita quotidiana`, data: co },
    { id: `t3`, label: `Test 3 — Formato ufficiale CILS`, data: z },
    { id: `t4`, label: `Test 4 — Prototipo Ufficiale Siena ★`, data: V },
  ];
function Io({ graded: e, setGraded: t, ans: n, setAns: r, resultsRef: i, checkPractice: a, home: o }) {
  let [s, c] = (0, S.useState)(`t1`),
    l = Fo.find((e) => e.id === s).data;
  return (0, w.jsxs)(w.Fragment, {
    children: [
      (0, w.jsxs)(`div`, {
        className: `test-selector`,
        children: [
          (0, w.jsx)(`button`, {
            className: `ptab sm ghost-reset`,
            title: `Cancella le risposte e ricomincia`,
            onClick: () => {
              (t(!1),
                r({
                  L1: {},
                  L2: {},
                  cloze: {},
                  match: {},
                  wImg: ``,
                  wMsg: [``, ``, ``],
                  wSelf: ``,
                  spNotes: [``, ``],
                  spTx: [``, ``],
                  sSelf: ``,
                }));
            },
            children: `Azzera risposte`,
          }),
          Fo.map((e) =>
            (0, w.jsx)(
              `button`,
              {
                className: `ptab sm` + (e.id === s ? ` on` : ``),
                onClick: () => {
                  (c(e.id),
                    t(!1),
                    r((e) => ({
                      L1: {},
                      L2: {},
                      cloze: {},
                      match: {},
                      wImg: ``,
                      wMsg: [``, ``, ``],
                      wSelf: ``,
                      spNotes: [``, ``],
                      spTx: [``, ``],
                      sSelf: ``,
                    })));
                },
                children: e.label,
              },
              e.id,
            ),
          ),
        ],
      }),
      (0, w.jsx)(Se, { ans: n, setAns: r, mode: `practice`, graded: e, testData: l }),
      (0, w.jsx)(Ce, { ans: n, setAns: r, graded: e, testData: l }),
      (0, w.jsx)(Oe, { ans: n, setAns: r, graded: e, testData: l }),
      (0, w.jsx)(Ae, { ans: n, setAns: r, graded: e }),
      e && (0, w.jsx)(`div`, { ref: i, children: (0, w.jsx)(Me, { ans: n, setAns: r }) }),
      (0, w.jsxs)(`div`, {
        className: `bottom`,
        children: [
          e
            ? (0, w.jsx)(`button`, {
                className: `btn ghost`,
                onClick: () => {
                  (t(!1), window.scrollTo({ top: 0, behavior: `smooth` }));
                },
                children: `Edit answers`,
              })
            : (0, w.jsx)(`button`, { className: `btn go`, onClick: a, children: `Check answers` }),
          (0, w.jsx)(`button`, { className: `btn ghost`, onClick: o, children: `Exit` }),
        ],
      }),
    ],
  });
}
var Lo = () => ({
    L1: {},
    L2: {},
    cloze: {},
    match: {},
    wImg: ``,
    wMsg: [``, ``, ``],
    wSelf: ``,
    spNotes: [``, ``],
    spTx: [``, ``],
    sSelf: ``,
  }),
  Ro = { listening: 1200, reading: 1800, writing: 2400 },
  zo = [
    [`listening`, `Ascolto`],
    [`reading`, `Lettura`],
    [`writing`, `Scritta`],
    [`speaking`, `Orale`],
  ];
function Bo({ title: e, onHome: t }) {
  return (0, w.jsxs)(`header`, {
    className: `top`,
    children: [
      (0, w.jsx)(`img`, { className: `top-photo`, src: `/PM-Side-Projects/cils-app/img/scenes/classe.jpg`, alt: `` }),
      (0, w.jsxs)(`div`, {
        className: `top-text`,
        children: [(0, w.jsx)(`p`, { children: `CILS A2 · Modulo Integrazione` }), (0, w.jsx)(`h1`, { children: e })],
      }),
      t &&
        (0, w.jsxs)(`button`, {
          className: `top-exit`,
          onClick: t,
          'aria-label': `Esci dall’esame`,
          children: [
            (0, w.jsxs)(`svg`, {
              width: `16`,
              height: `16`,
              viewBox: `0 0 24 24`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `1.8`,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              children: [
                (0, w.jsx)(`line`, { x1: `19`, y1: `12`, x2: `5`, y2: `12` }),
                (0, w.jsx)(`polyline`, { points: `12 19 5 12 12 5` }),
              ],
            }),
          ],
        }),
      (0, w.jsxs)(`div`, {
        className: `tri`,
        children: [(0, w.jsx)(`i`, {}), (0, w.jsx)(`i`, {}), (0, w.jsx)(`i`, {})],
      }),
    ],
  });
}
function Vo({ stage: e }) {
  let t = zo.findIndex((t) => t[0] === e);
  return (0, w.jsx)(`div`, {
    className: `stepper`,
    children: zo.map((e, n) =>
      (0, w.jsxs)(
        `div`,
        {
          className: `step` + (n === t ? ` on` : n < t ? ` done` : ``),
          children: [(0, w.jsx)(`span`, { className: `dot`, children: n < t ? `✓` : n + 1 }), e[1]],
        },
        e[0],
      ),
    ),
  });
}
function Ho({ onPractice: e, onExam: t }) {
  return (0, w.jsxs)(`div`, {
    className: `wrap`,
    children: [
      (0, w.jsxs)(`div`, {
        className: `hero`,
        children: [
          (0, w.jsxs)(`div`, {
            className: `hero-text`,
            children: [
              (0, w.jsxs)(`h1`, {
                className: `hero-title`,
                children: [
                  (0, w.jsxs)(`svg`, {
                    className: `hero-flag`,
                    width: `34`,
                    height: `24`,
                    viewBox: `0 0 34 24`,
                    'aria-label': `Bandiera italiana`,
                    children: [
                      (0, w.jsx)(`rect`, { width: `34`, height: `24`, rx: `3`, fill: `#fff` }),
                      (0, w.jsx)(`rect`, { width: `11.33`, height: `24`, rx: `3`, fill: `#008C45` }),
                      (0, w.jsx)(`rect`, { x: `8`, width: `6`, height: `24`, fill: `#008C45` }),
                      (0, w.jsx)(`rect`, { x: `22.67`, width: `11.33`, height: `24`, rx: `3`, fill: `#CD212A` }),
                      (0, w.jsx)(`rect`, { x: `22.67`, width: `6`, height: `24`, fill: `#CD212A` }),
                    ],
                  }),
                  `CILS A2 — Modulo Integrazione`,
                ],
              }),
              (0, w.jsx)(`p`, {
                className: `hero-sub`,
                children: `Realistic exam simulator · spoken listening + live speech-to-text. The listening test is read aloud in Italian; in speaking, the app transcribes what you say so you can review it.`,
              }),
            ],
          }),
          (0, w.jsx)(`div`, { className: `hero-orb` }),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `landing-stats`,
        children: [
          (0, w.jsxs)(`div`, {
            className: `landing-stat`,
            children: [
              (0, w.jsx)(`div`, { className: `v`, children: `462` }),
              (0, w.jsx)(`div`, { className: `l`, children: `Flashcards` }),
            ],
          }),
          (0, w.jsxs)(`div`, {
            className: `landing-stat`,
            children: [
              (0, w.jsx)(`div`, { className: `v`, children: `209` }),
              (0, w.jsx)(`div`, { className: `l`, children: `Phrases` }),
            ],
          }),
          (0, w.jsxs)(`div`, {
            className: `landing-stat`,
            children: [
              (0, w.jsx)(`div`, { className: `v`, children: `21` }),
              (0, w.jsx)(`div`, { className: `l`, children: `Exercise sets` }),
            ],
          }),
          (0, w.jsxs)(`div`, {
            className: `landing-stat`,
            children: [
              (0, w.jsx)(`div`, { className: `v`, children: `9` }),
              (0, w.jsx)(`div`, { className: `l`, children: `Dialogues` }),
            ],
          }),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `modes`,
        children: [
          (0, w.jsxs)(`button`, {
            className: `mode primary`,
            onClick: t,
            children: [
              (0, w.jsx)(`span`, { className: `mode-badge`, children: `Consigliato` }),
              (0, w.jsx)(`div`, {
                className: `mode-ic-wrap primary`,
                children: (0, w.jsxs)(`svg`, {
                  width: `22`,
                  height: `22`,
                  viewBox: `0 0 24 24`,
                  fill: `none`,
                  stroke: `currentColor`,
                  strokeWidth: `1.8`,
                  strokeLinecap: `round`,
                  strokeLinejoin: `round`,
                  children: [
                    (0, w.jsx)(`circle`, { cx: `12`, cy: `12`, r: `10` }),
                    (0, w.jsx)(`polyline`, { points: `12 6 12 12 16 14` }),
                  ],
                }),
              }),
              (0, w.jsx)(`h3`, { children: `Exam-day simulation` }),
              (0, w.jsx)(`p`, {
                children: `Sequential sections with countdown timers (20 / 30 / 40 min), audio plays twice, no peeking. Closest to the real thing.`,
              }),
              (0, w.jsx)(`span`, { className: `mode-go`, children: `Start exam ›` }),
            ],
          }),
          (0, w.jsxs)(`button`, {
            className: `mode`,
            onClick: e,
            children: [
              (0, w.jsx)(`div`, {
                className: `mode-ic-wrap`,
                children: (0, w.jsxs)(`svg`, {
                  width: `22`,
                  height: `22`,
                  viewBox: `0 0 24 24`,
                  fill: `none`,
                  stroke: `currentColor`,
                  strokeWidth: `1.8`,
                  strokeLinecap: `round`,
                  strokeLinejoin: `round`,
                  children: [
                    (0, w.jsx)(`path`, { d: `M12 20h9` }),
                    (0, w.jsx)(`path`, { d: `M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z` }),
                  ],
                }),
              }),
              (0, w.jsx)(`h3`, { children: `Practice mode` }),
              (0, w.jsx)(`p`, {
                children: `Relaxed: replay the audio anytime, show transcripts, and check answers whenever you like.`,
              }),
              (0, w.jsx)(`span`, { className: `mode-go`, children: `Start practice ›` }),
            ],
          }),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: `support`,
        children: [
          (0, w.jsx)(`b`, { children: `Before you start:` }),
          ` for the best experience use `,
          (0, w.jsx)(`b`, { children: `Google Chrome` }),
          ` or `,
          (0, w.jsx)(`b`, { children: `Microsoft Edge` }),
          ` and allow microphone access.`,
          ` `,
          `Text-to-speech (listening): `,
          k() ? `✓ available` : `✕ not available in this browser`,
          `.`,
          ` `,
          `Speech-to-text (speaking): `,
          ye() ? `✓ available` : `✕ not in this browser — you can type instead`,
          `.`,
        ],
      }),
    ],
  });
}
function Uo({ onStart: e, onHome: t }) {
  return (0, w.jsxs)(`div`, {
    className: `wrap`,
    children: [
      (0, w.jsx)(Bo, { title: `Exam-day simulation`, onHome: t }),
      (0, w.jsxs)(`div`, {
        className: `card`,
        children: [
          (0, w.jsx)(`h2`, { className: `sec-h`, children: `Prima di iniziare` }),
          (0, w.jsx)(`p`, {
            className: `instr`,
            style: { fontStyle: `normal` },
            children: `The written part runs as one block, in this fixed order — just like the real exam:`,
          }),
          (0, w.jsxs)(`ol`, {
            className: `rules`,
            children: [
              (0, w.jsxs)(`li`, {
                children: [
                  (0, w.jsx)(`b`, { children: `Ascolto` }),
                  ` (20 min) — each text is played twice; the transcript stays hidden. You can’t replay it.`,
                ],
              }),
              (0, w.jsxs)(`li`, {
                children: [(0, w.jsx)(`b`, { children: `Comprensione della lettura` }), ` (30 min).`],
              }),
              (0, w.jsxs)(`li`, {
                children: [
                  (0, w.jsx)(`b`, { children: `Produzione scritta` }),
                  ` (40 min) — describe a picture + reply to messages.`,
                ],
              }),
              (0, w.jsxs)(`li`, {
                children: [
                  (0, w.jsx)(`b`, { children: `Produzione orale` }),
                  ` — done separately; record yourself and the app transcribes it.`,
                ],
              }),
            ],
          }),
          (0, w.jsx)(`p`, {
            className: `instr`,
            style: { fontStyle: `normal` },
            children: `When a timer runs out, the exam moves on automatically. You’ll see all your answers, the key, and the models at the end.`,
          }),
          (0, w.jsxs)(`div`, {
            className: `bottom static`,
            children: [
              (0, w.jsx)(`button`, { className: `btn go`, onClick: e, children: `Inizia l’esame` }),
              (0, w.jsx)(`button`, { className: `btn ghost`, onClick: t, children: `Exit` }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Wo({ ans: e, setAns: t, onHome: n }) {
  let [r, i] = (0, S.useState)(`intro`),
    [a, o] = (0, S.useState)(!1),
    s = (e) => {
      (M(), e === `results` && o(!0), i(e), window.scrollTo({ top: 0 }));
    };
  if (r === `intro`) return (0, w.jsx)(Uo, { onStart: () => s(`listening`), onHome: n });
  if (r === `results`)
    return (0, w.jsxs)(`div`, {
      className: `wrap`,
      children: [
        (0, w.jsx)(Bo, { title: `Exam results & review`, onHome: n }),
        (0, w.jsx)(Me, { ans: e, setAns: t }),
        (0, w.jsx)(Se, { ans: e, setAns: t, mode: `practice`, graded: !0 }),
        (0, w.jsx)(Ce, { ans: e, setAns: t, graded: !0 }),
        (0, w.jsx)(Oe, { ans: e, setAns: t, graded: !0 }),
        (0, w.jsx)(Ae, { ans: e, setAns: t, graded: !0 }),
        (0, w.jsx)(`div`, {
          className: `bottom`,
          children: (0, w.jsx)(`button`, { className: `btn go`, onClick: n, children: `Finish` }),
        }),
      ],
    });
  let c = {
    listening: {
      node: (0, w.jsx)(Se, { ans: e, setAns: t, mode: `exam`, graded: !1 }),
      next: `reading`,
      t: Ro.listening,
      label: `Ascolto`,
    },
    reading: {
      node: (0, w.jsx)(Ce, { ans: e, setAns: t, graded: !1 }),
      next: `writing`,
      t: Ro.reading,
      label: `Lettura`,
    },
    writing: {
      node: (0, w.jsx)(Oe, { ans: e, setAns: t, graded: !1 }),
      next: `speaking`,
      t: Ro.writing,
      label: `Produzione scritta`,
    },
    speaking: {
      node: (0, w.jsx)(Ae, { ans: e, setAns: t, graded: !1 }),
      next: `results`,
      t: null,
      label: `Produzione orale`,
    },
  }[r];
  return (0, w.jsxs)(`div`, {
    className: `wrap`,
    children: [
      (0, w.jsx)(Bo, { title: `Exam · ` + c.label, onHome: n }),
      (0, w.jsxs)(`div`, {
        className: `exam-bar`,
        children: [
          (0, w.jsx)(Vo, { stage: r }),
          c.t && (0, w.jsx)(Ne, { seconds: c.t, running: !0, onExpire: () => s(c.next), label: c.label }, r),
        ],
      }),
      c.node,
      (0, w.jsxs)(`div`, {
        className: `bottom`,
        children: [
          (0, w.jsx)(`button`, {
            className: `btn go`,
            onClick: () => s(c.next),
            children: r === `speaking` ? `Termina · vedi risultati ›` : `Avanti ›`,
          }),
          (0, w.jsx)(`button`, { className: `btn ghost`, onClick: n, children: `Exit` }),
        ],
      }),
    ],
  });
}
var Go = new Set([
  `home`,
  `ascolto`,
  `lettura`,
  `scrittura`,
  `orale`,
  `grammatica`,
  `vocabolario`,
  `esame`,
  `dict`,
  `ref`,
  `explore`,
  ...Object.keys(jo),
]);
function Ko({ id: e, tabs: t, crossLink: n }) {
  let [r, i] = N(`hub_${e}_tab`, t[0].id);
  (0, S.useEffect)(() => {
    let n = () => {
      try {
        let n = JSON.parse(localStorage.getItem(`hub_${e}_tab`) || `null`);
        n && t.some((e) => e.id === n) && i(n);
      } catch {}
    };
    return (window.addEventListener(`hashchange`, n), () => window.removeEventListener(`hashchange`, n));
  }, [e]);
  let a = t.find((e) => e.id === r) || t[0];
  return (0, w.jsxs)(`div`, {
    className: `hub`,
    children: [
      (0, w.jsxs)(`div`, {
        className: `hub-tabs`,
        children: [
          t.map((e) =>
            (0, w.jsx)(
              `button`,
              {
                className: `hub-tab` + (a.id === e.id ? ` on` : ``),
                onClick: () => {
                  (M(), i(e.id));
                },
                children: e.label,
              },
              e.id,
            ),
          ),
          n,
        ],
      }),
      (0, w.jsx)(`div`, { className: `hub-body`, children: a.render() }),
    ],
  });
}
function qo({ text: e, onClick: t }) {
  return (0, w.jsxs)(`button`, { className: `hub-cross`, onClick: t, children: [e, ` →`] });
}
function Jo({ onGo: e }) {
  let t = Ht();
  return t.length
    ? (0, w.jsxs)(`section`, {
        className: `card coach`,
        children: [
          (0, w.jsx)(`h2`, { className: `sec-h`, children: `Il tuo coach` }),
          (0, w.jsx)(`p`, {
            className: `instr`,
            style: { margin: `0 0 12px` },
            children: `I prossimi test, scelti in base ai tuoi risultati.`,
          }),
          (0, w.jsx)(`div`, {
            className: `coach-grid`,
            children: t.map((t, n) =>
              (0, w.jsxs)(
                `div`,
                {
                  className: `coach-card`,
                  children: [
                    (0, w.jsxs)(`div`, {
                      className: `coach-info`,
                      children: [
                        (0, w.jsx)(`b`, { children: t.title }),
                        (0, w.jsx)(`span`, { className: `coach-reason`, children: t.reason }),
                      ],
                    }),
                    (0, w.jsx)(`button`, {
                      className: `btn primary sm`,
                      onClick: () => e(t.target),
                      children: `Vai →`,
                    }),
                  ],
                },
                t.target + n,
              ),
            ),
          }),
        ],
      })
    : null;
}
function Yo({ onGo: e }) {
  return (0, w.jsxs)(`div`, {
    className: `home-stack`,
    children: [(0, w.jsx)(Jo, { onGo: e }), (0, w.jsx)(Ra, { onGo: e }), (0, w.jsx)(ia, { onGo: e })],
  });
}

/*
 * Everything the shell (src/shell/) needs, under readable names.
 * The old root component and its mount call lived here; the shell replaces them.
 */
export {
  _a as WelcomeGate,
  Wo as ExamSimulation,
  Jo as CoachCard,
  Ra as TodayPlan,
  ia as ProgressReport,
  Ht as getCoachSuggestions,
  so as ListeningPractice,
  nr as Dialogues,
  Vr as Shadowing,
  za as SkillGuide,
  cr as Reading,
  Ki as Writing,
  ta as Speaking,
  to as AiExaminer,
  yn as GrammarExercises,
  sa as Translation,
  an as GrammarRules,
  nt as Flashcards,
  Ma as VisualDictionary,
  Ta as PhotoExplorer,
  On as Phrases,
  la as ExamSeries,
  _i as DailyExam,
  Io as PracticeTest,
  Qn as QuickReference,
  yr as Dictionary,
  Rr as ItalyExplorer,
  N as usePersistentState,
  No as useHashRoute,
  Lo as emptyPracticeAnswers,
  he as getSpeechRate,
  me as setSpeechRate,
  M as stopSpeech,
  fa as hasVisitor,
  I as gateEnabled,
  da as getVisitor,
  // speech and progress, for screens rewritten in src/screens/
  k as isSpeechSupported,
  j as speakLine,
  A as pause,
  _e as getSpeechToken,
  de as getDialogueVoices,
  fe as hasItalianVoice,
  At as recordAttempt,
};

// Every top-level name, under its original short name (generated; see README).
export { $a, $e, $i, $n, $r, $t, A, Aa, Ae, Ai, An, Ao, Ar, At, B, Ba, Be, Bi, Bn, Bo, Br, Bt, Ca, Ce, Ci, Cn, Co, Cr, Ct, D, Da, De, Di, Dn, Do, Dr, Dt, E, Ea, Ee, Ei, En, Eo, Er, Et, F, Fa, Fe, Fi, Fn, Fo, Fr, Ft, Ga, Ge, Gi, Gn, Go, Gr, Gt, H, Ha, He, Hi, Hn, Ho, Hr, Ht, I, Ia, Ie, Ii, In, Io, Ir, It, Ja, Je, Ji, Jn, Jo, Jr, Jt, Ka, Ke, Ki, Kn, Ko, Kr, Kt, L, La, Le, Li, Ln, Lo, Lr, Lt, M, Ma, Me, Mi, Mn, Mo, Mr, Mt, N, Na, Ne, Ni, Nn, No, Nr, Nt, O, Oa, Oe, Oi, On, Oo, Or, Ot, P, Pa, Pe, Pi, Pn, Po, Pr, Pt, Qa, Qe, Qi, Qn, Qr, Qt, R, Ra, Re, Ri, Rn, Ro, Rr, Rt, Sa, Se, Si, Sn, So, Sr, St, T, Ta, Te, Ti, Tn, To, Tr, Tt, Ua, Ue, Ui, Un, Uo, Ur, Ut, V, Va, Ve, Vi, Vn, Vo, Vr, Vt, Wa, We, Wi, Wn, Wo, Wr, Wt, Xa, Xe, Xi, Xn, Xr, Xt, Ya, Ye, Yi, Yn, Yo, Yr, Yt, Za, Ze, Zi, Zn, Zr, Zt, _a, _e, _i, _n, _o, _r, _t, a, aa, ae, ai, an, ao, ar, at, ba, be, bi, bn, bo, br, bt, c, ca, ce, ci, cn, co, cr, ct, d, da, de, di, dn, dr, dt, e, ea, ee, ei, en, eo, er, et, fa, fe, fi, fn, fo, fr, ft, ga, ge, gi, gn, go, gr, gt, ha, he, hi, hn, ho, hr, ht, i, ia, ie, ii, io, ir, it, j, ja, je, ji, jn, jo, jr, jt, k, ka, ke, ki, kn, ko, kr, kt, l, la, le, li, ln, lo, lr, lt, ma, me, mi, mn, mo, mr, mt, n, na, ne, ni, nn, no, nr, nt, o, oa, oe, oi, on, oo, or, ot, pa, pe, pi, pn, po, pr, pt, qa, qe, qi, qn, qo, qr, qt, r, ra, re, ri, rn, ro, rr, rt, s, sa, se, si, sn, so, sr, st, t, ta, te, ti, tn, to, tr, tt, u, ua, ue, ui, un, uo, ur, ut, va, ve, vi, vn, vo, vr, vt, wa, we, wi, wn, wo, wr, wt, xa, xe, xi, xn, xo, xr, xt, ya, ye, yi, yn, yo, yr, yt, z, za, ze, zi, zn, zo, zr, zt };
