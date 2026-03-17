// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://testing.africanpuzzle.com',
  output: 'static',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'pcm'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});