import React, { useEffect, useState } from 'react'
import { CountDown, Empty, Button } from 'react-vant'
import { useLocation } from 'react-router'

// import wx from 'weixin-js-sdk'
import { getEnvironment, getQueryParams } from 'src/utils/public'
import { getWxUserAuthCode } from 'src/utils/wx_auth'

const Home = () => {
  const querys = useLocation()
  const [isWeChat, setIsWeChat] = useState<boolean>(false)
  // const getLocation = useCallback(() => {
  //   wx.ready(() => {
  //     wx.getLocation({
  //       type: 'wgs84', // 默认为wgs84的 gps 坐标，如果要返回直接给 openLocation 用的火星坐标，可传入'gcj02'
  //       success: function (res: any) {
  //         const latitude = res.latitude // 纬度，浮点数，范围为90 ~ -90
  //         const longitude = res.longitude // 经度，浮点数，范围为180 ~ -180。
  //         const speed = res.speed // 速度，以米/每秒计
  //         const accuracy = res.accuracy // 位置精度
  //         console.log(latitude, longitude, speed, accuracy)
  //       }
  //     })
  //   })
  // }, [])

  useEffect(() => {
    if (!getEnvironment()) {
      return
    }

    const params = getQueryParams(querys?.search)
    if (params?.code) {
      return
    }

    setIsWeChat(true)
  }, [querys?.search])

  return (
    <div>
      <Empty description='工程师正在玩命的开发中....' />
      <CountDown time={30 * 60 * 60 * 1000} format='DD 天 HH 时 mm 分 ss 秒' />
      {isWeChat && (
        <Button type='info' onClick={getWxUserAuthCode}>
          Login
        </Button>
      )}
    </div>
  )
}

export default Home
