/** vuex 권장방식대로 mutation을 분리 */

import { setAuthInHeader } from '../api'
  
const mutations = {
  SET_IS_ADD_BOARD (state, toggle) {
    state.isAddBoard = toggle
  },
  SET_BOARDS (state, boards) {
    state.boards = boards
  },
  SET_BOARD (state, item) {
    state.board = item
  },
  SET_CARD (state, card) {
    state.card = card
  },
  SET_THEME (state, color) {
    state.bodyColor = color || '#FFFFFF'
    state.navbarColor = color ? 'rgba(0,0,0,.15)' : '#026AA7'
  },
  LOGIN (state, token) {
    if(!token) { return }
    state.token = token
    localStorage.setItem('token', token)
    setAuthInHeader(token)
  },
  LOGOUT (state) {
    state.token = null
    delete localStorage.token
    setAuthInHeader(null)
  }
}


export default mutations