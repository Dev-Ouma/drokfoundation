import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { researchProjects } from "@/content/cv";
import { ai4ksl, publications, researchThemes, site } from "@/content/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Academic work",
  description:
    "Research by Dr. Joel Okutoyi on deaf education, Kenyan Sign Language, inclusive schooling, stuttering, and AI4KSL at Maseno University.",
};

export default function WorkPage() {
  return (
    <main>
      <PageIntro
        kicker="Academic & professional work"
        title="Special needs education, practised in public"
        lede="Senior Lecturer, Department of Special Needs Education and Rehabilitation, Maseno University. A body of work that keeps returning to the same question: can this child belong in this classroom?"
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="kicker">Themes</p>
            <h2 className="mt-2 font-display text-3xl text-forest italic">
              Where the scholarship lives
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cv"
              className="text-[0.75rem] font-semibold tracking-[0.16em] text-gold-deep uppercase"
            >
              Full CV →
            </Link>
            <a
              href={site.cvPdf}
              className="text-[0.75rem] font-semibold tracking-[0.16em] text-gold-deep uppercase"
              rel="noreferrer"
              target="_blank"
            >
              PDF →
            </a>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {researchThemes.map((theme) => (
            <Reveal key={theme.title} className="paper-card p-6">
              <h2 className="font-display text-2xl text-forest italic">
                {theme.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {theme.body}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <p className="kicker">Funded research</p>
          <h2 className="mt-2 font-display text-3xl text-forest italic">
            Projects on the record
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
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
        </div>
      </section>

      <section className="border-y border-gold/20 bg-forest text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8">
          <div className="md:col-span-4">
            <p className="kicker text-gold">{ai4ksl.role}</p>
            <h2 className="mt-3 font-display text-4xl italic">{ai4ksl.name}</h2>
            <p className="mt-4 text-sm text-gold-soft">{ai4ksl.fullName}</p>
          </div>
          <div className="md:col-span-8 space-y-4 leading-relaxed text-cream/80">
            <p>{ai4ksl.aim}</p>
            <p>
              Lead investigator: {ai4ksl.pi}. Co-investigators:{" "}
              {ai4ksl.coInvestigators.join("; ")}.
            </p>
            <p className="text-sm text-cream/65">{ai4ksl.funders}</p>
            <p className="text-sm">
              Pilot centres: {ai4ksl.centres.join(" · ")}.
            </p>
            <a
              className="inline-block text-[0.75rem] font-semibold tracking-[0.16em] text-gold uppercase"
              href={ai4ksl.href}
              rel="noreferrer"
              target="_blank"
            >
              Maseno project page →
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="kicker">Publications</p>
        <h2 className="mt-3 font-display text-4xl text-forest italic">
          Selected papers
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Titles and venues below are taken from public academic records. Where
          a stable DOI or publisher page exists, it is linked.
        </p>
        <ol className="mt-10 divide-y divide-gold/25 border-y border-gold/25">
          {publications.map((pub) => (
            <li key={pub.title} className="grid gap-3 py-8 md:grid-cols-12">
              <p className="font-display text-2xl text-gold-deep italic md:col-span-2">
                {pub.year}
              </p>
              <div className="md:col-span-10">
                <a
                  href={pub.href}
                  className="font-display text-xl text-forest italic hover:text-gold-deep md:text-2xl"
                  rel="noreferrer"
                  target="_blank"
                >
                  {pub.title}
                </a>
                <p className="mt-2 text-sm text-muted">{pub.authors}</p>
                <p className="mt-1 text-sm text-muted">{pub.venue}</p>
                {pub.note ? (
                  <p className="mt-3 text-sm leading-relaxed text-forest/80">
                    {pub.note}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
