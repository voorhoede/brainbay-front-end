import Vue from 'vue'

export default {
  namespaced: true,
  state: {},
  mutations: {
    store (state, payload) {
      Object.entries(payload).forEach(([key, value]) => {
        Vue.set(state, key, value)
      })
    },
  },
  getters: {
    streetName ({ streetName = '', houseNumber = '' }) {
      return `${streetName} ${houseNumber}`.trim()
    },
    address ({ address = '' }) {
      return address
    },
    type ({ woningType = '' }) {
      return woningType
    },
    details ({
      rooms = '',
      livingArea = '',
      propertyArea = '',
      yearOfConstruction = '',
      purchasePrice = '',
      transactionDate = '',
    }) {
      return {
        rooms,
        livingArea,
        propertyArea,
        yearOfConstruction,
        purchasePrice,
        transactionDate,
      }
    },
  },
}
