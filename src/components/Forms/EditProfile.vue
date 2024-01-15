<template>
    <div class="">
      <h6 class="text-base my-4">Edit Profile</h6>
  
       <div class="px-2">
          <form action="">
              <!-- username -->
              <div class="mb-4">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                  <input type="text" id="name" class="bg-dark-200 text-gray-200 text-sm rounded-sm focus:bg-dark-300 outline-0 block w-full px-2 py-3" placeholder="Username" required>
              </div>
  
              <!-- Email -->
              <div class="mb-4">
                  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input type="text" id="name" class="bg-dark-200 text-gray-200 text-sm rounded-sm focus:bg-dark-300 outline-0 block w-full px-2 py-3" placeholder="Email" required>
              </div>

              <!-- preview of profile image -->
              <div class="mt-4">
                  <label for="message" class="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Profile Image</label>
                 <img v-bind:src="pic" alt="" class="h-20 w-20 object-fit rounded-full ring-2 ring-bubble ring-offset-2 ring-offset-dark-400">
             </div>

             <div class="mt-4">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose New Image</label>
                <input class="block w-full mb-2 text-sm text-gray-300 outline-0 rounded-sm cursor-pointer bg-dark-200 py-2 px-1" id="default_size" type="file">
             </div>
  
              <button type="submit" class="text-center gap-x-2 mt-8 w-full px-4 py-2 bg-jeez-200 hover:bg-jeez-100 text-white text-center text-base">
                  Update Profile
              </button>
          </form>
       </div>
    </div>
  </template>
  
  <script setup>
  import pic from '../../assets/pic.jpg'
  </script>