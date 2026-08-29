import { AffiliationsStrip } from "@/components/home/AffiliationsStrip";
import { ClosingQuote } from "@/components/home/ClosingQuote";
import { Hero } from "@/components/home/Hero";
import { HomeSections } from "@/components/home/HomeSections";
import { ImpactMetricsBand } from "@/components/home/ImpactMetricsBand";
import { ServiceTeasers } from "@/components/home/ServiceTeasers";
import { getMedia } from "@/lib/media";

/**
 * Institutional home: hero, record, biography, geography, public work, partners.
 */
export default function HomePage() {
  const media = getMedia();

  return (
    <main>
      <Hero
        portraitSrc={media.heroPortrait.ready ? media.heroPortrait.src : null}
      />
      <ImpactMetricsBand />
      <HomeSections />
      <ServiceTeasers />
      <AffiliationsStrip />
      <ClosingQuote />
    </main>
  );
}
