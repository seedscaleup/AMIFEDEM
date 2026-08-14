# Site web AMIDEFEM

Site vitrine de l'**AMIDEFEM** (Amicale de Développement des Filles et
Femmes de Mengong), une association basée à Mengong, dans la région du Sud
du Cameroun, qui favorise l'autonomisation et le développement local des
femmes.

Construit avec [Next.js](https://nextjs.org) (App Router) et
[Tailwind CSS](https://tailwindcss.com).

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Accueil
- `/a-propos` — À propos de l'association
- `/activites` — Activités (8 mars, journées de l'excellence scolaire, entraide, AGR)
- `/contact` — Contact

## À personnaliser

Les coordonnées (adresse, e-mail, téléphone, réseaux sociaux) dans
`src/components/Footer.tsx` et `src/app/contact/page.tsx` sont des
placeholders à remplacer par les vraies informations de l'association. Un
logo et des photos réelles peuvent aussi être ajoutés dans `public/` et
intégrés au design.

## Déploiement

Ce projet se déploie facilement sur [Vercel](https://vercel.com/new) ou tout
hébergeur compatible Next.js.
