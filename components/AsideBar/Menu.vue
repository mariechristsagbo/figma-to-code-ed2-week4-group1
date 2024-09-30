<template>
  <div class="space-y-3">
    <div class="px-4 grow">
      <div class="grid gap-5">
        <NuxtLink
          v-for="(item, index) in items"
          :key="index"
          :to="item.path"
          :class="[
            'flex items-center gap-2 pr-6 p-2  mr-2 transition rounded-md cursor-pointer w-48 lg:w-full',
            $route.path === item.path
              ? 'bg-blue text-white'
              : 'hover:bg-gray-lighter',
          ]"
        >
          <img
            :src="$route.path === item.path ? item.iconWhite : item.icon"
            :alt="item.title"
            class="w-6"
          />
          <span>{{ item.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const items = ref([
  {
    title: "Appointments",
    path: "/doc-dashboard",
    icon: "/icons/calendar-icon.svg",
    iconWhite: "/icons/calendar-white-icon.svg",

  },
  {
    title: "Prescriptions",
    path: "/prescriptions",
    icon: "/icons/prescription-icon.svg",
    iconWhite: "/icons/prescription-white-icon.svg",
  },
  {
    title: "Profile",
    path: "/doc-profile",
    icon: "/icons/profile-icon.svg",
    iconWhite: "/icons/profile-white-icon.svg",
  },
]);
</script>

<style scoped></style>
