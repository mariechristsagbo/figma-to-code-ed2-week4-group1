<template>


<div class="p-[25px]" >
<div>
    <p class="text-customOrange text-2xl ">My appointments</p></div>


    <div>
        <p class="text-customOrange text-1xl  mt-9         text-red-500">Upcoming</p></div>
    <div class="flex 
border-2 border-blue-500 items-center rounded-[23px]  w-[75%]  p-[10px]  " >

<div class="photo ">
    <img :src="doc2" alt="people"  class="w-[70%]  "   >

</div>


<div  class="  flex-col items-center h-full"  >

<div class=" flex-col w-[90%]     ">
<h3 class="text-gray text-2xl   "  >Dr.Nadia Fallah    - <span  class="   text-xs text-grise  font-bold">Cardiologist</span></h3>

</div>


<div>
    <img :src="description1" alt="people"  class="w-[70%]  "   >
</div>


</div>

<div>

<button          class="    px-4 py-2 border-2 border-red-500 bg-transparent text-red-500 rounded-lg   "                               >Cancel</button>

</div>
</div>

<!-- --------------------------------------------- -->

<div class="flex 
border-2 border-blue-500 items-center rounded-[23px]  w-[75%]  pt-[20px] pb-[20px] pl-[10px]  pr-[10px]   mt-10   " >

<div class="photo ">
    <img :src="doc1" alt="people"  class="w-[41%]  "   >

</div>


<div  class="  flex-col items-center h-full ml-[-50px]   mr-[200px]   mt"  >

<div class=" flex-col w-[90%]      ">
<h3 class="text-gray text-2xl   "  >Dr.Mohammed Isamel    - <span  class="   text-xs text-grise  font-bold">Cardiologist</span></h3>

</div>


<div>
    <img :src="description2" alt="people"  class="w-[510%]  " >
</div>


</div>

<div>

<button          class="    px-4 py-2 border-2 border-red-500 bg-transparent text-red-500 rounded-lg   "                               >Cancel</button>

</div>
</div>


<!-- --------------------------------------------- -->
<div>
    <p class="text-customOrange text-1xl  mt-9         text-red-500">past</p></div>

    <div class="flex 
border-2 border-blue-500 items-center rounded-[23px]  w-[75%]   p-[10px] " >

<div class="photo ">
    <img :src="doc4" alt="people"  class="w-[70%]  "   >

</div>


<div  class="  flex-col items-center h-full"  >

<div class=" flex-col w-[90%]     ">
<h3 class="text-gray text-2xl   "  >Dr. Salih Ahmet    - <span  class="   text-xs text-grise  font-bold">Cardiologist</span></h3>

</div>


<div>
    <img :src="description1" alt="people"  class="w-[70%]  "   >
</div>


</div>

<div>

<button          class="    px-1 py-2 border-2 border-grise-500 bg-transparent text-grise-500 rounded-lg  w-[150px]    "                               >View prescritption</button>

</div>
</div>
</div>



</template>



<script setup>
import doc1 from '@/assets/images/doc1.png'
import doc2 from '@/assets/images/doc2.png'
import doc4 from '@/assets/images/doc4.png'
import description1 from '@/assets/images/description1.png'
import description2 from '@/assets/images/description2.png'





</script>


<style scoped>






</style>