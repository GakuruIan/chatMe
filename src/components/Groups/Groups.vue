<template>
  <div class="">
      <h6 class="text-base mt-4">Groups</h6>

         <!-- search -->
            <form class="flex items-center mt-4">   
                <div class="relative w-full">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                        </svg>
                    </div>
                    <input type="text" id="simple-search" class="bg-dark-200 text-gray-200 text-sm rounded-lg focus:bg-dark-300 outline-0 block w-full ps-10 p-2.5  " placeholder="Search group.." required>
                </div>
                <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
            </form>
        <!-- search -->

        <!-- tabs -->
        <div class="text-sm font-medium  border-b border-gray-200 text-gray-400 border-gray-700">
            <ul class="flex flex-wrap -mb-px" id="tabs">
                <li class="me-2 hover:cursor-pointer">
                    <a  class="inline-block px-2 py-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-300 hover:border-gray-300">My Groups</a>
                </li>
                <li class="me-2 hover:cursor-pointer">
                    <a  class="inline-block px-2 py-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active" >Discover</a>
                </li>
                <li class="me-2 hover:cursor-pointer">
                    <a  class="inline-block px-2 py-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-300 hover:border-gray-300 ">Create group</a>
                </li>
            </ul>
        </div>
        <!-- tabs -->

        <!-- groups -->
        <div class="overflow-y-auto h-[calc(100vh-220px)] scrollbar">

            <div class="mt-4 pl-1 " v-for="group in groups" :key="group">
                <div class="flex items-center gap-x-3 my-2 py-1 w-full hover:cursor-pointer" >
                <img v-bind:src="pic" alt="" class="h-8 w-8 object-fit rounded-full ring-2 ring-[#DD9C7C] ring-offset-2 ring-offset-dark-400">
                    <div class="">
                        <h6 class="text-base">Group name</h6>
                        <p class="text-xs text-gray-400">created by @username </p>
                    </div>
                </div>
             </div>
        </div>
  </div>
</template>

<script setup>
 import pic from '../../assets/pic.jpg'
  let groups = [1,2,3,4,5,6,7,8]
</script>
