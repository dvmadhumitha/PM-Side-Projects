/*
 * Grammatica · Esercizi: pick a topic, then work through its sets of exercises
 * (choose the answer, fill the gaps, rewrite, put in order, match, find the error).
 * Same rules as before: complete a whole set, then check it. Answers are kept
 * between visits under the same storage keys (ge_<set id>_a); the check itself
 * is not, and nothing is sent to the progress report, exactly as before.
 */
import { Fragment, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  At as recordAttempt,
  N as usePersistentState,
  dn as countItems,
  gn as TYPE_DESCRIPTION,
  pn as topicGroups,
  un as topics,
} from '../app.js';
import { matchesModelAnswer } from '../lib/answers.js';
import { IconBack, IconCheck, IconChevron, IconClose } from '../shell/icons.jsx';
import TaskScreen from './TaskScreen.jsx';

const PHOTO = `${import.meta.env.BASE_URL}img/scenes/classe.jpg`;

// Options this short sit side by side, as in the design; longer ones get a row each.
const SHORT_OPTION = 12;

const capitalise = (text) => text.charAt(0).toUpperCase() + text.slice(1);
const typeLabel = (set) => capitalise(TYPE_DESCRIPTION[set.type] || 'esercizio');

// The loose comparison the app has always used: capitals and . , ! ? do not count.
const plain = (text) => text.toLowerCase().replace(/[.,!?]/g, '');

// The app's own quick shuffle (word order, endings to match).
const shuffled = (list) => [...list].sort(() => Math.random() - 0.5);

/* ---------- small building blocks ---------- */

// A sentence from the content, with each "___" drawn as a blank to fill.
function Sentence({ text }) {
  const parts = text.split(/_{2,}/);
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && <span className="im-gr-blank" role="img" aria-label="spazio da completare" />}
    </Fragment>
  ));
}

function Feedback({ ok, children }) {
  return (
    <p className={`im-gr-fb ${ok ? 'ok' : 'no'}`}>
      {ok ? <IconCheck size={18} /> : <IconClose size={18} />}
      <span>{children}</span>
    </p>
  );
}

// Why the right answer is right, shown once the set has been checked.
function Explanation({ children }) {
  if (!children) return null;
  return (
    <p className="im-gr-explain">
      <span className="im-overline">Spiegazione</span>
      {children}
    </p>
  );
}

/*
 * What every kind of exercise shares: the progress line, the instruction, the
 * score, and the buttons at the bottom of the screen.
 *
 * The buttons belong in the task screen's footer, which lives outside the
 * exercise. Each exercise is mounted afresh per set (its saved answers are tied
 * to the set id), while the task screen must stay mounted (it owns the "back"
 * step), so the exercise draws its buttons into the footer through a portal.
 */
function ExerciseFrame(props) {
  const { set, frame, answered, total, complete, checked, score, approximate, hint, onCheck, onRetry, children } = props;
  const topRef = useRef(null);
  const scoreRef = useRef(null);

  // A new set in the same task screen starts at the top.
  useEffect(() => {
    const scroller = topRef.current && topRef.current.closest('.im-task-scroll');
    if (scroller) scroller.scrollTop = 0;
  }, []);

  // The check button is below the last question: bring the score into view.
  useEffect(() => {
    if (checked && scoreRef.current) scoreRef.current.scrollIntoView({ block: 'start' });
  }, [checked]);

  // Checking a set also saves its score to the progress report. The original
  // app never did, so "Grammatica" stayed empty there however much you practised.
  const check = () => {
    onCheck();
    recordAttempt({ section: 'grammatica', taskId: set.id, score, max: total });
  };

  const footer = checked ? (
    <>
      <button type="button" className="im-btn secondary" onClick={onRetry}>
        Riprova
      </button>
      <button type="button" className="im-btn primary" onClick={frame.onNext}>
        {frame.nextLabel}
      </button>
    </>
  ) : (
    <div className="im-footer-stack">
      {!complete && <span className="im-footer-hint">{hint}</span>}
      <button type="button" className="im-btn primary" disabled={!complete} onClick={check}>
        Controlla le risposte
      </button>
    </div>
  );

  return (
    <>
      <div
        ref={topRef}
        className="im-gr-progress"
        role="progressbar"
        aria-label="Risposte date"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={Math.min(answered, total)}
      >
        <div style={{ width: `${total ? (Math.min(answered, total) / total) * 100 : 0}%` }} />
      </div>
      <p className="im-gr-instruction">{set.instruction}</p>
      {checked && (
        <p ref={scoreRef} className={`im-score im-gr-score${score === total ? ' full' : ''}`}>
          {approximate ? 'Circa ' : ''}
          {score} su {total} corrette
        </p>
      )}
      {children}
      {frame.footerSlot && createPortal(footer, frame.footerSlot)}
    </>
  );
}

