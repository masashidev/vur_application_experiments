<script setup>
  import { reactive } from 'vue';
  import { ref } from 'vue';
  import {watch} from 'vue';


  const state = reactive({
    count: 0,
    message: 'Hello Vue!'
  });

  const wordResult = ref('');

  const counter = ref(0);
  const addWord = () => {
    wordResult.value = state.message;
  }
</script>

<template>
  <div>
    <h1>Reactive Component</h1>
    <p>{{ counter }}</p>
    <button @click=>Increment</button>
  </div>
  <div>
    <button @click="state.count++">Count is: {{ state.count }}</button>
    <!-- update state.message by typing into input element -->
    <input v-model="state.message" />
    <input v-model="state.message" />
    <p @click="addWord">Click to show word: {{ wordResult }}</p>
  </div>
</template>

<style scoped>
  div {
    text-align: center

  }
  p {
    font-size: 2em;
    text-align: center;
    /* keep the size of space when there is not text in p */
    min-height: 2em;
    /* draw line for edge  */
    border: 1px solid #000000;
  }
  button {
    font-size: 1.5em;
    display: block;
    margin: 20px auto;
  }
  input {
    font-size: 1.5em;
    display: block;
    margin: 20px auto;
    /* make box border none */
    border: none;
    cursor: pointer;
    /* not show beeping line for focusing inpnut  */
    outline: none;
    padding: 10px;
  }
</style>
