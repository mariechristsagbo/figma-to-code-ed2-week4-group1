<template>
  <div
    class="bg-gray-darkest grid lg:grid-cols-2 space-y-10 lg:space-y-0 px-4 xl:px-16 py-12 md:py-24 text-white"
  >
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div v-for="item in items" :key="item.title" class="space-y-4">
        <h3 class="text-xl font-medium">{{ item.title }}</h3>
        <ul class="space-y-3">
          <li v-for="link in item.links" :key="link.text">
            <Link
              to="#"
              class="text-gray-light text-base block transform transition-all duration-500 hover:text-white hover:translate-x-1"
              :href="link.url"
            >
              {{ link.text }}
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div class="space-y-6 lg:w-2/3 lg:order-first">
      <Link to="/">
        <img src="~/assets/images/logo.svg" alt="Logo" />
      </Link>
      <p class="text-base text-gray-light">
        MedEase simplifies healthcare with an easy-to-use platform for booking
        appointments, telehealth services, and managing patient records.
      </p>
      <div>
        <ul class="flex gap-4">
          <li
            class="bg-blue cursor-pointer flex justify-center w-fit rounded-full p-2"
          >
            <a href="">
              <img src="~/assets/images/icons/facebook.svg" alt="" />
            </a>
          </li>
          <li
            class="bg-blue cursor-pointer flex justify-center w-fit rounded-full p-2.5"
          >
            <a href="">
              <img
                class="mt-0.5"
                src="~/assets/images/icons/instagram.svg"
                alt=""
              />
            </a>
          </li>
          <li
            class="bg-blue cursor-pointer flex justify-center w-fit rounded-full p-2"
          >
            <a href="">
              <img src="~/assets/images/icons/twitter.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Link from "~/components/ui/Link.vue";
const items = ref([
  {
    title: "Services",
    links: [
      { text: "Primary Care", url: "#" },
      { text: "Specialist Care", url: "#" },
      { text: "Mental Health Services", url: "#" },
      { text: "Telehealth", url: "#" },
    ],
  },
  {
    title: "Find a Doctor",
    links: [
      { text: "Top-Rated Doctors", url: "#" },
      { text: "Appointment Scheduling", url: "#" },
      { text: "Patient Reviews", url: "#" },
      { text: "Doctor Profiles", url: "#" },
    ],
  },
  {
    title: "About Us",
    links: [
      { text: "News and Updates", url: "#" },
      { text: "Careers", url: "#" },
      { text: "Community Involvement", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
]);
</script>
