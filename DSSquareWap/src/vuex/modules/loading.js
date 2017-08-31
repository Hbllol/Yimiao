//  用户token
export const ROOM_LIST_LOADING = 'ROOM_LIST_LOADING'
export const MUEN_ACTIVE_NAME = 'MUEN_ACTIVE_NAME'
export default {
  state: {
    roomListLoading: false,
    activeName: 'index'
  },
  actions: {
    addLoading ({ commit }, status) {
      commit(ROOM_LIST_LOADING, status)
    },
    addMuenActive ({ commit }, activeName) {
      commit(MUEN_ACTIVE_NAME, activeName)
    }
  },
  mutations: {
    [ROOM_LIST_LOADING] (state, status) {
      state.roomListLoading = status || false
    },
    [MUEN_ACTIVE_NAME] (state, activeName) {
      state.activeName = activeName || 'index'
      window.sessionStorage.setItem('activeName', state.activeName)
    }
  },
  getters: {
    getLoading: function (state) {
      return state.roomListLoading
    },
    getActiveName: function (state) {
      return state.activeName
    }
  }
}
