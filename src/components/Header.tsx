"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/activites", label: "Activités" },
  { href: "/galerie", label: "Galerie" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-primary-100 bg-cream-50/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" onClick={() => setOpen(false)} aria-label="AMIDEFEM — Accueil">
          <Image
            src="/logo-horizontal.png"
            alt="AMIDEFEM — Amicale de Développement des Filles et Femmes de Mengong"
            width={1600}
            height={553}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  active
                    ? "bg-primary-500 text-cream-50"
                    : "text-primary-900 hover:bg-primary-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 rounded-full bg-secondary-500 px-4 py-2 text-sm font-semibold whitespace-nowrap text-cream-50 transition-colors hover:bg-secondary-600"
          >
            Nous soutenir
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-primary-700 lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-primary-100 bg-cream-50 px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-base font-medium ${
                      active
                        ? "bg-primary-500 text-cream-50"
                        : "text-primary-900 hover:bg-primary-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-1">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-secondary-500 px-3 py-2 text-center text-base font-semibold text-cream-50"
              >
                Nous soutenir
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
