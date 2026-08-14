import type { Metadata } from "next";
import Image from "next/image";
import { Users, Sparkles, GraduationCap, HandCoins, MapPin } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'AMIDEFEM, une association dynamique de la région du Sud au Cameroun qui favorise l'autonomisation et le développement local des femmes de Mengong.",
};

const OBJECTIVES = [
  {
    icon: Users,
    title: "Solidarité locale",
    description:
      "Créer un cadre d'entraide, de solidarité et de partage d'expériences entre les habitantes de Mengong, pour qu'aucune femme ne se sente seule face aux défis du quotidien.",
  },
  {
    icon: Sparkles,
    title: "Autonomisation",
    description:
      "Promouvoir le leadership des femmes et des jeunes filles en leur donnant les outils, la confiance et les opportunités nécessaires pour s'affirmer dans leur communauté.",
  },
  {
    icon: GraduationCap,
    title: "Éducation",
    description:
      "Soutenir l'excellence scolaire des jeunes de Mengong, car l'instruction est un levier essentiel pour l'avenir des filles comme des garçons de la localité.",
  },
  {
    icon: HandCoins,
    title: "Entrepreneuriat",
    description:
      "Encourager les activités génératrices de revenus des femmes rurales afin de renforcer leur indépendance économique et le développement du village.",
  },
];

const VALUES = [
  "Solidarité et entraide entre les femmes de Mengong",
  "Engagement communautaire et participation active à la vie du village",
  "Excellence et encouragement du mérite scolaire",
  "Autonomie économique et esprit d'entreprise",
  "Transmission et partage d'expérience entre générations de femmes",
];

export default function AProposPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream-50 py-16 sm:py-20">
        <Image
          src="/logo-vertical.png"
          alt=""
          width={1400}
          height={1144}
          aria-hidden
          className="pointer-events-none absolute -right-12 top-1/2 hidden h-[22rem] w-auto -translate-y-1/2 opacity-[0.06] lg:block"
        />
        <Container className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 ring-1 ring-primary-200">
            <MapPin className="h-3.5 w-3.5" />
            Mengong, Région du Sud, Cameroun
          </span>
          <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-extrabold text-balance text-secondary-900 sm:text-5xl">
            Qui sommes-nous ?
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/75">
            L&rsquo;AMIDEFEM — Amicale de Développement des Filles et Femmes
            de Mengong — est une association dynamique située dans la région
            du Sud au Cameroun. Née de la volonté des femmes de Mengong de
            s&rsquo;unir pour progresser ensemble, elle œuvre au quotidien
            pour l&rsquo;autonomisation et le développement local des femmes
            et des jeunes filles.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Notre histoire"
              title="Une amicale née de la solidarité villageoise"
            />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-foreground/80">
              <p>
                À Mengong, comme dans de nombreuses localités de la région du
                Sud du Cameroun, les femmes jouent un rôle central dans la vie
                économique et sociale du village. C&rsquo;est de ce constat
                qu&rsquo;est née l&rsquo;AMIDEFEM : rassembler les filles et
                femmes de Mengong autour d&rsquo;un projet commun de
                développement, d&rsquo;entraide et de dignité.
              </p>
              <p>
                Depuis sa création, l&rsquo;association s&rsquo;est imposée
                comme un acteur dynamique de la vie communautaire,
                accompagnant les femmes rurales dans leurs initiatives
                économiques et les jeunes générations dans leur réussite
                scolaire.
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-primary-50 p-8 ring-1 ring-primary-100 sm:p-10">
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary-700">
              Nos valeurs
            </h3>
            <ul className="mt-5 space-y-3">
              {VALUES.map((value) => (
                <li key={value} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-secondary-50 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Nos objectifs"
            title="Rôle et objectifs de l'association"
            description="Quatre grands axes structurent l'engagement de l'AMIDEFEM auprès des femmes et des filles de Mengong."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {OBJECTIVES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl bg-cream-50 p-6 shadow-sm ring-1 ring-secondary-100"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary-100 text-secondary-700">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-secondary-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
