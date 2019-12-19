<template>
  <main class="view--object">
    <router-link :to="{ name: 'object-export' }">Export</router-link>
    <router-link :to="{ name: 'object-note' }">Note</router-link>
    <router-link :to="{ name: 'object-references' }">References</router-link>

    <router-view></router-view>

    <Panel
      title="Woningdetails"
      tag="article"
      :divider="false"
      full-bleed>

      <AddNoteButton slot="action" />

      <ObjectDetails>
        <address slot="header">{{ address }}</address>
        <p slot="header">{{ type }}</p>
        <dl>
          <dt>Aantal kamers</dt>
          <dd>6</dd>
          <dt>Woonoppervlakte</dt>
          <dd>135m2</dd>
          <dt>Perceeloppervlakte</dt>
          <dd>150m2</dd>
          <dt>Bouwjaar</dt>
          <dd>{{ details.bouwjaar }}</dd>
          <dt>Koopsom</dt>
          <dd>{{ details.koopsom }} k.k.</dd>
          <dt>Transactiedatum</dt>
          <dd>12-03-2009</dd>
        </dl>
        <span slot="footer">Let op: belast met erfpacht</span>
      </ObjectDetails>
    </Panel>

    <Panel title="Indicatie marktwaarde">
      <AddNoteButton slot="action" />
      <SideBySide grow="0" basis="25%" justify-content="space-around">
        <Stack tag="section" align-center>
          <Icon><IconProjectedChart /></Icon>
          <p>&euro;{{ priceDevelopment }}</p>
          <p>Op basis van prijsontwikkeling sinds laatste keer verkocht</p>
        </stack>
        <Stack tag="section" align-center>
          <Icon><IconHouses /></Icon>
          <p>&euro;{{ priceModel }}</p>
          <p>Op basis van modelmatige waardebepaling</p>
        </Stack>
        <Stack tag="section" align-center>
          <Icon><IconHouseBlueprint /></Icon>
          <p>&euro;{{ priceAlgorithm }}</p>
          <p>Op basis van huidige vierkantemeterprijs, woningtype en wijk</p>
        </Stack>
      </SideBySide>
    </Panel>

    <Panel title="Referenties">
      <AddNoteButton slot="action" />
      <section>
        <h3>Verkocht</h3>
        <ObjectList :objects="referencesSold">
          <ObjectListItem
            slot-scope="{ object }"
            heading-level="h4"
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
            heading-level="h4"
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
    this.$store.commit('object/details/store', window.object)
  },
  computed: {
    ...mapGetters('object/details', ['address', 'type', 'details']),
    ...mapGetters('object/indicationMarketValue', ['priceDevelopment', 'priceModel', 'priceAlgorithm']),
    ...mapGetters({
      'referencesSold': 'references/sold/added',
      'referencesForSale': 'references/forSale/added',
    }),
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
