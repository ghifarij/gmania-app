<template>
  <div class="pt-8 max-w-2xl mx-auto w-full">

    <!-- Section Header -->
    <div class="flex items-start justify-between px-4 mb-4">
      <SectionHeader title="Redeem Your Rewards" subtitle="Earn more to get your rewards" />
      <SeeAllButton class="mt-1" @click="$emit('see-all')" />
    </div>

    <!-- Loading skeleton: horizontal scroll of reusable card items -->
    <div v-if="loading" class="px-4">
      <div class="overflow-x-auto scrollbar-hide flex gap-3 pb-2">
        <div
          v-for="n in 3"
          :key="n"
          class="flex-shrink-0 w-[40vw] sm:w-40"
        >
          <SkeletonCardItem
            image-class="aspect-square rounded-xl"
            rounded="none"
            text-padding="mt-6 px-0.5"
          />
        </div>
      </div>
    </div>

    <!-- Error state -->
    <FetchError v-else-if="error" extra-class="px-4">Failed to load rewards</FetchError>

    <!-- Horizontally scrollable cards -->
    <div v-else class="px-4">
      <div class="overflow-x-auto scrollbar-hide flex gap-3 pb-2">
        <div
          v-for="item in rewards"
          :key="item.name"
          class="flex-shrink-0 w-[40vw] sm:w-40 cursor-pointer"
        >
          <!-- Card = image only, square -->
          <div class="w-full aspect-square rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow duration-200">
            <img
              :src="item.image"
              :alt="item.name"
              class="w-full h-full object-contain"
            />
          </div>
          <!-- Text outside the card -->
          <div class="mt-6 px-0.5">
            <p class="font-bold text-gray-900 text-[13px] leading-snug">{{ item.name }}</p>
            <p class="text-orange-500 font-bold text-[13px] mt-0.5">{{ item.points }} Pts</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
/**
 * RedeemRewards
 *
 * Fetches redeemable rewards from GET /api/rewards via the shared axios instance.
 * Skeleton uses the shared SkeletonCardItem; error uses the shared FetchError.
 */
import { ref, onMounted } from 'vue'
import apiClient        from '@/plugins/axios'
import SectionHeader    from '@/components/shared/SectionHeader.vue'
import SeeAllButton     from '@/components/shared/SeeAllButton.vue'
import SkeletonCardItem from '@/components/shared/SkeletonCardItem.vue'
import FetchError       from '@/components/shared/FetchError.vue'

// ── State ─────────────────────────────────────────────────────────────────────
const rewards = ref([])
const loading = ref(true)
const error   = ref(null)

// ── Data fetching ─────────────────────────────────────────────────────────────
onMounted(async () => {
  try {
    const { data } = await apiClient.get('/rewards')
    rewards.value  = data
  } catch (err) {
    console.error('[RedeemRewards] Failed to load rewards:', err)
    error.value = err
  } finally {
    loading.value = false
  }
})

defineEmits(['see-all'])
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
