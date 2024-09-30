<template>
  <div class="rounded-lg overflow-x-auto">
    <table class="table-auto w-full text-left border">
      <thead class="bg-blue text-white">
        <tr class="text-center">
          <td class="py-1 p-4">Appt.ID</td>
          <td class="py-1 p-4">Patient Name</td>
          <td class="py-1 p-4">Date</td>
          <td class="py-1 p-4">Time</td>
          <td class="py-1 p-4">Prescription</td>
          <td class="py-1 p-4">Contact</td>
        </tr>
      </thead>
      <tbody class="bg-white text-black text-center">
        <tr
          v-for="appointment in appointments"
          :key="appointment.id"
          class="py-5 text-sm"
        >
          <td class="py-5 p-4">{{ appointment.id }}</td>
          <td class="p-4">{{ appointment.patientName }}</td>
          <td class="py-5 p-4">{{ appointment.date }}</td>
          <td class="py-5 p-4">{{ appointment.time }}</td>
          <td class="py-5 p-4">
            <div class="flex space-x-3 items-center">
              <!-- Affichage conditionnel basé sur la prescription -->
              <p
                v-if="appointment.prescription"
                class="px-4 py-1 text-center rounded-lg w-full"
              >
                {{ appointment.prescription }}
              </p>
              <button
                v-else
                class="px-4 py-2 text-center borde rounded-lg order w-full hover:bg-gray-light-medium"
              >
                Prescribe
              </button>

              <button class="bg-blue text-white px-4 py-1 rounded-lg">
                Edit
              </button>
              <button class="bg-red-600 text-white px-4 py-1 rounded-lg">
                Print
              </button>
            </div>
          </td>

          <td class="py-5 p-4">
            <button
              class="px-4 py-1 rounded-lg border w-full text-sm border-gray-medium"
            >
              Send msg.
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const appointments = ref([
  {
    id: "#123456",
    patientName: "Ravad Nadam",
    date: "05.01.2024",
    time: "12:00",
    prescription: "Amoxicillin 250 mg",
  },
  {
    id: "#123457",
    patientName: "Yaser Nadam",
    date: "04.01.2024",
    time: "15:00",
    prescription: null,
  },
  {
    id: "#123458",
    patientName: "Zekeriya Alabus",
    date: "05.01.2024",
    time: "12:00",
    prescription: "Amoxicillin 250 mg",
  },
  {
    id: "#123459",
    patientName: "Ravad Nadam",
    date: "05.01.2024",
    time: "12:00",
    prescription: null,
  },
  {
    id: "#123460",
    patientName: "Yohan Silver",
    date: "06.01.2024",
    time: "10:30",
    prescription: "Paracetamol 500 mg",
  },
  {
    id: "#123461",
    patientName: "Amanda Smith",
    date: "07.01.2024",
    time: "11:00",
    prescription: "Ibuprofen 400 mg",
  },
  {
    id: "#123462",
    patientName: "Elena Vega",
    date: "08.01.2024",
    time: "09:45",
    prescription: "Bimalaril 10 mg",
  },
  {
    id: "#123463",
    patientName: "Lucas Adams",
    date: "09.01.2024",
    time: "13:15",
    prescription: null,
  },
  {
    id: "#123464",
    patientName: "Maria Green",
    date: "10.01.2024",
    time: "14:00",
    prescription: "Amoxicillin 500 mg",
  },
  {
    id: "#123465",
    patientName: "John Doe",
    date: "11.01.2024",
    time: "10:00",
    prescription: null,
  },
  {
    id: "#123466",
    patientName: "Jane Doe",
    date: "12.01.2024",
    time: "12:30",
    prescription: "Paracetamol 500 mg",
  },
  {
    id: "#123467",
    patientName: "Peter Parker",
    date: "13.01.2024",
    time: "11:45",
    prescription: "Cétamyl 500 mg",
  },
  {
    id: "#123468",
    patientName: "Bruce Wayne",
    date: "14.01.2024",
    time: "09:00",
    prescription: null,
  },
  {
    id: "#123469",
    patientName: "Clark Kent",
    date: "15.01.2024",
    time: "14:30",
    prescription: "Atorvastatin 20 mg",
  },
  {
    id: "#123470",
    patientName: "Diana Prince",
    date: "16.01.2024",
    time: "13:00",
    prescription: "Metformin 500 mg",
  },
]);
</script>

<style scoped>
/* Ajoute ici des styles spécifiques si nécessaire */
</style>
