"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Trash2, ImageIcon, Loader2 } from "lucide-react";
import type { NewsRow } from "@/lib/db";

export default function AdminDashboard({
  initialNews,
}: {
  initialNews: NewsRow[];
}) {
  const router = useRouter();
  const [news, setNews] = useState(initialNews);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  async function refreshList() {
    const res = await fetch("/api/admin/news");
    if (res.ok) {
      const data = await res.json();
      setNews(data.news);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    const form = event.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch("/api/admin/news", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Une erreur est survenue.");
        setSubmitting(false);
        return;
      }
      form.reset();
      await refreshList();
      router.refresh();
    } catch {
      setError("Erreur réseau. Réessayez.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Supprimer définitivement cette actualité ?")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/news/${id}`, { method: "DELETE" });
      if (res.ok) {
        setNews((prev) => prev.filter((item) => item.id !== id));
        router.refresh();
      }
    } finally {
      setDeletingId(null);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <div className="flex items-center justify-between">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-secondary-900">
          Actualités — espace de publication
        </h1>
        <button
          type="button"
          onClick={handleLogout}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-secondary-700 ring-1 ring-secondary-200 transition-colors hover:bg-secondary-50"
        >
          <LogOut className="h-4 w-4" />
          Déconnexion
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5 rounded-3xl bg-cream-50 p-6 shadow-sm ring-1 ring-primary-100 sm:p-8"
      >
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-secondary-900">
          Publier une nouvelle actualité
        </h2>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-secondary-900">
            Titre
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            placeholder="Ex : Cérémonie de l'excellence scolaire 2026 à Mengong"
            className="mt-1.5 w-full rounded-xl border border-primary-100 bg-cream-50 px-4 py-2.5 text-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="eventDate" className="block text-sm font-medium text-secondary-900">
              Date
            </label>
            <input
              id="eventDate"
              name="eventDate"
              type="text"
              required
              placeholder="Ex : Samedi 12 septembre 2026"
              className="mt-1.5 w-full rounded-xl border border-primary-100 bg-cream-50 px-4 py-2.5 text-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-secondary-900">
              Lieu (facultatif)
            </label>
            <input
              id="location"
              name="location"
              type="text"
              placeholder="Ex : Esplanade de l'hôtel de ville de Mengong"
              className="mt-1.5 w-full rounded-xl border border-primary-100 bg-cream-50 px-4 py-2.5 text-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
            />
          </div>
        </div>

        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium text-secondary-900">
            Texte
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            required
            rows={5}
            placeholder="Racontez l'événement..."
            className="mt-1.5 w-full resize-none rounded-xl border border-primary-100 bg-cream-50 px-4 py-2.5 text-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-secondary-900">
            Photo (facultatif)
          </label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            className="mt-1.5 w-full text-sm text-foreground/70 file:mr-4 file:rounded-full file:border-0 file:bg-primary-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-700 hover:file:bg-primary-200"
          />
        </div>

        <div>
          <label htmlFor="photoCaption" className="block text-sm font-medium text-secondary-900">
            Légende de la photo (facultatif)
          </label>
          <input
            id="photoCaption"
            name="photoCaption"
            type="text"
            placeholder="Ex : Madame EBA Jeanine épouse NGO'O, Présidente de l'AMIDEFEM"
            className="mt-1.5 w-full rounded-xl border border-primary-100 bg-cream-50 px-4 py-2.5 text-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-primary-600 disabled:opacity-60"
        >
          {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
          {submitting ? "Publication..." : "Publier"}
        </button>
      </form>

      <div className="mt-10">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-secondary-900">
          Actualités publiées ({news.length})
        </h2>
        <ul className="mt-4 space-y-3">
          {news.length === 0 && (
            <li className="rounded-2xl bg-secondary-50 p-6 text-sm text-foreground/70 ring-1 ring-secondary-100">
              Aucune actualité pour le moment.
            </li>
          )}
          {news.map((item) => (
            <li
              key={item.id}
              className="flex items-start gap-4 rounded-2xl bg-cream-50 p-4 shadow-sm ring-1 ring-secondary-100"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-secondary-100">
                {item.has_image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`/api/news-image/${item.id}`}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <ImageIcon className="h-5 w-5 text-secondary-400" />
                )}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-secondary-600">
                  {item.event_date}
                  {item.location ? ` · ${item.location}` : ""}
                </p>
                <h3 className="mt-0.5 truncate font-[family-name:var(--font-heading)] text-base font-bold text-secondary-900">
                  {item.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-foreground/70">
                  {item.excerpt}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleDelete(item.id)}
                disabled={deletingId === item.id}
                aria-label="Supprimer"
                className="shrink-0 rounded-full p-2 text-secondary-500 transition-colors hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
