<template>
  <div class="mx-4 lg:mx-16 my-20 space-y-6 lg:space-y-10">
    <div>
      <h2 class="text-2xl lg:text-5xl font-medium font-roboto">
        Choose Doctor's <span class="text-blue italic">Expertise</span>
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
      <ServiceItem
        v-for="(service, index) in services"
        :service="service"
        :key="index"
      ></ServiceItem>
    </div>
    <SeeMoreLink to="#"></SeeMoreLink>
  </div>
</template>
<script setup>
import Link from "../ui/Link.vue";
import ServiceItem from "~/components/services/ServiceItem.vue";
import SeeMoreLink from "~/components/ui/SeeMoreLink.vue";
const glob = import.meta.glob("~/assets/images/icons/*", {
  eager: true,
});

function getImage(imageName) {
  return glob[`/assets/images/icons/${imageName}`]["default"];
}

const services = ref([
  {
    title: "Cardiologist",
    description:
      "Heart specialist focusing on cardiovascular health and diseases.",
    icon: getImage("heartbeat.svg"),
  },
  {
    title: "Neurologist",
    description:
      "Doctor specializing in diagnosing and treating nervous system disorders.",
    icon: getImage("brain.svg"),
  },
  {
    title: "ENT Specialist",
    description:
      "Doctor specializing in ear, nose, and throat disorders and surgeries.",
    icon: getImage("ear.svg"),
  },
]);
</script>
