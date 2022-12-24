/*
 * @Author: Lee
 * @Date: 2022-12-04 16:57:58
 * @LastEditTime: 2022-12-24 18:21:46
 * @LastEditors: Lee
 */
import React from 'react'
import Home from 'pages/home'
import Login from 'pages/login'
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
  }
]

export default RouterConfig
