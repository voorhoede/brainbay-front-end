<template>
  <aside>
    <h2>Result References</h2>
    <router-link :to="{ name: 'result-references-list' }">List</router-link>
    <router-link :to="{ name: 'result-references-focus', params: { focusId: 'bar' } }">Focus</router-link>
  </aside>
</template>
