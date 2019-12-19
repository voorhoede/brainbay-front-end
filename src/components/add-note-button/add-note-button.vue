<template>
  <button
    class="add-note-button"
    :class="{
      'add-note-button--has-been-added': hasBeenAdded
    }"
    aria-label="Voeg notitie toe"
    v-on="$listeners"
  >
    <Icon aria-hidden="true">
      <IconNoteAdded v-if="hasBeenAdded"/>
      <IconNote v-else/>
    </Icon>
  </button>
</template>

<script>
import Icon from '../icon/icon'
import IconNote from '../../assets/svg/icon-note.svg'
import IconNoteAdded from '../../assets/svg/icon-note-added.svg'
export default {
  components: { Icon, IconNote, IconNoteAdded },
  props: {
    hasBeenAdded: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
.add-note-button {
  color: var(--c-primary);
}

.add-note-button--has-been-added {
  color: var(--c-secondary);
}
</style>