/* ---------- the six kinds of exercise ---------- */

// "mcq" (complete or answer a sentence) and "error" (pick the corrected sentence).
function ChoiceExercise({ set, frame }) {
  const [answers, setAnswers] = usePersistentState(`ge_${set.id}_a`, {});
  const [checked, setChecked] = useState(false);
  const findError = set.type === 'error';
  const total = set.items.length;
  const answered = Object.keys(answers).length;
  const score = set.items.filter((item, i) => answers[i] === item.a).length;

  return (
    <ExerciseFrame
      set={set}
      frame={frame}
      answered={answered}
      total={total}
      complete={answered >= total}
      checked={checked}
      score={score}
      hint="Rispondi a tutte le domande."
      onCheck={() => setChecked(true)}
      onRetry={() => {
        setAnswers({});
        setChecked(false);
      }}
    >
      {set.items.map((item, qi) => {
        const chosen = answers[qi];
        const right = chosen === item.a;
        const sideBySide = item.opts.every((option) => option.length <= SHORT_OPTION);
        return (
          <fieldset key={qi} className="im-question im-gr-question">
            <legend>
              <span className="im-overline">
                Domanda {qi + 1} di {total}
              </span>
              <span className="im-gr-prompt">
                {findError && (
                  <span className="im-gr-flag">
                    <IconClose size={16} /> Frase sbagliata
                  </span>
                )}
                {/* The pictures are drawings kept in the content file itself. */}
                {item.visual && <span className="im-gr-visual" dangerouslySetInnerHTML={{ __html: item.visual }} />}
                {findError ? item.wrong : <Sentence text={item.q} />}
              </span>
            </legend>
            <div className={`im-gr-options${sideBySide ? ' two' : ''}`}>
              {item.opts.map((option, oi) => {
                const isChosen = chosen === oi;
                let state = isChosen ? ' chosen' : '';
                if (checked && oi === item.a) state = ' correct';
                else if (checked && isChosen) state = ' wrong';
                return (
                  <button
                    key={oi}
                    type="button"
                    className={`im-option${state}`}
                    aria-pressed={isChosen}
                    disabled={checked}
                    onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                  >
                    <span>{option}</span>
                    {checked && oi === item.a && <IconCheck size={20} />}
                    {checked && isChosen && oi !== item.a && <IconClose size={20} />}
                    {checked && oi === item.a && <span className="im-sr">Risposta corretta</span>}
                    {checked && isChosen && oi !== item.a && <span className="im-sr">La tua risposta, sbagliata</span>}
                  </button>
                );
              })}
            </div>
            {checked && (
              <Feedback ok={right}>
                {right ? (
                  'Corretto!'
                ) : (
                  <>
                    Risposta giusta: <b>{item.opts[item.a]}</b>
                  </>
                )}
                {!findError && item.hint && <span className="im-gr-fb-more">{item.hint}</span>}
                {findError && <span className="im-gr-fb-more">{item.why}</span>}
              </Feedback>
            )}
            {checked && !findError && item.explain && (
              <p className="im-gr-explain">
                <span className="im-overline">Spiegazione</span>
                {item.explain}
              </p>
            )}
          </fieldset>
        );
      })}
    </ExerciseFrame>
  );
}

