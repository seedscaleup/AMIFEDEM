import type { Metadata } from "next";
import {
  CalendarDays,
  GraduationCap,
  Users2,
  Sprout,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Activités",
  description:
    "Les activités de l'AMIDEFEM à Mengong : célébration du 8 mars, journées de l'excellence scolaire, cadre d'entraide et soutien aux activités génératrices de revenus.",
};

const ACTIVITIES = [
  {
    icon: CalendarDays,
    tag: "Événement annuel · 8 mars",
    title: "Journée internationale des droits des femmes",
    description:
      "Chaque 8 mars, l'AMIDEFEM participe activement aux célébrations de la Journée internationale des droits des femmes à Mengong. L'association mobilise ses membres autour de manifestations, de sensibilisations et de moments de partage pour mettre en lumière la place et les droits des femmes dans la communauté.",
    points: [
      "Mobilisation et participation aux défilés et cérémonies locales",
      "Sensibilisation aux droits des femmes et des filles",
      "Mise en valeur des réussites féminines de Mengong",
    ],
  },
  {
    icon: GraduationCap,
    tag: "Événement annuel · Rentrée scolaire",
    title: "Journées de l'excellence scolaire",
    description:
      "L'AMIDEFEM organise des journées de l'excellence scolaire pour encourager l'éducation des jeunes de Mengong. Ces journées récompensent le mérite et motivent les élèves à persévérer dans leurs études.",
    points: [
      "Remise de prix et de fournitures aux meilleurs élèves",
      "Encouragement de la persévérance scolaire des jeunes filles",
      "Implication des familles et des enseignants de la localité",
    ],
  },
  {
    icon: Users2,
    tag: "Toute l'année",
    title: "Cadre d'entraide et de solidarité",
    description:
      "Au-delà des grands événements, l'AMIDEFEM anime un cadre permanent d'entraide, de solidarité et de partage d'expériences entre les femmes de Mengong, pour faire face ensemble aux défis du quotidien.",
    points: [
      "Rencontres régulières entre membres de l'association",
      "Soutien mutuel dans les moments difficiles",
      "Partage d'expériences et transmission entre générations",
    ],
  },
  {
    icon: Sprout,
    tag: "Toute l'année",
    title: "Activités génératrices de revenus",
    description:
      "L'association encourage et accompagne les femmes rurales de Mengong dans le développement d'activités génératrices de revenus, pour renforcer leur autonomie économique et celle de leur foyer.",
    points: [
      "Accompagnement des initiatives économiques des femmes",
      "Promotion de l'entrepreneuriat féminin en milieu rural",
      "Valorisation du travail agricole et artisanal local",
    ],
  },
];

export default function ActivitesPage() {
  return (
    <>
      <section className="bg-cream-50 py-16 sm:py-20">
        <Container>
          <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 ring-1 ring-primary-200">
            Nos actions
          </span>
          <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-extrabold text-balance text-secondary-900 sm:text-5xl">
            Nos activités
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/75">
            Des événements communautaires forts aux actions menées tout au
            long de l&rsquo;année, découvrez comment l&rsquo;AMIDEFEM agit
            concrètement auprès des femmes et des jeunes de Mengong.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="space-y-10">
          {ACTIVITIES.map(({ icon: Icon, tag, title, description, points }, i) => (
            <div
              key={title}
              className={`flex flex-col gap-8 rounded-3xl p-8 ring-1 sm:p-10 lg:flex-row lg:items-start ${
                i % 2 === 0
                  ? "bg-cream-50 ring-primary-100"
                  : "bg-secondary-50 ring-secondary-100"
              }`}
            >
              <span
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                  i % 2 === 0
                    ? "bg-primary-500 text-cream-50"
                    : "bg-secondary-500 text-cream-50"
                }`}
              >
                <Icon className="h-7 w-7" strokeWidth={2} />
              </span>
              <div className="flex-1">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                    i % 2 === 0
                      ? "bg-primary-100 text-primary-700"
                      : "bg-secondary-100 text-secondary-700"
                  }`}
                >
                  {tag}
                </span>
                <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-secondary-900">
                  {title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-foreground/75">
                  {description}
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-foreground/70"
                    >
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                          i % 2 === 0 ? "bg-primary-500" : "bg-secondary-500"
                        }`}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {title === "Journées de l'excellence scolaire" && (
                <Image
                  src="/badge-excellence-scolaire.png"
                  alt="Badge AMIDEFEM — Pour l'excellence scolaire 2026"
                  width={1329}
                  height={1329}
                  className="mx-auto h-36 w-36 shrink-0 sm:h-44 sm:w-44 lg:mx-0"
                />
              )}
            </div>
          ))}
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container className="flex flex-col items-center gap-6 rounded-3xl bg-secondary-900 px-6 py-14 text-center text-cream-50 sm:px-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-balance sm:text-4xl">
            Vous souhaitez participer à une prochaine activité ?
          </h2>
          <p className="max-w-xl text-cream-100/80">
            Contactez l&rsquo;AMIDEFEM pour connaître les dates de nos
            prochains événements ou pour proposer votre soutien.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-6 py-3 text-sm font-semibold text-secondary-900 transition-transform hover:scale-105"
          >
            Contactez-nous
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Container>
      </section>
    </>
  );
}
