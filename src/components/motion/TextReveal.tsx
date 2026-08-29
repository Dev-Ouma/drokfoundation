"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
  /** Load animation (hero/intro) vs scroll reveal */
  mode?: "load" | "scroll";
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

/**
 * Executive line clip — words rise through a mask, one after another.
 * Minimal, no bounce — Craig / Mudavadi-adjacent restraint.
 */
export function TextReveal({
  text,
  className,
  mode = "scroll",
  delay = 0,
  as: Tag = "h2",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }

    if (mode === "load") {
      const id = requestAnimationFrame(() => el.classList.add("is-in"));
      return () => cancelAnimationFrame(id);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mode]);

  return (
    <Tag ref={ref as never} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="text-reveal inline-block">
          <span
            className="text-reveal__inner"
            style={{ transitionDelay: `${delay + i * 42}ms` }}
            aria-hidden
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
