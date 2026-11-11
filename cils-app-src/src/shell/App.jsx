/*
 * The Immersione shell: the frame every screen sits in.
 *
 *   bottom tab bar     Oggi · Prove · Parole · Esplora · Progressi
 *   photo headers      one photo per area, title and back button on top of it
 *   Oggi and Prove     written here; every other screen's content comes from app.js
 *
 * Routing is the same #hash routing the app has always had (see useHashRoute).
 */
import { useEffect, useRef, useState } from 'react';
import {
  AiExaminer,
  DailyExam,
  Dialogues,
  Dictionary,
  ExamSeries,
  ExamSimulation,
  GrammarRules,
  ItalyExplorer,
  PhotoExplorer,
  Phrases,
  PracticeTest,
  ProgressReport,
  QuickReference,
  Shadowing,
  SkillGuide,
  TodayPlan,
  Translation,
  VisualDictionary,
  WelcomeGate,
  emptyPracticeAnswers,
  gateEnabled,
  getCoachSuggestions,
  getSpeechRate,
  hasVisitor,
  setSpeechRate,
  stopSpeech,
  useHashRoute,
  usePersistentState,
} from '../app.js';
import {
  IconArrow,
  IconBack,
  IconClock,
  IconExplore,
  IconPlay,
  IconProgress,
  IconTests,
  IconToday,
  IconWords,
} from './icons.jsx';
import Flashcards from '../screens/Flashcards.jsx';
import GrammarExercises from '../screens/GrammarExercises.jsx';
import ListeningPractice from '../screens/ListeningPractice.jsx';
import Reading from '../screens/Reading.jsx';
import Speaking from '../screens/Speaking.jsx';
import Writing from '../screens/Writing.jsx';
import { PHOTOS, PROVE, PROVE_BY_ID, TARGET_SECTION, tabFor } from './sections.js';

const TABS = [
  { id: 'home', label: 'Oggi', Icon: IconToday },
  { id: 'prove', label: 'Prove', Icon: IconTests },
  { id: 'vocabolario', label: 'Parole', Icon: IconWords },
  { id: 'explore', label: 'Esplora', Icon: IconExplore },
  { id: 'progressi', label: 'Progressi', Icon: IconProgress },
];

const SPEEDS = [
  { v: 0.75, l: 'Lento' },
  { v: 0.92, l: 'Normale' },
  { v: 1, l: 'Esame' },
  { v: 1.15, l: 'Veloce' },
];

/* ---------- small building blocks ---------- */

// A row of tabs can be wider than the phone: keep the selected one in view.
function useActiveInView(dependency) {
  const rowRef = useRef(null);
  useEffect(() => {
    const active = rowRef.current && rowRef.current.querySelector('.on');
    if (active) active.scrollIntoView({ inline: 'center', block: 'nearest' });
  }, [dependency]);
  return rowRef;
}

function TabBar({ active, onGo }) {
  return (
    <nav className="im-tabbar" aria-label="Sezioni">
      {TABS.map(({ id, label, Icon }) => {
        const on = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className={`im-tab${on ? ' on' : ''}`}
            aria-current={on ? 'page' : undefined}
            aria-label={on ? undefined : label}
            onClick={(e) => {
              e.preventDefault();
              onGo(id);
            }}
          >
            <Icon size={on ? 18 : 22} />
            {on && <span>{label}</span>}
          </a>
        );
      })}
    </nav>
  );
}

// Big page title for the five tab screens.
function PageTitle({ overline, title, aside }) {
  return (
    <header className="im-pagetitle">
      <div>
        <span className="im-overline">{overline}</span>
        <h1>{title}</h1>
      </div>
      {aside}
    </header>
  );
}

// Photo header for a section reached from another screen.
function PhotoHeader({ photo, overline, title, blurb, onBack, backLabel }) {
  return (
    <header className="im-photohead">
      <img src={photo} alt="" />
      <div className="im-scrim" aria-hidden="true" />
      {onBack && (
        <button type="button" className="im-round" onClick={onBack} aria-label={backLabel || 'Indietro'}>
          <IconBack />
        </button>
      )}
      <div className="im-photohead-text">
        {overline && <span className="im-overline on-photo">{overline}</span>}
        <h1>{title}</h1>
        {blurb && <p>{blurb}</p>}
      </div>
    </header>
  );
}

