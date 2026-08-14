import type { Metadata } from "next";
import { MapPin, Mail, Phone, Share2, Clock } from "lucide-react";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'AMIDEFEM à Mengong, région du Sud, Cameroun. Rejoignez l'association, proposez un partenariat ou posez vos questions.",
};

const INFO = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Mengong, Arrondissement de Mengong, Région du Sud, Cameroun",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contact@amidefem.org",
    href: "mailto:contact@amidefem.org",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+237 6XX XXX XXX",
    href: "tel:+237600000000",
  },
  {
    icon: Share2,
    label: "Réseaux sociaux",
    value: "AMIDEFEM Mengong",
  },
  {
    icon: Clock,
    label: "Rencontres",
    value: "Réunions régulières des membres — dates communiquées localement",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-secondary-700 to-secondary-900 py-16 text-cream-50 sm:py-20">
        <Container>
          <h1 className="max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-extrabold text-balance sm:text-5xl">
            Contactez-nous
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-100/85">
            Une question, une envie de rejoindre l&rsquo;AMIDEFEM ou de
            soutenir nos actions ? Écrivez-nous, nous serons heureuses de
            vous répondre.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-3xl bg-cream-50 p-8 shadow-sm ring-1 ring-primary-100 sm:p-10">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-secondary-900">
              Envoyez-nous un message
            </h2>
            <p className="mt-2 text-sm text-foreground/70">
              Remplissez le formulaire ci-dessous, votre messagerie
              s&rsquo;ouvrira pour finaliser l&rsquo;envoi vers l&rsquo;équipe
              de l&rsquo;AMIDEFEM.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-secondary-50 p-8 ring-1 ring-secondary-100 sm:p-10">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-secondary-900">
                Nos coordonnées
              </h2>
              <ul className="mt-6 space-y-5">
                {INFO.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary-500 text-cream-50">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-secondary-600">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm text-foreground/80 hover:text-secondary-700"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground/80">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
