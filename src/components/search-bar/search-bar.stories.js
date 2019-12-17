import { storiesOf } from '@storybook/vue'
import SearchBar from './search-bar'

storiesOf('Components|Search Bar', module)
  .add('Header', () => ({
    template: '<SearchBar />',
    components: { SearchBar },
  }))
  .add('Hero', () => ({
    template: '<SearchBar separated primary-action/>',
    components: { SearchBar },
  }))
