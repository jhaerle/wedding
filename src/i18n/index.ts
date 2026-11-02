import en from './locales/en.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import es from './locales/es.json';

export const locales = ['en', 'fr', 'de', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const dictionaries: Record<Locale, typeof en> = { en, fr, de, es };

export function getDictionary(lang: Locale) {
  return dictionaries[lang];
}

/** Absolute URL of a page in a given language. Slug '' is the homepage. */
export function pageUrl(lang: Locale, slug = '') {
  return `/${lang}/${slug ? slug + '/' : ''}`;
}

export const navSlugs = {
  home: '',
  flights: 'flights',
  transport: 'transport',
  accommodation: 'accommodation',
  programme: 'programme',
} as const;

/** Language switcher entries, in the order shown in the Figma dropdown. */
export const switcherOptions: { lang: Locale; short: string; name: string }[] = [
  { lang: 'en', short: 'EN', name: 'English' },
  { lang: 'es', short: 'ESP', name: 'Español' },
  { lang: 'de', short: 'DE', name: 'Deutsch' },
  { lang: 'fr', short: 'FR', name: 'Français' },
];
