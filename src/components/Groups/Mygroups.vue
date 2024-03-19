<template>
    <!-- search bar -->
    <Searchbar title="My Groups"/>
   <!-- tabs -->
    <Tabs/>
    
    <div class="overflow-y-auto h-[calc(100vh-220px)] scrollbar">
        <div class="" v-if="loading">
            <Loader/>
        </div>

        <div class="" v-else>
            <div class="mt-4 pl-1 " v-for="group in MyGroups" :key="group.id">
                    <div class="flex items-center gap-x-3 my-2 py-1 w-full hover:cursor-pointer">
                        <img v-bind:src="nophoto" alt="" class="h-8 w-8 object-fit rounded-full ring-2 ring-[#DD9C7C] ring-offset-2 ring-offset-dark-400">
                        <div class="">
                            <h6 class="text-base">{{group.name}}</h6>
                            <p class="text-xs text-gray-400">Created by {{group.created_by.username}} </p>
                        </div>
                    </div>
                </div>
        </div>
     </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import nophoto from '../../assets/nophoto.jpeg'

// toaster
import  { createToaster } from "@meforma/vue-toaster";

// components
import Tabs from "../Tabs/Tabs.vue";
import Searchbar from "../SearchBar/Searchbar.vue";

// helper functions
import { GetUsersGroup } from "../../Firebase-helpers";
// loader
import Loader from "../Loaders/MessagesLoader.vue";

let MyGroups = ref([])
let loading = ref(false)

onMounted(()=>{
    loading.value = true
    GetUsersGroup()
    .then((groups)=>{
        MyGroups.value = groups
        loading.value = false
    })
    .catch((err)=>{
        console.log(err)
        loading.value = false
    })
    
})

</script>