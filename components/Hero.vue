<template>
  <div
    class="px-4 lg:px-16 py-12 lg:py-20 lg:flex space-y-16 gap-24 lg:space-y-0"
  >
    <div class="lg:w-1/2 space-y-6 md:space-y-10">
      <Bande></Bande>
      <div class="space-y-6 md:space-y-16 lg:pr-16">
        <div class="space-y-5">
          <h1
            class="text-dark font-roboto tracking-tighter text-4xl md:text-5xl xl:text-7xl xl:leading-normal"
          >
            Connecting You <span class="text-blue">to</span> Better Health
          </h1>
          <p class="md:text-2xl text-gray-medium">
            We're here to link you directly to improved health outcomes,
            effortlessly connecting you with the care you need.
          </p>
        </div>
        <div
          class="block md:flex lg:block xl:flex items-center space-y-4 xl:space-y-0 gap-6"
        >
          <Link
            to="/appointment"
            class="flex text-center justify-center rounded-full font-medium py-4 px-12 md:text-xl text-white bg-blue"
            >Book Consultation</Link
          >
          <Link
            to="#"
            class="group flex text-center justify-center items-center space-x-2 rounded-full font-medium py-4 px-12 md:text-xl text-blue border border-blue"
          >
            <span>Lean More</span>
            <img
              class="transition-transform duration-700 group-hover:translate-x-1"
              src="~/assets/images/icons/arrow-right.svg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
    <div class="lg:w-1/2 relative h-fit">
      <img
        class="rounded-4xl relative"
        src="~/assets/images/hero/hero.png"
        alt=""
      />
      <div
        class="absolute -top-10 -right-3 lg:-right-10 w-48 md:w-80 p-4 rounded-3xl flex justify-between items-center bg-white border border-blue-pale"
      >
        <div class="text-blue font-semibold flex text-2xl lg:text-5xl">
          <AnimatedCounter :endVal="10" :duration="2"></AnimatedCounter>
          <span>k+</span>
        </div>
        <span class="text-gray-medium text-center text-xs md:text-lg capitalize"
          >hours of patient meetings</span
        >
      </div>
      <div
        class="absolute -bottom-10 -left-3 w-52 md:w-72 p-4 rounded-3xl flex flex-col space-y-1 items-center bg-white border border-blue-pale"
      >
        <div class="flex items-center">
          <div class="flex items-center">
            <img
              class="size-6 md:size-10 absolute cursor-pointer left-3 md:left-4"
              src="~/assets/images/hero/01.png"
              alt=""
            />
            <img
              class="size-6 md:size-10 absolute cursor-pointer left-6 md:left-9"
              src="~/assets/images/hero/02.png"
              alt=""
            />
            <img
              class="size-6 md:size-10 absolute cursor-pointer left-9 md:left-14"
              src="~/assets/images/hero/03.png"
              alt=""
            />
            <img
              class="size-6 md:size-10 absolute cursor-pointer left-12 md:left-20"
              src="~/assets/images/hero/04.png"
              alt=""
            />
          </div>
          <div class="relative ml-24">
            <span class="text-blue font-semibold text-2xl lg:text-4xl">
              <AnimatedCounter :endVal="2650" :duration="1"></AnimatedCounter>
              <span>+</span>
            </span>
          </div>
        </div>
        <span class="text-gray-medium text-center text-xs md:text-lg"
          >patients have trusted us
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import Link from "~/components/ui/Link.vue";
import Bande from "~/components/Bande.vue";
import AnimatedCounter from "~/components/ui/AnimatedCounter.vue";
</script>
