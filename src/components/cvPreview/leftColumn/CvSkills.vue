<script setup lang="ts">
import { skills } from '@/datas/Skills'

const getLevelStars = (level: number) => {
  return Array.from({ length: 5 }, (_, i) => i < level)
}
</script>

<template>
  <!-- Compétences principales -->
  <div>
    <h3 class="text-sm font-bold text-gray-800 mb-2 flex items-center">
      <span class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
      Compétences clés
    </h3>
    <div class="space-y-3">
      <div v-for="category in skills" :key="category.name">
        <div v-if="category.skills.filter((skill) => skill.cv).length > 0">
          <h4 class="text-xs font-semibold text-gray-700 mb-1">{{ category.name }}</h4>
          <div class="space-y-1">
            <div
              v-for="skill in category.skills.filter((skill) => skill.cv)"
              :key="skill.name"
              class="flex justify-between items-center"
            >
              <span class="text-[10px] text-gray-600">{{ skill.name }}</span>
              <div class="flex space-x-0.5">
                <div
                  v-for="(filled, index) in getLevelStars(skill.level)"
                  :key="index"
                  :class="filled ? 'bg-blue-600' : 'bg-gray-300'"
                  class="w-1.5 h-1.5 rounded-full"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/cv.css';
</style>
