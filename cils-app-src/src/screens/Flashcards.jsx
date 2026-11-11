/*
 * Parole · Carte: flashcards. One card at a time (tap to turn it, then "La so"
 * or "Ancora"), a quiz on the same deck, the deck picker and the ten words of
 * the day. Everything is saved under the same storage keys as before: fc_deck,
 * fc_idx, fc_known, fc_streak and, for the quiz, fcq_<deck>_<date>_i / _a / _d.
 */
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  $e as buildQuiz,
  Ge as countStudyDay,
  Ke as PHRASE_DECK_IDS,
  M as stopSpeech,
  N as usePersistentState,
  Ue as TODAY,
  We as readStreak,
  Ze as colourForWord,
  j as speakLine,
  k as isSpeechSupported,
  qe as getWordsOfTheDay,
  tt as ALL_CARDS,
  ze as photoForWord,
} from '../app.js';
import decks from '../data/flashcard-decks.json';
import { IconBack, IconCheck, IconChevron, IconClose } from '../shell/icons.jsx';
import TaskScreen from './TaskScreen.jsx';

const QUIZ_PHOTO = `${import.meta.env.BASE_URL}img/scenes/biblioteca.jpg`;

// The decks offered first; the rest appear with "Mostra altri mazzi".
const FEATURED_DECK_IDS = new Set([
  'everyday',
  'health',
  'work',
  'food',
  'home',
  'verbs',
  'verbs-essential',
  'adjectives',
  'frasi-utili',
  'prova-orale',
  'prova-scritta',
]);

const TOTAL_CARDS = decks.reduce((sum, deck) => sum + deck.cards.length, 0);

// Some decks hold whole phrases: they are set smaller so they fit the card.
const sizeOf = (text) => (text.length > 60 ? ' xl' : text.length > 28 ? ' l' : text.length > 14 ? ' m' : '');

/* ---------- icons this screen needs, in the style of shell/icons.jsx ---------- */

const line = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

function IconSpeaker({ size = 22 }) {
  return (
    <svg {...line} width={size} height={size}>
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" />
    </svg>
  );
}

function IconAgain({ size = 22 }) {
  return (
    <svg {...line} width={size} height={size}>
      <path d="M1 4v6h6" />
      <path d="M3.5 15a9 9 0 1 0 2.1-9.4L1 10" />
    </svg>
  );
}

function IconStreak({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 2L4.09 12.52a.5.5 0 0 0 .41.78h5.01L8 22l10.91-10.52a.5.5 0 0 0-.41-.78h-5.01L13 2z" />
    </svg>
  );
}

/* ---------- the quiz on the current deck ---------- */

