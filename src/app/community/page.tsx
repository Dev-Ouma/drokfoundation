import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { MotionImage } from "@/components/motion/MotionImage";
import { impact } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community impact",
  description:
    "Verified community and scholarly impact of Dr. Joel Okutoyi — AI4KSL, inclusive education in Kakamega, teacher formation, and Western Kenya service.",
};

export default function CommunityPage() {
  return (
    <main>
      <PageIntro
        kicker="On the public record"
        title="Impact without invention"
        lede="The Okutoyi Foundation is the vehicle. This page is the ledger — only what can already be shown. Named Foundation programmes will be added when they are confirmed."
      />
      <section className="border-b border-gold/20 bg-cream-deep/30 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted">
            Looking for the philanthropic vehicle and partner invitation?
          </p>
          <Link
            href="/foundation"
            className="text-[0.75rem] font-semibold tracking-[0.16em] text-forest uppercase"
          >
            Okutoyi Foundation →
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10">
          {impact.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 50}
              variant={i % 2 === 0 ? "left" : "right"}
              className="paper-card lift grid overflow-hidden md:grid-cols-12"
            >
              <MotionImage
                src={item.image}
                alt={item.imageAlt}
                fill
                frameClassName="relative min-h-56 md:col-span-5"
                imageClassName="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
              <div className="flex flex-col justify-center p-7 md:col-span-7 md:p-10">
                <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-gold-deep uppercase">
                  {item.verified ? "On the public record" : "Awaiting confirmation"}{" "}
                  · {item.stat}
                </p>
                <h2 className="mt-3 font-display text-3xl text-forest italic">
                  {item.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted">{item.body}</p>
                {item.href ? (
                  <a
                    className="mt-6 text-[0.75rem] font-semibold tracking-[0.16em] text-gold-deep uppercase"
                    href={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Source →
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
