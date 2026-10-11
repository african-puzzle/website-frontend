---
name: verify
description: Run the project gates and confirm every localized route is built. Use before claiming work is done.
---

Run in order and report pass/fail per step. Stop at the first failing step and show its output.

1. `npm run check` (typecheck, lint, i18n parity).
2. `npm run build`.
3. Route coverage: for each locale in `localePaths` (`src/i18n/utils.ts`: fr, en, pcm) and each route key listed there (read the file; do not assume the list), confirm `dist<path>/index.html` exists. List any missing path.

Report:

```
check: pass|fail
build: pass|fail
routes: pass|fail (N/N built; missing: ...)
```
