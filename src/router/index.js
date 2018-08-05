import Vue from 'vue'
import Router from 'vue-router'

import Asset from 'components/asset/asset'
import Record from 'components/record/record'
import Analyse from 'components/analyse/analyse'
import Me from 'components/me/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/record'
    },
    {
      path: '/asset',
      component: Asset
    },
    {
      path: '/record',
      component: Record
    },
    {
      path: '/analyse',
      component: Analyse
    },
    {
      path: '/me',
      component: Me
    }
  ]
})
