<script setup>
// import { } from '';
  import { ref } from 'vue';

  import VariableNetworkComponent  from '../components/VariableNetworkComponent.vue';
  import RadioButtonComponent from '../components/RadioButtonComponent.vue';

  const sliderValueFromParent = ref(0);

</script>

<template>
  <div class="parent-container">
    <p>this is parenet space</p>
    <p> sliderValueFromParent:
    {{ sliderValueFromParent }}</p>
    <button @click="sliderValueFromParent++">Increment sliderValueFromParent</button>
  </div>
  <div class="component-container">
    <h1>Fifth page</h1>
    <p>VariableNetworkComponent</p>
    <VariableNetworkComponent :sliderValueFromParent="sliderValueFromParent"
    @update="sliderValueFromParent = $event"
     />
    <p>RadioButtonComponent</p>
    <RadioButtonComponent />
  </div>
</template>

<style scoped>
  .parent-container {
    border: 1px solid black;
    padding: 20px;
    border-radius: 20px;
  }
/* choose all element execpt p tag */
  .component-container > *:not(p) {
    margin-bottom: 40px;
  }
  p {
    opacity: 0.5;
  }

</style>
