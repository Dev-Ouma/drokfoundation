"use client";

import Image from "next/image";
import Link from "next/link";
import { TextReveal } from "@/components/motion/TextReveal";
import { featuredWork, missionQuote, person } from "@/content/site";

type Props = {
  /** Official portrait URL when present — executive floating frame */
  portraitSrc?: string | null;
};

/**
 * Craig-style hero — clean two-column stage.
 * Research metrics live in ImpactMetricsBand below (no floating overlap).
 */
export function Hero({ portraitSrc = null }: Props) {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-forest">
      <Image
        src="/images/western-kenya-hills.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden
        className="ken-burns object-cover object-[60%_40%] opacity-75"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-forest/70 via-forest/75 to-forest/85"
        aria-hidden
      />
      <div
        className="ambient-orb left-[-8%] top-[18%] h-72 w-72 bg-gold/25"
        aria-hidden
      />
      <div
        className="ambient-orb ambient-orb--alt right-[-5%] bottom-[12%] h-80 w-80 bg-gold/15"
        aria-hidden
      />
      <div className="hero-light-sweep" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-12 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="max-w-4xl space-y-5 text-left lg:col-span-7">
            <div className="rule-draw-load mb-1 h-px w-16 bg-gradient-to-r from-gold to-transparent" />
            <TextReveal
              as="h1"
              mode="load"
              delay={60}
              text={`Dr. ${person.givenName} ${person.familyName}`}
              className="font-display text-5xl leading-[1.05] font-semibold tracking-tight text-cream md:text-6xl lg:text-7xl"
            />
            <div className="space-y-1.5">
              <p className="motion-fade-up motion-delay-2 text-xl font-light text-cream/90 lg:text-2xl">
                {person.role} in Special Needs Education
              </p>
              <p className="motion-fade-up motion-delay-3 text-lg text-cream/80 lg:text-xl">
                {person.institution}
              </p>
            </div>
            <p className="motion-fade-up motion-delay-4 max-w-2xl pt-2 font-display text-xl text-gold italic lg:text-2xl">
              “{missionQuote}”
            </p>
            <div className="motion-fade-up motion-delay-5 flex flex-wrap gap-3 pt-3 sm:gap-4">
              <Link
                href="/work"
                className="btn-executive rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-forest shadow-md sm:px-10"
              >
                Explore my work
              </Link>
              <Link
                href="/contact"
                className="btn-executive btn-executive-outline rounded-full border-2 border-gold px-8 py-3.5 text-base font-semibold text-gold transition hover:bg-gold hover:text-forest sm:px-10"
              >
                Get in touch
              </Link>
            </div>

            {/* Mobile / tablet portrait */}
            {portraitSrc ? (
              <div className="motion-scale-in motion-delay-4 relative mx-auto mt-8 w-full max-w-[280px] lg:hidden">
                <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-gold/35 shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
                  <Image
                    src={portraitSrc}
                    alt={person.displayName}
                    fill
                    priority
                    className="object-cover object-[45%_18%]"
                    sizes="280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/45 via-transparent to-transparent" />
                </div>
              </div>
            ) : null}

            <a
              href={featuredWork.href}
              target="_blank"
              rel="noopener noreferrer"
              className="motion-fade-up motion-delay-6 group mt-2 inline-flex w-fit items-center gap-2 text-sm font-medium tracking-wide text-cream/80 transition hover:text-gold lg:hidden"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/40 transition group-hover:border-gold">
                ▶
              </span>
              <span>
                {featuredWork.cta}
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
            </a>
          </div>

          {portraitSrc ? (
            <div className="motion-scale-in motion-delay-3 relative mx-auto hidden w-full max-w-sm lg:col-span-5 lg:block">
              <div
                className="ring-breathe absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold/40 via-transparent to-gold/15 blur-sm"
                aria-hidden
              />
              <div className="portrait-glow img-zoom relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-gold/40 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
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
                  <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-gold uppercase">
                    Senior Lecturer · PhD
                  </p>
                  <p className="mt-1 font-display text-xl text-cream italic">
                    Maseno University
                  </p>
                </div>
              </div>

              <a
                href={featuredWork.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 flex overflow-hidden rounded-2xl border border-white/10 bg-forest/80 shadow-xl transition duration-300 hover:-translate-y-0.5 hover:border-gold/40"
              >
                <span className="img-zoom relative block w-32 shrink-0 self-stretch sm:w-36">
                  <Image
                    src={featuredWork.image}
                    alt=""
                    fill
                    sizes="144px"
                    className="object-cover"
                    aria-hidden
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-forest/30">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-forest shadow-md transition group-hover:scale-105">
                      ▶
                    </span>
                  </span>
                </span>
                <span className="flex flex-1 flex-col justify-center px-4 py-3">
                  <span className="text-[0.65rem] font-semibold tracking-[0.18em] text-gold uppercase">
                    {featuredWork.kicker}
                  </span>
                  <span className="mt-1 font-display text-sm leading-snug text-cream italic">
                    {featuredWork.title}
                  </span>
                  <span className="mt-0.5 text-xs text-cream/60">
                    {featuredWork.subtitle}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </span>
              </a>
            </div>
          ) : (
            <div className="motion-scale-in motion-delay-4 relative mx-auto hidden w-full max-w-sm lg:col-span-5 lg:block">
              <a
                href={featuredWork.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl shadow-2xl transition duration-500 hover:-translate-y-1"
              >
                <span className="img-zoom relative block aspect-video overflow-hidden">
                  <Image
                    src={featuredWork.image}
                    alt={featuredWork.imageAlt}
                    fill
                    sizes="380px"
                    className="object-cover"
                  />
                  <span className="absolute inset-0 bg-forest/35" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-forest shadow-lg transition group-hover:scale-105">
                      ▶
                    </span>
                  </span>
                </span>
                <span className="block bg-forest/95 px-4 py-3">
                  <span className="block text-[0.65rem] font-semibold tracking-[0.18em] text-gold uppercase">
                    {featuredWork.kicker}
                  </span>
                  <span className="mt-1 block font-display text-sm leading-snug text-cream italic">
                    {featuredWork.title}
                  </span>
                </span>
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="scroll-cue absolute bottom-6 left-1/2 z-10" aria-hidden>
        <div className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-white/35 p-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-white/55" />
        </div>
      </div>
    </section>
  );
}
