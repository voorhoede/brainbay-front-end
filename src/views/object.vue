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
        <address slot="header">{{ currentAddress }}</address>
        <p slot="header">{{ objectType }}</p>
        <dl>
          <dt>Aantal kamers</dt>
          <dd>6</dd>
          <dt>Woonoppervlakte</dt>
          <dd>135m2</dd>
          <dt>Perceeloppervlakte</dt>
          <dd>150m2</dd>
          <dt>Bouwjaar</dt>
          <dd>{{ objectDetails.bouwjaar }}</dd>
          <dt>Koopsom</dt>
          <dd>{{ objectDetails.koopsom }} k.k.</dd>
          <dt>Transactiedatum</dt>
          <dd>12-03-2009</dd>
        </dl>
        <span slot="footer">Let op: belast met erfpacht</span>
      </ObjectDetails>
    </Panel>

    <Panel title="foo">
      <p>some content</p>
    </Panel>

    <Panel title="foo">
      <p>some content</p>
    </Panel>

    <Panel title="foo">
      <p>some content</p>
    </Panel>
  </main>
</template>

<script>
import Panel from '../components/panel/panel'
import AddNoteButton from '../components/add-note-button/add-note-button'
import ObjectDetails from '../components/object-details/object-details'
import { mapGetters } from 'vuex'

export default {
  components: { Panel, AddNoteButton, ObjectDetails },
  mounted () {
    this.$store.commit('object/storeObject', window.object)
  },
  computed: {
    ...mapGetters('object', ['currentAddress', 'objectType', 'objectDetails']),
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
