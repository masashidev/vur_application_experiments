<script setup>
// import { } from '';
  import { ref } from 'vue';

  import VariableNetworkComponent  from '../components/VariableNetworkComponent.vue';
  import RadioButtonComponent from '../components/RadioButtonComponent.vue';
  import ChildComponent from '../components/ChildComponent.vue';

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
    <p>ChildComponent</p>
    <ChildComponent
      :sliderValueFromParent="sliderValueFromParent" @update:sliderValueFromParent="sliderValueFromParent = $event" />

    <p>VariableNetworkComponent</p>
    <VariableNetworkComponent
     :sliderValueFromParent="sliderValueFromParent"
      @update:sliderValueFromParent="sliderValueFromParent = $event"/>

    <p>RadioButtonComponent</p>
    <RadioButtonComponent />
  </div>
</template>

<style scoped>
  .parent-container {
    border: 1px solid black;
    padding: 20px;
    border-radius: 20px;
    margin-bottom: 20px;
  }
/* choose all element execpt p tag */
  .component-container > *:not(p) {
    margin-bottom: 40px;
    border: 1px solid #000000;
    border-radius: 30px;
    padding: 10px;
  }
  p {
    opacity: 0.5;
  }

</style>
