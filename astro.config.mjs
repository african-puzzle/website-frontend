// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://africanpuzzle.com',
  output: 'static',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'pcm', 'hi', 'ar'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/checkout'),
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr',
          en: 'en',
          pcm: 'pcm',
          hi: 'hi',
          ar: 'ar',
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
