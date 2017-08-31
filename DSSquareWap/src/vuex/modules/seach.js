export const SEACH_VAL = 'SEACH_VAL'
export default {
  state: {
    seachVal: ''
  },
  actions: {
    addSeach ({ commit }, seachVal) {
      commit(SEACH_VAL, seachVal)
    }
  },
  mutations: {
    [SEACH_VAL] (state, seachVal) {
      state.seachVal = seachVal || ''
    }
  },
  getters: {
    getSeach (state) {
      return state.seachVal
    }
  }
}
