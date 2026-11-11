/*
 * ASCOLTO native bridge.
 *
 * The web app in ../cils-app is written against browser APIs. Inside the
 * Android and iOS apps a few of those APIs are missing from the WebView, so
 * this file supplies them on top of native plugins. It is bundled into
 * www/native-bridge.js and loaded BEFORE the app's own script, so the app
 * finds the same APIs it finds in a browser and needs no mobile-only code.
 *
 *   speechSynthesis          Android WebView has none. iOS keeps its own.
 *   SpeechRecognition        Missing on Android, unreliable in iOS WebViews.
 *   Hardware back button     Android: step back through the app, then leave.
 *
 * On the open web this file is never loaded.
 */
import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { SpeechRecognition as NativeSpeech } from '@capacitor-community/speech-recognition';

const native = Capacitor.isNativePlatform();
const platform = Capacitor.getPlatform();

/* ------------------------------------------------------------------ */
/* Text to speech                                                      */
/* ------------------------------------------------------------------ */

function installSpeechSynthesis() {
  let voices = [];
  let current = null; // utterance being spoken
  const queue = [];

  class Utterance {
    constructor(text = '') {
      this.text = String(text);
      this.lang = '';
      this.rate = 1;
      this.pitch = 1;
      this.volume = 1;
      this.voice = null;
      this.onstart = null;
      this.onend = null;
      this.onerror = null;
      this._done = false;
    }
  }

  function settle(utt, kind, error) {
    if (utt._done) return;
    utt._done = true;
    if (current === utt) current = null;
    const handler = kind === 'end' ? utt.onend : utt.onerror;
    if (typeof handler === 'function') {
      try {
        handler({ type: kind, utterance: utt, error });
      } catch (e) {
        console.error('[ascolto] speech handler failed', e);
      }
    }
  }

  function pump() {
    if (current || !queue.length) return;
    const utt = queue.shift();
    current = utt;
    if (typeof utt.onstart === 'function') {
      try {
        utt.onstart({ type: 'start', utterance: utt });
      } catch (e) {
        console.error('[ascolto] speech handler failed', e);
      }
    }
    const options = {
      text: utt.text,
      lang: utt.lang || (utt.voice && utt.voice.lang) || 'it-IT',
      rate: utt.rate,
      pitch: utt.pitch,
      volume: utt.volume,
    };
    if (utt.voice && Number.isInteger(utt.voice._index)) options.voice = utt.voice._index;
    TextToSpeech.speak(options)
      .then(
        () => settle(utt, 'end'),
        (err) => settle(utt, 'error', String((err && err.message) || err)),
      )
      .then(pump);
  }

  const synth = {
    onvoiceschanged: null,
    get speaking() {
      return !!current;
    },
    get pending() {
      return queue.length > 0;
    },
    paused: false,
    getVoices: () => voices.slice(),
    speak(utt) {
      if (!utt || utt._done) return;
      queue.push(utt);
      pump();
    },
    cancel() {
      const dropped = queue.splice(0);
      const active = current;
      // Stop first, then settle: the app treats either callback as "finished".
      TextToSpeech.stop().catch(() => {});
      dropped.forEach((u) => settle(u, 'error', 'canceled'));
      if (active) settle(active, 'error', 'interrupted');
    },
    pause() {},
    resume() {},
    addEventListener(type, fn) {
      if (type === 'voiceschanged') synth.onvoiceschanged = fn;
    },
    removeEventListener(type, fn) {
      if (type === 'voiceschanged' && synth.onvoiceschanged === fn) synth.onvoiceschanged = null;
    },
  };

  async function loadVoices(attempt = 0) {
    try {
      const res = await TextToSpeech.getSupportedVoices();
      const list = (res.voices || []).map((v, i) => ({
        name: v.name || v.voiceURI || `voice-${i}`,
        lang: String(v.lang || '').replace('_', '-'),
        voiceURI: v.voiceURI || v.name || `voice-${i}`,
        localService: v.localService !== false,
        default: !!v.default,
        _index: i, // position in the plugin's own list, which speak() expects
      }));
      // On-device voices first: they work offline and start without a delay.
      list.sort((a, b) => Number(b.localService) - Number(a.localService));
      voices = list;
      if (typeof synth.onvoiceschanged === 'function') synth.onvoiceschanged(new Event('voiceschanged'));
      if (!list.length && attempt < 5) setTimeout(() => loadVoices(attempt + 1), 1000);
    } catch (e) {
      // The engine can take a moment to start after launch.
      if (attempt < 5) setTimeout(() => loadVoices(attempt + 1), 1000);
      else console.warn('[ascolto] no text-to-speech voices', e);
    }
  }

  Object.defineProperty(window, 'speechSynthesis', { value: synth, configurable: true });
  window.SpeechSynthesisUtterance = Utterance;
  loadVoices();
}

/* ------------------------------------------------------------------ */
/* Speech recognition                                                  */
/* ------------------------------------------------------------------ */

