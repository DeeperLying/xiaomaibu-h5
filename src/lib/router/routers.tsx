/*
 * @Author: Lee
 * @Date: 2022-12-04 16:57:58
 * @LastEditTime: 2022-12-11 18:11:12
 * @LastEditors: Lee
 */
import React from 'react'
import Home from 'pages/home'
import Login from 'pages/login'

const RouterConfig = [
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  }
]

export default RouterConfig
