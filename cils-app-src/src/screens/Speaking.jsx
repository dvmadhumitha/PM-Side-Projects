/*
 * Orale · Produzione: choose a speaking task, hear it read aloud, record the
 * answer with live speech-to-text (or type it), then compare it with the model
 * answer and rate yourself. Same rules as before; the clock beside the record
 * button is new and only shows how long the recording has run.
 */
import { useEffect, useId, useRef, useState } from 'react';
import {
  isSpeechSupported,
  recordAttempt,
  speakLine,
  stopSpeech,
  Ai as isAiAvailable,
  F as countWords,
  Ji as TYPE_LABEL,
  Ni as requestAiEvaluation,
  Qi as CRITERIA_LABEL,
  Yi as LEVEL_LABEL,
  be as createRecogniser,
  ye as isRecognitionSupported,
} from '../app.js';
import tasks from '../data/speaking-tasks.json';
import { IconArrow, IconClock, IconPlay } from '../shell/icons.jsx';
import TaskScreen from './TaskScreen.jsx';

const LEVELS = [1, 2, 3];

// One of the app's scene photos for each task.
const scene = (name) => `${import.meta.env.BASE_URL}img/scenes/${name}.jpg`;
const PHOTO = {
  s1: 'persona',
  s3: 'soggiorno',
  s4: 'strada',
  s5: 'parco',
  s6: 'medico',
  s7: 'cucina',
  s8: 'ufficio',
  s9: 'supermercato',
  s10: 'strada',
  s11: 'stazione',
  s12: 'ufficio',
  s13: 'ufficio',
  s14: 'dolci',
  s15: 'strada',
  s16: 'cucina',
  s17: 'persona',
  s18: 'stazione',
  s19: 'ufficio',
  s20: 'strada',
  s21: 'classe',
  s22: 'persona',
  s23: 'persona',
  s24: 'sugo',
  s25: 'soggiorno',
  s26: 'salumeria',
  s27: 'parco',
  s28: 'parco',
  s29: 'pasta',
  s30: 'stazione',
};
const photoFor = (task) => scene(PHOTO[task.id] || 'bar');

// How the learner rates the answer against the model, and the app's reply to each (word for word as before).
const SELF_RATINGS = ['Da rivedere', 'Quasi bene', 'Bene!', 'Ottimo!'];
const SELF_REPLIES = [
  'Continua a praticare — ci arriverai!',
  'Quasi! Riprova e nota le frasi chiave.',
  'Bel lavoro!',
  'Eccellente!',
];

// The task's own length ("45–60 seconds", "1–1.5 minutes", "~90 secondi"): its first number is the time to reach.
function targetSeconds(duration) {
  const first = /\d+(?:\.\d+)?/.exec(duration);
  if (!first) return null;
  return Math.round(parseFloat(first[0]) * (/min/i.test(duration) ? 60 : 1));
}

const clock = (seconds) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;

/* Icons this screen needs that the shell does not have, drawn the same way. */
const line = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};
function IconMic({ size = 22 }) {
  return (
    <svg {...line} width={size} height={size}>
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <path d="M12 19v4M8 23h8" />
    </svg>
  );
}
function IconSpeaker({ size = 22 }) {
  return (
    <svg {...line} width={size} height={size}>
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
    </svg>
  );
}
function IconStop({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" rx="3" />
    </svg>
  );
}

