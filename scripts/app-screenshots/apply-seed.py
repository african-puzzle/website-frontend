#!/usr/bin/env python3
"""Patch the app data of a Simulator device with one localized seed set.
usage: apply-seed.py <udid> <lang>   (the app must be closed; run after the drawer item "Reload mocks")
1. runs seed/<lang>.sql on the app SQLite database (titles, notes, labels, names, album groups, clean-up);
2. sets the studio name shown in the Albums header (user profile store, an AsyncStorage file, not SQLite)."""
import json, pathlib, subprocess, sys

udid, lang = sys.argv[1], sys.argv[2]
here = pathlib.Path(__file__).resolve().parent
bundle = "com.africanpuzzleworks.app"
data = pathlib.Path(subprocess.check_output(["xcrun", "simctl", "get_app_container", udid, bundle, "data"], text=True).strip())

db = data / "Documents/SQLite/apworks.db"
subprocess.run(["sqlite3", str(db)], input=(here / f"seed/{lang}.sql").read_text(encoding="utf-8"), text=True, check=True)

title = json.loads((here / "seed/strings.json").read_text(encoding="utf-8"))["profile"]["albumTitle"][lang]
store = data / "Library/Application Support" / bundle / "RCTAsyncLocalStorage_V1"
for f in store.iterdir():
    if f.name == "manifest.json":
        continue
    text = f.read_text(encoding="utf-8")
    if '"albumTitle"' in text:
        doc = json.loads(text)
        doc["state"]["albumTitle"] = title
        f.write_text(json.dumps(doc, ensure_ascii=False), encoding="utf-8")
        break
else:
    sys.exit("apworks-user store not found")
print(f"{lang}: sql applied, albumTitle = {title}")
