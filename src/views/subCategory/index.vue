<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/api/category'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import GoodsItem from '@/views/Home/components/common/GoodsItem.vue'

const route = useRoute()
const categoryList = ref([])
const getCategoryList = async () => {
  const res = await getCategoryFilterAPI(route.params.id)
  categoryList.value = res.data.result
}
onMounted(() => getCategoryList())

const subCategoryList = ref([])
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime',
})
const getSubCategoryList = async () => {
  const res = await getSubCategoryAPI(reqData.value)
  subCategoryList.value = res.data.result.items
}
onMounted(() => getSubCategoryList())

// tab改变
const tabChange = () => {
  getSubCategoryList()
}

const disabled = ref(false)
const load = async () => {
  reqData.value.page++
  const res = await getSubCategoryAPI(reqData.value)
  subCategoryList.value = [...subCategoryList.value, ...res.data.result.items]
  if (res.data.result.items.length === 0) {
    disabled.value = true
  }
}
</script>

<template>
  <div class="container">
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          :to="{ path: `/category/${categoryList.parentId}` }"
        >
          {{ categoryList.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryList.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div
        class="body"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="disabled"
      >
        <!-- 商品列表-->
        <GoodsItem
          :goods="item"
          v-for="item in subCategoryList"
          :key="item.id"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
