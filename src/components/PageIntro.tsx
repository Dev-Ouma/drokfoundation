import { TextReveal } from "@/components/motion/TextReveal";
import { cn } from "@/lib/utils";

type Props = {
  kicker: string;
  title: string;
  lede?: string;
  size?: "default" | "compact";
};

export function PageIntro({
  kicker,
  title,
  lede,
  size = "default",
}: Props) {
  return (
    <header className="border-b border-[var(--line)] bg-cream">
      <div
        className={cn(
          "mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-12 md:px-8",
          size === "compact"
            ? "pt-12 pb-10 md:pt-14 md:pb-12"
            : "pt-14 pb-12 md:pt-16 md:pb-16",
        )}
      >
        <div className="md:col-span-4">
          <p className="kicker motion-fade-up">{kicker}</p>
          <div className="rule-draw-load mt-6 h-px w-12 bg-forest" />
        </div>
        <div className="md:col-span-8">
          <TextReveal
            as="h1"
            mode="load"
            delay={60}
            text={title}
            className={cn(
              "max-w-3xl font-display font-semibold tracking-tight text-forest",
              size === "compact"
                ? "text-3xl md:text-4xl"
                : "text-4xl md:text-[2.75rem] md:leading-tight",
            )}
          />
          {lede ? (
            <p className="motion-fade-up motion-delay-3 mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {lede}
            </p>
          ) : null}
        </div>
      </div>
    </header>
  );
}
