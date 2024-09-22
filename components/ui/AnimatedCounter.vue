<template>
  <span ref="counter">{{ displayCount }}</span>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { CountUp } from "countup.js";

const props = defineProps({
  endVal: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    default: 2,
  },
});

const displayCount = ref(0);
const counter = ref(null);

onMounted(() => {
  if (counter.value) {
    const countUp = new CountUp(counter.value, props.endVal, {
      startVal: 0,
      duration: props.duration,
    });

    if (countUp.error) {
      console.error(countUp.error);
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              countUp.start();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 },
      );

      observer.observe(counter.value);
    }
  }
});
</script>
