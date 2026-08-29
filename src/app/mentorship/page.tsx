import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { mentees } from "@/content/cv";
import { mentorship, person } from "@/content/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentorship",
  description:
    "Postgraduate mentorship with Dr. Joel Okutoyi — M.Ed. and Ph.D. candidates in inclusive education, deaf education, and Kenyan Sign Language at Maseno University.",
};

export default function MentorshipPage() {
  return (
    <main>
      <PageIntro
        kicker="Mentorship"
        title="Teachers, researchers, and the next classroom"
        lede={mentorship.lede}
      />
      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {mentorship.paragraphs.map((p) => (
            <p key={p.slice(0, 28)}>{p}</p>
          ))}
        </Reveal>
      </section>
      <section className="border-t border-gold/20 bg-cream-deep/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-3 md:px-8 md:py-24">
          {mentorship.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 60} className="paper-card p-7">
              <p className="font-display text-gold italic">0{i + 1}</p>
              <h2 className="mt-3 font-display text-2xl text-forest italic">
                {pillar.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pillar.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <p className="kicker">On the 2020 CV</p>
        <h2 className="mt-3 font-display text-4xl text-forest italic">
          Named postgraduate mentees
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Status notes reflect the November 2020 curriculum vitae. Completion
          updates will be added when confirmed.
        </p>
        <ul className="mt-10 space-y-5">
          {mentees.map((m) => (
            <li key={m.name} className="paper-card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-display text-2xl text-forest italic">
                  {m.name}
                </p>
                <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-gold-deep uppercase">
                  {m.level} · {m.years}
                </p>
              </div>
              <p className="mt-3 leading-relaxed text-muted">{m.title}</p>
              <p className="mt-2 text-sm text-forest/80">{m.status}</p>
            </li>
          ))}
        </ul>
        <Link
          href="/cv"
          className="mt-10 inline-block text-[0.75rem] font-semibold tracking-[0.16em] text-gold-deep uppercase"
        >
          Full CV →
        </Link>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20 md:px-8">
        <Reveal className="paper-card p-8 md:p-10">
          <p className="kicker">Write to mentor or be mentored</p>
          <h2 className="mt-3 font-display text-3xl text-forest italic">
            Graduate students, teachers, partners
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            If you are a graduate student in special needs education, a teacher
            of deaf learners, or a community partner building inclusive
            programmes in Western Kenya, introduce yourself.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-forest px-6 py-3 text-[0.75rem] font-semibold tracking-[0.16em] text-cream uppercase"
          >
            Start a conversation
          </Link>
          <p className="mt-4 text-sm text-muted">
            <a className="text-forest underline" href={`mailto:${person.email}`}>
              {person.email}
            </a>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
