<template>
  <div class="mx-4 lg:mx-16 my-24 space-y-6 lg:space-y-10">
    <div>
      <h2 class="text-2xl lg:text-5xl font-medium font-roboto">
        Testimonials From Our
        <span class="text-blue italic">Satisfied</span> Patients
      </h2>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <TestimonialItem
        v-for="(testimonial, index) in testimonials"
        :testimonial="testimonial"
        :key="index"
      ></TestimonialItem>
    </div>
  </div>
</template>
<script setup>
import TestimonialItem from "./TestimonialItem.vue";
const glob = import.meta.glob("~/assets/images/testimonials/*", {
  eager: true,
});

const getImage = (imageName) => {
  return glob[`/assets/images/testimonials/${imageName}`]["default"];
};
const testimonials = [
  {
    name: "David Panjaitan",
    title: "Software Engineer",
    text: "I've been using this site for a few months, and it's incredibly reliable. I appreciate the convenience of booking and canceling appointments anytime, anywhere",
    pic: getImage("01.png"),
  },
  {
    name: "Ester Howard",
    title: "Project Manager",
    text: "Managing appointments for my entire family used to be chaotic. This site makes it so much easier to keep track of everyone’s schedules in one place.",
    pic: getImage("02.png"),
  },
];
</script>
