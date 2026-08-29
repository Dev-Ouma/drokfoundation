import { TextReveal } from "@/components/motion/TextReveal";
import { cn } from "@/lib/utils";

type Props = {
  kicker: string;
  title: string;
  lede?: string;
  /** Compact band for content-light pages (news, sources, contact) */
  size?: "default" | "compact";
};

export function PageIntro({
  kicker,
  title,
  lede,
  size = "default",
}: Props) {
  return (
    <header className="border-b border-gold/20 bg-forest text-cream">
      <div
        className={cn(
          "mx-auto max-w-6xl px-5 md:px-8",
          size === "compact"
            ? "pt-24 pb-10 md:pt-28 md:pb-12"
            : "pt-24 pb-12 md:pt-28 md:pb-16",
        )}
      >
        <p className="kicker motion-fade-up text-gold">{kicker}</p>
        <TextReveal
          as="h1"
          mode="load"
          delay={80}
          text={title}
          className={cn(
            "mt-3 max-w-3xl font-display leading-[1.15] italic",
            size === "compact"
              ? "text-3xl md:text-5xl"
              : "text-4xl md:text-5xl lg:text-6xl",
          )}
        />
        {lede ? (
          <p className="motion-fade-up motion-delay-3 mt-5 max-w-2xl text-base leading-relaxed text-gold-soft/90 md:text-lg">
            {lede}
          </p>
        ) : null}
        <div className="rule-draw-load mt-8 h-px w-24 bg-gradient-to-r from-gold to-transparent" />
      </div>
    </header>
  );
}
