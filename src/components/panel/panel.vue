<template>
  <section
    class="panel"
    :class="{
      'panel--full-bleed': fullBleed
    }">
    <header class="panel__header">
      <h2>{{title}}</h2>
      <router-link to="#">Meer info</router-link>
      <div class="panel__action">
        <slot name="action"/>
      </div>
    </header>

    <hr v-if="divider" class="panel__divider" />

    <div class="panel__content">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    divider: {
      type: Boolean,
      default: true,
    },
    fullBleed: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
.panel {
  background-color: var(--c-white);
  border-radius: var(--rounded-small)
}

.panel__header {
  padding: var(--s-small);
  display: flex;
}

.panel__header > * + * {
  margin-left: var(--s-small);
}

.panel__action {
  margin-left: auto;
}

.panel__divider {
  border: none;
  height: 1px;
  width: calc(100% - var(--s-small));
  margin: 0;
  margin-left: var(--s-small);
  background-color: var(--c-dim);
}

.panel__content {
  padding: var(--s-small);
}

.panel--full-bleed .panel__content {
  padding: initial;
}
</style>
