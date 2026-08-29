import { Reveal } from "@/components/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { affiliations } from "@/content/site";

export function AffiliationsStrip() {
  return (
    <section className="border-y border-white/5 bg-forest py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="fade">
          <p className="mb-8 text-center text-sm font-medium tracking-[0.16em] text-cream/70 uppercase sm:tracking-[0.2em]">
            Affiliated with leading organizations
          </p>
        </Reveal>
        <Stagger
          as="ul"
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12"
        >
          {affiliations.slice(0, 5).map((org) => (
            <li
              key={org.name}
              className="text-base font-medium text-cream/75 transition duration-300 hover:scale-105 hover:text-gold md:text-lg"
            >
              {org.name}
            </li>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
