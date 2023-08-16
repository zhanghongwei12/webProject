import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 自定义全局指令
app.directive('img-lazy', {
    mounted(el, binding) {
        // el 表示指令对应的元素
        // binding 表示指令等于号后面的值
        useIntersectionObserver(
            el,
            ([{ isIntersecting }], ) => {
                if(isIntersecting) {
                    el.src = binding.value
                }
            },
        )
    },
})