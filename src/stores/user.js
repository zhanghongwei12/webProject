import { defineStore } from "pinia";
import {ref} from "vue";
import { loginAPI } from "@/apis/user";

export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})

    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password})
        userInfo.value = res.data.result
    }

    return {
        userInfo,
        getUserInfo
    }
})