# ASCOLTO for Android and iOS

The Android and iOS apps for ASCOLTO, the CILS A2 exam simulator. Both apps run the same web app that is live at `/cils-app/`, inside a native shell built with [Capacitor](https://capacitorjs.com).

## One app, three places

```
cils-app-src/        the web app's source                          <- the only place features live
cils-app/            its build (what GitHub Pages serves)
cils-mobile/
  src/native-bridge.js   what the phones need that a browser already has (speech, back button)
  scripts/               prepare-web, check-parity, make-icons
  android/               the Android app (Android Studio project)
  ios/                   the iOS app (Xcode project)
  www/                   generated: cils-app + the bridge. Never edit by hand.
```

**The rule:** a feature is added to the web app once. `npm run sync` copies it into both phone apps. Nothing is ever written three times.

A feature that needs something only a phone has (notifications, haptics, offline audio and so on) gets a Capacitor plugin plus a few lines in `src/native-bridge.js`, written so the web app keeps working in a browser without it.

## What the phones get that the browser does not need

| In the web app | On Android | On iOS |
|---|---|---|
| Listening read aloud (`speechSynthesis`) | Missing from Android's WebView, so the bridge supplies it from the phone's own text to speech engine | Built in, used as is |
| Speaking transcribed (`SpeechRecognition`) | Supplied by the bridge from the phone's speech recogniser | Supplied by the bridge from Apple's speech recogniser |
| Photo of an object, named in Italian | Camera or gallery through the system picker | Camera or photo library through the system picker |
| Progress, streaks, saved answers | Same `localStorage`, kept inside the app | Same |
| Back | Hardware back steps through the app, then leaves it | Swipe, as usual |

## Everyday use

All commands run inside `cils-mobile/`.

```
npm install          once, after cloning
npm run sync         after ANY change to cils-app/ or to the bridge
npm run check        proves web, Android and iOS hold identical files
npm run android:debug    builds android/app/build/outputs/apk/debug/app-debug.apk
npm run android:open     opens the project in Android Studio
npm run icons        redraws the icon and splash and cuts every size
npm test             tests the native bridge against fake phone plugins (no phone needed)
node scripts/android-eval.mjs "location.hash"
                     runs JavaScript inside the app on a connected phone or emulator (debug builds)
```

To try the app on Android: start an emulator from Android Studio's Device Manager (or plug in a phone with USB debugging), then

```
adb install -r android/app/build/outputs/apk/debug/app-debug.apk
```

The emulator needs about 3 GB of free memory; on an 8 GB PC close the browser first or it freezes.

Needs Node 22 or newer, JDK 21 (`JAVA_HOME`) and the Android SDK (`ANDROID_HOME`, or `android/local.properties`).

## iOS

An iOS app can only be compiled on a Mac. The Xcode project in `ios/` is complete; it is built in one of two ways:

- **GitHub Actions** (`.github/workflows/mobile.yml`) builds it on a cloud Mac on every push that touches `cils-app/` or `cils-mobile/`, and attaches a simulator build to the run. The same workflow builds the Android APK.
- **On a Mac:** `npm install`, `npm run sync:ios`, `npm run ios:open`, then Run in Xcode.

Putting it on a real iPhone or the App Store needs an Apple Developer account for signing.

## Publishing checklist

- **App ID** `io.github.dvmadhumitha.ascolto` is set in `capacitor.config.json`, `android/app/build.gradle` and the Xcode project. It cannot change after the first store release, so settle it before then.
- **Android:** create an upload keystore, build a release bundle (`gradlew bundleRelease`), upload to Play Console. Never commit the keystore (`.gitignore` already blocks it).
- **iOS:** set the team in Xcode, archive, upload through App Store Connect.
- Both stores ask for a privacy policy. The app keeps the name, email and practice data on the device; translation lookups go to MyMemory and speech recognition goes through the phone's own service.

## Known limits

- The web app's source is in `../cils-app-src/` (rebuilt from the compiled build in November 2026). Change the app there, run `npm run build` in that folder, then `npm run sync` here.
- Android's speech recogniser stops at each pause and is restarted by the bridge, so long answers arrive in segments, sometimes with the system's start tone.
- Italian voices come from the phone. If a phone has no Italian voice installed, the listening test says so, exactly as the web app does in a browser without one.
