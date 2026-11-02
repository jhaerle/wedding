import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://danielajulien.com',
  i18n: {
    locales: ['en', 'fr', 'de', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
