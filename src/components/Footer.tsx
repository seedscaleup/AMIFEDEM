import Link from "next/link";
import { HeartHandshake, MapPin, Mail, Phone, Share2 } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-100 bg-secondary-900 text-cream-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-lg font-bold text-cream-50">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-500">
              <HeartHandshake className="h-4.5 w-4.5" strokeWidth={2.25} />
            </span>
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
              <a href="mailto:contact@amidefem.org" className="hover:text-cream-50">
                contact@amidefem.org
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary-300" />
              <a href="tel:+237600000000" className="hover:text-cream-50">
                +237 6XX XXX XXX
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Share2 className="h-4 w-4 shrink-0 text-primary-300" />
              <span>AMIDEFEM Mengong</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-50/10 px-4 py-5 text-center text-xs text-cream-200/60 sm:px-6">
        © {year} AMIDEFEM — Amicale de Développement des Filles et Femmes de
        Mengong. Tous droits réservés.
      </div>
    </footer>
  );
}
