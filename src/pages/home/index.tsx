import React, { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Button } from 'react-vant'
import sendRequest from 'src/lib/service/request'
import wx from 'weixin-js-sdk'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    sendRequest({
      url: '/chat',
      method: 'GET',
      params: {
        value: '看看世界如何'
      },
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

  const getLocation = useCallback(() => {
    wx.ready(() => {
      wx.getLocation({
        type: 'wgs84', // 默认为wgs84的 gps 坐标，如果要返回直接给 openLocation 用的火星坐标，可传入'gcj02'
        success: function (res: any) {
          const latitude = res.latitude // 纬度，浮点数，范围为90 ~ -90
          const longitude = res.longitude // 经度，浮点数，范围为180 ~ -180。
          const speed = res.speed // 速度，以米/每秒计
          const accuracy = res.accuracy // 位置精度
          console.log(latitude, longitude, speed, accuracy)
        }
      })
    })
  }, [])

  return (
    <div>
      home page
      <Button type='primary' onClick={() => getLocation()}>
        wx
      </Button>
      <Button type='info' onClick={() => navigate('/login')}>
        login
      </Button>
      <Button type='default'>Default</Button>
      <Button type='warning'>Warning</Button>
      <Button type='danger'>Dangeer</Button>
    </div>
  )
}

export default Home
