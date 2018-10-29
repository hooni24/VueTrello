import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = { template: '<div>Login Page</div>' }
const NotFound = { template: '<div>Page not found</div>' }

const router = new VueRouter({
  mode: 'history',  // history API를 사용하겠다. (hashbang대신)
  routes: [
    { path: '/', component: App},
    { path: '/login', component: Login},

    // router는 선언 순서대로 매핑하기 때문에 이부분은 최종적으로 위에서 매핑하지 못한 경로가 매핑됨
    { path: '*', component: NotFound}
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h({ template: '<router-view></router-view>' })
})
