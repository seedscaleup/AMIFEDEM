"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2 } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/contact";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const searchParams = useSearchParams();
  const defaultSubject = searchParams.get("sujet") ?? "";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "Message depuis le site AMIDEFEM");
    const message = String(data.get("message") ?? "");

    const body = `Nom : ${name}\nEmail : ${email}\n\n${message}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-secondary-900">
            Nom complet
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Votre nom"
            className="mt-1.5 w-full rounded-xl border border-primary-100 bg-cream-50 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary-900">
            Adresse e-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="vous@exemple.com"
            className="mt-1.5 w-full rounded-xl border border-primary-100 bg-cream-50 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-secondary-900">
          Sujet
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          defaultValue={defaultSubject}
          placeholder="Objet de votre message"
          className="mt-1.5 w-full rounded-xl border border-primary-100 bg-cream-50 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Comment pouvons-nous vous aider ?"
          className="mt-1.5 w-full resize-none rounded-xl border border-primary-100 bg-cream-50 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-primary-600"
      >
        <Send className="h-4 w-4" />
        Envoyer le message
      </button>

      {sent && (
        <p className="flex items-center gap-2 text-sm font-medium text-secondary-600">
          <CheckCircle2 className="h-4 w-4" />
          Votre client de messagerie va s&rsquo;ouvrir pour finaliser
          l&rsquo;envoi.
        </p>
      )}
    </form>
  );
}
