<script setup>
import { getDetailHotAPI } from '@/api/detail'
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  hotType: Number,
})
const route = useRoute()
const detailHotList = ref([])
const reqData = ref({
  id: route.params.id,
  type: props.hotType,
})

const title = computed(() => (props.hotType === 1 ? '24小时热榜' : '周热榜'))
const getDetailHotList = async () => {
  const res = await getDetailHotAPI(reqData.value)
  detailHotList.value = res.data.result
}
onMounted(() => getDetailHotList())
</script>

<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink
      to="/"
      class="goods-item"
      v-for="item in detailHotList"
      :key="item.id"
    >
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
}
</style>
