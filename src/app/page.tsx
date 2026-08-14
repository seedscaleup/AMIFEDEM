import Link from "next/link";
import Image from "next/image";
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
import ActivityIllustration from "@/components/ActivityIllustration";

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
      "Chaque année, l'AMIDEFEM participe activement aux célébrations du 8 mars à Mengong.",
    icon: CalendarDays,
    tone: "primary" as const,
  },
  {
    date: "Rentrée scolaire",
    title: "Journées de l'excellence scolaire",
    description:
      "Des journées dédiées à récompenser et encourager les meilleurs élèves de Mengong.",
    icon: GraduationCap,
    tone: "secondary" as const,
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream-50">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-100 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-secondary-100/70 blur-3xl"
        />
        <Image
          src="/logo-embleme.png"
          alt=""
          width={1260}
          height={1088}
          aria-hidden
          className="pointer-events-none absolute -right-16 top-1/2 hidden h-[26rem] w-auto -translate-y-1/2 opacity-[0.06] lg:block"
        />
        <Container className="relative py-20 sm:py-28">
          <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 ring-1 ring-primary-200">
            Mengong · Région du Sud · Cameroun
          </span>
          <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-extrabold leading-tight text-balance text-secondary-900 sm:text-5xl">
            Ensemble, pour l&rsquo;autonomisation des femmes et des filles de
            Mengong
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/75">
            Solidarité, éducation et entrepreneuriat des femmes rurales de
            Mengong, région du Sud du Cameroun.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-cream-50 shadow-sm transition-transform hover:scale-105 hover:bg-primary-600"
            >
              Découvrir l&rsquo;association
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-transparent px-6 py-3 text-sm font-semibold text-secondary-900 ring-1 ring-secondary-200 transition-colors hover:bg-secondary-50"
            >
              Nous rejoindre
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-3xl bg-primary-50 p-10 ring-1 ring-primary-100 sm:p-14">
            <Image
              src="/logo-embleme.png"
              alt="Emblème AMIDEFEM"
              width={1260}
              height={1088}
              className="mx-auto h-40 w-auto"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Qui sommes-nous" title="Une amicale née à Mengong" />
            <p className="mt-5 text-base leading-relaxed text-foreground/80">
              L&rsquo;AMIDEFEM — Amicale de Développement des Filles et Femmes
              de Mengong — est une association dynamique de la région du Sud
              au Cameroun. Née de la volonté des femmes de Mengong de
              s&rsquo;unir pour progresser ensemble, elle œuvre au quotidien
              pour l&rsquo;autonomisation et le développement local des
              femmes et des jeunes filles.
            </p>
            <Link
              href="/a-propos"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800"
            >
              En savoir plus sur l&rsquo;association
              <ArrowRight className="h-4 w-4" />
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
            {HIGHLIGHTS.map(({ date, title, description, icon, tone }) => (
              <div
                key={title}
                className="flex flex-col overflow-hidden rounded-2xl bg-cream-50 shadow-sm ring-1 ring-secondary-100"
              >
                <ActivityIllustration icon={icon} tone={tone} className="rounded-none" />
                <div className="p-6 sm:p-8">
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
          <div className="relative overflow-hidden rounded-3xl bg-secondary-50 p-8 ring-1 ring-secondary-100 sm:p-14">
            <Image
              src="/logo-embleme.png"
              alt=""
              width={1260}
              height={1088}
              aria-hidden
              className="pointer-events-none absolute -right-10 -bottom-14 h-64 w-auto opacity-[0.07]"
            />
            <Quote className="h-10 w-10 text-primary-400" />
            <p className="relative mt-4 max-w-2xl font-[family-name:var(--font-heading)] text-2xl font-semibold leading-snug text-balance text-secondary-900 sm:text-3xl">
              &ldquo;Créer un cadre d&rsquo;entraide, de solidarité et de
              partage d&rsquo;expériences entre les habitantes de
              Mengong.&rdquo;
            </p>
            <p className="relative mt-4 text-sm font-medium uppercase tracking-wide text-secondary-600">
              La raison d&rsquo;être de l&rsquo;AMIDEFEM
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container className="rounded-3xl bg-secondary-900 px-6 py-14 text-cream-50 sm:px-12">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-balance sm:text-4xl">
              Vous pouvez contribuer à notre action
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-cream-100/80">
              L&rsquo;AMIDEFEM avance grâce à celles et ceux qui s&rsquo;impliquent
              à ses côtés. Trois façons simples de nous rejoindre.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Link
              href="/contact?sujet=Adhésion"
              className="flex flex-col items-center gap-2 rounded-2xl bg-cream-50/10 px-6 py-6 text-center ring-1 ring-cream-50/15 transition-colors hover:bg-cream-50/15"
            >
              <span className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                Devenir membre
              </span>
              <span className="text-sm text-cream-100/75">
                Rejoindre l&rsquo;amicale et participer à ses activités
              </span>
            </Link>
            <Link
              href="/contact?sujet=Partenariat"
              className="flex flex-col items-center gap-2 rounded-2xl bg-cream-50/10 px-6 py-6 text-center ring-1 ring-cream-50/15 transition-colors hover:bg-cream-50/15"
            >
              <span className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                Devenir partenaire
              </span>
              <span className="text-sm text-cream-100/75">
                Proposer un partenariat ou un appui à nos actions
              </span>
            </Link>
            <Link
              href="/contact?sujet=Soutien"
              className="flex flex-col items-center gap-2 rounded-2xl bg-cream-50/10 px-6 py-6 text-center ring-1 ring-cream-50/15 transition-colors hover:bg-cream-50/15"
            >
              <span className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                Nous soutenir
              </span>
              <span className="text-sm text-cream-100/75">
                Nous écrire pour toute autre forme de soutien
              </span>
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-6 py-3 text-sm font-semibold text-secondary-900 transition-transform hover:scale-105"
            >
              Contactez-nous
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
