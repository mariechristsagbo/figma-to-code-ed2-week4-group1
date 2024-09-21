<template>
  <div class="space-y-3">
    <div class="space-y-2">
      <img class="cursor-pointer rounded-2xl" :src="article.image" alt="" />
      <div class="flex space-x-3 font-medium text-lg">
        <span class="text-blue cursor-pointer">{{ article.category }}</span>
        <span class="text-gray-medium">{{ article.date }}</span>
      </div>
    </div>
    <div class="space-y-3">
      <Link to="#" class="text-dark text-xl lg:text-2xl">
        {{ article.title }}
      </Link>
      <p class="text-lg text-gray-medium">{{ article.summary }}</p>
      <Link
        :to="article.link"
        class="text-blue text-lg font-medium flex items-center space-x-2"
      >
        <span>Read More</span>
        <img
          class="transition-transform duration-700 group-hover:translate-x-1"
          src="~/assets/images/icons/arrow-right.svg"
          alt=""
        />
      </Link>
    </div>
  </div>
</template>
<script setup>
import Link from "../ui/Link.vue";
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>
