/*
 * Lettura · Pratica: the three reading exercises of the exam. Fill the gaps in
 * a short text, match each notice to its continuation, or read a text and
 * answer the questions. Same rules as before: answer everything, then check;
 * the score and the right answers appear, and "Riprova" clears the attempt.
 *
 * Nothing is saved: the screen this replaces never wrote a reading attempt to
 * the progress report, so this one does not either.
 */
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { At as recordAttempt } from '../app.js';
import exercises from '../data/reading-exercises.json';
import { IconCheck, IconChevron, IconClose, IconText } from '../shell/icons.jsx';
import TaskScreen from './TaskScreen.jsx';

/*
 * The three exercise types, in exam order, under the app's own names.
 * `parts` is what there is to answer and `solution` is the right answer for
 * one part. Answers are kept by position, in the form the old screen used:
 * the chosen word (cloze), the chosen letter (match), the index of the chosen
 * option (comprehension).
 */
const TYPES = {
  cloze: {
    label: 'Fill the Gaps',
    unit: 'spazi',
    hint: 'Completa tutti gli spazi.',
    parts: (exercise) => exercise.blanks,
    solution: (exercise, i) => exercise.blanks[i].opts[exercise.blanks[i].a],
    Body: GapFill,
  },
  match: {
    label: 'Match',
    unit: 'avvisi',
    hint: 'Abbina tutti gli avvisi.',
    parts: (exercise) => exercise.notices,
    solution: (exercise, i) => exercise.ans[i],
    Body: NoticeMatch,
  },
  comprehension: {
    label: 'Read & Answer',
    unit: 'domande',
    hint: 'Rispondi a tutte le domande.',
    parts: (exercise) => exercise.questions,
    solution: (exercise, i) => exercise.questions[i].a,
    Body: ReadAndAnswer,
  },
};

const FILTERS = [{ id: 'all', label: 'Tutti' }, ...Object.entries(TYPES).map(([id, type]) => ({ id, label: type.label }))];

// One of the app's scene photos for each exercise.
const scene = (name) => `${import.meta.env.BASE_URL}img/scenes/${name}.jpg`;
const PHOTO = {
  'cloze-lavoro': 'bar',
  'cloze-salute': 'medico',
  'cloze-corso': 'classe',
  'match-servizi': 'ufficio',
  'match-annunci': 'supermercato',
  'comp-lettera': 'soggiorno',
  'comp-articolo': 'persona',
  'comp-volantino': 'parco',
  'comp-italiano': 'cucina',
  'comp-prenotazione': 'camera',
  'comp-questura': 'ufficio',
  'comp-giornata': 'strada',
  'comp-weekend-viaggio': 'stazione',
};
const photoFor = (exercise) => scene(PHOTO[exercise.id] || 'biblioteca');

