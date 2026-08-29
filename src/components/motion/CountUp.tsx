"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  value: string;
  className?: string;
};

/** Parses values like "20+" / "16+" / "4" and counts up when scrolled into view. */
export function CountUp({ value, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : NaN;
  const suffix = match?.[2] ?? "";

  useEffect(() => {
    const el = ref.current;
    if (!el || Number.isNaN(target)) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      const start = performance.now();
      const duration = 1100 + Math.min(target, 40) * 12;

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(`${Math.round(target * eased)}${suffix}`);
        if (t < 1) frame = requestAnimationFrame(tick);
        else setDisplay(value);
      };
      frame = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, suffix, value]);

  return (
    <span ref={ref} className={cn("metric-value tabular-nums", className)}>
      {display}
    </span>
  );
}
