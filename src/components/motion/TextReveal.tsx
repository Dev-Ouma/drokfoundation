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
 * Executive line clip — words rise through a mask, inline (not stacked blocks).
 */
export function TextReveal({
  text,
  className,
  mode = "scroll",
  delay = 0,
  as: Tag = "h2",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(/\s+/).filter(Boolean);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }

    if (mode === "load") {
      el.classList.add("is-in");
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -4% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mode]);

  return (
    <Tag ref={ref as never} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={cn(
            "text-reveal",
            mode === "load" && "text-reveal--load",
          )}
        >
          <span
            className="text-reveal__inner"
            style={
              mode === "load"
                ? { animationDelay: `${delay + i * 38}ms` }
                : { transitionDelay: `${delay + i * 38}ms` }
            }
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
