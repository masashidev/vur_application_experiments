<script setup>
  import q from './data/questions.json'
  import { ref, watch} from 'vue'
  import v from './data/variables.json'
  import Card from './components/Card.vue'

  const languages = ref(q)
  const search = ref('')
  watch(search, () => {
    languages.value = q.filter(language => {
      return language.name.toLowerCase().includes(search.value.toLowerCase())
    })
  })

  const variables = ref(v)
  const vSearch = ref('')
  watch(vSearch, () => {
    variables.value = v.filter(variable => {
      return variable.toLowerCase().includes(vSearch.value.toLowerCase())
    })
  })

</script>


<template>
  <div class="container">
    <header>
      <h1>Language Trainer</h1>
      <input v-model.trim="search"
      type="text" placeholder="Search..." class="search">

    </header>

    <div class="options-container">
      <Card v-for="language in languages" :key="language.id" :language="language"/>
      <!-- <div v-for="language in languages" :key="language.id"
      class="card">
        <img :src=language.img alt="">
        <div class="card-text">
          <h2>{{ language.name }}</h2>
          <p>{{ language.questions.length}} sentences</p>
        </div>
      </div> -->
    </div>

    <div class="variables-header">
      <h2>Variables</h2>
      <input v-model.trim="vSearch"
      type="text" placeholder="Search..." class="search">
    </div>

    <div class="variables-container">
      <div v-for="variable in variables" :key="variable.id"
      class="variable">
        <p class="">{{ variable }}</p>
      </div>
    </div>

  </div>

</template>




<style scoped>
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }

  header{
    margin-bottom: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
  }

  header h1{
    font-weight: bold;
    margin-right: 30px;
  }

  .search{
    border: none;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 5px;
  }

  /* cards */
  .options-container {
    display: flex;
    flex-wrap: wrap;
  }

  /* card */
  .card{
    width: 300px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    margin: 0 20px 20px 0;
    cursor: pointer;
  }

  .card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .card-text {
    padding: 0 20px 10px;
  }
  .card .card-text h2{
    font-weight: bold;
  }

  /* variables */

  .variables-container {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;

  }
  .variable {
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.1);
    margin: 0 10px 10px 0;
    cursor: pointer;
  }

</style>
