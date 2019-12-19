import Vue from 'vue'
import Vuex from 'vuex'
import object from './object'
import references from './references'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    object,
    references,
  },
})
