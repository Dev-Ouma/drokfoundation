import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { homeServiceTeasers } from "@/content/site";

export function ServiceTeasers() {
  return (
    <section className="bg-cream px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="kicker">Institution &amp; public work</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest md:text-4xl">
            Scholarship, philanthropy, and public leadership
          </h2>
          <p className="mt-4 text-muted">
            Academic work at Maseno University; the Okutoyi Foundation; and a
            long preparation for public office in Butere Constituency.
          </p>
        </Reveal>
        <Stagger className="mt-12 grid gap-px bg-[var(--line)] md:grid-cols-2">
          {homeServiceTeasers.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col bg-cream p-8 transition hover:bg-white md:p-10"
            >
              <p className="text-[0.65rem] font-semibold tracking-[0.14em] text-gold-deep uppercase">
                {card.kicker}
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-forest md:text-3xl">
                {card.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-muted">
                {card.body}
              </p>
              <span className="mt-8 text-[0.72rem] font-semibold tracking-[0.12em] text-forest uppercase transition group-hover:underline group-hover:underline-offset-4">
                {card.cta}
              </span>
            </Link>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
