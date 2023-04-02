/*
 * @Author: Lee
 * @Date: 2023-04-02 10:53:47
 * @LastEditTime: 2023-04-02 12:28:35
 * @LastEditors: Lee
 */

import React, { useState } from 'react'
import { Form, Input, Button, Toast, Image } from 'react-vant'
import sendRequest from 'src/lib/service/request'

type fromType = {
  value: string
}

const AiImage = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState<boolean>(false)
  const [imageList, setImageList] = useState<Array<any>>([])

  const handleCreateAiImage = (value: string) => {
    setLoading(true)
    sendRequest({
      url: '/createAiImage',
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
          const image = data.data
          setImageList((lists) => {
            return image.concat(lists)
          })
        } else {
          Toast.info('接口出错')
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const onFinish = (values: fromType) => {
    handleCreateAiImage(values.value)
  }

  return (
    <div>
      {imageList.length ? (
        <div style={{ height: '70vh', overflow: 'scroll' }}>
          {imageList.map((item, index) => {
            return (
              <div key={index}>
                <Image
                  width='100%'
                  src={item?.url}
                  alt='chatgpt ai create'
                  style={{ marginBottom: '15px' }}
                />
              </div>
            )
          })}
        </div>
      ) : null}

      <Form form={form} onFinish={onFinish}>
        <Form.Item name='value' rules={[{ required: true, message: '请输入图片描述信息' }]}>
          <Input.TextArea
            placeholder='请输入图片描述信息'
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
            创建图片
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AiImage
