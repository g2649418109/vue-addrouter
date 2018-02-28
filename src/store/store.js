import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    oneRouter: []
  },
  mutations: {
    add (state, n) {
      state.count += n
    },
    reduce (state, n) {
      state.count -= n
    },
    getRouter (state, addroutes) {
      state.oneRouter = addroutes
    }
  },
  actions: {
    haha (context, addroutes) {
      context.commit('getRouter', addroutes)
    }
  }
})
