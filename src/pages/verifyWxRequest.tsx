/*
 * @Author: Lee
 * @Date: 2022-12-24 18:15:47
 * @LastEditTime: 2023-09-02 17:30:49
 * @LastEditors: Lee
 */
import { useEffect } from 'react'
import { fetchWxRequest } from 'src/https/home/home'

const VerifyWxRequest = () => {
  useEffect(() => {
    //
    fetchWxRequest().then((result) => {
      console.log(result, 'p1[p')
    })
  }, [])
  return null
}

export default VerifyWxRequest
