<template>
  <div class="mx-4 lg:mx-16 my-20 space-y-6 lg:space-y-10">
    <div>
      <h2 class="text-2xl lg:text-5xl font-medium font-roboto">
        Expert Advice and Updates <span class="text-blue italic">Health</span>
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <BlogItem
        v-for="(article, index) in articles"
        :article="article"
        :key="index"
      ></BlogItem>
    </div>
    <div>
      <SeeMoreLink to="#"></SeeMoreLink>
    </div>
  </div>
</template>
<script setup>
import BlogItem from "./BlogItem.vue";
import SeeMoreLink from "~/components/ui/SeeMoreLink.vue";

const glob = import.meta.glob("~/assets/images/blog/*", {
  eager: true,
});

const getImage = (imageName) => {
  return glob[`/assets/images/blog/${imageName}`]["default"];
};

const articles = [
  {
    title: "Diet Tips for a Healthier Lifestyle",
    date: "28 April 2024",
    category: "Diet Tips",
    image: getImage("01.png"),
    summary:
      "Maintaining a healthy diet is crucial for overall well-being and can prevent numerous health issues.",
    link: "#",
  },
  {
    title: "The Importance of Regular Health",
    date: "21 April 2024",
    category: "Health Tips",
    image: getImage("02.png"),
    summary:
      "Regular health screenings are essential for early detection and prevention of various health condi.",
    link: "#",
  },
  {
    title: "Boosting Your Immune System Natu",
    date: "14 April 2024",
    category: "Health Tips",
    image: getImage("03.png"),
    summary:
      "A strong immune system is vital for fighting off infections and staying healthy.",
    link: "#",
  },
];
</script>
