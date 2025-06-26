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
    <div class="max-w-4xl mx-auto mb-6 flex justify-between items-center">
      <Button @click="goBackToContact" variant="outline" size="lg" class="shadow-md">
        <ArrowLeft class="w-4 h-4 mr-2" />
        Retour
      </Button>

      <Button
        @click="downloadCV"
        :disabled="isGeneratingPDF"
        variant="gradient"
        size="lg"
        class="shadow-lg"
      >
        <span v-if="!isGeneratingPDF" class="text-xl mr-2">⬇️</span>
        <Loader2 v-if="isGeneratingPDF" class="w-4 h-4 mr-2 animate-spin" />
        {{
          isGeneratingPDF ? generationStep || 'Génération en cours...' : 'Télécharger le CV (PDF)'
        }}
      </Button>
    </div>

    <!-- CV Container -->
    <div
      id="cv"
      class="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden relative h-[1122px] font-inter"
    >
      <CvHeader />

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-0 h-[1002px]">
        <CvLeftColumn />
        <CvRightColumn />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/cv.css';
</style>
