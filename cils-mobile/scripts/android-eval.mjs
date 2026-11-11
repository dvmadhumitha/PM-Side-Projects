/*
 * Runs a JavaScript expression inside the app's WebView on a connected
 * Android device or emulator (debug builds only) and prints the result.
 *
 *   node scripts/android-eval.mjs "document.title"
 *   node scripts/android-eval.mjs --file some-check.js
 *
 * Handy for checking what the app really sees on a phone: voices, speech
 * support, stored progress. Needs adb (ANDROID_HOME or the default SDK path).
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const APP_ID = 'io.github.dvmadhumitha.ascolto';
const PORT = 9333;

const sdk = process.env.ANDROID_HOME || process.env.ANDROID_SDK_ROOT || path.join(os.homedir(), 'AppData', 'Local', 'Android', 'Sdk');
const adbPath = path.join(sdk, 'platform-tools', process.platform === 'win32' ? 'adb.exe' : 'adb');
const adb = (...args) => execFileSync(existsSync(adbPath) ? adbPath : 'adb', args, { encoding: 'utf8' }).trim();

const args = process.argv.slice(2);
const expression = args[0] === '--file' ? readFileSync(args[1], 'utf8') : args.join(' ');
if (!expression) {
  console.error('Usage: node scripts/android-eval.mjs "<javascript>"');
  process.exit(1);
}

const pid = adb('shell', 'pidof', APP_ID).split(/\s+/)[0];
if (!pid) {
  console.error(`${APP_ID} is not running on the device.`);
  process.exit(1);
}
adb('forward', `tcp:${PORT}`, `localabstract:webview_devtools_remote_${pid}`);

try {
  const pages = await (await fetch(`http://127.0.0.1:${PORT}/json`)).json();
  const page = pages.find((p) => p.type === 'page');
  if (!page) throw new Error('No WebView page found. Is this a debug build?');

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  const result = await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Timed out waiting for the WebView.')), Number(process.env.EVAL_TIMEOUT_MS) || 60000);
    ws.onopen = () =>
      ws.send(JSON.stringify({ id: 1, method: 'Runtime.evaluate', params: { expression, awaitPromise: true, returnByValue: true } }));
    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id !== 1) return;
      clearTimeout(timer);
      resolve(msg.result);
    };
    ws.onerror = () => reject(new Error('Could not reach the WebView.'));
  });
  ws.close();

  if (result.exceptionDetails) {
    console.error('Error in page:', result.exceptionDetails.exception?.description || result.exceptionDetails.text);
    process.exitCode = 1;
  } else {
    const value = result.result.value;
    console.log(typeof value === 'string' ? value : JSON.stringify(value, null, 2));
  }
} finally {
  try {
    adb('forward', '--remove', `tcp:${PORT}`);
  } catch {}
}
