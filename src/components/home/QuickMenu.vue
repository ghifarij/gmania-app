<template>
  <div class="bg-white px-4 py-5 max-w-2xl mx-auto w-full">
    <div class="grid grid-cols-3 gap-y-8 gap-x-2">
      <button
        v-for="item in menuItems"
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
import orderIcon     from '@/assets/order_icon.jpeg'
import redeemIcon    from '@/assets/redeem_icon.jpeg'
import voucherIcon   from '@/assets/voucher_icon.jpeg'
import privilegeIcon from '@/assets/privilege_icon.jpeg'
import historyIcon   from '@/assets/history_icon.jpeg'
import contactIcon   from '@/assets/contact_icon.jpeg'

const menuItems = [
  { label: 'Order',       icon: orderIcon },
  { label: 'Redeem',      icon: redeemIcon },
  { label: 'My Vouchers', icon: voucherIcon },
  { label: 'Privilege',   icon: privilegeIcon },
  { label: 'History',     icon: historyIcon },
  { label: 'Contact Us',  icon: contactIcon },
]
</script>
