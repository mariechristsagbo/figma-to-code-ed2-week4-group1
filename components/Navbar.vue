<template>
  <div class="sticky z-30 top-0 bg-white border-b-2">
    <div
      class="flex justify-between items-center max-w-screen-xl mx-auto xl:max-w-full p-3 md:px-8 md:py-3"
    >
      <div class="flex space-x-2 items-center">
        <img
          src="/icons/burger-menu-icon.svg"
          alt="Burger-menu"
          @click="menuOpen"
          class="block lg:hidden"
        />
        <NuxtLink to="/">
          <img
            src="/icons/logo-icon.svg"
            alt="logo Icon"
            class="w-24 sm:w-32"
          />
        </NuxtLink>
      </div>
      <div class="flex space-x-2 items-center bg-gray-lighter p-3 rounded-2xl">
        <img src="/icons/profile-nav-icon.svg" alt="Icon Profile" class="w-5" />
        <p class="text-sm hidden md:block">Ravad Nadam</p>
      </div>
    </div>

    <div
      class="lg:hidden lg:stactic absolute w-full md:w-1/2 p-5 border h-screen bg-white left-0 z-30 duration-500 lg:duration-0 ease-in-out"
      :class="[open ? 'left-0' : 'left-[-100%]']"
    >
      <AsideBarMenu />
      <img
        v-if="open"
        src="/icons/close-icon.svg"
        alt="Close Icon"
        class="absolute z-50 top-6 size-5 cursor-pointer right-4"
        @click="menuOpen"
      />
    </div>
  </div>
</template>

<script setup>
const open = ref(false);

const menuOpen = () => {
  open.value = !open.value;
};
</script>

<style></style>
