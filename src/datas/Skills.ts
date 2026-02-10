import type { Skill, SkillCategory } from '@/types'

export const skills: SkillCategory[] = [
  {
    name: 'Frontend',
    color: 'bg-blue-500',
    skills: [
      { name: 'Vue.js', level: 5, icon: 'V', color: 'bg-green-500', cv: true },
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
      { name: 'Spring Boot', level: 4, icon: '🍃', color: 'bg-green-700' },
      { name: 'Java', level: 4, icon: '☕', color: 'bg-orange-500' },
      { name: 'PostgreSQL', level: 4, icon: '🐘', color: 'bg-blue-600', cv: true },
      { name: 'C#', level: 4, icon: 'C#', color: 'bg-purple-600' },
      { name: 'PHP', level: 4, icon: 'PHP', color: 'bg-indigo-600' },
      { name: 'Laravel', level: 4, icon: 'L', color: 'bg-red-600', cv: true },
      { name: 'Python', level: 4, icon: '🐍', color: 'bg-green-600' },
      { name: 'SQL', level: 4, icon: '🗄️', color: 'bg-blue-700' },
      { name: 'NoSQL', level: 3, icon: '📊', color: 'bg-green-800' },
      { name: 'API REST', level: 5, icon: '🔌', color: 'bg-indigo-500' },
    ],
  },
  {
    name: 'DevOps & Cloud',
    color: 'bg-purple-500',
    skills: [
      { name: 'Docker', level: 4, icon: '🐳', color: 'bg-blue-500', cv: true },
      { name: 'Git', level: 5, icon: '📊', color: 'bg-orange-600', cv: true },
      { name: 'GitHub', level: 5, icon: '🐙', color: 'bg-gray-800', cv: true },
    ],
  },
  {
    name: 'Cybersécurité',
    color: 'bg-red-600',
    cv: false,
    skills: [
      { name: 'RGPD', level: 4, icon: '🔒', color: 'bg-blue-700', cv: true },
      { name: 'Chiffrement', level: 4, icon: '🔐', color: 'bg-purple-600' },
      { name: 'DevSecOps', level: 3, icon: '🔐', color: 'bg-red-700', cv: true },
    ],
  },
  {
    name: 'Mobile',
    color: 'bg-indigo-500',
    skills: [
      { name: 'Capacitor', level: 4, icon: '⚡', color: 'bg-blue-500', cv: true },
      { name: 'iOS', level: 3, icon: '🍎', color: 'bg-gray-800', cv: true },
      { name: 'Android', level: 3, icon: '🤖', color: 'bg-green-500', cv: true },
    ],
  },
  {
    name: 'Design & Conception',
    color: 'bg-pink-500',
    skills: [
      { name: 'Figma', level: 3, icon: '🎨', color: 'bg-purple-500', cv: true },
      { name: 'UML', level: 4, icon: '📐', color: 'bg-blue-600', cv: true },
      { name: 'UX/UI Design', level: 4, icon: '✨', color: 'bg-pink-500', cv: true },
      { name: 'Canva', level: 5, icon: '🎭', color: 'bg-purple-400' },
      { name: 'Wix', level: 5, icon: '🌐', color: 'bg-blue-500' },
    ],
  },
  {
    name: 'Outils & Collaboration',
    color: 'bg-gray-500',
    cv: false,
    skills: [
      { name: 'Visual Studio Code', level: 5, icon: '📝', color: 'bg-blue-600', cv: true },
      { name: 'Slack', level: 4, icon: '💬', color: 'bg-purple-600', cv: true },
      { name: 'Notion', level: 4, icon: '📋', color: 'bg-gray-700', cv: true },
      { name: 'Teams', level: 4, icon: '🤝', color: 'bg-blue-700', cv: true },
      { name: 'Element', level: 3, icon: '🔗', color: 'bg-green-600' },
    ],
  },
]

// Pour la présentation - toutes les technologies principales
export const presentationSkills = skills.flatMap((category) => category.skills)
