import request from './index'

export const getDetailAPI = (id) => {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}

export const getDetailHotAPI = ({ id, type, limit = 3 }) => {
  return request({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}