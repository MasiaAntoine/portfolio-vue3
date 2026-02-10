<script setup lang="ts">
import CvExperiences from './CvExperiences.vue'
import CvEducation from './CvEducation.vue'
</script>

<template>
  <!-- Colonne de droite -->
  <div class="col-span-2 p-4 flex flex-col justify-between h-full">
    <CvExperiences />
    <CvEducation />
  </div>
</template>

<style scoped>
@import '@/assets/css/cv.css';
</style>
