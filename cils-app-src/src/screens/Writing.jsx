/*
 * Scrittura · Pratica: choose a writing task, write the answer, have it marked
 * out of 10, then compare it with the model answer. Same rules as before: the
 * draft is kept per task, a marked answer goes into the task's history and the
 * progress report, and the draft is cleared once it has been marked.
 */
import { useEffect, useId, useRef, useState } from 'react';
import {
  recordAttempt,
  usePersistentState,
  Ai as isAiAvailable,
  Ci as saveWritingAttempt,
  Di as getAttemptCount,
  Ei as getBestScore,
  F as countWords,
  Fi as LEVEL_LABEL,
  Li as CRITERIA_LABEL,
  Oi as getWritingProgress,
  P as gradeForCilsScore,
  Pi as TYPE_LABEL,
  ji as requestAiEvaluation,
  wi as getWritingAttempts,
  xi as scoreAnswer,
} from '../app.js';
import tasks from '../data/writing-tasks.json';
import { IconArrow, IconCheck, IconChevron, IconClose, IconProgress } from '../shell/icons.jsx';
import TaskScreen from './TaskScreen.jsx';

const LEVELS = [1, 2, 3];

// One of the app's scene photos for each task.
const scene = (name) => `${import.meta.env.BASE_URL}img/scenes/${name}.jpg`;
const PHOTO = {
  w1: 'classe',
  w2: 'pizza',
  w4: 'medico',
  w5: 'soggiorno',
  w6: 'supermercato',
  w7: 'stazione',
  w8: 'pasta',
  w9: 'camera',
  w10: 'parco',
  w11: 'classe',
  w12: 'strada',
  w13: 'medico',
  w14: 'soggiorno',
  w16: 'biblioteca',
  w17: 'soggiorno',
  w18: 'camera',
  w20: 'cucina',
  w21: 'persona',
  w22: 'stazione',
  w25: 'strada',
  w26: 'medico',
  w27: 'parco',
  w28: 'parco',
  w29: 'stazione',
};
const photoFor = (task) => scene(PHOTO[task.id] || 'ufficio');

// The scoring names one of four colours per grade; these are the same four bands in this design's palette.
const TONE_BY_COLOUR = { '#1E6B4F': 'good', '#2E7D8A': 'ok', '#C99A2E': 'fair', '#A8434B': 'low' };
// A saved score has no colour of its own: the same bands the old screen used for past attempts.
const toneFor = (score) => (score >= 8 ? 'good' : score >= 6 ? 'ok' : score >= 5 ? 'fair' : 'low');

