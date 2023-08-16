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
  <RouterView />
  <LayoutFooter />
</template>