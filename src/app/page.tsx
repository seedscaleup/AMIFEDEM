import Link from "next/link";
import {
  Users,
  Sparkles,
  GraduationCap,
  HandCoins,
  ArrowRight,
  CalendarDays,
  Quote,
} from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const PILLARS = [
  {
    icon: Users,
    title: "Solidarité locale",
    description:
      "Un cadre d'entraide, de solidarité et de partage d'expériences entre les habitantes de Mengong.",
  },
  {
    icon: Sparkles,
    title: "Autonomisation",
    description:
      "La promotion du leadership des femmes et des jeunes filles au cœur de nos actions.",
  },
  {
    icon: GraduationCap,
    title: "Éducation",
    description:
      "Le soutien à l'excellence scolaire des jeunes de Mengong et de ses environs.",
  },
  {
    icon: HandCoins,
    title: "Entrepreneuriat",
    description:
      "L'encouragement des activités génératrices de revenus pour les femmes rurales.",
  },
];

const HIGHLIGHTS = [
  {
    date: "8 Mars",
    title: "Journée internationale des droits des femmes",
    description:
      "Chaque année, l'AMIDEFEM participe activement aux célébrations du 8 mars à Mengong : sensibilisation, mobilisation et mise en valeur des femmes de la communauté.",
  },
  {
    date: "Rentrée scolaire",
    title: "Journées de l'excellence scolaire",
    description:
      "Des journées dédiées à récompenser et encourager les meilleurs élèves de Mengong, pour soutenir l'éducation des jeunes filles et garçons de la localité.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-700">
        <div
          aria-hidden
          className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_35%),radial-gradient(circle_at_80%_0%,white,transparent_30%),radial-gradient(circle_at_50%_100%,white,transparent_40%)]"
        />
        <Container className="relative py-20 sm:py-28">
          <span className="inline-block rounded-full bg-cream-50/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cream-50 ring-1 ring-cream-50/30">
            Mengong · Région du Sud · Cameroun
          </span>
          <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-extrabold leading-tight text-balance text-cream-50 sm:text-5xl">
            Ensemble, pour l&rsquo;autonomisation des femmes et des filles de
            Mengong
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream-50/90">
            L&rsquo;AMIDEFEM — Amicale de Développement des Filles et Femmes
            de Mengong — est une association dynamique qui favorise la
            solidarité, l&rsquo;éducation et l&rsquo;entrepreneuriat des
            femmes rurales dans la région du Sud du Cameroun.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-6 py-3 text-sm font-semibold text-primary-700 shadow-lg shadow-primary-900/20 transition-transform hover:scale-105"
            >
              Découvrir l&rsquo;association
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-transparent px-6 py-3 text-sm font-semibold text-cream-50 ring-1 ring-cream-50/60 transition-colors hover:bg-cream-50/10"
            >
              Nous rejoindre
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Notre mission"
            title="Rôle et objectifs de l'AMIDEFEM"
            description="Quatre piliers guident chacune de nos actions au service des femmes et des jeunes filles de Mengong."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-2xl border border-primary-100 bg-cream-50 p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-500 group-hover:text-cream-50">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-secondary-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary-50 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Nos temps forts"
            title="Des activités qui rythment la vie de Mengong"
            description="De la mobilisation communautaire à l'encouragement scolaire, l'AMIDEFEM est présente sur le terrain toute l'année."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {HIGHLIGHTS.map(({ date, title, description }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl bg-cream-50 p-6 shadow-sm ring-1 ring-secondary-100 sm:p-8"
              >
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-700">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {date}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-bold text-secondary-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/activites"
              className="inline-flex items-center gap-2 rounded-full bg-secondary-500 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-secondary-600"
            >
              Voir toutes nos activités
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary-800 to-primary-600 p-8 text-cream-50 sm:p-14">
            <Quote className="h-10 w-10 text-cream-50/50" />
            <p className="mt-4 max-w-2xl font-[family-name:var(--font-heading)] text-2xl font-semibold leading-snug text-balance sm:text-3xl">
              &ldquo;Créer un cadre d&rsquo;entraide, de solidarité et de
              partage d&rsquo;expériences entre les habitantes de
              Mengong.&rdquo;
            </p>
            <p className="mt-4 text-sm font-medium uppercase tracking-wide text-cream-50/80">
              La raison d&rsquo;être de l&rsquo;AMIDEFEM
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container className="flex flex-col items-center gap-6 rounded-3xl bg-secondary-900 px-6 py-14 text-center text-cream-50 sm:px-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-balance sm:text-4xl">
            Envie de soutenir les femmes de Mengong ?
          </h2>
          <p className="max-w-xl text-cream-100/80">
            Que vous souhaitiez rejoindre l&rsquo;association, proposer un
            partenariat ou simplement en savoir plus, l&rsquo;équipe de
            l&rsquo;AMIDEFEM est heureuse d&rsquo;échanger avec vous.
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
