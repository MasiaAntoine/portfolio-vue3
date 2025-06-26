import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Personnel',
    description:
      'Site portfolio développé avec Vue 3, TypeScript et Tailwind CSS. Ce site me présente, et met en avant mes compétences et projets. Présentation interactive avec système de carousel.',
    technologies: ['Vue 3', 'TypeScript', 'Tailwind', 'Shadcn'],
    gradient: 'from-blue-400 to-blue-600',
    displayName: 'Portfolio Vue3',
    githubUrl: 'https://github.com/MasiaAntoine/portfolio-vue3',
    demoUrl: 'https://masia-antoine.fr/',
  },
  {
    id: 2,
    title: 'Blue Antivirus',
    description:
      'Application antivirus multi-plateforme pour Windows et macOS développée avec Vue.js, TypeScript et Shadcn pour le frontend, Rust pour le backend et Tauri pour la compilation desktop. Protection complète du système avec interface moderne et intuitive.',
    technologies: ['Vue.js', 'TypeScript', 'Rust', 'Tauri', 'Shadcn'],
    gradient: 'from-cyan-400 to-blue-500',
    displayName: 'Blue',
    demoUrl: 'https://blue.masia-antoine.fr/',
  },
  {
    id: 3,
    title: 'Kitchen API Backend',
    description:
      'API REST développée avec Laravel/PHP pour la gestion intelligente de cuisine. Permet la gestion des ingrédients, stocks automatiques via balances connectées, génération de listes de courses et suggestions de recettes. Authentification Basic Auth et documentation Postman automatique.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Postman'],
    gradient: 'from-orange-400 to-red-500',
    displayName: 'Kitchen Backend',
    githubUrl: 'https://github.com/MasiaAntoine/kitchen-back',
  },
  {
    id: 4,
    title: 'Kitchen Embarqué',
    description:
      "Firmware pour balances connectées ESP32 avec capteurs de poids HX711. Enregistrement automatique via WiFi, transmission des données de pesée en temps réel vers l'API, étalonnage et mise à zéro automatiques. Communication sécurisée avec authentification Basic Auth.",
    technologies: ['Arduino', 'ESP32', 'C++', 'WiFi', 'HX711', 'IoT'],
    gradient: 'from-purple-400 to-indigo-500',
    displayName: 'Kitchen IoT',
    githubUrl: 'https://github.com/MasiaAntoine/kitchen-embarque',
  },
  {
    id: 5,
    title: 'Kitchen Frontend',
    description:
      "Interface web moderne développée avec Vue 3 et TypeScript pour la gestion de cuisine intelligente. Visualisation des stocks d'ingrédients, listes de courses automatiques, interaction avec balances connectées et suggestions de recettes personnalisées.",
    technologies: ['Vue 3', 'TypeScript', 'Tailwind', 'Shadcn', 'PWA'],
    gradient: 'from-green-400 to-emerald-500',
    displayName: 'Kitchen App',
    githubUrl: 'https://github.com/MasiaAntoine/kitchen-front',
  },
  {
    id: 6,
    title: 'Arts Portfolio',
    description:
      'Site de présentation de mes peintures et créations artistiques. Interface élégante et moderne développée avec Vue.js et Tailwind CSS pour mettre en valeur mes œuvres avec une galerie interactive et responsive.',
    technologies: ['Vue.js', 'Tailwind CSS'],
    gradient: 'from-pink-400 to-purple-500',
    displayName: 'Arts',
    githubUrl: 'https://github.com/MasiaAntoine/arts',
    demoUrl: 'https://arts.masia-antoine.fr/',
  },
  {
    id: 7,
    title: 'Download Cerise Pro',
    description:
      'Plateforme de téléchargement de fiches Cerise Pro pour étudiants en BAC PRO Gestion et Administration, BAC PRO AGORA et BTS Comptabilité et Gestion. Site optimisé pour la rapidité avec fiches certifiées et langage professionnel.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    gradient: 'from-yellow-400 to-orange-500',
    displayName: 'Cerise Pro',
    githubUrl: 'https://github.com/MasiaAntoine/downloadcerisepro',
    demoUrl: 'https://downloadcerisepro.fr/',
  },
  {
    id: 8,
    title: 'Soy Club',
    description:
      "Application mobile multiplateforme développée en équipe pour iOS et Android. Utilise Vue.js avec Shadcn pour l'interface utilisateur, Tailwind CSS pour le design et Capacitor pour la compilation native. Projet réalisé en contexte professionnel.",
    technologies: ['Vue.js', 'Shadcn', 'Tailwind CSS', 'Capacitor', 'iOS', 'Android'],
    gradient: 'from-emerald-400 to-teal-500',
    displayName: 'Soy Club',
  },
]
