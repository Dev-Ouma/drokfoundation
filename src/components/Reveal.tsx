"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export type RevealVariant = "up" | "fade" | "left" | "right" | "scale";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  /** Also treat as image reveal frame (ken-scale inside) */
  image?: boolean;
  as?: "div" | "section" | "li" | "article";
};

const variantClass: Record<RevealVariant, string> = {
  up: "reveal",
  fade: "reveal-fade",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  image = false,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }

    const revealIfVisible = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      if (rect.top < vh * 0.96 && rect.bottom > 0) {
        el.classList.add("is-in");
        return true;
      }
      return false;
    };

    if (revealIfVisible()) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: "48px 0px 48px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn(variantClass[variant], image && "img-reveal", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
