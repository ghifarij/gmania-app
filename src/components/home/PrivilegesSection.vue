<template>
  <div class="px-4 pt-5 pb-4 max-w-2xl mx-auto w-full">

    <!-- Section Header -->
    <SectionHeader title="Privileges" subtitle="Keep discovering our promo and news" />

    <!-- Loading skeleton: 2-col grid of reusable card items -->
    <div v-if="loading" class="grid grid-cols-2 gap-5">
      <div
        v-for="n in 6"
        :key="n"
        class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
      >
        <SkeletonCardItem image-class="aspect-square" rounded="none" />
      </div>
    </div>

    <!-- Error state -->
    <FetchError v-else-if="error">Failed to load privileges</FetchError>

    <!-- 2-column grid -->
    <div v-else class="grid grid-cols-2 gap-5">
      <div
        v-for="item in privileges"
        :key="item.title"
        class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-200"
      >
        <!-- Image -->
        <div class="w-full aspect-square overflow-hidden">
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover"
          />
        </div>
        <!-- Card Body -->
        <div class="px-3 py-2.5">
          <p class="font-bold text-gray-900 text-[13px] leading-snug">{{ item.title }}</p>
          <p class="text-[11px] text-gray-400 mt-0.5">{{ item.expires }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
/**
 * PrivilegesSection
 *
 * Fetches privilege cards from GET /api/privileges via the shared axios instance.
 * Skeleton uses the shared SkeletonCardItem; error uses the shared FetchError.
 */
import { ref, onMounted } from 'vue'
import apiClient        from '@/plugins/axios'
import SectionHeader    from '@/components/shared/SectionHeader.vue'
import SkeletonCardItem from '@/components/shared/SkeletonCardItem.vue'
import FetchError       from '@/components/shared/FetchError.vue'

// ── State ─────────────────────────────────────────────────────────────────────
const privileges = ref([])
const loading    = ref(true)
const error      = ref(null)

// ── Data fetching ─────────────────────────────────────────────────────────────
onMounted(async () => {
  try {
    const { data }   = await apiClient.get('/privileges')
    privileges.value = data
  } catch (err) {
    console.error('[PrivilegesSection] Failed to load privileges:', err)
    error.value = err
  } finally {
    loading.value = false
  }
})
</script>
