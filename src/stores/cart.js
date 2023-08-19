// 购物车列表
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { addCartListAPI, findNewCartListAPI } from "@/apis/cart";
import { useUserStore } from "@/stores/user";

export const useCartStore = defineStore('cart', () => {
    const cartList = ref([])
    const userStore = useUserStore()
    // 是否登录的标志
    const isLogin = userStore.userInfo.token
    // 向购物车添加商品
    const addCart = async (good) => {
        if(isLogin) {
            const { skuId, count } = good
            await addCartListAPI({ skuId, count})
            const res = await findNewCartListAPI()
            cartList.value = res.data.result
        }else {
            // 添加商品逻辑
            const item = cartList.value.find(item => item.skuId === good.skuId)
            // 如果商品存在，则数量加一，否则直接添加商品
            if(item) {
                item.count++
            }else {
                cartList.value.push(good)
            }
        }

    }
    // 删除购物车
    const delCart = (skuId) => {
        const delIdx = cartList.value.findIndex(item => item.skuId === skuId)
        cartList.value.splice(delIdx, 1)
    }
    // 统计商品总数量
    const allCount = computed(() => {
        return cartList.value.reduce((a, item) => {
            return a + item.count
        }, 0)
    })
    // 统计商品总价
    const allPrice = computed(() => {
        return cartList.value.reduce((a, item) => {
            return a + item.count * item.price
        }, 0)
    })
    // 修改商品单选框状态
    const singleChange = (selected, skuId) => {
        const item = cartList.value.find(item => item.skuId === skuId)
        item.selected = selected
    }
    // 计算全选状态
    const isAll = computed(() => cartList.value.every(item => item.selected))
    // 修改商品全选框状态
    const allChange = (selected) => {
        cartList.value.forEach(item => item.selected = selected)
    }
    // 已选择数量
    const selectedCount = computed(() => {
        const selectedCartList = cartList.value.filter(item => item.selected)
        console.log(selectedCartList)
        return selectedCartList.reduce((a, item) => {
            return a + item.count
        }, 0)
    })
    // 已选择商品价钱合计
    const selectedPrice = computed(() => {
        const selectedCartList = cartList.value.filter(item => item.selected)
        return selectedCartList.reduce((a, item) => a + item.count * item.price, 0)
    })
    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleChange,
        isAll,
        allChange,
        selectedCount,
        selectedPrice
    }
}, {
    persist: true
})