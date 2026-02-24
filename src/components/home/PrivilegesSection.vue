<template>
  <div class="px-4 pt-5 pb-4 max-w-2xl mx-auto w-full">

    <!-- Section Header -->
    <div class="mb-4">
      <h2 class="font-bold text-gray-900 text-lg leading-tight">Privileges</h2>
      <p class="text-[12px] text-gray-600 mt-0.5">Keep discovering our promo and news</p>
    </div>

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
import platinumImg from '@/assets/privilege_platinum.jpeg'
import goldImg     from '@/assets/privilege_gold.jpeg'
import thrImg      from '@/assets/privilege_thr.jpeg'
import poinImg     from '@/assets/privilege_poin.jpeg'
import jumboImg    from '@/assets/privilege_jumbo.jpeg'
import benefitImg  from '@/assets/privilege_benefit.jpeg'
import silverImg   from '@/assets/privilege_silver.jpeg'

const privileges = [
  { title: 'PLATINUM Member 💎', expires: 'Exp. 31 Dec 2024', image: platinumImg },
  { title: 'GOLD Member ✨',     expires: 'Exp. 31 Dec 2024', image: goldImg     },
  { title: 'THR Reward 🎉', expires: 'Exp. 31 Dec 2024', image: thrImg      },
  { title: 'Redeem Point 👋',    expires: 'Exp. 31 Dec 2024', image: poinImg     },
  { title: 'Sign Up Reward 💰',  expires: 'Exp. 31 Dec 2024', image: jumboImg    },
  { title: 'Benefit GMania 🍜',  expires: 'Exp. 31 Dec 2024', image: benefitImg  },
  { title: 'SILVER Member 🥈', expires: 'Exp. 31 Mar 2024', image: silverImg   },
]
</script>
