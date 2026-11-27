/*
 * Choosing what to prepare for: first the exam, then the level.
 * Shown full screen the first time the app opens, and again from the chip
 * on the Oggi and Prove screens. Everything on it comes from catalog.js.
 */
import { useState } from 'react';
import { IconBack, IconChevron } from '../shell/icons.jsx';
import { EXAMS, EXAM_BY_ID, LEVELS } from './catalog.js';

const MONOGRAM = { cils: 'Ci', celi: 'Ce', plida: 'Pl' };

export default function ExamPicker({ current, onPick, onClose }) {
  const [examId, setExamId] = useState(null);
  const [level, setLevel] = useState(null);
  const exam = examId && EXAM_BY_ID[examId];

  if (!exam) {
    return (
      <div className="im-pick">
        <div className="im-pick-column">
          <header className="im-pick-head">
            {onClose && (
              <button type="button" className="im-pick-back" onClick={onClose} aria-label="Chiudi senza cambiare">
                <IconBack />
              </button>
            )}
            <span className="im-overline">Passo 1 di 2</span>
            <h1>Quale esame prepari?</h1>
            <p>Which exam are you preparing for?</p>
          </header>

          <ul className="im-pick-list">
            {EXAMS.map((e) => (
              <li key={e.id}>
                <button
                  type="button"
                  className="im-pick-card"
                  onClick={() => {
                    setExamId(e.id);
                    setLevel(current && current.exam === e.id ? current.level : null);
                  }}
                >
                  <span className={`im-pick-mono ${e.id}`} aria-hidden="true">
                    {MONOGRAM[e.id]}
                  </span>
                  <span className="im-pick-text">
                    <b>{e.name}</b>
                    <small>{e.body}</small>
                    <span className="im-pick-levels">
                      {LEVELS.filter((l) => e.levels[l]).map((l) => (
                        <span key={l}>{l}</span>
                      ))}
                    </span>
                    <em>{e.summary}</em>
                  </span>
                  <IconChevron size={20} />
                </button>
              </li>
            ))}
          </ul>

          <details className="im-pick-help">
            <summary>Non so quale scegliere</summary>
            <p>
              Sono tre certificazioni ufficiali dell’italiano, di tre enti diversi. Il livello (da A1 a B2) è lo stesso per tutte: cambia
              la forma dell’esame. Scegli quella che puoi sostenere nella sede d’esame più vicina a te.
            </p>
          </details>
          <p className="im-pick-foot">Puoi cambiare esame quando vuoi.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="im-pick">
      <div className="im-pick-column">
        <header className="im-pick-head">
          <button type="button" className="im-pick-back" onClick={() => setExamId(null)} aria-label="Torna alla scelta dell’esame">
            <IconBack />
          </button>
          <span className="im-overline">Passo 2 di 2 · {exam.name}</span>
          <h1>A che livello?</h1>
          <p>Which level?</p>
        </header>

        <ul className="im-pick-list">
          {LEVELS.filter((l) => exam.levels[l]).map((l) => {
            const spec = exam.levels[l];
            const on = level === l;
            return (
              <li key={l}>
                <button type="button" className={`im-pick-level${on ? ' on' : ''}`} aria-pressed={on} onClick={() => setLevel(l)}>
                  <span className="im-pick-code" aria-hidden="true">
                    {l}
                  </span>
                  <span className="im-pick-text">
                    <b>{spec.label}</b>
                    {spec.written && <small>{spec.written}</small>}
                  </span>
                  <span className={`im-pick-tag${spec.legacy ? ' full' : ''}`}>{spec.legacy ? 'Completo' : 'Nuovo'}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="im-pick-actions">
          <button type="button" className="im-btn primary" disabled={!level} onClick={() => onPick({ exam: exam.id, level })}>
            {level ? `Inizia con il ${level}` : 'Scegli un livello'}
          </button>
        </div>
      </div>
    </div>
  );
}
