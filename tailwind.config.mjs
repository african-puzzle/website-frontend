/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          purple: {
            50: '#f3e8ff',
            100: '#e9d5ff',
            200: '#d8b4fe',
            300: '#c084fc',
            400: '#a855f7',
            500: '#9333ea',
            600: '#8c30f5',
            700: '#7c3aed',
            800: '#6b21a8',
            900: '#3d2664',
          },
          blue: {
            500: '#3b82f6',
            600: '#1F5BFF',
          },
        },
        feature: {
          projects: '#fff1c2',
          clients: '#c5bed1',
          album: '#ffba42',
          appointments: '#aad3fa',
        },
        about: {
          tan: '#eae0ab',
          name: '#340975',
          role: '#a5a29b',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        display: ['Nunito', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
