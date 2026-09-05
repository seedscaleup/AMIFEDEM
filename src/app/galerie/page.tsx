import type { Metadata } from "next";
import {
  CalendarDays,
  GraduationCap,
  Users2,
  Sprout,
  HeartHandshake,
  Sparkles,
  Camera,
} from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container";
import ActivityIllustration from "@/components/ActivityIllustration";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Galerie de l'AMIDEFEM — photos et images de nos activités à Mengong, région du Sud, Cameroun.",
};

const TILES = [
  { icon: CalendarDays, tone: "primary" as const, caption: "8 mars — Droits des femmes" },
  {
    icon: GraduationCap,
    tone: "secondary" as const,
    caption: "Remise des prix aux lauréats",
    image: "/galerie-laureats.jpg",
  },
  {
    icon: Users2,
    tone: "gold" as const,
    caption: "Entraide et solidarité",
    image: "/activite-entraide.jpg",
  },
  {
    icon: Sprout,
    tone: "primary" as const,
    caption: "Activités génératrices de revenus",
    image: "/activite-agr.jpg",
  },
  {
    icon: HeartHandshake,
    tone: "secondary" as const,
    caption: "Les invités d'honneur",
    image: "/galerie-bureau.jpg",
  },
  {
    icon: Sparkles,
    tone: "gold" as const,
    caption: "Autonomisation des femmes",
    image: "/galerie-celebration.jpg",
  },
  {
    icon: HeartHandshake,
    tone: "primary" as const,
    caption: "Remise des prix aux lauréats et aux membres",
    image: "/galerie-discours.jpg",
  },
  {
    icon: Sparkles,
    tone: "secondary" as const,
    caption: "Mobilisation communautaire",
    image: "/galerie-foule.jpg",
  },
];

export default function GaleriePage() {
  return (
    <>
      <section className="bg-cream-50 py-16 sm:py-20">
        <Container>
          <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 ring-1 ring-primary-200">
            En images
          </span>
          <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-extrabold text-balance text-secondary-900 sm:text-5xl">
            Galerie
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/75">
            Un aperçu des activités et de la vie de l&rsquo;AMIDEFEM à
            Mengong.
          </p>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="mb-8 flex items-start gap-3 rounded-2xl bg-gold-50 p-4 ring-1 ring-gold-200 sm:p-5">
            <Camera className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
            <p className="text-sm leading-relaxed text-foreground/75">
              Photos de la journée de la rentrée scolaire 2026 à Mengong, et
              de nos autres domaines d&rsquo;action. Cette galerie
              s&rsquo;enrichira au fil de nos prochains événements.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TILES.map(({ icon, tone, caption, image }, i) => (
              <figure
                key={caption + i}
                className="overflow-hidden rounded-2xl ring-1 ring-secondary-100"
              >
                {image ? (
                  <Image
                    src={image}
                    alt={caption}
                    width={1800}
                    height={1200}
                    className="h-48 w-full object-cover"
                  />
                ) : (
                  <ActivityIllustration icon={icon} tone={tone} className="h-48 rounded-none" />
                )}
                <figcaption className="bg-cream-50 px-4 py-3 text-sm font-medium text-secondary-900">
                  {caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
