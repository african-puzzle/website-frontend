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
    screen: z.string(),
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

const contact = defineCollection({
  loader: file('src/content/contact/contact.json', {
    parser: (text) => JSON.parse(text).contact_methods.map((m: { icon: string }, i: number) => ({ id: `${m.icon}-${i}`, ...m })),
  }),
  schema: z.object({
    label: z.string(),
    icon: z.enum(['whatsapp', 'facebook', 'instagram', 'telegram', 'twitter', 'linkedin', 'youtube', 'email', 'phone', 'address', 'website']),
    value: z.string(),
    url: z.string().default(''),
    order: z.number(),
    showInFooter: z.boolean().default(false),
    showInContact: z.boolean().default(false),
  }),
});

const instagram = defineCollection({
  // The CMS saves `{ "posts": [...] }`; accept the bare array too.
  loader: file('src/content/settings/instagram.json', {
    parser: (text) => { const d = JSON.parse(text); return Array.isArray(d) ? d : d.posts; },
  }),
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

export const collections = { team, media, features, countries, contact, instagram, privacy };
