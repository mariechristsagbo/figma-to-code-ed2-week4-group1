<script setup>
const formFields = [
  {
    type: "text",
    name: "username",
    id: "floating_name",
    label: "Full Name",
    for: "floating_name",
  },
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
    class="w-screen h-screen px-4 py-4 md:px-12 md:py-12 bg-[url('~/assets/images/bg.png')] bg-no-repeat bg-cover bg-center"
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
            <h2 class="text-2xl font-bold">Building the Future...</h2>
            <p class="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div
        class="bg-gray-pale mt-4 rounded-[19px] w-full lg:w-[400px] px-9 py-9"
      >
        <p class="text-2xl text-center text-dark mb-6">Create an account</p>
        <formComponent
          :fields="formFields"
          :buttonName="'Sign up'"
          :is-login-form="false"
          :addtextarea="false"
          route="dashboard"
        />
        <p class="text-center mt-6">Or</p>
        <div class="space-y-2 mt-6">
          <buttonComponent
            :iconStart="'icons8-google.svg'"
            :iconWidth="'25px'"
            :iconHeight="'25px'"
            :name="'Sign up with Google'"
            :classes="['bg-white w-full space-x-2 py-2 px-4 justify-center']"
            :classNameButton="[
              'text-base text-gray-darkest text-center font-[Roboto]',
            ]"
          />
          <buttonComponent
            :iconStart="'icons8-facebook.svg'"
            :iconWidth="'25px'"
            :iconHeight="'25px'"
            :name="'Sign up with Facebook'"
            :classes="['bg-white w-full space-x-2 py-2 px-4 justify-center']"
            :classNameButton="[
              'text-base text-gray-darkest text-center font-[Roboto]',
            ]"
          />
          <buttonComponent
            :iconStart="'apple.svg'"
            :iconWidth="'25px'"
            :iconHeight="'25px'"
            :name="'Sign up with Apple'"
            :classes="['bg-white w-full space-x-2 py-2 px-4 justify-center']"
            :classNameButton="[
              'text-base text-gray-darkest text-center font-[Roboto]',
            ]"
          />
        </div>
        <p class="text-center text-xs lg:text-sm text-gray-darkest mt-6">
          Already have an account?
          <span class="text-dark text-sm lg:text-base underline"
            ><NuxtLink to="/login/patient">Sign in</NuxtLink></span
          >
        </p>
      </div>
    </div>
  </div>
</template>
