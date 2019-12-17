export default {
  namespaced: true,
  state: {
    currentObject: {},
  },
  mutations: {
    storeObject (state, payload) {
      state.currentObject = Object.freeze(payload)
    },
  },
}
