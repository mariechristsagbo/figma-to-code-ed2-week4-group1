 
<template>
  <div class="">
    <div class="hidden lg:block py-8 px-16">
      <Header></Header>
    </div>
    <div class="lg:hidden py-6 px-4 border-b">
      <MobileHeader></MobileHeader>
    </div>
    <div>
      <slot></slot>
    </div>
    <div class="">
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup>
import Header from "~/components/common/landing/Header.vue";
import MobileHeader from "~/components/common/landing/MobileHeader.vue";
import Footer from "~/components/common/landing/Footer.vue";
useHead({
  title: "MedEase",
});
</script>
