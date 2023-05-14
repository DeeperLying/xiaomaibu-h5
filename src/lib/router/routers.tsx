/*
 * @Author: Lee
 * @Date: 2022-12-04 16:57:58
 * @LastEditTime: 2023-05-14 12:12:39
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
import CreateGoods from 'pages/goods/createGoods/createGoods'
import Create from 'pages/goods/create/create'

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
    path: '/goods',
    element: <CreateGoods />
  },
  {
    path: '/create',
    element: <Create />
  },
  {
    path: '/',
    element: <Navigate to='/home' />
  }
]

export default RouterConfig
