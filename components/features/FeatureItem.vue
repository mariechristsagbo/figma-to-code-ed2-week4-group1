<template>
  <div
    :class="feature.class"
    class="py-6 lg:py-10 px-2 lg:px-6 bg-gray-pale rounded-3xl relative"
  >
    <div class="space-y-4 lg:space-y-6 z-10 relative">
      <div
        class="bg-gray-lighter p-2 rounded-full flex justify-center items-center max-w-fit"
      >
        <img class="size-5 md:size-7" :src="feature.icon" alt="" />
      </div>
      <h2 class="text-sm lg:text-3xl font-medium text-dark">
        {{ feature.title }}
      </h2>
      <p class="text-gray-medium text-xs lg:text-lg">
        {{ feature.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  feature: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.bg__mobile {
  background-image: url("~/assets/images/features/mobile.png");
  background-position: calc(100% - 24px) bottom;
  background-size: 250px;
  background-repeat: no-repeat;
}
@media screen and (max-width: 1024px) {
  .bg__mobile {
    background-position: calc(100% - 8px) bottom;
    background-size: 130px;
  }
}
.bg__mobile div {
  width: 55%;
}

.bg__iphone {
  background-image: url("~/assets/images/features/iphone.png");
  background-position: 50% bottom;
  background-size: 250px;
  background-repeat: no-repeat;
}
@media screen and (max-width: 1024px) {
  .bg__iphone {
    background-position: calc(100% - 8px) bottom;
    background-size: 130px;
  }
}
@media screen and (max-width: 768px) {
  .bg__iphone div {
    width: 55%;
  }
}
@media screen and (min-width: 768px) {
  .bg__iphone {
    background-position: 50% bottom;
  }
}
</style>