// "cloze": a text with gaps. Either every gap has its own choices, or all gaps share a word bank.
function ClozeExercise({ set, frame }) {
  const ownChoices = Array.isArray(set.blanks);
  const total = ownChoices ? set.blanks.length : set.ans.length;
  const [values, setValues] = usePersistentState(`ge_${set.id}_a`, () => Array(total).fill(''));
  const [checked, setChecked] = useState(false);

  const pieces = ownChoices ? set.text.split(/\(\d+\)___/) : set.parts;
  const choicesFor = (i) => (ownChoices ? set.blanks[i].opts : set.bank);
  const answerFor = (i) => (ownChoices ? set.blanks[i].opts[set.blanks[i].a] : set.ans[i]);
  const isRight = (i) =>
    ownChoices ? values[i] === answerFor(i) : values[i]?.trim().toLowerCase() === set.ans[i].toLowerCase();
  const score = Array.from({ length: total }, (_, i) => isRight(i)).filter(Boolean).length;

  const fill = (i, value) => {
    const next = [...values];
    next[i] = value;
    setValues(next);
  };

  return (
    <ExerciseFrame
      set={set}
      frame={frame}
      answered={values.filter((value) => value !== '').length}
      total={total}
      complete={values.every((value) => value !== '')}
      checked={checked}
      score={score}
      hint="Completa tutti gli spazi."
      onCheck={() => setChecked(true)}
      onRetry={() => {
        setValues(Array(total).fill(''));
        setChecked(false);
      }}
    >
      {!ownChoices && (
        <p className="im-gr-bank">
          <span className="im-overline">Parole</span>
          {set.bank.map((word) => (
            <span key={word} className="im-gr-chip">
              {word}
            </span>
          ))}
        </p>
      )}
      <p className="im-gr-text">
        {pieces.map((piece, i) => (
          <Fragment key={i}>
            {piece}
            {i < total && (
              <label className={`im-gr-gap${checked ? (isRight(i) ? ' correct' : ' wrong') : ''}`}>
                <span className="im-gr-gap-n">
                  <span className="im-sr">Spazio </span>
                  {i + 1}
                </span>
                <select value={values[i] || ''} disabled={checked} onChange={(e) => fill(i, e.target.value)}>
                  <option value="">…</option>
                  {choicesFor(i).map((choice) => (
                    <option key={choice} value={choice}>
                      {choice}
                    </option>
                  ))}
                </select>
              </label>
            )}
          </Fragment>
        ))}
      </p>
      {checked && (
        <ul className="im-gr-results">
          {Array.from({ length: total }, (_, i) => (
            <li key={i}>
              <Feedback ok={isRight(i)}>
                Spazio {i + 1}:{' '}
                {isRight(i) ? (
                  'corretto'
                ) : (
                  <>
                    la risposta giusta è <b>{answerFor(i)}</b>
                  </>
                )}
              </Feedback>
              <Explanation>{ownChoices ? set.blanks[i].explain : set.explains && set.explains[i]}</Explanation>
            </li>
          ))}
        </ul>
      )}
    </ExerciseFrame>
  );
}

