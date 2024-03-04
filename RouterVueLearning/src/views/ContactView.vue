
<script setup>
  import { useRouter } from 'vue-router'
  import variables from "../data/variables.json";

  const route = useRouter()
  // const variable = variables.find(variable => variable.id === parseInt(route.params.id))
)
</script>


<template>
  <div>
    <h1>Contact</h1>
    <p>Send me an email at <a href="mailto:">email</a></p>

    <!-- <p> {{ variable.childNode.tel }}</p>
    <p> {{ variable.childNode.address }}</p> -->
  </div>
</template>
