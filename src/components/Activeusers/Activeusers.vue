<template>
    <div class=" mt-4 py-2">
        <h6 class="text-base mb-3">Active users</h6>
        <div class="flex items-center gap-x-4 w-full">
            <img v-bind:src="pic" alt="" class="h-8 w-8 object-fit rounded-full ring-2 ring-bubble ring-offset-2 ring-offset-dark-400">
            <img v-bind:src="pic" alt="" class="h-8 w-8 object-fit rounded-full ring-2 ring-bubble ring-offset-2 ring-offset-dark-400">
            <img v-bind:src="pic" alt="" class="h-8 w-8 object-fit rounded-full ring-2 ring-bubble ring-offset-2 ring-offset-dark-400">
        </div>
    </div>
</template>

<script setup>
import pic from '../../assets/pic.jpg'


</script>

