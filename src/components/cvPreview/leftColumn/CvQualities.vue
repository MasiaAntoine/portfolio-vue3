<script setup lang="ts">
import { profilData } from '@/datas/Profil'
</script>

<template>
  <!-- Qualités -->
  <div>
    <h3 class="text-sm font-bold text-gray-800 mb-2 flex items-center">
      <span class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
      Qualités
    </h3>
    <div class="flex flex-wrap gap-1">
      <span
        v-for="(quality, index) in profilData.qualities"
        :key="quality"
        :class="[
          'px-2 py-0.5 rounded-full text-[10px] font-medium',
          index % 6 === 0
            ? 'bg-blue-100 text-blue-800'
            : index % 6 === 1
              ? 'bg-green-100 text-green-800'
              : index % 6 === 2
                ? 'bg-purple-100 text-purple-800'
                : index % 6 === 3
                  ? 'bg-orange-100 text-orange-800'
                  : index % 6 === 4
                    ? 'bg-teal-100 text-teal-800'
                    : 'bg-pink-100 text-pink-800',
        ]"
      >
        {{ quality }}
      </span>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/css/cv.css';
</style>
