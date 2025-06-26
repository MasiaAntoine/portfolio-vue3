<script setup lang="ts">
import CvAbout from './CvAbout.vue'
import CvContact from './CvContact.vue'
import CvSocialNetworks from './CvSocialNetworks.vue'
import CvQualities from './CvQualities.vue'
import CvSkills from './CvSkills.vue'
import CvQrCode from './CvQrCode.vue'
</script>

<template>
  <!-- Colonne de gauche -->
  <div class="bg-gray-50 flex flex-col p-4 justify-between">
    <div class="col-span-1 flex flex-col gap-4">
      <CvAbout />
      <CvContact />
      <CvSocialNetworks />
      <CvQualities />
      <CvSkills />
    </div>

    <CvQrCode />
  </div>
</template>

<style scoped>
@import '@/assets/css/cv.css';
</style>
