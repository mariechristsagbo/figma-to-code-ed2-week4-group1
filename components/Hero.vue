<template>
  <div class="bg-red- px-16 py-20 flex gap-24">
    <div class="w-1/2 bg-green- space-y-10">
      <div
        class="flex items-center justify-center space-x-4 bg-blue-light py-3 px-6 cursor-pointer rounded-full"
      >
        <img src="~/assets/images/icons/star.svg" alt="" />
        <p class="text-xl font-medium text-blue">
          Rated #1 choice for healthcare appointments by users
        </p>
      </div>
      <div class="flex flex-col space-y-16 pr-16">
        <div>
          <h1
            class="text-dark font-roboto tracking-tighter leading-normal text-7xl"
          >
            Connecting You <span class="text-blue">to</span> Better Health
          </h1>
          <p class="text-2xl text-gray-medium">
            We're here to link you directly to improved health outcomes,
            effortlessly connecting you with the care you need.
          </p>
        </div>
        <div class="flex items-center space-x-6">
          <Link
            to="/booking"
            class="rounded-full font-medium py-4 px-12 text-xl text-white bg-blue"
            >Book Consultation</Link
          >
          <Link
            to="#"
            class="group flex items-center space-x-2 rounded-full font-medium py-4 px-12 text-xl text-blue border border-blue"
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
    <div class="w-1/2 relative">
      <img class="rounded-4xl" src="~/assets/images/hero/hero.png" alt="" />
      <div
        class="absolute -top-10 -right-10 w-80 p-4 rounded-3xl flex justify-between items-center bg-white border border-blue-pale"
      >
        <span class="text-blue font-semibold text-5xl">10k+</span>
        <span class="text-gray-medium text-center text-lg capitalize"
          >hours of patient meetings</span
        >
      </div>
      <div
        class="absolute -bottom-10 -left-10 w-fit p-4 rounded-3xl flex flex-col justify-between items-center bg-white border border-blue-pale"
      >
        <div class="flex justify-between">
          <div class="flex">
            <img
              class="size-10 absolute cursor-pointer left-4"
              src="~/assets/images/hero/01.png"
              alt=""
            />
            <img
              class="size-10 absolute cursor-pointer left-9"
              src="~/assets/images/hero/02.png"
              alt=""
            />
            <img
              class="size-10 absolute cursor-pointer left-14"
              src="~/assets/images/hero/03.png"
              alt=""
            />
            <img
              class="size-10 absolute cursor-pointer left-20"
              src="~/assets/images/hero/04.png"
              alt=""
            />
          </div>
          <div class="relative ml-32">
            <span class="text-blue font-semibold text-4xl">2.650+</span>
          </div>
        </div>
        <span class="text-gray-medium text-center text-lg"
          >patients have trusted us
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import Link from "~/components/ui/Link.vue";
</script>
