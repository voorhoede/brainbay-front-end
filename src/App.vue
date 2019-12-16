<template>
  <div id="app">
    <app-hero v-if="isLanding === true"/>
    <app-header v-if="isLanding === false"/>
    <router-view/>
  </div>
</template>

<script>
import './assets/styles.css'
import AppHeader from './components/app-header/app-header'
import AppHero from './components/app-hero/app-hero'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppHero,
  },
  computed: {
    isLanding () {
      return this.$route.name === 'landing'
    },
  },
}
</script>
