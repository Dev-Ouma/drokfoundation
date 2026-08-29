import { PageIntro } from "@/components/PageIntro";
import { news } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description:
    "Public updates on Dr. Joel Okutoyi’s academic appointments, AI4KSL, and published research.",
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export default function NewsPage() {
  return (
    <main>
      <PageIntro
        size="compact"
        kicker="News & updates"
        title="What can already be cited"
        lede="Press mentions, statements, and event recaps will live here. For now, the list is limited to dated public records."
      />
      <section className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-14">
        <ul className="divide-y divide-gold/25 border-y border-gold/25">
          {news.map((item) => (
            <li key={item.slug} className="py-8">
              <p className="text-sm text-gold-deep">
                {formatDate(item.date)} · {item.source}
              </p>
              <a
                href={item.href}
                className="mt-2 block font-display text-3xl text-forest italic hover:text-gold-deep"
                rel="noopener noreferrer"
                target="_blank"
              >
                {item.title}
              </a>
              <p className="mt-3 leading-relaxed text-muted">{item.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
