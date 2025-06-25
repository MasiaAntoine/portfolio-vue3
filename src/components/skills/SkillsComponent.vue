<script setup lang="ts">
import { skills } from '@/shared/Skills'

// Fonction pour générer les étoiles de niveau
const getLevelStars = (level: number) => {
  return Array.from({ length: 5 }, (_, i) => i < level)
}
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center pt-8 pb-18 px-4 sm:px-26 max-w-6xl mx-auto"
  >
    <h1 class="text-4xl font-bold text-gray-800 mb-12">Mes Compétences</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      <!-- Catégories dynamiques -->
      <div
        v-for="category in skills"
        :key="category.name"
        class="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <span :class="`w-3 h-3 rounded-full mr-3 ${category.color}`"></span>
          {{ category.name }}
        </h3>
        <div class="space-y-3">
          <div
            v-for="skill in category.skills"
            :key="skill.name"
            class="flex justify-between items-center"
          >
            <span class="text-gray-700">{{ skill.name }}</span>
            <div class="flex space-x-1">
              <div
                v-for="(filled, index) in getLevelStars(skill.level)"
                :key="index"
                :class="filled ? 'bg-green-500' : 'bg-gray-300'"
                class="w-3 h-3 rounded-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
