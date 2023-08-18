// 使用插件的方式注册全局组件
import ImageView from '@/components/ImageView/index.vue'
import XtxSku from "@/components/XtxSku/index.vue";
export const componentPlugin =  {
    install(app) {
        app.component('ImageView', ImageView)
        app.component('XtxSku', XtxSku)
    }
}