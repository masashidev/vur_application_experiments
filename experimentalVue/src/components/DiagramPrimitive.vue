<script setup>
// import { } from '';
  import {ref} from 'vue';
  import {reactive} from 'vue';
  // import { sliderValues } from './SliderVisualizerComponent.vue';


  let state = reactive({
    value: false
  });

  function toggleBinary() {
    state.value = !state.value;
    console.log('state', state.value)
  }

  let newTextContent = ref('');
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'black', 'white', 'grey'];
  let newElementColor = ref('');

  function addNewElement() {
    // add new p tag to the container
    const newElement = document.createElement('p');
    newElement.textContent = newTextContent.value;
    newElement.style.backgroundColor = newElementColor.value;
    newElement.style.width = '100px';
    newElement.style.height = '100px';
    newElement.style.cursor = 'pointer';
    newElement.addEventListener('click', toggleBinary);
    document.querySelector('.container').appendChild(newElement);
    // focus on input
    document.querySelector('input').focus();
    // clear input
    newTextContent.value = '';
  }
  // focus on input element when page loads or activates

</script>

<template>
  <div>
    <div class="container">
      <p @click="toggleBinary(), addNewElement()"
        class="change-state-in-vue">
        {{ state.value ? 'はい': 'いいえ'}}
      </p>
    </div>
    <input @keyup.enter="addNewElement"
    type="text" v-model="newTextContent" />
    {{newElementColor}}
    <div class="colors">
      <div v-for="color in colors" @click="newElementColor = color"
        :style="{backgroundColor: color}" class="color">
        <span>{{color}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .change-state-in-vue {
    cursor: pointer;
    display: inline;
    background-color: orange;
  }
  .colors{
    display: flex;
    flex-wrap: wrap;
    /* make font bold */
  }
  .color {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    /* make round */
    border-radius: 20px;
    cursor: pointer;
  }
  .color span {
    background-color: white;
    padding: 5px;
    border-radius: 10px;

  }

</style>
