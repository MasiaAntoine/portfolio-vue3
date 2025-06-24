<template>
  <div class="flex flex-col items-center justify-center h-full p-8 max-w-6xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-800 mb-12">Formation</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      <!-- Formation 1 -->
      <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
            <span class="text-white font-bold text-xl">🎓</span>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-800">Master Informatique</h3>
            <p class="text-blue-600 font-medium">Université de Technologie</p>
          </div>
        </div>
        <div class="mb-4">
          <span
            class="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            2022 - 2024
          </span>
        </div>
        <p class="text-gray-600 mb-4">
          Spécialisation en développement web et applications mobiles. Projets en équipe,
          méthodologies agiles, et technologies modernes.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Développement Web</span>
          <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Base de données</span>
          <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Gestion de projet</span>
        </div>
      </div>

      <!-- Formation 2 -->
      <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
            <span class="text-white font-bold text-xl">📚</span>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-800">DUT Informatique</h3>
            <p class="text-green-600 font-medium">IUT Technologique</p>
          </div>
        </div>
        <div class="mb-4">
          <span
            class="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            2020 - 2022
          </span>
        </div>
        <p class="text-gray-600 mb-4">
          Formation technique complète en informatique avec focus sur la programmation et le
          développement d'applications.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Algorithmique</span>
          <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Programmation</span>
          <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Réseaux</span>
        </div>
      </div>

      <!-- Certification 1 -->
      <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
            <span class="text-white font-bold text-xl">🏆</span>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-800">Certification Vue.js</h3>
            <p class="text-purple-600 font-medium">Vue School</p>
          </div>
        </div>
        <div class="mb-4">
          <span
            class="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            2023
          </span>
        </div>
        <p class="text-gray-600 mb-4">
          Certification officielle Vue.js couvrant les concepts avancés du framework et les bonnes
          pratiques de développement.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Vue 3</span>
          <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Composition API</span>
          <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Pinia</span>
        </div>
      </div>

      <!-- Formation continue -->
      <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
            <span class="text-white font-bold text-xl">🚀</span>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-800">Auto-Formation</h3>
            <p class="text-orange-600 font-medium">Plateformes en ligne</p>
          </div>
        </div>
        <div class="mb-4">
          <span
            class="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            Continu
          </span>
        </div>
        <p class="text-gray-600 mb-4">
          Veille technologique constante et apprentissage de nouvelles technologies via des cours en
          ligne et projets personnels.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">TypeScript</span>
          <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Docker</span>
          <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">AWS</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Composant Formation
</script>
