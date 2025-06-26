import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Personnel',
    description:
      'Site portfolio développé avec Vue 3, TypeScript et Tailwind CSS. Ce site me présente, et met en avant mes compétences et projets. Présentation interactive avec système de carousel.',
    technologies: ['Vue 3', 'TypeScript', 'Tailwind'],
    gradient: 'from-blue-400 to-blue-600',
    displayName: 'Portfolio Vue3',
    githubUrl: 'https://github.com/MasiaAntoine/portfolio-vue3',
    demoUrl: 'https://masia-antoine.fr/',
  },
]
