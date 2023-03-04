/*
 * @Author: Lee
 * @Date: 2023-03-05 00:19:04
 * @LastEditTime: 2023-03-05 01:52:21
 * @LastEditors: Lee
 */

import React, { useState } from 'react'
import { Form, Input, Button, Toast, Card } from 'react-vant'
import sendRequest from 'src/lib/service/request'

type fromType = {
  value: string
}

const Chat = () => {
  const [form] = Form.useForm()

  const [loading, setLoading] = useState<boolean>(false)
  const [chatList, setChatList] = useState<string[]>([])

  const handleSendChat = (value: string) => {
    setLoading(true)
    sendRequest({
      url: '/chat',
      method: 'GET',
      params: {
        value
      },
      interceptors: {
        responseInterceptors(result) {
          return result
        }
      }
    })
      .then(({ code, data }: any) => {
        if (code === 200) {
          setChatList((chatList) => chatList.concat(data?.choices))
        } else {
          Toast.info('接口出错')
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const onFinish = (values: fromType) => {
    handleSendChat(values?.value)
  }

  return (
    <>
      <div>
        {chatList.map((chat, index) => {
          return (
            <Card key={index}>
              <Card.Header>回答：</Card.Header>
              <Card.Body>{(chat as any)?.text}</Card.Body>
            </Card>
          )
        })}
      </div>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name='value' rules={[{ required: true, message: '请输入聊天内容' }]}>
          <Input.TextArea
            rows={3}
            autoSize
            maxLength={140}
            showWordLimit
            style={{ border: '1px solid #ccc' }}
          />
        </Form.Item>
        <Form.Item>
          <Button round nativeType='submit' type='primary' loading={loading} block>
            发送聊天信息
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default Chat
