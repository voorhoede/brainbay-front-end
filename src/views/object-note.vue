<template>
    <Modal @close="onClose">
      <form>
        <textarea></textarea>
      </form>
      <button @click="onDelete">Verwijderen</button>
      <button @click="onSave">Opslaan</button>
    </Modal>
</template>

<script>
import Modal from '../components/modal/modal'

export default {
  components: { Modal },
  methods: {
    onClose () {
      this.$router.go(-1)
    },
    onSave () {
      this.$router.go(-1)
    },
    onDelete () {
      this.$router.go(-1)
    },
  },
}
</script>
