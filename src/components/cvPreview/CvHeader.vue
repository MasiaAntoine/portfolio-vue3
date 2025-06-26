<script setup lang="ts">
import { profilData } from '@/datas/Profil'
</script>

<template>
  <!-- En-tête -->
  <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-5 h-[120px]">
    <div class="flex flex-col md:flex-row items-center gap-2 h-full">
      <div class="flex-1">
        <h1 class="text-xl font-bold">
          {{ profilData.personal.firstName }} {{ profilData.personal.lastName }}
        </h1>
        <h2 class="text-lg font-light opacity-90">
          {{ profilData.personal.title }}
        </h2>
        <p class="text-[10px] leading-relaxed opacity-90 w-[90%]">
          {{ profilData.personal.description }}
        </p>
      </div>

      <!-- Statistiques -->
      <div class="flex flex-row md:flex-col gap-1 text-center">
        <div class="bg-white/10 rounded p-1.5 backdrop-blur-sm">
          <div class="text-sm font-bold">
            {{ profilData.stats.yearsOfExperience }}
          </div>
          <div class="text-[8px] opacity-80">Années d'exp.</div>
        </div>
        <div class="bg-white/10 rounded p-1.5 backdrop-blur-sm">
          <div class="text-sm font-bold">
            {{ profilData.stats.technologiesMastered }}
          </div>
          <div class="text-[8px] opacity-80">Technologies</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/css/cv.css';
</style>
