<template>
  <div class="">

    <SearchBar title="people" link="search-people"/>

     <!-- people -->
        <div class="overflow-y-auto h-[calc(100vh-220px)] scrollbar">

            <div class=""  v-if="loading">

                <div class="mt-4 pl-1" v-for="pulse in pulses" :key="pulse">

                    <div class="animate-pulse flex items-center gap-x-4 my-2 py-1 w-full hover:cursor-pointer">
                        <div class="h-8 w-8 bg-dark-200 rounded-full"></div>

                        <div class="">
                            <h6 class="text-base h-4 w-24 bg-dark-200"></h6>
                        </div>
                    </div>

                </div>

            </div>
            
            <div class="" v-else>
                <div class="mt-4 pl-1" v-for="person in people" :key="person.uid">

                    <div class="flex items-center gap-x-4 my-2 py-1 w-full hover:cursor-pointer" >

                            <img v-if="person?.photo" v-bind:src="pic" alt="" class="h-8 w-8 object-fit rounded-full ring-2 ring-bubble ring-offset-2 ring-offset-dark-400">
                            <img v-else :src="nophoto" alt="" class="h-8 w-8 object-fit rounded-full ring-2 ring-bubble ring-offset-2 ring-offset-dark-400">

                            <div class="">
                                <h6 class="text-base">{{ person?.displayName }}</h6>
                            </div>
                    </div>
                    
                </div>
            </div>

        </div>
     <!-- people -->

  </div>
</template>

<script setup>
import { onMounted,ref } from 'vue'

import SearchBar from '../SearchBar/Searchbar.vue'

// image
import nophoto from '../../assets/nophoto.jpeg'

// helpers
import {GetPeopleList}  from '../../Firebase-helpers'
let pulses = [1,2,3,4,5,6,7,8,9]

let people  = ref(null)
let loading =ref(false)

 onMounted(()=>{
    loading.value = true
   GetPeopleList()
   .then((users)=>{
        people.value = users
        loading.value = false
   })
   .catch((err)=>{
       loading.value = false
       console.log(err)
   })
 })
</script>

<style>

</style>