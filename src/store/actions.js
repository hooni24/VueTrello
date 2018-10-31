/** vuex 권장방식대로 action을 분리 */

import {board, auth, card} from '../api'

const actions = {
  LOGIN({commit}, {email, password}) {
    return auth.login(email, password)
      .then(({accessToken}) => commit('LOGIN', accessToken))
  },
  ADD_BOARD (_, {title}) {
    return board.create(title).then(res => res.item)
  },
  FETCH_BOARDS({commit}) {
    return board.fetch()
      .then(res => {
        commit('SET_BOARDS', res.list)
      })
  },
  FETCH_BOARD({commit}, {id}) {
    return board.fetch(id)
      .then(res => {
        commit('SET_BOARD', res.item)
      })
  },
  ADD_CARD(ctx, {title, listId, pos}) {
    return card.create(title, listId, pos)
      .then(()=>{
        ctx.dispatch('FETCH_BOARD', {id: ctx.state.board.id})
      })
  }
}

export default actions