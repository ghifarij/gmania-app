<template>
  <div class="pt-8 max-w-2xl mx-auto w-full">

    <!-- Section Header -->
    <div class="flex items-start justify-between px-4 mb-4">
      <SectionHeader title="Redeem Your Rewards" subtitle="Earn more to get your rewards" />
      <SeeAllButton class="mt-1" @click="$emit('see-all')" />
    </div>

    <!-- Horizontally scrollable cards -->
    <div class="px-4">
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
 * SOLID applied:
 *  S — only responsible for rendering the reward card list.
 *  O — rewards injected via props; add new rewards without modifying this file.
 *  I — only consumes { name, points, image } from each reward object.
 *  D — depends on rewardsData abstraction, not direct asset imports.
 */
import { rewards as defaultRewards } from '@/data/rewardsData'
import SectionHeader from '@/components/shared/SectionHeader.vue'
import SeeAllButton  from '@/components/shared/SeeAllButton.vue'

defineProps({
  /** Array of { name, points, image } reward objects */
  rewards: {
    type: Array,
    default: () => defaultRewards,
  },
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
