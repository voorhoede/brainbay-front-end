<template>
  <article class="object-list-item">
    <header class="object-list-item__title">
      <component :is="headingLevel">
        <address>{{ address }}</address>
      </component>
    </header>

    <aside class="object-list-item__visual">
      <div class="object-list-item__visual-inner">
        <img src="" />
        <span v-if="match" class="object-list-item__match object-list-item__focus">
          <strong>{{ match }}%</strong> Match
        </span>
        <span
          :class="{
            'object-list-item__availablility--sold': isSold === true,
            'object-list-item__availablility--for-sale': isSold === false,
          }"
          class="object-list-item__availablility"
          >
          <span class="object-list-item__availablility-label">
            <strong class="object-list-item__availablility-label-text" v-if="isSold">Verkocht</strong>
            <span class="object-list-item__availablility-label-text" v-else>Te koop</span>
          </span>
          <span v-if="duration" class="object-list-item__availablility-value">
            <span v-if="isSold">Verkooptijd: </span>
            <span v-else>Looptijd: </span>
            <strong>{{ duration }}</strong> Dagen
          </span>
        </span>
      </div>
    </aside>

    <div v-if="askingPrice" class="object-list-item__asking-price">
      <small>Vraagprijs</small>
      <p class="object-list-item__focus">&euro; {{ askingPrice }} k.k.</p>
      <small v-if="askingPricePerSquareMeter">
        &euro; {{ askingPricePerSquareMeter }} per m<sup>2</sup>
        </small>
    </div>

    <div v-if="soldPrice" class="object-list-item__sold-price">
      <small>Verkocht op: <time>17-03-2015</time></small>
      <p class="object-list-item__focus">&euro; {{ soldPrice }} k.k.</p>
      <small v-if="soldPricePerSquareMeter">
        &euro; {{ soldPricePerSquareMeter }} per m<sup>2</sup>
      </small>
    </div>

    <div v-if="purchasePrice" class="object-list-item__purchase-price">
      <small>Ge&iuml;ndexeerde koopsom</small>
      <p class="object-list-item__focus">&euro; {{ purchasePrice }} k.k.</p>
      <small v-if="purchasePricePerSquareMeter">
        &euro; {{ purchasePricePerSquareMeter }} per m<sup>2</sup>
      </small>
    </div>

    <hr class="object-list-item__divider" />

    <footer class="object-list-item__footer">
      <dl class="object-list-item__detail-list">
        <dt class="object-list-item__detail-term" v-if="details.rooms"><span class="object-list-item__detail-term-text">Aantal kamers</span><Icon :circle="false"><IconNote /></Icon></dt>
        <dd v-if="details.rooms"><small>{{ details.rooms }}</small></dd>
        <dt class="object-list-item__detail-term" v-if="details.livingArea"><span class="object-list-item__detail-term-text">Woonoppervlak</span><Icon :circle="false"><IconNote /></Icon></dt>
        <dd v-if="details.livingArea"><small>{{ details.livingArea }}m<sup>2</sup></small></dd>
        <dt class="object-list-item__detail-term" v-if="details.propertyArea"><span class="object-list-item__detail-term-text">Perceel oppervlakte</span><Icon :circle="false"><IconNote /></Icon></dt>
        <dd v-if="details.propertyArea"><small>{{ details.propertyArea }}m<sup>2</sup></small></dd>
        <dt class="object-list-item__detail-term" v-if="details.yearOfConstruction"><span class="object-list-item__detail-term-text">Bouwjaar</span><Icon :circle="false"><IconNote /></Icon></dt>
        <dd v-if="details.yearOfConstruction"><time><small>{{ details.yearOfConstruction }}</small></time></dd>
      </dl>
    </footer>
  </article>
</template>

<script>
import Icon from '../icon/icon'
import IconNote from '../../assets/svg/icon-note.svg'
export default {
  components: { Icon, IconNote },
  props: {
    headingLevel: {
      type: String,
      default: 'h3',
    },
    address: {
      type: String,
      required: true,
    },
    match: {
      type: Number,
      default: undefined,
    },
    duration: {
      type: Number,
      default: undefined,
    },
    askingPrice: {
      type: Number,
      default: undefined,
    },
    askingPricePerSquareMeter: {
      type: Number,
      default: undefined,
    },
    soldPrice: {
      type: Number,
      default: undefined,
    },
    soldPricePerSquareMeter: {
      type: Number,
      default: undefined,
    },
    purchasePrice: {
      type: Number,
      default: undefined,
    },
    purchasePricePerSquareMeter: {
      type: Number,
      default: undefined,
    },
    details: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isSold () {
      return Boolean(this.soldPrice)
    },
  },
}
</script>

<style>
.object-list-item {
  display: grid;
  grid-template-areas:
    "visual visual"
    "title title"
    "sell-left sell-right"
    "divider divider"
    "footer footer";
  grid-gap: var(--s-small);
}

.object-list-item__title {
  grid-area: title;
}
.object-list-item__title address {
  font-weight: bold;
  font-style: normal;
}

.object-list-item__visual {
  grid-area: visual;
  position: relative;
  width: 100%;
  padding-bottom: 56.2937%;
  border-radius: var(--rounded-small);
  overflow: hidden;
}

.object-list-item__visual-inner {
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  background-color: var(--c-dim);
}

.object-list-item__match {
  position: absolute;
  right: 0;
  top: var(--s-tiny);
  background-color: var(--c-white);
  padding: var(--s-nano) var(--s-tiny);
}

.object-list-item__availablility {
  position: absolute;
  right: 0;
  bottom: var(--s-small);
}

.object-list-item__availablility-value {
  background-color: var(--c-white);
  padding: var(--s-nano);
  padding-right: var(--s-tiny);
}

.object-list-item__availablility-label {
  background-color: currentColor;
  padding: var(--s-nano);
}

.object-list-item__availablility-label-text {
  color: var(--c-white);
  text-transform: uppercase;
}

.object-list-item__asking-price,
.object-list-item__sold-price {
  grid-area: sell-left;
}

.object-list-item__purchase-price {
  grid-area: sell-right;
  text-align: right;
}

.object-list-item__sold-price,
.object-list-item__asking-price,
.object-list-item__purchase-price {
  color: var(--c-dim-text);
}

.object-list-item__sold-price time {
  color: var(--c-success);
}

.object-list-item__divider {
  grid-area: divider;
  width: 100%;
}

.object-list-item__footer {
  grid-area: footer;
  color: var(--c-dim-text);
}

.object-list-item__focus {
  color: var(--c-focus);
}

.object-list-item__availablility--for-sale {
  color: var(--c-secondary);
}
.object-list-item__availablility--sold {
  color: var(--c-success);
}

.object-list-item__detail-list {
  display: flex;
  align-items: baseline;
  font-size: 12
}
.object-list-item__detail-list > * {
  margin: 0;
}

.object-list-item__detail-list > *:nth-child(odd) {
  margin-right: calc(var(--s-tiny) * 0.5);
}

.object-list-item__detail-list > *:nth-child(even) {
  margin-right: var(--s-tiny);
}

.object-list-item__detail-term {
  position: relative;
  width: 1.6rem;
  height: 1.6rem;
}

.object-list-item__detail-term .icon {
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  width: 1.6rem;
}

.object-list-item__detail-term-text {
  display: none;
}
</style>
