"use client";

import Image from "next/image";
import Link from "next/link";
import { TextReveal } from "@/components/motion/TextReveal";
import { featuredWork, missionQuote, person } from "@/content/site";

type Props = {
  portraitSrc?: string | null;
};

/**
 * Faculty / institute hero — photography, serif display, restrained caption bar.
 */
export function Hero({ portraitSrc = null }: Props) {
  return (
    <section className="relative bg-forest text-cream">
      <div className="mx-auto grid min-h-[min(86svh,820px)] max-w-6xl lg:grid-cols-12">
        <div className="flex flex-col justify-center px-5 py-16 md:px-8 md:py-24 lg:col-span-6 lg:pr-16">
          <p className="motion-fade-up text-[0.68rem] font-semibold tracking-[0.18em] text-gold-soft uppercase">
            Maseno University · Special Needs Education
          </p>
          <TextReveal
            as="h1"
            mode="load"
            delay={40}
            text={person.displayName}
            className="mt-6 font-display text-4xl leading-[1.08] font-semibold tracking-tight md:text-5xl lg:text-[3.4rem]"
          />
          <p className="motion-fade-up motion-delay-2 mt-3 text-sm font-medium tracking-[0.06em] text-cream/55 uppercase">
            {person.role} · {person.department}
          </p>
          <p className="motion-fade-up motion-delay-3 mt-6 max-w-md text-base leading-relaxed text-cream/75 md:text-lg">
            Research and teaching at the intersection of deaf education,
            inclusive schooling, and national language access.
          </p>
          <p className="motion-fade-up motion-delay-4 mt-8 max-w-lg border-l border-gold/45 pl-5 font-display text-xl leading-snug text-cream md:text-[1.35rem]">
            “{missionQuote}”
          </p>
          <div className="motion-fade-up motion-delay-5 mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="inline-flex items-center bg-cream px-6 py-3 text-[0.72rem] font-semibold tracking-[0.12em] text-forest uppercase transition hover:bg-gold-soft"
            >
              Research &amp; publications
            </Link>
            <Link
              href="/cv"
              className="inline-flex items-center border border-cream/35 px-6 py-3 text-[0.72rem] font-semibold tracking-[0.12em] text-cream uppercase transition hover:border-cream hover:bg-cream/5"
            >
              Curriculum vitae
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-2 py-3 text-[0.72rem] font-semibold tracking-[0.12em] text-gold-soft uppercase transition hover:text-cream"
            >
              Correspondence
            </Link>
          </div>
          <a
            href={featuredWork.href}
            target="_blank"
            rel="noopener noreferrer"
            className="motion-fade-up motion-delay-6 mt-8 inline-flex w-fit items-center text-sm text-cream/55 transition hover:text-cream lg:hidden"
          >
            <span className="underline decoration-cream/30 underline-offset-4">
              {featuredWork.cta}
            </span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <div className="relative min-h-[420px] lg:col-span-6 lg:min-h-full">
          <Image
            src={portraitSrc ?? "/images/western-kenya-hills.jpg"}
            alt={
              portraitSrc
                ? person.displayName
                : "Western Kenya — geography of research and public vocation"
            }
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[45%_18%]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-forest px-6 py-5 md:px-8 md:py-6">
            <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-gold-soft uppercase">
              Senior Lecturer · PhD
            </p>
            <p className="mt-1 font-display text-xl text-cream">
              {person.institution}
            </p>
            <a
              href={featuredWork.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 hidden border-t border-white/15 pt-4 transition hover:text-gold-soft lg:block"
            >
              <span className="text-[0.65rem] font-semibold tracking-[0.14em] text-gold-soft uppercase">
                {featuredWork.kicker}
              </span>
              <span className="mt-1 block font-display text-sm leading-snug text-cream">
                {featuredWork.title}
              </span>
              <span className="mt-1 block text-xs text-cream/55">
                {featuredWork.subtitle}
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
