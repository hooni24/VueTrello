/** vuex를 사용해 상태를 관리하자 */

import Vue from 'vue';
import Vuex from 'vuex'
import * as api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isAddBoard: false,
    boards: []
  },
  mutations: {
    SET_IS_ADD_BOARD (state, toggle) {
      state.isAddBoard = toggle
    },
    SET_BOARDS (state, boards) {
      state.boards = boards
    }
  },
  actions: {
    ADD_BOARD (_, {title}) {
      return api.board.create(title)
    },
    FETCH_BOARDS({commit}) {
      return api.board.fetch()
        .then(res => {
          commit('SET_BOARDS', res.list)
        })
    }
  }
})

export default store