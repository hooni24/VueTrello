import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import NotFound from '../components/NotFound'
import Board from '../components/Board'
import Card from '../components/Card'
import store from '../store'

Vue.use(VueRouter)

// to: 현재경로
const requireAuth = (to, from, next) => {
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  store.getters.isAuth ? next() : next(loginPath)
}

const router = new VueRouter({
  mode: 'history',  // history API를 사용하겠다. (hashbang대신)
  routes: [
    { path: '/', component: Home, beforeEnter: requireAuth },
    { path: '/login', component: Login},

    // :bid를 통해 해당부분을 변수로 받을 수 있다
    { path: '/b/:bid', component: Board, beforeEnter: requireAuth, children: [ 
      // children을 사용해 중첩라우팅 구현
      { path: 'c/:cid', component: Card, beforeEnter: requireAuth }
    ] },

    // router는 선언 순서대로 매핑하기 때문에 이부분은 최종적으로 위에서 매핑하지 못한 경로가 매핑됨
    { path: '*', component: NotFound}
  ]
})

export default router