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

export function RecognitionCarousel({ slides }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const safe = slides.length > 0 ? slides : [];

  useEffect(() => {
    if (paused || safe.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % safe.length),
      4800,
    );
    return () => clearInterval(id);
  }, [paused, safe.length]);

  if (safe.length === 0) return null;

  const current = safe[index];

  return (
    <div
      className="relative aspect-[4/5] overflow-hidden border border-[var(--line)] bg-cream-deep md:aspect-auto md:h-full md:min-h-[480px]"
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
            "absolute inset-0 transition-opacity duration-700",
            i === index ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-[45%_20%]"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={i === 0}
          />
          <div className="absolute inset-x-0 bottom-0 bg-forest/90 p-5 pb-14 md:p-7 md:pb-16">
            <p className="font-display text-xl text-cream md:text-2xl">
              {slide.caption}
            </p>
            {slide.credit ? (
              <p className="mt-1 text-xs text-cream/65">{slide.credit}</p>
            ) : null}
          </div>
        </div>
      ))}

      {safe.length > 1 ? (
        <div className="absolute right-4 bottom-4 z-10 flex items-center gap-3">
          <button
            type="button"
            aria-label={paused ? "Resume slideshow" : "Pause slideshow"}
            className="border border-white/30 bg-forest/60 px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide text-cream uppercase backdrop-blur-sm"
            onClick={() => setPaused((p) => !p)}
          >
            {paused ? "Play" : "Pause"}
          </button>
          <div className="flex gap-1.5">
            {safe.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Go to photograph ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={
                  i === index
                    ? "h-1 w-6 bg-cream"
                    : "h-1 w-1.5 bg-cream/45 hover:bg-cream/70"
                }
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
