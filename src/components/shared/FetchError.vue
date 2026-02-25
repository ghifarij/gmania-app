<template>
  <!--
    FetchError
    ─────────────────────────────────────────────────────────────────
    Single Responsibility: renders a consistent error message when an
    API request fails.  Callers supply the human-readable message; this
    component owns only the icon + layout.
  -->
  <div :class="['text-center py-6 text-gray-400 text-sm', extraClass]">
    <i class="pi pi-exclamation-triangle mr-2" />
    <slot>Something went wrong. Please try again.</slot>
  </div>
</template>

<script setup>
/**
 * FetchError
 *
 * SOLID applied:
 *  S — only responsible for displaying a fetch-error indicator.
 *  O — message is injected via the default slot; icon/layout never change.
 *  I — accepts only the classes it needs to forward.
 */
defineProps({
  /** Extra Tailwind classes forwarded to the root element (e.g. 'px-4') */
  extraClass: {
    type: String,
    default: '',
  },
})
</script>
