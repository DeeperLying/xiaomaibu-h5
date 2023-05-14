/*
 * @Author: Lee
 * @Date: 2023-05-07 11:33:14
 * @LastEditTime: 2023-05-14 12:12:04
 * @LastEditors: Lee
 */

import React, { useEffect, useState } from 'react'
import { ProductCard } from 'react-vant'
import sendRequest from 'src/lib/service/request'

const CreateGoods = () => {
  const [goodsList, setGoodsList] = useState<Array<any>>([])

  useEffect(() => {
    sendRequest({
      url: '/getGoodsList',
      method: 'get'
    }).then(({ data }: any) => {
      setGoodsList(data?.goodsList)
    })
  }, [])

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
    </div>
  )
}

export default CreateGoods
