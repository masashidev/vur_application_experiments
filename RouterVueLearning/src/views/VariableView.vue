<script setup>
  import { useRoute, RouterView } from 'vue-router'
  import variables from "../data/variables.json";

  const route = useRoute()

  const variable = variables.find(variable => variable.id === parseInt(route.params.id))
</script>

<template>
  <div>
    {{ variable }}
    <h1>Variables title</h1>
    <p>{{ variable.title }}</p>
    <p>{{ variable.category }}</p>
    <ul>
      <li v-for="keyword in variable.keywords" :key="keyword.id">
        {{ keyword }}
      </li>
    </ul>
    <RouterView />

  </div>
</template>
