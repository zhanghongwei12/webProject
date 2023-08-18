import axios from "axios";
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

const http = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

http.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

http.interceptors.response.use(config => {
    return config
}, e => {
    console.log(e, 'e')
    ElMessage({
        type: "warning",
        message: e.response.data.message
    })
    Promise.reject(e)
})

export default http