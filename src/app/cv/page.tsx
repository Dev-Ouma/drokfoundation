import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import {
  appointments,
  conferences,
  contactCard,
  cvPublications,
  cvSource,
  education,
  leadership,
  mentees,
  memberships,
  researchInterests,
  researchProjects,
  skills,
} from "@/content/cv";
import { person, publications, site } from "@/content/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description:
    "Full curriculum vitae of Dr. Joel Okutoyi, PhD — education, research projects, postgraduate mentorship, appointments, leadership, conferences, and publications.",
};

function SectionTitle({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) {
  return (
    <div className="mb-8 border-b border-gold/30 pb-4">
      <p className="kicker">{kicker}</p>
      <h2 className="mt-2 font-display text-3xl text-forest italic md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function CvPage() {
  const allPubs: {
    year: number;
    title: string;
    authors: string;
    venue: string;
    href?: string;
  }[] = [
    ...publications.map((p) => ({
      year: p.year,
      title: p.title,
      authors: p.authors,
      venue: p.venue,
      href: p.href,
    })),
    ...cvPublications
      .filter((cp) => !publications.some((p) => p.title === cp.title))
      .map((cp) => ({ ...cp, href: undefined as string | undefined })),
  ].sort((a, b) => b.year - a.year);

  return (
    <main>
      <PageIntro
        size="compact"
        kicker="Curriculum Vitae"
        title="The public record of a scholar"
        lede="Education, appointments, funded research, postgraduate mentorship, leadership, conferences, and publications — drawn from his Maseno staff CV and later public updates."
      />

      {/* Letterhead */}
      <section className="border-b border-gold/20 bg-cream-deep/40">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <Reveal className="paper-card relative overflow-hidden p-8 md:p-12">
            <div
              className="flag-ribbon absolute inset-y-0 left-0 w-1"
              aria-hidden
            />
            <div className="pl-4 md:pl-6">
              <p className="font-display text-4xl text-forest italic md:text-5xl">
                {person.displayName}
              </p>
              <p className="mt-2 text-lg text-gold-deep">
                {person.role} · {contactCard.department}
              </p>
              <p className="mt-1 text-muted">{contactCard.institution}</p>
              <div className="mt-8 grid gap-6 text-sm leading-relaxed text-muted md:grid-cols-2">
                <div>
                  <p>{contactCard.road}</p>
                  <p>{contactCard.poBox}</p>
                </div>
                <div className="space-y-1">
                  <p>
                    <a
                      className="text-forest underline"
                      href={contactCard.phoneHref}
                    >
                      {contactCard.phone}
                    </a>
                  </p>
                  <p>
                    <a
                      className="text-forest underline"
                      href={`mailto:${contactCard.emailPrimary}`}
                    >
                      {contactCard.emailPrimary}
                    </a>
                  </p>
                  <p>
                    <a
                      className="text-forest underline"
                      href={`mailto:${contactCard.emailAlt}`}
                    >
                      {contactCard.emailAlt}
                    </a>
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.cvPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-forest px-6 py-2.5 text-[0.72rem] font-semibold tracking-[0.16em] text-cream uppercase transition hover:bg-forest-mid"
                >
                  Download PDF CV
                </a>
                <Link
                  href="/contact"
                  className="border border-gold-deep px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.16em] text-forest uppercase"
                >
                  Request speaking / supervision
                </Link>
              </div>
              <p className="mt-4 text-xs text-muted">{cvSource.note}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-20 px-5 py-16 md:px-8 md:py-24">
        {/* Education ladder */}
        <section>
          <SectionTitle kicker="01" title="Education" />
          <ol className="relative space-y-0 border-l border-gold/40 pl-8">
            {education.map((item, i) => (
              <li key={item.years} className="relative pb-10 last:pb-0">
                <span
                  className="absolute top-1.5 -left-[2.15rem] h-3 w-3 rounded-full border-2 border-gold bg-cream"
                  aria-hidden
                />
                <p className="font-display text-xl text-gold-deep italic">
                  {item.years}
                </p>
                <h3 className="mt-1 font-display text-2xl text-forest italic">
                  {item.degree}
                </h3>
                <p className="mt-1 text-muted">{item.school}</p>
                {item.note ? (
                  <p className="mt-2 text-sm text-forest/80">{item.note}</p>
                ) : null}
                <span className="sr-only">
                  Step {i + 1} of {education.length}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Appointments */}
        <section>
          <SectionTitle kicker="02" title="Academic appointments" />
          <ul className="divide-y divide-gold/25 border-y border-gold/25">
            {appointments.map((item) => (
              <li
                key={item.title + item.years}
                className="grid gap-2 py-6 md:grid-cols-12"
              >
                <p className="font-display text-gold-deep italic md:col-span-3">
                  {item.years}
                </p>
                <div className="md:col-span-9">
                  <p className="font-display text-xl text-forest italic">
                    {item.title}
                  </p>
                  <p className="mt-1 text-muted">{item.place}</p>
                  {item.note ? (
                    <p className="mt-1 text-sm text-muted/80">{item.note}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Research projects */}
        <section>
          <SectionTitle kicker="03" title="Funded research experience" />
          <div className="grid gap-5 md:grid-cols-2">
            {researchProjects.map((p) => (
              <article key={p.title} className="paper-card p-6">
                <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-gold-deep uppercase">
                  {p.years} · {p.role}
                </p>
                <h3 className="mt-3 font-display text-xl text-forest italic">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{p.funder}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section>
          <SectionTitle kicker="04" title="Areas of research interest" />
          <ul className="flex flex-wrap gap-3">
            {researchInterests.map((interest) => (
              <li
                key={interest}
                className="rounded-full border border-gold/40 bg-cream px-4 py-2 text-sm text-forest"
              >
                {interest}
              </li>
            ))}
          </ul>
        </section>

        {/* Mentees */}
        <section>
          <SectionTitle kicker="05" title="Postgraduate mentorship" />
          <p className="mb-8 max-w-2xl text-muted">
            Named supervisees from the November 2020 CV (status as recorded then).
            Updated completion outcomes will be added when confirmed.
          </p>
          <ul className="space-y-6">
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
                {m.id ? (
                  <p className="mt-1 text-xs text-muted">{m.id}</p>
                ) : null}
                <p className="mt-3 leading-relaxed text-muted">{m.title}</p>
                <p className="mt-2 text-sm text-forest/80">{m.status}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Leadership & membership */}
        <section className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionTitle kicker="06" title="Leadership" />
            <ul className="space-y-5">
              {leadership.map((item) => (
                <li key={item.title}>
                  <p className="font-display text-gold-deep italic">
                    {item.years}
                  </p>
                  <p className="font-display text-xl text-forest italic">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.place}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle kicker="07" title="Membership & skills" />
            <p className="kicker mb-3">Professional membership</p>
            <ul className="mb-8 space-y-1 text-muted">
              {memberships.map((m) => (
                <li key={m}>· {m}</li>
              ))}
            </ul>
            <p className="kicker mb-3">Skills & training</p>
            <ul className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="border border-gold/30 px-3 py-1 text-xs text-forest"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Conferences */}
        <section>
          <SectionTitle kicker="08" title="Conferences & workshops" />
          <ul className="divide-y divide-gold/25 border-y border-gold/25">
            {conferences.map((c) => (
              <li key={c.title + c.year} className="grid gap-2 py-5 md:grid-cols-12">
                <p className="font-display text-gold-deep italic md:col-span-2">
                  {c.year}
                </p>
                <div className="md:col-span-10">
                  <p className="font-medium text-forest">{c.title}</p>
                  <p className="mt-1 text-sm text-muted">{c.authors}</p>
                  <p className="mt-1 text-sm text-muted">{c.venue}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            href="/speaking"
            className="mt-6 inline-block text-[0.75rem] font-semibold tracking-[0.16em] text-gold-deep uppercase"
          >
            Speaking & invitations →
          </Link>
        </section>

        {/* Publications */}
        <section>
          <SectionTitle kicker="09" title="Selected publications" />
          <ol className="divide-y divide-gold/25 border-y border-gold/25">
            {allPubs.map((pub, i) => (
              <li key={pub.title} className="grid gap-2 py-6 md:grid-cols-12">
                <p className="font-display text-gold-deep italic md:col-span-2">
                  {pub.year}
                </p>
                <div className="md:col-span-10">
                  {pub.href ? (
                    <a
                      href={pub.href}
                      className="font-display text-lg text-forest italic hover:text-gold-deep md:text-xl"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {i + 1}. {pub.title}
                    </a>
                  ) : (
                    <p className="font-display text-lg text-forest italic md:text-xl">
                      {i + 1}. {pub.title}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-muted">{pub.authors}</p>
                  <p className="mt-1 text-sm text-muted">{pub.venue}</p>
                </div>
              </li>
            ))}
          </ol>
          <a
            href={site.cvPdf}
            className="mt-8 inline-block text-[0.75rem] font-semibold tracking-[0.16em] text-gold-deep uppercase"
            rel="noopener noreferrer"
            target="_blank"
          >
            Open original PDF CV →
          </a>
        </section>
      </div>
    </main>
  );
}
