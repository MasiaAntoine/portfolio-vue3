<template>
  <span :class="[getTechColor(tag), sizeClass]" class="font-medium">
    {{ tag }}
  </span>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps<{ tag: string; size?: 'sm' | 'md' }>()
const tag = props.tag
const size = props.size || 'md'

const sizeClass = computed(() => {
  return size === 'sm' ? 'px-2 py-1 text-xs rounded' : 'px-3 py-1 text-sm rounded-full'
})

function getTechColor(tech: string): string {
  const colorMap: Record<string, string> = {
    'Vue 3': 'bg-green-100 text-green-800',
    'Vue.js': 'bg-green-100 text-green-800',
    TypeScript: 'bg-blue-100 text-blue-800',
    Tailwind: 'bg-cyan-100 text-cyan-800',
    'Tailwind CSS': 'bg-cyan-100 text-cyan-800',
    'Node.js': 'bg-green-100 text-green-800',
    MongoDB: 'bg-green-100 text-green-800',
    React: 'bg-cyan-100 text-cyan-800',
    'Chart.js': 'bg-red-100 text-red-800',
    Express: 'bg-gray-100 text-gray-800',
    Shadcn: 'bg-slate-100 text-slate-800',
    Rust: 'bg-orange-100 text-orange-800',
    Tauri: 'bg-blue-100 text-blue-800',
    Laravel: 'bg-red-100 text-red-800',
    PHP: 'bg-purple-100 text-purple-800',
    MySQL: 'bg-orange-100 text-orange-800',
    PostgreSQL: 'bg-blue-100 text-blue-800',
    'REST API': 'bg-blue-100 text-blue-800',
    Postman: 'bg-orange-100 text-orange-800',
    Arduino: 'bg-teal-100 text-teal-800',
    ESP32: 'bg-red-100 text-red-800',
    'C++': 'bg-blue-100 text-blue-800',
    'C#': 'bg-purple-100 text-purple-800',
    WiFi: 'bg-blue-100 text-blue-800',
    HX711: 'bg-yellow-100 text-yellow-800',
    IoT: 'bg-emerald-100 text-emerald-800',
    PWA: 'bg-purple-100 text-purple-800',
    JavaScript: 'bg-yellow-100 text-yellow-800',
    HTML: 'bg-orange-100 text-orange-800',
    HTML5: 'bg-orange-100 text-orange-800',
    CSS: 'bg-blue-100 text-blue-800',
    CSS3: 'bg-blue-100 text-blue-800',
    Capacitor: 'bg-blue-100 text-blue-800',
    iOS: 'bg-gray-100 text-gray-800',
    Android: 'bg-green-100 text-green-800',
    'Spring Boot': 'bg-green-100 text-green-800',
    Java: 'bg-red-100 text-red-800',
    SQL: 'bg-blue-100 text-blue-800',
    'Applications mobiles': 'bg-indigo-100 text-indigo-800',
    'Applications web': 'bg-cyan-100 text-cyan-800',
    'Android Studio': 'bg-green-100 text-green-800',
    Xcode: 'bg-blue-100 text-blue-800',
    'Web Development': 'bg-gray-100 text-gray-800',
    'Développement web': 'bg-gray-100 text-gray-800',
    'Développement full-stack': 'bg-gray-100 text-gray-800',
    'Programmation orientée objet (POO)': 'bg-purple-100 text-purple-800',
    'Développement Full Stack': 'bg-blue-100 text-blue-800',
    'Data Science': 'bg-emerald-100 text-emerald-800',
    Programmation: 'bg-indigo-100 text-indigo-800',
    'Base de données': 'bg-yellow-100 text-yellow-800',
    "Conception d'applications": 'bg-cyan-100 text-cyan-800',
    Développement: 'bg-blue-100 text-blue-800',
    Cybersécurité: 'bg-red-100 text-red-800',
    'Services informatiques': 'bg-gray-100 text-gray-800',
    'Compétences numériques': 'bg-purple-100 text-purple-800',
    Informatique: 'bg-blue-100 text-blue-800',
    Communication: 'bg-pink-100 text-pink-800',
    'Création de contenu': 'bg-orange-100 text-orange-800',
    Conduite: 'bg-orange-100 text-orange-800',
    'Code de la route': 'bg-yellow-100 text-yellow-800',
    'Sécurité routière': 'bg-red-100 text-red-800',
    'Sécurité informatique': 'bg-red-100 text-red-800',
    ANSSI: 'bg-green-100 text-green-800',
    'Formation en ligne': 'bg-teal-100 text-teal-800',
    Gestion: 'bg-indigo-100 text-indigo-800',
    Administration: 'bg-blue-100 text-blue-800',
    Bureautique: 'bg-gray-100 text-gray-800',
    'Communication professionnelle': 'bg-pink-100 text-pink-800',
    'Formation professionnelle': 'bg-teal-100 text-teal-800',
    Défense: 'bg-gray-100 text-gray-800',
    Citoyenneté: 'bg-green-100 text-green-800',
    'Service civique': 'bg-blue-100 text-blue-800',
    'Formation générale': 'bg-blue-100 text-blue-800',
    'Culture générale': 'bg-pink-100 text-pink-800',
    Mathématiques: 'bg-yellow-100 text-yellow-800',
    Français: 'bg-red-100 text-red-800',
  }
  return colorMap[tech] || 'bg-gray-100 text-gray-800'
}
</script>
