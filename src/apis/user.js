// 所有和用户相关的接口
import http from "@/utils/http";

// 登录接口
export const loginAPI = ({account, password}) => {
    return http({
        url: '/login',
        method: 'post',
        data: {
            account,
            password
        }
    })
}

// 猜你喜欢接口
export const getLikeListAPI = ({ limit=4 }) => {
    return http({
        url: '/goods/relevant',
        params: {
            limit
        }
    })
}