#!/bin/zsh
# Capture the six website screens for every language and both themes.
# usage: UDID=<simulator udid> OUT=<raw png folder> AD=<agent-device command> [METRO_PORT=8086] [LANGS="fr en pcm hi ar"] zsh run-capture.sh
# Needs the app dev build on the simulator, Metro running on METRO_PORT with
# EXPO_PUBLIC_SEED_DATA=true EXPO_PUBLIC_E2E=true EXPO_PUBLIC_ALLOW_TEST_OTP=true, mocks loaded once (drawer "Reload mocks"),
# the premium scenario on (dev-scenarios dev-preset-quota-80, no ad block in Contacts), the dev menu "Tools button" off,
# and the app theme left on "System" (the theme is switched with the simulator appearance).
set -u
: "${UDID:?}" "${OUT:?}" "${AD:?}"
METRO_PORT=${METRO_PORT:-8086}
LANGS=${LANGS:-fr en pcm hi ar}
HERE=${0:A:h}
source "$HERE/lib.sh"

xcrun simctl status_bar "$UDID" override --time 9:41 --batteryLevel 100 --batteryState charged --cellularBars 4 --wifiBars 3
for lang in ${=LANGS}; do
  xcrun simctl ui "$UDID" appearance light
  set_lang "$lang"
  relaunch "$lang"            # patch the database for this language, restart the app
  warm                        # visit every screen so images are loaded
  for theme in light dark; do
    xcrun simctl ui "$UDID" appearance "$theme"; sleep 3
    capture6 "$OUT/$lang/$theme"
  done
  echo "$lang done"
done
xcrun simctl ui "$UDID" appearance light
