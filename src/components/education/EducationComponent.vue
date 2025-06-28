<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center pt-8 pb-18 px-4 sm:px-26 max-w-6xl mx-auto"
  >
    <h1 class="text-4xl font-bold text-gray-800 mb-12">Formation</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      <div
        v-for="edu in education"
        :key="edu.id"
        class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
      >
        <div class="flex items-center mb-4">
          <div
            :class="`size-[50px] ${edu.bgColor} rounded-lg flex items-center justify-center mr-4`"
          >
            <span class="text-white font-bold text-xl">{{ edu.icon }}</span>
          </div>
          <div class="w-[90%]">
            <h3 class="text-sm font-semibold text-gray-800">{{ edu.title }}</h3>
            <p :class="`text-xs font-medium ${edu.textColor}`">{{ edu.institution }}</p>
          </div>
        </div>
        <div class="mb-4">
          <span :class="`inline-block px-3 py-1 rounded-full text-sm font-medium ${edu.badgeBg}`">
            {{ edu.date }}
          </span>
        </div>
        <p class="text-gray-600 mb-4">{{ edu.description }}</p>
        <div v-if="edu.details" class="text-sm text-gray-500 mb-4 italic">
          {{ edu.details }}
        </div>
        <div class="flex flex-wrap gap-2">
          <TagCustom v-for="skill in edu.skills" :key="skill" :tag="skill" size="sm" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { education } from '@/datas/Education'
import TagCustom from '@/components/generic/TagCustom.vue'
</script>
