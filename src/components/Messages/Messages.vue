<template>
   <div class="">

        <!-- active users component-->
         <Activeusers/>

      <h6 class="text-base mt-4">Messages</h6>

      <!-- messages -->
      <div class="overflow-y-auto h-[calc(100vh-220px)] scrollbar">
         <div class="" v-for="message in messages" :key="message">
            <div class="flex items-center gap-x-4 my-2 py-1 w-full hover:cursor-pointer" >
            <img v-bind:src="pic" alt="" class="h-8 w-8 object-fit rounded-full ring-2 ring-bubble ring-offset-2 ring-offset-dark-400">
               <div class="">
                     <h6 class="text-base mb-1">usename</h6>
                     <p class="text-sm">Lorem ipsum dolor sit amet consectetur...</p>
               </div>
            </div>
         </div>
      </div>
      <!-- messages -->
      
   </div>
</template>

<script setup>
import pic from '../../assets/pic.jpg'
import Activeusers from '../Activeusers/Activeusers.vue'

let messages = [1,2,3,4,5,6,7,8]
</script>

<style>

</style>