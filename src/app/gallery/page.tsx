import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { gallery } from "@/content/site";
import { getMedia } from "@/lib/media";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Official and field photography for Dr. Joel Okutoyi’s public site — workshop moments, campus, classroom, community, and Western Kenya.",
};

export default function GalleryPage() {
  const media = getMedia();
  const official = media.official.length
    ? media.official
    : media.portrait.ready
      ? [{ src: media.portrait.src, alt: media.portrait.alt }]
      : [];

  return (
    <main>
      <PageIntro
        size="compact"
        kicker="Gallery"
        title={
          official.length
            ? "Official moments and place studies"
            : "Until the official album arrives"
        }
        lede={
          official.length
            ? "Official photographs sit first. Atmospheric studies below are place-setting frames — not photographs of named events — until more field photography is added."
            : "These frames are atmospheric studies, not photographs of Dr. Okutoyi or of named events. Field pictures, portraits, and community-day photography can be dropped into public/images and captioned here."
        }
      />

      {official.length > 0 ? (
        <section className="border-b border-gold/20 bg-cream">
          <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
            <Reveal>
              <p className="mb-6 text-[0.7rem] font-semibold tracking-[0.2em] text-muted uppercase">
                Official photography
              </p>
            </Reveal>
            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {official.map((shot) => (
                <figure key={shot.src} className="overflow-hidden rounded-2xl">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      className="object-cover object-[45%_18%]"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      priority
                    />
                  </div>
                  <figcaption className="mt-3">
                    <p className="font-display text-lg text-forest italic">
                      Dr. Joel Okutoyi
                    </p>
                    <p className="text-xs text-muted">Official photograph</p>
                  </figcaption>
                </figure>
              ))}
            </Stagger>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <Reveal>
          <p className="mb-6 text-[0.7rem] font-semibold tracking-[0.2em] text-muted uppercase">
            Place studies
          </p>
        </Reveal>
        <Stagger className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((item) => (
            <figure key={item.src} className="mb-4 break-inside-avoid">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <figcaption className="mt-3">
                <p className="font-display text-lg text-forest italic">
                  {item.caption}
                </p>
                <p className="text-xs text-muted">{item.credit}</p>
              </figcaption>
            </figure>
          ))}
        </Stagger>
      </section>
    </main>
  );
}
