import serviceAxios from 'src/lib/http/http'

/*
 * @Author: Lee
 * @Date: 2023-06-22 13:00:08
 * @LastEditTime: 2023-09-03 01:00:14
 * @LastEditors: Lee
 */
const serviceGetGoodsList = () => {
  return serviceAxios('/getGoodsList', {
    method: 'get'
  })
}

const fetchCreateAiImage = (value: any) => {
  return serviceAxios('/createAiImage?value=' + value, {
    method: 'GET'
  })
}

const fetchComeHerePay = () => {
  return serviceAxios('/comeHerePay', {
    method: 'POST',
    body: JSON.stringify({
      b: 1,
      a: 2
    })
  })
}

const fetchGetComeHerePay = (id: any) => {
  return serviceAxios('/comeHerePay?id=' + id, {
    method: 'Get'
  })
}

const fetchGetChat = (value: any) => {
  return serviceAxios('/chat?value=' + value, {
    method: 'GET'
  })
}

const fetchCreateGoods = (data: any) => {
  return serviceAxios('/createGoods', {
    method: 'POST',
    body: JSON.stringify(data)
  })
}

const fetchGetGoodsList = () => {
  return serviceAxios('/getGoodsList', {
    method: 'get'
  })
}

const fetchGetWxUserAuthInfo = (code: any) => {
  return serviceAxios('/getWxUserAuthInfo?code=' + code, {
    method: 'GET'
  })
}

const fetchPostLogin = (values: any) => {
  return serviceAxios('/login', {
    method: 'POST',
    body: JSON.stringify({ ...values })
  })
}

const fetchPostLoginPhone = (values: any) => {
  return serviceAxios('/login/phone', {
    method: 'POST',
    body: JSON.stringify({ ...values })
  })
}

const fetchGetSendEmail = (email: any) => {
  return serviceAxios('/sendEmail?email=' + email, {
    method: 'get'
  })
}

const fetchGetOrderList = () => {
  return serviceAxios('/getOrderList', {
    method: 'get'
  })
}

const fetchWxRequest = () => {
  return serviceAxios('wxRequest', {
    method: 'GET'
    // params: {
    //   signature: '随便',
    //   timestamp: '2e434234234',
    //   nonce: '34234234df',
    //   echostr: '999993242323'
    // }
  })
}

const fetchRegister = (data: any) => {
  return serviceAxios('/register', {
    method: 'post',
    body: JSON.stringify(data)
  })
}

const fetchRegisterPhone = (data: any) => {
  return serviceAxios('/register/phone', {
    body: JSON.stringify(data),
    method: 'post'
  })
}

export {
  serviceGetGoodsList,
  fetchCreateAiImage,
  fetchComeHerePay,
  fetchGetChat,
  fetchCreateGoods,
  fetchGetGoodsList,
  fetchGetComeHerePay,
  fetchGetWxUserAuthInfo,
  fetchPostLogin,
  fetchPostLoginPhone,
  fetchGetSendEmail,
  fetchGetOrderList,
  fetchWxRequest,
  fetchRegister,
  fetchRegisterPhone
}
