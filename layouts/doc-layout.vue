<template>
   <div class="font-inter">
    <Navbar />
    <div class="max-w-screen-xl xl:max-w-full mx-auto grid lg:ml-56 lg:flex items-start">
      <div>
        <AsideBar />
      </div>
      <div class="p-7 w-full">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>