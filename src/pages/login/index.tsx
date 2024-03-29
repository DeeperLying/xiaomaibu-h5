/*
 * @Author: Lee
 * @Date: 2022-12-11 18:09:47
 * @LastEditTime: 2023-03-26 01:43:40
 * @LastEditors: Lee
 */

import React, { useEffect } from 'react'
import { Button, Input, Form, Toast } from 'react-vant'
import { useNavigate } from 'react-router'
import wx from 'weixin-js-sdk'
import Cookies from 'js-cookie'

import sendRequest from 'src/lib/service/request'
import { getQueryParams } from 'src/utils/public'

export default function Login() {
  const navigate = useNavigate()
  const [form] = Form.useForm()

  useEffect(() => {
    const querys = getQueryParams(window.location.search)
    if (querys?.code) {
      sendRequest({
        url: '/getWxUserAuthInfo',
        method: 'GET',
        params: { code: querys?.code }
      })
        .then(({ code, data }: any) => {
          if (code === 200 && Object.keys(data)?.length) {
            Cookies.set('token', data.token)
            Cookies.set('userInfo', JSON.stringify(data.userInfo))
            navigate('/user-center')
          }
        })
        .catch(() => {
          Toast('Login fail')
        })
    }
  }, [])

  useEffect(() => {
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

  const onFinish = (values: any) => {
    sendRequest({
      url: 'login',
      method: 'POST',
      data: { ...values },
      interceptors: {
        requestInterceptors(res) {
          return res
        },
        responseInterceptors(result) {
          return result
        }
      }
    }).then(({ response: { data } }) => {
      Cookies.set('Token', data.token)
    })
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      footer={
        <div style={{ margin: '16px 16px 0' }}>
          <Button round nativeType='submit' type='primary' block>
            提交
          </Button>
        </div>
      }
    >
      <Form.Item
        tooltip={{
          message:
            'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.'
        }}
        intro='确保这是唯一的用户名'
        rules={[{ required: true, message: '请填写用户名' }]}
        name='username'
        label='用户名'
      >
        <Input placeholder='请输入用户名' />
      </Form.Item>
      <Form.Item rules={[{ required: true, message: '请填写密码' }]} name='password' label='密码'>
        <Input placeholder='请输入密码' />
      </Form.Item>
    </Form>
  )
}
