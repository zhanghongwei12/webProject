import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { lazyPlugin } from "@/directives";
import { componentPlugin } from '@/components/index'
// pinia 持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
// 注册懒加载指令
app.use(lazyPlugin)
// 注册全局组件
app.use(componentPlugin)
app.mount('#app')


