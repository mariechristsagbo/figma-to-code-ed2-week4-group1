<template>
    <div class="w-[100%] bg-gray-200 h-screen p-4 space-y-4 flex justify-center overflow-y-hidden">
      <ul>
        <li 
          v-for="item in menuItems"
          :key="item.name"
          @click="selectMenuItem(item.name)"
          :class="[selectedItem === item.name ? 'bg-blue-500 text-white' : 'bg-transparent text-black', 'flex items-center p-2 cursor-pointer rounded-md']"
          style="border-radius: 12px;"
        >

        <nuxt-link :to="item.route" class="flex items-center w-full">
          <img
            :src="item.icon"
            :class="['w-6 h-6 mr-2', selectedItem === item.name ? 'svg-active' : 'svg-inactive']"
            alt="icon"
          />
          {{ item.label }}
        </nuxt-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Import des fichiers SVG
  import DashboardIcon from '~/assets/icons/dashboard.svg';
  import AppointmentsIcon from '~/assets/icons/appointments.svg';
  import MessagesIcon from '~/assets/icons/messages.svg';
  import ProfileIcon from '~/assets/icons/profile.svg';
  
  const menuItems = [
  { name: 'Dashboard', label: 'Dashboard', icon: DashboardIcon, route: '/dashboard' },
  { name: 'Appointments', label: 'Appointments', icon: AppointmentsIcon, route: '/appointments' },
  { name: 'Messages', label: 'Messages', icon: MessagesIcon, route: '/messages' },
  { name: 'Profile', label: 'Profile', icon: ProfileIcon, route: '/profile' }
]
  
  // Sélectionner "Dashboard" par défaut
  const selectedItem = ref('Dashboard');
  
  const selectMenuItem = (name) => {
    selectedItem.value = name;
  };
  </script>
  
  <style>
  /* Couleurs des SVG */
  .svg-inactive {
    filter: grayscale(100%) brightness(0.5); /* Grisé et assombri pour les icônes inactives */
  }
  
  .svg-active {
    filter: invert(1) brightness(2) contrast(1); /* Transformer en blanc pour les icônes actives */
  }
  
  /* Styles pour les éléments sélectionnés */
  .bg-blue-500 {
    background: #0F4C5C; /* Couleur de fond pour les éléments sélectionnés */
  }
  
  .text-white {
    color: #ffffff; /* Couleur du texte pour les éléments sélectionnés */
  }
  
  .bg-transparent {
    background-color: transparent; /* Couleur de fond transparente pour les éléments non sélectionnés */
  }
  
  .text-black {
    color: #000000; /* Couleur du texte pour les éléments non sélectionnés */
  }
  </style>
  