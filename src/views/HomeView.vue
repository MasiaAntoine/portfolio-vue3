<script setup lang="ts">
import { watchOnce } from '@vueuse/core'
import { ref } from 'vue'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Circle } from 'lucide-vue-next'
import { CarouselMenu } from '@/shared/CarouselMenu'

const emblaMainApi = ref<CarouselApi>()
const selectedIndex = ref(0)

function onSelect() {
  if (!emblaMainApi.value) return
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value) return
  emblaMainApi.value.scrollTo(index)
}

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi) return

  onSelect()
  emblaMainApi.on('select', onSelect)
  emblaMainApi.on('reInit', onSelect)
})
</script>

<template>
  <div class="w-full">
    <Carousel @init-api="(val) => (emblaMainApi = val)">
      <CarouselContent class="h-full">
        <CarouselItem class="h-full" v-for="item in CarouselMenu" :key="item.id">
          <div class="h-full overflow-y-auto">
            <component :name="item.name" :is="item.component" />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="fixed left-4 top-1/2 -translate-y-1/2 z-10" />
      <CarouselNext class="fixed right-4 top-1/2 -translate-y-1/2 z-10" />
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
