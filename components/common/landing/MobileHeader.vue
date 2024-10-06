<template>
  <div class="">
    <div class="flex justify-between items-center">
      <img class="cursor-pointer" src="~/assets/images/logo.svg" alt="Logo" />
      <img
        @click="toogleMenu"
        class="cursor-pointer"
        src="~/assets/images/icons/list.svg"
        alt="Logo"
      />
    </div>
    <div
      v-if="activeMenu"
      class="fixed top-0 bg-white space-y-8 w-full pr-10 py-8 h-full z-50"
    >
      <div class="flex justify-end">
        <img
          @click="toogleMenu"
          class="block size-4 cursor-pointer"
          src="~/assets/images/icons/close.svg"
          alt="Logo"
        />
      </div>
      <div class="py-3">
        <ul class="space-y-5">
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
          to="/home"
          class="text-white font-medium bg-blue rounded-full text-lg py-4 px-16 transition-opacity duration-500 hover:opacity-80"
        >
          Login</Link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import Link from "~/components/ui/Link.vue";
import { ref } from "vue";

const navItems = ref([
  { text: "Home", to: "/" },
  { text: "Services", to: "#services" },
  { text: "Find a Doctor", to: "#find-a-doctor" },
  { text: "About Us", to: "/#about-us" },
]);

const activeMenu = ref(false);
const toogleMenu = () => {
  activeMenu.value = !activeMenu.value;
};
</script>

<style scoped></style>
