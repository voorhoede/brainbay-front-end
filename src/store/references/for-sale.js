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
          askingPrice: 187500,
          askingPricePerSquareMeter: 1562,
          details: { rooms: 5, livingArea: 120, propertyArea: 183, yearOfConstruction: 1971 },
        },
        {
          guid: 'b',
          address: 'Galjoenstraat 54, Zaandam',
          match: 82,
          duration: 84,
          askingPrice: 187500,
          askingPricePerSquareMeter: 1562,
          details: { rooms: 5, livingArea: 120, propertyArea: 183, yearOfConstruction: 1971 },
        },
        {
          guid: 'c',
          address: 'Galjoenstraat 54, Zaandam',
          match: 82,
          duration: 84,
          askingPrice: 187500,
          askingPricePerSquareMeter: 1562,
          details: { rooms: 5, livingArea: 120, propertyArea: 183, yearOfConstruction: 1971 },
        },
      ]
    },
  },
}
