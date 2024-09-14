<template>
  <div class="">
    <div class="py-8 px-16">
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
