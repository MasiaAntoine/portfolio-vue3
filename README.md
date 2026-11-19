# Portfolio Vue 3 – Antoine Masia

Portfolio personnel développé avec **Vue 3**, **TypeScript** et **Tailwind CSS**. Ce site met en avant mon parcours, mes compétences, mes projets, mon CV interactif et permet de me contacter facilement. Il propose une navigation moderne avec un système de carousel, une génération de CV PDF et une expérience utilisateur responsive.

## 🚀 Démo

- [masia-antoine.fr](https://masia-antoine.fr/)

## ✨ Fonctionnalités principales

- Présentation interactive (carousel)
- Section À propos, compétences, projets, expériences, formations, contact
- CV interactif et téléchargeable en PDF
- Responsive design (mobile, tablette, desktop)
- Composants UI réutilisables (boutons, cards, carousel…)
- SEO optimisé (balises meta, Open Graph, JSON-LD)

## 🛠️ Technologies utilisées

- **Vue 3** + **TypeScript**
- **Vite** (build ultra-rapide)
- **Tailwind CSS** (design moderne)
- **Shadcn** (UI components)
- **Capacitor** (pour le mobile)
- **Lucide** (icônes)
- **pnpm** (gestionnaire de paquets)
- Génération de PDF, QRCode, etc.

## 📦 Installation

```bash
# Cloner le repo
git clone https://github.com/MasiaAntoine/portfolio-vue3.git
cd portfolio-vue3

# Installer les dépendances
pnpm install
```

## 🖥️ Lancer en développement

```bash
pnpm dev
```

Le site sera accessible sur [http://localhost:5173](http://localhost:5173).

## 🏗️ Build pour production

```bash
pnpm build
```

Les fichiers seront générés dans le dossier `dist/`.

La publication sur https://portfolio.masia-antoine.fr se fait depuis `deploiement` :

```bash
./scripts/deploy.sh portfolio-vue3 proxy
```

## 📁 Structure du projet

```
src/
  assets/           # Images, logos, styles CSS
  components/       # Composants Vue (UI, sections, CV, etc.)
  datas/            # Données structurées (projets, expériences, skills…)
  lib/              # Fonctions utilitaires
  router/           # Configuration du router Vue
  shared/           # Utilitaires partagés
  types/            # Types TypeScript
  views/            # Pages principales (Home, CV Preview…)
public/             # Fichiers statiques
```

## 🧩 Composants principaux

- `PresentationComponent.vue` : Accueil, présentation, skills
- `AboutComponent.vue` : À propos
- `SkillsComponent.vue` : Compétences
- `ProjectsComponent.vue` : Projets
- `ExperienceComponent.vue` : Expériences
- `EducationComponent.vue` : Formations & certifications
- `ContactComponent.vue` : Contact & réseaux sociaux
- `CvPreviewView.vue` : CV interactif et export PDF

## 📚 Scripts utiles

- `pnpm dev` : Lancer le serveur de dev
- `pnpm build` : Build production
- `pnpm preview` : Prévisualiser le build

## 👤 Auteur

Antoine Masia – [LinkedIn](https://fr.linkedin.com/in/antoine-masia-403a17228) – [GitHub](https://github.com/MasiaAntoine)
