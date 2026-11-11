/*
 * Tests the native bridge without a phone.
 *
 *   npm test
 *
 * Bundles src/native-bridge.js against fake native plugins that behave like
 * the real Android ones (including their quirks: stop() never answers, the
 * final transcript arrives after listening has stopped), then drives the
 * bridge exactly the way the web app does.
 */
import { build } from 'esbuild';
import assert from 'node:assert/strict';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tmp = await mkdtemp(path.join(os.tmpdir(), 'ascolto-bridge-'));
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

/* ---------- fake native side ---------- */

const fake = {
  platform: 'android',
  spoken: [], // every TextToSpeech.speak() call
  ttsStops: 0,
  activeSpeak: null,
  permission: 'prompt',
  listening: false,
  srStarts: 0,
  srListener: null,
  sessions: [], // scripted recognition sessions, one per start()
  backHandler: null,
  minimized: 0,
};
globalThis.__fake = fake;

const mocks = {
  '@capacitor/core': `
    export const Capacitor = { isNativePlatform: () => true, getPlatform: () => globalThis.__fake.platform };`,
  '@capacitor/app': `
    export const App = {
      addListener: (name, fn) => { globalThis.__fake.backHandler = fn; return Promise.resolve({ remove: async () => {} }); },
      minimizeApp: async () => { globalThis.__fake.minimized++; },
    };`,
  '@capacitor-community/text-to-speech': `
    const f = globalThis.__fake;
    export const TextToSpeech = {
      getSupportedVoices: async () => ({ voices: [
        { name: 'en-us-x-sfg-network', lang: 'en-US', voiceURI: 'en-us-x-sfg-network', localService: false, default: false },
        { name: 'it-it-x-itb-network', lang: 'it-IT', voiceURI: 'it-it-x-itb-network', localService: false, default: false },
        { name: 'it-it-x-itc-local', lang: 'it-IT', voiceURI: 'it-it-x-itc-local', localService: true, default: false },
        { name: 'it-it-x-itd-local', lang: 'it-IT', voiceURI: 'it-it-x-itd-local', localService: true, default: false },
      ] }),
      speak: (options) => new Promise((resolve, reject) => {
        f.spoken.push(options);
        const timer = setTimeout(() => { f.activeSpeak = null; resolve(); }, 40);
        f.activeSpeak = { stop: () => { clearTimeout(timer); f.activeSpeak = null; reject(new Error('stopped')); } };
      }),
      stop: async () => { f.ttsStops++; if (f.activeSpeak) f.activeSpeak.stop(); },
    };`,
  '@capacitor-community/speech-recognition': `
    const f = globalThis.__fake;
    const emit = (text) => f.srListener && f.srListener({ matches: [text] });
    export const SpeechRecognition = {
      checkPermissions: async () => ({ speechRecognition: f.permission }),
      requestPermissions: async () => { if (f.permission === 'prompt') f.permission = 'granted'; return { speechRecognition: f.permission }; },
      available: async () => ({ available: true }),
      addListener: async (name, fn) => { f.srListener = fn; return { remove: async () => { f.srListener = null; } }; },
      isListening: async () => ({ listening: f.listening }),
      // Like Android with partialResults: resolves at once, results come as events,
      // listening ends on a pause, the final text lands a moment later.
      start: async () => {
        f.srStarts++;
        const script = f.sessions.shift();
        f.listening = true;
        if (!script) return; // silence: stays "listening" until stop()
        (async () => {
          for (const partial of script.partials) { await new Promise(r => setTimeout(r, 30)); emit(partial); }
          await new Promise(r => setTimeout(r, 30));
          f.listening = false;
          await new Promise(r => setTimeout(r, 60));
          emit(script.final);
        })();
      },
      // Like Android: never resolves.
      stop: () => { f.listening = false; return new Promise(() => {}); },
    };`,
};

const mockPlugin = {
  name: 'mock-native',
  setup(b) {
    b.onResolve({ filter: /^@capacitor/ }, (args) => (mocks[args.path] ? { path: args.path, namespace: 'mock' } : null));
    b.onLoad({ filter: /.*/, namespace: 'mock' }, (args) => ({ contents: mocks[args.path], loader: 'js' }));
  },
};

