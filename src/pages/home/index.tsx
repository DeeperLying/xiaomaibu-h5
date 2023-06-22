/*
 * @Author: Lee
 * @Date: 2023-03-26 02:12:57
 * @LastEditTime: 2023-06-22 13:02:51
 * @LastEditors: Lee
 */
import React, { useEffect, useState } from 'react'
import { Button, ProductCard, Empty } from 'react-vant'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

import sendRequest from 'src/lib/service/request'
import { serviceGetGoodsList } from 'src/https/home/home'

// import wx from 'weixin-js-sdk'
import { getEnvironment, getQueryParams } from 'src/utils/public'
import { getWxUserAuthCode } from 'src/utils/wx_auth'

import styles from './index.module.scss'

const Home = () => {
  const querys = useLocation()

  const [isWeChat, setIsWeChat] = useState<boolean>(false)
  const [goodsList, setGoodsList] = useState<Array<any>>([])

  useEffect(() => {
    serviceGetGoodsList().then(({ data }: any) => {
      setGoodsList(data?.goodsList)
    })
  }, [])

  useEffect(() => {
    if (!getEnvironment()) {
      return
    }

    const params = getQueryParams(querys?.search)
    if (params?.code) {
      return
    }

    setIsWeChat(true)
  }, [querys?.search])

  const handleBuyGoods = (id: number) => {
    sendRequest({
      url: '/comeHerePay',
      method: 'Get',
      params: {
        id
      }
    }).then((resolve: any) => {
      // setFromString(resolve.data)
      if (resolve.code === 200) {
        const divForm = document.getElementsByTagName('divform')
        if (divForm.length) {
          document.body.removeChild(divForm[0])
        }
        const div = document.createElement('divform')
        div.innerHTML = resolve.data
        document.body.appendChild(div)
        // document.forms[0].setAttribute('target', '_blank')
        document.forms[0].submit()
      }
    })
  }

  return (
    <div>
      <div className={styles.home_number}>
        <Link to={'/create'}>创建商品</Link>
      </div>
      {isWeChat && (
        <Button type='info' onClick={getWxUserAuthCode}>
          Login
        </Button>
      )}

      <div>
        {goodsList?.map((goods) => {
          return (
            <div key={goods.id}>
              <ProductCard
                price={goods.sale}
                desc={goods.goods_desc}
                title={goods.goods_title}
                thumb={goods.goods_image}
                onClick={() => handleBuyGoods(goods.id)}
              />
            </div>
          )
        })}

        {!goodsList && <Empty description='还没有商品....' />}
      </div>
    </div>
  )
}

export default Home
