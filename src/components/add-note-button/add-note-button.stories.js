import { storiesOf } from '@storybook/vue'
import AddNoteButton from '../add-note-button/add-note-button'

storiesOf('Components|Add Note Button', module)
  .add('Component', () => ({
    template: `<AddNoteButton />`,
    components: { AddNoteButton },
  }))
  .add('Has been added', () => ({
    template: `<AddNoteButton has-been-added/>`,
    components: { AddNoteButton },
  }))
