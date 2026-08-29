"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = Omit<ImageProps, "className"> & {
  frameClassName?: string;
  imageClassName?: string;
  /** Soft zoom on hover */
  zoom?: boolean;
};

/** Clipped image that eases from slight zoom to rest on scroll. */
export function MotionImage({
  frameClassName,
  imageClassName,
  zoom = true,
  alt,
  ...imageProps
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "img-reveal relative overflow-hidden",
        zoom && "img-zoom",
        frameClassName,
      )}
    >
      <Image
        alt={alt}
        {...imageProps}
        className={cn("img-reveal-media", imageClassName)}
      />
    </div>
  );
}
