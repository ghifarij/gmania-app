<template>
  <div class="pt-8 max-w-2xl mx-auto w-full">

    <!-- Section Header -->
    <div class="flex items-start justify-between px-4 mb-4">
      <div>
        <h2 class="font-bold text-gray-900 text-lg leading-tight">Redeem Your Rewards</h2>
        <p class="text-[12px] text-gray-600 mt-0.5">Earn more to get your rewards</p>
      </div>
      <button class="text-orange-500 font-bold text-sm tracking-wide hover:text-orange-600 transition-colors mt-1 flex-shrink-0">
        SEE ALL
      </button>
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
import esTehManisImg from '@/assets/es_teh_manis.png'
import lemonEsTehImg from '@/assets/lemon_es_teh.png'
import pangsitImg    from '@/assets/pangsit.png'

const rewards = [
  { name: 'Es Teh Manis',   points: 40,  image: esTehManisImg },
  { name: 'Lemon Es Teh',   points: 45,  image: lemonEsTehImg },
  { name: 'Paw Patrol Pin', points: 155, image: pangsitImg    },
]
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
