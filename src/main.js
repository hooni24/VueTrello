import Vue from 'vue'
import router from './router' // index인 경우는 생략가능
import App from './App.vue'

// Entrypoint에서는 root component를 렌더링한다
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
