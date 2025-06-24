<template>
  <div class="min-h-screen flex flex-col items-center justify-center pt-8 pb-18 max-w-6xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-800 mb-12">Mon Expérience</h1>

    <div class="relative w-full">
      <!-- Timeline line -->
      <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

      <!-- Experience items -->
      <div class="space-y-8">
        <!-- Experience 1 -->
        <div class="relative flex items-start">
          <div
            class="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"
          ></div>
          <div class="ml-20 bg-white rounded-lg shadow-lg p-6 w-full">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h3 class="text-xl font-semibold text-gray-800">Développeur Frontend</h3>
              <span class="text-sm text-gray-500 bg-blue-100 px-3 py-1 rounded-full"
                >2023 - Présent</span
              >
            </div>
            <h4 class="text-lg text-blue-600 font-medium mb-2">Entreprise Tech</h4>
            <p class="text-gray-600 mb-4">
              Développement d'applications web modernes avec Vue.js et TypeScript. Collaboration
              avec l'équipe design pour créer des interfaces utilisateur intuitives.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Vue.js</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >TypeScript</span
              >
              <span class="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full"
                >Tailwind CSS</span
              >
              <span class="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full"
                >Figma</span
              >
            </div>
          </div>
        </div>

        <!-- Experience 2 -->
        <div class="relative flex items-start">
          <div
            class="absolute left-6 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg z-10"
          ></div>
          <div class="ml-20 bg-white rounded-lg shadow-lg p-6 w-full">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h3 class="text-xl font-semibold text-gray-800">Développeur Web Junior</h3>
              <span class="text-sm text-gray-500 bg-green-100 px-3 py-1 rounded-full"
                >2022 - 2023</span
              >
            </div>
            <h4 class="text-lg text-green-600 font-medium mb-2">Startup Digital</h4>
            <p class="text-gray-600 mb-4">
              Création de sites web responsives et développement de fonctionnalités e-commerce.
              Maintenance et optimisation des performances des applications existantes.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full"
                >JavaScript</span
              >
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">React</span>
              <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                >Node.js</span
              >
              <span class="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full"
                >WordPress</span
              >
            </div>
          </div>
        </div>

        <!-- Experience 3 -->
        <div class="relative flex items-start">
          <div
            class="absolute left-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10"
          ></div>
          <div class="ml-20 bg-white rounded-lg shadow-lg p-6 w-full">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h3 class="text-xl font-semibold text-gray-800">Stage Développement Web</h3>
              <span class="text-sm text-gray-500 bg-purple-100 px-3 py-1 rounded-full"
                >2021 - 2022</span
              >
            </div>
            <h4 class="text-lg text-purple-600 font-medium mb-2">Agence Web Locale</h4>
            <p class="text-gray-600 mb-4">
              Premier stage dans le développement web. Apprentissage des bases du HTML, CSS et
              JavaScript. Participation à la création de sites vitrines pour des clients locaux.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">HTML/CSS</span>
              <span class="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full"
                >JavaScript</span
              >
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >Bootstrap</span
              >
              <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">PHP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Composant Expériences
</script>
