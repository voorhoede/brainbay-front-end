<template>
  <header class="app-header">
    <p>brainbay</p>
    <nav id="nav">
      <router-link to="/">Landing</router-link> |
      <router-link to="/foo">Result</router-link>
    </nav>
  </header>
</template>

<style>
.app-header {
  background-color: var(--c-primary);
}
</style>
