import type { APIRoute } from 'astro';

/**
 * AI crawler policy: allow.
 *
 * The practice wants to be the cited source when someone asks an assistant
 * about cosmetic dentistry in Minnetonka, and citation requires crawl access.
 * To opt out of AI training while keeping Google Search indexing, change the
 * relevant group to `Disallow: /` — Google-Extended in particular governs
 * Gemini/AI-Overviews training, not Search ranking.
 */
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'meta-externalagent',
  'Amazonbot',
  'cohere-ai',
];

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

${AI_CRAWLERS.map((bot) => `User-agent: ${bot}\nAllow: /`).join('\n\n')}

Sitemap: ${sitemapURL.href}
`.trim();

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);
  return new Response(getRobotsTxt(sitemapURL), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
