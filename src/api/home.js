import instance from "./index";

// banner数据
export function getBannerApi() {
  return instance({
    url: '/home/banner'
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