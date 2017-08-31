import axios from '@/http.js'
import router from '@/router'
// import * as token from './token'
//  用户token
export const SYS_FINAL_DATA = 'SYS_FINAL_DATA'
export default {
  state: {
    serviceItem: 0,
    coopertionOwner: 0,
    enterprises: 0,
    operateArea: 0,
    entrustAgent: 0,
    tobeOwner: 0,
    isShow: false
  },
  actions: {
    getHomeData ({ commit }) {
      axios({
        method: 'post',
        url: '/api/Home/Data'
      })
      .then((response) => {
        if (response.data.Code === 2000) {
          commit(SYS_FINAL_DATA, response.data.Data)
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
    [SYS_FINAL_DATA] (state, data) {
      state.serviceItem = data.ServiceItem
      state.coopertionOwner = data.CoopertionOwner
      state.enterprises = data.Enterprises
      state.operateArea = data.OperateArea
      state.entrustAgent = data.EntrustAgent
      state.tobeOwner = data.TobeOwner
      state.initType = data.initType
      state.isShow = true
    }
  },
  getters: {
    getFinalData (state) {
      return state
    }
  }

}
