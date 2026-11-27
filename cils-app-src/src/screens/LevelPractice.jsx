/*
 * Practice for one paper of the chosen exam and level, from the level banks
 * (src/data/level-*.json). Three kinds of exercise share this file:
 *
 *   choice    listen, read, or complete a sentence, then pick one of three answers
 *   writing   a prompt with a word target, a word counter and a model answer
 *   speaking  a prompt with points to cover and a model answer read aloud
 *
 * Which paper asks for which kind is decided by the paper's `skill` in
 * src/exams/catalog.js.
 */
import { useEffect, useState } from 'react';
import {
  getDialogueVoices,
  getSpeechToken,
  hasItalianVoice,
  isSpeechSupported,
  pause,
  recordAttempt,
  speakLine,
  stopSpeech,
} from '../app.js';
import { exercisesFor } from '../exams/bank.js';
import { markDone, useDone } from '../exams/progress.js';
import { IconCheck, IconChevron, IconClose, IconPause, IconPlay, IconText } from '../shell/icons.jsx';
import TaskScreen from './TaskScreen.jsx';

const scene = (name) => `${import.meta.env.BASE_URL}img/scenes/${name}.jpg`;

// The section name an attempt is filed under in the progress records.
const SECTION = { ascolto: 'ascolto', lettura: 'lettura', strutture: 'grammatica', scrittura: 'scrittura', orale: 'orale' };

const SPEEDS = [
  { v: 0.8, l: 'Lento' },
  { v: 0.92, l: 'Normale' },
  { v: 1, l: 'Esame' },
];

const countWords = (text) => (text.trim() ? text.trim().split(/\s+/).length : 0);

/* ---------- reading the recording aloud ---------- */

function usePlayer(lines, resetKey) {
  const [playing, setPlaying] = useState(false);
  const [plays, setPlays] = useState(0);
  const [rate, setRate] = useState(0.92);

  useEffect(() => {
    stopSpeech();
    setPlaying(false);
    setPlays(0);
    return () => stopSpeech();
  }, [resetKey]);

  async function play() {
    if (playing || !isSpeechSupported()) return;
    stopSpeech();
    const token = getSpeechToken();
    setPlaying(true);
    const [voiceA, voiceB] = getDialogueVoices();
    for (const line of lines) {
      if (token !== getSpeechToken()) break;
      const options =
        line.s === 'B'
          ? { rate, voice: voiceB.voice, pitch: voiceB.pitch }
          : line.s === 'A'
            ? { rate, voice: voiceA.voice, pitch: voiceA.pitch }
            : { rate };
      await speakLine(line.it, options);
      await pause(line.s === 'V' ? 250 : 450);
    }
    setPlaying(false);
    setPlays((n) => n + 1);
  }

  const stop = () => {
    stopSpeech();
    setPlaying(false);
  };

  return { playing, plays, rate, setRate, play, stop };
}

function Player({ player, idleLabel = 'Ascolta' }) {
  const { playing, plays, rate, setRate, play, stop } = player;
  const canSpeak = isSpeechSupported();
  return (
    <>
      <div className="im-player">
        <button
          type="button"
          className={`im-play${playing ? ' on' : ''}`}
          onClick={playing ? stop : play}
          disabled={!canSpeak}
          aria-label={playing ? 'Ferma' : plays === 0 ? idleLabel : 'Riascolta'}
        >
          {playing ? <IconPause size={24} /> : <IconPlay size={24} />}
        </button>
        <div className="im-player-side">
          <span className="im-player-status">
            {playing ? 'In riproduzione…' : plays === 0 ? idleLabel : `Riascolta · ascoltato ${plays}×`}
          </span>
          <div className="im-pills" role="group" aria-label="Velocità">
            {SPEEDS.map((s) => (
              <button key={s.v} type="button" className={rate === s.v ? 'on' : ''} aria-pressed={rate === s.v} onClick={() => setRate(s.v)}>
                {s.l}
              </button>
            ))}
          </div>
        </div>
      </div>
      {!canSpeak && <p className="im-note warn">Questo dispositivo non può leggere il testo ad alta voce.</p>}
      {canSpeak && !hasItalianVoice() && (
        <p className="im-note warn">Nessuna voce italiana installata su questo dispositivo: l’audio userà la voce predefinita.</p>
      )}
    </>
  );
}

/* ---------- listening, reading, structures ---------- */

