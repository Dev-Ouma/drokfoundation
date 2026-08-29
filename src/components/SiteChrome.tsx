"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { PageEnter } from "@/components/motion/PageEnter";

/** Site shell — no decorative flag ribbon; gate page is chrome-free. */
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
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-6 focus:z-[80] focus:bg-forest focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <SiteHeader />
      <div id="content" className="flex flex-1 flex-col pt-16 sm:pt-[6.25rem] md:pt-[6.5rem]">
        <PageEnter>{children}</PageEnter>
      </div>
      <SiteFooter />
    </>
  );
}
