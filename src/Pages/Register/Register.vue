<template>
    <div class="h-screen w-screen flex items-center md:justify-center">
      <div class="w-full">
          <header class="mb-4">
              <h1 class="text-4xl md:text-7xl text-center  mb-2">Register</h1>
              <h6 class="text-base md:text-xl text-gray-300 text-center mb-2">Create an account</h6>
          </header>

          <div class="md:w-80 md:max-w-80 mx-auto">

                <FormKit type="form" id="RegisterForm" @submit="handleSubmit" 
                :form-class="'w-full px-2 md:px-0 '"
                submit-label="Register"
                :submit-attrs="{
                        inputClass:'mt-2 w-full px-4 py-2 bg-jeez-200 hover:bg-jeez-100',
                        labelClass:'text-white text-center text-base',
                        ignore: false
                    }"
                >

                <FormKit
                        type="text"
                        name="username"
                        label="Create username"
                        prefix-icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>'
                        validation="required|length:5"
                        placeholder="JohnDoe"
                        outer-class="mb-5"
                        label-class="block mb-2 text-base"
                        inner-class="mb-1 overflow-hidden focus:bg-dark-50 bg-dark-100 flex items-center gap-x-2 ps-2 p-2.5"
                        input-class="  text-gray-100 text-sm bg-inherit  outline-0  block w-full "
                        message-class="text-xs md:text-sm text-red-400"
                    />

                    <FormKit
                        type="email"
                        name="email"
                        label="Email"
                        prefix-icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>'
                        validation="required|length:5|email"
                        placeholder="Johndoe@gmail.com"
                        outer-class="mb-5"
                        label-class="block mb-2 text-base"
                        inner-class="mb-1 overflow-hidden focus:bg-dark-50 bg-dark-100 flex items-center gap-x-2 ps-2 p-2.5"
                        input-class="text-gray-100 text-sm bg-inherit  outline-0  block w-full "
                        message-class="text-xs md:text-sm text-red-400"
                    />

                    <FormKit
                        type="password"
                        name="password"
                        label="Password"
                        prefix-icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>'
                        suffix-icon= '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400 hover:text-gray-200"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>'
                        @suffix-icon-click="handleIconClick"
                        suffix-icon-class="hover:cursor-pointer"
                        validation="required|length:8"
                        placeholder="Enter your password"
                        outer-class="mb-5"
                        label-class="block mb-2 text-base"
                        inner-class="mb-1 overflow-hidden focus:bg-dark-50 bg-dark-100 flex items-center gap-x-2 ps-2 p-2.5"
                        input-class="text-gray-100 text-sm bg-inherit outline-0  block w-full "
                        message-class="text-xs md:text-sm text-red-400"
                    />

                    <FormKit
                        type="password"
                        name="password_confirm"
                        label="Confirm Password"
                        prefix-icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>'
                        suffix-icon= '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400 hover:text-gray-200"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>'
                        @suffix-icon-click="handleIconClick"
                        suffix-icon-class="hover:cursor-pointer"
                        validation="required|length:8|confirm"
                        placeholder="Enter your password"
                        outer-class="mb-5"
                        label-class="block mb-2 text-base"
                        inner-class="mb-1 overflow-hidden focus:bg-dark-50 bg-dark-100 flex items-center gap-x-2 ps-2 p-2.5"
                        input-class="  text-gray-100 text-sm bg-inherit  outline-0  block w-full "
                        message-class="text-xs md:text-sm text-red-400"
                    />

                    <div class="flex items-center justify-between mb-4 gap-x-2">
                        <router-link to="/" class="text-sm text-gray-400">Already, Have an account ? Login</router-link>
                    </div>

                </FormKit>

                <p class="my-4 text-center text-base text-gray-400">OR</p>
                 
                <div class="px-2 md:px-0">
                    <button @click="RegisterWithGooglePopup" type="submit" class=" w-full px-4 py-2 bg-red-600 text-white text-center text-base">Sign up with Google</button>
                </div>
            </div>
        
    </div>
   </div> 
  </template>

<script setup>

import {RegisterWithEmailAndPassword,CheckUsernameExists,RegisterWithGooglePopup} from '../../Firebase-helpers'
import { reset } from '@formkit/core'
import  { createToaster } from "@meforma/vue-toaster";
import { useRouter } from 'vue-router';

const toaster = createToaster({ 
    position:"top",
    duration:4000,
 });

 const router = useRouter()

 const handleIconClick =(node, e)=>{
    node.props.suffixIcon = node.props.suffixIcon === '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400 hover:text-gray-200"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>' 
      ? 
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400 hover:text-gray-200"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>' 
       : 
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400 hover:text-gray-200"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>'

    node.props.type = node.props.type === 'password' ? 'text' : 'password'
    
 }


 const handleSubmit =(formData,node)=>{
    const {email,password,username} = formData

    CheckUsernameExists(username)
    .then((exists)=>{
        if(exists){
            toaster.error("The username exists")
        }
        else{
            RegisterWithEmailAndPassword(username,email,password)
            .then((user)=>{
                router.push({name:'login'})
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    })
    .catch(err=>{
        toaster.error("An error occurred")
        console.log(err)
    })
 }

</script>

