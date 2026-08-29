"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { navFlat, navPrimary, person, site, type NavItem } from "@/content/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function itemActive(pathname: string, item: NavItem) {
  if ("children" in item) {
    return item.children.some((c) => isActive(pathname, c.href));
  }
  return isActive(pathname, item.href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    closeBtnRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[60]">
      <div className="hidden border-b border-white/10 bg-forest text-cream sm:block">
        <div className="mx-auto flex h-8 max-w-6xl items-center justify-between gap-4 px-5 text-[0.62rem] font-semibold tracking-[0.14em] uppercase md:px-8">
          <p className="truncate text-cream/75">
            Maseno University · Kenya · Inclusive education
          </p>
          <a
            href={`mailto:${site.email}`}
            className="shrink-0 text-gold-soft transition hover:text-cream"
          >
            {site.email}
          </a>
        </div>
      </div>

      <div className="border-b border-[var(--line)] bg-cream/97 backdrop-blur-md">
        <div className="mx-auto flex h-16 items-center justify-between gap-6 px-5 md:h-[4.25rem] md:px-8 max-w-6xl">
          <Link href="/" className="min-w-0 shrink">
            <span className="block font-display text-[1.05rem] leading-tight font-semibold tracking-tight text-forest md:text-lg">
              {person.displayName}
            </span>
            <span className="mt-0.5 hidden text-[0.62rem] tracking-[0.14em] text-muted uppercase sm:block">
              {person.institution}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Primary"
          >
            {navPrimary.map((item) => {
              if ("children" in item) {
                const active = itemActive(pathname, item);
                const expanded = openMenu === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(item.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button
                      type="button"
                      className={cn(
                        "px-3 py-2 text-[0.78rem] font-medium tracking-wide transition",
                        active || expanded
                          ? "text-forest"
                          : "text-muted hover:text-forest",
                      )}
                      aria-expanded={expanded}
                      aria-haspopup="menu"
                      aria-controls={`${menuId}-${item.label}`}
                      onClick={() =>
                        setOpenMenu((v) => (v === item.label ? null : item.label))
                      }
                    >
                      {item.label}
                      <span className="ml-1 text-[0.6rem] opacity-45" aria-hidden>
                        ▾
                      </span>
                    </button>
                    {expanded ? (
                      <div
                        id={`${menuId}-${item.label}`}
                        role="menu"
                        className="absolute top-full left-0 z-50 min-w-56 pt-2"
                      >
                        <ul className="border border-[var(--line)] bg-white py-1.5 shadow-sm">
                          {item.children.map((child) => (
                            <li key={child.href} role="none">
                              <Link
                                href={child.href}
                                role="menuitem"
                                className={cn(
                                  "block px-4 py-2.5 text-sm transition hover:bg-cream",
                                  isActive(pathname, child.href)
                                    ? "font-semibold text-forest"
                                    : "text-muted",
                                )}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                );
              }

              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-[0.78rem] font-medium tracking-wide transition",
                    active
                      ? "text-forest underline decoration-[var(--gold)] decoration-1 underline-offset-8"
                      : "text-muted hover:text-forest",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            ref={closeBtnRef}
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center text-forest hover:bg-cream-deep lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-forest/40 lg:hidden"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <nav
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="absolute inset-x-0 top-full z-50 max-h-[75vh] overflow-y-auto border-b border-[var(--line)] bg-cream px-5 py-6 lg:hidden"
          >
            <ul className="flex flex-col">
              {navFlat.map((item) => (
                <li key={item.href} className="border-b border-[var(--line)]">
                  <Link
                    href={item.href}
                    className="block py-3.5 font-display text-xl text-forest"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      ) : null}
    </header>
  );
}
