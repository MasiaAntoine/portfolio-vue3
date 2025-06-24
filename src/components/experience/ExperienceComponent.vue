<template>
  <div class="min-h-screen flex flex-col items-center justify-center pt-8 pb-18 max-w-6xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-800 mb-12">Mon Expérience</h1>

    <div class="relative w-full">
      <!-- Timeline line -->
      <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

      <!-- Experience items -->
      <div class="space-y-8">
        <div
          v-for="experience in experiences"
          :key="experience.id"
          class="relative flex items-start"
        >
          <div
            :class="`absolute left-6 w-4 h-4 bg-${experience.color}-600 rounded-full border-4 border-white shadow-lg z-10`"
          ></div>
          <div class="ml-20 bg-white rounded-lg shadow-lg p-6 w-full">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h3 class="text-xl font-semibold text-gray-800">{{ experience.title }}</h3>
              <span
                :class="`text-sm text-gray-500 bg-${experience.color}-100 px-3 py-1 rounded-full`"
              >
                {{ experience.period }}
              </span>
            </div>
            <h4 :class="`text-lg text-${experience.color}-600 font-medium mb-2`">
              {{ experience.company }} · {{ experience.type }}
            </h4>
            <p class="text-gray-500 text-sm mb-2">{{ experience.location }}</p>
            <p class="text-gray-600 mb-4">{{ experience.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in experience.skills"
                :key="skill"
                class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { experiences } from '@/shared/Experiences'
</script>
