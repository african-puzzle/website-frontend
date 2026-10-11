---
name: i18n
description: Add or update translations for French, English, and Pidgin. Use when adding new text strings, translating content, or fixing translation issues.
argument-hint: [action] [key?] [text?]
---

Manage translations: `$ARGUMENTS`.

## Translation File Structure

```
src/i18n/
  translations/
    fr.json      → French (default locale)
    en.json      → English
    pcm.json     → Pidgin English
  utils.ts       → t(), getTranslations(), TranslationKey, localePaths, etc.
```

## JSON Structure (nested objects)

```json
{
  "nav": { "home": "Accueil", "about": "À propos" },
  "hero": { "title": "...", "subtitle": "..." },
  "reach": { "more_countries": "+ {count} autres pays" }
}
```

## Rules
1. **Always update all 3 locale files** when adding a new key
2. Keys are nested objects; address them with dots: `section.subsection.label`
3. French is the source of truth — translate FROM French
4. Pidgin translations should be natural Pidgin, not literal translations
5. Keep strings short for UI — move long text to content collections instead
6. Use `{placeholder}` for interpolated values: `"greeting": "Bonjour {name}"`

## Helper Usage in Components

```astro
---
import { t, type Locale } from '../../i18n/utils';
interface Props { lang: Locale }
const { lang } = Astro.props;
---
<h1>{t(lang, 'hero.title')}</h1>
```

`TranslationKey` is derived from `fr.json`, so a key missing from fr fails `npm run typecheck`. `t()` falls back to fr, then to the key itself.

## Actions
- **add [key] [fr] [en] [pcm]**: Add a new translation key to all files
- **update [key] [locale] [text]**: Update a specific key in one locale
- **audit**: Run `npm run i18n:check` (missing/extra keys, shape, empty strings, `{placeholder}` mismatches vs fr)
- **sync**: Ensure all locales have the same keys (fill missing with French text and flag it), then run `npm run i18n:check`
