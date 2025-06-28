<script setup lang="ts">
import { experiences } from '@/datas/Experiences'
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import TagCustom from '@/components/generic/TagCustom.vue'

const timelineContainer = ref<HTMLElement>()
const experienceRefs = ref<HTMLElement[]>([])
const visibleItems = ref<number[]>([])
const timelineHeight = ref(0)

let observer: IntersectionObserver | null = null

const updateTimelineHeight = () => {
  if (!timelineContainer.value || experienceRefs.value.length === 0) return

  // Calculer la hauteur totale nécessaire pour couvrir tous les éléments
  const firstElement = experienceRefs.value[0]
  const lastElement = experienceRefs.value[experienceRefs.value.length - 1]

  if (firstElement && lastElement) {
    const containerRect = timelineContainer.value.getBoundingClientRect()
    const firstRect = firstElement.getBoundingClientRect()
    const lastRect = lastElement.getBoundingClientRect()

    const startOffset = firstRect.top - containerRect.top
    const endOffset = lastRect.bottom - containerRect.top

    // Si on a des éléments visibles, animer jusqu'au dernier visible
    if (visibleItems.value.length > 0) {
      const lastVisibleIndex = Math.max(...visibleItems.value)
      const lastVisibleElement = experienceRefs.value[lastVisibleIndex]

      if (lastVisibleElement) {
        const lastVisibleRect = lastVisibleElement.getBoundingClientRect()
        const animatedHeight = lastVisibleRect.bottom - containerRect.top - startOffset + 20
        timelineHeight.value = Math.min(animatedHeight, endOffset - startOffset)
      }
    } else {
      timelineHeight.value = 0
    }
  }
}

const setupIntersectionObserver = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = experienceRefs.value.findIndex((ref) => ref === entry.target)
        if (index !== -1) {
          if (entry.isIntersecting) {
            if (!visibleItems.value.includes(index)) {
              visibleItems.value.push(index)
              visibleItems.value.sort((a, b) => a - b)
            }
          }
        }
      })

      // Mise à jour de la hauteur de la timeline avec un délai pour l'animation
      setTimeout(() => {
        updateTimelineHeight()
      }, 100)
    },
    {
      threshold: 0.3,
      rootMargin: '0px 0px -2% 0px',
    },
  )
}

onMounted(async () => {
  await nextTick()
  setupIntersectionObserver()

  // Observer chaque élément d'expérience
  experienceRefs.value.forEach((ref) => {
    if (ref && observer) {
      observer.observe(ref)
    }
  })

  // Mise à jour initiale de la hauteur
  updateTimelineHeight()
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center pt-8 pb-18 px-4 sm:px-26 max-w-6xl mx-auto"
  >
    <h1 class="text-4xl font-bold text-gray-800 mb-12">Mon Expérience</h1>

    <div class="relative w-full" ref="timelineContainer">
      <!-- Timeline line - ligne complète en arrière-plan -->
      <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

      <!-- Timeline line animée -->
      <div
        class="absolute left-8 top-0 w-0.5 bg-gray-400 timeline-line"
        :style="{ height: timelineHeight + 'px' }"
      ></div>

      <!-- Experience items -->
      <div class="space-y-8">
        <div
          v-for="(experience, index) in experiences"
          :key="experience.id"
          :ref="
            (el) => {
              if (el && (el as any)?.$el) {
                experienceRefs[index] = (el as any).$el as HTMLElement
              } else if (el && typeof (el as any).getBoundingClientRect === 'function') {
                experienceRefs[index] = el as HTMLElement
              }
            }
          "
          class="relative flex items-start experience-item"
          :class="{ 'animate-in': visibleItems.includes(index) }"
        >
          <div
            :class="`absolute left-6 w-4 h-4 bg-${experience.color}-600 rounded-full border-4 border-white shadow-lg z-10 timeline-dot`"
            :style="{ opacity: visibleItems.includes(index) ? 1 : 0 }"
          ></div>
          <div
            class="ml-20 bg-white rounded-lg shadow-lg border border-gray-200 p-6 w-full experience-card"
          >
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
              <TagCustom v-for="skill in experience.skills" :key="skill" :tag="skill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-line {
  transition: height 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top;
}

.experience-item {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.experience-item.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.experience-card {
  transition: all 0.3s ease;
}

.experience-item.animate-in .experience-card {
  animation: slideInCard 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.timeline-dot {
  transition: opacity 0.4s ease;
}

@keyframes slideInCard {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Stagger animation for multiple items */
.experience-item:nth-child(1).animate-in {
  transition-delay: 0.1s;
}

.experience-item:nth-child(2).animate-in {
  transition-delay: 0.2s;
}

.experience-item:nth-child(3).animate-in {
  transition-delay: 0.3s;
}

.experience-item:nth-child(4).animate-in {
  transition-delay: 0.4s;
}

.experience-item:nth-child(5).animate-in {
  transition-delay: 0.5s;
}

.experience-item:nth-child(6).animate-in {
  transition-delay: 0.6s;
}
</style>
