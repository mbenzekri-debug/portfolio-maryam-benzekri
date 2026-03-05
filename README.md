# Portfolio Astro + Vercel

Portfolio moderne, responsive et data-driven avec Astro.

## Structure du projet

```text
portfolio-astro/
├─ public/
├─ src/
│  ├─ components/
│  ├─ data/
│  │  └─ profile.ts      # Fichier UNIQUE à modifier pour le contenu
│  ├─ layouts/
│  ├─ pages/
│  ├─ styles/
│  └─ utils/
├─ astro.config.mjs
├─ vercel.json
└─ package.json
```

## Commandes utiles

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run deploy`

## Mise à jour du contenu

Modifier uniquement `src/data/profile.ts`.

- Informations personnelles
- Sections (about, skills, education, experience, publications, certifications, projects)
- Liens sociaux

La navigation et l'affichage des sections sont automatiques : si un tableau est vide, la section n'apparaît pas.

## Pré-requis CLI (Windows)

Installer (si absent) :

- Node.js 18+
- Git
- GitHub CLI (`gh`)
- Vercel CLI (`vercel`)

Commandes winget :

```powershell
winget install OpenJS.NodeJS.LTS
winget install Git.Git
winget install GitHub.cli
npm install -g vercel
```

## Authentification

```powershell
gh auth login
gh auth setup-git
vercel login
```

## GitHub (création dépôt si nécessaire)

```powershell
git init
git add .
git commit -m "feat: initialize Astro portfolio with dynamic sections"
gh repo create <repo-name> --public --source . --remote origin --push
```

## Déploiement Vercel

```powershell
vercel --yes --prod
```

## URL personnalisée

1. Définir l'alias final dans `vercel.json` au format : `portfolio-prenom-nom.vercel.app`
2. Lier l'alias au dernier déploiement :

```powershell
vercel alias set <deployment-url> portfolio-maryam-benzekri.vercel.app
```

3. Redéployer pour conserver l'alias :

```powershell
vercel --yes --prod
```

URL finale cible :

`https://portfolio-maryam-benzekri.vercel.app`
