<template>
  <div class="flex justify-between items-center">
    <div>
      <Link to="/">
        <img src="~/assets/images/logo.svg" alt="Logo" />
      </Link>
    </div>
    <div class="py-3">
      <ul class="flex space-x-12">
        <li v-for="(item, index) in navItems" :key="index">
          <Link
            class="text-gray-medium text-xl transition-colors duration-500 hover:text-blue"
            :to="item.to"
            >{{ item.text }}</Link
          >
        </li>
      </ul>
    </div>
    <div>
      <Link
        to="/register/patient"
        class="text-white font-medium bg-blue rounded-full text-lg py-4 px-16 transition-opacity duration-500 hover:opacity-80"
        >Register</Link
      >
    </div>
  </div>
</template>

<script setup>
import Link from "~/components/ui/Link.vue";
import { ref } from "vue";

const navItems = ref([
  { text: "Home", to: "/" },
  { text: "Services", to: "#services" },
  { text: "Find a Doctor", to: "/dashboard" },
  { text: "About Us", to: "/#about-us" },
]);
</script>

<style scoped></style>
