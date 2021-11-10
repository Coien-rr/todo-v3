import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'

createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .mount('#app')
