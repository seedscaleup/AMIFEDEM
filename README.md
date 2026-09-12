# Site web AMIDEFEM

Site vitrine de l'**AMIDEFEM** (Amicale de Développement des Filles et
Femmes de Mengong), une association basée à Mengong, dans la région du Sud
du Cameroun, qui favorise l'autonomisation et le développement local des
femmes.

Construit avec [Next.js](https://nextjs.org) (App Router), [Tailwind
CSS](https://tailwindcss.com) et [Sanity](https://www.sanity.io) pour les
actualités.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000). Pour que la page
Actualités et l'espace de publication fonctionnent en local, il faut aussi
un projet Sanity et un fichier `.env.local` — voir la section
[Variables d'environnement](#variables-denvironnement) ci-dessous. Sans
cela, la page Actualités s'affiche simplement avec son état vide.

## Pages

- `/` — Accueil
- `/a-propos` — À propos de l'association
- `/activites` — Activités (8 mars, journées de l'excellence scolaire, entraide, AGR)
- `/galerie` — Galerie photos
- `/actualites` — Actualités (alimentées depuis Sanity)
- `/contact` — Contact
- `/studio` — **Espace de publication des actualités** (Sanity Studio)

## Espace de publication des actualités (`/studio`)

L'équipe de l'AMIDEFEM publie, modifie et supprime des actualités depuis
`https://<votre-domaine>/studio` :

1. Se connecter avec un compte Sanity (Google, GitHub ou e-mail — géré par
   Sanity, à créer une fois pour chaque personne qui doit publier)
2. Cliquer sur **Actualité** puis **+ Create**
3. Remplir titre, date, lieu, photo, légende et le texte (éditeur de texte
   riche : gras, listes, etc.)
4. Cliquer sur **Publish** — l'actualité apparaît immédiatement sur
   `/actualites`, sans redéploiement

## Variables d'environnement

Deux variables sont nécessaires (à ajouter dans **Vercel → Project
Settings → Environment Variables**, ou dans un fichier `.env.local` en
local) :

| Variable | Rôle |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Identifiant du projet Sanity |
| `NEXT_PUBLIC_SANITY_DATASET` | Nom du dataset Sanity (`production` par défaut) |

### Créer le projet Sanity

1. Aller sur [sanity.io/manage](https://www.sanity.io/manage) et créer un
   compte gratuit si besoin
2. **Create project** — donnez-lui un nom (ex. "AMIDEFEM"), le dataset
   `production` est créé automatiquement, réglé en **Public** (les
   actualités sont de toute façon publiques sur le site)
3. Copier le **Project ID** affiché dans les paramètres du projet
4. Dans Vercel, ajouter `NEXT_PUBLIC_SANITY_PROJECT_ID` (l'identifiant
   copié) et `NEXT_PUBLIC_SANITY_DATASET` (`production`)
5. Dans **API → CORS origins** du projet Sanity, ajouter l'URL de votre
   site (ex. `https://amifedem.vercel.app`) pour autoriser `/studio` à s'y
   connecter
6. Redéployer (Deployments → dernier déploiement → **Redeploy**)
7. Ouvrir `/studio` sur le site déployé, se connecter, et ajouter les
   personnes de l'équipe qui doivent publier (Sanity → project → **Members**)

Aucune commande ni migration manuelle n'est nécessaire : le schéma
"Actualité" est déjà défini dans le code (`src/sanity/schemaTypes`).

## À personnaliser

Les coordonnées (adresse, e-mail, téléphone, réseaux sociaux) sont
centralisées dans `src/lib/contact.ts` et `src/lib/social.ts`.

## Déploiement

Ce projet se déploie sur [Vercel](https://vercel.com/new). Pensez à
configurer les [variables d'environnement](#variables-denvironnement)
avant le premier déploiement en production.
