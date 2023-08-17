<script setup>
import { onMounted } from "vue";
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue";

import { useCategoryStore } from "@/stores/category";
// 委派父节点请求导航菜单，在通过 pinia 分配给需要的子节点，从而减少对相同内容的请求次数
const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCategory())
</script>

<template>
  <LayoutFixed></LayoutFixed>
  <LayoutNav />
  <LayoutHeader />
  <!-- 通过加上key值，是组件不再复用，从而解决组件缓存问题 -->
  <!-- 组件缓存问题会导致钩子函数不再调用，从而无法请求最新的数据 -->
<!--  <RouterView :key="$route.fullPath" />-->
  <RouterView />
  <LayoutFooter />
</template>