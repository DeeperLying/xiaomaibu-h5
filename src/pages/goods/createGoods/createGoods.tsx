/*
 * @Author: Lee
 * @Date: 2023-05-07 11:33:14
 * @LastEditTime: 2023-05-07 16:38:01
 * @LastEditors: Lee
 */

import React, { useEffect, useState } from 'react'
import { Button, ProductCard } from 'react-vant'
import sendRequest from 'src/lib/service/request'

const CreateGoods = () => {
  const [goodsList, setGoodsList] = useState<Array<any>>([])

  useEffect(() => {
    sendRequest({
      url: '/getGoodsList',
      method: 'get'
    }).then(({ data }: any) => {
      console.log(data)
      setGoodsList(data?.goodsList)
    })
  }, [])

  const handleCreateGoods = () => {
    sendRequest({
      url: '/createGoods',
      method: 'POST',
      data: {
        goods_title: '邻家小妹衣服',
        goods_image:
          'https://gw.alicdn.com/bao/uploaded/i1/188188681/O1CN01PIheGl2Dzx3dnz8og_!!188188681.jpg_300x300q90.jpg_.webp',
        sex: 0,
        size: 'XXXL',
        goods_desc: '深顶大头围棒球帽女2023新款显脸小加大宽帽檐鸭舌帽子夏季防晒帽',
        sale: 98.99
      }
    })
  }

  const handleBuyGoods = (id: number) => {
    sendRequest({
      url: '/comeHerePay',
      method: 'Get',
      params: {
        id
      }
    }).then((resolve: any) => {
      console.log(resolve)
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
      <div>
        {goodsList.map((goods) => {
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
      </div>
      <Button type='primary' onClick={handleCreateGoods}>
        创建商品
      </Button>
    </div>
  )
}

export default CreateGoods
