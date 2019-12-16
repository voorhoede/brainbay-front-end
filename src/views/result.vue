<template>
  <main>
    <h1>Result</h1>
    <router-link :to="{ name: 'result-export' }">Export</router-link>
    <router-link :to="{ name: 'result-note' }">Note</router-link>
    <router-link :to="{ name: 'result-references' }">References</router-link>

    <router-view></router-view>
  </main>
</template>
