<script setup>
const formFields = [
  {
    type: "email",
    name: "email",
    id: "floating_email",
    label: "Email Address",
    for: "floating_email",
  },
  {
    type: "password",
    name: "password",
    id: "floating_password",
    label: "Password",
    for: "floating_password",
  },
];
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <div
    class="w-full h-full px-4 py-4 md:px-12 md:py-12 bg-[url('~/assets/images/bg.png')] bg-no-repeat bg-cover bg-center"
  >
    <div>
      <buttonComponent
        :iconStart="'iconamoon_arrow-up-2-light.svg'"
        :iconWidth="'35px'"
        :iconHeight="'35px'"
        :name="'Go back'"
        :url="'/'"
        :classes="['bg-gray-pale py-2 px-4 justify-between']"
        :classNameButton="[
          'lg:text-base text-sm text-dark text-center font-[Roboto]',
        ]"
      />
    </div>
    <div class="block mt-4 lg:flex justify-center lg:justify-between">
      <div class="flex items-start lg:items-center">
        <div class="bg-blue rounded-xl px-9 py-9 lg:w-[470px] w-full">
          <div class="space-y-6 text-white font-[Inter]">
            <h2 class="text-2xl font-bold">Did you know?</h2>
            <p class="text-base">
              You can delete existing appointments until 1 hour before the appointment time
            </p>
          </div>
        </div>
      </div>
      <div
        class="bg-gray-pale mt-4 rounded-[19px] w-full lg:w-[400px] px-9 py-9"
      >
        <p class="text-2xl text-center text-dark mb-6">
          Login to your account
        </p>
        <formComponent
          :fields="formFields"
          :buttonName="'Login'"
          :is-login-form="true"
          :addtextarea="false"
        />
        <p class="text-center mt-6">Or</p>
        <div class="space-y-2 mt-6">
          <buttonComponent
            :iconStart="'icons8-google.svg'"
            :iconWidth="'25px'"
            :iconHeight="'25px'"
            :name="'Login with Google'"
            :classes="['bg-white w-full space-x-2 py-2 px-4 justify-center']"
            :classNameButton="[
              'text-base text-gray-darkest text-center font-[Roboto]',
            ]"
          />
          <buttonComponent
            :iconStart="'icons8-facebook.svg'"
            :iconWidth="'25px'"
            :iconHeight="'25px'"
            :name="'Login with Facebook'"
            :classes="['bg-white w-full space-x-2 py-2 px-4 justify-center']"
            :classNameButton="[
              'text-base text-gray-darkest text-center font-[Roboto]',
            ]"
          />
          <buttonComponent
            :iconStart="'apple.svg'"
            :iconWidth="'25px'"
            :iconHeight="'25px'"
            :name="'Login with Apple'"
            :classes="['bg-white w-full space-x-2 py-2 px-4 justify-center']"
            :classNameButton="[
              'text-base text-gray-darkest text-center font-[Roboto]',
            ]"
          />
        </div>
        <p class="text-center text-xs lg:text-sm text-gray-darkest mt-6">
          Don't have an account?<span
            class="text-dark text-sm lg:text-base underline"
            ><NuxtLink to="/register/patient">Sign up</NuxtLink></span
          >
        </p>
      </div>
    </div>
  </div>
</template>
