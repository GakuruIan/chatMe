<template>
  <div class="" v-for="group in groups" :key="group">
    <div class="animate-pulse flex items-center gap-x-4 my-4 py-1 w-full hover:cursor-pointer" >
        <div class="h-8 w-8 bg-dark-300 rounded-full"></div>
         <div class="">
            <div class="flex w-full items-center justify-between">
             <h6 class="h-2 w-40 bg-dark-300 rounded "></h6>
             <p class="h-2 w-10 bg-dark-300 rounded ml-1"></p>
            </div>
            <p class="h-2 w-full mt-2 bg-dark-300 rounded"></p>  
        </div>
    </div>
  </div>
</template>

<script setup>
let groups = [1,2,3,4,5,6,7,8]

</script>
