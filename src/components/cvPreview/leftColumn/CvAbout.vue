<script setup lang="ts">
import { profilData } from '@/datas/Profil'
</script>

<template>
  <!-- À propos -->
  <div>
    <h3 class="text-xs font-bold text-gray-800 mb-2 flex items-center">
      <span class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
      À propos
    </h3>
    <p class="text-gray-700 text-[9px] leading-relaxed mb-2">
      {{ profilData.personal.aboutDescription }}
    </p>
    <div class="bg-blue-50 border-l-2 border-blue-600 p-1.5 rounded-r">
      <p class="text-blue-800 text-[9px] italic font-medium">"{{ profilData.personal.quote }}"</p>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/css/cv.css';
</style>
