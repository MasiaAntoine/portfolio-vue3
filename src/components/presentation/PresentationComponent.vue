<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { presentationSkills } from '@/shared/Skills'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 300)
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center pt-8 pb-18 max-w-6xl mx-auto">
    <!-- Hero Section -->
    <div class="text-center space-y-8">
      <!-- Nom et titre -->
      <div
        class="transform transition-all duration-1000 delay-300"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }"
      >
        <h1 class="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
            >Masia</span
          >
          Antoine
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 font-light">Développeur Full Stack passionné</p>
      </div>

      <!-- Description courte -->
      <div
        class="max-w-2xl mx-auto transform transition-all duration-1000 delay-500"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }"
      >
        <p class="text-lg text-gray-700 leading-relaxed mb-8">
          Développeur Full Stack passionné depuis 2014, spécialisé dans la création de solutions web
          modernes et innovantes. Toujours en quête d'apprentissage et de nouveaux défis
          technologiques.
        </p>
      </div>

      <!-- Technologies principales (dynamiques) -->
      <div
        class="flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-700"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }"
      >
        <div
          v-for="skill in presentationSkills"
          :key="skill.name"
          class="bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300"
        >
          <div :class="`size-8 bg-${skill.color} rounded-full flex items-center justify-center`">
            <span class="text-white text-xs font-bold">{{ skill.icon }}</span>
          </div>
          <span class="font-medium text-gray-800">{{ skill.name }}</span>
        </div>
      </div>

      <!-- Stats en dur -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-1000"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }"
      >
        <div class="text-center">
          <div class="text-3xl font-bold text-blue-600 mb-2">11+</div>
          <div class="text-gray-600">Années de passion</div>
        </div>

        <div class="text-center">
          <div class="text-3xl font-bold text-green-600 mb-2">{{ presentationSkills.length }}+</div>
          <div class="text-gray-600">Technologies maîtrisées</div>
        </div>

        <div class="text-center">
          <div class="text-3xl font-bold text-purple-600 mb-2">BTS SIO</div>
          <div class="text-gray-600">Diplômé</div>
        </div>
      </div>
    </div>
  </div>
</template>
