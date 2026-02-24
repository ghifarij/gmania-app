<script setup>
import AppHeader        from './components/layout/AppHeader.vue'
import HeroBanner       from './components/home/HeroBanner.vue'
import QuickMenu        from './components/home/QuickMenu.vue'
import UserLevelCard    from './components/home/UserLevelCard.vue'
import PrivilegesSection from './components/home/PrivilegesSection.vue'
import RedeemRewards    from './components/home/RedeemRewards.vue'
import OutletLocation   from './components/home/OutletLocation.vue'
import referBanner      from './assets/refer_banner.jpeg'
</script>

<template>
  <div class="min-h-screen bg-white">
    <AppHeader />
    <main class="w-full pb-8">
      <HeroBanner />
      <div class="mt-2 space-y-2">
        <UserLevelCard />
        <QuickMenu />

        <!-- Refer Banner -->
        <div class="max-w-2xl mx-auto px-4 pt-4 pb-1">
          <img
            :src="referBanner"
            alt="Refer a friend — dapatkan 5 poin"
            class="w-full rounded-md object-cover"
          />
        </div>

        <!-- Redeem Rewards -->
        <RedeemRewards />

        <!-- Privileges -->
        <PrivilegesSection />

        <!-- Outlet Location -->
        <OutletLocation />

      </div>
    </main>
  </div>
</template>

<style scoped></style>
