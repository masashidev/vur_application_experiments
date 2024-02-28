<template>

  <div class="container">
    <h2>Language Automator</h2>
    <p>Automate your language learning</p>

    <div class="display">
      <h3>Language: {{ counter }}</h3>
      <h3>Rate: {{ rate }}</h3>
    </div>
    <div class="counter">
      <button @click="increment">+ </button>
      <button @click="decrement">-</button>
      <button @click="rate++">+</button>
      <button @click="rate--">-</button>
    </div>


  </div>

</template>

<script setup>
  import { ref } from 'vue'
  const counter = ref(0)
  const rate = ref(1)
  const increment = () => {
    counter.value += rate.value
  }
  const decrement = () => {
    counter.value -= rate.value
  }
</script>


<style>
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    color: white;
  }
  .container {
    background-color: #43766C;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 400px;
    transform: translate(50%, 50%);

    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
</style>
