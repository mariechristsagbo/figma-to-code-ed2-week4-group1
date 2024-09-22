<template>
    <div>
        <div class="hidden lg:flex p-5 border-r w-56 h-full fixed bg-gray-light left-0 z-30">
            <div class="space-y-3">
    <div class="px-4 grow">
      <div class="grid gap-5">
        <NuxtLink v-for="(item, index) in items" :key="index" :to="item.path" :class="[
          'flex items-center gap-2 pr-6 p-2 transition rounded cursor-pointer w-48 lg:w-full',
          $route.path === item.path
            ? 'bg-[#0F4C5C] text-white'
            : 'hover:bg-gray-lighter'
        ]">
          <img :src="item.icon" :alt="item.title" class="w-4" :class="{ invert: $route.path === item.path }" />
          <span>{{ item.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style>






</style>