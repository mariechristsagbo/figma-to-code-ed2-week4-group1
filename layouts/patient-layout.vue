<template>
  <div class="w-screen h-screen flex text-red overflow-y-hidden">
    <!-- side bar -->
    <div class="w-[300px] h-full">
      <div class="h-[60px] border-b flex justify-center items-center">
        <img :src="logo" alt="Logo" class="w-24 sm:w-32" />
      </div>
      <div class="h-[calc(100vh-80px)]">
        <Menu />
      </div>
    </div>

    <div class="w-full h-full bg-white">
      <div class="h-[60px] border-b">
        <div
          class="leftheader h-[100%] gap-4 flex justify-end items-center pr-[5%]"
        >
          <img :src="carbon_notification" alt="notification" class="w-[30px]" />

          <div
            class="flex space-x-2 items-center bg-gray-lighter p-3 rounded-2xl"
          >
            <img
              src="/icons/profile-nav-icon.svg"
              alt="Icon Profile"
              class="w-5"
            />
            <p class="text-sm">Ravad Nadam</p>
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
</script>

<style></style>
