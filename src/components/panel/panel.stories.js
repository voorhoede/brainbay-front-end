import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import Panel from './panel'
import AddNoteButton from '../add-note-button/add-note-button'

storiesOf('Components|Panel', module)
  .addDecorator(StoryRouter())
  .add('Component', () => ({
    template: `<panel title="Panel title">
                Content
              </panel>`,
    components: { Panel },
  }))
  .add('More info url', () => ({
    template: `<panel title="Panel title" more-info-url="#">
                Content
              </panel>`,
    components: { Panel },
  }))
  .add('Without divider', () => ({
    template: `<panel :divider="false" title="Panel title">
                Content
              </panel>`,
    components: { Panel },
  }))
  .add('Full bleed', () => ({
    template: `<panel :divider="false" title="Panel title" full-bleed>
                Content
              </panel>`,
    components: { Panel },
  }))
  .add('With note', () => ({
    template: `<panel title="Panel title">
                <AddNoteButton slot="action"/>
                Content
              </panel>`,
    components: { Panel, AddNoteButton },
  }))
  .add('With added note', () => ({
    template: `<panel title="Panel title">
                <AddNoteButton has-been-added slot="action"/>
                Content
              </panel>`,
    components: { Panel, AddNoteButton },
  }))
