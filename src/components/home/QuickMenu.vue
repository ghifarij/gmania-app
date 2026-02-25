<template>
  <div class="bg-white px-4 py-5 max-w-2xl mx-auto w-full">

    <!-- Loading skeleton: 6 circular icon + label pairs -->
    <div v-if="loading" class="grid grid-cols-3 gap-y-8 gap-x-2">
      <div
        v-for="n in 6"
        :key="n"
        class="flex flex-col items-center gap-2"
      >
        <!-- Circular image placeholder -->
        <div class="w-[48px] h-[48px] sm:w-20 sm:h-20 rounded-full bg-gray-200 animate-pulse" />
        <!-- Label bar -->
        <div class="h-3 w-12 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>

    <!-- Error state -->
    <FetchError v-else-if="error">Failed to load menu</FetchError>

    <!-- Menu grid -->
    <div v-else class="grid grid-cols-3 gap-y-8 gap-x-2">
      <button
        v-for="item in items"
        :key="item.label"
        class="flex flex-col items-center gap-2 group"
      >
        <div class="w-[48px] h-[48px] sm:w-20 sm:h-20 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
          <img
            :src="item.icon"
            :alt="item.label"
            class="w-full h-full object-cover"
          />
        </div>
        <span class="text-[13px] sm:text-sm text-gray-600 text-center leading-tight">
          {{ item.label }}
        </span>
      </button>
    </div>

  </div>
</template>

<script setup>
/**
 * QuickMenu
 *
 * Fetches menu items from GET /api/menus via the shared axios instance.
 * Shows a skeleton grid while loading and a shared FetchError on failure.
 *
 * Skeleton shape (circular icon + label bar) is unique to this component,
 * so it stays inline rather than being extracted further.
 */
import { ref, onMounted } from 'vue'
import apiClient from '@/plugins/axios'
import FetchError from '@/components/shared/FetchError.vue'

// ── State ─────────────────────────────────────────────────────────────────────
const items   = ref([])
const loading = ref(true)
const error   = ref(null)

// ── Data fetching ─────────────────────────────────────────────────────────────
onMounted(async () => {
  try {
    const { data } = await apiClient.get('/menus')
    items.value    = data
  } catch (err) {
    console.error('[QuickMenu] Failed to load menu items:', err)
    error.value = err
  } finally {
    loading.value = false
  }
})
</script>
