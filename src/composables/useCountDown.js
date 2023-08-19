import {ref, computed, onUnmounted } from "vue";
import dayjs from 'dayjs'
export const useCountDown = () => {
    const time = ref(0)
    let timer = null
    // 格式化事件
    const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
    const start = (currentTime) => {
        // 拿到要倒计时的值
        time.value = currentTime
        // 倒计时
        timer = setInterval(() => {
            time.value--
        }, 1000)
    }
    // 当组件销毁时清除定时器
    onUnmounted(() => {
        timer && clearInterval(timer)
    })
    return {
        formatTime,
        start
    }
}