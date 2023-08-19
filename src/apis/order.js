// 封装订单相关接口
import http from "@/utils/http";

/*
params: {
	orderState:0,
  page:1,
  pageSize:2
}
*/

// 我的订单
export const getUserOrder = (params) => {
    return http({
        url:'/member/order',
        method:'GET',
        params
    })
}