function DeckQuiz({ cards, deckId, deckLabel, onClose }) {
  // The questions are the same all day for a deck, so a quiz can be picked up again.
  const questions = useMemo(() => buildQuiz(cards, String(deckId)), [deckId]);
  const storageKey = `fcq_${deckId}_${TODAY}`;
  const [index, setIndex] = usePersistentState(`${storageKey}_i`, 0);
  const [answers, setAnswers] = usePersistentState(`${storageKey}_a`, {});
  const [done, setDone] = usePersistentState(`${storageKey}_d`, false);

  const total = questions.length;
  const question = questions[index] || questions[0];
  const chosen = answers[index];
  const answered = chosen !== undefined;
  const score = Object.entries(answers).filter(([i, option]) => questions[i] && option === questions[i].a).length;

  const choose = (option) => {
    if (!answered) setAnswers((a) => ({ ...a, [index]: option }));
  };
  const advance = () => {
    if (index + 1 < total) setIndex(index + 1);
    else setDone(true);
  };
  const restart = () => {
    setIndex(0);
    setAnswers({});
    setDone(false);
  };

  const footer = done ? (
    <>
      <button type="button" className="im-btn secondary" onClick={restart}>
        Riprova
      </button>
      {/* Leaving is a "back" step, like the close button of the task screen. */}
      <button type="button" className="im-btn primary" onClick={() => window.history.back()}>
        Torna alle carte
      </button>
    </>
  ) : (
    <div className="im-footer-stack">
      {!answered && <span className="im-footer-hint">Scegli una risposta.</span>}
      <button type="button" className="im-btn primary" disabled={!answered} onClick={advance}>
        {index + 1 < total ? 'Avanti' : 'Vedi il risultato'}
      </button>
    </div>
  );

  return (
    <TaskScreen
      photo={QUIZ_PHOTO}
      overline={done ? 'Risultato' : `Domanda ${index + 1} di ${total}`}
      title={`Quiz · ${deckLabel}`}
      onClose={onClose}
      closeLabel="Torna alle carte"
      footer={footer}
    >
      {done ? (
        <>
          <p className="im-fc-percent">{Math.round((score / total) * 100)}%</p>
          <p className={`im-score${score === total ? ' full' : ''}`}>
            {score} su {total} corrette
          </p>
        </>
      ) : (
        <>
          <div className="im-fc-bar" aria-hidden="true">
            <div style={{ width: `${(index / total) * 100}%` }} />
          </div>
          <fieldset className="im-question">
            <legend>
              <span className="im-overline">Che cosa significa?</span>
              <span className="im-question-text im-fc-quiz-word">{question.it}</span>
            </legend>
            {question.opts.map((option, oi) => {
              const isChosen = chosen === oi;
              let state = '';
              if (answered && oi === question.a) state = ' correct';
              else if (answered && isChosen) state = ' wrong';
              return (
                <button
                  key={oi}
                  type="button"
                  className={`im-option${state}`}
                  aria-pressed={isChosen}
                  disabled={answered}
                  onClick={() => choose(oi)}
                >
                  <span>{option}</span>
                  {answered && oi === question.a && <IconCheck size={20} />}
                  {answered && isChosen && oi !== question.a && <IconClose size={20} />}
                  {answered && oi === question.a && <span className="im-sr">Risposta corretta</span>}
                  {answered && isChosen && oi !== question.a && <span className="im-sr">La tua risposta, sbagliata</span>}
                </button>
              );
            })}
          </fieldset>
          {answered && (
            <p className={`im-fc-fb ${chosen === question.a ? 'ok' : 'no'}`} role="status">
              {chosen === question.a ? <IconCheck size={18} /> : <IconClose size={18} />}
              <span>
                {chosen === question.a ? (
                  'Corretto!'
                ) : (
                  <>
                    Risposta giusta: <b>{question.opts[question.a]}</b>
                  </>
                )}
              </span>
            </p>
          )}
          <div className="im-fc-quiz-status">
            <span>
              Corrette: <b>{score}</b>
            </span>
            <button type="button" className="im-linkbtn subtle" onClick={restart}>
              Ricomincia il quiz
            </button>
          </div>
        </>
      )}
    </TaskScreen>
  );
}

/* ---------- one of the ten words of the day ---------- */

function WordOfTheDay({ word }) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const colour = word.deckId === 'colours' ? colourForWord(word.it) : null;
  const photo = colour ? null : photoForWord(word.it);
  return (
    <li className="im-fc-tile">
      {colour && <span className="im-fc-tile-media" style={{ background: colour }} aria-hidden="true" />}
      {photo && !photoFailed && (
        <img className="im-fc-tile-media" src={photo} alt="" loading="lazy" onError={() => setPhotoFailed(true)} />
      )}
      <span className="im-fc-tile-text">
        <b>{word.it}</b>
        <small>{word.en}</small>
      </span>
    </li>
  );
}

/* ---------- the side of the card that is showing ---------- */

// Front: the word on its photo when there is one (a colour sample in the colours
// deck), otherwise on a plain white card. Back: the translation and an example.
function CardFace({ card, flipped, isPhraseCard, colour, photo, onPhotoError }) {
  if (flipped) {
    return (
      <span className="im-fc-face back">
        <span className="im-fc-text">
          <span className="im-overline on-photo">{isPhraseCard ? 'Risposta' : 'Inglese'}</span>
          <span className={`im-fc-word${sizeOf(card.en)}`}>{card.en}</span>
          {card.ex && <span className="im-fc-example">“{card.ex}”</span>}
          <span className="im-fc-hint">Tocca per girare</span>
        </span>
      </span>
    );
  }
  return (
    <span className={`im-fc-face${photo ? ' photo' : ''}`}>
      {colour && <span className="im-fc-swatch" style={{ background: colour }} aria-hidden="true" />}
      {photo && (
        <>
          <img src={photo} alt="" onError={onPhotoError} />
          <span className="im-fc-scrim" aria-hidden="true" />
        </>
      )}
      <span className="im-fc-text">
        <span className={`im-overline${photo ? ' on-photo' : ''}`}>
          {isPhraseCard ? card.deckLabel : `Italiano · ${card.deckLabel}`}
        </span>
        <span className={`im-fc-word${sizeOf(card.it)}`}>{card.it}</span>
        <span className="im-fc-hint">Tocca per girare</span>
      </span>
    </span>
  );
}

/* ---------- the screen ---------- */

