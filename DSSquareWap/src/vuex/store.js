import vue from 'vue'
import vuex from 'vuex'
import token from './modules/token'
import login from './modules/login'
import seach from './modules/seach'
import loading from './modules/loading'
import sysFinal from './modules/sysFinal'

vue.use(vuex)

export default new vuex.Store({
  modules: {
    token: token,
    login: login,
    seach: seach,
    loading: loading,
    sysFinal: sysFinal
  }
})