function PhotoTile({ photo, title, sub, onClick, wide }) {
  return (
    <button type="button" className={`im-tile${wide ? ' wide' : ''}`} onClick={onClick}>
      <img src={photo} alt="" />
      <span className="im-scrim" aria-hidden="true" />
      <span className="im-tile-text">
        <b>{title}</b>
        {sub && <small>{sub}</small>}
      </span>
    </button>
  );
}

/*
 * Sub-tabs inside a section ("Pratica · Dialoghi · Shadowing · Guida").
 * Keeps the app's storage key (hub_<id>_tab), so links such as #dialogues,
 * which pre-select a sub-tab, keep working.
 */
function SubTabs({ id, tabs, variant = 'segmented', children }) {
  const [current, setCurrent] = usePersistentState(`hub_${id}_tab`, tabs[0].id);
  useEffect(() => {
    const sync = () => {
      try {
        const saved = JSON.parse(localStorage.getItem(`hub_${id}_tab`) || 'null');
        if (saved && tabs.some((t) => t.id === saved)) setCurrent(saved);
      } catch {
        /* storage unavailable: keep the current tab */
      }
    };
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, [id]);
  const active = tabs.find((t) => t.id === current) || tabs[0];
  const rowRef = useActiveInView(active.id);
  return (
    <div className="im-section-body">
      <div className={`im-subtabs ${variant}`} role="tablist" ref={rowRef}>
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={active.id === t.id}
            className={active.id === t.id ? 'on' : ''}
            onClick={() => {
              stopSpeech();
              setCurrent(t.id);
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      {children}
      <div className="im-content">{active.render()}</div>
    </div>
  );
}

function SpeedControl({ rate, onChange }) {
  return (
    <div className="im-speed">
      <span className="im-speed-label">
        <IconClock size={16} /> Velocità ascolto
      </span>
      <div className="im-speed-options" role="group" aria-label="Velocità ascolto">
        {SPEEDS.map((s) => {
          const on = Math.abs(rate - s.v) < 0.05;
          return (
            <button key={s.v} type="button" className={on ? 'on' : ''} aria-pressed={on} onClick={() => onChange(s.v)}>
              {s.l}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- the tab screens written for the new design ---------- */

function Oggi({ onGo }) {
  const suggestion = getCoachSuggestions()[0];
  const sectionId = (suggestion && TARGET_SECTION[suggestion.target]) || 'ascolto';
  const section = PROVE_BY_ID[sectionId];
  return (
    <div className="im-page">
      <PageTitle overline="CILS A2 · Integrazione" title="Oggi" />
      <button
        type="button"
        className="im-hero"
        onClick={() => onGo(suggestion ? suggestion.target : 'ascolto')}
        aria-label={suggestion ? suggestion.title : 'Inizia dall’ascolto'}
      >
        <img src={section.photo} alt="" />
        <span className="im-scrim" aria-hidden="true" />
        <span className="im-chip">Il tuo coach · {section.title}</span>
        <span className="im-hero-row">
          <span className="im-hero-text">
            <b>{suggestion ? suggestion.title : `Inizia da ${section.title}`}</b>
            <small>{suggestion ? suggestion.reason : section.blurb}</small>
          </span>
          <span className="im-hero-play">
            <IconPlay size={24} />
          </span>
        </span>
      </button>

      <h2 className="im-overline as-heading">Le quattro prove</h2>
      <div className="im-tile-row">
        {PROVE.slice(0, 4).map((p) => (
          <PhotoTile key={p.id} photo={p.photo} title={p.title} sub={p.en} onClick={() => onGo(p.id)} />
        ))}
      </div>

      <div className="im-content im-home">
        <TodayPlan onGo={onGo} />
      </div>
    </div>
  );
}

function Prove({ onGo, onExam }) {
  return (
    <div className="im-page">
      <PageTitle overline="CILS A2 · Integrazione" title="Prove" />
      <button type="button" className="im-hero short" onClick={onExam}>
        <img src={PHOTOS.classe} alt="" />
        <span className="im-scrim" aria-hidden="true" />
        <span className="im-chip">Consigliato</span>
        <span className="im-hero-row">
          <span className="im-hero-text">
            <b>Simulazione d’esame</b>
            <small>Sezioni in sequenza con timer: 20 / 30 / 40 min. L’audio si ascolta due volte.</small>
          </span>
          <span className="im-hero-play">
            <IconArrow size={24} />
          </span>
        </span>
      </button>

      <h2 className="im-overline as-heading">Allenati per prova</h2>
      <div className="im-tile-grid">
        {PROVE.map((p) => (
          <PhotoTile key={p.id} photo={p.photo} title={p.title} sub={p.en} onClick={() => onGo(p.id)} wide />
        ))}
      </div>
    </div>
  );
}

function Parole({ route, onGo }) {
  const [vocabTab, setVocabTab] = usePersistentState('hub_vocabolario_tab', 'flashcards');
  useEffect(() => {
    const sync = () => {
      try {
        const saved = JSON.parse(localStorage.getItem('hub_vocabolario_tab') || 'null');
        if (saved) setVocabTab(saved);
      } catch {
        /* keep the current tab */
      }
    };
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  const chips = [
    { id: 'flashcards', label: 'Carte', render: () => <Flashcards /> },
    { id: 'dizionario', label: 'Visivo', render: () => <VisualDictionary /> },
    { id: 'scopri', label: 'Scopri', render: () => <PhotoExplorer /> },
    { id: 'frasi', label: 'Frasi', render: () => <Phrases /> },
    { id: 'dict', label: 'Dizionario', route: 'dict', render: () => <Dictionary /> },
    { id: 'ref', label: 'Numeri', route: 'ref', render: () => <QuickReference /> },
  ];
  const currentId = route === 'dict' || route === 'ref' ? route : vocabTab;
  const current = chips.find((c) => c.id === currentId) || chips[0];
  const rowRef = useActiveInView(current.id);

  const pick = (chip) => {
    stopSpeech();
    if (chip.route) return onGo(chip.route);
    setVocabTab(chip.id);
    if (route !== 'vocabolario') onGo('vocabolario');
  };

  return (
    <div className="im-page">
      <PageTitle overline="Vocabolario e strumenti" title="Parole" />
      <div className="im-subtabs chips" role="tablist" ref={rowRef}>
        {chips.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={c.id === current.id}
            className={c.id === current.id ? 'on' : ''}
            onClick={() => pick(c)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="im-content">{current.render()}</div>
    </div>
  );
}

/* ---------- the app ---------- */

export default function App() {
  const [signedIn, setSignedIn] = useState(() => !gateEnabled() || hasVisitor());
  const [examOpen, setExamOpen] = useState(false);
  const [answers, setAnswers] = usePersistentState('pt_ans', emptyPracticeAnswers);
  const [graded, setGraded] = usePersistentState('pt_graded', false);
  const [route, go] = useHashRoute('home');
  const [rate, setRate] = useState(getSpeechRate());
  const resultsRef = useRef(null);

  // Leaving a screen stops whatever was being read aloud, and starts the next one at the top.
  useEffect(() => {
    stopSpeech();
    window.scrollTo({ top: 0 });
  }, [route, examOpen]);

  if (!signedIn) {
    return (
      <div className="im-app im-gate">
        <WelcomeGate onDone={() => setSignedIn(true)} />
      </div>
    );
  }

  const closeExam = () => {
    stopSpeech();
    setExamOpen(false);
  };

  if (examOpen) {
    return (
      <div className="im-app im-exam">
        <ExamSimulation ans={answers} setAns={setAnswers} onHome={closeExam} />
      </div>
    );
  }

  const startExam = () => {
    setAnswers(emptyPracticeAnswers());
    setGraded(false);
    setExamOpen(true);
  };
  const changeRate = (v) => {
    setRate(v);
    setSpeechRate(v);
  };
  const checkPractice = () => {
    setGraded(true);
    setTimeout(() => resultsRef.current && resultsRef.current.scrollIntoView({ behavior: 'smooth' }), 80);
  };

  const sectionTabs = {
    ascolto: [
      { id: 'pratica', label: 'Pratica', render: () => <ListeningPractice /> },
      { id: 'dialoghi', label: 'Dialoghi', render: () => <Dialogues /> },
      { id: 'shadowing', label: 'Shadowing', render: () => <Shadowing /> },
      { id: 'guida', label: 'Guida', render: () => <SkillGuide skillId="ascolto" onGo={go} /> },
    ],
    lettura: [
      { id: 'pratica', label: 'Lettura', render: () => <Reading /> },
      { id: 'guida', label: 'Guida', render: () => <SkillGuide skillId="lettura" onGo={go} /> },
    ],
    scrittura: [
      { id: 'pratica', label: 'Scrittura', render: () => <Writing /> },
      { id: 'guida', label: 'Guida', render: () => <SkillGuide skillId="scrittura" onGo={go} /> },
    ],
    orale: [
      { id: 'produzione', label: 'Produzione', render: () => <Speaking /> },
      { id: 'esaminatore', label: 'Esaminatore AI', render: () => <AiExaminer /> },
      { id: 'guida', label: 'Guida', render: () => <SkillGuide skillId="orale" onGo={go} /> },
    ],
    grammatica: [
      { id: 'esercizi', label: 'Esercizi', render: () => <GrammarExercises /> },
      { id: 'traduzione', label: 'Traduzione', render: () => <Translation /> },
      { id: 'regole', label: 'Regole', render: () => <GrammarRules /> },
    ],
    esame: [
      { id: 'serie', label: 'Serie d’Esame', render: () => <ExamSeries onGo={go} /> },
      { id: 'daily', label: 'Daily Exam', render: () => <DailyExam /> },
      {
        id: 'test',
        label: 'Practice Test',
        render: () => (
          <PracticeTest
            graded={graded}
            setGraded={setGraded}
            ans={answers}
            setAns={setAnswers}
            resultsRef={resultsRef}
            checkPractice={checkPractice}
            home={() => go('prove')}
          />
        ),
      },
    ],
  };

  let screen;
  if (route === 'home') {
    screen = <Oggi onGo={go} />;
  } else if (route === 'prove') {
    screen = <Prove onGo={go} onExam={startExam} />;
  } else if (sectionTabs[route]) {
    const section = PROVE_BY_ID[route];
    const hasAudio = route === 'ascolto' || route === 'esame';
    screen = (
      <div className="im-page flush">
        <PhotoHeader
          photo={section.photo}
          overline={section.en}
          title={section.title}
          blurb={section.blurb}
          onBack={() => go('prove')}
          backLabel="Torna alle prove"
        />
        <SubTabs key={route} id={route} tabs={sectionTabs[route]}>
          {hasAudio && <SpeedControl rate={rate} onChange={changeRate} />}
        </SubTabs>
      </div>
    );
  } else if (route === 'vocabolario' || route === 'dict' || route === 'ref') {
    screen = <Parole route={route} onGo={go} />;
  } else if (route === 'explore') {
    screen = (
      <div className="im-page flush">
        <PhotoHeader
          photo={PHOTOS.toscana}
          overline="Italy Explorer"
          title="Esplora l’Italia"
          blurb="Scegli una regione: ascolti una storia in italiano e rispondi alle domande."
        />
        <div className="im-section-body">
          <div className="im-content">
            <ItalyExplorer />
          </div>
        </div>
      </div>
    );
  } else if (route === 'progressi') {
    screen = (
      <div className="im-page">
        <PageTitle overline="Il tuo andamento" title="Progressi" />
        <div className="im-content">
          <ProgressReport onGo={go} />
        </div>
      </div>
    );
  } else {
    // An address the app does not know: show home rather than a blank page.
    screen = <Oggi onGo={go} />;
  }

  return (
    <div className="im-app">
      <main className="im-main">{screen}</main>
      <TabBar active={tabFor(route)} onGo={go} />
    </div>
  );
}
