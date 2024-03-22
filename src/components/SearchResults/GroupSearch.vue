<template>
  <h6 class="text-base mt-4">Find groups</h6>
   
    <!-- search -->
    <form @submit.prevent="onSubmit" class="flex items-center mt-4">   
        <div class="relative w-full">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                </svg>
            </div>
            <input type="text" v-model="search" id="simple-search" class="bg-dark-200 text-gray-200 text-sm rounded-lg focus:bg-dark-300 outline-0 block w-full ps-10 p-2.5  " placeholder="Search group.." required>
        </div>
        <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span class="sr-only">Search</span>
        </button>
    </form>
     <!-- search -->

     <div class="overflow-y-auto h-[calc(100vh-220px)] scrollbar">
        <div class="" v-if="loading">
            <Loader/>
        </div>

        <div class="" v-else>
            
            <div v-if="!isEmpty" class="">
                <!-- if there are groups  -->
                <div class="mt-4 pl-1 "  v-for="group in Groups" :key="group.id">
                        <div class="flex items-center gap-x-3 my-2 py-1 w-full hover:cursor-pointer">
                            <img v-bind:src="nophoto" alt="" class="h-8 w-8 object-fit rounded-full ring-2 ring-[#DD9C7C] ring-offset-2 ring-offset-dark-400">
                            <div class="">
                                <h6 class="text-base">{{group.name}}</h6>
                                <p class="text-xs text-gray-400">Created by {{group.created_by.username}} </p>
                            </div>
                        </div>
                </div>
            </div>
            <div v-else class="flex items-center justify-center h-[calc(100vh-220px)]">
                    <h6 class="text-gray-300 text-xl md:text-2xl">No Group found</h6>
            </div>
        </div>
     </div>

</template>

<script setup>
import { onMounted, ref } from "vue";
// helpers
import { SearchGroup } from "../../Firebase-helpers";
// components
import Tabs from "../Tabs/Tabs.vue";
import SearchBar from '../SearchBar/Searchbar.vue'
import Loader from '../Loaders/MessagesLoader.vue'

// nophoto image
import nophoto from '../../assets/nophoto.jpeg'

// toaster
import  { createToaster } from "@meforma/vue-toaster";

let loading = ref(false)
let Groups = ref([])
let search = ref("")
let isEmpty = ref(false)

const toaster = createToaster({ 
    position:"bottom",
    duration:4000,
 });

const onSubmit =()=>{
    
    if(search){
        loading.value=true
        SearchGroup(search.value)
        .then((groups)=>{

             if(groups.length === 0){
                isEmpty.value= true
             }

            Groups.value = groups
            search.value=""
            loading.value=false
        })
        .catch((err)=>{
            console.log(err)
            toaster.error("An unexpected error occurred")
            loading.value=false
        })
    }
    else{
        toaster.error("Please enter to search")
    }
}

</script>

