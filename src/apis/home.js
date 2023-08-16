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

//  人气推荐
export const getHotAPI = () => {
    return http({
        url: '/home/hot'
    })
}

export const getGoodsAPI = () => {
    return http({
        url: '/home/goods'
    })
}