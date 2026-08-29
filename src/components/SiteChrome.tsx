"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { PageEnter } from "@/components/motion/PageEnter";
/** Hides site chrome on the terminal gate screen. */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isGate = pathname === "/gate";

  if (isGate) {
    return <>{children}</>;
  }

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-4 focus:z-[80] focus:bg-forest focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <div
        className="flag-ribbon pointer-events-none fixed inset-y-0 left-0 z-40 w-[3px] md:w-1"
        aria-hidden
      />
      <SiteHeader />
      <div id="content" className="flex flex-1 flex-col">
        <PageEnter>{children}</PageEnter>
      </div>
      <SiteFooter />
    </>
  );
}
