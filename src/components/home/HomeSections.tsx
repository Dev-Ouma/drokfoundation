import Link from "next/link";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/Reveal";
import { MotionImage } from "@/components/motion/MotionImage";
import { TextReveal } from "@/components/motion/TextReveal";
import {
  RecognitionCarousel,
  type CarouselSlide,
} from "@/components/home/RecognitionCarousel";
import { gallery, homeBio } from "@/content/site";
import { getMedia } from "@/lib/media";

function buildSlides(): CarouselSlide[] {
  const { official, portrait } = getMedia();
  const placeStudies = gallery.slice(0, 4).map((g) => ({
    src: g.src,
    alt: g.alt,
    caption: g.caption,
    credit: g.credit,
  }));

  if (official.length > 0) {
    const shots = official.map((shot, i) => ({
      src: shot.src,
      alt: shot.alt,
      caption: i === 0 ? "Dr. Joel Okutoyi" : "In service",
      credit: "Official photograph",
    }));
    return shots.length >= 2 ? shots : [...shots, ...placeStudies];
  }

  if (portrait.ready) {
    return [
      {
        src: portrait.src,
        alt: portrait.alt,
        caption: "Dr. Joel Okutoyi",
        credit: "Official photograph",
      },
      ...placeStudies,
    ];
  }

  return gallery.slice(0, 5).map((g) => ({
    src: g.src,
    alt: g.alt,
    caption: g.caption,
    credit: g.credit,
  }));
}

export function HomeSections() {
  const slides = buildSlides();

  return (
    <>
      <section id="about-snapshot" className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-8">
          <Reveal className="md:col-span-4">
            <Portrait size="xl" className="mx-auto md:mx-0" />
          </Reveal>
          <Reveal className="md:col-span-8" delay={60}>
            <p className="kicker">Biography</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest md:text-4xl">
              A scholar formed in Kenyan classrooms
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {homeBio}
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex border border-forest bg-forest px-6 py-3 text-[0.72rem] font-semibold tracking-[0.12em] text-cream uppercase transition hover:bg-forest-mid"
            >
              Full biography
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="kicker">Impact &amp; geography</p>
            <TextReveal
              as="h2"
              text="Research with a public vocation"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest md:text-4xl"
            />
          </div>

          <div className="grid items-stretch gap-8 md:grid-cols-2 lg:gap-10">
            <Reveal variant="left">
              <RecognitionCarousel slides={slides} />
            </Reveal>

            <Reveal
              variant="right"
              delay={60}
              className="relative min-h-[360px] md:min-h-full"
            >
              <MotionImage
                src="/images/western-kenya-hills.jpg"
                alt="Western Kenya — the geography of his research and public vocation."
                fill
                frameClassName="absolute inset-0 border border-[var(--line)]"
                imageClassName="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-forest/92 p-6 md:p-8">
                <p className="text-[0.65rem] font-semibold tracking-[0.14em] text-gold-soft uppercase">
                  Geography of research
                </p>
                <p className="mt-2 font-display text-2xl text-cream md:text-3xl">
                  Kakamega · Kisumu · Dadaab · Butere
                </p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/75">
                  Classrooms, funded projects, and the Western Kenya communities
                  to which the scholarship is accountable.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
