/** vuex 권장방식대로 action을 분리 */

import {board, auth} from '../api'

const actions = {
  ADD_BOARD (_, {title}) {
    return board.create(title)
  },
  FETCH_BOARDS({commit}) {
    return board.fetch()
      .then(res => {
        commit('SET_BOARDS', res.list)
      })
  },
  LOGIN({commit}, {email, password}) {
    return auth.login(email, password)
      .then(({accessToken}) => commit('LOGIN', accessToken))
  }
}

export default actions