<script setup lang="ts">
import { experiences } from '@/datas/Experiences'
</script>

<template>
  <!-- Expériences -->
  <section>
    <h3 class="text-base font-bold text-gray-800 mb-3 flex items-center">
      <span class="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
      Expériences professionnelles
    </h3>
    <div class="space-y-3">
      <div
        v-for="experience in experiences.filter((exp) => exp.cv === true)"
        :key="experience.id"
        class="border-l-2 border-gray-200 pl-4 relative"
      >
        <div
          :class="`absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-${experience.color}-600`"
        ></div>
        <div class="mb-1">
          <h4 class="text-xs font-semibold text-gray-800">{{ experience.title }}</h4>
          <div class="flex flex-wrap items-center gap-1 text-[11px] text-gray-600 mb-1">
            <span class="font-medium">{{ experience.company }}</span>
            <span class="px-1.5 py-0.5 bg-gray-100 rounded text-[9px]">{{ experience.type }}</span>
          </div>
          <div class="flex flex-wrap items-center gap-3 text-[9px] text-gray-500 mb-2">
            <span>📅 {{ experience.period }}</span>
            <span>📍 {{ experience.location }}</span>
          </div>
        </div>
        <p class="text-gray-700 text-[11px] leading-relaxed mb-2">
          {{ experience.description }}
        </p>
        <div class="flex flex-wrap gap-0.5">
          <span
            v-for="skill in experience.skills.slice(0, 8)"
            :key="skill"
            class="px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded text-[9px]"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import '@/assets/css/cv.css';
</style>
