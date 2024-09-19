<template>
  <div class="relative flex">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div class="h-full">
        <img class="w-full h-full object-cover" :src="testimonial.pic" alt="" />
      </div>
      <div
        class="bg-gray-pale h-full flex flex-col rounded-xl py-10 px-3 md:px-6 font-medium"
      >
        <p class="text-xl text-dark">"{{ testimonial.text }}”</p>
        <div class="flex flex-col space-y-1 mt-10">
          <span class="text-blue text-xl lg:text-2xl">{{
            testimonial.name
          }}</span>
          <span class="text-gray-medium text-lg font-normal">{{
            testimonial.title
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  testimonial: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
