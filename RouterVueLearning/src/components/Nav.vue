<script setup>
  import {RouterLink} from 'vue-router'
</script>

<template>
  <div class="nav">
    <RouterLink active-class="active"
    to="/">Home</RouterLink>
    <RouterLink  active-class="active"
    to="/backside">Backside</RouterLink>
  </div>

</template>

<style scoped>
  .active {
    font-weight: 900;
    color: red;
  }
</style>
