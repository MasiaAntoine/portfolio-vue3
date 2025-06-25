<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { presentationSkills } from '@/shared/Skills'
import { profilData } from '@/shared/Profil'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-vue-next'

const isVisible = ref(false)
const showAllSkills = ref(false)

const shouldShowToggle = computed(() => presentationSkills.length > 14)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 300)
})
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center pt-8 pb-18 px-4 sm:px-26 max-w-6xl mx-auto"
  >
    <!-- Hero Section -->
    <div class="text-center space-y-8">
      <!-- Nom et titre -->
      <div
        class="transform transition-all duration-1000 delay-300"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }"
      >
        <h1 class="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
            >{{ profilData.personal.lastName }}</span
          >
          {{ profilData.personal.firstName }}
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 font-light">{{ profilData.personal.title }}</p>
      </div>

      <!-- Description courte -->
      <div
        class="max-w-2xl mx-auto transform transition-all duration-1000 delay-500 relative z-10 flex flex-col sm:flex-row gap-4 items-center"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }"
      >
        <p class="text-lg text-gray-700 leading-relaxed">
          {{ profilData.personal.description }}
        </p>
        <img src="@/assets/images/fascinate.png" alt="fascinate illustration" class="w-[16rem]" />
      </div>

      <!-- Technologies principales (dynamiques) -->
      <div
        class="transform transition-all duration-1000 delay-700"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }"
      >
        <div class="flex flex-wrap justify-center gap-4 mb-6 relative">
          <div
            v-for="skill in presentationSkills.slice(0, 10)"
            :key="skill.name"
            class="bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300 relative z-10"
          >
            <div :class="`size-8 ${skill.color} rounded-full flex items-center justify-center`">
              <span class="text-white text-xs font-bold">{{ skill.icon }}</span>
            </div>
            <span class="font-medium text-gray-800">{{ skill.name }}</span>
          </div>

          <transition-group name="fade-slide" tag="div" class="contents">
            <div
              v-for="(skill, index) in presentationSkills.slice(10)"
              v-show="showAllSkills"
              :key="skill.name"
              class="bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300"
              :style="showAllSkills ? { transitionDelay: `${index * 50}ms` } : {}"
            >
              <div :class="`size-8 ${skill.color} rounded-full flex items-center justify-center`">
                <span class="text-white text-xs font-bold">{{ skill.icon }}</span>
              </div>
              <span class="font-medium text-gray-800">{{ skill.name }}</span>
            </div>
          </transition-group>
        </div>

        <!-- Bouton Voir plus / Voir moins -->
        <div v-if="shouldShowToggle" class="text-center mb-6">
          <Button variant="gradient" @click="showAllSkills = !showAllSkills" class="px-6 py-2">
            <span class="mr-2">{{ showAllSkills ? 'Voir moins' : 'Voir plus' }}</span>
            <ChevronDown
              :class="{ 'rotate-180': showAllSkills }"
              class="w-4 h-4 transition-transform duration-300"
            />
          </Button>
        </div>
      </div>

      <!-- Stats en dur -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-1000"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }"
      >
        <div class="text-center">
          <div class="text-3xl font-bold text-blue-600 mb-2">
            {{ profilData.stats.yearsOfExperience }}+
          </div>
          <div class="text-gray-600">Années de passion</div>
        </div>

        <div class="text-center">
          <div class="text-3xl font-bold text-green-600 mb-2">
            {{ profilData.stats.technologiesMastered }}+
          </div>
          <div class="text-gray-600">Technologies maîtrisées</div>
        </div>

        <div class="text-center">
          <div class="text-3xl font-bold text-purple-600 mb-2">{{ profilData.stats.diploma }}</div>
          <div class="text-gray-600">Diplômé</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-slide-enter-active {
  transition: all 0.4s ease-out;
}

.fade-slide-leave-active {
  transition: none;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px) scale(0.9);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.9);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
