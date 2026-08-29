/**
 * Intrinsic pixel dimensions for everything in `public/images/`.
 *
 * `<img>` needs accurate `width`/`height` to reserve the right box before the
 * bytes arrive — that is what keeps CLS at zero. Components were hard-coding a
 * single guess (1600x1200) for every hero, which was wrong for all eleven of
 * them, so the numbers live here instead and are looked up by path.
 *
 * If you add or re-crop an image, update its entry. `npm run build` will not
 * catch a stale number; `imageDims()` only throws for a path it has never seen.
 */
export interface ImageDims {
  width: number;
  height: number;
}

export const IMAGE_DIMS: Record<string, ImageDims> = {
  '/images/GrailSampleBocx-crop.webp': { width: 700, height: 340 },
  '/images/GrailSampleBocx.webp': { width: 1136, height: 693 },
  '/images/doctor-sudit.jpg': { width: 300, height: 300 },
  '/images/hero-patient-warm.webp': { width: 1040, height: 1300 },
  '/images/hero-patient.jpg': { width: 2500, height: 1664 },
  '/images/interior-office.webp': { width: 2000, height: 1333 },
  '/images/logo-banner.jpg': { width: 1000, height: 333 },
  '/images/logo-bundle.png': { width: 900, height: 432 },
  '/images/logo-mark.webp': { width: 320, height: 319 },
  '/images/og-default.jpg': { width: 1200, height: 630 },
  '/images/service-advanced-tech.webp': { width: 864, height: 530 },
  '/images/service-aesthetics.webp': { width: 900, height: 900 },
  '/images/service-cosmetic-smile.webp': { width: 900, height: 600 },
  '/images/service-cosmetic.webp': { width: 900, height: 599 },
  '/images/service-emergency.webp': { width: 864, height: 648 },
  '/images/service-family.webp': { width: 864, height: 576 },
  '/images/service-orthodontics.webp': { width: 864, height: 576 },
  '/images/service-teledentistry.webp': { width: 900, height: 708 },
  '/images/service-tmj.webp': { width: 864, height: 738 },
};

/**
 * Look up an image's intrinsic size. Throws at build time rather than emitting
 * an `<img>` with no dimensions, so a missing entry fails loudly instead of
 * silently regressing layout stability.
 */
export function imageDims(src: string): ImageDims {
  const dims = IMAGE_DIMS[src];
  if (!dims) {
    throw new Error(
      `No intrinsic dimensions recorded for "${src}". Add it to src/data/image-dimensions.ts.`
    );
  }
  return dims;
}
