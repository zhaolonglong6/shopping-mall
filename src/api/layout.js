import instance from "./index";

export function getCategoryAPI() {
  return instance({
    url: 'home/category/head'
  })
}