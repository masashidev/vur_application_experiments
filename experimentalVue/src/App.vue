<script setup>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import { RouterView } from 'vue-router'
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
  main {
    background-color: #f4f4f4;
    padding: 20px;
  }


</style>
