import http from "@/utils/http";

// 获取导航分类
export const getCategoryAPI = () => {
    return http({
        url: '/home/category/head'
    })
}