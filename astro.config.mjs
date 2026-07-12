// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://africanpuzzle.com',
  output: 'static',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'pcm'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr',
          en: 'en',
          pcm: 'pcm',
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
