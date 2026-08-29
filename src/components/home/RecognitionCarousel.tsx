"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type CarouselSlide = {
  src: string;
  alt: string;
  caption: string;
  credit?: string;
};

type Props = {
  slides: CarouselSlide[];
};

/** Soft crossfade carousel — official photos when provided, else atmospheric. */
export function RecognitionCarousel({ slides }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const safe = slides.length > 0 ? slides : [];

  useEffect(() => {
    if (paused || safe.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % safe.length),
      4200,
    );
    return () => clearInterval(id);
  }, [paused, safe.length]);

  if (safe.length === 0) return null;

  const current = safe[index];

  return (
    <div
      className="img-zoom relative h-[380px] overflow-hidden rounded-2xl bg-forest/10 shadow-[0_20px_50px_rgba(19,36,28,0.12)] md:h-[520px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <div className="sr-only" aria-live="polite">
        {current.caption}
        {current.credit ? ` — ${current.credit}` : ""}
      </div>

      {safe.map((slide, i) => (
        <div
          key={slide.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            i === index ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-[45%_20%]"
            sizes="(min-width: 768px) 52vw, 100vw"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 pb-12 md:p-7 md:pb-14">
            <p className="font-display text-xl text-cream italic md:text-2xl">
              {slide.caption}
            </p>
            {slide.credit ? (
              <p className="mt-1 text-xs text-gold-soft">{slide.credit}</p>
            ) : null}
          </div>
        </div>
      ))}

      {safe.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous photograph"
            className="absolute top-1/2 left-3 z-10 -translate-y-1/2 rounded-full bg-cream/95 px-2.5 py-1 text-lg text-forest shadow-md transition hover:bg-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            onClick={() =>
              setIndex((i) => (i - 1 + safe.length) % safe.length)
            }
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next photograph"
            className="absolute top-1/2 right-3 z-10 -translate-y-1/2 rounded-full bg-cream/95 px-2.5 py-1 text-lg text-forest shadow-md transition hover:bg-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            onClick={() => setIndex((i) => (i + 1) % safe.length)}
          >
            ›
          </button>
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
            <button
              type="button"
              aria-label={paused ? "Resume slideshow" : "Pause slideshow"}
              className="rounded-full bg-cream/90 px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide text-forest uppercase shadow-sm transition hover:bg-gold"
              onClick={() => setPaused((p) => !p)}
            >
              {paused ? "Play" : "Pause"}
            </button>
            <div className="flex gap-2">
              {safe.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`Go to photograph ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  className={
                    i === index
                      ? "h-2 w-8 rounded-full bg-gold transition-all"
                      : "h-2 w-2 rounded-full bg-white/75 transition-all hover:bg-white"
                  }
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
