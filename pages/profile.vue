<template>
  <div class="flex flex-col  bg-griser  ">
  <div class="descriptionprofil     flex flex-col items-center justify-center  " >
    <img :src="prfile" alt="people"  class="w-[70%]  "   >
  </div>

  <hr class="border-t border-gray-300 w-[920px] mt-8 mx-auto">  
  
  <div    class="flex justify-between space-x-2    pl-[60px]     pr-[60px]   pt-[20px]    "       >
    <div class="flex items-center space-x-2">
  <label for="name" class="text-gray-700">Email :</label>
  <input id="name" type="text" placeholder="Entrez votre mail" class="    bg-blue-100           border border-gray-300 p-2    ">
</div>


<div class="flex items-center space-x-2">
  <label for="name" class="text-gray-700">Password :</label>
  <input id="name" type="password" placeholder=" Password" class="border border-gray-300 p-2  ">
</div>
  </div>
  <hr class="border-t border-gray-300 w-[920px] mt-8 mx-auto">  
  
  <div class=" flex justify-between          pl-[60px]     pr-[60px]   pt-[20px]                    "> 

    <div class="flex items-center space-x-4">
  <div class="flex items-center">
  
    <label for="" class="mr-3 text-gray-700">Gender:</label>

    <input id="option1" type="radio" name="options" value="option1" class="form-radio text-blue-600 h-4 w-4">
    <label for="option1" class="ml-2 text-gray-700">Masculin</label>
  </div>

  <div class="flex items-center">
    <input id="option2" type="radio" name="options" value="option2" class="form-radio text-blue-600 h-4 w-4">
    <label for="option2" class="ml-2 text-gray-700">Féminin</label>
  </div>
</div>

<div>
  <div class="flex items-center space-x-2">
  <label for="name" class="text-gray-700">Date :</label>
<input id="name" type="date" placeholder="Entrez votre date" class="    bg-blue-100   w-[200px]     border border-gray-300 p-2    ">
</div>

</div>

  </div>
  <hr class="border-t border-gray-300 w-[920px] mt-8 mx-auto">  


  <div class="flex items-center space-x-2  pl-[60px]     pr-[60px]   pt-[40px] ">

    <label for="name" class="text-gray-700">Medical records:</label>
    <input id="name" type="text" class="    bg-blue-100   w-[794px]     border border-gray-300 p-2    ">
   

</div>
<hr class="border-t border-gray-300 w-[920px] mt-10 mx-auto">  

<button          class="    px-4 py-2 border-2 border-red-500 bg-transparent text-red-500 rounded-lg     w-[94px]  ml-[450px] mt-[10px] "            >Lougout</button>

  </div>
 







</template>

<script setup >
import prfile from '@/assets/images/prfile.png'

definePageMeta({
  layout: 'patient-layout',
})
</script>


<style>

</style>