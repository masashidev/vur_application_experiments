<script setup>
  import {ref} from 'vue';
  import {computed} from 'vue';

  let sliderValue = ref(0);
  let pWidth = computed(() => {
    return `${sliderValue.value * window.innerWidth / 100}px`;
  });

  const windowInnerWidth = ref(window.innerWidth);
</script>

<template>
  <div>
    <input class="slider"
    :style="{opacity: (1 - sliderValue / 100)}"
    type="range" min="0" max="100" v-model="sliderValue" />
    <p :style="{width: pWidth}"
    >{{sliderValue}} and {{pWidth}}</p>
    <p>Window inner width: {{windowInnerWidth}}</p>
  </div>

</template>

<style scoped>
  p {
    background-color: #e5ffc7;
    border: 1px solid #000000;
    border-radius: 30px;
    /* don't wrap when width is not enough for content */
    white-space: nowrap;
  }
  .slider {
    width: 100%;
    height: 50px;
    /* make slider thumb bigger */
    -webkit-appearance: none;
    appearance: none;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    transition: opacity .2s;
    border-radius: 30px;
    padding: 0 10px;
  }
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #4CAF50;
    cursor: pointer;
    border-radius: 50%;

  }
</style>
