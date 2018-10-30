import Vue from 'vue'
import router from './router' // index인 경우는 생략가능
import App from './App.vue'
import store from './store'

// Entrypoint에서는 root component를 렌더링한다
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
