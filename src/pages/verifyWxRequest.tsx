/*
 * @Author: Lee
 * @Date: 2022-12-24 18:15:47
 * @LastEditTime: 2023-01-13 20:59:52
 * @LastEditors: Lee
 */
import { useEffect } from 'react'
import sendRequest from 'src/lib/service/request'

const VerifyWxRequest = () => {
  useEffect(() => {
    //
    sendRequest({
      url: 'wxRequest',
      method: 'GET',
      params: {
        signature: '随便',
        timestamp: '2e434234234',
        nonce: '34234234df',
        echostr: '999993242323'
      },
      interceptors: {
        requestInterceptors(res) {
          return res
        },
        responseInterceptors(result) {
          return result
        }
      }
    }).then((result) => {
      console.log(result, 'p1[p')
    })
  }, [])
  return null
}

export default VerifyWxRequest
