<template>
  <div class="bg py-24 space-y-12">
    <div class="lg:w-1/2 mx-auto">
      <h1 class="text-4xl lg:text-6xl text-white text-center">
        Start Your Health Journey Here
      </h1>
    </div>
    <div class="md:flex items-center justify-center md:space-x-10 px-5">
      <Link
        to="/appointment"
        class="bg-blue flex justify-center items-center rounded-full px-5 py-3 text-white"
        >Book Consultation Now</Link
      >
      <Link
        to="#"
        class="flex items-center justify-center mt-4 md:mt-0 space-x-2 border border-white rounded-full px-5 py-3 text-white"
      >
        <span>Learn More</span>
        <img
          class=""
          src="~/assets/images/icons/arrow-right-white.svg"
          alt=""
        />
      </Link>
    </div>
  </div>
</template>
<style scoped>
.bg {
  background-image: url("~/assets/images/start/banner.png");
}
</style>
<script setup>
import Link from "./ui/Link.vue";
</script>
