
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({


  state: {
      count1: 0,
      count2: 0,
  },

  getters: {
  },

  mutations: {

    addcount1: function(state) {
      return state.count1++
    },

    addcount2: function(state) {
      return state.count2++
  },


  },

  actions: {
  },
  modules: {
  }
})
