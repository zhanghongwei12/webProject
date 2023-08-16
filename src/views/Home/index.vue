<script setup>
import HomeCategory from "@/views/Home/components/HomeCategory.vue";
import HomeBanner from "@/views/Home/components/HomeBanner.vue";
import HomeNew from "@/views/Home/components/HomeNew.vue";
import HomeHot from "@/views/Home/components/HomeHot.vue";
import HomeProduct from "@/views/Home/components/HomeProduct.vue";
import HomePanel from "@/views/Home/components/HomePanel.vue";
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <home-panel title="新鲜好物" sub-title="新鲜好物 值得购买">
    <div>新鲜毫无的插槽</div>
  </home-panel>
  <home-panel title="人气推荐" sub-title="人气推荐 值得购买">
    <div>人气推荐的插槽</div>
  </home-panel>
</template>

<style scoped>

</style>