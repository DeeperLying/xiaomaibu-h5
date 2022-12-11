/*
 * @Author: Lee
 * @Date: 2022-12-04 19:02:04
 * @LastEditTime: 2022-12-11 22:40:38
 * @LastEditors: Lee
 */
import Request from './conf'
import { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'

import type { RequestConfig } from './types'

export interface YWZResponse<T> {
  statusCode: number
  desc: string
  result: T
}

// 重写返回类型
interface YWZRequestConfig<T, R> extends RequestConfig<YWZResponse<R>> {
  data?: T
}

const request = new Request({
  //baseURL: 'http://123.249.102.202:8443/',
  baseURL: 'http://127.0.0.1:8443/api/',
  timeout: 1000 * 60 * 5,
  headers: {
    Authentication: Cookies.get('token')
  },
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => config,
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      return result
    }
  }
})

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {YWZRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const sendRequest = <D = any, T = any>(config: YWZRequestConfig<D, T>) => {
  return request.request<YWZResponse<T>>(config)
}
// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url)
}
// 取消全部请求
export const cancelAllRequest = () => {
  return request.cancelAllRequest()
}

export default sendRequest
