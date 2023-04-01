/*
 * @Author: Lee
 * @Date: 2023-03-25 23:37:44
 * @LastEditTime: 2023-04-01 17:31:29
 * @LastEditors: Lee
 */

import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { Tabbar } from 'react-vant/lib/tabbar'
import { HomeO, Search } from '@react-vant/icons'

const Menu = () => {
  return (
    <div className='demo-tabbar'>
      <Tabbar fixed={true}>
        <Tabbar.Item icon={<HomeO />}>
          <Link to={'/'}>首页</Link>
        </Tabbar.Item>
        <Tabbar.Item icon={<Search />}>
          <Link to={'/chat'}>ChatGpt</Link>
        </Tabbar.Item>
        <Tabbar.Item icon={<Search />}>
          <Link to={'/user-center'}>个人中心</Link>
        </Tabbar.Item>
      </Tabbar>
    </div>
  )
}

export default memo(Menu)