const attemptsLabel = (n) => `${n} tentativ${n > 1 ? 'i' : 'o'}`;

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
function IconPen({ size = 22 }) {
  return (
    <svg {...line} width={size} height={size}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}
function IconBulb({ size = 22 }) {
  return (
    <svg {...line} width={size} height={size}>
      <path d="M9 18h6M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V17h6v-.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" />
    </svg>
  );
}
function IconAlert({ size = 22 }) {
  return (
    <svg {...line} width={size} height={size}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 7.5v5.5M12 16.5v.01" />
    </svg>
  );
}
function IconUndo({ size = 22 }) {
  return (
    <svg {...line} width={size} height={size}>
      <path d="M9 14L4 9l5-5" />
      <path d="M4 9h10a6 6 0 0 1 0 12h-3" />
    </svg>
  );
}

// The marks the old screen drew as text symbols.
const FEEDBACK_ICON = { ok: IconCheck, warn: IconAlert, error: IconClose, tip: IconArrow };
const OUTCOME = {
  promosso: { label: 'Promosso', tone: 'good', Icon: IconCheck },
  borderline: { label: 'Al limite', tone: 'fair', Icon: IconAlert },
  'non promosso': { label: 'Non promosso', tone: 'low', Icon: IconClose },
};
const SENTENCE_RATING = {
  good: { label: 'Bene', tone: 'good', Icon: IconCheck },
  weak: { label: 'Debole', tone: 'fair', Icon: IconAlert },
  error: { label: 'Errore', tone: 'low', Icon: IconClose },
};
const AI_ERROR = {
  'rate-limit': 'Troppe richieste: riprova tra qualche secondo.',
  network: 'Errore di rete: controlla la connessione e riprova.',
};

function WordMeter({ count, target }) {
  const [min, max] = target;
  const inRange = count >= min && count <= max;
  const state = inRange ? 'in' : count < min ? 'under' : 'over';
  return (
    <div className={`im-wr-meter ${state}`}>
      <div className="im-wr-meter-bar" aria-hidden="true">
        <div style={{ width: `${Math.min((count / max) * 100, 100)}%` }} />
      </div>
      <span className="im-wr-meter-label">
        {count} / {min}–{max} parole
        {inRange && <IconCheck size={16} />}
        {inRange && <span className="im-sr">Lunghezza giusta</span>}
      </span>
    </div>
  );
}

function ScoreRing({ score, tone }) {
  const circumference = 2 * Math.PI * 36;
  return (
    <svg className={`im-wr-ring im-wr-tone ${tone}`} width="96" height="96" viewBox="0 0 96 96" role="img" aria-label={`${score} su 10`}>
      <circle className="im-wr-ring-track" cx="48" cy="48" r="36" fill="none" strokeWidth="7" />
      <circle
        cx="48"
        cy="48"
        r="36"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={`${(score / 10) * circumference} ${circumference}`}
        transform="rotate(-90 48 48)"
      />
      <text className="im-wr-ring-score" x="48" y="45" textAnchor="middle" dominantBaseline="middle">
        {score}
      </text>
      <text className="im-wr-ring-max" x="48" y="66" textAnchor="middle">
        / 10
      </text>
    </svg>
  );
}

function Dots({ value }) {
  return (
    <span className="im-wr-dots" role="img" aria-label={`${value} su 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= value ? 'full' : ''} />
      ))}
    </span>
  );
}

function Badge({ kind }) {
  return (
    <span className={`im-wr-badge ${kind.tone}`}>
      <kind.Icon size={14} /> {kind.label}
    </span>
  );
}

/* The app's own marking: length, key phrases and effort, out of 10. */
function Evaluation({ result }) {
  const tone = TONE_BY_COLOUR[result.colour] || 'low';
  return (
    <>
      <div className="im-wr-result-head">
        <ScoreRing score={result.totalScore} tone={tone} />
        <div className="im-wr-grade">
          <b className={`im-wr-tone ${tone}`}>{result.grade}</b>
          {/* the scoring calls its English gloss "gradeIt" */}
          <span>{result.gradeIt}</span>
          <small>
            Lunghezza {result.wordScore}/3 · Frasi chiave {result.phraseScore}/5 · Tentativo {result.attemptScore}/2
          </small>
        </div>
      </div>

      <ul className="im-wr-feedback">
        {result.feedback.map((row, i) => {
          const Icon = FEEDBACK_ICON[row.type] || IconArrow;
          return (
            <li key={i} className={row.type}>
              <Icon size={18} />
              <span>{row.text}</span>
            </li>
          );
        })}
      </ul>

      <div className="im-wr-block">
        <h3 className="im-overline">Frasi chiave</h3>
        <ul className="im-wr-chips">
          {result.phraseResults.map((item, i) => (
            <li key={i} className={item.found ? 'found' : 'missed'}>
              {item.found ? <IconCheck size={14} /> : <span className="im-wr-chip-empty" aria-hidden="true" />}
              {item.phrase}
              <span className="im-sr">{item.found ? ': usata' : ': non usata'}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

/* The examiner's marking, when the AI service is switched on (see isAiAvailable). */
function AiEvaluation({ result }) {
  const score = result.cilsScore ?? 0;
  const grade = gradeForCilsScore(score);
  const tone = TONE_BY_COLOUR[grade.colour] || 'low';
  const outcome = OUTCOME[result.esito] || null;
  return (
    <>
      <div className="im-wr-result-head">
        <ScoreRing score={score} tone={tone} />
        <div className="im-wr-grade">
          <b className={`im-wr-tone ${tone}`}>{grade.grade}</b>
          <span>{grade.en}</span>
          {outcome && <Badge kind={outcome} />}
        </div>
      </div>

      {result.verdict && <p className="im-wr-verdict">{result.verdict}</p>}

      <ul className="im-wr-criteria">
        {Object.entries(CRITERIA_LABEL).map(
          ([key, label]) =>
            result.scores?.[key] != null && (
              <li key={key}>
                <span>{label}</span>
                <Dots value={result.scores[key]} />
              </li>
            ),
        )}
      </ul>

      {result.corrected && (
        <div className="im-wr-block">
          <h3 className="im-overline">Versione corretta</h3>
          <p className="im-wr-reading">{result.corrected}</p>
        </div>
      )}

      {result.sentences?.length > 0 && (
        <div className="im-wr-block">
          <h3 className="im-overline">Frase per frase</h3>
          {result.sentences.map((sentence, i) => {
            const rating = sentence.rating || (sentence.mistakes?.length ? 'error' : 'good');
            return (
              <div key={i} className="im-wr-sentence">
                <Badge kind={SENTENCE_RATING[rating] || SENTENCE_RATING.error} />
                <p>{sentence.original}</p>
                {sentence.corrected && sentence.corrected !== sentence.original && (
                  <p className="fixed">
                    <IconArrow size={16} /> {sentence.corrected}
                  </p>
                )}
                {sentence.mistakes?.length > 0 && (
                  <ul>
                    {sentence.mistakes.map((mistake, j) => (
                      <li key={j}>{mistake}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      )}

      {result.strengths?.length > 0 && (
        <div className="im-wr-block">
          <h3 className="im-overline">Punti di forza</h3>
          <ul className="im-wr-chips">
            {result.strengths.map((strength, i) => (
              <li key={i} className="found">
                <IconCheck size={14} />
                {strength}
              </li>
            ))}
          </ul>
        </div>
      )}

      {result.tip && (
        <p className="im-wr-tip">
          <b>Da migliorare:</b> {result.tip}
        </p>
      )}

      {result.overall && (
        <div className="im-wr-block">
          <h3 className="im-overline">Come potresti esprimerlo</h3>
          <p className="im-wr-reading">{result.overall}</p>
        </div>
      )}
    </>
  );
}

/* Earlier marked answers for this task, newest first; one can be put back in the box. */
function AttemptHistory({ attempts, onRestore }) {
  const best = Math.max(...attempts.map((attempt) => attempt.score));
  return (
    <details className="im-wr-history">
      <summary>
        <span>
          Hai già provato questo compito: {attemptsLabel(attempts.length)} · migliore <b>{best}/10</b>
        </span>
        <IconChevron size={18} />
      </summary>
      <ul>
        {attempts.map((attempt, i) => (
          <li key={attempt.ts}>
            <details className="im-wr-attempt">
              <summary>
                <b>Tentativo {attempts.length - i}</b>
                <span>{new Date(attempt.ts).toLocaleDateString('it-IT', { day: 'numeric', month: 'short' })}</span>
                <span className={`im-wr-tone ${toneFor(attempt.score)}`}>
                  {attempt.score}/10 · {attempt.grade}
                </span>
                <IconChevron size={18} />
              </summary>
              {attempt.text ? (
                <>
                  <p className="im-wr-attempt-text">{attempt.text}</p>
                  <button type="button" className="im-linkbtn" onClick={() => onRestore(attempt.text)}>
                    <IconUndo size={18} /> Riporta nel riquadro
                  </button>
                </>
              ) : (
                <p className="im-wr-attempt-text none">
                  Testo non salvato (tentativo fatto prima di questa funzione): il punteggio conta comunque.
                </p>
              )}
            </details>
          </li>
        ))}
      </ul>
    </details>
  );
}

function WritingTask({ task, onClose }) {
  const [draft, setDraft] = usePersistentState(`wp_draft_${task.id}`, '');
  const [evaluation, setEvaluation] = useState(null);
  const [aiEvaluation, setAiEvaluation] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const fieldId = useId();
  const fieldRef = useRef(null);
  const resultRef = useRef(null);
  const modelRef = useRef(null);

  const [min, max] = task.wordTarget;
  const wordCount = countWords(draft);
  const aiAvailable = isAiAvailable();
  const marked = evaluation || aiEvaluation;

  // The result and the model answer appear below the text box: bring them into view.
  useEffect(() => {
    if (marked && resultRef.current) resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [marked]);
  useEffect(() => {
    if (showModel && modelRef.current) modelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [showModel]);

  async function evaluate() {
    if (aiAvailable) {
      setAiLoading(true);
      setAiError(null);
      setAiEvaluation(null);
      setEvaluation(null);
      const result = await requestAiEvaluation(draft, task);
      setAiLoading(false);
      if (result.error) {
        setAiError(result.error);
        return;
      }
      setAiEvaluation(result);
      if (result.cilsScore != null) {
        saveWritingAttempt(task.id, result.cilsScore, gradeForCilsScore(result.cilsScore).grade, draft);
        recordAttempt({
          section: 'scrittura',
          taskId: task.id,
          score: result.cilsScore,
          pass: result.esito ? result.esito === 'promosso' : result.cilsScore >= 6,
        });
        setDraft('');
      }
    } else {
      const result = scoreAnswer(draft, task);
      setEvaluation(result);
      saveWritingAttempt(task.id, result.totalScore, result.grade, draft);
      recordAttempt({ section: 'scrittura', taskId: task.id, score: result.totalScore });
      setDraft('');
    }
  }

  // Typing again sets the last marking aside, as before.
  const edit = (text) => {
    setDraft(text);
    setEvaluation(null);
    setAiEvaluation(null);
    setAiError(null);
  };

  const retry = () => {
    setDraft('');
    setEvaluation(null);
    setAiEvaluation(null);
    setAiError(null);
    setShowModel(false);
  };

  const restore = (text) => {
    setDraft(text);
    setEvaluation(null);
    setAiEvaluation(null);
    if (fieldRef.current) fieldRef.current.focus();
  };

  const attempts = getWritingAttempts(task.id).slice().reverse();

  let footer;
  if (marked) {
    footer = (
      <>
        <button type="button" className="im-btn secondary im-wr-footer-btn narrow" onClick={retry}>
          Riprova
        </button>
        <button type="button" className="im-btn primary im-wr-footer-btn" onClick={() => setShowModel(true)} disabled={showModel}>
          {showModel ? 'Risposta modello mostrata' : 'Mostra risposta modello'}
        </button>
      </>
    );
  } else {
    const hint = aiLoading
      ? null
      : wordCount < 3
        ? 'Scrivi almeno tre parole.'
        : aiAvailable
          ? 'Valutazione severa, come un esaminatore CILS reale'
          : null;
    footer = (
      <div className="im-footer-stack">
        {hint && <span className="im-footer-hint">{hint}</span>}
        <button type="button" className="im-btn primary" disabled={wordCount < 3 || aiLoading} onClick={evaluate}>
          Valuta la mia risposta
        </button>
      </div>
    );
  }

  return (
    <TaskScreen
      photo={photoFor(task)}
      overline={`${TYPE_LABEL[task.type]} · Livello ${task.level} · ${task.topic}`}
      title={task.title}
      onClose={onClose}
      closeLabel="Tutti i compiti"
      aside={
        <span className="im-wr-pill">
          {min}–{max} parole
        </span>
      }
      footer={footer}
    >
      <div className="im-wr-block">
        <h2 className="im-overline">Compito</h2>
        <p className="im-wr-prompt">{task.prompt}</p>
      </div>

      <p className="im-wr-hint">
        <IconBulb size={20} />
        <span>{task.hint}</span>
      </p>

      <div className="im-wr-block">
        <label className="im-overline" htmlFor={fieldId}>
          La tua risposta
        </label>
        <textarea
          id={fieldId}
          ref={fieldRef}
          className="im-wr-textarea"
          lang="it"
          rows={8}
          placeholder="Scrivi qui la tua risposta in italiano…"
          value={draft}
          onChange={(event) => edit(event.target.value)}
        />
        <WordMeter count={wordCount} target={task.wordTarget} />
      </div>

      {aiLoading && (
        <p className="im-wr-status" role="status">
          L’esaminatore sta correggendo la tua risposta…
        </p>
      )}

      {aiError && (
        <div className="im-note warn im-wr-error" role="alert">
          <span>{AI_ERROR[aiError] || 'Il servizio di valutazione non è al momento disponibile.'}</span>
          <button type="button" className="im-linkbtn" onClick={() => setAiError(null)}>
            OK
          </button>
        </div>
      )}

      {marked && (
        <section className="im-wr-card" ref={resultRef} aria-label="Valutazione">
          {aiEvaluation ? <AiEvaluation result={aiEvaluation} /> : <Evaluation result={evaluation} />}
        </section>
      )}

      {showModel && (
        <section className="im-wr-card" ref={modelRef}>
          <div className="im-wr-model-head">
            <h3 className="im-overline">Risposta modello</h3>
            <span>{countWords(task.model)} parole</span>
          </div>
          <p className="im-wr-reading">{task.model}</p>
          <div className="im-wr-block">
            <h3 className="im-overline">Frasi chiave nel modello</h3>
            <ul className="im-wr-chips">
              {task.keyPhrases.map((phrase, i) => (
                <li key={i}>{phrase}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {attempts.length > 0 && <AttemptHistory attempts={attempts} onRestore={restore} />}
    </TaskScreen>
  );
}

/* "Il mio progresso": every task tried so far, with its best score and the last five marks. */
function WritingProgress({ onClose }) {
  const progress = getWritingProgress();
  const averageBest = progress.length ? Math.round((progress.reduce((sum, p) => sum + p.best, 0) / progress.length) * 10) / 10 : 0;
  const totalAttempts = progress.reduce((sum, p) => sum + p.attempts, 0);

  return (
    <TaskScreen
      photo={scene('ufficio')}
      overline="Scrittura · Tutti i tentativi"
      title="Il tuo progresso"
      onClose={onClose}
      closeLabel="Torna ai compiti"
    >
      {progress.length === 0 ? (
        <p className="im-wr-status">Nessun tentativo per ora: completa un compito di scrittura per vedere qui il tuo progresso.</p>
      ) : (
        <>
          <ul className="im-wr-stats">
            <li>
              <b>{progress.length}</b>
              <span>Compiti provati</span>
            </li>
            <li>
              <b>{totalAttempts}</b>
              <span>Tentativi totali</span>
            </li>
            <li>
              <b>{averageBest}/10</b>
              <span>Media dei migliori</span>
            </li>
          </ul>

          <ul className="im-wr-progress">
            {progress.map((entry) => {
              const task = tasks.find((t) => t.id === entry.id);
              if (!task) return null;
              const lastScores = entry.history.slice(-5).map((attempt) => attempt.score);
              return (
                <li key={entry.id}>
                  <div className="im-wr-progress-text">
                    <b>{task.title}</b>
                    <small>
                      {LEVEL_LABEL[task.level]} · {attemptsLabel(entry.attempts)}
                    </small>
                  </div>
                  <div className={`im-wr-progress-best im-wr-tone ${toneFor(entry.best)}`}>
                    <div className="im-wr-bar" aria-hidden="true">
                      <div style={{ width: `${(entry.best / 10) * 100}%` }} />
                    </div>
                    <b>{entry.best}/10</b>
                  </div>
                  <div className="im-wr-trend" role="img" aria-label={`Ultimi punteggi: ${lastScores.join(', ')}`}>
                    {lastScores.map((score, i) => (
                      <span key={i} className={`im-wr-tone ${toneFor(score)}`} style={{ height: `${(score / 10) * 24 + 4}px` }} />
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </TaskScreen>
  );
}

export default function Writing() {
  const [level, setLevel] = useState(null);
  const [openId, setOpenId] = useState(null);
  const [showProgress, setShowProgress] = useState(false);

  const visible = level ? tasks.filter((task) => task.level === level) : tasks;
  const openTask = tasks.find((task) => task.id === openId);

  return (
    <div className="im-wr-screen">
      <div className="im-pills im-wr-levels" role="group" aria-label="Livello">
        <button type="button" className={level === null ? 'on' : ''} aria-pressed={level === null} onClick={() => setLevel(null)}>
          Tutti i livelli
        </button>
        {LEVELS.map((n) => (
          <button key={n} type="button" className={level === n ? 'on' : ''} aria-pressed={level === n} onClick={() => setLevel(n)}>
            {LEVEL_LABEL[n]}
          </button>
        ))}
      </div>

      <button type="button" className="im-linkbtn" onClick={() => setShowProgress(true)}>
        <IconProgress size={18} /> Il mio progresso
      </button>

      <ul className="im-rows">
        {visible.map((task) => {
          const best = getBestScore(task.id);
          return (
            <li key={task.id}>
              <button type="button" className="im-row im-wr-row" onClick={() => setOpenId(task.id)}>
                <span className="im-wr-row-icon" aria-hidden="true">
                  <IconPen size={20} />
                </span>
                <span className="im-row-text">
                  <b>{task.title}</b>
                  <small>
                    {TYPE_LABEL[task.type]} · {task.topic} · {task.wordTarget[0]}–{task.wordTarget[1]} parole
                  </small>
                  {best !== null && (
                    <small className={`im-wr-tone ${toneFor(best)}`}>
                      Migliore {best}/10 · {attemptsLabel(getAttemptCount(task.id))}
                    </small>
                  )}
                </span>
                <span className="im-wr-row-level">Liv. {task.level}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {openTask ? (
        <WritingTask key={openTask.id} task={openTask} onClose={() => setOpenId(null)} />
      ) : (
        showProgress && <WritingProgress onClose={() => setShowProgress(false)} />
      )}
    </div>
  );
}
