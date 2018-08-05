import Vue from 'vue'
import Mint from 'mint-ui'
import App from './App'
import router from './router'

import 'mint-ui/lib/style.css'

Vue.use(Mint)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
