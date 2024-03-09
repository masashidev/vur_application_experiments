<script setup>
// import { } from '';

  import { store } from '../store/store.js';


// Reactive state
// Computed properties

// Watchers

// Lifecycle hooks

// Methods
  function increment() {
    store.count++;
  }
</script>

<template>
  <div>
    <h1>Sender</h1>
    <button @click="increment">Increment</button>
    <input v-model="store.text" />
  </div>
</template>

<style scoped>

</style>
