<script setup lang="ts">
import { profilData } from '@/shared/Profil'
import { skills } from '@/shared/Skills'
import { education } from '@/shared/Education'
import { experiences } from '@/shared/Experiences'
import { ref, onMounted } from 'vue'
import QRCode from 'qrcode'
import html2canvas from 'html2canvas-pro'
import jsPDF from 'jspdf'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-vue-next'

const getLevelStars = (level: number) => {
  return Array.from({ length: 5 }, (_, i) => i < level)
}

const isGeneratingPDF = ref(false)

const downloadCV = async () => {
  try {
    isGeneratingPDF.value = true
    const element = document.getElementById('cv')
    if (!element) return

    await document.fonts.ready

    const canvas = await html2canvas(element, {
      scale: 5,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: element.scrollWidth,
      height: element.scrollHeight,
      letterRendering: true,
      logging: false,
      removeContainer: false,
      foreignObjectRendering: false,
    })

    // Créer le PDF avec jsPDF
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    })

    const imgWidth = 210
    const imgHeight = 297

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)

    pdf.save(`CV_${profilData.personal.firstName}_${profilData.personal.lastName}.pdf`)
  } catch (error) {
    console.error('Erreur lors de la génération du PDF:', error)
    alert('Erreur lors de la génération du PDF. Veuillez réessayer.')
  } finally {
    isGeneratingPDF.value = false
  }
}

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
  <div class="min-h-screen bg-gray-50 py-8 px-4">
    <!-- Bouton de téléchargement -->
    <div class="max-w-4xl mx-auto mb-6">
      <Button
        @click="downloadCV"
        :disabled="isGeneratingPDF"
        variant="gradient"
        size="lg"
        class="shadow-lg"
      >
        <span v-if="!isGeneratingPDF" class="text-xl mr-2">⬇️</span>
        <Loader2 v-if="isGeneratingPDF" class="w-4 h-4 mr-2 animate-spin" />
        {{ isGeneratingPDF ? 'Génération en cours...' : 'Télécharger le CV (PDF)' }}
      </Button>
    </div>

    <!-- CV Container -->
    <div
      id="cv"
      class="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden relative h-[1122px]"
    >
      <!-- En-tête -->
      <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 h-[120px]">
        <div class="flex flex-col md:flex-row items-center gap-2 h-full">
          <div class="flex-1">
            <h1 class="text-xl font-bold mb-1">
              {{ profilData.personal.firstName }} {{ profilData.personal.lastName }}
            </h1>
            <h2 class="text-xs font-light mb-1 opacity-90">
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

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-0 h-[1002px]">
        <!-- Colonne de gauche -->
        <div class="bg-gray-50 flex flex-col p-4 justify-between">
          <div class="col-span-1 flex flex-col gap-4">
            <!-- À propos -->
            <div>
              <h3 class="text-sm font-bold text-gray-800 mb-2 flex items-center">
                <span class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                À propos
              </h3>
              <p class="text-gray-700 text-[10px] leading-relaxed mb-2">
                {{ profilData.personal.aboutDescription }}
              </p>
              <div class="bg-blue-50 border-l-2 border-blue-600 p-1.5 rounded-r">
                <p class="text-blue-800 text-[10px] italic font-medium">
                  "{{ profilData.personal.quote }}"
                </p>
              </div>
            </div>

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

            <!-- Compétences principales -->
            <div>
              <h3 class="text-sm font-bold text-gray-800 mb-2 flex items-center">
                <span class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                Compétences clés
              </h3>
              <div class="space-y-2">
                <div v-for="category in skills" :key="category.name">
                  <div v-if="category.skills.filter((skill) => skill.cv).length > 0">
                    <h4 class="text-xs font-semibold text-gray-700 mb-1">{{ category.name }}</h4>
                    <div class="space-y-1">
                      <div
                        v-for="skill in category.skills.filter((skill) => skill.cv)"
                        :key="skill.name"
                        class="flex justify-between items-center"
                      >
                        <span class="text-[10px] text-gray-600">{{ skill.name }}</span>
                        <div class="flex space-x-0.5">
                          <div
                            v-for="(filled, index) in getLevelStars(skill.level)"
                            :key="index"
                            :class="filled ? 'bg-blue-600' : 'bg-gray-300'"
                            class="w-1.5 h-1.5 rounded-full"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
        </div>

        <!-- Colonne de droite -->
        <div class="col-span-2 p-4 flex flex-col gap-5">
          <!-- Expériences -->
          <section>
            <h3 class="text-lg font-bold text-gray-800 mb-3 flex items-center">
              <span class="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Expériences professionnelles
            </h3>
            <div class="space-y-3">
              <div
                v-for="experience in experiences.filter((exp) => exp.cv === true)"
                :key="experience.id"
                class="border-l-2 border-gray-200 pl-4 relative"
              >
                <div
                  :class="`absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-${experience.color}-600`"
                ></div>
                <div class="mb-1">
                  <h4 class="text-sm font-semibold text-gray-800">{{ experience.title }}</h4>
                  <div class="flex flex-wrap items-center gap-1 text-xs text-gray-600 mb-1">
                    <span class="font-medium">{{ experience.company }}</span>
                    <span class="px-1.5 py-0.5 bg-gray-100 rounded text-[10px]">{{
                      experience.type
                    }}</span>
                  </div>
                  <div class="flex flex-wrap items-center gap-3 text-[10px] text-gray-500 mb-2">
                    <span>📅 {{ experience.period }}</span>
                    <span>📍 {{ experience.location }}</span>
                  </div>
                </div>
                <p class="text-gray-700 text-xs leading-relaxed mb-2">
                  {{ experience.description }}
                </p>
                <div class="flex flex-wrap gap-0.5">
                  <span
                    v-for="skill in experience.skills.slice(0, 8)"
                    :key="skill"
                    class="px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded text-[10px]"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <!-- Formation -->
          <section>
            <h3 class="text-lg font-bold text-gray-800 mb-3 flex items-center">
              <span class="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Formation & Certifications
            </h3>
            <div class="space-y-2">
              <div
                v-for="edu in education
                  .filter(
                    (e) =>
                      (e.category === 'diploma' || e.category === 'certification') && e.cv === true,
                  )
                  .slice(0, 8)"
                :key="edu.id"
                class="border rounded p-2.5 bg-gray-50 flex items-start gap-2"
              >
                <span class="text-lg">{{ edu.icon }}</span>
                <div class="flex-1">
                  <h4 class="font-semibold text-gray-800 text-xs leading-relaxed mb-0.5">
                    {{ edu.title }}
                  </h4>
                  <p class="text-[10px] text-gray-600 mb-0.5">{{ edu.institution }}</p>
                  <p class="text-[10px] text-gray-500 mb-1">{{ edu.date }}</p>
                  <div v-if="edu.details" class="text-[10px] text-gray-700 mb-1 line-clamp-2">
                    {{ edu.details }}
                  </div>
                  <div class="flex flex-wrap gap-0.5">
                    <span
                      v-for="skill in edu.skills.slice(0, 4)"
                      :key="skill"
                      :class="edu.badgeBg"
                      class="px-1.5 py-0.5 rounded text-[9px]"
                    >
                      {{ skill }}
                    </span>
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

/* Classe utilitaire pour limiter le texte */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Amélioration du rendu pour PDF */
#cv {
  font-feature-settings: 'kern' 1;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#cv * {
  letter-spacing: 0.01em;
  word-spacing: 0.05em;
}

/* Espacement spécifique pour les petits textes */
#cv .text-\[10px\] {
  letter-spacing: 0.02em;
  word-spacing: 0.08em;
  line-height: 1.4;
}

#cv .text-xs {
  letter-spacing: 0.015em;
  word-spacing: 0.06em;
  line-height: 1.3;
}

#cv .text-\[8px\] {
  letter-spacing: 0.025em;
  word-spacing: 0.1em;
  line-height: 1.5;
}

#cv .text-\[9px\] {
  letter-spacing: 0.02em;
  word-spacing: 0.08em;
  line-height: 1.4;
}
</style>
