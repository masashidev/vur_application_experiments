<script setup>

  import variables from "../data/variables.json";
  import {RouterLink} from 'vue-router'
</script>



<template>
  <div>
    <h1>Home</h1>
    <div class="variables">
      <RouterLink :to="`/variable/${variable.id}`"v-for="variable in variables" :key="variable.id" href="">
        {{ variable.title }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
  .variables {
    display: flex;
    flex-wrap: wrap;
  }
  .variables a {
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
