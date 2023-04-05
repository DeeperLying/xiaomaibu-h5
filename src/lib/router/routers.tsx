/*
 * @Author: Lee
 * @Date: 2022-12-04 16:57:58
 * @LastEditTime: 2023-04-05 19:39:50
 * @LastEditors: Lee
 */
import React from 'react'
import { Navigate } from 'react-router'

import Home from 'pages/home'
import Login from 'pages/login'
import VerifyWxRequest from 'pages/verifyWxRequest'
import Chat from 'pages/chat'
import UserCenter from 'pages/userCenter/userCenter'
import AiImage from 'pages/aiImage/aiImage'
import AliPay from 'pages/aliPay/aliPay'

const RouterConfig = [
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/verifyWxRequest',
    element: <VerifyWxRequest />
  },
  {
    path: '/chat',
    element: <Chat />
  },
  {
    path: '/user-center',
    element: <UserCenter />
  },
  {
    path: '/ai-image',
    element: <AiImage />
  },
  {
    path: '/aliPay',
    element: <AliPay />
  },
  {
    path: '/',
    element: <Navigate to='/home' />
  }
]

export default RouterConfig
