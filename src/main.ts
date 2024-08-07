import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css';

import App from './App.vue'
import router from './router'
import store from './stores/AccountStore.js';

const app = createApp(App)

app.use(store);
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
