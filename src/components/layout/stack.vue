<template>
  <component
    :is="tag"
    class="stack"
    :class="{
      'stack--align-center': alignCenter
    }">
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
    alignCenter: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
.stack {
  display: flex;
  flex-direction: column;
  align-items: var(--align-items, flex-start);
  justify-content: var(--justify-content, flex-start)
}

.stack--align-center {
  --align-items: center;
  text-align: center;
}
</style>
