<script>
import kebabCase from 'lodash/kebabCase'
import IconFloorPlan from '../../assets/svg/icon-floor-plan.svg'

const iconMap = {
  'aantal-kamers': IconFloorPlan,
}

export default {
  render (createElement) {
    if (!this.$slots.default) return undefined

    const [firstChild] = this.$slots.default ? this.$slots.default : []
    if (!firstChild || firstChild.tag !== 'dl') return this.$slots.default

    const wrappedChilren = firstChild.children
      .reduce((list, child) => {
        if (child.tag === 'dt') { list.push([]) }
        list[list.length - 1].push(child)
        return list
      }, [])
      .map(childList => {
        const term = childList.find(child => child.tag === 'dt')
        const definition = childList.find(child => child.tag === 'dd')

        let termText = term.children[0] ? term.children[0].text : undefined
        const kebabTerm = kebabCase(termText)
        const icon = iconMap[kebabTerm]

        const className = termText && icon
          ? `object-details-list__item--has-icon object-details-list__item--${kebabTerm}`
          : 'object-details-list__item'

        return createElement('div', { attrs: { class: className } }, childList)
      })
    return createElement('dl', { attrs: { class: 'object-details-definition-list' } }, wrappedChilren)
  },
}
</script>

<style>
.object-details-definition-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(15rem, 100%), 1fr));
  grid-gap: var(--s-medium);
  margin: 0;
}
</style>
