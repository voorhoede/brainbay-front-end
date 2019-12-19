export default {
  namespaced: true,
  state: {},
  mutations: {
    store (state, payload) {
      // state.currentObject = Object.freeze(payload)
    },
  },
  getters: {
    added () {
      return [
        {
          guid: 'a',
          address: 'Galjoenstraat 54, Zaandam',
          match: 82,
          duration: 84,
          soldPrice: 187500,
          soldPricePerSquareMeter: 1562,
          purchasePrice: 180000,
          purchasePricePerSquareMeter: 1500,
          details: { rooms: 5, livingArea: 120, propertyArea: 183, yearOfConstruction: 1971 },
        },
        {
          guid: 'b',
          address: 'Galjoenstraat 54, Zaandam',
          match: 82,
          duration: 84,
          soldPrice: 187500,
          soldPricePerSquareMeter: 1562,
          purchasePrice: 180000,
          purchasePricePerSquareMeter: 1500,
          details: { rooms: 5, livingArea: 120, propertyArea: 183, yearOfConstruction: 1971 },
        },
        {
          guid: 'c',
          address: 'Galjoenstraat 54, Zaandam',
          match: 82,
          duration: 84,
          soldPrice: 187500,
          soldPricePerSquareMeter: 1562,
          purchasePrice: 180000,
          purchasePricePerSquareMeter: 1500,
          details: { rooms: 5, livingArea: 120, propertyArea: 183, yearOfConstruction: 1971 },
        },
      ]
    },
  },
}
