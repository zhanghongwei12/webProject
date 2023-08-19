// 封装支付相关接口
import http from "@/utils/http";

// 获取订单详情
export const getPayInfoAPI = (id) => {
    return http({
        url: `/member/order/${id}`
    })
}