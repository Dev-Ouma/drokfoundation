import Image from "next/image";
import { getMedia } from "@/lib/media";
import { person } from "@/content/site";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: "md" | "lg" | "xl";
  /** Light ring for dark backgrounds */
  onDark?: boolean;
};

const sizeClass = {
  md: "h-40 w-40",
  lg: "h-56 w-56",
  xl: "h-64 w-64 md:h-72 md:w-72",
} as const;

/**
 * Official headshot with executive soft ring + gentle scale;
 * dignified monogram until portrait.jpg lands.
 */
export function Portrait({ className, size = "lg", onDark = false }: Props) {
  const { portrait } = getMedia();
  const dim = sizeClass[size];

  if (portrait.ready) {
    return (
      <div
        className={cn(
          "portrait-frame relative",
          dim,
          className,
        )}
      >
        <div
          className={cn(
            "ring-breathe absolute -inset-1 rounded-full opacity-80",
            onDark
              ? "bg-gradient-to-br from-gold/50 via-gold/15 to-transparent"
              : "bg-gradient-to-br from-gold/60 via-gold/20 to-forest/10",
          )}
          aria-hidden
        />
        <div
          className={cn(
            "portrait-glow relative h-full w-full overflow-hidden rounded-full border-[3px] shadow-[0_20px_50px_rgba(19,36,28,0.25)]",
            onDark ? "border-gold/45" : "border-gold/55",
          )}
        >
          <Image
            src={portrait.src}
            alt={portrait.alt}
            fill
            className="img-reveal-media object-cover object-[45%_22%] transition duration-[1.2s] ease-out hover:scale-[1.03]"
            sizes={size === "xl" ? "288px" : size === "lg" ? "224px" : "160px"}
            priority={size !== "md"}
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-forest/25 via-transparent to-cream/10"
            aria-hidden
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center overflow-hidden rounded-full border-[3px] shadow-xl",
        onDark
          ? "border-gold/30 bg-forest-mid"
          : "border-gold/40 bg-forest text-cream",
        dim,
        className,
      )}
      aria-label={`${person.displayName} — portrait forthcoming`}
    >
      <span
        className={cn(
          "font-display italic",
          size === "xl" ? "text-7xl" : size === "lg" ? "text-6xl" : "text-4xl",
          onDark ? "text-gold" : "text-gold-soft",
        )}
      >
        {person.givenName[0]}
        {person.familyName[0]}
      </span>
    </div>
  );
}
