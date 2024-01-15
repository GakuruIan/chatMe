import { createApp } from 'vue'
import router from './routes.js'
import Toaster from "@meforma/vue-toaster";



import './style.css'

// components
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(Toaster)
app.mount('#app')


