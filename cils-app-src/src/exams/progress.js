/*
 * What has been done in the level banks (src/data/level-*.json).
 * One record per exercise id: { score, max, ts }. Kept apart from the CILS A2
 * progress report, which has its own storage and its own scoring.
 */
import { useEffect, useState } from 'react';

const KEY = 'lv_done';
const EVENT = 'lv-done-change';

function read() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}') || {};
  } catch {
    return {};
  }
}

export function markDone(id, score, max) {
  const all = read();
  all[id] = { score, max, ts: Date.now() };
  try {
    localStorage.setItem(KEY, JSON.stringify(all));
  } catch {
    /* storage unavailable: the exercise still works, it is just not remembered */
  }
  window.dispatchEvent(new Event(EVENT));
}

// The saved records, kept up to date while the app is open.
export function useDone() {
  const [done, setDone] = useState(read);
  useEffect(() => {
    const sync = () => setDone(read());
    window.addEventListener(EVENT, sync);
    return () => window.removeEventListener(EVENT, sync);
  }, []);
  return done;
}
