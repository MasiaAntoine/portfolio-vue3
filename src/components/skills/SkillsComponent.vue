<template>
  <div class="flex flex-col items-center justify-center h-screen pt-8 pb-18 max-w-6xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-800 mb-12">Mes Compétences</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      <!-- Frontend -->
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <span class="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
          Frontend
        </h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-gray-700">Vue.js</span>
            <div class="flex space-x-1">
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-700">TypeScript</span>
            <div class="flex space-x-1">
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-700">Tailwind CSS</span>
            <div class="flex space-x-1">
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Backend -->
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <span class="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
          Backend
        </h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-gray-700">Node.js</span>
            <div class="flex space-x-1">
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-700">Express</span>
            <div class="flex space-x-1">
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-700">MongoDB</span>
            <div class="flex space-x-1">
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Outils -->
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <span class="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
          Outils
        </h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-gray-700">Git</span>
            <div class="flex space-x-1">
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-700">Docker</span>
            <div class="flex space-x-1">
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-700">VS Code</span>
            <div class="flex space-x-1">
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Composant Compétences
</script>
