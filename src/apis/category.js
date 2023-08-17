import http from '@/utils/http.js'

// 获取二级分类列表
export const getCategoryAPI = (id) => {
    return http({
        url: '/category',
        params: {
            id
        }
    })
}

// 获取全部分类列表数据
export const getCategoryFilterAPI = (id) => {
    return http({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}

// 获取全部分类点击后出现的商品列表
/**
 * @description: 获取导航数据
 * @data {
 categoryId: 1005000 ,
 page: 1,
 pageSize: 20,
 sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
 }
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
    return http({
        url: '/category/goods/temporary',
        method: 'post',
        data
    })
}

