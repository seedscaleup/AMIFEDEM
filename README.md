# Site web AMIDEFEM

Site vitrine de l'**AMIDEFEM** (Amicale de Développement des Filles et
Femmes de Mengong), une association basée à Mengong, dans la région du Sud
du Cameroun, qui favorise l'autonomisation et le développement local des
femmes.

Construit avec [Next.js](https://nextjs.org) (App Router), [Tailwind
CSS](https://tailwindcss.com) et une base de données Postgres pour les
actualités.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000). Pour que la page
Actualités et l'espace de publication fonctionnent en local, il faut aussi
une base Postgres et un fichier `.env.local` — voir la section
[Variables d'environnement](#variables-denvironnement) ci-dessous.

## Pages

- `/` — Accueil
- `/a-propos` — À propos de l'association
- `/activites` — Activités (8 mars, journées de l'excellence scolaire, entraide, AGR)
- `/galerie` — Galerie photos
- `/actualites` — Actualités (alimentées depuis la base de données)
- `/contact` — Contact
- `/admin` — **Espace de publication des actualités**, protégé par mot de passe

## Espace de publication des actualités (`/admin`)

L'équipe de l'AMIDEFEM peut publier, consulter et supprimer des actualités
sans intervention technique, via `https://<votre-domaine>/admin` :

1. Se connecter avec le mot de passe partagé (variable `ADMIN_PASSWORD`)
2. Remplir le formulaire : titre, date, lieu, texte, photo et légende (tous
   facultatifs sauf titre, date et texte)
3. Cliquer sur **Publier** — l'actualité apparaît immédiatement sur
   `/actualites`
4. Supprimer une actualité existante avec l'icône de corbeille

Les actualités et leurs photos sont stockées dans la base Postgres — aucun
redéploiement n'est nécessaire pour publier.

## Variables d'environnement

Trois variables sont nécessaires (à ajouter dans **Vercel → Project
Settings → Environment Variables**, ou dans un fichier `.env.local` en
local) :

| Variable | Rôle |
|---|---|
| `DATABASE_URL` | Chaîne de connexion vers la base Postgres |
| `ADMIN_PASSWORD` | Mot de passe partagé pour accéder à `/admin` |
| `SESSION_SECRET` | Chaîne aléatoire longue, utilisée pour sécuriser la session de connexion |

### Créer la base Postgres sur Vercel

1. Dans le projet Vercel, onglet **Storage** → **Create Database**
2. Choisir **Postgres** (propulsé par Neon) et suivre les étapes — le plan
   gratuit suffit largement pour ce site
3. Une fois créée, Vercel ajoute automatiquement la variable `DATABASE_URL`
   (ou une variable similaire — dans ce cas, la renommer/dupliquer en
   `DATABASE_URL` dans Project Settings → Environment Variables)
4. Ajouter aussi `ADMIN_PASSWORD` (choisissez un mot de passe) et
   `SESSION_SECRET` (une longue chaîne aléatoire, par exemple générée avec
   `openssl rand -hex 32`)
5. Redéployer (Deployments → dernier déploiement → **Redeploy**) pour que
   les nouvelles variables soient prises en compte

La table de base de données et l'actualité déjà publiée sur le site sont
créées automatiquement au premier accès — aucune commande manuelle requise.

## À personnaliser

Les coordonnées (adresse, e-mail, téléphone, réseaux sociaux) sont
centralisées dans `src/lib/contact.ts` et `src/lib/social.ts`.

## Déploiement

Ce projet se déploie sur [Vercel](https://vercel.com/new). Pensez à
configurer les [variables d'environnement](#variables-denvironnement)
avant le premier déploiement en production.
