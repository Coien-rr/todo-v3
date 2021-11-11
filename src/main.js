import { createApp } from 'vue'
import router from './router'
import store from './store'
import { createPinia } from 'pinia'
import './style/index.css'
import App from './App.vue'

createApp(App)
  .use(store)
  .use(router)
  .use(createPinia())
  .mount('#app')
