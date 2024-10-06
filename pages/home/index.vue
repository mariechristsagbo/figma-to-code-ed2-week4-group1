<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-2xl font-semibold mb-8">Tell us what are you?</h1>
    <div class="flex space-x-12 mb-12">
      <NuxtLink to="/register/doctor">
        <div class="flex flex-col items-center cursor-pointer">
          <div
            class="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4"
          >
            <img src="/images/doctor.svg" alt="Doctor" class="w-16 h-16" />
          </div>
          <p class="text-lg font-medium">Doctor</p>
        </div>
      </NuxtLink>

      <NuxtLink to="/register/patient">
        <div class="flex flex-col items-center cursor-pointer">
          <div
            class="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4"
          >
            <img src="/images/patient.svg" alt="Patient" class="w-16 h-16" />
          </div>
          <p class="text-lg font-medium">Patient</p>
        </div>
      </NuxtLink>
    </div>

    <p class="text-gray-600">
      Have a problem?
      <NuxtLink to="/" class="text-blue inline">Contact us</NuxtLink>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
