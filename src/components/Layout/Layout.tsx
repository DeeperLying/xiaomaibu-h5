/*
 * @Author: Lee
 * @Date: 2023-03-25 23:41:37
 * @LastEditTime: 2023-03-26 02:02:26
 * @LastEditors: Lee
 */
import React, { JSXElementConstructor, ReactElement } from 'react'
import Menu from 'src/components/Menu/Menu'

type propsType = ReactElement<any, string | JSXElementConstructor<any>> | null

const Layout = (props: { children: propsType }) => {
  const { children } = props
  return (
    <div>
      {children}
      <Menu />
    </div>
  )
}

export default Layout
