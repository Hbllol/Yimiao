import axios from '@/http.js'
import router from '@/router'
import * as token from './token'
//  用户token
export const SIGN_OUT = 'SIGN_OUT'
export default {
  state: {
    mobile: '',
    token: ''
  },
  actions: {
    signOut ({ commit }, userInfo) {
      // commit(SIGN_OUT, '')

      axios({
        method: 'post',
        url: '/api/login/signOut'
      })
        .then((response) => {
          if (response.data.Code === 2000) {
            commit(token.USERS_TOKEN, {'mobile': userInfo.mobile, 'token': ''})
            router.replace({
              path: '/index'
            })
          } else {
            this.$message({
              message: response.data.Msg,
              type: 'error'
            })
          }
        })
        .catch((reject) => {
          console.log(reject)
        })
    }
  },
  mutations: {
    [SIGN_OUT] (state) {
      state.token = ''
      window.localStorage.removeItem('m2_token')
    }
  }

}
