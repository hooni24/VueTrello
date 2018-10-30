/** vuex 권장방식대로 getter를 분리 */

const getters = {
  isAuth (state) {
    return !!state.token
  }
}

export default getters