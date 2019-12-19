<template>
  <component
    :is="'SideBySide'"
    tag="ul"
    gap="--s-big"
    class="object-list"
  >
    <li v-for="object in objects" :key="object.guid">
      <slot :object="object"/>
    </li>
  </component>
</template>

<script>
import SideBySide from '../layout/side-by-side'

export default {
  components: { SideBySide },
  props: {
    objects: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style>
.object-list {
  list-style: none;
  padding: 0;
}
</style>
