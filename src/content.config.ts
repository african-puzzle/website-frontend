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

const media = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/media' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    date: z.string(),
    category: z.enum(['radio', 'press-release', 'articles', 'videos', 'social']),
    image: z.string(),
    link: z.string(),
  }),
});

const features = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/features' }),
  schema: z.object({
    titleKey: z.string(),
    descKey: z.string(),
    gif: z.string(),
    cardBg: z.string(),
    order: z.number(),
  }),
});

const countries = defineCollection({
  loader: file('src/content/countries/countries.json'),
  schema: z.object({
    emoji: z.string(),
    fr: z.string(),
    en: z.string(),
    pcm: z.string(),
  }),
});

export const collections = { team, media, features, countries };
