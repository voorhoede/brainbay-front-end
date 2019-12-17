<template>
  <div id="app">
    <component :is="isLanding ? 'app-hero' : 'app-header'" >
      <search-bar
        :separated="isLanding"
        :primary-action="isLanding"
        slot="search"/>
    </component>

    <router-view/>
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
  computed: {
    isLanding () {
      return this.$route.name === 'landing'
    },
  },
}
</script>
