/*
 * @Author: Lee
 * @Date: 2022-12-04 16:57:58
 * @LastEditTime: 2023-03-05 00:20:37
 * @LastEditors: Lee
 */
import React from 'react'
import Home from 'pages/home'
import Login from 'pages/login'
import VerifyWxRequest from 'pages/verifyWxRequest'
import Chat from 'pages/chat'
import { Navigate } from 'react-router'

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
    path: '/',
    element: <Navigate to='/home' />
  }
]

export default RouterConfig