function Dots({ value }) {
  return (
    <span className="im-sp-dots" role="img" aria-label={`${value} su 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= value ? 'full' : ''} />
      ))}
    </span>
  );
}

/* The examiner's marking, when the AI service is switched on (see isAiAvailable). */
function AiEvaluation({ result }) {
  return (
    <section className="im-sp-card" aria-label="Valutazione orale">
      <h3 className="im-overline">Valutazione orale</h3>
      <ul className="im-sp-criteria">
        {Object.entries(result.scores || {}).map(([key, value]) => (
          <li key={key}>
            <span>{CRITERIA_LABEL[key] || key}</span>
            <Dots value={value} />
          </li>
        ))}
      </ul>

      {result.verdict && <p className="im-sp-verdict">{result.verdict}</p>}

      {result.corrections?.length > 0 && (
        <ol className="im-sp-corrections">
          {result.corrections.map((correction, i) => (
            <li key={i}>
              <p>{correction.said}</p>
              <p className="fixed">
                <IconArrow size={16} /> {correction.better}
              </p>
              <p className="why">{correction.why}</p>
            </li>
          ))}
        </ol>
      )}

      {result.tip && (
        <p className="im-sp-tip">
          <b>Prossimo tentativo:</b> {result.tip}
        </p>
      )}

      {result.overall && (
        <div className="im-sp-block">
          <h3 className="im-overline">Come potresti esprimerlo</h3>
          <p className="im-sp-reading">{result.overall}</p>
        </div>
      )}
    </section>
  );
}

function SpeakingTask({ task, onClose }) {
  const [transcript, setTranscript] = useState('');
  const [recording, setRecording] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [reading, setReading] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [selfRating, setSelfRating] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState(null);
  const fieldId = useId();
  const recogniserRef = useRef(null);
  const modelRef = useRef(null);

  const canSpeak = isSpeechSupported();
  const canRecognise = isRecognitionSupported();
  const wordCount = countWords(transcript);
  const target = targetSeconds(task.duration);

  // Leaving the task turns the microphone and the voice off.
  useEffect(
    () => () => {
      if (recogniserRef.current) recogniserRef.current.stop();
      stopSpeech();
    },
    [],
  );

  // The clock runs only while the microphone is on, and starts again with each recording.
  useEffect(() => {
    if (!recording) return undefined;
    const startedAt = Date.now();
    setElapsed(0);
    const tick = setInterval(() => setElapsed(Math.floor((Date.now() - startedAt) / 1000)), 250);
    return () => clearInterval(tick);
  }, [recording]);

  // The model answer appears below the answer box: bring it into view.
  useEffect(() => {
    if (showModel && modelRef.current) modelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [showModel]);

  function toggleRecording() {
    if (!canRecognise) return;
    if (recording) {
      if (recogniserRef.current) recogniserRef.current.stop();
      setRecording(false);
      return;
    }
    const recogniser = createRecogniser({ lang: 'it-IT', onUpdate: setTranscript, onEnd: () => setRecording(false) });
    if (recogniser) {
      recogniserRef.current = recogniser;
      recogniser.start();
      setRecording(true);
    }
  }

  async function toggleReading() {
    if (reading) {
      stopSpeech();
      setReading(false);
      return;
    }
    setReading(true);
    await speakLine(task.cue, { rate: 0.88 });
    setReading(false);
  }

  // Same as before: only the first two "…" are dropped before a phrase is read aloud.
  const speakPhrase = (phrase) => speakLine(phrase.replace('…', '').replace('…', ''), { rate: 0.82 });

  async function evaluateWithAi() {
    setAiLoading(true);
    setAiResult(null);
    const result = await requestAiEvaluation(transcript, task);
    setAiResult(result);
    setAiLoading(false);
    if (result && !result.error && result.scores) {
      const values = Object.values(result.scores);
      const score = Math.round((values.reduce((sum, value) => sum + value, 0) / values.length) * 2);
      recordAttempt({
        section: 'orale',
        taskId: task.id,
        score,
        pass: result.esito ? result.esito === 'promosso' : score >= 6,
      });
    }
  }

  // The learner's own rating is the only score a spoken answer gets without the
  // AI examiner, so it is what goes into the progress report (1 to 4, which the
  // report shows on its scale of 10). The original app saved nothing here, so
  // "Orale" stayed empty and the coach never stopped suggesting it.
  const rate = (rating) => {
    setSelfRating(rating);
    recordAttempt({ section: 'orale', taskId: task.id, score: rating + 1, max: SELF_RATINGS.length });
  };

  const modelLabel = showModel ? 'Risposta modello mostrata' : 'Mostra risposta modello';

  const footer = canRecognise ? (
    <div className="im-sp-controls">
      <div className={`im-sp-timer${target !== null && elapsed >= target ? ' reached' : ''}`} role="timer" aria-label="Durata della registrazione">
        <b>{clock(elapsed)}</b>
        {target !== null && <small>obiettivo {clock(target)}</small>}
      </div>
      <button
        type="button"
        className={`im-sp-rec${recording ? ' on' : ''}`}
        onClick={toggleRecording}
        aria-label={recording ? 'Ferma registrazione' : 'Inizia a registrare'}
      >
        {recording ? <IconStop size={28} /> : <IconMic size={28} />}
      </button>
      <button type="button" className="im-linkbtn im-sp-model-link" onClick={() => setShowModel(true)} disabled={showModel}>
        {modelLabel}
      </button>
    </div>
  ) : (
    <button type="button" className="im-btn primary" onClick={() => setShowModel(true)} disabled={showModel}>
      {modelLabel}
    </button>
  );

  return (
    <TaskScreen
      photo={photoFor(task)}
      overline={`${TYPE_LABEL[task.type]} · Livello ${task.level} · ${task.topic}`}
      title={task.title}
      onClose={onClose}
      closeLabel="Tutti i compiti"
      aside={
        <div className="im-sp-aside">
          <span className="im-sp-pill">
            <IconClock size={16} /> {task.duration}
          </span>
          {canSpeak && (
            <button
              type="button"
              className={`im-round static${reading ? ' im-sp-reading-on' : ''}`}
              onClick={toggleReading}
              aria-label={reading ? 'Ferma' : 'Ascolta il compito'}
            >
              {reading ? <IconStop size={20} /> : <IconSpeaker size={20} />}
            </button>
          )}
        </div>
      }
      footer={footer}
    >
      <div className="im-sp-block">
        <h2 className="im-overline">Compito</h2>
        <p className="im-sp-prompt">{task.prompt}</p>
      </div>

      <div className="im-sp-block">
        <h2 className="im-overline">Frasi utili</h2>
        <ul className="im-sp-phrases">
          {task.keyPhrases.map((phrase, i) => (
            <li key={i}>
              <button type="button" onClick={() => speakPhrase(phrase)} aria-label={`Ascolta: ${phrase}`}>
                <IconPlay size={12} />
                <span lang="it">{phrase}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {!canRecognise && (
        <p className="im-note warn">La trascrizione live richiede Chrome o Edge. Puoi scrivere qui sotto quello che hai detto.</p>
      )}

      <div className={`im-sp-answer${recording ? ' live' : ''}`}>
        <div className="im-sp-answer-head">
          <label className="im-overline" htmlFor={fieldId}>
            La tua risposta
          </label>
          <span className="im-overline" role="status">
            {recording && (
              <>
                <span className="im-sp-live-dot" aria-hidden="true" /> in ascolto
              </>
            )}
          </span>
        </div>
        <textarea
          id={fieldId}
          className="im-sp-textarea"
          lang="it"
          rows={5}
          placeholder={canRecognise ? 'La trascrizione appare qui mentre parli…' : 'Scrivi qui quello che diresti…'}
          value={transcript}
          onChange={(event) => setTranscript(event.target.value)}
        />
      </div>

      {isAiAvailable() && !aiResult && !aiLoading && wordCount >= 8 && (
        <div className="im-sp-ai-cta">
          <button type="button" className="im-btn secondary" onClick={evaluateWithAi}>
            Valuta la mia produzione orale
          </button>
          <span className="im-footer-hint">Punteggio CILS + correzioni, powered by Mistral AI</span>
        </div>
      )}

      {aiLoading && (
        <p className="im-sp-status" role="status">
          Valutazione in corso…
        </p>
      )}

      {aiResult && aiResult.error && (
        <div className="im-note warn im-sp-error" role="alert">
          <span>
            {aiResult.error === 'rate-limit' ? 'Troppe richieste: riprova tra qualche secondo.' : 'Valutazione non riuscita: riprova.'}
          </span>
          <button type="button" className="im-linkbtn" onClick={() => setAiResult(null)}>
            OK
          </button>
        </div>
      )}

      {aiResult && !aiResult.error && <AiEvaluation result={aiResult} />}

      {showModel && (
        <section className="im-sp-card" ref={modelRef}>
          <h3 className="im-overline">Risposta modello</h3>
          <p className="im-sp-reading" lang="it">
            {task.model}
          </p>
          {selfRating === null ? (
            <div className="im-sp-block">
              <h3 className="im-overline">Come valuteresti la tua produzione?</h3>
              <div className="im-pills im-sp-self">
                {SELF_RATINGS.map((label, i) => (
                  <button key={i} type="button" onClick={() => rate(i)}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <p className="im-sp-self-reply" role="status">
              {SELF_REPLIES[selfRating]}
            </p>
          )}
        </section>
      )}
    </TaskScreen>
  );
}

export default function Speaking() {
  const [level, setLevel] = useState(null);
  const [openId, setOpenId] = useState(null);

  const visible = level ? tasks.filter((task) => task.level === level) : tasks;
  const openTask = tasks.find((task) => task.id === openId);

  return (
    <div className="im-sp-screen">
      <div className="im-pills im-sp-levels" role="group" aria-label="Livello">
        <button type="button" className={level === null ? 'on' : ''} aria-pressed={level === null} onClick={() => setLevel(null)}>
          Tutti i livelli
        </button>
        {LEVELS.map((n) => (
          <button key={n} type="button" className={level === n ? 'on' : ''} aria-pressed={level === n} onClick={() => setLevel(n)}>
            {LEVEL_LABEL[n]}
          </button>
        ))}
      </div>

      <ul className="im-rows">
        {visible.map((task) => {
          // How often the topic has come up in the exam, where the content says so.
          const frequency = task.seen
            ? `Uscito in ${task.seen} esami campione`
            : task.freq >= 3
              ? 'Molto frequente all’esame'
              : null;
          return (
            <li key={task.id}>
              <button type="button" className="im-row im-sp-row" onClick={() => setOpenId(task.id)}>
                <span className="im-sp-row-icon" aria-hidden="true">
                  <IconMic size={20} />
                </span>
                <span className="im-row-text">
                  <b>{task.title}</b>
                  <small>
                    {TYPE_LABEL[task.type]} · {task.topic} · {task.duration}
                  </small>
                  {frequency && <small className="im-sp-row-freq">{frequency}</small>}
                </span>
                <span className="im-sp-row-level">Liv. {task.level}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {openTask && <SpeakingTask key={openTask.id} task={openTask} onClose={() => setOpenId(null)} />}
    </div>
  );
}
