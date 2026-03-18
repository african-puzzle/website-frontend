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
  loader: file('src/content/countries/countries.json', { parser: (text) => JSON.parse(text).countries }),
  schema: z.object({
    emoji: z.string(),
    fr: z.string(),
    en: z.string(),
    pcm: z.string(),
  }),
});

const socialLinks = defineCollection({
  loader: file('src/content/settings/social-links.json'),
  schema: z.object({
    platform: z.string(),
    url: z.string(),
    handle: z.string().default(''),
    showInFooter: z.boolean().default(false),
    showInContact: z.boolean().default(false),
    order: z.number(),
  }),
});

const instagram = defineCollection({
  loader: file('src/content/settings/instagram.json'),
  schema: z.object({
    image: z.string(),
    link: z.string(),
    order: z.number(),
  }),
});

const privacy = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/privacy' }),
  schema: z.object({
    title: z.string(),
    effectiveDate: z.string(),
    locale: z.enum(['fr', 'en', 'pcm']),
  }),
});

export const collections = { team, media, features, countries, socialLinks, instagram, privacy };
