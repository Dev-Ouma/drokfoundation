import { PageIntro } from "@/components/PageIntro";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/Reveal";
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
        kicker="Biography"
        title="The long apprenticeship of a teacher"
        lede={about.lede}
      />
      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <Reveal className="md:col-span-4">
          <Portrait size="xl" className="mb-10" />
          <dl className="space-y-7 text-sm">
            <div>
              <dt className="kicker">Name</dt>
              <dd className="mt-2 font-display text-2xl font-semibold tracking-tight text-forest">
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
                  className="block text-forest underline decoration-[var(--line)] underline-offset-4 hover:decoration-forest"
                  href={`mailto:${person.email}`}
                >
                  {person.email}
                </a>
                <a
                  className="block text-forest underline decoration-[var(--line)] underline-offset-4 hover:decoration-forest"
                  href={`mailto:${person.emailPersonal}`}
                >
                  {person.emailPersonal}
                </a>
                <a
                  className="block text-forest underline decoration-[var(--line)] underline-offset-4 hover:decoration-forest"
                  href={person.phoneHref}
                >
                  {person.phone}
                </a>
              </dd>
            </div>
            <div>
              <Link
                href="/cv"
                className="inline-block text-[0.72rem] font-semibold tracking-[0.14em] text-forest uppercase"
              >
                Full curriculum vitae
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

      <section className="border-t border-[var(--line)] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="kicker">Education</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest md:text-4xl">
            From Shitoyi to the doctorate
          </h2>
          <ol className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {education.map((item) => (
              <li
                key={item.years}
                className="grid gap-2 py-6 md:grid-cols-12 md:gap-6"
              >
                <p className="year-mark md:col-span-3">{item.years}</p>
                <div className="md:col-span-9">
                  <p className="font-display text-xl font-semibold tracking-tight text-forest">
                    {item.degree}
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.school}</p>
                </div>
              </li>
            ))}
          </ol>
          <a
            href={site.cvPdf}
            className="mt-10 inline-block text-[0.72rem] font-semibold tracking-[0.14em] text-forest uppercase"
            rel="noopener noreferrer"
            target="_blank"
          >
            Download PDF CV
          </a>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="kicker">A life in sequence</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest md:text-4xl">
            Timeline
          </h2>
          <ol className="mt-12">
            {timeline.map((item, i) => (
              <Reveal
                key={item.year + item.title}
                as="li"
                delay={40}
                className="grid gap-4 border-t border-[var(--line)] py-8 md:grid-cols-12"
              >
                <p className="year-mark md:col-span-3">{item.year}</p>
                <div className="md:col-span-9">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-forest">
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

      <section className="border-t border-[var(--line)] bg-cream px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-px bg-[var(--line)] md:grid-cols-2">
          <div className="bg-cream p-8 md:p-10">
            <p className="kicker">Public leadership</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest">
              Toward Butere · 2032
            </h2>
            <p className="mt-4 text-muted">
              Preparing for the National Assembly seat — duties drawn from
              inclusive education, disability dignity, and Western Kenya.
            </p>
            <Link
              href="/vision"
              className="mt-6 inline-block text-[0.72rem] font-semibold tracking-[0.14em] text-forest uppercase"
            >
              Vision 2032
            </Link>
          </div>
          <div className="bg-forest p-8 text-cream md:p-10">
            <p className="kicker text-gold-soft">Philanthropy</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
              Okutoyi Foundation
            </h2>
            <p className="mt-4 text-cream/75">
              Education, health, socio-economic dignity, and outreach — the
              service institution that must outlast any ballot.
            </p>
            <Link
              href="/foundation"
              className="mt-6 inline-block text-[0.72rem] font-semibold tracking-[0.14em] text-gold-soft uppercase"
            >
              Visit the Foundation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
