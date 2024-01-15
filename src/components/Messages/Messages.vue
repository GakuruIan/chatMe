<template>
   <div class="">

        <!-- active users component-->
         <Activeusers/>

      <h6 class="text-base mt-4">Messages</h6>

      <!-- messages -->
      <div class="overflow-y-auto h-[calc(100vh-220px)] scrollbar">
         <div class="pl-1" v-for="message in messages" :key="message">

            <MessagesLoader/>
            <!-- <div class="flex items-center gap-x-4 my-2 py-1 w-full hover:cursor-pointer" >
              <img v-bind:src="pic" alt="" class="h-8 w-8 object-fit rounded-full ring-2 ring-bubble ring-offset-2 ring-offset-dark-400">
               <div class="">
                  <div class="flex items-center justify-between">
                     <h6 class="text-base mb-1">Username</h6>
                     <p class="text-xs text-gray-400">offline</p>
                  </div>
                     <p class="text-sm">Lorem ipsum dolor sit amet consectetur...</p>  
               </div>
            </div> -->
         </div>
      </div>
      <!-- messages -->
      
   </div>
</template>

<script setup>
import pic from '../../assets/pic.jpg'

// components
import Activeusers from '../Activeusers/Activeusers.vue'
import MessagesLoader from '../Loaders/MessagesLoader.vue'



let messages = [1,2,3,4,5,6,7,8]
</script>

<style>

</style>