export interface ProfilData {
  personal: {
    firstName: string
    lastName: string
    title: string
    description: string
    quote: string
    aboutDescription: string
    minecraftDescription: string
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
  }
}

export const profilData: ProfilData = {
  personal: {
    firstName: 'Antoine',
    lastName: 'Masia',
    title: 'Développeur Full Stack passionné',
    description:
      "Développeur Full Stack passionné depuis 2014, spécialisé dans la création de solutions web modernes et innovantes. Toujours en quête d'apprentissage et de nouveaux défis technologiques.",
    quote: "Les erreurs d'hier sont les leçons d'aujourd'hui pour le développeur de demain.",
    aboutDescription:
      "Diplômé du BTS SIO (Bac+2), passionné de code depuis 2014, je suis devenu un développeur déterminé, polyvalent et autodidacte. Ma passion pour le développement est un moteur puissant qui alimente la créativité et la résolution de problèmes. Toujours en quête d'apprentissage, ma créativité, ma logique et mon autonomie me permettent de trouver des solutions originales avec diverses technologies modernes.",
    minecraftDescription:
      "Je suis passionné par la programmation depuis ma découverte de Minecraft, où j'ai été fasciné par la façon dont les commandes et les scripts pouvaient être utilisés pour créer des mondes uniques et complexes. Cette découverte a été le catalyseur de ma passion pour le développement, me montrant que la programmation est une passion passionnante et gratifiante qui offre une grande polyvalence pour créer des choses incroyables et résoudre des problèmes complexes.",
  },
  stats: {
    yearsOfExperience: 11,
    technologiesMastered: 30,
    diploma: 'BTS SIO',
  },
  qualities: ['Créatif', 'Rigoureux', 'Innovant', 'Collaboratif', 'Autodidacte', 'Déterminé'],
  contact: {
    email: 'pro.antoine.masia@gmail.com',
    phone: '+33 6 15 80 40 64',
    location: 'Toulouse, France',
    socialDescription:
      "N'hésitez pas à me contacter pour discuter d'opportunités, de projets ou simplement pour échanger sur le développement web.",
  },
}
