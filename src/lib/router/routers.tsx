/*
 * @Author: Lee
 * @Date: 2022-12-04 16:57:58
 * @LastEditTime: 2023-06-11 13:43:00
 * @LastEditors: Lee
 */
import React from 'react'
import { Navigate } from 'react-router'

import Home from 'pages/home'
import Chat from 'pages/chat'

import AliPay from 'pages/aliPay/aliPay'
import AiImage from 'pages/aiImage/aiImage'
import Create from 'pages/goods/create/create'
import UserCenter from 'pages/userCenter/userCenter'
import CreateGoods from 'pages/goods/createGoods/createGoods'

import Login from 'pages/login'
import Register from 'pages/register'
import VerifyWxRequest from 'pages/verifyWxRequest'

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
    path: '/register',
    element: <Register />
  },
  {
    path: '/',
    element: <Navigate to='/home' />
  }
]

export default RouterConfig
