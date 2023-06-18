/*
 * @Author: Lee
 * @Date: 2023-06-18 11:45:46
 * @LastEditTime: 2023-06-18 12:19:21
 * @LastEditors: Lee
 */
import Cookies from 'js-cookie'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-vant'

const Head = () => {
  const accounToken = Cookies.get('token')
  const navigate = useNavigate()
  return (
    <>
      {accounToken ? (
        <div>以登录...</div>
      ) : (
        <div style={{ textAlign: 'left' }}>
          <Button type='primary' onClick={() => navigate('/login')}>
            登录
          </Button>
          <Button onClick={() => navigate('/register')}>注册</Button>
        </div>
      )}
    </>
  )
}

export default Head
