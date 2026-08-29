import { Stagger } from "@/components/motion/Stagger";
import { CountUp } from "@/components/motion/CountUp";
import { impactMetrics } from "@/content/site";

export function ImpactMetricsBand() {
  return (
    <section className="border-b border-[var(--line)] bg-white">
      <Stagger className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-[var(--line)] sm:grid-cols-3 lg:grid-cols-5">
        {impactMetrics.map((item) => (
          <div
            key={item.label}
            className="bg-white px-5 py-10 md:px-6 md:py-12"
          >
            <p className="font-display text-3xl font-semibold tracking-tight text-forest md:text-4xl">
              <CountUp value={item.value} />
            </p>
            <p className="mt-2 text-[0.7rem] font-medium tracking-[0.12em] text-muted uppercase">
              {item.label}
            </p>
          </div>
        ))}
      </Stagger>
    </section>
  );
}
