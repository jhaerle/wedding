import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

// Under-construction switch.
//   PUBLIC_UNDER_CONSTRUCTION=false -> real site
//   unset / anything else           -> under-construction page (safe default for builds)
// `astro dev` always shows the real site.
const isDev = process.argv.includes('dev');
const live = process.env.PUBLIC_UNDER_CONSTRUCTION === 'false' || isDev;
process.env.PUBLIC_UNDER_CONSTRUCTION = live ? 'false' : 'true';

// Only the active root page is part of the module graph, so the other version's CSS never ships.
const rootPage = live ? './src/components/LanguagePicker.astro' : './src/components/UnderConstruction.astro';

export default defineConfig({
  site: 'https://danielajulien.com',
  i18n: {
    locales: ['en', 'fr', 'de', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  vite: {
    resolve: { alias: { '@root-page': fileURLToPath(new URL(rootPage, import.meta.url)) } },
  },
});
