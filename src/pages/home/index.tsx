import React, { useEffect } from 'react'
import { Button } from 'react-vant'
import sendRequest from 'src/lib/service/request'
const Home = () => {
  useEffect(() => {
    sendRequest({
      url: 'api/wxRequest',
      method: 'GET',
      params: {},
      interceptors: {
        requestInterceptors(res) {
          console.log('接口请求拦截')

          return res
        },
        responseInterceptors(result) {
          console.log('接口响应拦截-----')
          return result
        }
      }
    })
  }, [])
  return (
    <div>
      home page
      <Button type='primary'>Primary</Button>
      <Button type='info'>Info</Button>
      <Button type='default'>Default</Button>
      <Button type='warning'>Warning</Button>
      <Button type='danger'>Dangeer</Button>
    </div>
  )
}

export default Home
