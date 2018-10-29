import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import NotFound from '../components/NotFound'
import Board from '../components/Board'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',  // history API를 사용하겠다. (hashbang대신)
  routes: [
    { path: '/', component: Home},
    { path: '/login', component: Login},
    { path: '/b/:bid', component: Board}, // :bid를 통해 해당부분을 변수로 받을 수 있다

    // router는 선언 순서대로 매핑하기 때문에 이부분은 최종적으로 위에서 매핑하지 못한 경로가 매핑됨
    { path: '*', component: NotFound}
  ]
})

export default router