import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { affiliations, recognition } from "@/content/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recognition",
  description:
    "Honours and milestones for Dr. Joel Okutoyi — Senior Lecturer appointment, DAAD scholarship, AI4KSL co-investigation, and sustained teacher education at Maseno University.",
};

export default function RecognitionPage() {
  return (
    <main>
      <PageIntro
        kicker="Recognition"
        title="Honours & milestones"
        lede="A short public ledger of appointments, fellowships, and project roles — not a vanity wall. Each entry is tied to a source where one exists."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <ol className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {recognition.map((item, i) => (
            <li key={item.title} className="grid gap-4 py-10 md:grid-cols-12">
              <Reveal className="md:col-span-3">
                <p className="year-mark">{item.year}</p>
                <p className="mt-1 text-[0.68rem] font-semibold tracking-[0.16em] text-muted uppercase">
                  {String(i + 1).padStart(2, "0")}
                </p>
              </Reveal>
              <Reveal className="md:col-span-9" delay={40}>
                <h2 className="font-display text-3xl text-forest font-semibold tracking-tight">
                  {item.title}
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                  {item.body}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-4 inline-block text-[0.75rem] font-semibold tracking-[0.16em] text-gold-deep uppercase"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Source →
                  </a>
                ) : null}
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-16">
          <p className="kicker">Affiliations</p>
          <ul className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {affiliations.map((org) => (
              <li
                key={org.name}
                className="grid gap-2 py-4 sm:grid-cols-12 sm:items-baseline"
              >
                <span className="font-medium text-forest sm:col-span-5">
                  {org.name}
                </span>
                <span className="text-sm text-muted sm:col-span-7">
                  {org.note}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 text-sm text-muted">
          Additional awards, fellowships, and certificates will be listed when
          documentation is provided. See also{" "}
          <Link href="/speaking" className="text-forest underline">
            Speaking
          </Link>{" "}
          and{" "}
          <Link href="/sources" className="text-forest underline">
            Sources
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
