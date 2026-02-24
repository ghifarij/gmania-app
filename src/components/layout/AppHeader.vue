<template>
  <header class="sticky top-0 z-50 w-full bg-white shadow-sm">
    <div class="flex items-center justify-between px-4 py-2 w-full max-w-7xl mx-auto">
      <img src="@/assets/bakmigm_logo.png" alt="Bakmi GM" class="h-11 w-auto" />
      <div class="flex items-center gap-6">
        <i class="pi pi-qrcode text-xl text-black cursor-pointer" @click="$emit('qr-scan')"></i>
        <i class="pi pi-envelope text-xl text-black cursor-pointer" @click="$emit('messages')"></i>
        <i class="pi pi-ellipsis-v text-xl text-black cursor-pointer" @click="$emit('menu')"></i>
      </div>
    </div>
  </header>
</template>

<script setup>
/**
 * AppHeader
 *
 * SOLID applied:
 *  S — only responsible for rendering the sticky top bar.
 *  O — icon actions exposed as emitted events; callers extend behaviour
 *      without touching this component (Open/Closed).
 *  D — no hardcoded navigation logic; parent decides what each icon does.
 */
defineEmits(['qr-scan', 'messages', 'menu'])
</script>