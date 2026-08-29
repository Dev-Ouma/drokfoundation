import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { Stagger } from "@/components/motion/Stagger";
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

      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-gold-soft uppercase">
                Statement of purpose
              </p>
              <p className="mt-4 text-[0.68rem] tracking-[0.12em] text-cream/50 uppercase">
                {vision.seat} · {vision.horizon}
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="font-display text-2xl leading-snug font-medium tracking-tight text-cream md:text-3xl md:leading-snug">
                {vision.promise}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {vision.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>
      </section>

      <section className="border-y border-[var(--line)] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal className="max-w-2xl">
            <p className="kicker">Public agenda</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest md:text-4xl">
              Key pillars for Butere
            </h2>
            <p className="mt-4 text-muted">
              Duties drawn from classrooms already walked — not slogans invented
              for a season.
            </p>
          </Reveal>
          <Stagger className="mt-12 grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-white p-7 md:p-8">
                <p className="font-display text-2xl font-semibold text-gold-deep">
                  {pillar.roman}
                </p>
                <p className="mt-3 text-[0.65rem] font-semibold tracking-[0.14em] text-muted uppercase">
                  {pillar.label}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-forest">
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
        <Reveal className="max-w-2xl">
          <p className="kicker">The path of preparation</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest md:text-4xl">
            Toward public office — with work first
          </h2>
        </Reveal>
        <Stagger as="ol" className="mt-12 grid gap-8 md:grid-cols-3">
          {vision.path.map((step, i) => (
            <li key={step.year} className="border-t border-forest pt-6">
              <p className="year-mark">
                <span className="mr-2 text-forest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step.year}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-forest md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </Stagger>
      </section>

      <section className="border-y border-[var(--line)] bg-cream">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-14 md:flex-row md:items-center md:px-8">
          <div className="max-w-xl">
            <p className="kicker">{foundation.name}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest md:text-4xl">
              The institution that must outlast the ballot
            </h2>
            <p className="mt-4 text-muted">
              Education, health, socio-economic dignity, and outreach — the same
              people a Member of Parliament for Butere must refuse to forget.
            </p>
          </div>
          <Link
            href="/foundation"
            className="shrink-0 border border-forest bg-forest px-6 py-3 text-[0.72rem] font-semibold tracking-[0.12em] text-cream uppercase transition hover:bg-forest-mid"
          >
            Visit the Foundation
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
