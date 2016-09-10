const Vue = require('vue')
const Router = require('vue-router')

const App = require('./App.vue')
const routes = require('./router')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

new Vue({ // eslint-disable-line no-new
  router,
  el: '#app',
  render: h => h(App)
})
