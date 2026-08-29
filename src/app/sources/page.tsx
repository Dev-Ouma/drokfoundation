import { PageIntro } from "@/components/PageIntro";
import { sources } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sources",
  description:
    "Public sources used to write Dr. Joel Okutoyi’s biography, publications, and community-impact claims.",
  robots: { index: false, follow: true },
};

export default function SourcesPage() {
  return (
    <main>
      <PageIntro
        size="compact"
        kicker="On the record"
        title="What this site is allowed to say"
        lede="Every biographical and impact claim is tied to a public document. What is not listed here is either not yet confirmed or not ours to invent."
      />
      <section className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-14">
        <ol className="space-y-8">
          {sources.map((item, i) => (
            <li key={item.href} className="border-t border-[var(--line)] pt-6">
              <p className="year-mark">
                {String(i + 1).padStart(2, "0")}
              </p>
              <a
                href={item.href}
                className="mt-1 block font-display text-2xl text-forest font-semibold tracking-tight hover:text-gold-deep"
                rel="noopener noreferrer"
                target="_blank"
              >
                {item.label}
              </a>
              <p className="mt-2 leading-relaxed text-muted">{item.what}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
