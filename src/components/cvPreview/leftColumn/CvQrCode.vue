<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { profilData } from '@/datas/Profil'
import QRCode from 'qrcode'

const qrCodeDataUrl = ref('')

onMounted(async () => {
  try {
    qrCodeDataUrl.value = await QRCode.toDataURL(profilData.personal.urlPortfolio, {
      width: 124,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
    })
  } catch (error) {
    console.error('Erreur lors de la génération du QR code:', error)
  }
})
</script>

<template>
  <!-- QR Code -->
  <div class="w-full">
    <div class="bg-white w-20 p-1.5 rounded shadow border mx-auto">
      <img
        v-if="qrCodeDataUrl"
        :src="qrCodeDataUrl"
        alt="QR Code Portfolio"
        class="size-10 mx-auto"
      />
      <p class="text-[8px] text-gray-600 text-center mt-0.5">
        {{ profilData.personal.urlPortfolio }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/css/cv.css';
</style>
