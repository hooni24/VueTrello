/** backend API를 호출하는 역할.. /api/index.js 
 * axios같은 써드파티 라이브러리를 사용할때는 이런식으로 래핑해서 쓰는게 좋다.
 *  향후 다른 라이브러리로 갈아타거나 하는 경우 대비..
 * */

import axios from 'axios'
import router from '../router'

const DOMAIN = 'http://localhost:3000'
const UNAUTHORIZED = 401
const onUnautorized = () => {
  router.push('/login')
}

const request = ({method = "GET", url, data}) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
  })
  .then(res => result.data)
  .catch(err => {
    const {status} = err.response // http status 를 가져옴
    if(status === UNAUTHORIZED) return onUnautorized()
    throw Error(err)
  })
}

export const board = {
  fetch() {
    return request({
      url: "/boards"
    })
  }
}