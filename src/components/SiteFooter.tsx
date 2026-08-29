import Link from "next/link";
import { footerNav, person, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/10 bg-forest">
      <div className="mx-auto max-w-5xl px-6 py-10 md:py-12">
        <div className="mb-8 grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="font-display text-xl text-cream italic">
              Dr. {person.givenName} {person.familyName}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream/70">
              {person.role}, {person.institution} — preparing for public
              service in Butere Constituency, 2032.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm text-gold transition hover:text-gold-soft"
            >
              {site.email}
            </a>
          </div>
          <nav aria-label="Footer">
            <p className="mb-3 text-[0.65rem] font-semibold tracking-[0.18em] text-cream/55 uppercase">
              Explore
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/75 transition hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="border-t border-white/10 pt-6 text-center text-sm text-cream/65">
          © {new Date().getFullYear()} {person.displayName} — All rights reserved
        </p>
      </div>
    </footer>
  );
}
