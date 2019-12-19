export default {
  namespaced: true,
  state: {},
  mutations: {
    store (state, payload) {
      state.currentObject = Object.freeze(payload)
    },
  },
  getters: {
    priceDevelopment () {
      return 256400
    },
    priceModel () {
      return 257000
    },
    priceAlgorithm () {
      return 354000
    },
  },
}
