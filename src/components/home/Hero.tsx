"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TextReveal } from "@/components/motion/TextReveal";
import {
  featuredWork,
  missionQuote,
  person,
  researchImpact,
} from "@/content/site";
import { cn } from "@/lib/utils";

const barMax = Math.max(...researchImpact.bars.map((b) => b.n));

type Props = {
  /** Official portrait URL when present — executive floating frame */
  portraitSrc?: string | null;
};

/**
 * Craig-style hero with executive load choreography.
 * When portraitSrc is set, a soft gold-framed portrait settles on the stage.
 */
export function Hero({ portraitSrc = null }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest">
      <Image
        src="/images/western-kenya-hills.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="ken-burns object-cover object-[60%_40%] opacity-75"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-forest/70 via-forest/75 to-forest/85" />

      <aside
        className={cn(
          "absolute top-32 right-8 z-20 hidden w-[380px] overflow-hidden rounded-2xl p-5 lg:block",
          ready ? "motion-scale-in motion-delay-5" : "opacity-0",
        )}
        style={{
          background: "rgba(19, 36, 28, 0.55)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <p className="mb-1 block text-[0.65rem] font-semibold tracking-[0.2em] text-cream/50 uppercase">
          {researchImpact.title}
        </p>
        <p className="mb-3 text-[11px] leading-relaxed text-cream/60">
          {researchImpact.blurb}
        </p>
        <div className="flex h-32 items-end gap-2 border-b border-l border-white/20 pb-0 pl-2">
          {researchImpact.bars.map((bar, i) => (
            <div
              key={bar.label}
              className="flex h-full flex-1 flex-col items-center justify-end"
            >
              <span className="mb-1 text-[10px] font-semibold text-gold">
                {bar.value}
              </span>
              <div
                className={cn("bar-grow w-full bg-gold/70", ready && "is-in")}
                style={{
                  height: `${Math.max(8, (bar.n / barMax) * 100)}%`,
                  minHeight: "4px",
                  animationDelay: `${700 + i * 100}ms`,
                }}
              />
            </div>
          ))}
        </div>
        <div className="mt-2 flex gap-1 pl-2">
          {researchImpact.bars.map((bar) => (
            <p
              key={bar.label}
              className="flex-1 text-center text-[9px] leading-tight text-cream/50"
            >
              {bar.label}
            </p>
          ))}
        </div>
        <p className="mt-3 text-center text-[10px] text-cream/30">
          {researchImpact.source}
        </p>
      </aside>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="max-w-4xl space-y-6 text-left lg:col-span-7">
            <TextReveal
              as="h1"
              mode="load"
              delay={80}
              text={`Dr. ${person.givenName} ${person.familyName}`}
              className="font-display text-5xl leading-tight font-semibold tracking-tight text-cream lg:text-7xl"
            />
            <div className="space-y-2">
              <p className="motion-fade-up motion-delay-2 text-xl font-light text-cream/90 lg:text-2xl">
                {person.role} in Special Needs Education
              </p>
              <p className="motion-fade-up motion-delay-3 text-lg text-cream/80 lg:text-xl">
                {person.institution}
              </p>
            </div>
            <p className="motion-fade-up motion-delay-4 max-w-3xl pt-4 font-display text-xl text-gold italic lg:text-2xl">
              “{missionQuote}”
            </p>
            <div className="motion-fade-up motion-delay-5 flex flex-wrap gap-4 pt-4">
              <Link
                href="/work"
                className="rounded-full bg-gold px-10 py-3.5 text-base font-semibold text-forest shadow-md transition duration-300 hover:bg-gold-soft hover:shadow-lg"
              >
                Explore my work
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-gold px-10 py-3.5 text-base font-semibold text-gold transition duration-300 hover:bg-gold hover:text-forest"
              >
                Get in touch
              </Link>
            </div>
            <a
              href={featuredWork.href}
              target="_blank"
              rel="noreferrer"
              className="motion-fade-up motion-delay-6 group mt-2 inline-flex w-fit items-center gap-2 text-sm font-medium tracking-wide text-cream/70 transition hover:text-gold lg:hidden"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/30 transition group-hover:border-gold">
                ▶
              </span>
              {featuredWork.cta}
            </a>
          </div>

          {portraitSrc ? (
            <div
              className={cn(
                "relative mx-auto hidden w-full max-w-sm lg:col-span-5 lg:block",
                ready ? "motion-scale-in motion-delay-4" : "opacity-0",
              )}
            >
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold/35 via-transparent to-gold/10 blur-sm" />
              <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-gold/35 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <Image
                  src={portraitSrc}
                  alt={person.displayName}
                  fill
                  priority
                  className="object-cover object-[45%_18%]"
                  sizes="380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-cream/5" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-gold uppercase">
                    Senior Lecturer · PhD
                  </p>
                  <p className="mt-1 font-display text-xl text-cream italic">
                    Maseno University
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <a
        href={featuredWork.href}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "group absolute right-8 bottom-8 z-20 hidden w-[340px] overflow-hidden rounded-2xl shadow-2xl transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)] lg:block",
          ready ? "motion-scale-in motion-delay-6" : "opacity-0",
          portraitSrc && "lg:right-8",
        )}
      >
        <span className="img-zoom relative block aspect-video overflow-hidden">
          <Image
            src={featuredWork.image}
            alt={featuredWork.imageAlt}
            fill
            sizes="340px"
            className="object-cover"
          />
          <span className="absolute inset-0 bg-forest/35" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-forest shadow-lg transition duration-300 group-hover:scale-105">
              ▶
            </span>
          </span>
        </span>
        <span className="block bg-forest/90 px-4 py-3">
          <span className="block text-[0.65rem] font-semibold tracking-[0.18em] text-gold uppercase">
            {featuredWork.kicker}
          </span>
          <span className="mt-1 block font-display text-sm leading-snug text-cream italic">
            {featuredWork.title}
          </span>
          <span className="mt-0.5 block text-xs text-cream/50">
            {featuredWork.subtitle}
          </span>
        </span>
      </a>

      <div className="scroll-cue absolute bottom-8 left-1/2 z-10 hidden lg:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-2">
          <div className="h-1.5 w-1.5 rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
}
