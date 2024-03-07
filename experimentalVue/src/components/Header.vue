<script setup>
  import { RouterLink } from 'vue-router';

</script>

<template>
  <header>
    <RouterLink to="/" active-class="active"
    >Main</RouterLink>
    <RouterLink to="/backside" active-class="active"
    >Backside</RouterLink>
    <RouterLink to="/thirdpage" active-class="active"
    >Third Page</RouterLink>
  </header>
</template>

<style>
  header {
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    border: 1px solid #000000;
    border-radius: 30px;
  }
  a {
    padding: 10px;
    margin: 10px;
    text-decoration: none;
    color: #000000;
    border-radius: 10px;
  }
  a:hover {
    background-color: #767676;
    color: #f4f4f4;
  }
  .active {
    background-color: #000000;
    color: #f4f4f4;
  }

</style>
