import AppHero from './app-hero'
import { storiesOf } from '@storybook/vue'

storiesOf('Components', module)
  .add('App Hero', () => ({
    template: '<app-hero />',
    components: { AppHero },
  }))
