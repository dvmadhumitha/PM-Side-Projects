/*
 * Ascolto · Pratica: listen to an announcement, a dialogue or a message, then
 * answer the questions. Same rules as before: listen at least once, answer
 * everything, then check; a checked attempt is saved to the progress report.
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
import items from '../data/listening-practice.json';
import { IconCheck, IconClose, IconPause, IconPlay, IconText } from '../shell/icons.jsx';
import TaskScreen from './TaskScreen.jsx';

const TYPE_LABEL = { dialogo: 'Dialogo', annuncio: 'Annuncio', messaggio: 'Messaggio' };

const SPEEDS = [
  { v: 0.8, l: 'Lento' },
  { v: 0.92, l: 'Normale' },
  { v: 1, l: 'Esame' },
];

// One of the app's scene photos for each recording.
const scene = (name) => `${import.meta.env.BASE_URL}img/scenes/${name}.jpg`;
const PHOTO = {
  'l-treno': 'stazione',
  'l-bar': 'bar',
  'l-medico': 'medico',
  'l-super': 'supermercato',
  'l-amici': 'parco',
  'l-affitto': 'soggiorno',
  'l-negozio': 'strada',
  'l-comune': 'ufficio',
  'l-lavoro': 'ufficio',
  'l-meteo': 'parco',
  'l-ristorante': 'pizza',
  'l-farmacia': 'medico',
  'l-parrucchiere': 'strada',
  'l-corriere': 'soggiorno',
  'l-questura': 'ufficio',
  'l-prenotazione': 'camera',
  'l-luca': 'persona',
  'l-milano-lavoro': 'stazione',
  'l-marco-ristorante': 'pasta',
};
const photoFor = (item) => scene(PHOTO[item.id] || 'stazione');

function ListeningTask({ item, position, onClose, onPrev, onNext }) {
  const [playing, setPlaying] = useState(false);
  const [plays, setPlays] = useState(0);
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const [showText, setShowText] = useState(false);
  const [rate, setRate] = useState(0.92);

  // Moving to another recording starts from a clean slate.
  useEffect(() => {
    stopSpeech();
    setPlaying(false);
    setPlays(0);
    setAnswers({});
    setChecked(false);
    setShowText(false);
    return () => stopSpeech();
  }, [item.id]);

  const canSpeak = isSpeechSupported();

  async function play() {
    if (playing || !canSpeak) return;
    stopSpeech();
    const token = getSpeechToken();
    setPlaying(true);
    const [voiceA, voiceB] = getDialogueVoices();
    for (const line of item.lines) {
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

  const choose = (q, option) => {
    if (!checked) setAnswers((a) => ({ ...a, [q]: option }));
  };

  const total = item.questions.length;
  const allAnswered = item.questions.every((_, i) => answers[i] !== undefined);
  const score = item.questions.filter((q, i) => answers[i] === q.a).length;

  const check = () => {
    setChecked(true);
    recordAttempt({ section: 'ascolto', taskId: item.id, score, max: total });
  };

  const hint = plays === 0 ? 'Ascolta almeno una volta prima di rispondere.' : !allAnswered ? 'Rispondi a tutte le domande.' : null;

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
        Prossimo ascolto
      </button>
    </>
  ) : (
    <div className="im-footer-stack">
      {hint && <span className="im-footer-hint">{hint}</span>}
      <button type="button" className="im-btn primary" disabled={!allAnswered || plays === 0} onClick={check}>
        Controlla le risposte
      </button>
    </div>
  );

  return (
    <TaskScreen
      photo={photoFor(item)}
      overline={`${TYPE_LABEL[item.type]} · ${position} di ${items.length}`}
      title={item.title}
      context={item.context}
      onClose={onClose}
      closeLabel="Tutti gli ascolti"
      footer={footer}
    >
      <div className="im-player">
        <button
          type="button"
          className={`im-play${playing ? ' on' : ''}`}
          onClick={playing ? stop : play}
          disabled={!canSpeak}
          aria-label={playing ? 'Ferma' : plays === 0 ? 'Ascolta' : 'Riascolta'}
        >
          {playing ? <IconPause size={24} /> : <IconPlay size={24} />}
        </button>
        <div className="im-player-side">
          <span className="im-player-status">
            {playing ? 'In riproduzione…' : plays === 0 ? 'Ascolta' : `Riascolta · ascoltato ${plays}×`}
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

      {canSpeak && !hasItalianVoice() && (
        <p className="im-note warn">Nessuna voce italiana installata su questo dispositivo: l’audio userà la voce predefinita.</p>
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
                onClick={() => choose(qi, oi)}
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

      {checked && (
        <div className="im-transcript">
          <button type="button" className="im-linkbtn" onClick={() => setShowText((v) => !v)} aria-expanded={showText}>
            <IconText size={18} /> {showText ? 'Nascondi il testo' : 'Mostra il testo'}
          </button>
          {showText && (
            <div className="im-transcript-text">
              {item.lines.map((line, i) => (
                <p key={i}>
                  {line.s !== 'V' && <b>{line.s === 'A' ? 'A' : 'B'} </b>}
                  {line.it}
                </p>
              ))}
            </div>
          )}
        </div>
      )}

      <button type="button" className="im-linkbtn subtle" onClick={onPrev}>
        Ascolto precedente
      </button>
    </TaskScreen>
  );
}

export default function ListeningPractice() {
  const [open, setOpen] = useState(null);
  const count = items.length;

  return (
    <>
      <ul className="im-rows">
        {items.map((item, i) => (
          <li key={item.id}>
            <button type="button" className="im-row" onClick={() => setOpen(i)}>
              <img className="im-row-thumb" src={photoFor(item)} alt="" loading="lazy" />
              <span className="im-row-text">
                <b>{item.title}</b>
                <small>
                  {TYPE_LABEL[item.type]} · {item.questions.length} domande
                </small>
              </span>
              <span className="im-row-go" aria-hidden="true">
                <IconPlay size={18} />
              </span>
            </button>
          </li>
        ))}
      </ul>
      {open !== null && (
        <ListeningTask
          item={items[open]}
          position={open + 1}
          onClose={() => setOpen(null)}
          onPrev={() => setOpen((open - 1 + count) % count)}
          onNext={() => setOpen((open + 1) % count)}
        />
      )}
    </>
  );
}
