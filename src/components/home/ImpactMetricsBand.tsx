import { Stagger } from "@/components/motion/Stagger";
import { impactMetrics } from "@/content/site";

export function ImpactMetricsBand() {
  return (
    <section className="border-y border-forest/10 bg-cream py-14 md:py-16">
      <Stagger className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
        {impactMetrics.map((item) => (
          <div key={item.label} className="text-center">
            <p className="font-display text-4xl text-forest italic transition duration-300 hover:text-gold lg:text-5xl">
              {item.value}
            </p>
            <p className="mt-2 text-sm font-medium text-muted md:text-base">
              {item.label}
            </p>
          </div>
        ))}
      </Stagger>
    </section>
  );
}
