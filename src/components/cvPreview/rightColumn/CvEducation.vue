<script setup lang="ts">
import { education } from '@/datas/Education'
</script>

<template>
  <!-- Formation -->
  <section>
    <h3 class="text-base font-bold text-gray-800 mb-3 flex items-center">
      <span class="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
      Formation & Certifications
    </h3>
    <div class="space-y-2">
      <div
        v-for="edu in education
          .filter(
            (e) => (e.category === 'diploma' || e.category === 'certification') && e.cv === true,
          )
          .slice(0, 8)"
        :key="edu.id"
        class="border rounded p-2.5 bg-gray-50 flex items-start gap-2"
      >
        <span class="text-base">{{ edu.icon }}</span>
        <div class="flex-1">
          <h4 class="font-semibold text-gray-800 text-[11px] leading-relaxed mb-0.5">
            {{ edu.title }}
          </h4>
          <p class="text-[9px] text-gray-600 mb-0.5">{{ edu.institution }}</p>
          <p class="text-[9px] text-gray-500 mb-1">{{ edu.date }}</p>
          <div v-if="edu.details" class="text-[9px] text-gray-700 mb-1 line-clamp-2">
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
