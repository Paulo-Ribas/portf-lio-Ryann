import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueScreen from 'vue-screen'
import VueMetaApp from 'vue-meta'

const app = createApp(App)


app.use(router)
app.use(vueScreen,{
    sm: 500,
    md: 870,
    lg: 1250,
    xl: Infinity,
  })
app.mount('#app')
