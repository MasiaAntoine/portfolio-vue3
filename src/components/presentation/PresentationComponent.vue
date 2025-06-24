<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Animation du texte
const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 300)
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full p-8 max-w-6xl mx-auto">
    <!-- Hero Section -->
    <div class="text-center space-y-8">
      <!-- Avatar/Photo -->
      <div
        class="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 transform transition-all duration-1000"
        :class="{ 'scale-100 opacity-100': isVisible, 'scale-75 opacity-0': !isVisible }"
      >
        <div
          class="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl font-bold text-gray-800"
        >
          A
        </div>
      </div>

      <!-- Nom et titre -->
      <div
        class="transform transition-all duration-1000 delay-300"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }"
      >
        <h1 class="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Antoine
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
            >Dev</span
          >
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 font-light">Développeur Frontend passionné</p>
      </div>

      <!-- Description -->
      <div
        class="max-w-3xl mx-auto transform transition-all duration-1000 delay-500"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }"
      >
        <p class="text-lg text-gray-700 leading-relaxed mb-8">
          Créateur d'expériences web modernes et intuitives. Je transforme vos idées en applications
          performantes avec <span class="font-semibold text-blue-600">Vue.js</span>,
          <span class="font-semibold text-blue-600">TypeScript</span> et des technologies de pointe.
        </p>
      </div>

      <!-- Technologies principales -->
      <div
        class="flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-700"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }"
      >
        <div
          class="bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300"
        >
          <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">V</span>
          </div>
          <span class="font-medium text-gray-800">Vue.js</span>
        </div>

        <div
          class="bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300"
        >
          <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">TS</span>
          </div>
          <span class="font-medium text-gray-800">TypeScript</span>
        </div>

        <div
          class="bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300"
        >
          <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">T</span>
          </div>
          <span class="font-medium text-gray-800">Tailwind</span>
        </div>

        <div
          class="bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300"
        >
          <div class="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">JS</span>
          </div>
          <span class="font-medium text-gray-800">JavaScript</span>
        </div>
      </div>

      <!-- Stats -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-1000"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }"
      >
        <div class="text-center">
          <div class="text-3xl font-bold text-blue-600 mb-2">3+</div>
          <div class="text-gray-600">Années d'expérience</div>
        </div>

        <div class="text-center">
          <div class="text-3xl font-bold text-green-600 mb-2">20+</div>
          <div class="text-gray-600">Projets réalisés</div>
        </div>

        <div class="text-center">
          <div class="text-3xl font-bold text-purple-600 mb-2">100%</div>
          <div class="text-gray-600">Satisfaction client</div>
        </div>
      </div>

      <!-- Call to action -->
      <div
        class="flex flex-col sm:flex-row gap-4 justify-center mt-12 transform transition-all duration-1000 delay-1200"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }"
      >
        <button
          class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Voir mes projets
        </button>

        <button
          class="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transform hover:scale-105 transition-all duration-300"
        >
          Me contacter
        </button>
      </div>
    </div>
  </div>
</template>
