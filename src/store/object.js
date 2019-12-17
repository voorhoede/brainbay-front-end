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
  getters: {
    currentAddress ({ currentObject }) {
      if (currentObject?.ObjectDetails?.Adres === undefined) return ''

      const address = Object.values(currentObject.ObjectDetails.Adres)[0]
      return `${address.Straatnaam} ${address.Huisnummer}, ${address.Postcode} ${address.Woonplaats}`
    },
    objectType ({ currentObject }) {
      if (currentObject?.Wonen?.Woonhuis === undefined) return ''

      const { SoortWoning = '', TypeWoning = '' } = currentObject.Wonen.Woonhuis
      return [SoortWoning, TypeWoning]
        .filter(x => x)
        .join(', ')
    },
    objectDetails ({ currentObject }) {
      const bouwjaar = currentObject?.Wonen?.WonenDetails?.Bouwjaar?.JaarOmschrijving?.[0]?.Jaar
      const koopsom = currentObject?.ObjectDetails?.Koop?.Koopprijs
      return { bouwjaar, koopsom }
    },
  },
}
