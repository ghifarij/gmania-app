<template>
  <div class="bg-white px-4 py-5 max-w-2xl mx-auto w-full">
    <div class="grid grid-cols-3 gap-y-8 gap-x-2">
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
 * SOLID applied:
 *  S — only responsible for rendering the grid of menu items.
 *  O — items injected via props; new menus need no change to this component.
 *  I — accepts only the shape it needs: { label, icon }[].
 *  D — depends on the menuItems data abstraction, not direct asset imports.
 */
import { menuItems as defaultMenuItems } from '@/data/menuData'

defineProps({
  /** Array of { label: string, icon: string } menu entries */
  items: {
    type: Array,
    default: () => defaultMenuItems,
  },
})
</script>