function installSpeechRecognition() {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  function makeResult(text, isFinal) {
    const result = [{ transcript: text, confidence: isFinal ? 0.9 : 0 }];
    result.isFinal = isFinal;
    return result;
  }

  class Recognition {
    constructor() {
      this.lang = 'it-IT';
      this.continuous = false;
      this.interimResults = false;
      this.maxAlternatives = 1;
      this.onstart = null;
      this.onresult = null;
      this.onerror = null;
      this.onend = null;
      this._active = false; // the page wants us listening
      this._run = 0; // bumps on every start(), so stale loops stop
      this._finals = []; // finished segments, each delivered once
      this._partial = ''; // text of the segment in progress
      this._partialAt = 0;
      this._handle = null;
    }

    _emit(name, payload) {
      const fn = this[name];
      if (typeof fn !== 'function') return;
      try {
        fn.call(this, payload);
      } catch (e) {
        console.error('[ascolto] recognition handler failed', e);
      }
    }

    _emitInterim() {
      if (!this.interimResults || !this._partial) return;
      const results = this._finals.map((t) => makeResult(t, true));
      results.push(makeResult(this._partial, false));
      this._emit('onresult', { type: 'result', resultIndex: this._finals.length, results });
    }

    // Close the segment in progress and hand it to the page as a final result.
    _commit() {
      const text = this._partial.trim();
      this._partial = '';
      if (!text) return;
      this._finals.push(text);
      const results = this._finals.map((t) => makeResult(t, true));
      this._emit('onresult', { type: 'result', resultIndex: this._finals.length - 1, results });
    }

    async start() {
      if (this._active) return;
      this._active = true;
      const run = ++this._run;
      this._finals = [];
      this._partial = '';

      try {
        let perm = await NativeSpeech.checkPermissions();
        if (perm.speechRecognition !== 'granted') perm = await NativeSpeech.requestPermissions();
        if (perm.speechRecognition !== 'granted') throw Object.assign(new Error('denied'), { code: 'not-allowed' });
        const { available } = await NativeSpeech.available();
        if (!available) throw Object.assign(new Error('unavailable'), { code: 'service-not-allowed' });
      } catch (e) {
        if (run !== this._run) return;
        this._active = false;
        this._emit('onerror', { type: 'error', error: e.code || 'service-not-allowed', message: String(e.message || e) });
        this._emit('onend', { type: 'end' });
        return;
      }
      if (run !== this._run || !this._active) return;

      this._handle = await NativeSpeech.addListener('partialResults', (data) => {
        if (run !== this._run) return;
        const text = (data && data.matches && data.matches[0]) || '';
        if (!text) return;
        this._partial = text;
        this._partialAt = Date.now();
        this._emitInterim();
      });

      this._emit('onstart', { type: 'start' });
      this._loop(run);
    }

    // One native session ends on its own after a pause in speech. While the
    // page still wants us listening, close that segment and open another.
    async _loop(run) {
      let failures = 0;
      while (run === this._run && this._active) {
        try {
          await NativeSpeech.start({
            language: this.lang || 'it-IT',
            maxResults: 1,
            partialResults: true,
            popup: false,
          });
          failures = 0;
        } catch (e) {
          if (++failures >= 3) {
            this._emit('onerror', { type: 'error', error: 'audio-capture', message: String((e && e.message) || e) });
            break;
          }
          await wait(400);
          continue;
        }

        // Wait for the session to finish (or for stop()).
        await wait(600);
        while (run === this._run && this._active) {
          let listening = true;
          try {
            listening = (await NativeSpeech.isListening()).listening;
          } catch (e) {
            listening = false;
          }
          if (!listening) break;
          await wait(350);
        }
        if (run !== this._run) return;

        // The last, most accurate result arrives just after listening stops.
        const endedAt = Date.now();
        while (Date.now() - endedAt < 900 && this._partialAt < endedAt) await wait(100);
        if (run !== this._run) return;
        this._commit();

        if (!this.continuous) break;
      }
      if (run !== this._run) return;
      this._finish();
    }

    _finish() {
      this._active = false;
      this._run++;
      if (this._handle) {
        this._handle.remove().catch(() => {});
        this._handle = null;
      }
      this._emit('onend', { type: 'end' });
    }

    stop() {
      if (!this._active) return;
      this._active = false; // the loop sees this, collects the last result, then finishes
      // Never awaited: on Android this call does not report back.
      NativeSpeech.stop().catch(() => {});
    }

    abort() {
      if (!this._active && !this._handle) return;
      this._active = false;
      this._partial = '';
      NativeSpeech.stop().catch(() => {});
      this._finish();
    }

    addEventListener(type, fn) {
      this['on' + type] = fn;
    }
    removeEventListener(type, fn) {
      if (this['on' + type] === fn) this['on' + type] = null;
    }
  }

  window.SpeechRecognition = Recognition;
  window.webkitSpeechRecognition = Recognition;
}

/* ------------------------------------------------------------------ */
/* Android back button                                                 */
/* ------------------------------------------------------------------ */

function installBackButton() {
  App.addListener('backButton', ({ canGoBack }) => {
    // The app moves between screens by changing the #hash. Android's WebView
    // does not always count those steps in canGoBack, so also trust the page:
    // on any screen other than the first, with history behind it, step back.
    const hash = window.location.hash.replace(/^#/, '');
    const insideApp = hash !== '' && window.history.length > 1;
    if (canGoBack || insideApp) window.history.back();
    else App.minimizeApp();
  });
}

/* ------------------------------------------------------------------ */

if (native) {
  document.documentElement.classList.add('native-app', `native-${platform}`);
  try {
    if (!('speechSynthesis' in window)) installSpeechSynthesis();
  } catch (e) {
    console.error('[ascolto] speech synthesis bridge failed', e);
  }
  try {
    installSpeechRecognition();
  } catch (e) {
    console.error('[ascolto] speech recognition bridge failed', e);
  }
  try {
    if (platform === 'android') installBackButton();
  } catch (e) {
    console.error('[ascolto] back button bridge failed', e);
  }
}
