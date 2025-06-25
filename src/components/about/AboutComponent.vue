<script setup lang="ts">
import { profilData } from '@/shared/Profil'
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center pt-8 pb-18 max-w-6xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-800 mb-8">À propos de moi</h1>

    <!-- Description personnelle détaillée -->
    <div class="max-w-4xl mx-auto">
      <p class="text-lg text-gray-700 leading-relaxed mb-4">
        <em class="text-blue-600 font-medium"> "{{ profilData.personal.quote }}" </em>
      </p>
      <p class="text-lg text-gray-700 leading-relaxed mb-8">
        {{ profilData.personal.aboutDescription }}
      </p>
    </div>

    <!-- Qualités personnelles -->
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      <span
        v-for="(quality, index) in profilData.qualities"
        :key="quality"
        :class="[
          'px-6 py-3 rounded-full text-lg font-medium',
          index % 6 === 0
            ? 'bg-blue-100 text-blue-800'
            : index % 6 === 1
              ? 'bg-green-100 text-green-800'
              : index % 6 === 2
                ? 'bg-purple-100 text-purple-800'
                : index % 6 === 3
                  ? 'bg-orange-100 text-orange-800'
                  : index % 6 === 4
                    ? 'bg-teal-100 text-teal-800'
                    : 'bg-pink-100 text-pink-800',
        ]"
      >
        {{ quality }}
      </span>
    </div>

    <!-- Section Minecraft & Passion -->
    <div class="max-w-4xl mx-auto mb-6">
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
          {{ profilData.personal.minecraftDescription }}
        </p>
      </div>
    </div>
  </div>
</template>
