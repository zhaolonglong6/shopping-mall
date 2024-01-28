import instance from "./index";

// banner数据
export function getBannerApi() {
  return instance({
    url: '/home/banner'
  })
}