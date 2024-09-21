<script>
export default {
  name: "buttonComponent",
  props: {
    name: {
      type: String,
    },
    classes: {
      type: Array,
      required: true,
    },
    iconStart: {
      type: String,
    },
    iconEnd: {
      type: String,
    },
    numbers: {
      type: String,
    },
    styleNumbersButton: {
      type: Object,
    },
    styleNameButton: {
      type: Object,
    },
    classNumbersButton: {
      type: Array,
    },
    classNameButton: {
      type: Array,
    },
    classIconButton: {
      type: Array,
    },
    iconWidth: {
      type: String,
      default: '20px',
    },
    iconHeight: {
      type: String,
      default: '20px',
    },
    to: {
      type: String, // This will be used for NuxtLink
      default: null,
    },
  },
  computed: {
    iconStartSrc() {
      return this.iconStart ? this.getIconSrc(this.iconStart) : null;
    },
    iconEndSrc() {
      return this.iconEnd ? this.getIconSrc(this.iconEnd) : null;
    },
  },
  methods: {
    getIconSrc(iconName) {
      const icons = import.meta.glob('../assets/icons/*.svg', { eager: true });
      const path = `../assets/icons/${iconName}`;
      return icons[path]?.default || ''; 
    },
  },
};
</script>

<template>
  <component :is="to ? 'NuxtLink' : 'button'" :to="to" :class="classes">
    <img v-if="iconStart" :src="iconStartSrc" :style="{ width: iconWidth, height: iconHeight }" class="icon-start" />
    <span :class="classNameButton" :style="styleNameButton">{{ name }}</span>
    <span :class="classNumbersButton" :style="styleNumbersButton">{{ numbers }}</span>
    <img v-if="iconEnd" :src="iconEndSrc" :style="{ width: iconWidth, height: iconHeight }" class="icon-end" />
  </component>
</template>

<style>
button, a, NuxtLink {
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none; /* Remove underline for <a> */
}
</style>
