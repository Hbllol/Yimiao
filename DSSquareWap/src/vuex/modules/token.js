//  用户token
export const USERS_TOKEN = 'USERS_TOKEN'
export default {
  state: {
    mobile: '',
    token: ''
  },
  actions: {
    addToken ({ commit }, loginInfo) {
      commit(USERS_TOKEN, loginInfo)
    }
  },
  mutations: {
    [USERS_TOKEN] (state, loginInfo) {
      state.token = loginInfo.token || ''
      state.mobile = loginInfo.mobile || ''
      localStorage.setItem('m2_name', state.mobile)
      localStorage.setItem('m2_token', state.token)
      // console.log(localStorage.getItem('m2_token'))
    }
  },
  getters: {
    getMsg (state) {
      return state.msg
    },
    getUserName (state) {
      return state.mobile
    },
    getToken (state) {
      return state.token
    }
  }
}
