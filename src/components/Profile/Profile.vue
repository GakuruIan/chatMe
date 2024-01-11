<template>
  <div class="">
        <div class="mt-14 flex  justify-center w-full">
            <img v-bind:src="pic" alt="" class="h-52 w-52 object-fit rounded-full ring-2 ring-bubble ring-offset-2 ring-offset-dark-400">
        </div>
        <div class="mt-6">
            <h6 class="text-4xl text-center ">Ryan</h6>
            <p class="text-base text-gray-400 text-center mt-2">Ryan@gmail.com</p>
        </div>

        <div class="flex items-center justify-center w-full gap-x-4 mt-6">

            <div class="flex flex-col">
                <span class="mx-4 p-2 bg-dark-50 flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-dark-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                 </span>
                 <p class="text-sm text-center mt-2">Edit</p>
            </div>
           
            <div class="flex flex-col">

                <span class="mx-4 p-2 bg-dark-50 flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-dark-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                </span>
                <p class="text-sm text-center mt-2">Video call</p>
            </div>

            <div class="flex flex-col">

                <span class="mx-4 p-2 bg-dark-50 flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-dark-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>
                </span>
                <p class="text-sm text-center mt-2">Delete chat</p>
            </div>
        </div>

        <div class="px-4 mt-4">
            <h6 class="text-base mb-2">Shared media</h6>

            <div class="flex items-center">
                <img v-bind:src="pic" alt="" class="h-24 w-20 object-fit rounded-sm">
            </div>
        </div>
  </div>
</template>

<script setup>
import pic from '../../assets/pic.jpg'

</script>
