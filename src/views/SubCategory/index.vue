<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from "@/apis/category";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import GoodsItem from "@/views/Home/components/GoodsItem.vue";

const route = useRoute()

const categoryData = ref({})
const getCategory = async () => {
  const res = await getCategoryFilterAPI(route.params.id)
  categoryData.value = res.data.result
}
onMounted(() => getCategory())

// 获取全部分类中的商品数据
const goodsList = ref([])
const data = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const getGoods = async () => {
  const res = await getSubCategoryAPI(data.value)
  goodsList.value = res.data.result.items
  console.log(res)
}

onMounted(() => getGoods())

// 切换tab 栏
const tabChange = () => {
  // 页数重置为 1
  data.value.page = 1
  getGoods(data.value)
}
// 禁用加载标识
const disabled = ref(false)
// 无限加载方法
const load = async () => {
  // 页数加一
  data.value.page++
  // 加载新数据
  const res = await getSubCategoryAPI(data.value)
  // 合并数据
  goodsList.value = [...goodsList.value, ...res.data.result.items]
  // console.log(goodsList.value, 'goodsList')
  if(res.data.result.items.length === 0) {
    disabled.value = true
  }
}

</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${ categoryData.parentId}` }">{{ categoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="data.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <goods-item v-for="good in goodsList" :key="good.id" :good="good"></goods-item>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>