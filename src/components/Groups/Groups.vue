<template>
  <div class="">
         
        <!-- search -->
        <Searchbar title="Groups" link="search-group"/>
        

        <!-- tabs -->
        <Tabs/>

        <!-- groups -->
        <div class="overflow-y-auto h-[calc(100vh-220px)] scrollbar">
             
            <div class="" v-if="loading">
                   <!-- loader -->
                    <Loader/>
            </div>

            <div class="mt-4 pl-1 " v-for="group in Groups" :key="group.id">

       
                <div class="flex items-center gap-x-3 my-2 py-1 w-full hover:cursor-pointer">
                    <img v-bind:src="pic" alt="" class="h-8 w-8 object-fit rounded-full ring-2 ring-[#DD9C7C] ring-offset-2 ring-offset-dark-400">
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
import { onMounted } from 'vue'
import { ref } from 'vue'

// component
import Loader from '../Loaders/MessagesLoader.vue'
import Tabs from '../Tabs/Tabs.vue'
import Searchbar from '../SearchBar/Searchbar.vue'
// 
import pic from '../../assets/nophoto.jpeg'
// helpers
import { FetchGroups } from '../../Firebase-helpers'

// toaster
import  { createToaster } from "@meforma/vue-toaster";


const toaster = createToaster({ 
    position:"bottom",
    duration:4000,
 });

let Groups = ref([])
let loading = ref(false)
  
onMounted(()=>{
  loading.value = true
  FetchGroups().then((groups)=>{
    Groups.value = groups
    loading.value = false
  })
  .catch((err)=>{
     toaster.error("An Error occurred")
     loading.value = false
  })
})

</script>
