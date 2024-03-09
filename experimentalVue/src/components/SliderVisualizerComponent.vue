<script setup>
// import { } from '';
  import { ref } from 'vue';
  import { reactive } from 'vue';
  import { defineExpose } from 'vue';

  const sliderValues = reactive({
    x: 0,
    y: 0
  });
  // let sliderValueX = ref(0);
  // let sliderValueY = ref(0);

  defineExpose({
    sliderValues
  });
// Computed properties

// Watchers

// Lifecycle hooks

// Methods

</script>

<template>
  <div class="component-container">
    <h1>Slider Visualizer</h1>


    <div class="visualizer" :style="{width: `${sliderValues.x}px`, height: `${sliderValues.y}px`}">
      <input class="sliderX"
      type="range" min="0" max="300" v-model="sliderValues.x" />
      <input class="sliderY"
      type="range" min="0" max="300" v-model="sliderValues.y" />
      <div class="width-view">{{sliderValues.x}}</div>
      <div class="height-view">{{sliderValues.y}}</div>
    </div>
  </div>
</template>

<style scoped>
  .component-container {
    min-height: 500px;
  }
  .visualizer {
    width: 50px;
    height: 50px;
    background-color: #e5ffc7;
    border: 1px solid #000000;
    position: relative;
    margin-top: 20px;
  }
  .sliderX {
    width: 300px;
    height: 20px;
    -webkit-appearance: none;
    appearance: none;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    transition: opacity .2s;
    border-radius: 30px;
    padding: 0 3px;
    position: absolute;
    transform: translate(0%, -50%);
    z-index: 2;
  }
  .sliderY {
    width: 300px;
    height: 20px;
    -webkit-appearance: none;
    appearance: none;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    transition: opacity .2s;
    border-radius: 30px;
    padding: 0 3px;
    position: absolute;
    z-index: 2;
    transform: rotate(90deg) translate(0%, -50%);
    transform-origin: left top;
    left: 100%;
    top: 0;
  }
  .width-view, .height-view {
    background-color: #e5ffc7;
    border: 1px solid #000000;
    border-radius: 30px;
    white-space: nowrap;
    padding: 5px;
    /* make it unselectable */
    user-select: none;
    z-index: 1;
  }
  .width-view {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .height-view {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(-50%, -50%);
  }
</style>
