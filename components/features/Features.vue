<template>
  <div class="mx-4 lg:mx-16 my-24 space-y-6 lg:space-y-10">
    <div>
      <h2 class="text-2xl lg:text-center lg:text-5xl font-medium font-roboto">
        Explore Our App's <span class="text-blue italic">Features</span>
      </h2>
    </div>
    <div class="grid md:flex gap-2 items-stretch">
      <div class="space-y-2">
        <FeatureItem :feature="features[0]"></FeatureItem>
        <div class="grid md:flex gap-2">
          <FeatureItem :feature="features[1]"></FeatureItem>
          <FeatureItem class="md:hidden" :feature="features[3]"></FeatureItem>
          <FeatureItem :feature="features[2]"></FeatureItem>
        </div>
      </div>
      <div class="hidden md:flex">
        <FeatureItem :feature="features[3]"></FeatureItem>
      </div>
    </div>
  </div>
</template>
<script setup>
import FeatureItem from "./FeatureItem.vue";

const glob = import.meta.glob("~/assets/images/icons/*", {
  eager: true,
});

const getImage = (imageName) => {
  return glob[`/assets/images/icons/${imageName}`]["default"];
};
const features = [
  {
    icon: getImage("calendar-heart.svg"),
    title: "Convenient Online Booking",
    description:
      "Easily schedule consultations and meetings with healthcare professionals through our user-friendly online booking platform.",
    background: true,
    class: "bg__mobile",
  },
  {
    icon: getImage("file.svg"),
    title: "Records Management",
    description:
      "Effortlessly store and access patient medical records, ensuring vital information is available for healthcare providers during appointments.",
    background: false,
    class: "",
  },
  {
    icon: getImage("check.svg"),
    title: "Instant Confirmation",
    description:
      "Receive instant confirmation of your booked appointments, along with timely reminders to ensure you never miss a meeting.",
    background: false,
    class: "",
  },
  {
    icon: getImage("video-conference.svg"),
    title: "Secure Virtual Meetings",
    description:
      "Experience secure and convenient virtual consultations from home. Our encrypted video conferencing guarantees confidential interactions, removing the need for in-person visits.",
    background: true,
    class: "bg__iphone",
  },
];
</script>
