<template>
  <div class="flex">
    <Sidebar/>
    <div class="flex-1 bg-dark-600 ml-12 h-screen py-2">
       <div class="grid grid-cols-12">
            <!--Chats  -->
            <div class="min-h-screen bg-dark-500 col-span-3 px-2">
                <header class="flex items-center gap-x-4 px-2 py-1">
                    <img v-bind:src="pic" alt="" class="h-8 w-8 object-fit rounded-full ring-2 ring-bubble ring-offset-2 ring-offset-dark-400">
                    <h6 class="text-base">Ryan</h6>
                </header>
                <div class="">
                    <!-- active users component-->
                    <Activeusers/>

                    <!-- Messages component -->
                    <Messages/>
                </div>
            </div>

            <!-- Chat message -->
            <div class="min-h-screen bg-dark-600 col-span-6"></div>

            <!-- User profile -->
            <div class="min-h-screen bg-dark-500 col-span-3"></div>
       </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../../components/Sidebar/Sidebar.vue";
import Activeusers from '../../components/Activeusers/Activeusers.vue'
import Messages from '../../components/Messages/Messages.vue'
import pic from '../../assets/pic.jpg'
</script>

<style>

</style>