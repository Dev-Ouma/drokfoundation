import { PageIntro } from "@/components/PageIntro";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { education } from "@/content/cv";
import { about, person, site, timeline } from "@/content/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Biography of Dr. Joel Okutoyi, PhD — Senior Lecturer in Special Needs Education at Maseno University, DAAD scholar, First Class Honours graduate, educator since 2009.",
};

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        kicker="About"
        title="The long apprenticeship of a teacher"
        lede={about.lede}
      />
      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <Reveal className="md:col-span-4">
          <Portrait size="xl" className="mb-10" />
          <dl className="space-y-6 text-sm">
            <div>
              <dt className="kicker">Name</dt>
              <dd className="mt-2 font-display text-2xl text-forest italic">
                {person.displayName}
              </dd>
            </div>
            <div>
              <dt className="kicker">Office</dt>
              <dd className="mt-2 leading-relaxed text-muted">
                {person.role}
                <br />
                {person.department}
                <br />
                {person.institution}
              </dd>
            </div>
            <div>
              <dt className="kicker">Formation</dt>
              <dd className="mt-2 leading-relaxed text-muted">
                {person.degrees}
                <br />
                {person.daad}
              </dd>
            </div>
            <div>
              <dt className="kicker">Roots</dt>
              <dd className="mt-2 leading-relaxed text-muted">{person.roots}</dd>
            </div>
            <div>
              <dt className="kicker">Correspondence</dt>
              <dd className="mt-2 space-y-1">
                <a
                  className="block text-forest underline"
                  href={`mailto:${person.email}`}
                >
                  {person.email}
                </a>
                <a
                  className="block text-forest underline"
                  href={`mailto:${person.emailPersonal}`}
                >
                  {person.emailPersonal}
                </a>
                <a className="block text-forest underline" href={person.phoneHref}>
                  {person.phone}
                </a>
              </dd>
            </div>
            <div>
              <Link
                href="/cv"
                className="inline-block text-[0.75rem] font-semibold tracking-[0.16em] text-gold-deep uppercase"
              >
                Full curriculum vitae →
              </Link>
            </div>
          </dl>
        </Reveal>
        <Reveal className="space-y-5 text-[1.07rem] leading-relaxed text-muted md:col-span-8">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </Reveal>
      </section>

      <section className="border-t border-gold/20 bg-forest text-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="kicker text-gold">Education</p>
          <h2 className="mt-3 font-display text-4xl italic">
            From Shitoyi to the doctorate
          </h2>
          <Stagger
            as="ol"
            className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {education.map((item) => (
              <li
                key={item.years}
                className="lift border border-gold/25 p-5"
              >
                <p className="font-display text-gold italic">{item.years}</p>
                <p className="mt-2 font-display text-xl italic">{item.degree}</p>
                <p className="mt-2 text-sm text-cream/70">{item.school}</p>
              </li>
            ))}
          </Stagger>
          <a
            href={site.cvPdf}
            className="mt-10 inline-block text-[0.75rem] font-semibold tracking-[0.16em] text-gold uppercase"
            rel="noopener noreferrer"
            target="_blank"
          >
            Download PDF CV →
          </a>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-cream-deep/50">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="kicker">A life in sequence</p>
          <h2 className="mt-3 font-display text-4xl text-forest italic">
            Timeline
          </h2>
          <ol className="mt-12 space-y-0">
            {timeline.map((item, i) => (
              <Reveal
                key={item.year + item.title}
                as="li"
                delay={40}
                className="grid gap-4 border-t border-gold/25 py-8 md:grid-cols-12"
              >
                <p className="font-display text-2xl text-gold-deep italic md:col-span-3">
                  {item.year}
                </p>
                <div className="md:col-span-9">
                  <h3 className="font-display text-2xl text-forest italic">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
                </div>
                <span className="sr-only">
                  Step {i + 1} of {timeline.length}
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-cream px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gold/25 p-8">
            <p className="kicker">Political vocation</p>
            <h2 className="mt-3 font-display text-3xl text-forest italic">
              Toward Butere · 2032
            </h2>
            <p className="mt-4 text-muted">
              Preparing for the National Assembly seat — duties drawn from
              inclusive education, disability dignity, and Western Kenya.
            </p>
            <Link
              href="/vision"
              className="mt-6 inline-block text-[0.75rem] font-semibold tracking-[0.16em] text-gold-deep uppercase"
            >
              Vision 2032 →
            </Link>
          </div>
          <div className="rounded-2xl border border-gold/25 bg-forest p-8 text-cream">
            <p className="kicker text-gold">Philanthropy</p>
            <h2 className="mt-3 font-display text-3xl italic">
              Okutoyi Foundation
            </h2>
            <p className="mt-4 text-cream/80">
              Education, health, socio-economic dignity, and outreach — the
              service vehicle beneath the political ambition.
            </p>
            <Link
              href="/foundation"
              className="mt-6 inline-block text-[0.75rem] font-semibold tracking-[0.16em] text-gold uppercase"
            >
              Visit the Foundation →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
