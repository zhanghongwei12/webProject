// 购物车列表
import { defineStore } from "pinia";
import {ref} from "vue";

export const useCartStore = defineStore('cart', () => {
    const cartList = ref([])
    // 向购物车添加商品
    const addCart = (good) => {
        // 添加商品逻辑
        const item = cartList.value.find(item => item.skuId === good.skuId)
        // 如果商品存在，则数量加一，否则直接添加商品
        if(item) {
            item.count++
        }else {
            cartList.value.push(good)
        }
    }
    // 删除购物车
    const delCart = (skuId) => {
        const delIdx = cartList.value.findIndex(item => item.skuId === skuId)
        cartList.value.splice(delIdx, 1)
    }
    return {
        cartList,
        addCart,
        delCart
    }
}, {
    persist: true
})