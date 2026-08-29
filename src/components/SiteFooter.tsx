import Link from "next/link";
import { footerNav, person, site } from "@/content/site";

export function SiteFooter() {
  const mid = Math.ceil(footerNav.length / 2);
  const colA = footerNav.slice(0, mid);
  const colB = footerNav.slice(mid);

  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-forest text-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-semibold tracking-tight">
              {person.displayName}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
              {person.role} at {person.institution}. Research, teaching, and
              public service in inclusive education and the dignity of persons
              with disabilities.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-block text-sm text-gold-soft transition hover:text-cream"
            >
              {site.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-4 md:col-start-8">
            <nav aria-label="Footer primary">
              <p className="mb-4 text-[0.65rem] font-semibold tracking-[0.14em] text-cream/50 uppercase">
                Navigate
              </p>
              <ul className="space-y-2.5">
                {colA.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-cream/75 transition hover:text-cream"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Footer secondary">
              <p className="mb-4 text-[0.65rem] font-semibold tracking-[0.14em] text-cream/50 uppercase">
                Resources
              </p>
              <ul className="space-y-2.5">
                {colB.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-cream/75 transition hover:text-cream"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {person.displayName}. All rights
            reserved.
          </p>
          <p className="tracking-wide uppercase">
            Maseno University · Western Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
