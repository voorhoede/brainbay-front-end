<template>
  <div id="app">
    <component :is="isLanding ? 'app-hero' : 'app-header'" >

    </component>

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
