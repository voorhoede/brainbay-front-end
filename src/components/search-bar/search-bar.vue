<template>
  <form
    class="search-bar"
    :class="{
      'search-bar--connected': separated === false,
      'search-bar--separated': separated,
      'search-bar--primary-action': primaryAction,
    }">

    <label class="search-bar__label">
      <IconSearch class="search-bar__icon--search"/>
      <input class="search-bar__input" type="text" v-model="inputValue"/>
      <span class="search-bar__label-text" :hidden="hasInput">Zoek naar adres</span>
    </label>

    <button class="search-bar__submit">
      Zoeken
    </button>
  </form>
</template>

<script>
import IconSearch from '../../assets/svg/icon-search.svg'

export default {
  components: {
    IconSearch,
  },
  props: {
    connected: {
      type: Boolean,
      default: true,
    },
    separated: {
      type: Boolean,
      default: false,
    },
    primaryAction: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    inputValue: '',
  }),
  computed: {
    hasInput () {
      return this.inputValue !== ''
    },
  },
}
</script>

<style>
.search-bar {
  --icon-width: 2rem;
  --label-offset: calc(var(--s-small) + var(--icon-width) + var(--s-small));
  --bar-height: var(--s-huge);
  --gap: 0px;
  --corners: 0px;

  display: flex;
  align-items: center;
  height: var(--bar-height);
  border-radius: var(--corners);
  z-index: 0;
}

.search-bar--connected {
  --gap: 1px;
}

.search-bar--separated {
  --gap: var(--s-large);
}

.search-bar > * {
  flex: 1;
}

.search-bar__label {
  position: relative;
  display: flex;
}

.search-bar__input {
  padding: var(--s-small);
  padding-left: var(--label-offset);
  border: none;
  flex: 1;
  align-self: stretch;
  height: var(--bar-height);
  border: 2px solid transparent;
  transition: border-color var(--ease-out-instant);
}
.search-bar--connected .search-bar__input {
  border-top-left-radius: var(--rounded-tiny);
  border-bottom-left-radius: var(--rounded-tiny);
}

.search-bar--separated .search-bar__input {
  border-top-right-radius: var(--rounded-medium);
}

.search-bar__icon--search {
  position: absolute;
  top: 50%;
  left: var(--s-small);
  color: var(--c-dim);
  transform: translateY(-50%);
}

.search-bar__label-text {
  position: absolute;
  top: 50%;
  left: var(--label-offset);
  transition: opacity var(--ease-in-fast);
  transform: translateY(-50%);
}
.search-bar__input:focus + .search-bar__label-text {
  opacity: 0;
  transition: opacity var(--ease-out-instant);
}

.search-bar__submit {
  text-transform: uppercase;
  font-weight: bold;
  flex-grow: 0;
  align-self: stretch;
  padding-left: var(--s-big);
  padding-right: var(--s-big);
  margin-left: var(--gap);
  color: var(--c-primary);
  border: 2px solid transparent;
  border-top-right-radius: var(--rounded-medium);
  background-color: var(--c-white);
  transition: color var(--ease-out-instant),
              background-color var(--ease-out-instant),
              border-color var(--ease-out-instant);
}

.search-bar__submit:focus {
  color: var(--c-focus);
  transition: color var(--ease-in-fast);
  z-index: 1;
}
.search-bar__submit:hover {
  background-color: var(--c-primary);
  color: var(--c-white);
  border-color: var(--c-white);
  transition: background-color var(--ease-in-fast), color var(--ease-in-fast), border-color var(--ease-in-fast);
}

.search-bar--connected .search-bar__submit {
  border-bottom-right-radius: var(--rounded-tiny);
}

.search-bar--primary-action .search-bar__submit {
  color: var(--c-white);
  background-color: var(--c-primary);
}
.search-bar--primary-action .search-bar__submit:focus {
  border-color: var(--c-white);
  transition: border-color var(--ease-in-fast);
  outline: none;
}

.search-bar--connected {
  border-bottom-right-radius: var(--rounded-tiny);
}
</style>
