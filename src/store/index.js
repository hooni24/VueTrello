/** vuex를 사용해 상태를 관리하자 */

import Vue from 'vue';
import Vuex from 'vuex'
import state from './state'
import getters from './getter'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

// 자동로그인 기능
const { token } = localStorage
store.commit('LOGIN', token)

export default store