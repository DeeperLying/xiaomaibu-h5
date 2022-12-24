/*
 * @Author: Lee
 * @Date: 2022-12-24 18:15:47
 * @LastEditTime: 2022-12-24 18:34:11
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
      data: {},
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
