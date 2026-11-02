/**
 * Build-time switch between the "under construction" page and the real site.
 * Controlled by PUBLIC_UNDER_CONSTRUCTION:
 *   - 'false'            -> real site
 *   - anything else/unset -> under construction (safe default for production builds)
 * Local `npm run dev` sets it to 'false' via .env.development.
 */
export const underConstruction = import.meta.env.PUBLIC_UNDER_CONSTRUCTION !== 'false';
