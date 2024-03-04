<script setup>
  import { useRoute, RouterView, useRouter,
   } from 'vue-router'

  import variables from "../data/variables.json";

  const route = useRoute()
  const router = useRouter()
  const variableId = route.params.id

  const variable = variables.find(v => v.id === parseInt(variableId))
</script>

<template>
  <div v-if="variable">
    {{ variable }}
    <h1>Variables title</h1>
    <p>{{ variable.title }}</p>
    <p>{{ variable.category }}</p>
    <ul>
      <li v-for="keyword in variable.keywords" :key="keyword.id">
        {{ keyword }}
      </li>
    </ul>
    <button @click="router.push('/variables')">Back</button>
    <button @click="router.push('/variable/' + (variable.id - 1))">Previous</button>
    <button @click="router.push('/variable/' + (variable.id + 1))">Next</button>

    <div v-if = "variable.details"
    class="details">
      <button @click="router.push(`/variable/${variableId}/details`)">Click for Details</button>
      <RouterView />
    </div>
    <div v-else>
      <p>No details available</p>
    </div>
  </div>
  <div v-else>
    <p>Variable not found</p>
  </div>
</template>
