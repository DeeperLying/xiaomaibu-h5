import serviceAxios from 'src/lib/http/http'

/*
 * @Author: Lee
 * @Date: 2023-06-22 13:00:08
 * @LastEditTime: 2023-09-02 17:29:54
 * @LastEditors: Lee
 */
const serviceGetGoodsList = () => {
  return serviceAxios({
    url: '/getGoodsList',
    method: 'get'
  })
}

const fetchCreateAiImage = (value: any) => {
  return serviceAxios({
    url: '/createAiImage',
    method: 'GET',
    params: {
      value
    }
  })
}

const fetchComeHerePay = () => {
  return serviceAxios({
    url: '/comeHerePay',
    method: 'POST',
    data: {
      b: 1,
      a: 2
    }
  })
}

const fetchGetComeHerePay = (id: any) => {
  return serviceAxios({
    url: '/comeHerePay',
    method: 'Get',
    params: {
      id
    }
  })
}

const fetchGetChat = (value: any) => {
  return serviceAxios({
    url: '/chat',
    method: 'GET',
    params: {
      value
    }
  })
}

const fetchCreateGoods = (data: any) => {
  return serviceAxios({
    url: '/createGoods',
    method: 'POST',
    data
  })
}

const fetchGetGoodsList = () => {
  return serviceAxios({
    url: '/getGoodsList',
    method: 'get'
  })
}

const fetchGetWxUserAuthInfo = (code: any) => {
  return serviceAxios({
    url: '/getWxUserAuthInfo',
    method: 'GET',
    params: { code }
  })
}

const fetchPostLogin = (values: any) => {
  return serviceAxios({
    url: 'login',
    method: 'POST',
    data: { ...values }
  })
}

const fetchPostLoginPhone = (values: any) => {
  return serviceAxios({
    url: 'login/phone',
    method: 'POST',
    data: { ...values }
  })
}

const fetchGetSendEmail = (email: any) => {
  return serviceAxios({
    url: 'sendEmail',
    params: { email },
    method: 'get'
  })
}

const fetchGetOrderList = () => {
  return serviceAxios({
    url: '/getOrderList',
    method: 'get'
  })
}

const fetchWxRequest = () => {
  return serviceAxios({
    url: 'wxRequest',
    method: 'GET',
    params: {
      signature: '随便',
      timestamp: '2e434234234',
      nonce: '34234234df',
      echostr: '999993242323'
    }
  })
}

const fetchRegister = (data: any) => {
  return serviceAxios({
    url: 'register',
    data,
    method: 'post'
  })
}

const fetchRegisterPhone = (data: any) => {
  return serviceAxios({
    url: '/register/phone',
    data,
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
