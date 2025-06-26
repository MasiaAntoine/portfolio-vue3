export interface Skill {
  name: string
  level: number // 1-5
  icon?: string
  color: string
  cv?: boolean
}

export interface SkillCategory {
  name: string
  color: string
  skills: Skill[]
}
