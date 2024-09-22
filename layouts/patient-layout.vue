<template>
  <div class="w-screen h-screen flex text-red    overflow-y-hidden   ">
    <!-- side bar -->
  <div class="w-[400px] h-full">
    
  <div class="h-[50px]  flex justify-center items-center">
    <img :src="logo" alt="Logo"  class="w-[45%] "   >
 </div> 
 <div class="h-[calc(100vh-50px)]  bg-[#f3f3f4]">

  <Menu/>
 
  
 </div>


  </div>


<div class="w-full h-full   bg-white-400">
  <div class="h-[50px] bg-white-400 ">
 <div class="leftheader h-[100%]  gap-4 flex  justify-end items-center   pr-[5%] ">
  <img :src="carbon_notification" alt="notification"  class="w-[30px] "   >
  
<button class="flex justify-center items-center gap-4 bg-[#f3f3f4] rounded-xl p-[5px]"  >
  <img :src="Vector" alt="people"  class="w-[14%]  "   >
   <p>Ravad Nadam</p>
</button>


 </div>
 </div> 

 <div class="h-[calc(100vh-50px)] bg-gray ">
 
  <NuxtPage />
 </div>




</div>
<!-- main -->
 
  </div>

  

 </template>
 
 <script setup>
import logo from '@/assets/images/logo.png'
import carbon_notification from '@/assets/images/carbon_notification.png'
import Vector from '@/assets/images/Vector.png'
 </script>
 
 <style>
 
 </style>