<template>
  <div id="app">
    <h1 class="sr-only">{{ pageTitle }}</h1>
    <component
      :is="isLanding ? 'app-hero' : 'app-header'"
      @export="onExport"
    >
      <search-bar
        :separated="isLanding"
        :primary-action="isLanding"
        slot="search"/>
    </component>

    <router-view @page-title="title => pageTitle = title"/>
    <portal-target name="modal" />
  </div>
</template>

<script>
import './assets/styles.css'
import AppHeader from './components/app-header/app-header'
import AppHero from './components/app-hero/app-hero'
import SearchBar from './components/search-bar/search-bar.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppHero,
    SearchBar,
  },
  data: () => ({
    pageTitle: undefined,
  }),
  computed: {
    isLanding () {
      return this.$route.name === 'landing'
    },
  },
  methods: {
    onExport () {
      this.$router.push({ name: 'object-export' })
    },
  },
}
</script>
