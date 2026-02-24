<template>
  <header class="sticky top-0 z-50 w-full bg-white shadow-sm">
    <div class="flex items-center justify-between px-4 py-2 w-full max-w-7xl mx-auto">
      <img src="@/assets/bakmigm_logo.png" alt="Bakmi GM" class="h-11 w-auto" />
      <div class="flex items-center gap-6">
        <i class="pi pi-qrcode text-xl text-black cursor-pointer"></i>
        <i class="pi pi-envelope text-xl text-black cursor-pointer"></i>
        <i class="pi pi-ellipsis-v text-xl text-black cursor-pointer"></i>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>