import { createApp } from 'vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import './style.css'

// components
import App from './App.vue'

// Pages
import Login from './Pages/Login/Login.vue'
import Register from './Pages/Register/Register.vue'
import Chat from './Pages/Chats/Chat.vue'

// icons
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { PxDashbaord } from "oh-vue-icons/icons";

const routes = [
    {path:'/',component:Login},
    {path:'/register',component:Register},
    {path:'/chats',component:Chat}
]

const router = createRouter({
    history: createWebHashHistory('http://localhost:5173/'),
    routes,
})


addIcons(PxDashbaord);


const app = createApp(App)

app.use(router)
app.component('v-icon', OhVueIcon);
app.mount('#app')


