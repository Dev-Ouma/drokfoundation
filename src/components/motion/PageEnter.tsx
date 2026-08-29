"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Soft fade-rise when the route changes — executive, not theatrical. */
export function PageEnter({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [key, setKey] = useState(pathname);

  useEffect(() => {
    setKey(pathname);
  }, [pathname]);

  return (
    <div key={key} className={cn("page-enter flex min-h-0 flex-1 flex-col")}>
      {children}
    </div>
  );
}
