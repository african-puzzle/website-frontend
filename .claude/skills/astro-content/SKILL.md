---
name: astro-content
description: Create or edit content collection entries (team members, features, media posts, countries) stored as Markdown/JSON in src/content/. Use when managing CMS content.
argument-hint: [collection] [action] [details?]
---

Manage content in collection `$0`: `$ARGUMENTS`.

## Content Collections

```
src/
  content.config.ts          → collection schemas (Zod + Content Layer API)
  content/
    team/
      01-bams-betga.md
      02-benjamin-mbiandjeu.md
      ...
    features/
      01-projects.md
      02-clients.md
      03-album.md
      04-appointments.md
    media/
      2023-04-20-medi1-podcast.md
      ...
    countries/
      countries.json
```

## Schema Pattern (src/content.config.ts)

```ts
import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const team = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.object({ fr: z.string(), en: z.string(), pcm: z.string() }),
    linkedin: z.string().default(''),
    photo: z.string().default(''),
    order: z.number(),
  }),
});
```

## Actions
- **add**: Create new entry with proper frontmatter matching the collection schema
- **edit**: Modify existing entry — read it first, change only what's needed
- **list**: Show all entries in the collection
- **remove**: Delete an entry file

Always validate frontmatter matches the Zod schema in `src/content.config.ts`. Include all required fields. Use multilingual objects `{ fr, en, pcm }` for translatable strings.
