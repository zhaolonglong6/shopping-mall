import request from '@/api/index'

// 面包屑
export const getCategoryAPI = (id) => {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}