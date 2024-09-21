<template>
  <div class="mx-4 lg:mx-16 my-20 grid lg:grid-cols-2 gap-6 lg:gap-10">
    <Bande class="lg:hidden"></Bande>

    <div class="h-full flex">
      <img
        class="rounded-3xl object-cover"
        src="~/assets/images/about/doctors.png"
        alt=""
      />
    </div>
    <div class="space-y-6 lg:space-y-12 flex flex-col justify-between">
      <Bande class="hidden lg:flex"></Bande>
      <p class="text-dark text-lg lg:text-3xl leading-snug">
        We're revolutionizing healthcare with seamless access to trusted
        professionals, prioritizing your journey to better health.
      </p>
      <div class="flex justify-between">
        <div class="w-fit space-y-4 text-center">
          <h3 class="text-blue font-medium text-4xl lg:text-7xl">
            <AnimatedCounter :endVal="40" :duration="2"></AnimatedCounter>
            <span>+</span>
          </h3>
          <p class="text-sm lg:text-xl text-gray-medium">Dedicated Doctors</p>
        </div>
        <div class="w-fit text-center space-y-4">
          <h3 class="text-blue font-medium text-4xl lg:text-7xl">
            <AnimatedCounter :endVal="10" :duration="2"></AnimatedCounter>
            <span>K+</span>
          </h3>
          <p class="text-sm lg:text-xl text-gray-medium text-">
            Hours of patient Consultations
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Bande from "~/components/Bande.vue";
import AnimatedCounter from "~/components/ui/AnimatedCounter.vue";
</script>
