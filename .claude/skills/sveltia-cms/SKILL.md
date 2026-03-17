---
name: sveltia-cms
description: Manage Sveltia CMS configuration — add collections, update fields, sync with Astro content schemas. Use when modifying the CMS admin panel.
argument-hint: [action] [collection?]
---

Manage Sveltia CMS config: `$ARGUMENTS`.

## Architecture

The CMS admin panel lives in a **separate repo**: `african-puzzle/website-cms` (served at `admin.africanpuzzle.com`).
Content edits made through the CMS are committed to `african-puzzle/website-frontend`.

- **CMS repo**: `african-puzzle/website-cms` — contains `index.html`, `config.yml`, `CNAME`
- **Content repo**: `african-puzzle/website-frontend` — contains `src/content/`, `src/content.config.ts`

## Files

- `config.yml` (in website-cms repo) — Collection definitions, backend config, media settings
- `src/content.config.ts` (in website-frontend repo) — Zod schemas for content collections

## Adding a New Collection

1. Add Zod schema in `src/content.config.ts` using `glob()` or `file()` loader
2. Create content directory under `src/content/`
3. Add collection definition to `config.yml` in the `website-cms` repo
4. Ensure field types in config.yml match the Zod schema

## CMS Widget Types

- `string` — single-line text
- `text` — multi-line text
- `number` — numeric (set `value_type: int` or `float`)
- `datetime` — date picker (use `format: 'YYYY-MM-DD'` for date-only)
- `select` — dropdown with `options` list
- `image` — image picker from media folder
- `object` — nested fields (e.g., multilingual `{ fr, en, pcm }`)
- `list` — repeatable fields

## Key Config

```yaml
backend:
  name: github
  repo: african-puzzle/website-frontend
  branch: main

site_url: https://africanpuzzle.com
display_url: https://africanpuzzle.com

media_folder: public/images
public_folder: /images
```

## Actions
- **add-collection**: Add a new collection to both `config.yml` (in website-cms) and `content.config.ts`
- **add-field**: Add a field to an existing collection
- **sync**: Verify `config.yml` fields match Zod schemas
