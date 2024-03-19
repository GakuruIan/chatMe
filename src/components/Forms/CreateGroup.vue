<template>
  <div class="">
    <h6 class="text-base my-4">Create group</h6>

     <div class="px-2">

        <FormKit type="form" id="create-group-form" @submit="CreateGroupHandler" 
          :form-class="'w-full'"
          :actions="false"
           >

           <FormKit
                type="text"
                name="name"
                label="Group name"
                prefix-icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>'
                validation="required|length:0,30"
                placeholder="Coding Warriors"
                outer-class="mb-5"
                label-class="block mb-2 text-sm"
                inner-class="mb-1 overflow-hidden focus:bg-dark-300 bg-dark-200 flex items-center gap-x-2 ps-2 p-2.5"
                input-class="  text-gray-100 text-sm bg-inherit  outline-0  block w-full "
                message-class="text-xs md:text-sm text-red-400"
           />

           <FormKit
                type="textarea"
                name="description"
                label="Group Description"
                placeholder="This is a coding community"
                validation="length:0,150"
                rows="4"
                :validation-messages="{
                    length: 'Group description cannot be more than 150 characters.',
                }"
                outer-class="mb-5"
                label-class="block mb-2 text-sm"
                inner-class="mb-1 overflow-hidden focus:bg-dark-300 bg-dark-200 flex items-center gap-x-2 ps-2 p-2.5"
                input-class="  text-gray-100 text-sm bg-inherit  outline-0  block w-full "
                message-class="text-xs md:text-sm text-red-400"
            />

            <FormKit
                type="select"
                label="Group type"
                name="type"
                :options="[
                    'community',
                    'private'
                ]"
                outer-class="mb-5"
                label-class="block mb-2 text-sm"
                inner-class="mb-1 overflow-hidden focus:bg-dark-300 bg-dark-200 flex items-center gap-x-2 ps-2 p-2.5"
                input-class="  text-gray-100 text-sm bg-inherit  outline-0  block w-full "
                message-class="text-xs md:text-sm text-red-400"
            />

            <FormKit
                type="submit"
                label="Create group"
                inputClass="mt-2 w-full px-4 py-3 bg-jeez-200 hover:bg-jeez-100"
                labelClass="text-white text-center text-base"
            />

        </FormKit>

     </div>
  </div>
</template>

<script setup>
// Helpers
import {CreateGroup} from '../../Firebase-helpers.js'
// toaster
import  { createToaster } from "@meforma/vue-toaster";
//formik
import { reset } from '@formkit/core'

const toaster = createToaster({ 
    position:"bottom",
    duration:4000,
 });

const CreateGroupHandler =(formData)=>{
  const{name,description,type} = formData

  CreateGroup(name,description,type)
  .then((isCreated)=>{
     if(isCreated){
      toaster.success("Group created successfully")
      reset('create-group-form')
     }
  })
  .catch((err)=>{
    if(err.code){
        toaster.error(err.code)
    }
    if(err.error){
        const {error} = err
        toaster.error(error)
    }
    else{
        toaster.error(err)
    }
  })
}

</script>

