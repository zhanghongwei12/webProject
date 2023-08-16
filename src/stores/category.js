import { defineStore } from "pinia";
import {ref} from "vue";
import { getCategoryAPI } from "@/apis/layout";

// 获取导航菜单
export const useCategoryStore =  defineStore('category', () => {
    const categoryList = ref([])
    const getCategory = async () => {
        const res = await getCategoryAPI()
        categoryList.value = res.data.result

    }

    return {
        categoryList,
        getCategory
    }
})