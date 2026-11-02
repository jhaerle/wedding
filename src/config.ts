/**
 * Build-time switch between the "under construction" page and the real site.
 * Controlled by PUBLIC_UNDER_CONSTRUCTION:
 *   - 'false'            -> real site
 *   - anything else/unset -> under construction (safe default for production builds)
 * `astro dev` always shows the real site (see astro.config.mjs).
 */
export const underConstruction = import.meta.env.PUBLIC_UNDER_CONSTRUCTION !== 'false';
