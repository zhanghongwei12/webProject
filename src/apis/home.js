import http from '@/utils/http'

// 获取 banner
export const getBannerAPI = () => {
    return http({
        url: 'home/banner'
    })
}

// 获取新鲜好物
export const getNewAPI = () => {
    return http({
        url: '/home/new'
    })
}