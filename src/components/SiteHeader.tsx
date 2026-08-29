"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { navFlat, navPrimary, person, type NavItem } from "@/content/site";
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
    <header className="pointer-events-none fixed top-4 right-0 left-0 z-[60] px-3 md:px-6">
      <div className="pointer-events-auto mx-auto max-w-7xl">
        <div className="nav-settle flex items-center justify-between rounded-full border border-white/10 bg-forest/95 px-4 py-2.5 shadow-lg shadow-forest/30 backdrop-blur-md md:px-6 md:py-3">
          <Link href="/" className="shrink-0">
            <span className="font-display text-base tracking-tight text-cream italic md:text-lg">
              Dr. {person.givenName} {person.familyName}
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
                        "rounded-full px-2.5 py-1.5 text-[0.78rem] font-medium transition xl:px-3",
                        active || expanded
                          ? "bg-white/10 text-cream"
                          : "text-cream/75 hover:bg-white/5 hover:text-cream",
                      )}
                      aria-expanded={expanded}
                      aria-haspopup="menu"
                      aria-controls={`${menuId}-${item.label}`}
                      onClick={() =>
                        setOpenMenu((v) =>
                          v === item.label ? null : item.label,
                        )
                      }
                    >
                      {item.label}
                      <span className="ml-1 opacity-50" aria-hidden>
                        ▾
                      </span>
                    </button>
                    {expanded ? (
                      <div
                        id={`${menuId}-${item.label}`}
                        role="menu"
                        className="absolute top-full left-0 z-50 min-w-52 pt-2"
                      >
                        <ul className="rounded-xl border border-gold/20 bg-cream py-2 shadow-lg">
                          {item.children.map((child) => (
                            <li key={child.href} role="none">
                              <Link
                                href={child.href}
                                role="menuitem"
                                className={cn(
                                  "block px-4 py-2.5 text-sm transition hover:bg-gold/20",
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
                    "rounded-full px-2.5 py-1.5 text-[0.78rem] font-medium transition xl:px-3",
                    active
                      ? "bg-white/10 text-cream"
                      : "text-cream/75 hover:bg-white/5 hover:text-cream",
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
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-cream hover:bg-white/10 lg:hidden"
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
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {open ? (
          <>
            <button
              type="button"
              className="fixed inset-0 z-40 bg-forest/55 backdrop-blur-[2px] lg:hidden"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <nav
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className="relative z-50 mt-2 max-h-[75vh] overflow-y-auto rounded-3xl border border-white/10 bg-forest/98 px-6 py-6 shadow-xl backdrop-blur-md lg:hidden"
            >
              <ul className="flex flex-col gap-1">
                {navFlat.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-2 font-display text-2xl text-cream italic"
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
      </div>
    </header>
  );
}
