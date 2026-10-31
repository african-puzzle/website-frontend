import type { Locale } from '../i18n/utils';

export const APP_SCREENS = ['programmes-tab', 'contacts-tab', 'measurements', 'albums-tab', 'rendez-vous-tab', 'collaborators'] as const;
export type AppScreen = (typeof APP_SCREENS)[number];

export const appScreen = (lang: Locale, name: AppScreen) => ({
  light: `/images/app/${lang}/light/${name}.webp`,
  dark: `/images/app/${lang}/dark/${name}.webp`,
});
