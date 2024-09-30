<template>
  <div class="p-8">
    <h2 class="text-red-500 font-bold text-xl mb-4">Upcoming</h2>
    <div
      class="flex items-center justify-between border border-gray-300 rounded-lg p-4 mb-4"
    >
      <div class="flex items-center space-x-4">
        <img :src="doc2" alt="Doctor Avatar" class="w-16 h-16 rounded-full" />
        <div>
          <p class="text-blue font-semibold text-lg">Dr. Nadia Fallah</p>
          <p class="text-gray-500">Cardiologist</p>
          <div class="flex items-center text-sm text-gray-500 mt-2">
            <img
              src="/icons/calendar-icon.svg"
              alt="Calendar Icon"
              class="w-4 h-4 mr-2"
            />
            <span>13.02.2024 - 09:00</span>
            <img
              src="/icons/location-icon.svg"
              alt="Location Icon"
              class="w-4 h-4 ml-4 mr-2"
            />
            <span>Binevler Mahallesi</span>
          </div>
        </div>
      </div>
      <button class="text-red-500 border border-red-500 px-4 py-2 rounded-lg">
        Cancel
      </button>
    </div>

    <!-- --------------------------------------------- -->

    <div
      class="flex items-center justify-between border border-gray-300 rounded-lg p-4 mb-4"
    >
      <div class="flex items-center space-x-4">
        <img :src="doc1" alt="Doctor Avatar" class="w-16 h-16 rounded-full" />
        <div>
          <p class="text-blue font-semibold text-lg">Dr. Mohammed Ismail</p>
          <p class="text-gray-500">Cardiologist</p>
          <div class="flex items-center text-sm text-gray-500 mt-2">
            <img
              src="/icons/calendar-icon.svg"
              alt="Calendar Icon"
              class="w-4 h-4 mr-2"
            />
            <span>14.02.2024 - 13:00</span>
            <img
              src="/icons/location-icon.svg"
              alt="Location Icon"
              class="w-4 h-4 ml-4 mr-2"
            />
            <span>Binevler Mahallesi</span>
          </div>
        </div>
      </div>
      <button class="text-red-500 border border-red-500 px-4 py-2 rounded-lg">
        Cancel
      </button>
    </div>

    <!-- --------------------------------------------- -->
    <div>
      <h2 class="text-red-500 font-bold text-xl mb-4">Past</h2>

      <!-- Carte de rendez-vous passé -->
      <div
        class="flex items-center justify-between border border-gray-300 rounded-lg p-4 mb-4"
      >
        <div class="flex items-center space-x-4">
          <img
            :src="doc4"
            alt="Doctor Avatar"
            class="w-16 h-16 rounded-full"
          />
          <div>
            <p class="text-blue font-semibold text-lg">Dr. Salih Ahmet</p>
            <p class="text-gray-500">Cardiologist</p>
            <div class="flex items-center text-sm text-gray-500 mt-2">
              <img
                src="/icons/calendar-icon.svg"
                alt="Calendar Icon"
                class="w-4 h-4 mr-2"
              />
              <span>14.02.2024 - 13:00</span>
              <img
                src="/icons/location-icon.svg"
                alt="Location Icon"
                class="w-4 h-4 ml-4 mr-2"
              />
              <span>Binevler Mahallesi</span>
            </div>
          </div>
        </div>
        <button
          class="text-blue-500 border border-blue-500 px-4 py-2 rounded-lg"
        >
          View prescription
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import doc1 from "@/assets/images/doc1.png";
import doc2 from "@/assets/images/doc2.png";
import doc4 from "@/assets/images/doc4.png";
definePageMeta({
  layout: "patient-layout",
});
</script>

<style scoped></style>
