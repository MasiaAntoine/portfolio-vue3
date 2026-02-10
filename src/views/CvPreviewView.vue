<script setup lang="ts">
import { profilData } from '@/datas/Profil'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Loader2, ArrowLeft } from 'lucide-vue-next'
import { generatePDF, sanitizeFilename } from '@/shared/utils'
import CvHeader from '@/components/cvPreview/CvHeader.vue'
import CvLeftColumn from '@/components/cvPreview/leftColumn/CvLeftColumn.vue'
import CvRightColumn from '@/components/cvPreview/rightColumn/CvRightColumn.vue'

const router = useRouter()

const goBackToContact = () => {
  router.push({ name: 'home', hash: '#contact' })
}

const isGeneratingPDF = ref(false)
const generationStep = ref('')

const downloadCV = async () => {
  try {
    isGeneratingPDF.value = true

    const firstName = sanitizeFilename(profilData.personal.firstName)
    const lastName = sanitizeFilename(profilData.personal.lastName)
    const filename = `CV_${firstName}_${lastName}.pdf`

    await generatePDF({
      elementId: 'cv',
      filename,
      onProgress: (step: string) => {
        generationStep.value = step
      },
      onError: (error: Error) => {
        console.error('Erreur lors de la génération du PDF:', error)
        alert('Erreur lors de la génération du PDF. Veuillez réessayer.')
      },
    })
  } catch (error) {
    console.error('Erreur lors de la génération du PDF:', error)
    alert('Erreur lors de la génération du PDF. Veuillez réessayer.')
  } finally {
    isGeneratingPDF.value = false
    generationStep.value = ''
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4">
    <!-- Boutons de navigation -->
    <div class="cv-controls-container mb-6 flex justify-between items-center gap-2">
      <Button @click="goBackToContact" variant="outline" size="lg" class="shadow-md shrink-0">
        <ArrowLeft class="w-4 h-4 mr-2" />
        Retour
      </Button>

      <Button
        @click="downloadCV"
        :disabled="isGeneratingPDF"
        variant="gradient"
        size="lg"
        class="shadow-lg shrink-0"
      >
        <span v-if="!isGeneratingPDF" class="text-xl mr-2">⬇️</span>
        <Loader2 v-if="isGeneratingPDF" class="w-4 h-4 mr-2 animate-spin" />
        {{
          isGeneratingPDF ? generationStep || 'Génération en cours...' : 'Télécharger le CV (PDF)'
        }}
      </Button>
    </div>

    <!-- CV Container Wrapper -->
    <div class="cv-wrapper">
      <!-- CV Container -->
      <div
        id="cv"
        class="cv-a4-container bg-white shadow-2xl overflow-hidden relative font-inter"
      >
        <CvHeader />

        <div class="grid grid-cols-3 gap-0 h-[1002px]">
          <CvLeftColumn />
          <CvRightColumn />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/css/cv.css';

/* Container pour les contrôles */
.cv-controls-container {
  max-width: 794px;
  margin-left: auto;
  margin-right: auto;
}

/* Wrapper pour permettre le scroll horizontal sur mobile */
.cv-wrapper {
  width: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
}

/* Container A4 avec dimensions fixes */
.cv-a4-container {
  /* Format A4 : 210mm x 297mm à 96 DPI = 794px x 1122px */
  width: 794px;
  height: 1122px;
  min-width: 794px;
  flex-shrink: 0;
  border-radius: 8px;
}

/* Retirer les bords arrondis lors de l'impression/génération PDF */
@media print {
  .cv-a4-container {
    border-radius: 0;
  }
}

/* Sur mobile, centrer le CV et permettre le scroll */
@media (max-width: 850px) {
  .cv-wrapper {
    justify-content: flex-start;
    padding-left: max(1rem, calc((100vw - 794px) / 2));
    padding-right: 1rem;
  }

  .cv-controls-container {
    max-width: 100%;
    padding: 0 0.5rem;
  }
}

/* Amélioration du scroll sur mobile */
.cv-wrapper::-webkit-scrollbar {
  height: 8px;
}

.cv-wrapper::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.cv-wrapper::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.cv-wrapper::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
