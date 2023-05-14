/*
 * @Author: Lee
 * @Date: 2023-05-14 12:09:03
 * @LastEditTime: 2023-05-14 12:11:18
 * @LastEditors: Lee
 */
import React, { useState } from 'react'
import sendRequest from 'src/lib/service/request'
import { Button, Form, Input, Toast } from 'react-vant'

const Create = () => {
  const [form] = Form.useForm()
  const [createLoading, setCreateLoading] = useState<boolean>(false)

  const handleCreateGoods = (values: any) => {
    const data = values
    data.sex = Number(data.sex)
    setCreateLoading(true)

    sendRequest({
      url: '/createGoods',
      method: 'POST',
      data
    })
      .then(({ code }: any) => {
        if (code == 200) {
          Toast.success('创建成功')
        }
      })
      .finally(() => {
        setCreateLoading(false)
      })
    return false
  }

  return (
    <>
      <Form
        form={form}
        onFinish={handleCreateGoods}
        footer={
          <div style={{ margin: '16px 16px 0' }}>
            <Button round nativeType='submit' type='primary' loading={createLoading} block>
              创建商品
            </Button>
          </div>
        }
      >
        <Form.Item
          tooltip={{
            message: 'Fields required'
          }}
          rules={[{ required: true, message: '商品标题' }]}
          name='goods_title'
          label='商品标题'
        >
          <Input placeholder='商品标题' />
        </Form.Item>

        <Form.Item
          tooltip={{
            message: 'Fields required'
          }}
          rules={[{ required: true, message: '商品图片' }]}
          name='goods_image'
          label='商品图片'
        >
          <Input placeholder='商品图片' />
        </Form.Item>

        <Form.Item
          tooltip={{
            message: 'Fields required'
          }}
          rules={[{ required: true, message: '性别' }]}
          name='sex'
          label='性别'
        >
          <Input placeholder='性别' type='number' />
        </Form.Item>

        <Form.Item
          tooltip={{
            message: 'Fields required'
          }}
          rules={[{ required: true, message: '商品大小' }]}
          name='size'
          label='大小'
        >
          <Input placeholder='商品大小' />
        </Form.Item>

        <Form.Item
          tooltip={{
            message: 'Fields required'
          }}
          rules={[{ required: true, message: '商品详情' }]}
          name='goods_desc'
          label='商品详情'
        >
          <Input placeholder='商品详情' />
        </Form.Item>

        <Form.Item
          tooltip={{
            message: 'Fields required'
          }}
          rules={[{ required: true, message: '薪水' }]}
          name='sale'
          label='薪水'
        >
          <Input placeholder='薪水' />
        </Form.Item>
      </Form>
    </>
  )
}

export default Create
