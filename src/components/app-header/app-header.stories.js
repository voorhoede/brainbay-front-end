import AppHeader from './app-header'
import SearchBar from '../search-bar/search-bar'
import StoryRouter from 'storybook-vue-router'
import { storiesOf } from '@storybook/vue'

storiesOf('Components|App Header', module)
  .addDecorator(StoryRouter({}, {}))
  .add('Component', () => ({
    template: '<app-header><search-bar slot="search"/></app-header>',
    components: { AppHeader, SearchBar },
  }))
