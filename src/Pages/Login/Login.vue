<template>
  <div class="relative h-screen flex items-center justify-center">
    <div class="">
        <header class="mb-4">
            <h1 class="text-4xl md:text-7xl text-center  mb-2">Login</h1>
            <h6 class="text-base md:text-xl text-gray-300 text-center mb-2">Get into your account</h6>
        </header>
       
        <FormKit type="form" id="login-form" @submit="submitHandler" 
          :form-class="'w-full  md:px-0 md:w-80 md:max-w-80 mx-auto'"
          submit-label="Login"
          :submit-attrs="{
                inputClass:'mt-2 w-full px-4 py-2 bg-jeez-200 hover:bg-jeez-100',
                labelClass:'text-white text-center text-base',
                ignore: false
            }"
           >
            <FormKit
                type="email"
                name="email"
                label="Email"
                validation="required|length:5|email"
                placeholder="Johndoe@gmail.com"
                prefix-icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>'
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
                placeholder="Enter your password"
                validation="required|length:8"
                prefix-icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>'
                suffix-icon= '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400 hover:text-gray-200"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>'
                @suffix-icon-click="handleIconClick"
                suffix-icon-class="hover:cursor-pointer"
                outer-class="mb-5"
                label-class="block mb-2 text-base"
                inner-class="mb-1 overflow-hidden focus:bg-dark-50 bg-dark-100 flex items-center gap-x-2 ps-2 p-2.5"
                input-class="text-gray-100 text-sm bg-inherit outline-0  block w-full "
                message-class="text-xs md:text-sm text-red-400"
            />

            <div class="flex items-center justify-between mb-4 gap-x-2">
                <a href="" class="text-sm text-gray-400">Forgot password</a>
                <router-link to="/register" class="text-sm text-gray-400">Dont, Have an account ? Register</router-link>
            </div>
      
        </FormKit>

        <p class="my-8 text-center text-base text-gray-400">OR</p>

        <button @click="SignInWithGooglePopup" type="submit" class=" w-full px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-center text-base">Sign in with Google</button>
  </div>
   <div v-if="loading" class="flex items-center justify-center absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-md backdrop-opacity-5">
          <h6 class="text-base md text-2xl">Logging In...</h6>
   </div>
 </div> 
</template>

<script setup>
import { reset } from '@formkit/core'
import  { createToaster } from "@meforma/vue-toaster";
import { LoginWithEmailAndPassword,SignInWithGooglePopup } from '../../Firebase-helpers'
import { useRouter } from 'vue-router';

import { useStore } from 'vuex';
import { onMounted, ref } from 'vue';

let loading = ref(false)

const store = useStore()
const router = useRouter()

const toaster = createToaster({ 
    position:"top",
    duration:4000,
 });

onMounted(()=>{
    const user = store.getters.user

    if(user){
        router.push('/main')
    }

})

const submitHandler=(formData)=>{
   
    const {email,password} = formData
    loading.value = true
    LoginWithEmailAndPassword(email,password)
    .then((user)=>{
      
         if(user){
            // store user to store
            const {displayName,email,last_seen,photo,activity} = user

            const UserData = {
                displayName,
                email,
                last_seen,
                photo,
                activity
            }

            store.dispatch('setUser',UserData)
            store.dispatch('setSuccessLogin',true)
            
            loading.value= false
            router.push('/main')
         }
    })
    .catch((err)=>{
        loading.value= false
        toaster.error(err.code)
        console.log(err)
        store.dispatch('setFailedLogin',false)
    })
}

const handleIconClick =(node, e)=>{
    node.props.suffixIcon = node.props.suffixIcon === '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400 hover:text-gray-200"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>' 
      ? 
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400 hover:text-gray-200"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>' 
       : 
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400 hover:text-gray-200"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>'

    node.props.type = node.props.type === 'password' ? 'text' : 'password'
    
}

</script>



