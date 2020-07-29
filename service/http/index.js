//参考文章 https://segmentfault.com/a/1190000016474460
import axios from 'axios'

const instance = axios.create({
  // 基本配置
  baseUrl: 'http://127.0.0.1:3000',
  timeout: 60000
})

let source = {}
let requestList = []

Object.assign(instance.defaults, {
  baseURL: baseUrl,
  timeout,
  headers: { 'Content-Type': 'application/json;charset=UTF-8'}
})

// 请求拦截器
instance.interceptors.request.use(config => {
  // do something
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(response => {
  // do something
  const request = JSON.stringify(response.config.url)
  // 请求完成后，将此请求从请求列表中移除
  requestList.splice(requestList.findIndex(el => el === request), 1)
  return response
}, function (err) {
  // 报错信息没法获取config
  if (instance.isCancel(err)) {
    // 根据业务场景确定是否需要清空
    // 例如：页面跳转前，清空离开页面的请求
    requestList.length = 0
  } else {
    console.log(err)
  }
  return Promise.reject(err)
})
/**
 * 
 * @param {*} api 
 * @param {Boolean} allCancel 
 */
function cancelRequest(api, allCancel){
  if (api && requestList.includes(api) && typeof source[api] ==='function'){
    source[api]('终止请求')
  } else if (!api && allCancel) {
    requestList.forEach(el => {
      source[el]('批量终止请求')
    })
  }
}


function request(method, api, params = {}, options = {}) {
  // 取消上一次请求
  if (requestList.length) cancelRequest(api)
  return new Promise((resolve, reject) => {
    if (method === 'get') {
      options.params = params
    } else {
      options.data = params
    }
    const config = Object.assign(
      {
        url: api,
        method,
        cancelToken: new instance.CancelToken(function executor(c) {
          source[api] = c;
        })
      },
      options
    )
    requestList.push(api)
    instance.request(config)
    .then(res => {
      resolve(res)
    })
    .catch(err => {
      console.log(err)
      reject(err)
    })
  })
}


const http = {
  get: request.bind(null, 'get'),
  post: request.bind(null, 'post'),
  cancel: cancelRequest,
  requestList: requestList,
  source: source
}
export default http

