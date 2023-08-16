import http from '@/utils/http'

// 获取 banner
export const getBannerAPI = () => {
    return http({
        url: 'home/banner'
    })
}