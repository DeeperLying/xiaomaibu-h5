/*
 * @Author: Lee
 * @Date: 2023-03-26 00:56:22
 * @LastEditTime: 2023-03-26 02:05:23
 * @LastEditors: Lee
 */

import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Image } from 'react-vant'

import styles from './userCenter.module.scss'

const UserCenter = () => {
  const [userInfo, setUserInfo] = useState<{ [key: string]: any }>({})
  useEffect(() => {
    const userInfo = Cookies.get('userInfo')
    console.log(userInfo)
    if (userInfo?.length) {
      setUserInfo(JSON.parse(userInfo))
    }
  }, [])
  return (
    <main className={styles.main}>
      {Object.keys(userInfo)?.length ? (
        <>
          <div>{userInfo.nickname}</div>
          <Image
            className={styles.main_avatar}
            width='100'
            height='100'
            src={userInfo.headimgurl}
          ></Image>
        </>
      ) : (
        '未登录....'
      )}
    </main>
  )
}

export default UserCenter
