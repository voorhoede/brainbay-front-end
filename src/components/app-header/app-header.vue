<template>
  <header class="app-header" >
    <router-link class="app-header__home-link" :to="{name: 'landing'}">
      <span class="sr-only">Home</span>
      <LogoWhite aria-hidden="true" class="app-header__logo"/>
    </router-link>

    <div class="app-header__search" role="search">
      <slot name="search" />
    </div>

    <button class="app-header__export-button" @click="$emit('export')">
      <ArrowUp aria-hidden="true"/>
      Exporteren
    </button>
  </header>
</template>

<script>
import LogoWhite from '../../assets/svg/logo-white.svg'
import ArrowUp from '../../assets/svg/icon-arrow-up.svg'

export default {
  components: {
    LogoWhite,
    ArrowUp,
  },
}
</script>

<style>
.app-header {
  background-color: var(--c-primary);
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: var(--s-huge);
  border-bottom-left-radius: var(--rounded-large);
}

.app-header__home-link {
  padding: var(--s-tiny);
  color: var(--c-white);
}

.app-header__export-button {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  padding: var(--s-tiny) var(--s-small);
  background-color: var(--c-secondary);
  color: var(--c-white);
  border: 2px solid transparent;
  font-weight: bold;
  text-transform: uppercase;
  transition: color var(--ease-out-instant),
              background-color var(--ease-out-instant),
              border-color var(--ease-out-instant);
}

.app-header__export-button:hover {
  border-color: var(--c-secondary);
  background-color: var(--c-white);
  color: var(--c-secondary);
  transition: color var(--ease-in-fast),
              background-color var(--ease-in-fast),
              border-color var(--ease-in-fast);
}

.app-header__search {
  position: absolute;
  left: 50%;
  transform: translate(-50%);

  width: 100%;
  max-width: 73.6rem;
}
</style>
