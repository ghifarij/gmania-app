<template>
  <!--
    SeeAllButton — Single Responsibility: renders a consistent "see all" CTA.
    Open/Closed: callers extend its behaviour via the @click event without
    modifying this component.
  -->
  <button
    class="text-orange-500 font-bold text-sm tracking-wide hover:text-orange-600 transition-colors"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: 'SEE ALL',
  },
})

defineEmits(['click'])
</script>
