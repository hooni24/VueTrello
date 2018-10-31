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
  .then(res => res.data)
  .catch(err => {
    const {status} = err.response // http status 를 가져옴
    if(status === UNAUTHORIZED) onUnautorized()
    throw err.response
  })
}

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

export const board = {
  fetch(id) {
    return id ? request({url: `/boards/${id}`}) : request({url: "/boards"})
  },
  create(title) {
    return request({
      method: "POST",
      url: "/boards",
      data: { title }
    })
  }
}

export const auth = {
  login(email, password) {
    return request({
      method: "POST",
      url: "/login",
      data: {email, password}
    })
  }
}

export const card = {
  create(title, listId, pos) {
    return request({
      method: 'POST',
      url: '/cards',
      data: {
        title, 
        listId, 
        pos
      }
    })
  },
  fetch(id) {
    return request({
      url: `/cards/${id}`
    })
  },
  update(id, payload) {
    return request({
      method: 'PUT',
      url: `/cards/${id}`,
      data: payload
    })
  }
}