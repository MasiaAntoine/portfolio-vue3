export interface Education {
  id: number
  title: string
  institution: string
  date: string
  description: string
  details?: string
  skills: string[]
  color: string
  bgColor: string
  textColor: string
  badgeBg: string
  icon: string
  category: 'diploma' | 'certification' | 'license' | 'other'
  cv?: boolean
}