// "transform": rewrite a sentence by typing it.
function TransformExercise({ set, frame }) {
  const total = set.items.length;
  const [values, setValues] = usePersistentState(`ge_${set.id}_a`, () => Array(total).fill(''));
  const [checked, setChecked] = useState(false);
  const [hintsOpen, setHintsOpen] = useState({});

  const isRight = (i) => matchesModelAnswer(values[i], set.items[i].a);
  const score = set.items.filter((_, i) => isRight(i)).length;

  return (
    <ExerciseFrame
      set={set}
      frame={frame}
      answered={values.filter((value) => value.trim() !== '').length}
      total={total}
      complete={!values.some((value) => value.trim() === '')}
      checked={checked}
      score={score}
      hint="Scrivi tutte le risposte."
      onCheck={() => setChecked(true)}
      onRetry={() => {
        setValues(Array(total).fill(''));
        setChecked(false);
        setHintsOpen({});
      }}
    >
      {set.items.map((item, i) => {
        const fieldId = `im-gr-${set.id}-${i}`;
        const right = checked && isRight(i);
        return (
          <div key={i} className="im-gr-item">
            <label htmlFor={fieldId}>
              <span className="im-overline">
                Frase {i + 1} di {total}
              </span>
              <span className="im-question-text">
                <Sentence text={item.q} />
              </span>
            </label>
            <input
              id={fieldId}
              type="text"
              className={`im-gr-input${checked ? (right ? ' correct' : ' wrong') : ''}`}
              value={values[i] || ''}
              disabled={checked}
              onChange={(e) => {
                const next = [...values];
                next[i] = e.target.value;
                setValues(next);
              }}
              placeholder="Scrivi la risposta"
              autoComplete="off"
              autoCapitalize="none"
              spellCheck={false}
            />
            {!checked && (
              <button
                type="button"
                className="im-linkbtn"
                aria-expanded={Boolean(hintsOpen[i])}
                onClick={() => setHintsOpen((open) => ({ ...open, [i]: !open[i] }))}
              >
                {hintsOpen[i] ? 'Nascondi il suggerimento' : 'Mostra il suggerimento'}
              </button>
            )}
            {!checked && hintsOpen[i] && <p className="im-note im-gr-hint">{item.hint}</p>}
            {checked && (
              <Feedback ok={right}>
                {right ? (
                  'Corretto!'
                ) : (
                  <>
                    Risposta suggerita: <b>{item.a}</b>
                  </>
                )}
                {!right && <span className="im-gr-fb-more">{item.hint}</span>}
              </Feedback>
            )}
            {checked && <Explanation>{item.explain}</Explanation>}
          </div>
        );
      })}
    </ExerciseFrame>
  );
}

// "order": build the sentence by tapping its words.
const freshWordRows = (set) => set.items.map((item) => ({ pool: shuffled(item.words), chosen: [] }));

function OrderExercise({ set, frame }) {
  const total = set.items.length;
  const [rows, setRows] = usePersistentState(`ge_${set.id}_a`, () => freshWordRows(set));
  const [checked, setChecked] = useState(false);

  const isRight = (i) => rows[i].chosen.join(' ').toLowerCase() === plain(set.items[i].a);
  const score = set.items.filter((_, i) => isRight(i)).length;

  // Move one word between the pool and the sentence being built.
  const move = (rowIndex, from, to, wordIndex) => {
    if (checked) return;
    setRows((current) =>
      current.map((row, i) => {
        if (i !== rowIndex) return row;
        const source = [...row[from]];
        const [word] = source.splice(wordIndex, 1);
        return { ...row, [from]: source, [to]: [...row[to], word] };
      }),
    );
  };

  return (
    <ExerciseFrame
      set={set}
      frame={frame}
      answered={rows.filter((row) => row.chosen.length > 0).length}
      total={total}
      complete={!rows.some((row) => row.chosen.length === 0)}
      checked={checked}
      score={score}
      hint="Costruisci tutte le frasi."
      onCheck={() => setChecked(true)}
      onRetry={() => {
        setRows(freshWordRows(set));
        setChecked(false);
      }}
    >
      {set.items.map((item, i) => {
        const row = rows[i];
        const right = checked && isRight(i);
        return (
          <fieldset key={i} className="im-question im-gr-question">
            <legend>
              <span className="im-overline">
                Frase {i + 1} di {total}
              </span>
            </legend>
            <div className="im-gr-built">
              {row.chosen.length === 0 ? (
                <span className="im-gr-placeholder">
                  Tocca le parole qui sotto per costruire la frase.
                </span>
              ) : (
                row.chosen.map((word, wi) => (
                  <button
                    key={wi}
                    type="button"
                    className="im-gr-word placed"
                    disabled={checked}
                    aria-label={`Togli: ${word}`}
                    onClick={() => move(i, 'chosen', 'pool', wi)}
                  >
                    {word}
                  </button>
                ))
              )}
            </div>
            {row.pool.length > 0 && (
              <div className="im-gr-words">
                {row.pool.map((word, wi) => (
                  <button
                    key={wi}
                    type="button"
                    className="im-gr-word"
                    disabled={checked}
                    onClick={() => move(i, 'pool', 'chosen', wi)}
                  >
                    {word}
                  </button>
                ))}
              </div>
            )}
            {checked && (
              <Feedback ok={right}>
                {right ? (
                  'Corretto!'
                ) : (
                  <>
                    Risposta giusta: <b>{item.a}</b>
                  </>
                )}
                {!right && <span className="im-gr-fb-more">{item.hint}</span>}
              </Feedback>
            )}
            {checked && <Explanation>{item.explain}</Explanation>}
          </fieldset>
        );
      })}
    </ExerciseFrame>
  );
}

