# App screenshots (capture kit)

Makes the 60 phone screenshots in `public/images/app/<lang>/<theme>/<screen>.webp`
(`<lang>`: fr en pcm hi ar, `<theme>`: light dark, six screens). It runs on a Mac with the iOS Simulator.
All sample content is fictional.

## Files

| File | Role |
|------|------|
| `seed/strings.json` | Sample text per language (project titles, notes, labels, album groups, contact names, studio name), keyed by the app's stable `mock-*` ids. French is the source (the app repo `mocks/*.ts`). |
| `seed/make-sql.py` | Builds `seed/<lang>.sql` from `strings.json`. Run it after any edit of the strings. |
| `seed/<lang>.sql` | Post-seed patch: updates the rows by id, and removes the cold-boot seed rows and the demo project `mock-prog-13`. |
| `apply-seed.py` | Runs `seed/<lang>.sql` on the app database of a simulator, and sets the studio name (user profile store). |
| `lib.sh`, `run-capture.sh` | Capture steps and the loop over languages and themes. |
| `convert.sh` | PNG 1206x2622 to WebP 720x1565 (Lanczos, `cwebp -q 85`). |
| `sheet.py` | Contact sheet of the WebP files: one row per language, six screens, labelled. |

## Run order

1. Simulator iPhone 17 Pro with the app dev build installed. Keep it away from other work: the run drives the whole screen.
2. App repo on `main`, real `pnpm install`, then Metro:
   `EXPO_PUBLIC_ALLOW_TEST_OTP=true EXPO_PUBLIC_SEED_DATA=true EXPO_PUBLIC_E2E=true node_modules/.bin/expo start --dev-client --port 8086`.
   Open the dev build on that Metro once.
3. In the app, once per simulator:
   - dev menu (open it, scroll down): switch off "Tools button" (the floating button covers the project menu button);
   - drawer item "Reload mocks";
   - `africanpuzzleworksapp://dev-scenarios`, then `dev-preset-quota-80` (premium: no ad block in Contacts);
   - leave the app theme on "System".
4. `UDID=<simulator udid> AD=<agent-device command> OUT=<raw folder> zsh run-capture.sh`
   (`AD` is the `agent-device` command bound to the simulator; set `METRO_PORT` and `LANGS` if needed).
   Per language: set the app language, patch the database, restart the app, visit every screen once, then capture the light theme and the dark theme.
   The theme is the simulator appearance (`xcrun simctl ui <udid> appearance light|dark`) with the app theme on "System".
   Status bar: 9:41, full battery.
5. `zsh convert.sh <raw folder> public/images/app`
6. `uv run --with pillow python sheet.py sheet-light.png public/images/app light` (and `dark`).

## Facts that matter

- Raw PNG files go to `scripts/app-screenshots/raw/` (git-ignored). Commit only the WebP files.
- The Collaborators image is the "Your team, the right information" share sheet over the first project
  (`programme-detail?programmeId=mock-prog-1`, project menu, second item), not the `collaborators` route.
- Measurement labels with a numeric position key show the database label, so the SQL patch changes them.
  Labels of the keys `head`, `neck`, `bust`, `shoulder` come from the app translations.
- The Appointments calendar shows the current week: the date of the run is on the screenshot.
- The sheet shows "No voice for this language on this phone." when the simulator has no voice for the language.
- Arabic switches the app to right-to-left and restarts it: the script waits after the language change.
