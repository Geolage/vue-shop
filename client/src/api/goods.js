import http from './public'
// 电脑列表
export const getComputer = (params) => {
  return http.get('/goods/computer', params)
}
// 获取购物车列表
export const getCartList = (params) => {
  return http.post('/users/cartList', params)
}
// 加入购物车
export const addCart = (params) => {
  return http.post('/goods/addCart', params)
}
// 批量加入购物车
export const addCartBatch = (params) => {
  return http.post('/goods/addCartBatch', params)
}
// 删除购物车
export const delCart = (params) => {
  return http.post('/goods/delCart', params)
}
// 编辑购物车
export const cartEdit = (params) => {
  return http.post('/users/cartEdit', params)
}
// 全选
export const editCheckAll = (params) => {
  return http.post('/users/editCheckAll', params)
}
// 删除整条购物车
export const cartDel = (params) => {
  return http.post('/users/cartDel', params)
}
// 获取用户地址
export const addressList = (params) => {
  return http.post('/users/addressList', params)
}
// 修改收货地址
export const addressUpdate = (params) => {
  return http.post('/users/addressUpdate', params)
}
// 添加收货地址
export const addressAdd = (params) => {
  return http.post('/users/addressAdd', params)
}
// 删除收货地址
export const addressDel = (params) => {
  return http.post('/users/addressDel', params)
}
// 支付
export const payMent = (params) => {
  return http.post('/users/payMent', params)
}
// 订单
export const orderList = (params) => {
  return http.post('/users/orderList', params)
}
// 商品详情
export const productDet = (params) => {
  return http.get('/goods/productDet', params)
}
// 删除订单
export const delOrder = (params) => {
  return http.post('/users/delOrder', params)
}