// "match": give every beginning its ending. One beginning is open at a time; the list below shows them all.
function MatchExercise({ set, frame }) {
  const total = set.pairs.length;
  // The endings are shuffled once per visit, as before.
  const [endings] = useState(() => shuffled(set.pairs.map((pair) => pair[1])));
  const [picks, setPicks] = usePersistentState(`ge_${set.id}_a`, {});
  const [checked, setChecked] = useState(false);
  const [active, setActive] = useState(() => Math.max(0, set.pairs.findIndex((_, i) => !picks[i])));

  const isRight = (i) => picks[i] === set.pairs[i][1];
  const score = set.pairs.filter((_, i) => isRight(i)).length;
  const answered = Object.keys(picks).length;

  const choose = (ending) => {
    const next = { ...picks, [active]: ending };
    setPicks(next);
    // Go on to the next beginning that still has no ending, if there is one.
    const open = set.pairs.map((_, i) => (active + 1 + i) % total).find((i) => !next[i]);
    if (open !== undefined) setActive(open);
  };

  // Which other beginning already uses this ending, so it is not given twice by accident.
  const usedBy = (ending) => set.pairs.findIndex((_, i) => i !== active && picks[i] === ending);

  return (
    <ExerciseFrame
      set={set}
      frame={frame}
      answered={answered}
      total={total}
      complete={answered >= total}
      checked={checked}
      score={score}
      hint="Abbina tutte le frasi."
      onCheck={() => setChecked(true)}
      onRetry={() => {
        setPicks({});
        setChecked(false);
        setActive(0);
      }}
    >
      {!checked && (
        <fieldset className="im-question im-gr-question">
          <legend>
            <span className="im-overline">
              Frase {active + 1} di {total}
            </span>
            <span className="im-question-text" aria-live="polite">
              {set.pairs[active][0]}
            </span>
          </legend>
          {endings.map((ending, i) => {
            const isChosen = picks[active] === ending;
            const other = usedBy(ending);
            return (
              <button
                key={i}
                type="button"
                className={`im-option${isChosen ? ' chosen' : ''}`}
                aria-pressed={isChosen}
                onClick={() => choose(ending)}
              >
                <span>{ending}</span>
                {other !== -1 && <small className="im-gr-used">frase {other + 1}</small>}
              </button>
            );
          })}
        </fieldset>
      )}
      <ol className="im-gr-match" aria-label="Le tue coppie">
        {set.pairs.map((pair, i) => {
          const right = checked && isRight(i);
          const state = checked ? (right ? ' correct' : ' wrong') : i === active ? ' on' : '';
          return (
            <li key={i}>
              <button
                type="button"
                className={`im-gr-pair${state}`}
                aria-pressed={checked ? undefined : i === active}
                disabled={checked}
                onClick={() => setActive(i)}
              >
                <span className="im-gr-pair-n">{i + 1}</span>
                <span className="im-gr-pair-text">
                  <b>{pair[0]}</b>
                  {picks[i] ? (
                    <span>{picks[i]}</span>
                  ) : (
                    <span className="empty">
                      Da abbinare
                    </span>
                  )}
                </span>
                {checked && (right ? <IconCheck size={20} /> : <IconClose size={20} />)}
                {checked && <span className="im-sr">{right ? 'Corretto' : 'Sbagliato'}</span>}
              </button>
              {checked && !right && (
                <Feedback ok={false}>
                  Risposta giusta: <b>{pair[1]}</b>
                </Feedback>
              )}
              {checked && <Explanation>{set.explains && set.explains[i]}</Explanation>}
            </li>
          );
        })}
      </ol>
    </ExerciseFrame>
  );
}

