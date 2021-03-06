import axios from 'axios'
import store from '@/store'
import NProgress from 'nprogress'
import { Message } from 'element-ui'

NProgress.configure({
  showSpinner: false
})

const request = axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL,
  baseURL: "http://www.fhlin.top",
  timeout: 12000,
  header: {
    'Content-Type': 'application/json'
    // 'Accept': 'application/json'
  }
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    config.headers.token1 = store.state.token
    NProgress.start()
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    console.log(response.data)
    NProgress.done()
    return response
  },
  error => {
    Message.error({
      message: error.message
    })
    NProgress.done()
    Promise.reject(error)
  }
)
export default request