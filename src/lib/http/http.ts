/*
 * @Author: Lee
 * @Date: 2023-06-22 12:52:05
 * @LastEditTime: 2023-09-03 01:13:20
 * @LastEditors: Lee
 */
import Cookies from 'js-cookie'

const serverConfig: any = {
  //baseURL: 'http://blog.xiaomaibu.pro/api/',
  //baseURL: 'http://127.0.0.1:8443/api/',
  baseURL: process.env.REACT_APP_BASEURL,
  useTokenAuthorization: true, // 是否开启 token 认证
  timeout: 1000 * 60 * 5,
  options: {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {}
  }
}

// 封装Fetch请求函数
async function fetchRequest(api: string, config: { [key: string]: any }) {
  // 如果开启 token 认证
  const url = serverConfig.baseURL + api
  const options = {
    ...serverConfig.options,
    ...config
  }

  if (serverConfig.useTokenAuthorization) {
    options.headers['Authentication'] = Cookies.get('token') // 请求头携带 token
  }
  // 设置请求头
  if (!options.headers['Content-Type']) {
    options.headers['Content-Type'] = 'application/json' // 默认类型
  }

  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      throw response
    }

    const data = await response.json()
    // 处理自己的业务逻辑，比如判断 token 是否过期等等
    // 代码块
    return data
  } catch (response) {
    const errors = await (response as any).json()
    console.log(errors, '[[[[[[')
    const error: any = errors
    let message = ''

    switch (error.code) {
      case '302':
        message = '接口重定向了！'
        break
      case '400':
        message = '参数不正确！'
        break
      case '401':
        message = '您未登录，或者登录已经超时，请先登录！'
        Cookies.remove('token')
        Cookies.remove('userInfo')
        window.location.pathname = '/login'
        break
      case '403':
        message = '您没有权限操作！'
        break
      case '404':
        message = `请求地址出错: ${error.config.url}`
        break
      case '408':
        message = '请求超时！'
        break
      case '409':
        message = '系统已存在相同数据！'
        break
      case '500':
        message = '服务器内部错误！'
        break
      case '501':
        message = '服务未实现！'
        break
      case '502':
        message = '网关错误！'
        break
      case '503':
        message = '服务不可用！'
        break
      case '504':
        message = '服务暂时无法访问，请稍后再试！'
        break
      case '505':
        message = 'HTTP 版本不受支持！'
        break
      default:
        message = '异常问题，请联系管理员！'
        break
    }

    return Promise.reject({ response: error, message })
  }
}

export default fetchRequest
