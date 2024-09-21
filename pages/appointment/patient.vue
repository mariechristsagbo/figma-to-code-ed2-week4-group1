<script>
export default {
  name: 'patientSignup',
  data() {
    return {
      formFields: [
        { type: "text", name: "username", id: "floating_name", label: "Nom et prénom", for:"floating_name" },
        { type: "date", name: "date", id: "floating_date", label: "Date du rendez-vous", for:"floating_date" },
        { type: "time", name: "time", id: "floating_time", label: "Heure du rendez-vous", for:"floating_time" }
      ]
    };
  }
};
</script>

<template>
    <div class="w-full h-full px-4 py-4 md:px-12 md:py-12">
        <div class="mt-2 flex justify-center items-center">
            <div class="bg-gray-pale mt-4 rounded-[19px] w-full lg:w-[800px] px-9 py-9">
                <p class="text-2xl text-dark mb-6">
                    Demandez un rendez-vous
                </p>
                <formComponent
                :fields="formFields"
                :buttonName="'Envoyer'"
                :is-login-form="false"
                :addtextarea="true"
                />
            </div>
        </div>
    </div>
</template>


