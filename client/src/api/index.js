import http from './public'
// 登录
export const userLogin = (params) => {
  return http.post('/users/login', params)
}
// 退出登录
export const loginOut = (params) => {
  return http.post('/users/loginOut', params)
}
// 用户信息
export const userInfo = (params) => {
  return http.post('/users/userInfo', params)
}
// 注册账号
export const register = (params) => {
  return http.post('/users/register', params)
}
// 上传图片
export const upload = (params) => {
  return http.post('/users/upload', params)
}
// 修改头像
export const updateheadimage = (params) => {
  return http.post('/users/updateheadimage', params)
}
// 首页接口
export const productHome = (params) => {
  return http.get('/goods/productHome', params)
}