async function loadBridge({ withBrowserTTS = false } = {}) {
  // A fresh "WebView" each time.
  for (const key of ['speechSynthesis', 'SpeechSynthesisUtterance', 'SpeechRecognition', 'webkitSpeechRecognition']) delete globalThis[key];
  if (withBrowserTTS) globalThis.speechSynthesis = { browser: true };
  const classes = new Set();
  globalThis.window = globalThis;
  globalThis.document = { documentElement: { classList: { add: (...c) => c.forEach((x) => classes.add(x)) } } };
  globalThis.history = { backs: 0, back() { this.backs++; } };
  const outfile = path.join(tmp, `bridge-${Date.now()}-${Math.random().toString(36).slice(2)}.mjs`);
  await build({
    entryPoints: [path.join(root, 'src', 'native-bridge.js')],
    outfile,
    bundle: true,
    format: 'esm',
    plugins: [mockPlugin],
    logLevel: 'silent',
  });
  await import(pathToFileURL(outfile).href);
  await wait(20); // voices load
  return classes;
}

let passed = 0;
async function test(name, fn) {
  try {
    await fn();
    passed++;
    console.log(`  ok  ${name}`);
  } catch (e) {
    console.log(`FAIL  ${name}\n      ${e.message}`);
    process.exitCode = 1;
  }
}

/* ---------- the web app's own code paths, copied from its bundle ---------- */

// How the app speaks one line and waits for it.
const speak = (text, { rate = 0.92, pitch = 1, voice } = {}) =>
  new Promise((resolve) => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'it-IT';
    u.rate = rate;
    u.pitch = pitch;
    if (voice) u.voice = voice;
    u.onend = () => resolve('end');
    u.onerror = () => resolve('error');
    window.speechSynthesis.speak(u);
  });

// How the app picks its Italian voice.
const italianVoices = () => window.speechSynthesis.getVoices().filter((v) => /^it([-_]|$)/i.test(v.lang));

// How the app builds a transcript from recognition events.
function appRecogniser({ onUpdate, onEnd }) {
  const R = window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec = new R();
  rec.lang = 'it-IT';
  rec.continuous = true;
  rec.interimResults = true;
  let finals = '';
  rec.onresult = (e) => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const t = e.results[i][0].transcript;
      if (e.results[i].isFinal) finals += t + ' ';
      else interim += t;
    }
    onUpdate && onUpdate((finals + interim).trim());
  };
  rec.onerror = () => {};
  rec.onend = () => onEnd && onEnd(finals.trim());
  return {
    start: () => {
      finals = '';
      rec.start();
    },
    stop: () => rec.stop(),
  };
}

/* ---------- tests ---------- */

console.log('Android');
const classes = await loadBridge();

await test('marks the page as running inside the Android app', () => {
  assert.ok(classes.has('native-app') && classes.has('native-android'));
});

await test('speechSynthesis exists and offers Italian voices, on-device ones first', () => {
  assert.equal(typeof window.speechSynthesis.speak, 'function');
  const it = italianVoices();
  assert.equal(it.length, 3);
  assert.equal(it[0].name, 'it-it-x-itc-local');
  assert.equal(it[2].localService, false);
});

await test('a spoken line reaches the phone with the right voice, language, rate and pitch', async () => {
  fake.spoken.length = 0;
  const voice = italianVoices()[0];
  assert.equal(await speak('Buongiorno, come sta?', { pitch: 1.06, voice }), 'end');
  assert.deepEqual(fake.spoken[0], { text: 'Buongiorno, come sta?', lang: 'it-IT', rate: 0.92, pitch: 1.06, volume: 1, voice: 2 });
});

await test('lines queue and play one after another, in order', async () => {
  fake.spoken.length = 0;
  const results = await Promise.all([speak('uno'), speak('due'), speak('tre')]);
  assert.deepEqual(results, ['end', 'end', 'end']);
  assert.deepEqual(fake.spoken.map((s) => s.text), ['uno', 'due', 'tre']);
});

await test('cancel() stops the phone, releases every waiting line, and speech works again after', async () => {
  fake.spoken.length = 0;
  const pending = [speak('prima'), speak('seconda'), speak('terza')];
  await wait(10);
  window.speechSynthesis.cancel();
  assert.deepEqual(await Promise.all(pending), ['error', 'error', 'error']);
  assert.deepEqual(fake.spoken.map((s) => s.text), ['prima']); // the queued ones never started
  assert.equal(window.speechSynthesis.speaking, false);
  assert.equal(await speak('di nuovo'), 'end');
});

