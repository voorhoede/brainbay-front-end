<template>
  <component
    :is="tag"
    :style="`--justify-content: ${justifyContent}; --flex-grow: ${grow}; --flex-shrink: ${shrink}; --flex-basis: ${basis};`"
    class="side-by-side">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    justifyContent: {
      type: String,
      default: 'flex-start',
    },
    grow: {
      type: Number,
      default: 1,
    },
    shrink: {
      type: Number,
      default: 1,
    },
    basis: {
      type: String,
      default: '100%',
    },
  },
}
</script>

<style>
.side-by-side {
  display: flex;
  justify-content: var(--justify-content, space-between);
}

.side-by-side > * {
  flex-grow: var(--flex-grow, 1);
  flex-shrink: var(--flex-shrink, 1);
  flex-basis: var(--flex-basis, 100%);
}
</style>
