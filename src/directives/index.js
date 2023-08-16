import {useIntersectionObserver} from "@vueuse/core";

// 定义懒加载指令
export const lazyPlugin = {
    install(app) {
        app.directive('img-lazy', {
            mounted(el, binding) {
                // el 表示指令对应的元素
                // binding 表示指令等于号后面的值
                const { stop} = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }], ) => {
                        if(isIntersecting) {
                            el.src = binding.value
                            // 当图片加载完毕后，停止监听
                            stop()
                        }
                    },
                )
            },
        })
    }
}