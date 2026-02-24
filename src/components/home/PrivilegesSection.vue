<template>
  <div class="px-4 pt-5 pb-4 max-w-2xl mx-auto w-full">

    <!-- Section Header -->
    <SectionHeader title="Privileges" subtitle="Keep discovering our promo and news" />

    <!-- 2-column grid -->
    <div class="grid grid-cols-2 gap-5">
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
 * SOLID applied:
 *  S — only responsible for rendering the privilege card grid.
 *  O — privileges injected via props; extend the list without touching this file.
 *  I — each privilege only needs { title, expires, image }.
 *  D — depends on privilegesData abstraction, not direct asset imports.
 */
import { privileges as defaultPrivileges } from '@/data/privilegesData'
import SectionHeader from '@/components/shared/SectionHeader.vue'

defineProps({
  /** Array of { title, expires, image } privilege objects */
  privileges: {
    type: Array,
    default: () => defaultPrivileges,
  },
})
</script>
