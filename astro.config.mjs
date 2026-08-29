// sparkable-preview-config: v2
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// In the hosted preview the Astro dev server isn't reachable directly — it's
// proxied same-origin by the Next.js app under /preview/<projectId>/. The
// manager injects PREVIEW_BASE so every page and asset URL is emitted under
// that prefix and stays routable through the proxy. Unset in a normal
// production build, so base falls back to "/".
const previewBase = process.env.PREVIEW_BASE;

/** Routes rendered with `noindex`; excluded from the sitemap to match. */
const NOINDEX_ROUTES = ['/hipaa/', '/privacy/', '/terms/', '/accessibility/'];

export default defineConfig({
  // Set this to your production URL (updated during deployment)
  site: 'https://www.drsudit.com',
  base: previewBase || undefined,
  output: 'static',
  integrations: [
    sitemap({
      // These pages ship `noindex` (see the `noindex` prop in each page's
      // BaseLayout call). Listing them here too would submit URLs we have
      // asked Google not to index — which Search Console reports as
      // "Submitted URL marked 'noindex'". Keep the two in sync.
      filter: (page) =>
        !NOINDEX_ROUTES.some((route) => new URL(page).pathname === route),
    }),
  ],
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      // HMR websockets can't traverse the HTTP-only proxy, so disable them
      // under the preview to stop the client spamming reconnect attempts.
      // The app instead reloads the iframe on each agent edit (a `reload` SSE
      // event), and astro dev recompiles per request.
      ...(previewBase && { hmr: false }),
      // Container volumes (Railway, fly.io) don't reliably fire inotify for
      // file changes, so Vite wouldn't invalidate its module cache and a
      // reload would serve stale modules. Polling sidesteps that — required
      // for the auto-reload to actually reflect edits. Local dev keeps native
      // watching (neither var is set).
      ...((previewBase || process.env.FLY_APP_NAME) && {
        watch: { usePolling: true, interval: 500 },
      }),
    },
  },
});
