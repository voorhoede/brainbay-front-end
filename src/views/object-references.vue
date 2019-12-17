<template>
  <aside>
    <h2>Object References</h2>
    <router-link :to="{ name: 'object-references-list' }">List</router-link>
    <router-link :to="{ name: 'object-references-focus', params: { focusId: 'bar' } }">Focus</router-link>
  </aside>
</template>
