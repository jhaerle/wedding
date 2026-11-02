import type { Locale } from './index';

/** Language picker entries — texts are intentionally written in each language. */
export const pickerOptions: { lang: Locale; label: string; greeting: string }[] = [
  { lang: 'en', label: 'I am from the UK', greeting: 'Cheers mate' },
  { lang: 'fr', label: 'Je suis de Suisse', greeting: 'Adieu' },
  { lang: 'de', label: 'Ich bin von Deutschland', greeting: 'Cervuss' },
  { lang: 'es', label: 'Soy de México', greeting: 'Qué onda?' },
];

/** Date shown under the picker (wedding date). */
export const pickerDate = '30.10.2027';
