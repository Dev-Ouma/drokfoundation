import { existsSync, readdirSync } from "node:fs";
import path from "node:path";

/** Official photography — files in public/images/ light up automatically. */
const IMAGE_DIR = path.join(process.cwd(), "public", "images");

function has(file: string) {
  return existsSync(path.join(IMAGE_DIR, file));
}

function firstOf(...files: string[]) {
  for (const file of files) {
    if (has(file)) return `/images/${file}`;
  }
  return null;
}

/**
 * Preferred filenames (any one works):
 * - portrait.jpg | portrait.png | portrait.webp  → headshot
 * - foundation-hero.jpg                          → Foundation page
 * - official-01.jpg … official-12.jpg            → gallery / recognition carousel
 * - hero-portrait.jpg                            → optional hero panel
 */
export function getMedia() {
  let official: { src: string; alt: string }[] = [];
  try {
    official = readdirSync(IMAGE_DIR)
      .filter((f) => /^official[-_]?\d+\.(jpe?g|png|webp)$/i.test(f))
      .sort()
      .map((f, i) => ({
        src: `/images/${f}`,
        alt: `Dr. Joel Okutoyi speaking at a professional workshop (${i + 1})`,
      }));
  } catch {
    official = [];
  }

  const portraitSrc = firstOf(
    "portrait.webp",
    "portrait.png",
    "portrait.jpg",
    "portrait.jpeg",
  );

  const heroPortraitSrc = firstOf(
    "hero-portrait.webp",
    "hero-portrait.png",
    "hero-portrait.jpg",
    "portrait.webp",
    "portrait.png",
    "portrait.jpg",
  );

  return {
    portrait: {
      ready: Boolean(portraitSrc),
      src: portraitSrc ?? "/images/portrait.jpg",
      alt: "Dr. Joel Okutoyi",
    },
    heroPortrait: {
      ready: Boolean(heroPortraitSrc),
      src: heroPortraitSrc ?? "/images/portrait.jpg",
      alt: "Dr. Joel Okutoyi",
    },
    foundationHero: {
      ready: Boolean(
        firstOf("foundation-hero.webp", "foundation-hero.jpg", "foundation-hero.png"),
      ),
      src:
        firstOf("foundation-hero.webp", "foundation-hero.jpg", "foundation-hero.png") ??
        "/images/foundation-hero.jpg",
      alt: "Okutoyi Foundation community work",
    },
    official,
  };
}
