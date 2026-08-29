import Link from "next/link";
import { footerNav, person } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/10 bg-forest">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <nav
          className="mb-6 flex flex-wrap justify-center gap-6"
          aria-label="Footer"
        >
          {footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-cream/70 transition hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-center text-sm text-cream/50">
          © {new Date().getFullYear()} {person.displayName} — All rights reserved
        </p>
      </div>
    </footer>
  );
}
