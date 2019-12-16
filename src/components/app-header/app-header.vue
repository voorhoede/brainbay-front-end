<template>
  <header class="app-header">
    <LogoWhite />
    <nav id="nav">
      <router-link to="/">Landing</router-link> |
      <router-link to="/foo">Result</router-link>
    </nav>
  </header>
</template>

<script>
import LogoWhite from '../../assets/svg/logo-white.svg'

export default {
  components: {
    LogoWhite,
  },
}
</script>

<style>
.app-header {
  background-color: var(--c-primary);
}
</style>
