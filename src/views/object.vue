<template>
  <main class="view--object">
    <router-view></router-view>

    <div />

    <Panel
      title="Woningdetails"
      tag="article"
      :divider="false"
      full-bleed>

      <AddNoteButton slot="action" @click="onAddNote('object-details')"/>

      <ObjectDetails>
        <address slot="header">{{ address }}</address>
        <p slot="header">{{ type }}</p>
        <dl>
          <dt>Aantal kamers</dt>
          <dd>{{ details.rooms }}</dd>
          <dt>Woonoppervlakte</dt>
          <dd>{{ details.livingArea }}m2</dd>
          <dt>Perceeloppervlakte</dt>
          <dd>{{ details.propertyArea }}m2</dd>
          <dt>Bouwjaar</dt>
          <dd>{{ details.yearOfConstruction }}</dd>
          <dt>Koopsom</dt>
          <dd>{{ details.purchasePrice }} k.k.</dd>
          <dt>Transactiedatum</dt>
          <dd>{{ details.transactionDate }}</dd>
        </dl>
        <span slot="footer">Let op: belast met erfpacht</span>
      </ObjectDetails>
    </Panel>

    <Panel title="Indicatie marktwaarde">
      <AddNoteButton slot="action" @click="onAddNote('indication-market-value')"/>
      <SideBySide grow="0" basis="25%" justify-content="space-around">
        <Stack tag="section" align-center>
          <h3 class="sr-only">Prijs ontwikkeling</h3>
          <Icon><IconProjectedChart /></Icon>
          <p>&euro;{{ priceDevelopment }}</p>
          <p>Op basis van prijsontwikkeling sinds laatste keer verkocht</p>
        </stack>
        <Stack tag="section" align-center>
          <h3 class="sr-only">Modelmatigewaarde bepaling</h3>
          <Icon><IconHouses /></Icon>
          <p>&euro;{{ priceModel }}</p>
          <p>Op basis van modelmatige waardebepaling</p>
        </Stack>
        <Stack tag="section" align-center>
          <h3 class="sr-only">Berekend</h3>
          <Icon><IconHouseBlueprint /></Icon>
          <p>&euro;{{ priceAlgorithm }}</p>
          <p>Op basis van huidige vierkantemeterprijs, woningtype en wijk</p>
        </Stack>
      </SideBySide>
    </Panel>

    <Panel title="Referenties">
      <AddNoteButton slot="action" @click="onAddNote('references')"/>
      <section>
        <h3>Verkocht</h3>
        <ObjectList :objects="referencesSold">
          <ObjectListItem
            slot-scope="{ object }"
            :heading-level="4"
            :address="object.address"
            :match="object.match"
            :duration="object.duration"
            :sold-price="object.soldPrice"
            :sold-price-per-square-meter="object.soldPricePerSquareMeter"
            :purchase-price="object.purchasePrice"
            :purchase-price-per-square-meter="object.purchasePricePerSquareMeter"
            :details="object.details"
          />
        </ObjectList>
      </section>
      <section>
        <h3>Te Koop</h3>
        <ObjectList :objects="referencesForSale">
          <ObjectListItem
            slot-scope="{ object }"
            :heading-level="4"
            :address="object.address"
            :match="object.match"
            :duration="object.duration"
            :asking-price="object.askingPrice"
            :asking-price-per-square-meter="object.askingPricePerSquareMeter"
            :details="object.details"
          />
        </ObjectList>
      </section>
    </Panel>

    <Panel title="foo">
      <p>some content</p>
    </Panel>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import IconHouseBlueprint from '../assets/svg/icon-house-blueprint.svg'
import IconHouses from '../assets/svg/icon-houses.svg'
import IconProjectedChart from '../assets/svg/icon-projected-chart.svg'
import Panel from '../components/panel/panel'
import Icon from '../components/icon/icon'
import SideBySide from '../components/layout/side-by-side'
import Stack from '../components/layout/stack'
import AddNoteButton from '../components/add-note-button/add-note-button'
import ObjectDetails from '../components/object-details/object-details'
import ObjectList from '../components/object-list/object-list'
import ObjectListItem from '../components/object-list-item/object-list-item'

export default {
  components: { Panel, AddNoteButton, ObjectDetails, Icon, IconHouseBlueprint, IconHouses, IconProjectedChart, SideBySide, Stack, ObjectList, ObjectListItem },
  mounted () {
    window.store = this.$store
    this.$store.commit('object/details/store', window.object)
  },
  computed: {
    ...mapGetters('object/details', ['streetName', 'address', 'type', 'details']),
    ...mapGetters('object/indicationMarketValue', ['priceDevelopment', 'priceModel', 'priceAlgorithm']),
    ...mapGetters({
      'referencesSold': 'references/sold/added',
      'referencesForSale': 'references/forSale/added',
    }),
  },
  methods: {
    onAddNote (panelId) {
      this.$router.push({ name: 'object-note', params: { panelId } })
    },
  },
  watch: {
    streetName (newValue) {
      this.$emit('page-title', newValue)
    },
  },
}
</script>

<style>
.view--object {
  display: grid;
  grid-template-columns: auto minmax(0, 96.0rem) auto;
  grid-gap: var(--s-large);
}

.view--object > * {
  grid-column: 2 / -2
}
</style>
