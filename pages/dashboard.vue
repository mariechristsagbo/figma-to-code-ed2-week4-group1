<template>
  <div class="overflow-y-hidden py-4 px-10">
    <p class="text-2xl font-bold text-gray-900">Book an appointment</p>

    <p class="text-gray-900 pt-10 pb-1">Specilization:</p>

    <div class="flex gap-20 flex-wrap">
      <button
        class="bg-blue-500 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-600"
      >
        <span> Cardiologist</span>
      </button>
      <button
        class="bg-blue-500 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-600"
      >
        <span> Pediatrians</span>
      </button>
      <button
        class="bg-blue-500 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-600"
      >
        <span> Neurologist</span>
      </button>
      <button
        class="bg-blue-500 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-600"
      >
        <span> Dermatologist</span>
      </button>
    </div>

    <p class="pt-10 pb-1">Avaliable doctors:</p>
    <div class="grid grid-cols-2 gap-2.5">
      <div
        class="flex items-center justify-center align-center bg-blue rounded-[23px] w-[400px] p-[9px]"
      >
        <div class="photo">
          <img :src="doc1" alt="people" class="w-[70%]" />
        </div>

        <div class="flex-col justify-center text-center align-center0 w-[90%]">
          <h3 class="text-white text-2xl">Dr.Mohammed Isamel</h3>
          <p class="text-white text-1xl pt-[7px] pb-[7px]">
            Bineveler Mahallest
          </p>
          <div class="stars flex justify-center">
            <img :src="doc1note" alt="people" class="w-[50%]" />
          </div>
        </div>
      </div>

      <div
        class="flex items-center justify-center align-center bg-blue rounded-[23px] w-[400px] p-[5px]"
      >
        <div class="photo">
          <img :src="doc2" alt="people" class="w-[70%]" />
        </div>

        <div class="flex-col justify-center text-center align-center0 w-[90%]">
          <h3 class="text-white text-2xl">Dr.Nadia Fallah</h3>
          <p class="text-white text-1xl pt-[7px] pb-[7px]">
            Bineveler Mahallest
          </p>
          <div class="stars flex justify-center">
            <img :src="doc2note" alt="people" class="w-[50%]" />
          </div>
        </div>
      </div>

      <div
        class="flex items-center justify-center align-center bg-blue rounded-[23px] w-[400px] p-[5px]"
      >
        <div class="photo">
          <img :src="doc4" alt="people" class="w-[70%]" />
        </div>

        <div class="flex-col justify-center text-center align-center0 w-[90%]">
          <h3 class="text-white text-2xl">Dr. Salih Ahmet</h3>
          <p class="text-white text-1xl pt-[7px] pb-[7px]">
            Bineveler Mahallest
          </p>
          <div class="stars flex justify-center">
            <img :src="doc4note" alt="people" class="w-[50%]" />
          </div>
        </div>
      </div>

      <div
        class="flex items-center justify-center align-center bg-blue rounded-[23px] w-[400px] p-[5px]"
      >
        <div class="photo">
          <img :src="doc3" alt="people" class="w-[70%]" />
        </div>

        <div
          class="flex-col justify-center text-center align-center0 w-[90%] pr-[8px]"
        >
          <h3 class="text-white text-2xl">Dr. Mohammed Ismail</h3>
          <p class="text-white text-1xl pt-[7px] pb-[7px]">
            Bineveler Mahallest
          </p>
          <div class="stars flex justify-center">
            <img :src="doc3note" alt="people" class="w-[50%]" />
          </div>
        </div>
      </div>
    </div>

    <div>
      <p class="pt-10 pb-1">Avaliable day:</p>
    </div>
  </div>
</template>

<script setup>
import doc1 from "@/assets/images/doc1.png";
import doc1note from "@/assets/images/doc1note.png";

import doc2 from "@/assets/images/doc2.png";
import doc2note from "@/assets/images/doc2note.png";

import doc3 from "@/assets/images/doc3.png";
import doc3note from "@/assets/images/doc3note.png";

import doc4 from "@/assets/images/doc4.png";
import doc4note from "@/assets/images/doc4note.png";

definePageMeta({
  layout: "patient-layout",
});
</script>
<style></style>
