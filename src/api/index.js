import axios from "axios";

const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 3000
})

// 请求拦截
axios.interceptors.request.use((config) => {
  // 发送请求干的事
  return config
}, (error) => {
  // 请求错误处理
  return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use((res) => {
  // 2xx触发
  return res
}, (error) => {
  // 响应错误处理，2xx以外
  return Promise.reject(error)
})

export default instance