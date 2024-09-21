<script setup>
const formFields = [
  {
    type: "email",
    name: "email",
    id: "floating_email",
    label: "Adresse email",
    for: "floating_email",
  },
];
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <div
    class="w-full h-screen px-4 py-4 md:px-12 md:py-12 bg-[url('~/assets/images/bg.png')]"
  >
    <div>
      <buttonComponent
        :iconStart="'iconamoon_arrow-up-2-light.svg'"
        :iconWidth="'35px'"
        :iconHeight="'35px'"
        :name="'Go back'"
        :classes="['bg-gray-pale py-2 px-4 justify-between']"
        :classNameButton="[
          'lg:text-base text-sm text-dark text-center font-[Roboto]',
        ]"
      />
    </div>
    <div class="block mt-4 lg:flex justify-center lg:items-center">
      <div
        class="bg-gray-pale mt-4 rounded-[19px] w-full lg:w-[400px] px-9 py-9"
      >
        <p class="text-2xl text-dark mb-6">Mot de passe oublié</p>
        <formComponent
          :fields="formFields"
          :buttonName="'Envoyer'"
          :is-login-form="false"
          :addtextarea="false"
        />
        <p class="text-center text-xs lg:text-sm text-gray-darkest mt-6">
          Vous n'avez pas de compte ?
          <span class="text-dark text-sm lg:text-base underline"
            ><NuxtLink to="/register/patient">Inscrivez-vous</NuxtLink></span
          >
        </p>
      </div>
    </div>
  </div>
</template>
