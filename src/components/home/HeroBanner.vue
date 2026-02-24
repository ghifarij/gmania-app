<template>
  <div class="relative w-full overflow-hidden">
    <!-- Slides -->
    <div
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${current * 100}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="min-w-full"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full object-fill object-center aspect-[16/6]"
        />
      </div>
    </div>

    <!-- Dot indicators -->
    <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
      <button
        v-for="(_, index) in images"
        :key="index"
        @click="goTo(index)"
        :class="[
          'h-2 rounded-full transition-all duration-300 cursor-pointer',
          current === index ? 'bg-white w-6' : 'bg-white/50 w-2'
        ]"
      />
    </div>
  </div>
</template>

<script setup>
/**
 * HeroBanner
 *
 * SOLID applied:
 *  S — rendering only; timer logic delegated to useCarousel composable.
 *  O — slide data injected via props; extend slides without touching this file.
 *  D — depends on useCarousel abstraction, not a concrete timer implementation.
 */
import { useCarousel } from '@/composables/useCarousel'
import { heroBannerImages } from '@/data/heroBannerData'

const props = defineProps({
  /** Array of { src, alt } slide objects */
  images: {
    type: Array,
    default: () => heroBannerImages,
  },
  /** Auto-advance interval in milliseconds */
  interval: {
    type: Number,
    default: 4000,
  },
})

const { current, goTo } = useCarousel(props.images.length, props.interval)
</script>
