/**
 * Shared schema.org helpers.
 *
 * The practice is described once in BaseLayout under a stable @id; everything
 * else references that node instead of restating the business on every page.
 */

export const SITE_URL = 'https://www.drsudit.com';
export const PRACTICE_ID = `${SITE_URL}/#practice`;

/** Absolute URL with the trailing slash Cloudflare serves directly. */
function absolute(pathname: string): string {
  const withSlash = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return new URL(withSlash, SITE_URL).href;
}

export interface ArticleInput {
  headline: string;
  description: string;
  datePublished: string;
  /** Defaults to datePublished — set it when a post is substantively revised. */
  dateModified?: string;
  /** Site-relative path; falls back to the default social image. */
  image?: string;
  author?: Record<string, unknown>;
  [key: string]: unknown;
}

/**
 * Fill in the Article fields Google needs for rich results (image,
 * dateModified, mainEntityOfPage, a resolvable publisher) so individual posts
 * only have to declare what is genuinely per-post.
 */
export function buildArticleSchema(input: ArticleInput, pathname: string) {
  const { url: _url, publisher: _publisher, mainEntityOfPage: _mainEntity, ...rest } = input;
  const canonical = absolute(pathname);

  return {
    ...rest,
    url: canonical,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    image: new URL(input.image ?? '/images/og-default.jpg', SITE_URL).href,
    dateModified: input.dateModified ?? input.datePublished,
    author: input.author ?? {
      '@type': 'Organization',
      '@id': PRACTICE_ID,
      name: 'Center for Smile Enhancement',
    },
    publisher: { '@id': PRACTICE_ID },
    inLanguage: 'en-US',
    isAccessibleForFree: true,
  };
}
