/*
 * Runs the Android Gradle wrapper with the given tasks, on Windows, macOS or Linux.
 *
 *   node scripts/gradle.mjs assembleDebug
 *
 * If JAVA_HOME is not set it looks for a JDK 21 in ~/.jdks (where Android
 * Studio and this project's setup put them).
 */
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const androidDir = path.join(root, 'android');
const win = process.platform === 'win32';
const env = { ...process.env };

if (!env.JAVA_HOME) {
  const jdks = path.join(os.homedir(), '.jdks');
  if (existsSync(jdks)) {
    const jdk21 = readdirSync(jdks)
      .filter((d) => /(^|[^0-9])21([^0-9]|$)/.test(d) && existsSync(path.join(jdks, d, 'bin')))
      .sort()
      .pop();
    if (jdk21) env.JAVA_HOME = path.join(jdks, jdk21);
  }
}
if (!env.JAVA_HOME) console.warn('JAVA_HOME is not set and no JDK 21 was found in ~/.jdks; Gradle will use whatever "java" is on PATH.');

// Windows gives long user names a short temp path (C:\Users\NAME~1\...). Java 21
// cannot open its internal sockets there and Gradle dies with "Unable to
// establish loopback connection", so hand it a plain folder instead.
const extra = [];
if (win && (env.TEMP || '').includes('~')) {
  const tmp = path.join(os.homedir(), '.gradle', 'tmp');
  mkdirSync(tmp, { recursive: true });
  env.TEMP = tmp;
  env.TMP = tmp;
  const flags = `-Djdk.net.unixdomain.tmpdir=${tmp} -Djava.io.tmpdir=${tmp}`;
  env.GRADLE_OPTS = `${env.GRADLE_OPTS || ''} ${flags}`.trim();
  extra.push(`"-Dorg.gradle.jvmargs=-Xmx1536m ${flags}"`);
}

const wrapper = path.join(androidDir, win ? 'gradlew.bat' : 'gradlew');
// On Windows a .bat needs the shell, and the path may contain spaces.
const result = spawnSync(win ? `"${wrapper}"` : wrapper, [...process.argv.slice(2), '--console=plain', ...extra], {
  cwd: androidDir,
  env,
  stdio: 'inherit',
  shell: win,
});
process.exit(result.status ?? 1);
