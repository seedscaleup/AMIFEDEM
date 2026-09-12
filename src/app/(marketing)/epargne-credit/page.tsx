import type { Metadata } from "next";
import Link from "next/link";
import { PiggyBank, HandCoins, TrendingUp, ArrowRight, Users } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Épargne & Crédit",
  description:
    "Le programme épargne & crédit de l'AMIDEFEM : les membres épargnent, l'association complète leur épargne pour soutenir leurs projets à Mengong.",
};

const STEPS = [
  {
    icon: PiggyBank,
    title: "Vous épargnez",
    description:
      "En tant que membre de l'AMIDEFEM, vous constituez une épargne régulière au sein de l'association.",
  },
  {
    icon: HandCoins,
    title: "L'association complète votre épargne",
    description:
      "L'AMIDEFEM y ajoute un appui financier pouvant aller jusqu'au double du montant épargné.",
  },
  {
    icon: TrendingUp,
    title: "Vous développez votre projet",
    description:
      "Ce capital renforcé vous aide à financer ou faire grandir votre activité génératrice de revenus.",
  },
];

export default function EpargneCreditPage() {
  return (
    <>
      <section className="bg-cream-50 py-16 sm:py-20">
        <Container>
          <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 ring-1 ring-primary-200">
            Solidarité financière
          </span>
          <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-extrabold text-balance text-secondary-900 sm:text-5xl">
            Programme épargne &amp; crédit
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/75">
            En plus de ses actions communautaires, l&rsquo;AMIDEFEM
            accompagne ses membres dans la constitution d&rsquo;une épargne,
            renforcée par l&rsquo;association elle-même, pour soutenir leurs
            projets et leurs activités génératrices de revenus.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Le principe"
            title="Vous épargnez, l'AMIDEFEM double votre épargne"
            description="Un mécanisme simple pour transformer l'épargne des membres en véritable capital de départ."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {STEPS.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="relative rounded-2xl bg-cream-50 p-6 shadow-sm ring-1 ring-primary-100"
              >
                <span className="absolute -top-3 -left-3 flex h-7 w-7 items-center justify-center rounded-full bg-secondary-900 text-xs font-bold text-cream-50">
                  {i + 1}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
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
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-500 text-cream-50">
              <Users className="h-6 w-6" strokeWidth={2} />
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-bold text-secondary-900">
              Réservé aux membres de l&rsquo;AMIDEFEM
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/75">
              Ce programme s&rsquo;adresse aux femmes déjà adhérentes de
              l&rsquo;association. Si vous n&rsquo;êtes pas encore membre,
              vous pouvez nous rejoindre pour en bénéficier.
            </p>
            <Link
              href="/contact?sujet=Adhésion"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary-700 hover:text-secondary-800"
            >
              Devenir membre de l&rsquo;AMIDEFEM
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl bg-cream-50 p-8 ring-1 ring-secondary-100 sm:p-10">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-secondary-900">
              Envie d&rsquo;en savoir plus ?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              Montants, modalités et conditions vous sont présentés
              directement par l&rsquo;équipe de l&rsquo;AMIDEFEM.
              Contactez-nous pour en discuter.
            </p>
            <Link
              href="/contact?sujet=Épargne%20%26%20Crédit"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-primary-600"
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
