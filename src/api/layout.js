import instance from "./index";

export async function getCategoryAPI() {
  return await instance({
    url: 'home/category/head'
  })
}