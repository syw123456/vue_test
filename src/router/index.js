import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import LockScreen from '@/pages/LockScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      components: {
        blank: Login
      }
    },
    {
      path: '/lockscreen',
      name: 'LockScreen',
      components: {
        blank: LockScreen
      }
    }
  ]
})
