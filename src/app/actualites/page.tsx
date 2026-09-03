import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Newspaper, ArrowRight } from "lucide-react";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Actualités et nouvelles de l'AMIDEFEM — suivez les dernières informations de l'association à Mengong, région du Sud, Cameroun.",
};

type NewsItem = {
  title: string;
  date: string;
  location?: string;
  excerpt: string;
  image?: string;
};

const NEWS: NewsItem[] = [
  {
    title: "Cérémonie de l'excellence scolaire 2026 à Mengong",
    date: "Samedi 29 août 2026",
    location: "Esplanade de l'hôtel de ville de Mengong",
    image: "/actualite-rentree-2026.jpg",
    excerpt:
      "L'AMIDEFEM a organisé sa cérémonie de l'excellence scolaire sur l'esplanade de l'hôtel de ville de Mengong. Réunissant membres, familles et autorités locales, cet événement a permis de distribuer des fournitures scolaires aux enfants des membres de l'association, et de récompenser les lauréats du baccalauréat 2026 de la localité — une nouvelle occasion pour l'AMIDEFEM de réaffirmer son engagement en faveur de l'éducation et de la réussite scolaire à Mengong.",
  },
];

export default function ActualitesPage() {
  return (
    <>
      <section className="bg-cream-50 py-16 sm:py-20">
        <Container>
          <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 ring-1 ring-primary-200">
            Actualités
          </span>
          <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-extrabold text-balance text-secondary-900 sm:text-5xl">
            Actualités de l&rsquo;AMIDEFEM
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/75">
            Les dernières nouvelles, événements et annonces de
            l&rsquo;association.
          </p>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          {NEWS.length === 0 ? (
            <div className="flex flex-col items-center gap-4 rounded-3xl bg-secondary-50 px-6 py-16 text-center ring-1 ring-secondary-100">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary-500 text-cream-50">
                <Newspaper className="h-7 w-7" strokeWidth={2} />
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-secondary-900">
                Aucune actualité publiée pour le moment
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-foreground/70">
                Revenez bientôt pour suivre les nouvelles de
                l&rsquo;AMIDEFEM, ou contactez-nous pour en savoir plus sur
                nos prochaines activités.
              </p>
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-primary-600"
              >
                Contactez-nous
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              <article className="overflow-hidden rounded-3xl bg-cream-50 shadow-sm ring-1 ring-secondary-100 lg:grid lg:grid-cols-2">
                {NEWS[0].image && (
                  <Image
                    src={NEWS[0].image}
                    alt={NEWS[0].title}
                    width={1800}
                    height={1200}
                    priority
                    className="h-64 w-full object-cover lg:h-full"
                  />
                )}
                <div className="p-8 sm:p-10">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-wide text-secondary-600">
                    <span>{NEWS[0].date}</span>
                    {NEWS[0].location && (
                      <>
                        <span aria-hidden className="text-secondary-300">
                          ·
                        </span>
                        <span>{NEWS[0].location}</span>
                      </>
                    )}
                  </div>
                  <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-secondary-900">
                    {NEWS[0].title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-foreground/75">
                    {NEWS[0].excerpt}
                  </p>
                </div>
              </article>

              {NEWS.length > 1 && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {NEWS.slice(1).map((item) => (
                    <article
                      key={item.title}
                      className="overflow-hidden rounded-2xl bg-cream-50 shadow-sm ring-1 ring-secondary-100"
                    >
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={1800}
                          height={1200}
                          className="h-44 w-full object-cover"
                        />
                      )}
                      <div className="p-6">
                        <p className="text-xs font-semibold uppercase tracking-wide text-secondary-600">
                          {item.date}
                        </p>
                        <h3 className="mt-2 font-[family-name:var(--font-heading)] text-lg font-bold text-secondary-900">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                          {item.excerpt}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
