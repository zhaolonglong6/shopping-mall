import instance from "./index";

// banner数据
export function getBannerApi(distributionSite = '1') {
  return instance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

// 新鲜好物
export const findNewAPI = () => {
  return instance({
    url: '/home/new'
  })
}

// 人气推荐
export function getHotAPI() {
  return instance({
    url: '/home/hot'
  })
}

// 商品详情
export function getGoodsAPI() {
  return instance({
    url: '/home/goods'
  })
}