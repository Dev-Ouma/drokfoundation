import Image from "next/image";
import { getMedia } from "@/lib/media";
import { person } from "@/content/site";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: "md" | "lg" | "xl";
  onDark?: boolean;
};

const sizeClass = {
  md: "h-36 w-36",
  lg: "h-48 w-48",
  xl: "aspect-[3/4] w-full max-w-[20rem]",
} as const;

/** Institutional portrait — editorial crop, thin rule frame. */
export function Portrait({ className, size = "lg", onDark = false }: Props) {
  const { portrait } = getMedia();
  const dim = sizeClass[size];

  if (portrait.ready) {
    return (
      <div className={cn("relative", dim, className)}>
        <div
          className={cn(
            "relative h-full w-full overflow-hidden border",
            onDark ? "border-cream/25" : "border-[var(--line)]",
          )}
        >
          <Image
            src={portrait.src}
            alt={portrait.alt}
            fill
            className="object-cover object-[45%_22%]"
            sizes={size === "xl" ? "320px" : size === "lg" ? "192px" : "144px"}
            priority={size !== "md"}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center border",
        onDark
          ? "border-cream/25 bg-forest-mid text-cream"
          : "border-[var(--line)] bg-cream-deep text-forest",
        dim,
        className,
      )}
      aria-label={`${person.displayName} — portrait forthcoming`}
    >
      <span
        className={cn(
          "font-display font-semibold",
          size === "xl" ? "text-5xl" : size === "lg" ? "text-4xl" : "text-3xl",
        )}
      >
        {person.givenName[0]}
        {person.familyName[0]}
      </span>
    </div>
  );
}
