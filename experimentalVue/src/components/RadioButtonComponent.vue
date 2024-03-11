<script setup>
// import { } from '';
  import { ref } from 'vue';
  import sliderValues from './VariableNetworkComponent.vue';
  const selectedOption = ref('+');
// Reactive state

// Computed properties

// Watchers

// Lifecycle hooks

// Methods

</script>

<template>
  <div>
    <input type="radio" name="radio" id="radio1" value="+" v-model="selectedOption"
    ></input>
    <input type="radio" name="radio" id="radio2" value="-"
    v-model="selectedOption"
    ></input>

    <p>Selected option: {{ selectedOption }}</p>

    <input type="radio" name="state" id="radio1" value="+" v-model="selectedOption"
    ></input>
    <input type="radio" name="state" id="radio2" value="-"
    v-model="selectedOption"
    ></input>
  </div>
</template>

<style scoped>
  #radio1 {
    margin-right: 10px;
    /* make button bigger */
    transform: scale(2);
  }

</style>
