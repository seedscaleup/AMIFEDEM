"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Mot de passe incorrect.");
        setLoading(false);
        return;
      }
      router.refresh();
    } catch {
      setError("Erreur de connexion. Réessayez.");
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-cream-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-3xl bg-cream-50 p-8 shadow-sm ring-1 ring-primary-100"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500 text-cream-50">
          <Lock className="h-6 w-6" strokeWidth={2} />
        </span>
        <h1 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-bold text-secondary-900">
          Espace de publication
        </h1>
        <p className="mt-1 text-sm text-foreground/70">
          Réservé à l&rsquo;équipe de l&rsquo;AMIDEFEM.
        </p>
        <label htmlFor="password" className="mt-6 block text-sm font-medium text-secondary-900">
          Mot de passe
        </label>
        <input
          id="password"
          type="password"
          required
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-primary-100 bg-cream-50 px-4 py-2.5 text-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
        />
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="mt-5 w-full rounded-full bg-primary-500 px-6 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-primary-600 disabled:opacity-60"
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
}
