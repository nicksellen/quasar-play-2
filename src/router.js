import Vue from 'vue'
import VueRouter from 'vue-router'

import MainLayout from 'components/MainLayout'

import Error404 from 'components/Error404'
import Index from 'components/Index'
import Hello from 'components/Hello'
import Protected from 'components/Protected'
import Login from 'components/Login'

import auth from 'services/auth'

Vue.use(VueRouter)

// global components
Vue.component('main-layout', MainLayout)

/*
Is this needed to do some live reload stuff?
function load (component) {
  return () => System.import(`components/${component}.vue`)
}
*/

const protectRoute = (to, from, next) => {
  if (auth.state.authenticated) {
    next()
  }
  else {
    auth.state.to = to
    next({ name: 'login' })
  }
}

const redirectIfLoggedIn = (to, from, next) => {
  if (auth.state.authenticated) {
    next({ name: 'index' })
  }
  else {
    next()
  }
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/protected',
      name: 'protected',
      component: Protected,
      beforeEnter: protectRoute
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: redirectIfLoggedIn
    },
    {
      path: '*',
      component: Error404
    }
  ]
})
