import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import style from './assets/scss/style.scss'
createApp(App).use(store).use(router).use(style).mount('#app')
