import type { LucideIcon } from 'lucide-vue-next'

export interface SocialNetwork {
  name: string
  url: string
  icon: LucideIcon
  colorClass: string
  hoverColorClass: string
}

export interface ProfilData {
  personal: {
    firstName: string
    lastName: string
    title: string
    description: string
    quote: string
    aboutDescription: string
    minecraftDescription: string
    urlPortfolio: string
  }
  stats: {
    yearsOfExperience: number
    technologiesMastered: number
    diploma: string
  }
  qualities: string[]
  contact: {
    email: string
    phone: string
    location: string
    socialDescription: string
    socialNetworks: SocialNetwork[]
  }
}