await test('the app sees speech recognition as available', () => {
  assert.equal(typeof window.SpeechRecognition, 'function');
  assert.equal(window.webkitSpeechRecognition, window.SpeechRecognition);
});

await test('a long answer across two pauses becomes one transcript, each part counted once', async () => {
  fake.permission = 'prompt';
  fake.srStarts = 0;
  fake.sessions = [
    { partials: ['mi', 'mi chiamo', 'mi chiamo anna'], final: 'Mi chiamo Anna' },
    { partials: ['sono', 'sono di milano'], final: 'sono di Milano' },
  ];
  const updates = [];
  let ended = null;
  const rec = appRecogniser({ onUpdate: (t) => updates.push(t), onEnd: (t) => (ended = t) });
  rec.start();
  await wait(4200); // two sessions, then silence
  assert.equal(fake.permission, 'granted', 'asked for the microphone');
  assert.ok(updates.includes('mi chiamo'), 'live text while speaking');
  assert.equal(updates.at(-1), 'Mi chiamo Anna sono di Milano');
  assert.ok(fake.srStarts >= 3, 'kept listening after each pause');
  assert.equal(ended, null, 'still listening until the app stops it');
  rec.stop();
  await wait(1700);
  assert.equal(ended, 'Mi chiamo Anna sono di Milano');
  assert.equal(fake.srListener, null, 'listener released');
});

await test('stopping mid-sentence keeps what was heard so far', async () => {
  fake.sessions = [{ partials: ['vorrei un caffè', 'vorrei un caffè per'], final: 'Vorrei un caffè per favore' }];
  let ended = null;
  const rec = appRecogniser({ onEnd: (t) => (ended = t) });
  rec.start();
  await wait(100); // partials only so far
  rec.stop();
  await wait(1900);
  assert.ok(ended && ended.toLowerCase().startsWith('vorrei un caff'), `got "${ended}"`);
});

await test('a refused microphone ends cleanly instead of hanging', async () => {
  fake.permission = 'denied';
  let error = null;
  let ended = false;
  const rec = new window.SpeechRecognition();
  rec.onerror = (e) => (error = e.error);
  rec.onend = () => (ended = true);
  rec.start();
  await wait(50);
  assert.equal(error, 'not-allowed');
  assert.equal(ended, true);
  fake.permission = 'granted';
});

await test('a recogniser can be started again after it ended', async () => {
  fake.sessions = [{ partials: ['grazie'], final: 'Grazie' }];
  let ended = null;
  const rec = appRecogniser({ onEnd: (t) => (ended = t) });
  rec.start();
  await wait(1800);
  rec.stop();
  await wait(1700);
  assert.equal(ended, 'Grazie');
  fake.sessions = [{ partials: ['prego'], final: 'Prego' }];
  ended = null;
  rec.start();
  await wait(1800);
  rec.stop();
  await wait(1700);
  assert.equal(ended, 'Prego');
});

await test('hardware back steps back inside the app, then leaves it', () => {
  globalThis.location = { hash: '' };
  history.length = 1;
  fake.backHandler({ canGoBack: true });
  assert.equal(history.backs, 1);
  fake.backHandler({ canGoBack: false });
  assert.equal(fake.minimized, 1, 'first screen, nothing behind it: leave the app');
});

await test('hardware back still steps back when the WebView under-reports its history', () => {
  // Seen on a real Android WebView: three screens deep, yet canGoBack is false.
  globalThis.location = { hash: '#ascolto' };
  history.length = 4;
  history.backs = 0;
  fake.minimized = 0;
  fake.backHandler({ canGoBack: false });
  assert.equal(history.backs, 1);
  assert.equal(fake.minimized, 0);
});

console.log('iOS');
fake.platform = 'ios';
fake.backHandler = null;
await loadBridge({ withBrowserTTS: true });

await test("keeps the WebView's own speechSynthesis", () => {
  assert.equal(window.speechSynthesis.browser, true);
});
await test('supplies speech recognition', () => {
  assert.equal(typeof window.webkitSpeechRecognition, 'function');
});
await test('adds no back-button handler', () => {
  assert.equal(fake.backHandler, null);
});

await rm(tmp, { recursive: true, force: true });
console.log(process.exitCode ? '\nSome tests failed.' : `\nAll ${passed} tests passed.`);
process.exit(process.exitCode || 0);
