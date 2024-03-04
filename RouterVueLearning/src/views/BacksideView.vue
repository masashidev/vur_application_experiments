<script setup>
  import philosophers from "../data/words.json";
  import {RouterLink} from 'vue-router'
</script>

<template>
  <div>
    <h1>Backside</h1>
    <p>Welcome to the Backside page</p>
    <div class="philosophers">
      <RouterLink :to="`/philosopher/${philosopher.name}`" v-for="philosopher in philosophers" :key="philosopher.id" href="">
        {{ philosopher.name }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
  .philosophers {
    display: flex;
    flex-wrap: wrap;
  }
  .philosophers a {
    text-decoration: none;
    color: black;
    background-color: #f2f2f2;
    padding: 10px;
    /* not wrap */
    white-space: nowrap;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #000000;

  }

</style>
