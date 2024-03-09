<script setup>
// import { } from '';
  import { ref } from 'vue';
  import { computed } from 'vue';
// Reactive state
// const sliderValues = ref([0, 0]);
const sliderValues = ref([
  {
    id: 1,
    value: 0,
    max: 100
  },
  {
    id: 2,
    value: 0,
    max: 100
  }
]);
// Computed properties
 const dependentMaxValue = computed(() => {
   return sliderValues[0].max + sliderValues[1].max;
  });
 const dependentSliderValue = computed(() => {
   return sliderValues[0].value + sliderValues[1].value;
 });

// Lifecycle hooks

// Methods

</script>

<template>
  <div>
    <h1>Variable Network</h1>
    <input type="range" min="0" max="100" v-model="sliderValues[0].value" />
    <p>Slider value: {{ sliderValues[0] }}</p>
    <input type="range" min="0" max="100" v-model="sliderValues[1].value" />
    <p>Slider value: {{ sliderValues[1] }}</p>
    <input type="range" min="0" :max="dependentMaxValue" v-model="dependentSliderValue" />
    <p>Slider value: {{ dependentSliderValue }}</p>


  </div>
</template>

<style scoped>

</style>
