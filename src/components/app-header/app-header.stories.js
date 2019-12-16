import AppHeader from './app-header'
import StoryRouter from 'storybook-vue-router'
import { storiesOf } from '@storybook/vue'

storiesOf('Components', module)
  .addDecorator(StoryRouter({}, {}))
  .add('App Header', () => ({
    template: '<app-header />',
    components: { AppHeader },
  }))
