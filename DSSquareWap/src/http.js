/**
 * HTTP 拦截器
 */
import axios from 'axios'
import store from './vuex/store'
import router from './router'
// require('es6-promise').polyfill()
// import 'es6-promise'
//  axios配置
axios.defaults.timeout = 30000
const cancelToken = axios.CancelToken

// HTTP REQUEST 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers['token'] = `${store.state.token.token}`
      // 取消http请求
      // if (config.url.indexOf('bannerlist') > -1) {
      //   let close = config.cancelToken = new CancelToken(function (c) { return c })
      //   close()
      // }
    }
    store.dispatch('addLoading', true)
    return config
  },
  err => {
    store.dispatch('addLoading', false)
    return Promise.reject(err)
  }
)

// HTTP RESPONSE 拦截器
axios.interceptors.response.use(
  response => {
    // if (response) {
    switch (response.data.Code) {
      // case 4000:
      //   // 404
      //   router.replace({
      //     path: '/404'
      //   })
      //   break
      case 4001:
        // 500
        router.replace({
          path: '/500'
        })
        break
      case 4002:
        // 401 清除token信息并跳转到登录页面, {mobile: '', token: ''}
        store.dispatch('addToken', {mobile: '', token: ''})
        router.replace({
          path: '/login',
          query: {redirect: router.currentRoute.fullPath}
        })
        break
      case 4003:
        // 401 清除token信息并跳转到登录页面
        store.dispatch('addToken', {mobile: '', token: ''})
        router.replace({
          path: '/login',
          query: {redirect: router.currentRoute.fullPath}
        })
        break
      // default:
      //   store.dispatch('addLoading', false)
    }
    // }
    return response
  },
  error => {
    store.dispatch('addLoading', false)
    return Promise.reject(error.response)
  }
)

export default axios
