// 封装订单相关接口
import http from "@/utils/http";

// 获取订单详情
export const getCheckInfoAPI = () => {
    return http({
        url: '/member/order/pre'
    })
}

// 创建订单
export const createOrderAPI = (data) => {
    return http({
        url: '/member/order',
        method: 'post',
        data
    })
}