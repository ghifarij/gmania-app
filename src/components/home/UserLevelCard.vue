<template>
  <div class="px-4 pt-4 pb-4 space-y-3 max-w-2xl mx-auto w-full">

    <!-- Your Level Card -->
    <div class="bg-white rounded-md border border-gray-100 shadow-sm p-5">

      <!-- Header Row -->
      <div class="flex items-center justify-between mb-5">
        <span class="font-bold text-gray-900 text-[15px]">Your Level</span>
        <button
          class="text-orange-500 font-bold text-sm tracking-wide hover:text-orange-600 transition-colors"
          @click="$emit('learn-more')"
        >
          LEARN MORE
        </button>
      </div>

      <!-- Level Steps -->
      <div class="flex items-center justify-center">

        <!-- Silver (Active) -->
        <div class="flex flex-col items-center">
          <div class="relative">
            <div class="w-[32px] h-[32px] rounded-full bg-gray-400 flex items-center justify-center">
              <i class="pi pi-crown text-[22px] text-white"></i>
            </div>
            <!-- Green check badge -->
            <div class="absolute -bottom-1 -right-1 w-[20px] h-[20px] rounded-full bg-green-500 flex items-center justify-center border-2 border-white">
              <i class="pi pi-check text-white" style="font-size: 8px;"></i>
            </div>
          </div>
          <span class="mt-2.5 text-[12px] font-bold text-gray-800">{{ currentLevel }}</span>
        </div>

        <!-- Connector line -->
        <div class="h-px w-10 bg-gray-400 mx-2 mb-5 flex-shrink-0"></div>

        <!-- Gold (Locked) -->
        <div class="flex flex-col items-center">
          <div
            class="w-[32px] h-[32px] rounded-full flex items-center justify-center"
            style="background-color: #D4BC72;"
          >
            <i class="pi pi-lock text-[22px] text-white"></i>
          </div>
          <span class="mt-2.5 text-[12px] font-medium text-gray-500">Gold</span>
        </div>

        <!-- Connector line -->
        <div class="h-px w-10 bg-gray-400 mx-2 mb-5 flex-shrink-0"></div>

        <!-- Platinum (Locked) -->
        <div class="flex flex-col items-center">
          <div class="w-[32px] h-[32px] rounded-full bg-gray-300 flex items-center justify-center">
            <i class="pi pi-lock text-[22px] text-white"></i>
          </div>
          <span class="mt-2.5 text-[12px] font-medium text-gray-400">Platinum</span>
        </div>

      </div>

      <!-- Progress Bar -->
      <div class="mt-6 mb-4 relative">
        <!-- Track -->
        <div class="w-full h-[8px] bg-gray-100 rounded-full"></div>
        <!-- Gold dot at the far right end -->
        <div
          class="absolute top-1/2 -translate-y-1/2 w-[22px] h-[22px] rounded-full flex items-center justify-center"
          style="right: 0; background-color: #C9B040;"
        >
          <div class="w-[10px] h-[10px] rounded-full bg-white"></div>
        </div>
      </div>

      <!-- Spend text -->
      <p class="text-[13.5px] text-gray-700 leading-relaxed mt-1">
        Spend <span class="font-bold text-gray-900">{{ spendRequired }}</span> by
        <span class="font-bold text-gray-900">{{ spendDeadline }}</span> to reach
        <span class="font-bold text-gray-900">{{ nextLevel }}</span>
      </p>

    </div>

    <!-- Points Card -->
    <div class="bg-white rounded-md border border-gray-100 shadow-sm px-5 py-4 mt-6">
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="font-bold text-gray-900 text-[14px] leading-snug">Bakmi GM Points</p>
          <p class="text-[12px] text-gray-400 mt-1">
            {{ expiringPoints }} will expire on {{ expiringDate }}.
            <a href="#" class="text-blue-500 underline font-semibold">See Details</a>
          </p>
        </div>
        <span class="font-bold text-gray-900 text-[15px] mt-0.5 flex-shrink-0">{{ totalPoints }}</span>
      </div>
    </div>

  </div>
</template>

<script setup>
/**
 * UserLevelCard
 *
 * SOLID applied:
 *  S — only responsible for rendering the level/points UI.
 *  O — all data injected via props; caller controls content without editing this.
 *  I — each prop is focused; no fat interface, only what this component needs.
 *  D — no hardcoded business data; depends on prop abstraction.
 */
defineProps({
  currentLevel:   { type: String, default: 'Silver' },
  nextLevel:      { type: String, default: 'Gold' },
  spendRequired:  { type: String, default: '3,500,001' },
  spendDeadline:  { type: String, default: '23 Nov 2024' },
  totalPoints:    { type: Number, default: 40 },
  expiringPoints: { type: Number, default: 40 },
  expiringDate:   { type: String, default: '22 Feb 2024' },
})

defineEmits(['learn-more'])
</script>
