<script setup lang="ts">
import { watchOnce } from '@vueuse/core'
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Circle } from 'lucide-vue-next'
import { CarouselMenu } from '@/datas/CarouselMenu'

const route = useRoute()
const router = useRouter()
const emblaMainApi = ref<CarouselApi>()
const selectedIndex = ref(0)

function onSelect() {
  if (!emblaMainApi.value) return
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap()

  const currentItem = CarouselMenu[selectedIndex.value]
  if (currentItem) {
    const newHash = `#${currentItem.anchor}`
    if (route.hash !== newHash) {
      router.replace({ path: route.path, hash: newHash })
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value) return
  emblaMainApi.value.scrollTo(index)
}

function navigateToAnchor(anchor: string) {
  const index = CarouselMenu.findIndex((item) => item.anchor === anchor)
  if (index !== -1 && emblaMainApi.value) {
    emblaMainApi.value.scrollTo(index)
  }
}

watch(
  () => route.hash,
  (newHash) => {
    if (newHash && newHash.startsWith('#')) {
      const anchor = newHash.substring(1)
      navigateToAnchor(anchor)
    }
  },
  { immediate: true },
)

onMounted(() => {
  if (route.hash) {
    const anchor = route.hash.substring(1)
    navigateToAnchor(anchor)
  }
})

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi) return

  onSelect()
  emblaMainApi.on('select', onSelect)
  emblaMainApi.on('reInit', onSelect)

  if (route.hash) {
    const anchor = route.hash.substring(1)
    navigateToAnchor(anchor)
  }
})
</script>

<template>
  <div class="w-full">
    <Carousel @init-api="(val) => (emblaMainApi = val)">
      <CarouselContent class="h-full">
        <CarouselItem class="h-full" v-for="(item, index) in CarouselMenu" :key="item.id">
          <div class="h-full overflow-y-auto">
            <Transition name="carousel-slide" mode="out-in" :duration="{ enter: 300, leave: 200 }">
              <component
                v-if="index === selectedIndex"
                :name="item.name"
                :is="item.component"
                :key="`${item.id}-${selectedIndex}`"
              />
            </Transition>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
      <CarouselNext class="fixed right-8 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
    </Carousel>

    <!-- Dots navigation en position fixe -->
    <div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-10">
      <div class="flex gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          v-for="(_, index) in CarouselMenu"
          :key="index"
          @click="onThumbClick(index)"
          class="cursor-pointer transition-all duration-200 hover:scale-125"
          :class="index === selectedIndex ? 'opacity-100' : 'opacity-50 hover:opacity-75'"
        >
          <Circle
            :size="12"
            :fill="index === selectedIndex ? 'currentColor' : 'none'"
            class="text-white"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Transitions pour le carousel */
.carousel-slide-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.carousel-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.carousel-slide-enter-to,
.carousel-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
