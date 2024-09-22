<template>
  <div class="flex justify-center">
    <Link
      :to="to"
      class="group w-full sm:w-fit flex text-center justify-center items-center space-x-2 rounded-full font-medium py-3 px-8 md:text-xl text-blue border border-blue"
    >
      <span>See More</span>
      <img
        class="transition-transform duration-700 group-hover:translate-x-1"
        src="~/assets/images/icons/arrow-right.svg"
        alt=""
      />
    </Link>
  </div>
</template>
<script setup>
import Link from "../ui/Link.vue";
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>
