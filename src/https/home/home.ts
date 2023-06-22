import serviceAxios from 'src/lib/http/http'

/*
 * @Author: Lee
 * @Date: 2023-06-22 13:00:08
 * @LastEditTime: 2023-06-22 13:03:23
 * @LastEditors: Lee
 */
const serviceGetGoodsList = () => {
  return serviceAxios({
    url: '/getGoodsList',
    method: 'get'
  })
}

export { serviceGetGoodsList }
