import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/social";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from "@/lib/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-100 bg-secondary-900 text-cream-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-lg font-bold text-cream-50">
            <Image
              src="/logo-embleme.png"
              alt=""
              width={1260}
              height={1088}
              className="h-10 w-auto"
            />
            AMIDEFEM
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream-200/80">
            Amicale de Développement des Filles et Femmes de Mengong.
            Solidarité, autonomisation et éducation au service des femmes de
            la région du Sud, Cameroun.
          </p>
        </div>

        <div>
          <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wide text-gold-300">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="text-cream-200/80 hover:text-cream-50">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="text-cream-200/80 hover:text-cream-50">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/activites" className="text-cream-200/80 hover:text-cream-50">
                Activités
              </Link>
            </li>
            <li>
              <Link href="/galerie" className="text-cream-200/80 hover:text-cream-50">
                Galerie
              </Link>
            </li>
            <li>
              <Link href="/actualites" className="text-cream-200/80 hover:text-cream-50">
                Actualités
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-cream-200/80 hover:text-cream-50">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wide text-gold-300">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-cream-200/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-300" />
              Mengong, Région du Sud, Cameroun
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary-300" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-cream-50">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary-300" />
              <a href={`tel:${CONTACT_PHONE_TEL}`} className="hover:text-cream-50">
                {CONTACT_PHONE_DISPLAY}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-50/10 text-cream-100 transition-colors hover:bg-cream-50/20"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-cream-50/10 px-4 py-5 text-center text-xs text-cream-200/60 sm:px-6">
        © {year} AMIDEFEM — Amicale de Développement des Filles et Femmes de
        Mengong. Tous droits réservés.
      </div>
    </footer>
  );
}
