<template>
  <div class="w-screen h-screen flex text-red overflow-y-hidden">
    <!-- side bar -->
    <div class="lg:block hidden w-[300px] h-full">
      <NuxtLink to="/">
        <div class="h-[60px] p-9 flex items-center">
          <img :src="logo" alt="Logo" class="w-24 sm:w-32" />
        </div>
      </NuxtLink>
      <div class="h-[calc(100vh-60px)]">
        <Menu />
      </div>
    </div>

    <!-- Mobile section side bar -->
    <div
      class="lg:hidden lg:stactic absolute w-full mt-[75px] md:w-1/2 border h-screen bg-white left-0 z-30 duration-500 lg:duration-0 ease-in-out"
      :class="[open ? 'left-0' : 'left-[-100%]']"
    >
      <div class="h-[calc(100vh-80px)] mt-">
        <Menu class="bg-white" />
        <img
          v-if="open"
          src="/icons/close-icon.svg"
          alt="Logo"
          class="absolute z-50 top-6 size-5 cursor-pointer right-4"
          @click="menuOpen"
        />
      </div>
    </div>

    <div class="w-full h-full bg-white">
      <div
        class="relative flex justify-between items-center p-[6px] border-b-2"
      >
        <div class="flex space-x-2 p-4 lg:hidden items-center">
          <img
            src="/icons/burger-menu-icon.svg"
            alt="Burger-menu"
            @click="menuOpen"
            class="block lg:hidden"
          />
          <NuxtLink to="/">
            <img :src="logo" alt="Logo" class="w-24 sm:w-32" />
          </NuxtLink>
        </div>
        <div class="h-[60px]">
          <div
            class="h-[100%] absolute right-6 top-0 flex space-x-6 items-center"
          >
            <img
              :src="carbon_notification"
              alt="notification"
              class="w-[30px]"
            />

            <div
              class="flex space-x-2 items-center bg-gray-lighter p-3 rounded-2xl"
            >
              <img
                src="/icons/profile-nav-icon.svg"
                alt="Icon Profile"
                class="w-5"
              />
              <p class="text-sm hidden md:block">Ravad Nadam</p>
            </div>
          </div>
        </div>
      </div>

      <div class="h-[calc(100vh-60px)] bg-gray overflow-y-auto">
        <NuxtPage />
      </div>
    </div>
    <!-- main -->
  </div>
</template>

<script setup>
import logo from "@/assets/images/logo.svg";
import carbon_notification from "@/assets/images/carbon_notification.png";
import Vector from "@/assets/images/Vector.png";

const open = ref(false);

const menuOpen = () => {
  open.value = !open.value;
};
</script>

<style></style>
