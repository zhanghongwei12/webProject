// 封装登录后的购物车接口
import http from "@/utils/http";

// 加入购物车商品
export const addCartListAPI = ({ skuId, count }) => {
    return http({
        url: '/member/cart',
        method: 'post',
        data: {
            skuId,
            count
        }
    })
}

// 获取购物车列表
export const findNewCartListAPI = () => {
    return http({
        url: '/member/cart'
    })
}

// 删除购物车列表
export const deleteCartListAPI = (ids) => {
    return http({
        url: '/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}

// 合并购物车列表
export const mergeCartListAPI = (data) => {
    return http({
        url: '/member/cart/merge',
        method: 'post',
        data
    })
}