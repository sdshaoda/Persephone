import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import mutations from './mutaions'
import * as actions from './actions'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const isDev = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: isDev,
  plugins: isDev ? [createLogger()] : []
})
