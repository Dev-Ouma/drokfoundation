import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { MotionImage } from "@/components/motion/MotionImage";
import { Stagger } from "@/components/motion/Stagger";
import { TextReveal } from "@/components/motion/TextReveal";
import { foundation, site } from "@/content/site";
import { getMedia } from "@/lib/media";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Okutoyi Foundation",
  description:
    "The Okutoyi Foundation — education, health, socio-economic dignity, and outreach for persons with disabilities, orphans, and the vulnerable in Western Kenya.",
};

export default function FoundationPage() {
  const media = getMedia();
  const heroSrc = media.foundationHero.ready
    ? media.foundationHero.src
    : "/images/community-tree.jpg";
  const heroAlt = media.foundationHero.ready
    ? media.foundationHero.alt
    : "Community gathering in Western Kenya — atmospheric study for Foundation work.";
  const facts = foundation.facts;
  const hasFacts =
    Boolean(facts.legalName || facts.registrationNumber || facts.yearEstablished) ||
    facts.trustees.length > 0 ||
    facts.programmes.length > 0 ||
    facts.partners.length > 0;

  return (
    <main>
      <PageIntro
        kicker={foundation.kicker}
        title={foundation.name}
        lede={foundation.lede}
      />

      <section className="border-b border-[var(--line)] bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
          <Reveal variant="left" className="md:col-span-5">
            <MotionImage
              src={heroSrc}
              alt={heroAlt}
              fill
              frameClassName="relative aspect-[4/3] w-full overflow-hidden border border-[var(--line)]"
              imageClassName="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </Reveal>
          <Reveal className="md:col-span-7" delay={80}>
            <p className="kicker">Message from the founder</p>
            <blockquote className="mt-5 border-l border-forest/30 pl-5 font-display text-2xl leading-snug text-forest md:text-3xl">
              “{foundation.foundersQuote}”
            </blockquote>
            <p className="mt-4 text-[0.68rem] tracking-[0.12em] text-muted uppercase">
              {foundation.foundersQuoteAttribution}
            </p>
            <p className="mt-6 leading-relaxed text-muted">
              {foundation.foundersBridge}
            </p>
            <p className="mt-4 text-[0.68rem] tracking-[0.12em] text-gold-deep uppercase">
              Dr. Joel Okutoyi, Founder
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {foundation.message.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-8 border border-[var(--line)] bg-white p-5 text-sm leading-relaxed text-muted">
            {foundation.statusNote}
          </p>
        </Reveal>
      </section>

      {hasFacts ? (
        <section className="border-t border-[var(--line)] bg-white px-5 py-16 md:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="kicker">On the record</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest">
                Foundation particulars
              </h2>
            </Reveal>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {facts.legalName ? (
                <div>
                  <dt className="kicker">Legal name</dt>
                  <dd className="mt-2 text-forest">{facts.legalName}</dd>
                </div>
              ) : null}
              {facts.registrationNumber ? (
                <div>
                  <dt className="kicker">Registration</dt>
                  <dd className="mt-2 text-forest">{facts.registrationNumber}</dd>
                </div>
              ) : null}
              {facts.yearEstablished ? (
                <div>
                  <dt className="kicker">Established</dt>
                  <dd className="mt-2 text-forest">{facts.yearEstablished}</dd>
                </div>
              ) : null}
              {facts.registeredIn ? (
                <div>
                  <dt className="kicker">Registered in</dt>
                  <dd className="mt-2 text-forest">{facts.registeredIn}</dd>
                </div>
              ) : null}
            </dl>
            {facts.trustees.length > 0 ? (
              <div className="mt-10">
                <p className="kicker">Trustees</p>
                <ul className="mt-3 space-y-1 text-muted">
                  {facts.trustees.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {facts.programmes.length > 0 ? (
              <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {facts.programmes.map((p) => (
                  <div key={p.name} className="py-5">
                    <p className="font-display text-xl font-semibold tracking-tight text-forest">
                      {p.name}
                    </p>
                    <p className="mt-2 text-sm text-muted">{p.focus}</p>
                    {p.year || p.beneficiaries ? (
                      <p className="year-mark mt-3">
                        {[p.year, p.beneficiaries].filter(Boolean).join(" · ")}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
            {facts.partners.length > 0 ? (
              <p className="mt-8 text-sm text-muted">
                <span className="font-semibold text-forest">Partners: </span>
                {facts.partners.join(" · ")}
              </p>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="border-t border-[var(--line)] bg-forest text-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <p className="kicker text-gold-soft">Focus areas</p>
            <TextReveal
              as="h2"
              text="How the Foundation serves"
              className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl"
            />
            <p className="mt-4 max-w-2xl text-cream/70">
              Guided by the same pillars that shape the Vision 2032 agenda —
              improving individuals so the constituency can rise.
            </p>
          </Reveal>
          <Stagger className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2">
            {foundation.pillars.map((pillar) => (
              <div key={pillar.title} className="bg-forest p-7 md:p-8">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-cream">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/75">
                  {pillar.body}
                </p>
                <Link
                  href={pillar.href}
                  className="mt-5 inline-block text-[0.68rem] font-semibold tracking-[0.14em] text-gold-soft uppercase"
                >
                  Learn more
                </Link>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-cream px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-px bg-[var(--line)] md:grid-cols-2">
          <div className="bg-cream p-8 md:p-10">
            <p className="kicker">On the public record</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest">
              Verified impact so far
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              AI4KSL, Kakamega inclusion research, teacher formation, and the
              community vocation already stated in public profiles — gathered
              without invented beneficiary counts.
            </p>
            <Link
              href="/community"
              className="mt-6 inline-block border border-forest px-6 py-2.5 text-[0.72rem] font-semibold tracking-[0.12em] text-forest uppercase transition hover:bg-forest hover:text-cream"
            >
              View impact
            </Link>
          </div>
          <div className="bg-forest p-8 text-cream md:p-10">
            <p className="kicker text-gold-soft">{foundation.invite.title}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
              Volunteer · Partner · Give
            </h2>
            <p className="mt-4 leading-relaxed text-cream/75">
              {foundation.invite.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={foundation.invite.href}
                className="bg-cream px-6 py-2.5 text-[0.72rem] font-semibold tracking-[0.12em] text-forest uppercase transition hover:bg-gold-soft"
              >
                {foundation.invite.cta}
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="border border-cream/35 px-6 py-2.5 text-[0.72rem] font-semibold tracking-[0.12em] text-cream uppercase transition hover:border-cream"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] px-5 py-12 md:px-8">
        <p className="mx-auto max-w-3xl text-sm text-muted">
          Political preparation for Butere lives on{" "}
          <Link href="/vision" className="font-semibold text-forest underline underline-offset-4">
            Vision 2032
          </Link>
          . The Foundation is the service vehicle that must outlast any ballot.
        </p>
      </section>
    </main>
  );
}