// Not in the shared icon set: a chevron that points down, or up when open.
function IconFold({ size = 16, open = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={open ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'} />
    </svg>
  );
}

// A tick or a cross with a few words, so the result never rests on colour alone.
function Verdict({ right, children }) {
  return (
    <span className={`im-rd-verdict ${right ? 'im-rd-ok' : 'im-rd-no'}`}>
      {right ? <IconCheck size={18} /> : <IconClose size={18} />}
      <span>{right ? 'Corretto' : children}</span>
    </span>
  );
}

const menuClass = (checked, right) => `im-rd-select${checked ? (right ? ' im-rd-ok' : ' im-rd-no') : ''}`;

/* ---------- fill the gaps ---------- */

function GapFill({ exercise, answers, checked, isRight, onAnswer }) {
  // The text marks each gap as "(1)___". Every gap becomes a menu, in order.
  const pieces = exercise.text.split(/\(\d+\)___/);

  return (
    <>
      <div className="im-rd-card">
        <p className="im-rd-text im-rd-gapped">
          {pieces.map((piece, i) => (
            <Fragment key={i}>
              {piece}
              {i < exercise.blanks.length && (
                <label className="im-rd-gap">
                  <span className="im-rd-badge">
                    <span className="im-sr">Spazio </span>
                    {i + 1}
                  </span>
                  <select
                    className={menuClass(checked, isRight(i))}
                    value={answers[i] ?? ''}
                    disabled={checked}
                    onChange={(event) => onAnswer(i, event.target.value)}
                  >
                    <option value="">Scegli</option>
                    {exercise.blanks[i].opts.map((word) => (
                      <option key={word} value={word}>
                        {word}
                      </option>
                    ))}
                  </select>
                </label>
              )}
            </Fragment>
          ))}
        </p>
      </div>

      {checked && (
        <ul className="im-rd-results">
          {exercise.blanks.map((blank, i) => (
            <li key={i}>
              <b>Spazio {i + 1}</b>
              <Verdict right={isRight(i)}>
                Risposta corretta: <b>{blank.opts[blank.a]}</b>
              </Verdict>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

/* ---------- match the notices ---------- */

function NoticeMatch({ exercise, answers, checked, isRight, onAnswer }) {
  const continuationText = (letter) => (exercise.options.find(([l]) => l === letter) || [])[1];

  return (
    <>
      <h2 className="im-overline im-rd-heading">Avvisi</h2>
      <div className="im-rd-group">
        {exercise.notices.map(([number, text], i) => {
          // A notice is a heading, a line break, then its body.
          const [heading, ...body] = text.split('\n');
          const correctLetter = exercise.ans[i];
          return (
            <div key={number} className="im-rd-notice">
              <div className="im-rd-lettered">
                <span className="im-rd-badge">{number}</span>
                <p className="im-rd-notice-text">
                  <b>{heading}</b>
                  {body.join('\n')}
                </p>
              </div>
              <label className="im-rd-pick">
                <span className="im-overline">
                  Continuazione<span className="im-sr"> dell’avviso {number}</span>
                </span>
                {/* The answer is the letter; the menu also shows the sentence, so there is no need to scroll down to read it. */}
                <select
                  className={menuClass(checked, isRight(i))}
                  value={answers[i] ?? ''}
                  disabled={checked}
                  onChange={(event) => onAnswer(i, event.target.value)}
                >
                  <option value="">Scegli</option>
                  {exercise.options.map(([letter, sentence]) => (
                    <option key={letter} value={letter}>
                      {letter} · {sentence}
                    </option>
                  ))}
                </select>
              </label>
              {checked && (
                <Verdict right={isRight(i)}>
                  <b>Risposta corretta: {correctLetter}</b> {continuationText(correctLetter)}
                </Verdict>
              )}
            </div>
          );
        })}
      </div>

      <h2 className="im-overline im-rd-heading">Continuazioni</h2>
      <ul className="im-rd-continuations">
        {exercise.options.map(([letter, sentence]) => (
          <li key={letter} className="im-rd-lettered">
            <span className="im-rd-badge">{letter}</span>
            <span>{sentence}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

/* ---------- read, then answer ---------- */

// The text in a card that starts folded, so the first question stays close.
function Passage({ text }) {
  const [open, setOpen] = useState(false);
  const [cutOff, setCutOff] = useState(false);
  const textRef = useRef(null);

  // Offer "Mostra tutto" only when the folded card really hides some text.
  useLayoutEffect(() => {
    const box = textRef.current;
    if (box && !open) setCutOff(box.scrollHeight > box.clientHeight + 1);
  }, [text, open]);

  return (
    <div className="im-rd-card">
      <p ref={textRef} className={`im-rd-text${open ? '' : ' im-rd-folded'}`}>
        {text}
      </p>
      {cutOff && (
        <button
          type="button"
          className={`im-rd-more${open ? '' : ' im-rd-over'}`}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Mostra meno' : 'Mostra tutto'} <IconFold open={open} />
        </button>
      )}
    </div>
  );
}

function ReadAndAnswer({ exercise, answers, checked, onAnswer }) {
  // Hiding the text is the old "Hide text" switch: answer from memory.
  const [showText, setShowText] = useState(true);
  const total = exercise.questions.length;

  return (
    <>
      <button type="button" className="im-linkbtn" onClick={() => setShowText((v) => !v)} aria-expanded={showText}>
        <IconText size={18} /> {showText ? 'Nascondi il testo' : 'Mostra il testo'}
      </button>
      {showText && <Passage text={exercise.text} />}

      {exercise.questions.map((q, qi) => (
        <fieldset key={qi} className="im-question">
          <legend>
            <span className="im-overline">
              Domanda {qi + 1} di {total}
            </span>
            <span className="im-question-text">{q.q}</span>
          </legend>
          {q.opts.map((option, oi) => {
            const chosen = answers[qi] === oi;
            let state = chosen ? ' chosen' : '';
            if (checked && oi === q.a) state = ' correct';
            else if (checked && chosen) state = ' wrong';
            return (
              <button
                key={oi}
                type="button"
                className={`im-option${state}`}
                aria-pressed={chosen}
                disabled={checked}
                onClick={() => onAnswer(qi, oi)}
              >
                <span>{option}</span>
                {checked && oi === q.a && <IconCheck size={20} />}
                {checked && chosen && oi !== q.a && <IconClose size={20} />}
                {checked && oi === q.a && <span className="im-sr">Risposta corretta</span>}
                {checked && chosen && oi !== q.a && <span className="im-sr">La tua risposta, sbagliata</span>}
              </button>
            );
          })}
        </fieldset>
      ))}
    </>
  );
}

/* ---------- one exercise, full screen ---------- */

function ReadingTask({ exercise, position, count, onClose, onPrev, onNext }) {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const scoreRef = useRef(null);

  // Moving to another exercise starts from a clean slate.
  useEffect(() => {
    setAnswers({});
    setChecked(false);
  }, [exercise.id]);

  // The check button sits below the last answer: bring the score into view.
  useEffect(() => {
    if (checked && scoreRef.current) scoreRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [checked]);

  const type = TYPES[exercise.type];
  const parts = type.parts(exercise);
  const total = parts.length;
  const isRight = (i) => answers[i] === type.solution(exercise, i);
  // A menu put back on "Scegli" holds an empty string, which is not an answer.
  const allAnswered = parts.every((_, i) => answers[i] !== undefined && answers[i] !== '');
  const score = parts.filter((_, i) => isRight(i)).length;

  const answer = (i, value) => {
    if (!checked) setAnswers((a) => ({ ...a, [i]: value }));
  };

  // The original app never saved reading attempts, so "Lettura" stayed empty in
  // the progress report and the coach kept suggesting it. They are saved now,
  // the same way a listening attempt is.
  const check = () => {
    setChecked(true);
    recordAttempt({ section: 'lettura', taskId: exercise.id, score, max: total });
  };

  const footer = checked ? (
    <>
      <button
        type="button"
        className="im-btn secondary"
        onClick={() => {
          setAnswers({});
          setChecked(false);
        }}
      >
        Riprova
      </button>
      <button type="button" className="im-btn primary" onClick={onNext}>
        Prossimo esercizio
      </button>
    </>
  ) : (
    <div className="im-footer-stack">
      {!allAnswered && <span className="im-footer-hint">{type.hint}</span>}
      <button type="button" className="im-btn primary" disabled={!allAnswered} onClick={check}>
        Controlla le risposte
      </button>
    </div>
  );

  return (
    <TaskScreen
      photo={photoFor(exercise)}
      overline={`${type.label} · ${position} di ${count}`}
      title={exercise.topic}
      context={exercise.intro}
      onClose={onClose}
      closeLabel="Tutti gli esercizi"
      footer={footer}
    >
      {checked && (
        <p ref={scoreRef} className={`im-score im-rd-score${score === total ? ' full' : ''}`} role="status">
          {score} su {total} corrette
        </p>
      )}

      {/* Keyed so the folded text and the hide/show switch reset with each exercise, but not on "Riprova". */}
      <type.Body key={exercise.id} exercise={exercise} answers={answers} checked={checked} isRight={isRight} onAnswer={answer} />

      <button type="button" className="im-linkbtn subtle" onClick={onPrev}>
        Esercizio precedente
      </button>
    </TaskScreen>
  );
}

/* ---------- the list ---------- */

export default function Reading() {
  const [filter, setFilter] = useState('all');
  const [open, setOpen] = useState(null);

  // Previous and next walk the list as filtered, so the count on the photo matches what was chosen.
  const visible = filter === 'all' ? exercises : exercises.filter((exercise) => exercise.type === filter);
  const count = visible.length;

  return (
    <>
      <div className="im-rd-filter" role="group" aria-label="Tipo di esercizio">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={filter === f.id ? 'im-rd-on' : ''}
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="im-rows">
        {visible.map((exercise, i) => {
          const type = TYPES[exercise.type];
          return (
            <li key={exercise.id}>
              <button type="button" className="im-row" onClick={() => setOpen(i)}>
                <img className="im-row-thumb" src={photoFor(exercise)} alt="" loading="lazy" />
                <span className="im-row-text">
                  <b>{exercise.topic}</b>
                  <small>
                    {type.label} · {type.parts(exercise).length} {type.unit}
                  </small>
                </span>
                <span className="im-rd-chevron" aria-hidden="true">
                  <IconChevron size={20} />
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {open !== null && (
        <ReadingTask
          exercise={visible[open]}
          position={open + 1}
          count={count}
          onClose={() => setOpen(null)}
          onPrev={() => setOpen((open - 1 + count) % count)}
          onNext={() => setOpen((open + 1) % count)}
        />
      )}
    </>
  );
}
