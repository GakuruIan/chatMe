<template>
    <div class="h-screen w-screen flex items-center md:justify-center">
      <div class="w-full">
          <header class="mb-4">
              <h1 class="text-4xl md:text-7xl text-center  mb-2">Register</h1>
              <h6 class="text-base md:text-xl text-gray-300 text-center mb-2">Create an account</h6>
          </header>
          <form class="w-full px-2 md:px-0 md:w-80 md:max-w-80 mx-auto">

            <div class="">
                  <label for="username" class="block mb-2 text-sm font-medium ">Create Username</label>
                      <div class="relative">
                          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                          </svg>
                          </div>
                          <input type="text" id="username" class="bg-dark-100  text-gray-100 text-sm focus:bg-dark-50  outline-0  block w-full ps-10 p-2.5" placeholder="johndoe@gmail.com">
                      </div>
              </div>
  
              <div class="mt-8">
                  <label for="email" class="block mb-2 text-sm font-medium ">Email</label>
                      <div class="relative">
                          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                          </svg>
                          </div>
                          <input type="text" id="email" class="bg-dark-100  text-gray-100 text-sm focus:bg-dark-50  outline-0  block w-full ps-10 p-2.5" placeholder="johndoe@gmail.com">
                      </div>
              </div>
  
              <div class="mt-8">
                  <label for="password" class="block mb-2 text-sm font-medium">Password</label>
                      <div class="relative">
                          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                              <v-icon name="MdAlternateemailOutlined" scale="1.5"/>
                          </div>
                          <input type="password" id="password" class="bg-dark-100  text-gray-100 text-sm focus:bg-dark-50  outline-0  block w-full ps-10 p-2.5" placeholder="password">
                      </div>
              </div>

              <div class="mt-8">
                  <label for="password" class="block mb-2 text-sm font-medium">Confirm Password</label>
                      <div class="relative">
                          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                              <v-icon name="MdAlternateemailOutlined" scale="1.5"/>
                          </div>
                          <input type="password" id="password" class="bg-dark-100  text-gray-100 text-sm focus:bg-dark-50  outline-0  block w-full ps-10 p-2.5" placeholder="password">
                      </div>
              </div>
  
              <div class="flex items-center justify-between mt-4 gap-x-2">
                <router-link to="/" class="text-sm text-gray-400">Already, Have an account ? Login</router-link>
              </div>
  
              <button type="submit" class="mt-8 w-full px-4 py-2 bg-jeez-200 hover:bg-jeez-100 text-white text-center text-base">Register</button>
  
              <p class="my-8 text-center text-base text-gray-400">OR</p>
   
              <button type="submit" class=" w-full px-4 py-2 bg-red-600 text-white text-center text-base">Sign up with Google</button>
          </form>
    </div>
   </div> 
  </template>

<script>

</script>
