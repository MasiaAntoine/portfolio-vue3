export interface Experience {
  id: number
  title: string
  company: string
  type: string
  period: string
  location: string
  description: string
  skills: string[]
  color: string
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Développeur front-end',
    company: 'Soy Club',
    type: 'Contrat en alternance',
    period: "Août 2023 - Aujourd'hui",
    location: 'Toulouse, Occitanie, France',
    description:
      "Développement d'applications web et mobiles avec Vue 3 et Capacitor. Création d'interfaces utilisateur modernes et responsives, développement d'applications natives iOS et Android, et documentation technique complète.",
    skills: [
      'Vue 3',
      'Vue.js',
      'Capacitor',
      'Tailwind CSS',
      'JavaScript',
      'Java',
      'CSS3',
      'PostgreSQL',
      'Spring Boot',
      'Applications mobiles',
      'Applications web',
      'Android Studio',
      'Xcode',
      'Développement iOS',
      'Développement Android',
    ],
    color: 'blue',
    cv: true,
  },
  {
    id: 2,
    title: 'Stagiaire en développement Web',
    company: 'VALUE IT',
    type: 'Stage',
    period: 'Janvier 2023 - Février 2023',
    location: 'Carcassonne, Occitanie, France',
    description:
      "Stage de développement web axé sur les technologies backend et frontend. Développement d'applications web avec PHP et JavaScript, gestion de bases de données SQL, et apprentissage de la programmation orientée objet.",
    skills: ['PHP', 'HTML5', 'JavaScript', 'CSS3', 'SQL', 'Programmation orientée objet (POO)'],
    color: 'green',
    cv: true,
  },
  {
    id: 3,
    title: 'Stagiaire en développement Web',
    company: 'Sigma ASD',
    type: 'Stage',
    period: 'Mai 2022 - Juin 2022',
    location: 'Carcassonne, Occitanie, France',
    description:
      'Premier stage dans le développement web avec une approche full-stack. Découverte du développement web moderne, apprentissage des langages de base et introduction aux technologies backend avec C# et PHP.',
    skills: [
      'PHP',
      'HTML5',
      'HTML',
      'JavaScript',
      'CSS3',
      'C#',
      'Développement web',
      'Développement full-stack',
      'Programmation orientée objet (POO)',
    ],
    color: 'purple',
    cv: true,
  },
]
