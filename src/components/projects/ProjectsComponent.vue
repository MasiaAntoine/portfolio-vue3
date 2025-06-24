<template>
  <div class="flex flex-col items-center justify-center h-full p-8 max-w-7xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-800 mb-12">Mes Projets</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      <!-- Projet 1 -->
      <div
        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div
          class="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center"
        >
          <span class="text-white text-2xl font-bold">Portfolio Vue3</span>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Portfolio Personnel</h3>
          <p class="text-gray-600 mb-4">
            Site portfolio développé avec Vue 3, TypeScript et Tailwind CSS. Présentation
            interactive avec système de carousel.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Vue 3</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">TypeScript</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full"
              >Tailwind</span
            >
          </div>
          <div class="flex gap-3">
            <button
              class="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Voir le code
            </button>
            <button
              class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Demo
            </button>
          </div>
        </div>
      </div>

      <!-- Projet 2 -->
      <div
        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div
          class="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center"
        >
          <span class="text-white text-2xl font-bold">E-Commerce</span>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Application E-Commerce</h3>
          <p class="text-gray-600 mb-4">
            Plateforme de vente en ligne complète avec gestion des produits, panier d'achat et
            système de paiement.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Vue.js</span>
            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full"
              >Node.js</span
            >
            <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">MongoDB</span>
          </div>
          <div class="flex gap-3">
            <button
              class="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Voir le code
            </button>
            <button
              class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Demo
            </button>
          </div>
        </div>
      </div>

      <!-- Projet 3 -->
      <div
        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div
          class="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center"
        >
          <span class="text-white text-2xl font-bold">Dashboard</span>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Dashboard Analytics</h3>
          <p class="text-gray-600 mb-4">
            Interface d'administration avec graphiques interactifs, gestion des données et tableaux
            de bord personnalisables.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">React</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Chart.js</span>
            <span class="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">Express</span>
          </div>
          <div class="flex gap-3">
            <button
              class="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Voir le code
            </button>
            <button
              class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Composant Projets
</script>
