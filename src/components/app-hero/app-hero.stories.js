import AppHero from './app-hero'
import { storiesOf } from '@storybook/vue'

storiesOf('Components|App Hero', module)
  .add('Component', () => ({
    template: '<app-hero />',
    components: { AppHero },
  }))
