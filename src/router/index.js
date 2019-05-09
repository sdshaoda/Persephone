import Vue from 'vue'
import Router from 'vue-router'

import Asset from 'components/asset/asset'
import Record from 'components/record/record'
import Analyse from 'components/analyse/analyse'
import Me from 'components/me/me'

import AddAsset from 'components/add-asset/add-asset'
import EditAsset from 'components/edit-asset/edit-asset'
import AssertDetail from 'components/asset-detail/asset-detail'

import AddRecord from 'components/add-record/add-record'
import RecordDetail from 'components/record-detail/record-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/asset',
      component: Asset,
      children: [
        {
          path: 'add',
          component: AddAsset
        },
        {
          path: 'edit/:id',
          component: EditAsset
        },
        {
          path: 'detail/:id',
          component: AssertDetail
        }
      ]
    },
    {
      path: '/record',
      component: Record,
      children: [
        {
          path: 'add',
          component: AddRecord
        },
        {
          path: 'detail/:id',
          component: RecordDetail
        }
      ]
    },
    {
      path: '/analyse',
      component: Analyse
    },
    {
      path: '/me',
      component: Me
    },
    {
      path: '/(.*?)',
      redirect: '/asset'
    }
  ]
})
