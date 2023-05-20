/*
 * @Author: Lee
 * @Date: 2023-03-26 00:56:22
 * @LastEditTime: 2023-05-20 14:47:01
 * @LastEditors: Lee
 */

import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Empty, Image, ProductCard } from 'react-vant'
import sendRequest from 'src/lib/service/request'

import styles from './userCenter.module.scss'

const ALIPAY_STATUS_LIST: { [key: string]: any } = {
  WAIT_BUYER_PAY: '交易创建，等待买家付款',
  TRADE_CLOSED: '未付款交易超时关闭，或支付完成后全额退款',
  TRADE_SUCCESS: '交易支付成功',
  TRADE_FINISHED: '交易结束，不可退款'
}

const UserCenter = () => {
  const [userInfo, setUserInfo] = useState<{ [key: string]: any }>({})
  const [orderList, setOrderList] = useState<Array<any>>([])

  useEffect(() => {
    sendRequest({
      url: '/getOrderList',
      method: 'get'
    }).then(({ data }: any) => {
      setOrderList(data?.orderList)
    })
  }, [])

  useEffect(() => {
    const userInfo = Cookies.get('userInfo')
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

      <div>用户订单状态</div>

      <section>
        <div>
          {orderList?.map((goods) => {
            return (
              <div key={goods.id}>
                <ProductCard
                  tag={ALIPAY_STATUS_LIST[goods.order_status]}
                  price={goods.sale}
                  desc={goods.goods_desc}
                  title={goods.goods_title}
                  thumb={goods.goods_image}
                />
              </div>
            )
          })}

          {!orderList && <Empty description='快去购买吧....' />}
        </div>
      </section>
    </main>
  )
}

export default UserCenter
