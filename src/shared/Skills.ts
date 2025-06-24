export interface Skill {
  name: string
  level: number // 1-5
  icon?: string
  color: string
}

export interface SkillCategory {
  name: string
  color: string
  skills: Skill[]
}

export const skills: SkillCategory[] = [
  {
    name: 'Frontend',
    color: 'blue',
    skills: [
      { name: 'Vue.js', level: 4, icon: 'V', color: 'green-500' },
      { name: 'TypeScript', level: 4, icon: 'TS', color: 'blue-600' },
      { name: 'Tailwind', level: 5, icon: 'T', color: 'cyan-500' },
      { name: 'JavaScript', level: 5, icon: 'JS', color: 'yellow-500' },
      { name: 'HTML', level: 5, icon: '🌐', color: 'orange-500' },
      { name: 'CSS', level: 5, icon: '🎨', color: 'blue-500' },
      { name: 'Bootstrap', level: 5, icon: 'B', color: 'purple-600' },
    ],
  },
  {
    name: 'Backend',
    color: 'black',
    skills: [
      { name: 'C#', level: 4, icon: 'C#', color: 'purple-600' },
      { name: 'PHP', level: 4, icon: 'PHP', color: 'indigo-600' },
      { name: 'Python', level: 4, icon: '🐍', color: 'green-600' },
      { name: 'Laravel', level: 4, icon: 'L', color: 'red-600' },
      { name: 'Java', level: 3, icon: '☕', color: 'orange-500' },
      { name: 'Spring Boot', level: 3, icon: '🍃', color: 'green-700' },
      { name: 'SQL', level: 4, icon: '🗄️', color: 'blue-700' },
      { name: 'VBA', level: 3, icon: '📊', color: 'green-800' },
    ],
  },
  {
    name: 'Systèmes',
    color: 'purple',
    skills: [
      { name: 'C', level: 3, icon: 'C', color: 'blue-800' },
      { name: 'C++', level: 3, icon: 'C++', color: 'blue-900' },
      { name: 'Rust', level: 2, icon: '🦀', color: 'orange-600' },
    ],
  },
  {
    name: 'Mobile',
    color: 'indigo',
    skills: [
      { name: 'Capacitor', level: 3, icon: '⚡', color: 'blue-500' },
      { name: 'iOS', level: 2, icon: '🍎', color: 'gray-800' },
      { name: 'Android', level: 2, icon: '🤖', color: 'green-500' },
    ],
  },
  {
    name: 'Outils & Plateformes',
    color: 'gray',
    skills: [
      { name: 'Visual Studio Code', level: 5, icon: '📝', color: 'blue-600' },
      { name: 'Wix', level: 5, icon: '🎨', color: 'blue-500' },
      { name: 'Canva', level: 5, icon: '🎭', color: 'purple-500' },
      { name: 'Git', level: 4, icon: '📊', color: 'orange-600' },
      { name: 'GitHub', level: 4, icon: '🐙', color: 'gray-800' },
      { name: 'Slack', level: 4, icon: '💬', color: 'purple-600' },
      { name: 'Element', level: 3, icon: '🔗', color: 'green-600' },
      { name: 'Notion', level: 4, icon: '📋', color: 'gray-700' },
      { name: 'Teams', level: 4, icon: '🤝', color: 'blue-700' },
    ],
  },
]

// Pour la présentation - toutes les technologies principales
export const presentationSkills = skills.flatMap((category) => category.skills)
