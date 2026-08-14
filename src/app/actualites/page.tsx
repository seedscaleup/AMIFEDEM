import type { Metadata } from "next";
import Link from "next/link";
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
  excerpt: string;
};

const NEWS: NewsItem[] = [];

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
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {NEWS.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl bg-cream-50 p-6 shadow-sm ring-1 ring-secondary-100"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-secondary-600">
                    {item.date}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-heading)] text-lg font-bold text-secondary-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {item.excerpt}
                  </p>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