const EXERCISE = {
  mcq: ChoiceExercise,
  error: ChoiceExercise,
  cloze: ClozeExercise,
  transform: TransformExercise,
  order: OrderExercise,
  match: MatchExercise,
};

/* ---------- one topic, full screen ---------- */

function TopicTask({ entry, setIndex, onSelectSet, previous, next, onOpenTopic, onClose }) {
  const [footerSlot, setFooterSlot] = useState(null);
  const set = entry.sets[setIndex] || entry.sets[0];
  const isLastSet = setIndex >= entry.sets.length - 1;
  const Exercise = EXERCISE[set.type];

  // After a checked set: on to the topic's next set, then on to the next topic.
  const frame = {
    footerSlot,
    nextLabel: isLastSet ? 'Prossimo tema' : 'Prossima serie',
    onNext: isLastSet ? () => onOpenTopic(next.topic) : () => onSelectSet(setIndex + 1),
  };

  return (
    <TaskScreen
      photo={PHOTO}
      overline={`${typeLabel(set)} · ${countItems(set)} esercizi`}
      title={entry.topic}
      onClose={onClose}
      closeLabel="Tutti gli esercizi"
      footer={<div className="im-gr-footer" ref={setFooterSlot} />}
    >
      {entry.sets.length > 1 && (
        <div className="im-pills im-gr-sets" role="group" aria-label="Serie di esercizi">
          {entry.sets.map((option, i) => (
            <button
              key={option.id}
              type="button"
              className={i === setIndex ? 'on' : ''}
              aria-pressed={i === setIndex}
              onClick={() => onSelectSet(i)}
            >
              {typeLabel(option)} · {countItems(option)}
            </button>
          ))}
        </div>
      )}

      {/* Keyed by set: each set has its own saved answers. */}
      {Exercise && <Exercise key={set.id} set={set} frame={frame} />}

      <nav className="im-gr-nav" aria-label="Altri temi">
        <button type="button" onClick={() => onOpenTopic(previous.topic)}>
          <IconBack size={18} />
          <span>
            <small>Precedente</small>
            {previous.topic}
          </span>
        </button>
        <button type="button" className="next" onClick={() => onOpenTopic(next.topic)}>
          <span>
            <small>Successivo</small>
            {next.topic}
          </span>
          <IconChevron size={18} />
        </button>
      </nav>
    </TaskScreen>
  );
}

/* ---------- the list of topics ---------- */

export default function GrammarExercises() {
  // The open topic and which of its sets is showing; a topic always opens on its first set.
  const [open, setOpen] = useState(null);
  const entry = open ? topics.find((item) => item.topic === open.topic) : null;
  const openTopic = (topic) => setOpen({ topic, set: 0 });
  const position = entry ? topics.indexOf(entry) : -1;

  return (
    <>
      {topicGroups.map((group) => (
        <section key={group.label} className="im-gr-group">
          <div className="im-gr-group-head">
            <h2 className="im-overline">{group.label}</h2>
          </div>
          <ul className="im-gr-list">
            {group.items.map((item) => {
              const count = item.sets.reduce((sum, set) => sum + countItems(set), 0);
              const kinds = item.sets
                .map((set) => TYPE_DESCRIPTION[set.type])
                .filter((kind, i, all) => all.indexOf(kind) === i)
                .join(' · ');
              return (
                <li key={item.topic}>
                  <button type="button" className="im-gr-topic" onClick={() => openTopic(item.topic)}>
                    <span className="im-gr-topic-text">
                      <b>{item.topic}</b>
                      <small>{kinds}</small>
                    </span>
                    <span className="im-gr-topic-count">{count} esercizi</span>
                    <IconChevron size={18} />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      {entry && (
        <TopicTask
          entry={entry}
          setIndex={open.set}
          onSelectSet={(set) => setOpen({ topic: entry.topic, set })}
          // Previous and next follow the order of the content file and wrap around, as before.
          previous={topics[(position - 1 + topics.length) % topics.length]}
          next={topics[(position + 1) % topics.length]}
          onOpenTopic={openTopic}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  );
}
