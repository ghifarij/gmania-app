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
import { ref, onMounted, onUnmounted } from 'vue'

import hero1 from '@/assets/hero1.jpg'
import hero2 from '@/assets/hero2.jpg'
import hero3 from '@/assets/hero3.jpg'

const images = [
  { src: hero1, alt: 'Hero banner 1' },
  { src: hero2, alt: 'Hero banner 2' },
  { src: hero3, alt: 'Hero banner 3' },
]

const current = ref(0)
let timer = null

function goTo(index) {
  current.value = index
  restartTimer()
}

function next() {
  current.value = (current.value + 1) % images.length
}

function restartTimer() {
  clearInterval(timer)
  timer = setInterval(next, 4000)
}

onMounted(() => {
  restartTimer()
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>
