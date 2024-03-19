<template>
  <div class="relative w-full">

     <!-- topbar -->
     <div class="fixed top-0 w-[620px] mx-2 z-40 ">

        <div class="bg-dark-500 py-2 px-1 flex items-center justify-between">
            <div class="">
                <header class="flex items-center gap-x-4 px-2 py-2">
                    <img v-bind:src="pic" alt="" class="h-8 w-8 object-fit rounded-full ring-2 ring-bubble ring-offset-2 ring-offset-dark-400">
                    <h6 class="text-base">Reciever</h6>
                </header>
            </div>

            <span class="rotate-90 hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </span>
        </div>

     </div>
     <!-- topbar -->

     <!-- chat bubbles -->
     <div class="mt-20 ml-4">
       

        <div class="relative overflow-y-auto h-[calc(100vh-150px)] scrollbar">

            <!-- right bubble -->
            <div class="mt-4">
                <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl bg-dark-200">
                    <div class="flex items-center space-x-2 rtl:space-x-reverse">
                        <span class="text-sm font-semibold text-white">Bonnie Green</span>
                        <span class="text-sm font-normal  text-gray-400">11:46</span>
                    </div>
                    <p class="text-sm font-normal py-2.5  text-white">That's awesome. I think our users will really appreciate the improvements.</p>
                </div>
            </div>
            <!-- right bubble -->

            <!-- left bubble -->
            <div class="flex justify-end w-full mt-4 ">
                <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-s-xl rounded-ee-xl bg-bubble mr-4">
                    <div class="flex items-center space-x-2 rtl:space-x-reverse">
                        <span class="text-sm font-semibold text-white">Bonnie Green</span>
                        <span class="text-sm font-normal  text-gray-400">11:46</span>
                    </div>
                    <p class="text-sm font-normal py-2.5  text-white">That's awesome. I think our users will really appreciate the improvements.</p>
                    <span class="text-sm font-normal text-gray-400">Delivered</span>
                </div>
            </div>
            <!-- left bubble -->

        <!-- right bubble -->
        <div class="mt-4">
            <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl bg-dark-200">
                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                    <span class="text-sm font-semibold text-white">Bonnie Green</span>
                    <span class="text-sm font-normal  text-gray-400">11:46</span>
                </div>
                <p class="text-sm font-normal py-2.5  text-white">That's awesome. I think our users will really appreciate the improvements.</p> 
            </div>
        </div>
        <!-- right bubble -->

        <!-- left bubble -->
        <div class="flex justify-end w-full mt-4 ">
            <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-s-xl rounded-ee-xl bg-bubble mr-4">
                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                    <span class="text-sm font-semibold text-white">Bonnie Green</span>
                    <span class="text-sm font-normal  text-gray-400">11:46</span>
                </div>
                <p class="text-sm font-normal py-2.5  text-white">That's awesome. I think our users will really appreciate the improvements.</p>
                <span class="text-sm font-normal text-gray-400">Delivered</span>
            </div>
        </div>
        <!-- left bubble -->

        <!-- right bubble -->
        <div class="mt-4">
            <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl bg-dark-200">
                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                    <span class="text-sm font-semibold text-white">Bonnie Green</span>
                    <span class="text-sm font-normal  text-gray-400">11:46</span>
                </div>
                <p class="text-sm font-normal py-2.5  text-white">That's awesome. I think our users will really appreciate the improvements.</p>
                
            </div>
        </div>
        <!-- right bubble -->

        <!-- left bubble -->
        <div class="flex justify-end w-full mt-4 ">
            <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-s-xl rounded-ee-xl bg-bubble mr-4">
                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                    <span class="text-sm font-semibold text-white">Bonnie Green</span>
                    <span class="text-sm font-normal  text-gray-400">11:46</span>
                </div>
                <p class="text-sm font-normal py-2.5  text-white">That's awesome. I think our users will really appreciate the improvements.</p>
                <span class="text-sm font-normal text-gray-400">Delivered</span>
            </div>
        </div>
        <!-- left bubble -->


</div>
     </div>

     <!-- send form -->
          <div class="pt-2">
            <!-- form -->
            <FormKit type="form" id="message-form" @submit="HandleSendMessage" 
                :form-class="'bg-dark-200 flex items-center px-2 mx-2'"
                :actions="false"
           >

            <FormKit
                    type="text"
                    name="message"
                    placeholder="Write Message"
                    aria-autocomplete="off"
                    validation="required"
                    prefix-icon= '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-300">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                            </svg>'
                    outer-class="w-full"
                    inner-class="w-full mb-1 overflow-hidden focus:bg-dark-50 bg-dark-200 flex items-center gap-x-2 p-4 ps-2"
                    input-class="text-gray-100 text-sm bg-inherit outline-0  block w-full "
                    message-class="hidden"
                />

              
                <FormKit
                    type="file"
                    name="photos"
                    accept=".jpg,.jpeg,.png,.gif"
                    prefix-icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-300">
                                           <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                        </svg>'
                    fileList-class="hidden"
                    noFiles-class="hidden"
                    input-class="hidden"
                    prefix-icon-class="hover:cursor-pointer"
                />
                
                <FormKit
                  type="submit"
                  label=" "
                  label-class="hidden"
                  message-class="hidden"
                  wrapper-class="ml-2 flex items-center justify-center"
                  prefix-icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-300">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                </svg>'
                  prefix-icon-class="hover:cursor-pointer hover:text-jeez-100"
                />

            </FormKit>

          </div>
      <!-- send form -->
  </div>
</template>

<script setup>
import pic from '../../assets/pic.jpg'

// components
import ChatLoader from '../Loaders/ChatLoader.vue'

import  { createToaster } from "@meforma/vue-toaster";

import { reset } from '@formkit/core'
import {SendMessage} from '../../Firebase-helpers.js'

const toaster = createToaster({ 
    position:"bottom",
    duration:4000,
 });


const HandleSendMessage =(formData)=>{
    const {message,photos} = formData
    
    SendMessage(message,photos,"mvq1r9rFaAPlOswEPtDukmH4Mwe2","-NpkyrzjQcAqGOx72jSK")
    .then((sent)=>{
         if(sent){
            toaster.success('message sent')
            reset('message-form')
         }
    })
    .catch((err)=>{
        toaster.error(err.code)
        console.log(err)
    })
}

</script>


