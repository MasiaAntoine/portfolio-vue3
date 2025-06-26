import type { Skill, SkillCategory } from '@/types'

export const skills: SkillCategory[] = [
  {
    name: 'Frontend',
    color: 'bg-blue-500',
    skills: [
      { name: 'Vue.js', level: 4, icon: 'V', color: 'bg-green-500', cv: true },
      { name: 'TypeScript', level: 4, icon: 'TS', color: 'bg-blue-600', cv: true },
      { name: 'Tailwind', level: 5, icon: 'T', color: 'bg-cyan-500', cv: true },
      { name: 'JavaScript', level: 5, icon: 'JS', color: 'bg-yellow-500' },
      { name: 'HTML', level: 5, icon: '🌐', color: 'bg-orange-500' },
      { name: 'CSS', level: 5, icon: '🎨', color: 'bg-blue-500' },
      { name: 'Bootstrap', level: 5, icon: 'B', color: 'bg-purple-600' },
    ],
  },
  {
    name: 'Backend',
    color: 'bg-black',
    skills: [
      { name: 'C#', level: 4, icon: 'C#', color: 'bg-purple-600' },
      { name: 'PHP', level: 4, icon: 'PHP', color: 'bg-indigo-600' },
      { name: 'Python', level: 4, icon: '🐍', color: 'bg-green-600' },
      { name: 'Laravel', level: 4, icon: 'L', color: 'bg-red-600', cv: true },
      { name: 'Java', level: 3, icon: '☕', color: 'bg-orange-500' },
      { name: 'Spring Boot', level: 3, icon: '🍃', color: 'bg-green-700', cv: true },
      { name: 'SQL', level: 4, icon: '🗄️', color: 'bg-blue-700' },
      { name: 'VBA', level: 3, icon: '📊', color: 'bg-green-800' },
    ],
  },
  {
    name: 'Systèmes',
    color: 'bg-purple-500',
    skills: [
      { name: 'C', level: 3, icon: 'C', color: 'bg-blue-800' },
      { name: 'C++', level: 3, icon: 'C++', color: 'bg-blue-900' },
      { name: 'Rust', level: 2, icon: '🦀', color: 'bg-orange-600' },
    ],
  },
  {
    name: 'Mobile',
    color: 'bg-indigo-500',
    skills: [
      { name: 'Capacitor', level: 3, icon: '⚡', color: 'bg-blue-500', cv: true },
      { name: 'iOS', level: 2, icon: '🍎', color: 'bg-gray-800', cv: true },
      { name: 'Android', level: 2, icon: '🤖', color: 'bg-green-500', cv: true },
    ],
  },
  {
    name: 'Outils & Plateformes',
    color: 'bg-gray-500',
    skills: [
      { name: 'Visual Studio Code', level: 5, icon: '📝', color: 'bg-blue-600', cv: true },
      { name: 'Wix', level: 5, icon: '🎨', color: 'bg-blue-500' },
      { name: 'Canva', level: 5, icon: '🎭', color: 'bg-purple-500' },
      { name: 'Git', level: 4, icon: '📊', color: 'bg-orange-600', cv: true },
      { name: 'GitHub', level: 4, icon: '🐙', color: 'bg-gray-800', cv: true },
      { name: 'Slack', level: 4, icon: '💬', color: 'bg-purple-600', cv: true },
      { name: 'Element', level: 3, icon: '🔗', color: 'bg-green-600' },
      { name: 'Notion', level: 4, icon: '📋', color: 'bg-gray-700', cv: true },
      { name: 'Teams', level: 4, icon: '🤝', color: 'bg-blue-700', cv: true },
    ],
  },
]

// Pour la présentation - toutes les technologies principales
export const presentationSkills = skills.flatMap((category) => category.skills)
