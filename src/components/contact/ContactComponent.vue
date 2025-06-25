<script setup lang="ts">
import { ref } from 'vue'
import { profilData } from '@/shared/Profil'

// États réactifs pour contrôler l'affichage
const showEmail = ref(false)
const showPhone = ref(false)
const showLocation = ref(false)

// Fonctions pour révéler les informations
const revealEmail = () => {
  showEmail.value = true
}

const revealPhone = () => {
  showPhone.value = true
}

const revealLocation = () => {
  showLocation.value = true
}

// Fonction pour copier dans le presse-papiers
const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  }
}

// Fonction pour ouvrir un lien dans un nouvel onglet
const openSocialLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center pt-8 pb-18 max-w-6xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-800 mb-12">Contact</h1>

    <!-- Informations de contact -->
    <div class="space-y-8">
      <div>
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Restons en contact</h2>
        <p class="text-gray-600 mb-8">
          {{ profilData.contact.socialDescription }}
        </p>
      </div>

      <div class="space-y-6">
        <!-- Email -->
        <div class="flex items-center space-x-4">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <span class="text-blue-600 text-xl">📧</span>
          </div>
          <div class="flex-1">
            <h3 class="font-semibold text-gray-800">Email</h3>
            <div v-if="!showEmail" class="mt-2">
              <button
                @click="revealEmail"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Révéler l'email
              </button>
            </div>
            <div v-else class="mt-2">
              <p class="text-gray-600">{{ profilData.contact.email }}</p>
              <button
                @click="copyToClipboard(profilData.contact.email)"
                class="mt-1 px-3 py-1 bg-gray-200 text-gray-700 rounded text-xs hover:bg-gray-300 transition-colors"
              >
                Copier
              </button>
            </div>
          </div>
        </div>

        <!-- Téléphone -->
        <div class="flex items-center space-x-4">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <span class="text-green-600 text-xl">📱</span>
          </div>
          <div class="flex-1">
            <h3 class="font-semibold text-gray-800">Téléphone</h3>
            <div v-if="!showPhone" class="mt-2">
              <button
                @click="revealPhone"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                Révéler le téléphone
              </button>
            </div>
            <div v-else class="mt-2">
              <p class="text-gray-600">{{ profilData.contact.phone }}</p>
              <button
                @click="copyToClipboard(profilData.contact.phone)"
                class="mt-1 px-3 py-1 bg-gray-200 text-gray-700 rounded text-xs hover:bg-gray-300 transition-colors"
              >
                Copier
              </button>
            </div>
          </div>
        </div>

        <!-- Localisation -->
        <div class="flex items-center space-x-4">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <span class="text-purple-600 text-xl">📍</span>
          </div>
          <div class="flex-1">
            <h3 class="font-semibold text-gray-800">Localisation</h3>
            <div v-if="!showLocation" class="mt-2">
              <button
                @click="revealLocation"
                class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
              >
                Révéler la localisation
              </button>
            </div>
            <div v-else class="mt-2">
              <p class="text-gray-600">{{ profilData.contact.location }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Réseaux sociaux -->
      <div class="pt-8">
        <h3 class="font-semibold text-gray-800 mb-4">Suivez-moi</h3>
        <div class="flex space-x-4">
          <button
            v-for="social in profilData.contact.socialNetworks"
            :key="social.name"
            @click="openSocialLink(social.url)"
            :class="[
              'w-12 h-12 text-white rounded-lg transition-colors flex items-center justify-center',
              social.colorClass,
              social.hoverColorClass,
            ]"
            :title="social.name"
          >
            <component :is="social.icon" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
