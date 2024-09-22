<template>
  <a :href="to" :class="computedClass" :target="target" :rel="rel">
    <slot></slot>
  </a>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
  target: {
    type: String,
    default: "_self",
  },
  rel: {
    type: String,
    default: "",
  },
});

const computedClass = computed(() => {
  return props.className;
});
</script>

<style scoped></style>
