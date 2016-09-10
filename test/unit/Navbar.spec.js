import Vue from 'vue'
import VueRouter from 'vue-router'
import Navbar from '../../src/components/Navbar.vue'

import routes from '../../src/router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

describe('Navbar.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      router,
      el: document.createElement('div'),
      render: (h) => h(Navbar)
    })
    expect(vm.$el.querySelectorAll('.Navbar li').length).toBe(3)
  })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
