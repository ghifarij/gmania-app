<template>
  <div class="relative w-full overflow-hidden">
    <!-- Loading skeleton -->
    <div
      v-if="loading"
      class="w-full aspect-[16/6] bg-gray-200 animate-pulse"
    />

    <!-- Error state -->
    <div
      v-else-if="error"
      class="w-full aspect-[16/6] flex items-center justify-center bg-gray-100 text-gray-400 text-sm"
    >
      <i class="pi pi-exclamation-triangle mr-2" />
      Failed to load banners
    </div>

    <!-- Slides -->
    <template v-else>
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
    </template>
  </div>
</template>

<script setup>
/**
 * HeroBanner
 *
 * Fetches banner slides from GET /api/banners via the shared axios instance.
 * Shows a skeleton while loading and an error state on failure.
 */
import { ref, watch, onMounted } from 'vue'
import { useCarousel } from '@/composables/useCarousel'
import apiClient from '@/plugins/axios'

// ── State ─────────────────────────────────────────────────────────────────────
const images  = ref([])
const loading = ref(true)
const error   = ref(null)

/** Auto-advance interval in milliseconds */
const props = defineProps({
  interval: {
    type: Number,
    default: 4000,
  },
})

// carousel is driven by the reactive images length
const { current, goTo } = useCarousel(
  () => images.value.length,
  props.interval,
)

// ── Data fetching ─────────────────────────────────────────────────────────────
onMounted(async () => {
  try {
    const { data } = await apiClient.get('/banners')
    images.value   = data
  } catch (err) {
    console.error('[HeroBanner] Failed to load banners:', err)
    error.value = err
  } finally {
    loading.value = false
  }
})
</script>
