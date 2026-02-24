<template>
  <!-- 
    SectionHeader — Interface Segregation: only the props this component
    actually needs. Consumers compose it without coupling to anything else.
  -->
  <div class="mb-4">
    <h2 class="font-bold text-gray-900 text-lg leading-tight">{{ title }}</h2>
    <p v-if="subtitle" class="text-[12px] text-gray-600 mt-0.5">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  /** Main heading text */
  title: {
    type: String,
    required: true,
  },
  /** Optional supporting text below the heading */
  subtitle: {
    type: String,
    default: '',
  },
})
</script>
