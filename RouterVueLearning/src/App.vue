<script setup>
  import {RouterView} from 'vue-router'
  import Nav from './components/Nav.vue'

</script>


<template>
  <div>
    {{ temporaryState }}
    <!-- toggle state button -->
    <button @click="temporaryState = temporaryState === 'Hello' ? 'World' : 'Hello'"
    >Click me</button>
    <Nav />
    <RouterView />
  </div>
</template>
j

<style>

</style>
