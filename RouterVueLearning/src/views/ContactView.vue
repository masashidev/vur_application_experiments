
<script setup>
  import { useRoute } from 'vue-router'
  import variables from "../data/variables.json";

  const route = useRoute()
  const variable = variables.find(variable => variable.id === parseInt(route.params.id))
  console.log(route.params.id)
</script>


<template>
  <div>
    <h1>Contact</h1>
    <p>Send me an email at <a href="mailto:">email</a></p>
    // if variable.details exist then show the details
    <p> {{ variable.details.tel }}</p>
    <p> {{ variable.details.address }}</p>
  </div>
</template>
