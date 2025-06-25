<script setup lang="ts">
import { profilData } from '@/shared/Profil'
import { skills } from '@/shared/Skills'
import { education } from '@/shared/Education'
import { experiences } from '@/shared/Experiences'
import { ref, onMounted } from 'vue'
import QRCode from 'qrcode'

// Fonction pour générer les étoiles de niveau
const getLevelStars = (level: number) => {
  return Array.from({ length: 5 }, (_, i) => i < level)
}

// Fonction pour imprimer le CV
const printCV = () => {
  window.print()
}

// QR Code
const qrCodeDataUrl = ref('')

onMounted(async () => {
  try {
    // Générer le QR code pour l'URL du portfolio
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
  <div class="min-h-screen bg-gray-50 py-8 px-4">
    <!-- Bouton d'impression -->
    <div class="max-w-4xl mx-auto mb-6">
      <button
        @click="printCV"
        class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg"
      >
        <span class="text-xl">🖨️</span>
        Imprimer le CV
      </button>
    </div>

    <!-- CV Container -->
    <div class="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden relative">
      <!-- En-tête -->
      <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4">
        <div class="flex flex-col md:flex-row items-center gap-3">
          <div class="flex-1">
            <h1 class="text-2xl font-bold mb-1">
              {{ profilData.personal.firstName }} {{ profilData.personal.lastName }}
            </h1>
            <h2 class="text-sm font-light mb-2 opacity-90">
              {{ profilData.personal.title }}
            </h2>
            <p class="text-xs leading-relaxed opacity-90 w-[90%]">
              {{ profilData.personal.description }}
            </p>
          </div>

          <!-- Statistiques -->
          <div class="flex flex-row md:flex-col gap-2 text-center">
            <div class="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
              <div class="text-lg font-bold">
                {{ profilData.stats.yearsOfExperience }}
              </div>
              <div class="text-[10px] opacity-80">Années d'exp.</div>
            </div>
            <div class="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
              <div class="text-lg font-bold">
                {{ profilData.stats.technologiesMastered }}
              </div>
              <div class="text-[10px] opacity-80">Technologies</div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-0">
        <!-- Colonne de gauche -->
        <div class="lg:col-span-1 bg-gray-50 p-6 flex flex-col">
          <!-- Contact -->
          <div class="mb-8">
            <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <span class="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Contact
            </h3>
            <div class="space-y-3 text-sm">
              <div class="flex items-center gap-2">
                <span class="text-blue-600">📧</span>
                <span class="text-gray-700">{{ profilData.contact.email }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-blue-600">📱</span>
                <span class="text-gray-700">{{ profilData.contact.phone }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-blue-600">📍</span>
                <span class="text-gray-700">{{ profilData.contact.location }}</span>
              </div>
            </div>
          </div>

          <!-- Réseaux sociaux -->
          <div class="mb-8">
            <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <span class="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Réseaux
            </h3>
            <div class="space-y-2 text-sm">
              <div
                v-for="social in profilData.contact.socialNetworks"
                :key="social.name"
                class="flex items-center gap-2"
              >
                <component :is="social.icon" class="w-4 h-4 text-blue-600" />
                <span class="text-gray-700 text-xs break-all">{{ social.url }}</span>
              </div>
            </div>
          </div>

          <!-- Qualités -->
          <div class="mb-8">
            <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <span class="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Qualités
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(quality, index) in profilData.qualities"
                :key="quality"
                :class="[
                  'px-3 py-1 rounded-full text-xs font-medium',
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

          <!-- Compétences principales -->
          <div class="mb-8">
            <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <span class="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Compétences clés
            </h3>
            <div class="space-y-4">
              <div v-for="category in skills" :key="category.name">
                <div v-if="category.skills.filter((skill) => skill.cv).length > 0">
                  <h4 class="text-sm font-semibold text-gray-700 mb-2">{{ category.name }}</h4>
                  <div class="space-y-2">
                    <div
                      v-for="skill in category.skills.filter((skill) => skill.cv)"
                      :key="skill.name"
                      class="flex justify-between items-center"
                    >
                      <span class="text-xs text-gray-600">{{ skill.name }}</span>
                      <div class="flex space-x-1">
                        <div
                          v-for="(filled, index) in getLevelStars(skill.level)"
                          :key="index"
                          :class="filled ? 'bg-blue-600' : 'bg-gray-300'"
                          class="w-2 h-2 rounded-full"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- QR Code -->
          <div class="w-full mt-auto">
            <div class="bg-white w-[9rem] p-2 rounded-lg shadow-lg border mx-auto">
              <img
                v-if="qrCodeDataUrl"
                :src="qrCodeDataUrl"
                alt="QR Code Portfolio"
                class="size-24 mx-auto"
              />
              <p class="text-[9px] text-gray-600 text-center mt-1">
                {{ profilData.personal.urlPortfolio }}
              </p>
            </div>
          </div>
        </div>

        <!-- Colonne de droite -->
        <div class="lg:col-span-2 p-6">
          <!-- À propos -->
          <section class="mb-8">
            <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
              À propos
            </h3>
            <p class="text-gray-700 text-sm leading-relaxed mb-4">
              {{ profilData.personal.aboutDescription }}
            </p>
            <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
              <p class="text-blue-800 text-sm italic font-medium">
                "{{ profilData.personal.quote }}"
              </p>
            </div>
          </section>

          <!-- Expériences -->
          <section class="mb-8">
            <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
              Expériences professionnelles
            </h3>
            <div class="space-y-6">
              <div
                v-for="experience in experiences.filter((exp) => exp.cv === true)"
                :key="experience.id"
                class="border-l-2 border-gray-200 pl-6 relative"
              >
                <div
                  :class="`absolute -left-2 top-0 w-4 h-4 rounded-full bg-${experience.color}-600`"
                ></div>
                <div class="mb-2">
                  <h4 class="text-lg font-semibold text-gray-800">{{ experience.title }}</h4>
                  <div class="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-2">
                    <span class="font-medium">{{ experience.company }}</span>
                    <span class="px-2 py-1 bg-gray-100 rounded text-xs">{{ experience.type }}</span>
                  </div>
                  <div class="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-3">
                    <span>📅 {{ experience.period }}</span>
                    <span>📍 {{ experience.location }}</span>
                  </div>
                </div>
                <p class="text-gray-700 text-sm leading-relaxed mb-3">
                  {{ experience.description }}
                </p>
                <div class="flex flex-wrap gap-1">
                  <span
                    v-for="skill in experience.skills.slice(0, 8)"
                    :key="skill"
                    class="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <!-- Formation -->
          <section>
            <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
              Formation & Certifications
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="edu in education
                  .filter(
                    (e) =>
                      (e.category === 'diploma' || e.category === 'certification') && e.cv === true,
                  )
                  .slice(0, 6)"
                :key="edu.id"
                class="border rounded-lg p-4 bg-gray-50"
              >
                <div class="flex items-start gap-3">
                  <span class="text-2xl">{{ edu.icon }}</span>
                  <div class="flex-1">
                    <h4 class="font-semibold text-gray-800 text-sm leading-tight mb-1">
                      {{ edu.title }}
                    </h4>
                    <p class="text-xs text-gray-600 mb-1">{{ edu.institution }}</p>
                    <p class="text-xs text-gray-500 mb-2">{{ edu.date }}</p>
                    <div v-if="edu.details" class="text-xs text-gray-700 mb-2">
                      {{ edu.details }}
                    </div>
                    <div class="flex flex-wrap gap-1">
                      <span
                        v-for="skill in edu.skills.slice(0, 3)"
                        :key="skill"
                        :class="edu.badgeBg"
                        class="px-2 py-1 rounded text-xs"
                      >
                        {{ skill }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media print {
  body {
    background: white !important;
  }

  .break-inside-avoid {
    break-inside: avoid;
  }

  .break-before-page {
    break-before: page;
  }
}
</style>
