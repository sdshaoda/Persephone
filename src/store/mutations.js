import * as types from './mutation-types'

export default {
  [types.SET_USER_PROFILE](state, userProfile) {
    state.userProfile = userProfile
  },
  [types.SET_ACCOUNT](state, account) {
    state.account = account
  },
  [types.SET_ASSET](state, asset) {
    state.asset = asset
  },
  [types.SET_RECORD_TYPE](state, recordType) {
    state.recordType = recordType
  },
  [types.SET_RECORD](state, record) {
    state.record = record
  },
}
