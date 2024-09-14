<template>
  <div class="mx-20">
    <div class="py-8">
      <Header></Header>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import Header from "~/components/common/landing/Header.vue";
useHead({
  title: "MedEase",
});
</script>
