/*
 * @Author: Lee
 * @Date: 2022-12-11 18:09:47
 * @LastEditTime: 2023-06-11 17:08:21
 * @LastEditors: Lee
 */

import React, { useEffect } from 'react'
import { Button, Input, Form, Toast, Tabs } from 'react-vant'
import { useNavigate } from 'react-router'
import Cookies from 'js-cookie'

import sendRequest from 'src/lib/service/request'
import { getQueryParams } from 'src/utils/public'

export default function Login() {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [phoneForm] = Form.useForm()

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
    }).then(({ token }: any) => {
      Cookies.set('token', token)
    })
  }

  const onPhoneFinish = (values: any) => {
    console.log(values)
    sendRequest({
      url: 'login/phone',
      method: 'POST',
      data: { ...values }
    }).then(({ token }: any) => {
      Cookies.set('token', token)
    })
  }

  return (
    <>
      <Tabs active={1}>
        <Tabs.TabPane title='邮箱登录'>
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
              rules={[{ required: true, message: '请填写Email' }]}
              name='email'
              label='Email'
            >
              <Input placeholder='请输入用户名' />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: '请填写密码' }]}
              name='password'
              label='密码'
            >
              <Input placeholder='请输入密码' />
            </Form.Item>
          </Form>
        </Tabs.TabPane>

        <Tabs.TabPane title='手机登录'>
          <Form
            form={phoneForm}
            onFinish={onPhoneFinish}
            footer={
              <div style={{ margin: '16px 16px 0' }}>
                <Button round nativeType='submit' type='primary' block>
                  提交
                </Button>
              </div>
            }
          >
            <Form.Item
              rules={[{ required: true, message: '请填写Phone' }]}
              name='phone'
              label='Phone'
            >
              <Input placeholder='请输入Phone' />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: '请填写密码' }]}
              name='password'
              label='密码'
            >
              <Input placeholder='请输入密码' />
            </Form.Item>
          </Form>
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}
