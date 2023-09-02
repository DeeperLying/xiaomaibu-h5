/*
 * @Author: Lee
 * @Date: 2023-03-05 00:19:04
 * @LastEditTime: 2023-09-02 16:37:38
 * @LastEditors: Lee
 */

import React, { useState } from 'react'
import { Form, Input, Button, Toast, Card } from 'react-vant'
import { fetchGetChat } from 'src/https/home/home'

type fromType = {
  value: string
}

const Chat = () => {
  const [form] = Form.useForm()

  const [loading, setLoading] = useState<boolean>(false)
  const [chatList, setChatList] = useState<string[]>([])

  const handleSendChat = (value: string) => {
    setLoading(true)
    fetchGetChat(value)
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
          <Button
            round
            nativeType='submit'
            type='primary'
            loading={loading}
            disabled={loading}
            block
          >
            发送聊天信息
          </Button>
        </Form.Item>
      </Form>

      <div style={{ width: '170px' }}>
        希望给你带来快乐的同时,也别忘记了ChatGpt是收费💰的😭.希望收到你的打赏。
        <img width='200px' height='auto' src={require('../../static/WechatIMG91.jpeg')} />
      </div>
    </>
  )
}

export default Chat
