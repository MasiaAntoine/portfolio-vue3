import PresentationComponent from '@/components/presentation/PresentationComponent.vue'
import AboutComponent from '@/components/about/AboutComponent.vue'
import SkillsComponent from '@/components/skills/SkillsComponent.vue'
import ProjectsComponent from '@/components/projects/ProjectsComponent.vue'
import ExperienceComponent from '@/components/experience/ExperienceComponent.vue'
import EducationComponent from '@/components/education/EducationComponent.vue'
import ContactComponent from '@/components/contact/ContactComponent.vue'

export const CarouselMenu = [
  {
    id: 1,
    name: 'Présentation',
    component: PresentationComponent,
  },
  {
    id: 2,
    name: 'À propos',
    component: AboutComponent,
  },
  {
    id: 3,
    name: 'Compétences',
    component: SkillsComponent,
  },
  {
    id: 4,
    name: 'Projets',
    component: ProjectsComponent,
  },
  {
    id: 5,
    name: 'Expériences',
    component: ExperienceComponent,
  },
  {
    id: 6,
    name: 'Formation',
    component: EducationComponent,
  },
  {
    id: 7,
    name: 'Contact',
    component: ContactComponent,
  },
]
