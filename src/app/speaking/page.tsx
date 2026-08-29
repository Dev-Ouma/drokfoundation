import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { person, speaking } from "@/content/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Workshops, conference papers, and speaking invitations for Dr. Joel Okutoyi — AI4KSL, Kenyan Sign Language, and inclusive education.",
};

export default function SpeakingPage() {
  return (
    <main>
      <PageIntro
        kicker="Speaking"
        title="Invite the classroom into the room"
        lede="Workshops with teachers of the deaf, conference papers on Kenyan Sign Language and AI, and an open invitation for keynotes, school visits, and community forums in Butere and beyond."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <ul className="space-y-0">
          {speaking.map((item) => (
            <li
              key={item.title}
              className="grid gap-4 border-t border-gold/25 py-10 md:grid-cols-12"
            >
              <Reveal className="md:col-span-3">
                <p className="font-display text-2xl text-gold-deep italic">
                  {item.year}
                </p>
                <p className="mt-2 text-[0.68rem] font-semibold tracking-[0.16em] text-muted uppercase">
                  {item.kind}
                </p>
              </Reveal>
              <Reveal className="md:col-span-9" delay={40}>
                <h2 className="font-display text-2xl text-forest italic md:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                  {item.body}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-4 inline-block text-[0.75rem] font-semibold tracking-[0.16em] text-gold-deep uppercase"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Related link →
                  </a>
                ) : null}
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="paper-card mt-12 p-8 md:p-10">
          <p className="kicker">Book a talk</p>
          <h2 className="mt-3 font-display text-3xl text-forest italic">
            Schools, conferences, and Butere forums
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            Topics: inclusive education, deaf education and Kenyan Sign Language,
            AI4KSL, stuttering and classroom dignity, and the 2032 vision for
            Butere. Write with preferred dates and audience.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-forest px-6 py-3 text-[0.75rem] font-semibold tracking-[0.16em] text-cream uppercase"
          >
            Request a speaking engagement
          </Link>
          <p className="mt-4 text-sm text-muted">
            Or email{" "}
            <a className="text-forest underline" href={`mailto:${person.email}`}>
              {person.email}
            </a>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
