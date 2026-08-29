import { Reveal } from "@/components/Reveal";
import { affiliations } from "@/content/site";

export function AffiliationsStrip() {
  const shown = affiliations.slice(0, 6);

  return (
    <section className="border-y border-[var(--line)] bg-white py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal variant="fade">
          <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-muted uppercase">
            Institutions &amp; partners
          </p>
        </Reveal>
        <ul className="mt-8 grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((org) => (
            <li
              key={org.name}
              className="bg-white px-5 py-5 text-sm font-medium tracking-wide text-forest md:px-6"
            >
              {org.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
