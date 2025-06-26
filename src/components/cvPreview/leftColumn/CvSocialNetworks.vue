<script setup lang="ts">
import { profilData } from '@/datas/Profil'
</script>

<template>
  <!-- Réseaux sociaux -->
  <div>
    <h3 class="text-sm font-bold text-gray-800 mb-2 flex items-center">
      <span class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
      Réseaux
    </h3>
    <div class="space-y-1 text-xs">
      <div
        v-for="social in profilData.contact.socialNetworks"
        :key="social.name"
        class="flex items-center gap-1.5"
      >
        <component :is="social.icon" class="w-3 h-3 text-blue-600" />
        <span class="text-gray-700 text-[10px] break-all">{{ social.url }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/css/cv.css';
</style>
