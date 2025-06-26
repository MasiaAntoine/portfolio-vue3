<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center pt-8 pb-18 px-4 sm:px-26 max-w-6xl mx-auto"
  >
    <h1 class="text-4xl font-bold text-gray-800 mb-12">Mes Projets</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div :class="`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`">
          <span class="text-white text-2xl font-bold">{{ project.displayName }}</span>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ project.title }}</h3>
          <p class="text-gray-600 mb-4">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              :class="getTechColor(tech)"
              class="px-3 py-1 text-sm rounded-full"
            >
              {{ tech }}
            </span>
          </div>
          <div class="flex gap-3">
            <Button
              v-if="project.githubUrl"
              :as="'a'"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              class="flex-1"
            >
              Voir le code
            </Button>
            <Button
              v-if="project.demoUrl"
              :as="'a'"
              :href="project.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              class="flex-1"
            >
              Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '@/datas/Projects'
import { Button } from '@/components/ui/button'

const getTechColor = (tech: string): string => {
  const colorMap: Record<string, string> = {
    'Vue 3': 'bg-green-100 text-green-800',
    'Vue.js': 'bg-green-100 text-green-800',
    TypeScript: 'bg-blue-100 text-blue-800',
    Tailwind: 'bg-purple-100 text-purple-800',
    'Tailwind CSS': 'bg-purple-100 text-purple-800',
    'Node.js': 'bg-yellow-100 text-yellow-800',
    MongoDB: 'bg-green-100 text-green-800',
    React: 'bg-cyan-100 text-cyan-800',
    'Chart.js': 'bg-blue-100 text-blue-800',
    Express: 'bg-red-100 text-red-800',
    Shadcn: 'bg-slate-100 text-slate-800',
    Rust: 'bg-orange-100 text-orange-800',
    Tauri: 'bg-amber-100 text-amber-800',
    Laravel: 'bg-red-100 text-red-800',
    PHP: 'bg-indigo-100 text-indigo-800',
    MySQL: 'bg-blue-100 text-blue-800',
    'REST API': 'bg-teal-100 text-teal-800',
    Postman: 'bg-orange-100 text-orange-800',
    Arduino: 'bg-cyan-100 text-cyan-800',
    ESP32: 'bg-purple-100 text-purple-800',
    'C++': 'bg-blue-100 text-blue-800',
    WiFi: 'bg-green-100 text-green-800',
    HX711: 'bg-yellow-100 text-yellow-800',
    IoT: 'bg-emerald-100 text-emerald-800',
    PWA: 'bg-violet-100 text-violet-800',
    'Web Development': 'bg-gray-100 text-gray-800',
    HTML: 'bg-orange-100 text-orange-800',
    CSS: 'bg-blue-100 text-blue-800',
    Capacitor: 'bg-indigo-100 text-indigo-800',
    iOS: 'bg-gray-100 text-gray-800',
    Android: 'bg-green-100 text-green-800',
  }

  return colorMap[tech] || 'bg-gray-100 text-gray-800'
}
</script>
