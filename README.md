# wedding
Our wedding website (Astro, static, 4 languages: en / fr / de / es).

- `npm run dev` – local dev server
- `npm run build` – static build to `dist/`
- Translations: `src/i18n/locales/*.json`
- Pages: `src/pages/[lang]/…` (one file serves all languages)
- `/` is the language picker (links to `/en/`, `/fr/`, `/de/`, `/es/`); picker texts live in `src/i18n/picker.ts`
