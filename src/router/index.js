import Vue from 'vue'
import Router from 'vue-router'

import Asset from 'components/asset/asset'
import Record from 'components/record/record'
import Analyse from 'components/analyse/analyse'
import Me from 'components/me/me'
import AddAsset from 'components/add-asset/add-asset'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/asset'
    },
    {
      path: '/asset',
      component: Asset,
      children: [
        {
          path: 'add',
          component: AddAsset
        }
      ]
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
