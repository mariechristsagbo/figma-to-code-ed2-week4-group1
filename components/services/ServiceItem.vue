<template>
  <div
    class="bg-gray-pearl cursor-pointer rounded-2xl py-11 px-6 space-y-6 transition-transform duration-700 hover:scale-95"
  >
    <div
      class="bg-gray-lighter p-2 rounded-full flex justify-center items-center max-w-fit"
    >
      <img :src="service.icon" alt="" />
    </div>
    <div class="space-y-2">
      <h2 class="font-medium text-2xl lg:text-3xl">{{ service.title }}</h2>
      <p class="text-gray-medium lg:text-xl">{{ service.description }}</p>
    </div>
    <Link class="flex text-blue items-center space-x-2 group" to="#">
      <span class="font-medium lg:text-xl">Book Consultation</span>
      <img
        class="transition-transform duration-300 group-hover:translate-x-1"
        src="~/assets/images/icons/arrow-right.svg"
        alt=""
      />
    </Link>
  </div>
</template>
<script setup>
import Link from "~/components/ui/Link.vue";
import { ref, defineProps } from "vue";
const props = defineProps({
  service: {
    type: Object,
    required: true,
  },
});
</script>
