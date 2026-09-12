import type { Metadata } from "next";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { Newspaper, ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import { getActualites, urlForImage } from "@/sanity/client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Actualités et nouvelles de l'AMIDEFEM — suivez les dernières informations de l'association à Mengong, région du Sud, Cameroun.",
};

export default async function ActualitesPage() {
  let news: Awaited<ReturnType<typeof getActualites>> = [];
  try {
    news = await getActualites();
  } catch {
    // Sanity pas encore configuré (variables d'environnement manquantes ou
    // dataset introuvable) — on affiche l'état vide plutôt que de casser la page.
  }

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
          {news.length === 0 ? (
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
                {news[0].image && (
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={urlForImage(news[0].image)
                        .width(1800)
                        .height(1200)
                        .fit("crop")
                        .url()}
                      alt={news[0].photoCaption || news[0].title}
                      className="h-64 w-full object-cover lg:h-full"
                    />
                    {news[0].photoCaption && (
                      <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-xs font-medium text-cream-50">
                        {news[0].photoCaption}
                      </p>
                    )}
                  </div>
                )}
                <div className="p-8 sm:p-10">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-wide text-secondary-600">
                    <span>{news[0].eventDate}</span>
                    {news[0].location && (
                      <>
                        <span aria-hidden className="text-secondary-300">
                          ·
                        </span>
                        <span>{news[0].location}</span>
                      </>
                    )}
                  </div>
                  <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-secondary-900">
                    {news[0].title}
                  </h2>
                  <div className="prose prose-sm mt-4 max-w-none text-base leading-relaxed text-foreground/75">
                    <PortableText value={news[0].body} />
                  </div>
                </div>
              </article>

              {news.length > 1 && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {news.slice(1).map((item) => (
                    <article
                      key={item._id}
                      className="overflow-hidden rounded-2xl bg-cream-50 shadow-sm ring-1 ring-secondary-100"
                    >
                      {item.image && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={urlForImage(item.image)
                            .width(1200)
                            .height(800)
                            .fit("crop")
                            .url()}
                          alt={item.photoCaption || item.title}
                          className="h-44 w-full object-cover"
                        />
                      )}
                      <div className="p-6">
                        <p className="text-xs font-semibold uppercase tracking-wide text-secondary-600">
                          {item.eventDate}
                        </p>
                        <h3 className="mt-2 font-[family-name:var(--font-heading)] text-lg font-bold text-secondary-900">
                          {item.title}
                        </h3>
                        <div className="prose prose-sm mt-2 max-w-none text-sm leading-relaxed text-foreground/70">
                          <PortableText value={item.body} />
                        </div>
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
