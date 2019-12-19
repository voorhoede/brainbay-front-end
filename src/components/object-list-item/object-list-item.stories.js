import { storiesOf } from '@storybook/vue'
import ObjectListItem from './object-list-item'

storiesOf('Components|Object list item', module)
  .add('Component', () => ({
    template: `<object-list-item
                 address="Galjoenstraat 54, Zaandam"
                 :match="82"
                 :duration="84"
                 :soldPrice="187500"
                 :soldPricePerSquareMeter="1562"
                 :purchasePrice="180000"
                 :purchasePricePerSquareMeter="1500"
                 :details="{ rooms: 5, livingArea: 120, propertyArea: 183, yearOfConstruction: 1971 }"
               />`,
    components: { ObjectListItem },
  }))
