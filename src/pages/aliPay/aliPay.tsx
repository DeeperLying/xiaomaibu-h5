/*
 * @Author: Lee
 * @Date: 2023-04-05 11:53:59
 * @LastEditTime: 2023-04-05 16:40:43
 * @LastEditors: Lee
 */

import React, { useEffect, useState } from 'react'
import { Button } from 'react-vant'
import sendRequest from 'src/lib/service/request'

const AliPay = () => {
  const [fromString] = useState<string | null>(null)

  useEffect(() => {
    document.forms[0]?.submit()
  }, [fromString])

  const handlePay = () => {
    sendRequest({
      url: '/comeHerePay',
      method: 'POST',
      data: {
        b: 1,
        a: 2
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
      aliPay
      <Button type='info' onClick={handlePay}>
        购买商品(把我带走吧主人)
      </Button>
      {/*  */}
      {fromString && <div dangerouslySetInnerHTML={{ __html: fromString }}></div>}
    </div>
  )
}

export default AliPay
