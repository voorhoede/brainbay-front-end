<template>
  <portal to="modal">
    <transition name="modal-slide-in">
      <aside class="modal" v-if="show">
        <div ref="modalContent" class="modal__content">
          <slot />
          <button ref="closeButton" class="modal__close-button" @click="emitClose">Close</button>
        </div>
      </aside>
    </transition>
  </portal>
</template>

<script>
export default {
  data: () => ({
    previousElementWithFocus: undefined,
    firstFocusableElement: undefined,
    show: false,
  }),
  async mounted () {
    this.show = true
    this.previousElementWithFocus = document.activeElement
    window.addEventListener('keydown', this.onEscape)

    await this.$nextTick()
    this.firstFocusableElement = this.$refs.modalContent.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    if (this.firstFocusableElement) {
      this.firstFocusableElement.focus()
    }
  },
  beforeDestroy () {
    window.removeEventListener('keydown', this.onEscape)
    this.previousElementWithFocus.focus()
  },
  methods: {
    onEscape (event) {
      if (event.key === 'Escape') {
        this.emitClose()
      }

      // Trap focus in modal
      if (event.key === 'Tab' && event.target === this.$refs.closeButton) {
        this.firstFocusableElement.focus()
        event.preventDefault()
      }
    },
    emitClose () {
      this.$emit('close')
    },
  },
}
</script>

<style>
.modal-slide-in-enter-active { transition: opacity var(--ease-out-medium); }
.modal-slide-in-leave-active { transition: opacity var(--ease-out-instant); }

.modal-slide-in-enter, .modal-slide-in-leave-to { opacity: 0; }

.modal-slide-in-enter-active .modal__content {
  transition: transform var(--ease-out-medium), opacity var(--ease-out-medium);
}
.modal-slide-in-enter .modal__content {
  transform: translateY(75px);
  opacity: 0;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: auto minmax(0, var(--max-page-width)) auto;
  grid-template-rows: auto max-content auto;
  grid-gap: var(--s-large);
}
.modal::before {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: -1;
  opacity: 0.6;
}

.modal__content {
  position: relative;
  grid-column: 2;
  grid-row: 2;
  background-color: var(--c-white);
  padding: var(--s-big);
}

.modal__close-button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
