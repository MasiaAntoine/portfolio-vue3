<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center pt-8 pb-18 px-4 sm:px-26 max-w-6xl mx-auto"
  >
    <h1 class="text-4xl font-bold text-gray-800 mb-12">Mes Projets</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
      >
        <div :class="`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`">
          <span class="text-white text-2xl font-bold">{{ project.displayName }}</span>
        </div>
        <div class="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                :class="getTechColor(tech)"
                class="px-3 py-1 text-sm rounded-full"
              >
                {{ tech }}
              </span>
            </div>
          </div>
          <div class="flex gap-3">
            <Button
              v-if="project.githubUrl"
              :as="'a'"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              class="flex-1"
            >
              Voir le code
            </Button>
            <Button
              v-if="project.demoUrl"
              :as="'a'"
              :href="project.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              class="flex-1"
            >
              Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '@/datas/Projects'
import { Button } from '@/components/ui/button'
import { getTechColor } from '@/lib/utils'
</script>
