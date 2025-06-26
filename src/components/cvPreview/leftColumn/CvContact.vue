<script setup lang="ts">
import { profilData } from '@/datas/Profil'
</script>

<template>
  <!-- Contact -->
  <div>
    <h3 class="text-sm font-bold text-gray-800 mb-2 flex items-center">
      <span class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
      Contact
    </h3>
    <div class="space-y-1.5 text-xs">
      <div class="flex items-center gap-1.5">
        <span class="text-blue-600">📧</span>
        <span class="text-gray-700">{{ profilData.contact.email }}</span>
      </div>
      <div class="flex items-center gap-1.5">
        <span class="text-blue-600">📱</span>
        <span class="text-gray-700">{{ profilData.contact.phone }}</span>
      </div>
      <div class="flex items-center gap-1.5">
        <span class="text-blue-600">📍</span>
        <span class="text-gray-700">{{ profilData.contact.location }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/cv.css';
</style>
