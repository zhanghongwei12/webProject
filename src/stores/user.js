import { defineStore } from "pinia";
import {ref} from "vue";
import { loginAPI } from "@/apis/user";
import { useCartStore } from "@/stores/cart";
import { mergeCartListAPI } from "@/apis/cart";

export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const cartStore = useCartStore()
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password})
        userInfo.value = res.data.result
        // 在用户登录时，合并购物车列表
        await mergeCartListAPI(cartStore.cartList.map(item => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))
        // 重新更新用户列表
        cartStore.updateCartList()
    }
    // 清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
        // 退出登录，清除购物车列表
        cartStore.clearCartList()
    }

    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true
})