<script setup lang="ts">
import { education } from '@/datas/Education'
import { computed } from 'vue'

// Calculer la taille de police globale en fonction de la description la plus longue
const globalDescriptionClass = computed(() => {
  const cvEducation = education
    .filter((e) => (e.category === 'diploma' || e.category === 'certification') && e.cv === true)
    .slice(0, 4)

  const maxLength = Math.max(
    ...cvEducation.map((edu) => (edu.description || '').length + (edu.details || '').length)
  )

  // Si la description la plus longue dépasse 280 caractères, toutes utilisent une police très petite
  if (maxLength > 280) {
    return 'text-[7px] leading-tight'
  }
  // Si la description la plus longue dépasse 200 caractères, toutes utilisent une police petite
  else if (maxLength > 200) {
    return 'text-[8px] leading-snug'
  }
  // Sinon, toutes utilisent la taille normale
  else {
    return 'text-[9px] leading-snug'
  }
})
</script>

<template>
  <!-- Formation -->
  <section>
    <h3 class="text-base font-bold text-gray-800 mb-3 flex items-center">
      <span class="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
      Formation & Certifications
    </h3>
    <div class="space-y-5">
      <div
        v-for="edu in education
          .filter(
            (e) => (e.category === 'diploma' || e.category === 'certification') && e.cv === true,
          )
          .slice(0, 4)"
        :key="edu.id"
        class="border rounded p-2.5 bg-gray-50 flex items-start gap-2 education-item"
      >
        <span class="text-base">{{ edu.icon }}</span>
        <div class="flex-1">
          <h4 class="font-semibold text-gray-800 text-[11px] leading-relaxed mb-0.5">
            {{ edu.title }}
          </h4>
          <p :class="['text-gray-600 mb-0.5', globalDescriptionClass]">{{ edu.institution }}</p>
          <p :class="['text-gray-500 mb-1', globalDescriptionClass]">{{ edu.date }}</p>
          <div v-if="edu.details" :class="['text-gray-700 mb-1', globalDescriptionClass]">
            {{ edu.details }}
          </div>
          <div class="flex flex-wrap gap-0.5">
            <span
              v-for="skill in edu.skills.slice(0, 4)"
              :key="skill"
              :class="edu.badgeBg"
              class="px-1.5 py-0.5 rounded text-[8px]"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import '@/assets/css/cv.css';
</style>
