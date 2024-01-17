import { createApp } from 'vue'
import router from './routes.js'
import Vuex from 'vuex'
import Toaster from "@meforma/vue-toaster";
import { plugin, defaultConfig } from "@formkit/vue";

import './style.css'

// components
import App from './App.vue'

// store
import store from './Store.js';

const app = createApp(App)

app.use(plugin,defaultConfig)
app.use(router)
app.use(Toaster)
app.use(store)
app.mount('#app')


