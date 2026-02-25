<template>
  <div class="px-4 pt-4 pb-6 max-w-2xl mx-auto w-full">

    <!-- Section Header -->
    <SectionHeader title="Outlet Location" subtitle="Explore your options" />

    <!-- Loading skeleton: 3 text-row + divider pairs -->
    <div v-if="loading" class="space-y-0">
      <div v-for="n in 3" :key="n">
        <div class="py-4 space-y-2">
          <div class="h-3 w-1/3 bg-gray-200 rounded animate-pulse" />
          <div class="h-3 w-2/3 bg-gray-200 rounded animate-pulse" />
          <div class="h-3 w-16 bg-gray-200 rounded animate-pulse" />
        </div>
        <div class="h-px bg-gray-200 w-full" />
      </div>
    </div>

    <!-- Error state -->
    <FetchError v-else-if="error">Failed to load outlets</FetchError>

    <!-- Location List -->
    <div v-else>
      <div
        v-for="outlet in outlets"
        :key="outlet.name"
      >
        <!-- Item -->
        <div class="py-4 cursor-pointer">
          <p class="text-gray-900 text-[13px] leading-snug mb-1">{{ outlet.name }}</p>
          <p class="text-[12px] text-gray-400 leading-snug mb-2">{{ outlet.address }}</p>
          <div class="flex items-center gap-4 text-gray-400">
            <i class="pi pi-map-marker text-[13px]"></i>
            <span class="text-[12px]">{{ outlet.distance }} km</span>
          </div>
        </div>
        <!-- Divider -->
        <div class="h-px bg-gray-200 w-full"></div>
      </div>
    </div>

    <!-- SEE ALL -->
    <div class="mt-5">
      <SeeAllButton @click="$emit('see-all')" />
    </div>

  </div>
</template>

<script setup>
/**
 * OutletLocation
 *
 * Fetches outlet list from GET /api/outlets via the shared axios instance.
 * Shows a skeleton list while loading and a shared FetchError on failure.
 *
 * Skeleton shape (text rows + divider) is unique to this component,
 * so it stays inline rather than being extracted further.
 */
import { ref, onMounted } from 'vue'
import apiClient     from '@/plugins/axios'
import SectionHeader from '@/components/shared/SectionHeader.vue'
import SeeAllButton  from '@/components/shared/SeeAllButton.vue'
import FetchError    from '@/components/shared/FetchError.vue'

// ── State ─────────────────────────────────────────────────────────────────────
const outlets = ref([])
const loading = ref(true)
const error   = ref(null)

// ── Data fetching ─────────────────────────────────────────────────────────────
onMounted(async () => {
  try {
    const { data } = await apiClient.get('/outlets')
    outlets.value  = data
  } catch (err) {
    console.error('[OutletLocation] Failed to load outlets:', err)
    error.value = err
  } finally {
    loading.value = false
  }
})

defineEmits(['see-all'])
</script>
