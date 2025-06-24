<template>
  <div class="min-h-screen flex flex-col items-center justify-center pt-8 pb-18 max-w-6xl mx-auto">
    <div class="text-center space-y-12">
      <h1 class="text-4xl font-bold text-gray-800 mb-8">À propos de moi</h1>

      <!-- Description personnelle détaillée -->
      <div class="max-w-4xl mx-auto">
        <p class="text-lg text-gray-700 leading-relaxed mb-4">
          <em class="text-blue-600 font-medium">
            "Les erreurs d'hier sont les leçons d'aujourd'hui pour le développeur de demain."
          </em>
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-8">
          Diplômé du BTS SIO (Bac+2), passionné de code depuis 2014, je suis devenu un développeur
          déterminé, polyvalent et autodidacte. Ma passion pour le développement est un moteur
          puissant qui alimente la créativité et la résolution de problèmes. Toujours en quête
          d'apprentissage, ma créativité, ma logique et mon autonomie me permettent de trouver des
          solutions originales avec diverses technologies modernes.
        </p>
      </div>

      <!-- Qualités personnelles -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <span class="px-6 py-3 bg-blue-100 text-blue-800 rounded-full text-lg font-medium">
          Créatif
        </span>
        <span class="px-6 py-3 bg-green-100 text-green-800 rounded-full text-lg font-medium">
          Rigoureux
        </span>
        <span class="px-6 py-3 bg-purple-100 text-purple-800 rounded-full text-lg font-medium">
          Innovant
        </span>
        <span class="px-6 py-3 bg-orange-100 text-orange-800 rounded-full text-lg font-medium">
          Collaboratif
        </span>
        <span class="px-6 py-3 bg-teal-100 text-teal-800 rounded-full text-lg font-medium">
          Autodidacte
        </span>
        <span class="px-6 py-3 bg-pink-100 text-pink-800 rounded-full text-lg font-medium">
          Déterminé
        </span>
      </div>

      <!-- Section Minecraft & Passion -->
      <div class="max-w-4xl mx-auto">
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
            <span class="font-semibold text-green-600">
              la programmation est une passion passionnante et gratifiante
            </span>
            qui offre une grande polyvalence pour créer des choses incroyables et résoudre des
            problèmes complexes.
          </p>
        </div>
      </div>

      <!-- Section Objectifs & Vision -->
      <div class="max-w-4xl mx-auto">
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
    </div>
  </div>
</template>

<script setup lang="ts">
// Composant À propos
</script>