export default function Flashcards() {
  const [deckId, setDeckId] = usePersistentState('fc_deck', ALL_CARDS);
  const [index, setIndex] = usePersistentState('fc_idx', 0);
  // Known cards are remembered by their position in the deck, as before.
  const [known, setKnown] = usePersistentState('fc_known', []);
  const [flipped, setFlipped] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [streak, setStreak] = useState(readStreak);
  const [countedToday, setCountedToday] = useState(() => readStreak().last === TODAY);
  const [showAllDecks, setShowAllDecks] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);
  const wordsOfTheDay = useMemo(getWordsOfTheDay, []);
  const studyRef = useRef(null);

  const deck = decks.find((item) => item.id === deckId);
  const deckLabel = deck ? deck.label : 'Tutte le carte';
  const cards = useMemo(
    () =>
      deckId === ALL_CARDS
        ? decks.flatMap((item) => item.cards.map((card) => ({ ...card, deckLabel: item.label, deckId: item.id })))
        : (deck ? deck.cards : []).map((card) => ({ ...card, deckLabel: deck.label, deckId })),
    [deckId],
  );
  const card = cards[index] ?? cards[0];
  const visibleDecks = showAllDecks ? decks : decks.filter((item) => FEATURED_DECK_IDS.has(item.id));

  // The phrase decks have an English prompt on the front and the Italian on the back.
  const isPhraseCard = Boolean(card) && PHRASE_DECK_IDS.has(card.deckId);
  const colour = card && card.deckId === 'colours' ? colourForWord(card.it) : null;
  const photo = card && !colour ? photoForWord(card.it) : null;
  const canSpeak = isSpeechSupported();

  // A photo that failed to load is only that card's problem.
  useEffect(() => {
    setPhotoFailed(false);
  }, [deckId, index]);

  useEffect(() => () => stopSpeech(), []);

  const flip = () => setFlipped((value) => !value);
  const next = () => {
    if (!cards.length) return;
    setIndex((i) => (i + 1) % cards.length);
    setFlipped(false);
  };
  const previous = () => {
    if (!cards.length) return;
    setIndex((i) => (i - 1 + cards.length) % cards.length);
    setFlipped(false);
  };
  const randomCard = () => {
    if (!cards.length) return;
    setIndex(Math.floor(Math.random() * cards.length));
    setFlipped(false);
  };

  // "La so" or "Ancora": the first card judged each day counts for the streak.
  const judge = (isKnown) => {
    if (!countedToday) {
      setCountedToday(true);
      try {
        setStreak(countStudyDay());
      } catch {
        /* storage unavailable: study goes on without a streak */
      }
    }
    if (isKnown) setKnown((list) => [...new Set([...list, index])]);
    next();
  };

  const startOver = () => {
    setKnown([]);
    setIndex(0);
    setFlipped(false);
  };

  const chooseDeck = (id) => {
    stopSpeech();
    setDeckId(id);
    setIndex(0);
    setFlipped(false);
    // The deck list is below the card: bring the first card of the new deck into view.
    if (studyRef.current) studyRef.current.scrollIntoView({ block: 'start' });
  };

  const speak = () => {
    stopSpeech();
    speakLine(card.it);
  };

  // Keyboard, as before: arrows to browse, space to turn, K "la so", R "ancora".
  useEffect(() => {
    if (quizOpen) return undefined;
    const onKey = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const key = e.key || '';
      const tag = e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      // The row of words scrolls with the arrow keys when it has the focus.
      if (e.target.closest && e.target.closest('.im-fc-words')) return;
      if (key === 'ArrowRight') next();
      else if (key === 'ArrowLeft') previous();
      else if (key === ' ') {
        // On a button, space already presses that button.
        if (tag === 'BUTTON') return;
        e.preventDefault();
        flip();
      } else if (key.toLowerCase() === 'k') judge(true);
      else if (key.toLowerCase() === 'r') judge(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, cards.length, countedToday, quizOpen]);

  return (
    <div className="im-fc">
      <section className="im-fc-study" ref={studyRef} aria-label="Carte">
        <div className="im-fc-head">
          <span className="im-fc-deckname">{deckLabel}</span>
          <span className="im-fc-count">
            Carta {index + 1} di {cards.length}
          </span>
        </div>
        <div className="im-fc-bar" aria-hidden="true">
          <div style={{ width: `${cards.length ? Math.min(100, ((index + 1) / cards.length) * 100) : 0}%` }} />
        </div>

        {card ? (
          <>
            <div className="im-fc-stage">
              <span className="im-fc-under far" aria-hidden="true" />
              <span className="im-fc-under near" aria-hidden="true" />
              <button type="button" className="im-fc-card" onClick={flip}>
                {/* Keyed by side, so turning the card replays the short turn animation. */}
                <CardFace
                  key={flipped ? 'back' : 'front'}
                  card={card}
                  flipped={flipped}
                  isPhraseCard={isPhraseCard}
                  colour={colour}
                  photo={photo && !photoFailed ? photo : null}
                  onPhotoError={() => setPhotoFailed(true)}
                />
              </button>
              {!isPhraseCard && (
                <button
                  type="button"
                  className="im-fc-speak"
                  onClick={speak}
                  disabled={!canSpeak}
                  aria-label="Ascolta la pronuncia"
                >
                  <IconSpeaker />
                </button>
              )}
              {/* Tells a screen reader what is on the other side once the card is turned. */}
              <span className="im-sr" aria-live="polite">
                {flipped ? card.en : ''}
              </span>
            </div>

            <div className="im-fc-judge">
              <button type="button" className="im-btn secondary" onClick={() => judge(false)}>
                <IconAgain size={18} /> Ancora
              </button>
              <button type="button" className="im-btn primary" onClick={() => judge(true)}>
                <IconCheck size={18} /> La so
              </button>
            </div>

            <div className="im-fc-browse" role="group" aria-label="Sfoglia le carte">
              <button type="button" onClick={previous}>
                <IconBack size={16} /> Precedente
              </button>
              <button type="button" onClick={randomCard}>
                A caso
              </button>
              <button type="button" onClick={next}>
                Successiva <IconChevron size={16} />
              </button>
            </div>
          </>
        ) : (
          <p className="im-note warn">Questo mazzo non c’è più: scegline un altro qui sotto.</p>
        )}

        <div className="im-fc-status">
          <span>
            Sapute: <b>{new Set(known).size}</b>
          </span>
          {streak.count > 0 && (
            <span className="im-fc-streak">
              <IconStreak size={16} />
              {streak.count === 1 ? '1 giorno di fila' : `${streak.count} giorni di fila`}
            </span>
          )}
        </div>
        <div className="im-fc-actions">
          <button type="button" className="im-linkbtn" disabled={!card} onClick={() => setQuizOpen(true)}>
            Quiz su questo mazzo
          </button>
          <button type="button" className="im-linkbtn subtle" onClick={startOver}>
            Ricomincia da capo
          </button>
        </div>
        <p className="im-fc-keys">
          Tastiera: <kbd>←</kbd> <kbd>→</kbd> sfoglia · <kbd>spazio</kbd> gira · <kbd>K</kbd> la so ·{' '}
          <kbd>R</kbd> ancora
        </p>
      </section>

      <section>
        <div className="im-fc-section-head">
          <h2 className="im-overline">Parole del giorno</h2>
          <span>10 parole · oggi</span>
        </div>
        <ul className="im-fc-words" tabIndex={0} aria-label="Parole del giorno">
          {wordsOfTheDay.map((word, i) => (
            <WordOfTheDay key={i} word={word} />
          ))}
        </ul>
      </section>

      <section>
        <div className="im-fc-section-head">
          <h2 className="im-overline">Mazzi</h2>
          <span>
            {decks.length} mazzi · {TOTAL_CARDS} carte
          </span>
        </div>
        <ul className="im-fc-decks">
          {[{ id: ALL_CARDS, label: 'Tutte le carte', count: TOTAL_CARDS }]
            .concat(visibleDecks.map((item) => ({ id: item.id, label: item.label, count: item.cards.length })))
            .map((item) => {
              const on = item.id === deckId;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`im-fc-deck${on ? ' on' : ''}`}
                    aria-pressed={on}
                    onClick={() => chooseDeck(item.id)}
                  >
                    <b>{item.label}</b>
                    <small>{item.count} carte</small>
                    <span className="im-fc-deck-mark">{on && <IconCheck size={18} />}</span>
                  </button>
                </li>
              );
            })}
        </ul>
        <button
          type="button"
          className="im-linkbtn im-fc-more"
          aria-expanded={showAllDecks}
          onClick={() => setShowAllDecks((value) => !value)}
        >
          {showAllDecks ? 'Mostra meno mazzi' : `Mostra altri ${decks.length - visibleDecks.length} mazzi`}
        </button>
      </section>

      {quizOpen && (
        <DeckQuiz cards={cards} deckId={deckId} deckLabel={deckLabel} onClose={() => setQuizOpen(false)} />
      )}
    </div>
  );
}
