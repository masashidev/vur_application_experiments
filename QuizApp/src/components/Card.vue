<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    language: Object
  })


</script>

<template>
  <div class="card">
    <img :src="props.language.img" alt="">
    <div class="card-text">
      <h2>{{  props.language.name }}</h2>
      <p>{{ props.language.questions.length}} sentences</p>
    </div>
  </div>

</template>

<style scoped>

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

</style>
