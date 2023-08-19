// 购物车列表
import { defineStore } from "pinia";
import { ref, computed } from "vue";

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
    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleChange,
        isAll,
        allChange
    }
}, {
    persist: true
})