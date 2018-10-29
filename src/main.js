import Vue from 'vue'
import App from './App.vue'

const Login = { template: '<div>Login Page</div>' }

const routes = {
  '/': App,
  '/login': Login
}

new Vue({
  el: '#app',
  computed: {
    Vuecomponent() {
      return routes[window.location.pathname] || 
      { template: '<div>Page not found</div>' }
    }
  },
  render(h) {
    return h(this.Vuecomponent)
  }
})
