<template>
  <div class="px-4 pt-4 pb-6 max-w-2xl mx-auto w-full">

    <!-- Section Header -->
    <SectionHeader title="Outlet Location" subtitle="Explore your options" />

    <!-- Location List -->
    <div>
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
 * SOLID applied:
 *  S — only responsible for rendering the outlet list.
 *  O — outlets injected via props; add/remove outlets without touching this file.
 *  I — each outlet only needs { name, address, distance }.
 *  D — depends on outletsData abstraction, not a hardcoded array.
 */
import { outlets as defaultOutlets } from '@/data/outletsData'
import SectionHeader from '@/components/shared/SectionHeader.vue'
import SeeAllButton  from '@/components/shared/SeeAllButton.vue'

defineProps({
  /** Array of { name, address, distance } outlet objects */
  outlets: {
    type: Array,
    default: () => defaultOutlets,
  },
})

defineEmits(['see-all'])
</script>
