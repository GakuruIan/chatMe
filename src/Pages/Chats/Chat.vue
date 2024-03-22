<template>
  <div class="flex">
     <Sidebar/>
    <div class="flex-1 relative bg-dark-600 ml-12 h-screen ">
       <div class="flex w-full">
            <!--Chats  -->
            <div class="min-h-screen bg-dark-500 px-2 flex-1 md:flex-none  md:w-72">
                <header class="flex items-center gap-x-4 px-2 py-3">
                     
                  <img v-if="user?.photo" :src="user?.photo" alt="" class="h-8 w-8 object-fit rounded-full ring-2 ring-bubble ring-offset-2 ring-offset-dark-400">
                  <img v-else v-bind:src="nophoto" alt="" class="h-8 w-8 object-fit rounded-full ring-2 ring-bubble ring-offset-2 ring-offset-dark-400">

                    <h6 class="text-base">{{user && user.displayName}}</h6>
                </header>
                <div class="relative ">

                  <router-view name="content"></router-view>
                    <!-- Messages component -->
                    <!-- <Messages/> -->

                    <!-- people component -->
                    <!-- <People/> -->

                    <!-- groups component-->
                    <!-- <Groups/> -->
                </div>
            </div>

            <!-- Chat messages -->
            <div class="relative min-h-screen hidden md:block bg-dark-600 flex-1">
              <!-- chat area -->
              <ChatArea/>

            </div>

            <!-- User profile -->
            <div class="min-h-screen hidden md:block bg-dark-500  w-72">
              <Profile/>
            </div>
       </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useStore } from 'vuex';

// components
import Sidebar from "../../components/Sidebar/Sidebar.vue";
import Activeusers from '../../components/Activeusers/Activeusers.vue'
import Messages from '../../components/Messages/Messages.vue'
import People from '../../components/People/People.vue'
import Groups from '../../components/Groups/Groups.vue'
import ChatArea from '../../components/ChatArea/ChatArea.vue'
import Profile from '../../components/Profile/Profile.vue'
import { useRouter } from 'vue-router';

// no image
import nophoto from '../../assets/nophoto.jpeg'

const store = useStore()
const router = useRouter()

let user = ref(null)

onMounted(async()=>{
  user.value = await store.getters.user
  
  if(!user.value){
     router.push('/')
  }
})

watch(() => store.getters.user, (newUser, oldUser) => {
  user.value = newUser
})

</script>

<style>

</style>