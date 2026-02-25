<template>
  <!--
    SkeletonCardItem
    ─────────────────────────────────────────────────────────────────
    Single Responsibility: renders one "image-card + two text bars"
    placeholder unit.  Callers control sizing via wrapper classes —
    this component owns only the internal skeleton shape.

    Props
      rounded  – shape of the image placeholder ('xl' | 'full' | 'none')
      imageClass – extra Tailwind classes forwarded to the image block
  -->
  <div>
    <!-- Image placeholder -->
    <div
      :class="[
        'w-full bg-gray-200 animate-pulse',
        imageClass,
        roundedClass,
      ]"
    />
    <!-- Text-bar placeholders -->
    <div :class="['space-y-1.5', textPadding]">
      <div class="h-3 w-3/4 bg-gray-200 rounded animate-pulse" />
      <div class="h-3 w-1/2 bg-gray-200 rounded animate-pulse" />
    </div>
  </div>
</template>

<script setup>
/**
 * SkeletonCardItem
 *
 * SOLID applied:
 *  S — only responsible for the "image block + two text bars" skeleton shape.
 *  O — callers extend appearance via props without touching this file.
 *  I — exposes only the props it actually needs.
 */
import { computed } from 'vue'

const props = defineProps({
  /** Tailwind aspect-* class or any extra classes for the image block */
  imageClass: {
    type: String,
    default: 'aspect-square',
  },
  /** Border-radius of the image placeholder */
  rounded: {
    type: String,
    default: 'xl',
    validator: (v) => ['none', 'md', 'xl', 'full'].includes(v),
  },
  /** Padding around the text bars */
  textPadding: {
    type: String,
    default: 'px-3 py-2.5',
  },
})

const roundedClass = computed(() => {
  const map = {
    none: '',
    md:   'rounded-md',
    xl:   'rounded-xl',
    full: 'rounded-full',
  }
  return map[props.rounded] ?? 'rounded-xl'
})
</script>