function ChoiceTask({ item, skill, level, overline, onClose, onNext, nextLabel }) {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const [showText, setShowText] = useState(false);
  const isListening = skill === 'ascolto';
  const player = usePlayer(item.lines || [], item.id);

  useEffect(() => {
    setAnswers({});
    setChecked(false);
    setShowText(false);
  }, [item.id]);

  const total = item.questions.length;
  const allAnswered = item.questions.every((_, i) => answers[i] !== undefined);
  const score = item.questions.filter((q, i) => answers[i] === q.a).length;
  // Without a voice on the device the recording cannot be heard, so do not wait for it.
  const heard = !isListening || player.plays > 0 || !isSpeechSupported();

  const check = () => {
    setChecked(true);
    markDone(item.id, score, total);
    recordAttempt({ level, section: SECTION[skill], taskId: item.id, score, max: total });
  };

  const hint = !heard ? 'Ascolta almeno una volta prima di rispondere.' : !allAnswered ? 'Rispondi a tutte le domande.' : null;

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
        {nextLabel}
      </button>
    </>
  ) : (
    <div className="im-footer-stack">
      {hint && <span className="im-footer-hint">{hint}</span>}
      <button type="button" className="im-btn primary" disabled={!allAnswered || !heard} onClick={check}>
        Controlla le risposte
      </button>
    </div>
  );

  return (
    <TaskScreen photo={scene(item.photo)} overline={overline} title={item.title} context={item.context} onClose={onClose} closeLabel="Tutti gli esercizi" footer={footer}>
      {isListening && <Player player={player} />}

      {item.text && (
        <div className="im-lv-text">
          {item.text.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      )}

      {checked && (
        <p className={`im-score${score === total ? ' full' : ''}`}>
          {score} su {total} corrette
        </p>
      )}

      {item.questions.map((q, qi) => (
        <fieldset key={qi} className="im-question">
          <legend>
            <span className="im-overline">
              {skill === 'strutture' ? 'Frase' : 'Domanda'} {qi + 1} di {total}
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
                onClick={() => !checked && setAnswers((a) => ({ ...a, [qi]: oi }))}
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

      {checked && isListening && (
        <div className="im-transcript">
          <button type="button" className="im-linkbtn" onClick={() => setShowText((v) => !v)} aria-expanded={showText}>
            <IconText size={18} /> {showText ? 'Nascondi il testo' : 'Mostra il testo'}
          </button>
          {showText && (
            <div className="im-transcript-text">
              {item.lines.map((line, i) => (
                <p key={i}>
                  {line.s !== 'V' && <b>{line.s} </b>}
                  {line.it}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </TaskScreen>
  );
}

/* ---------- writing and speaking ---------- */

function PointList({ points }) {
  return (
    <ul className="im-lv-points">
      {points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  );
}

function WritingTask({ item, level, words, overline, onClose, onNext, nextLabel }) {
  const storageKey = `lv_text_${item.id}`;
  const [text, setText] = useState('');
  const [showModel, setShowModel] = useState(false);

  // A draft is kept on the device, so closing the exercise does not lose it.
  useEffect(() => {
    let saved = '';
    try {
      saved = localStorage.getItem(storageKey) || '';
    } catch {
      /* no storage: start empty */
    }
    setText(saved);
    setShowModel(false);
  }, [storageKey]);

  const [min, max] = words;
  const count = countWords(text);
  const inRange = count >= min && count <= max;
  const status = count === 0 ? '' : count < min ? `Ancora ${min - count}` : count > max ? `${count - max} in più` : 'Nella misura giusta';

  const change = (value) => {
    setText(value);
    try {
      localStorage.setItem(storageKey, value);
    } catch {
      /* no storage: keep the text on screen only */
    }
  };

  const finish = () => {
    setShowModel(true);
    markDone(item.id, inRange ? 1 : 0, 1);
    recordAttempt({ level, section: 'scrittura', taskId: item.id, score: inRange ? 1 : 0, max: 1, pass: inRange });
  };

  const footer = showModel ? (
    <>
      <button type="button" className="im-btn secondary" onClick={() => setShowModel(false)}>
        Modifica
      </button>
      <button type="button" className="im-btn primary" onClick={onNext}>
        {nextLabel}
      </button>
    </>
  ) : (
    <div className="im-footer-stack">
      {count < min && <span className="im-footer-hint">Scrivi almeno {min} parole per confrontare con il modello.</span>}
      <button type="button" className="im-btn primary" disabled={count < min} onClick={finish}>
        Confronta con un modello
      </button>
    </div>
  );

  return (
    <TaskScreen photo={scene(item.photo)} overline={overline} title={item.title} context={item.prompt} onClose={onClose} closeLabel="Tutti gli esercizi" footer={footer}>
      <div className="im-lv-meta">
        <span>{item.kind}</span>
        <span>
          {min}–{max} parole
        </span>
      </div>
      <div>
        <span className="im-overline">Nel testo</span>
        <PointList points={item.points} />
      </div>

      <div className="im-lv-field">
        <label htmlFor={`lv-${item.id}`} className="im-overline">
          Il tuo testo
        </label>
        <textarea id={`lv-${item.id}`} className="im-lv-textarea" rows={8} value={text} onChange={(e) => change(e.target.value)} placeholder="Scrivi qui…" />
        <div className={`im-lv-count${inRange ? ' ok' : count > max ? ' over' : ''}`} role="status">
          <span>
            {count} {count === 1 ? 'parola' : 'parole'}
          </span>
          <span>{status}</span>
        </div>
      </div>

      {showModel && (
        <div className="im-lv-model">
          <span className="im-overline">Un modello possibile</span>
          <p>{item.model}</p>
          <span className="im-lv-model-note">{countWords(item.model)} parole. È un esempio, non l’unica risposta giusta: controlla di aver toccato tutti i punti.</span>
        </div>
      )}
    </TaskScreen>
  );
}

function SpeakingTask({ item, level, overline, onClose, onNext, nextLabel }) {
  const [showModel, setShowModel] = useState(false);
  const player = usePlayer([{ s: 'V', it: item.model }], item.id);

  useEffect(() => setShowModel(false), [item.id]);

  const reveal = () => {
    setShowModel(true);
    markDone(item.id, 1, 1);
    recordAttempt({ level, section: 'orale', taskId: item.id, score: 1, max: 1, pass: true });
  };

  const footer = showModel ? (
    <button type="button" className="im-btn primary" onClick={onNext}>
      {nextLabel}
    </button>
  ) : (
    <div className="im-footer-stack">
      <span className="im-footer-hint">Rispondi ad alta voce, poi confronta.</span>
      <button type="button" className="im-btn primary" onClick={reveal}>
        Ho risposto: mostra un modello
      </button>
    </div>
  );

  return (
    <TaskScreen photo={scene(item.photo)} overline={overline} title={item.title} context={item.prompt} onClose={onClose} closeLabel="Tutti gli esercizi" footer={footer}>
      <div className="im-lv-meta">
        <span>{item.kind}</span>
        <span>{item.kind === 'Monologo' ? 'Circa 2 minuti' : '2–3 minuti'}</span>
      </div>
      <div>
        <span className="im-overline">{item.kind === 'Monologo' ? 'Parla di' : 'Nella conversazione'}</span>
        <PointList points={item.points} />
      </div>

      {showModel && (
        <div className="im-lv-model">
          <span className="im-overline">Un modello possibile</span>
          <Player player={player} idleLabel="Ascolta il modello" />
          <p>{item.model}</p>
        </div>
      )}
    </TaskScreen>
  );
}

/* ---------- the list for one paper ---------- */

export default function LevelPractice({ paper, level }) {
  const items = exercisesFor(level, paper.skill);
  const [open, setOpen] = useState(null);
  const done = useDone();

  if (items.length === 0) {
    return <p className="im-note warn">Gli esercizi per questa prova non sono ancora disponibili.</p>;
  }

  const describe = (item) => {
    if (item.questions) return `${item.type} · ${item.questions.length} ${paper.skill === 'strutture' ? 'frasi' : 'domande'}`;
    if (paper.skill === 'scrittura') {
      const [min, max] = wordsFor(paper, items.indexOf(item), item);
      return `${item.kind} · ${min}–${max} parole`;
    }
    return item.kind;
  };

  const item = open === null ? null : items[open];
  const last = open === items.length - 1;
  const common = item && {
    item,
    level,
    overline: `${paper.title} · ${open + 1} di ${items.length}`,
    onClose: () => setOpen(null),
    onNext: () => (last ? window.history.back() : setOpen(open + 1)),
    nextLabel: last ? 'Torna alla lista' : 'Prossimo',
  };

  return (
    <>
      <ul className="im-rows">
        {items.map((entry, i) => {
          const record = done[entry.id];
          return (
            <li key={entry.id}>
              <button type="button" className="im-row" onClick={() => setOpen(i)}>
                <img className="im-row-thumb" src={scene(entry.photo)} alt="" loading="lazy" />
                <span className="im-row-text">
                  <b>{entry.title}</b>
                  <small>{describe(entry)}</small>
                  {record && (
                    <small className="im-lv-done">
                      <IconCheck size={14} /> {entry.questions ? `Fatto · ${record.score} su ${record.max}` : 'Fatto'}
                    </small>
                  )}
                </span>
                <span className="im-row-go" aria-hidden="true">
                  <IconChevron size={20} />
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {item && item.questions && <ChoiceTask {...common} skill={paper.skill} />}
      {item && paper.skill === 'scrittura' && <WritingTask {...common} words={wordsFor(paper, open, item)} />}
      {item && paper.skill === 'orale' && <SpeakingTask {...common} />}
    </>
  );
}

// The exam's own word count for this task where its specification gives one, otherwise the bank's.
function wordsFor(paper, index, item) {
  return (paper.words && paper.words[index]) || item.words;
}
