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
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
            >Masia</span
          >
          Antoine
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 font-light">Développeur Full Stack passionné</p>
      </div>

      <!-- Description -->
      <div
        class="max-w-3xl mx-auto transform transition-all duration-1000 delay-500"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }"
      >
        <p class="text-lg text-gray-700 leading-relaxed mb-4">
          <em class="text-blue-600 font-medium"
            >"Les erreurs d'hier sont les leçons d'aujourd'hui pour le développeur de demain."</em
          >
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-8">
          Diplômé du BTS SIO (Bac+2), passionné de code depuis 2014, je suis devenu un développeur
          déterminé, polyvalent et autodidacte. Ma passion pour le développement est un moteur
          puissant qui alimente la créativité et la résolution de problèmes. Toujours en quête
          d'apprentissage, ma créativité, ma logique et mon autonomie me permettent de trouver des
          solutions originales avec <span class="font-semibold text-blue-600">Vue.js</span>,
          <span class="font-semibold text-blue-600">TypeScript</span>,
          <span class="font-semibold text-blue-600">PHP</span>,
          <span class="font-semibold text-blue-600">Laravel</span>,
          <span class="font-semibold text-blue-600">C#</span>,
          <span class="font-semibold text-blue-600">Java</span>,
          <span class="font-semibold text-blue-600">Spring Boot</span> et
          <span class="font-semibold text-blue-600">Rust</span>.
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

        <div
          class="bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300"
        >
          <div class="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">C#</span>
          </div>
          <span class="font-medium text-gray-800">C#</span>
        </div>

        <div
          class="bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300"
        >
          <div class="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">PHP</span>
          </div>
          <span class="font-medium text-gray-800">PHP</span>
        </div>

        <div
          class="bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300"
        >
          <div class="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">🐍</span>
          </div>
          <span class="font-medium text-gray-800">Python</span>
        </div>

        <div
          class="bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300"
        >
          <div class="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">L</span>
          </div>
          <span class="font-medium text-gray-800">Laravel</span>
        </div>

        <div
          class="bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300"
        >
          <div class="w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">C</span>
          </div>
          <span class="font-medium text-gray-800">C</span>
        </div>

        <div
          class="bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300"
        >
          <div class="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">C++</span>
          </div>
          <span class="font-medium text-gray-800">C++</span>
        </div>

        <div
          class="bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300"
        >
          <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">⚡</span>
          </div>
          <span class="font-medium text-gray-800">Capacitor</span>
        </div>

        <div
          class="bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300"
        >
          <div class="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">🍎</span>
          </div>
          <span class="font-medium text-gray-800">iOS</span>
        </div>

        <div
          class="bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300"
        >
          <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">🤖</span>
          </div>
          <span class="font-medium text-gray-800">Android</span>
        </div>

        <div
          class="bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300"
        >
          <div class="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">🦀</span>
          </div>
          <span class="font-medium text-gray-800">Rust</span>
        </div>

        <div
          class="bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300"
        >
          <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">☕</span>
          </div>
          <span class="font-medium text-gray-800">Java</span>
        </div>

        <div
          class="bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300"
        >
          <div class="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">🍃</span>
          </div>
          <span class="font-medium text-gray-800">Spring Boot</span>
        </div>
      </div>

      <!-- Stats -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-1000"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }"
      >
        <div class="text-center">
          <div class="text-3xl font-bold text-blue-600 mb-2">11+</div>
          <div class="text-gray-600">Années de passion</div>
        </div>

        <div class="text-center">
          <div class="text-3xl font-bold text-green-600 mb-2">17+</div>
          <div class="text-gray-600">Technologies maîtrisées</div>
        </div>

        <div class="text-center">
          <div class="text-3xl font-bold text-purple-600 mb-2">BTS</div>
          <div class="text-gray-600">SIO Diplômé</div>
        </div>
      </div>

      <!-- Section Minecraft & Passion -->
      <div
        class="max-w-4xl mx-auto mt-16 transform transition-all duration-1000 delay-1300"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }"
      >
        <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
          <div class="flex items-center justify-center mb-6">
            <div
              class="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold"
            >
              ⛏️
            </div>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">
            Minecraft, mon premier pas en programmation
          </h3>
          <p class="text-gray-700 leading-relaxed text-center">
            Je suis passionné par la programmation depuis ma découverte de Minecraft, où j'ai été
            fasciné par la façon dont les commandes et les scripts pouvaient être utilisés pour
            créer des mondes uniques et complexes. Cette découverte a été le catalyseur de ma
            passion pour le développement, me montrant que
            <span class="font-semibold text-green-600"
              >la programmation est une passion passionnante et gratifiante</span
            >
            qui offre une grande polyvalence pour créer des choses incroyables et résoudre des
            problèmes complexes.
          </p>
        </div>
      </div>

      <!-- Section Objectifs & Vision -->
      <div
        class="max-w-4xl mx-auto mt-12 transform transition-all duration-1000 delay-1400"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }"
      >
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
          <h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">Avenir Professionnel</h3>
          <p class="text-gray-700 leading-relaxed text-center mb-4">
            En tant qu'entrepreneur ambitieux, mon objectif à court terme est de créer une
            entreprise qui apporte une réelle valeur ajoutée à mon écosystème et améliore la vie des
            gens.
          </p>
          <p class="text-gray-700 leading-relaxed text-center">
            Pour atteindre cet objectif, je vais devenir expert en programmation en investissant du
            temps et de l'énergie dans ma formation, capable de fournir des
            <span class="font-semibold text-purple-600">solutions innovantes et concrètes</span>
            à mes clients.
          </p>
        </div>
      </div>

      <!-- Call to action -->
      <div
        class="flex flex-col sm:flex-row gap-4 justify-center mt-12 transform transition-all duration-1000 delay-1500"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }"
      >
        <button
          class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Découvrir mes projets
        </button>

        <button
          class="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-green-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Télécharger mon CV
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
