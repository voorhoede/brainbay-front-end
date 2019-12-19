<template>
  <component
    :is="tag"
    :style="`
      --justify-content: ${justifyContent};
      --flex-grow: ${grow};
      --flex-shrink: ${shrink};
      --flex-basis: ${basis};
      --gap: ${gapValue};
    `"
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
      type: String,
      default: '1',
    },
    shrink: {
      type: String,
      default: '1',
    },
    basis: {
      type: String,
      default: '100%',
    },
    gap: {
      type: String,
      default: '0',
    },
  },
  computed: {
    gapValue () {
      return /^--/.test(this.gap)
        ? `var(${this.gap})`
        : this.gap
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

.side-by-side > * + * {
  margin-left: var(--gap, 0)
}
</style>
