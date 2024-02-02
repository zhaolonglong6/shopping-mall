<script setup>
import HomePanel from './HomePanel.vue'
import GoodsItem from './common/GoodsItem.vue'
import { getGoodsAPI } from '@/api/home'
import { ref, onMounted } from 'vue'

const goodsList = ref([])
const getGoodsList = async () => {
  const res = await getGoodsAPI()
  goodsList.value = res.data.result
}
onMounted(() => getGoodsList())
</script>

<template>
  <div class="home-product">
    <HomePanel :title="item.name" v-for="item in goodsList" :key="item.id">
      <div class="box">
        <RouterLink class="cover" to="/">
          <img v-lazy-img="item.picture" />
          <strong class="label">
            <span>{{ item.name }}馆</span>
            <span>{{ item.saleInfo }}</span>
          </strong>
        </RouterLink>
        <ul class="goods-list">
          <li v-for="i in item.goods" :key="i.id">
            <GoodsItem :goods="i" />
          </li>
        </ul>
      </div>
    </HomePanel>
  </div>
</template>

<style scoped lang="scss">
.home-product {
  background: #fff;
  margin-top: 20px;

  .box {
    display: flex;

    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .label {
        width: 230px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);

        span {
          text-align: center;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }

    .goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;

        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
