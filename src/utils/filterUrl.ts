/*
 * @Author: Lee
 * @Date: 2023-02-26 16:32:20
 * @LastEditTime: 2023-02-26 16:42:58
 * @LastEditors: Lee
 */

export function getQueryParams(url: string) {
  const paramArr = url.slice(url.indexOf('?') + 1).split('&')
  const params = <any>{}
  paramArr.map((param) => {
    const [key, val] = param.split('=')
    params[key] = decodeURIComponent(val)
  })
  return params
}
