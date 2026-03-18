import fr from './translations/fr.json';
import en from './translations/en.json';
import pcm from './translations/pcm.json';

type Translations = typeof fr;

type NestedKeyOf<T, Prefix extends string = ''> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object
        ? NestedKeyOf<T[K], Prefix extends '' ? K : `${Prefix}.${K}`>
        : Prefix extends ''
          ? K
          : `${Prefix}.${K}`;
    }[keyof T & string]
  : never;

export type TranslationKey = NestedKeyOf<Translations>;

const translations: Record<string, Translations> = { fr, en, pcm };

export const locales = ['fr', 'en', 'pcm'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export function getTranslations(locale: string): Translations {
  return translations[locale] ?? translations[defaultLocale];
}

function getNestedValue(obj: unknown, key: string): string | undefined {
  const result = key.split('.').reduce<unknown>((o, k) => (o as Record<string, unknown>)?.[k], obj);
  return typeof result === 'string' ? result : undefined;
}

export function t(locale: string, key: TranslationKey): string {
  const trans = getTranslations(locale);
  return getNestedValue(trans, key) ?? getNestedValue(fr, key) ?? key;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, locale] = url.pathname.split('/');
  if (locales.includes(locale as Locale)) return locale as Locale;
  return defaultLocale;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  return `/${locale}${path === '/' ? '' : path}`;
}

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  pcm: 'Pidgin',
};

export const localePaths: Record<Locale, Record<string, string>> = {
  fr: {
    home: '/fr',
    about: '/fr/a-propos',
    contact: '/fr/contact',
    media: '/fr/medias',
    privacy: '/fr/confidentialite',
  },
  en: {
    home: '/en',
    about: '/en/about',
    contact: '/en/contact',
    media: '/en/media',
    privacy: '/en/privacy',
  },
  pcm: {
    home: '/pcm',
    about: '/pcm/about',
    contact: '/pcm/contact',
    media: '/pcm/media',
    privacy: '/pcm/privacy',
  },
};

export function getEquivalentPath(currentPath: string, targetLocale: Locale): string {
  const normalized = currentPath.replace(/\/$/, '') || '/';

  for (const locale of locales) {
    const paths = localePaths[locale];
    for (const [key, path] of Object.entries(paths)) {
      if (path === normalized) {
        return localePaths[targetLocale][key];
      }
    }
  }

  return localePaths[targetLocale].home;
}
