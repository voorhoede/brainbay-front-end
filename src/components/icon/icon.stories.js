import { storiesOf } from '@storybook/vue'
import Icon from './icon'
import IconNote from '../../assets/svg/icon-note.svg'

storiesOf('Components|Icon', module)
  .add('Component', () => ({
    template: `<Icon>
                <IconNote />
              </Icon>`,
    components: { Icon, IconNote },
  }))
