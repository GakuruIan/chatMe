<template>
    <div class=" mt-4 py-2">
        <h6 class="text-base mb-3">Active users</h6>
        <div class="animate-pulse flex items-center gap-x-2  w-full" v-if="activeUsers.length > 0">
            <div class="h-10 w-10 bg-dark-200 rounded-full"></div>
            <div class="h-10 w-10 bg-dark-200 rounded-full"></div>
            <div class="h-10 w-10 bg-dark-200 rounded-full"></div>
        </div>

        <div class="flex items-center gap-x-4 w-full" v-else>
            <img v-bind:src="pic" alt="" class="h-8 w-8 object-fit rounded-full ring-2 ring-bubble ring-offset-2 ring-offset-dark-400">
            <img v-bind:src="pic" alt="" class="h-8 w-8 object-fit rounded-full ring-2 ring-bubble ring-offset-2 ring-offset-dark-400">
            <img v-bind:src="pic" alt="" class="h-8 w-8 object-fit rounded-full ring-2 ring-bubble ring-offset-2 ring-offset-dark-400">
        </div>
    </div>
</template>

<script setup>
import pic from '../../assets/pic.jpg'

const activeUsers = [1,2,3,4] 

</script>

