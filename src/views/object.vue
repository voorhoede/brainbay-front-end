<template>
  <main>
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
      <header>
        <address>Galjoenstraat 46, 1503 AT Zaandam</address>
        <p>Woonhuis, eengezinswoning, tussenwoning</p>
      </header>
      <dl>
        <dt>Aantal kamers</dt>
        <dd>6</dd>
        <dt>Woonoppervlakte</dt>
        <dd>135m2</dd>
        <dt>Perceeloppervlakte</dt>
        <dd>150m2</dd>
        <dt>Bouwjaar</dt>
        <dd>1971</dd>
        <dt>Koopsom</dt>
        <dd>181.000 k.k.</dd>
        <dt>Transactiedatum</dt>
        <dd>12-03-2009</dd>
      </dl>
      <footer>
        <span>Let op: belast met erfpacht</span>
      </footer>
    </Panel>
  </main>
</template>

<script>
import Panel from '../components/panel/panel'
import AddNoteButton from '../components/add-note-button/add-note-button'
export default {
  components: { Panel, AddNoteButton },
  mounted () {
    this.$store.commit('object/storeObject', window.object)
  },
}
</script>
