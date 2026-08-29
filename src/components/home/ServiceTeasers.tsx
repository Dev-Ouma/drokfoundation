import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { TextReveal } from "@/components/motion/TextReveal";
import { homeServiceTeasers } from "@/content/site";

export function ServiceTeasers() {
  return (
    <section className="border-y border-gold/20 bg-cream-deep/40 px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="kicker">Public vocation</p>
          <TextReveal
            as="h2"
            text="Ambition with a foundation underneath it"
            className="mt-3 font-display text-3xl text-forest italic md:text-4xl"
          />
        </Reveal>
        <Stagger className="mt-10 grid gap-5 md:grid-cols-2">
          {homeServiceTeasers.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="lift flex flex-col rounded-2xl border border-gold/25 bg-cream p-8 shadow-sm"
            >
              <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-gold-deep uppercase">
                {card.kicker}
              </p>
              <h3 className="mt-3 font-display text-2xl text-forest italic md:text-3xl">
                {card.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-muted">
                {card.body}
              </p>
              <span className="mt-8 inline-block text-[0.75rem] font-semibold tracking-[0.16em] text-forest uppercase">
                {card.cta}
              </span>
            </Link>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
