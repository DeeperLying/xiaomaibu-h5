/*
 * @Author: Lee
 * @Date: 2022-12-03 20:59:01
 * @LastEditTime: 2023-09-03 12:57:24
 * @LastEditors: Lee
 */
import React, { ReactElement, useEffect } from 'react'
import { useRoutes } from 'react-router'
// import wx from 'weixin-js-sdk'

import Layout from 'src/components/Layout/Layout'

import './App.css'

import RouterConfig from 'src/lib/router/routers'
// import { getWxUserAuthCode } from './utils/wx_auth'

function App(): ReactElement {
  // useEffect(() => {
  //   if (!wx.ready()) {
  //     wx.config({
  //       debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  //       appId: 'wx058da0ae05bcf944', // 必填，公众号的唯一标识
  //       timestamp: '1677338755', // 必填，生成签名的时间戳
  //       nonceStr: 'test', // 必填，生成签名的随机串
  //       signature: '71775ec422243d28d96740897db248cea0de5d3f', // 必填，签名
  //       jsApiList: ['getLocation'] // 必填，需要使用的JS接口列表
  //     })
  //   }
  // }, [])

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      /* 创建并指定对应的执行内容 */
      /* scope 参数是可选的，可以用来指定你想让 service worker 控制的内容的子目录。 在这个例子里，我们指定了 '/'，表示 根网域下的所有内容。这也是默认值。 */
      navigator.serviceWorker
        .register('./serviceWorker.js', { scope: './' })
        .then(function(registration) {
          console.log(
            'ServiceWorker registration successful with scope=======: ',
            registration.scope
          )
          // 2. 通过`registration`对象获得`PushManager`对象
          const pushManager = registration.pushManager

          // 3. 通过`PushManager`对象订阅消息推送，获得`subscription`对象
          pushManager
            .subscribe({
              userVisibleOnly: true,
              applicationServerKey:
                'BHXrxJPYpQSwGMwcN-HprCaU_Po9POIUvqWFLFq9UUNHP5SNJKxk_Io59y8_twMTOuB5SbpbcPBwHFo2kBUj7vQ'
            })
            .then((subscription) => {
              // 4. 将`subscription`对象发送给服务器，由服务器保存
              console.log(subscription)
            })
        })
        .catch(function(err) {
          console.log('ServiceWorker registration failed: ', err)
        })
    }
  }, [])

  const element = useRoutes(RouterConfig)
  return (
    <div className='App'>
      <Layout>{element}</Layout>
    </div>
  )
}

export default App
