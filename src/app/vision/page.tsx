import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { TextReveal } from "@/components/motion/TextReveal";
import { foundation, pillars, vision } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision 2032",
  description:
    "Dr. Joel Okutoyi’s political agenda for Butere Constituency in 2032 — education, disability dignity, teachers, economy, health, and agriculture.",
};

export default function VisionPage() {
  return (
    <main>
      <PageIntro kicker={vision.kicker} title={vision.title} lede={vision.lede} />

      <section className="promise-band bg-forest text-cream">
        <div className="relative mx-auto max-w-4xl px-5 py-14 text-center md:px-8 md:py-16">
          <Reveal variant="fade">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
              My promise to Kenyans of Butere
            </p>
          </Reveal>
          <TextReveal
            as="p"
            mode="scroll"
            text={vision.promise}
            className="mt-5 font-display text-2xl leading-snug italic md:text-4xl md:leading-relaxed"
          />
          <Reveal delay={200}>
            <div className="rule-draw mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="mt-5 text-sm tracking-[0.14em] text-cream/70 uppercase">
              {vision.seat} · {vision.horizon}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {vision.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>
      </section>

      <section className="border-t border-gold/20 bg-cream-deep/40">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <p className="kicker">Political agenda</p>
            <TextReveal
              as="h2"
              text="Key pillars for Butere"
              className="mt-3 font-display text-4xl text-forest italic md:text-5xl"
            />
            <p className="mt-4 max-w-2xl text-muted">
              Duties drawn from classrooms already walked — not slogans invented
              for a season.
            </p>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="executive-card rounded-2xl border border-gold/25 bg-cream p-6 shadow-sm"
              >
                <p className="font-display text-3xl text-gold italic">
                  {pillar.roman}
                </p>
                <p className="mt-2 text-[0.65rem] font-semibold tracking-[0.18em] text-gold-deep uppercase">
                  {pillar.label}
                </p>
                <h3 className="mt-2 font-display text-xl text-forest italic">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {pillar.body}
                </p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <p className="kicker">The path of preparation</p>
          <TextReveal
            as="h2"
            text="Toward the ballot — with work first"
            className="mt-3 font-display text-4xl text-forest italic"
          />
        </Reveal>
        <Stagger as="ol" className="mt-12 grid gap-6 md:grid-cols-3">
          {vision.path.map((step, i) => (
            <li key={step.year} className="path-rail pt-6">
              <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-gold-deep uppercase">
                <span className="mr-2 font-display text-lg text-gold italic">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step.year}
              </p>
              <h3 className="mt-2 font-display text-2xl text-forest italic">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </Stagger>
      </section>

      <section className="border-y border-gold/20 bg-forest text-cream">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-14 md:flex-row md:items-center md:px-8">
          <div className="max-w-xl">
            <p className="kicker text-gold">{foundation.name}</p>
            <h2 className="mt-3 font-display text-3xl italic md:text-4xl">
              Service is the campaign that never ends
            </h2>
            <p className="mt-4 text-cream/75">
              Education, health, socio-economic dignity, and outreach — the same
              people a Member of Parliament for Butere must refuse to forget.
            </p>
          </div>
          <Link
            href="/foundation"
            className="btn-executive shrink-0 rounded-full bg-gold px-8 py-3 text-[0.75rem] font-semibold tracking-[0.16em] text-forest uppercase"
          >
            Visit the Foundation →
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-12 md:px-8">
        <Reveal variant="fade">
          <p className="text-sm leading-relaxed text-muted">{vision.disclaimer}</p>
        </Reveal>
      </section>
    </main>
  );
}
