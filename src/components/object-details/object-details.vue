<template>
  <section class="object-details">
    <div class="object-details__img-spacer">
      <slot name="image" />
    </div>
    <div class="object-details__content">
      <header class="object-details__header">
        <slot name="header" />
      </header>
      <object-details-definition-list>
        <slot />
      </object-details-definition-list>
      <footer class="object-details__footer">
        <slot name="footer" />
      </footer>
    </div>
  </section>
</template>

<script>
import ObjectDetailsDefinitionList from './object-details-definition-list'
export default {
  components: { ObjectDetailsDefinitionList },
}
</script>

<style>
.object-details {
  display: flex;
}
.object-details__img-spacer {
  width: 39.4rem;
  background-color: red;
  overflow: hidden;
  border-top-right-radius: var(--rounded-huge);
}
.object-details__content {
  flex: 1;
  margin-left: var(--s-large);
  margin-bottom: var(--s-small);
}

.object-details__content > * + * {
  margin-top: var(--s-large);
}

.object-details__header {
  border-bottom: 1px solid var(--c-dim);
}

.object-details__header > * {
  margin-bottom: var(--s-tiny);
}
</style>
