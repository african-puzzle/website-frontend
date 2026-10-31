# Helpers for run-capture.sh. Every UI action goes through the `agent-device` CLI (iOS Simulator), no Maestro.
# Needs: AD (path to the agent-device command, already bound to the device), UDID, METRO_PORT.
APP=com.africanpuzzleworks.app
SCREENS=(programmes-tab contacts-tab measurements albums-tab rendez-vous-tab collaborators)

# language -> text that is unique to its row in the language picker (rows carry a flag; Pidgin has none)
lang_key() { case $1 in fr) echo "🇫🇷";; en) echo "🇬🇧";; hi) echo "🇮🇳";; ar) echo "🇸🇦";; pcm) echo "Pidgin";; esac; }

# go <url> [wait]: open a deep link, answer the iOS "Open in" prompt, wait for the screen
go() {
  $AD open "$APP" "$1" > /dev/null 2>&1
  for _ in 1 2 3; do sleep 1; $AD alert accept > /dev/null 2>&1 && break; done
  sleep "${2:-4}"
}

# ref_of <nth> <kind>: ref of the nth element of a kind in a fresh snapshot
ref_of() { $AD snapshot -i 2> /dev/null | awk -v n="$1" -v k="[$2]" '$2 == k { c++; if (c == n) { print $1; exit } }'; }

# set_lang <lang>: Account -> language row (2nd cell) -> row by flag -> OK button (fixed spot)
set_lang() {
  go "africanpuzzleworksapp://account" 3
  $AD press "$(ref_of 2 cell)" --settle > /dev/null
  $AD find "$(lang_key "$1")" click > /dev/null
  $AD press 201 800 --settle > /dev/null
  sleep 10 # Arabic reloads the app to switch to right-to-left
}

# relaunch: restart the dev build on our Metro so the stores read the patched database
relaunch() {
  xcrun simctl terminate "$UDID" "$APP" 2> /dev/null
  [ -n "$1" ] && python3 -I "$(dirname "$0")/apply-seed.py" "$UDID" "$1"
  $AD open "$APP" --relaunch --metro-port "$METRO_PORT" > /dev/null 2>&1
  for _ in 1 2 3; do sleep 1; $AD alert accept > /dev/null 2>&1 && break; done
  sleep 15
}

shot() { $AD screenshot "$1.png" --pixel-density 3 > /dev/null; }

warm() {
  for u in programmes contacts "contact-measurements?id=mock-contact-1" albums rendez-vous; do go "africanpuzzleworksapp://$u" 4; done
}

# capture6 <dir>: the six website screens as 1206x2622 PNG files
capture6() {
  d=$1; mkdir -p "$d"
  go "africanpuzzleworksapp://programmes" 4; shot "$d/programmes-tab"
  go "africanpuzzleworksapp://contacts" 4; shot "$d/contacts-tab"
  go "africanpuzzleworksapp://contact-measurements?id=mock-contact-1" 4; shot "$d/measurements"
  go "africanpuzzleworksapp://albums" 4; shot "$d/albums-tab"
  go "africanpuzzleworksapp://rendez-vous" 4; shot "$d/rendez-vous-tab"
  # Collaborators: the share sheet over the first project (not the collaborators route)
  go "africanpuzzleworksapp://programme-detail?programmeId=mock-prog-1" 4
  $AD press 'id="programme-context-menu"' --settle > /dev/null
  $AD press 201 240 --settle > /dev/null # 2nd menu item: share the project
  sleep 3; shot "$d/collaborators"
  $AD press 'id="premium-b-dismiss"' --settle > /dev/null
}
